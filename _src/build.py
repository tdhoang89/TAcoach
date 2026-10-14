# -*- coding: utf-8 -*-
"""
Build website "Làm thật, thấy thật" từ các file Markdown trong _src/content/.

Chạy (từ thư mục gốc của website):   python _src/build.py
Cần:                                 pip install markdown

Kết quả: các file .html ở thư mục gốc + assets/js/search-index.js + assets/js/prompts-data.js.
Sửa nội dung → sửa file .md trong _src/content/ → chạy lại script này → đẩy lên GitHub.
"""
import html
import json
import time
import re
import unicodedata
from datetime import date
from pathlib import Path

import markdown

SRC = Path(__file__).resolve().parent
ROOT = SRC.parent
CONTENT = SRC / "content"
TPL = SRC / "templates"
VER = str(int(time.time()))

SITE = {
    "name": "Làm thật, thấy thật",
    "tagline": "7 bậc đi xuống phễu, làm bạn với AI",
    "desc": "Trang tự học AI cho dân văn phòng: phễu khoảng cách, giao việc như giao cho đồng nghiệp, 7 bậc từ email 30 giây đến giao cả đầu việc cho AI agent, và 7 chuyên đề thực chiến.",
}
FOUNDATION = ["bat-dau", "khoang-cach", "giao-viec-nhu-dong-nghiep"]
DECK_ANCHOR = {"bat-dau": "tieu-de", "khoang-cach": "mo-pheu", "giao-viec-nhu-dong-nghiep": "dn-hoi"}
FOUND_SHORT = {"bat-dau": "Bắt đầu ở đây", "khoang-cach": "Khoảng cách AI", "giao-viec-nhu-dong-nghiep": "Giao việc như đồng nghiệp"}

TAG_LABELS = {
    "chung": "Chung", "luat": "Pháp lý", "ketoan": "Kế toán", "kinhdoanh": "Kinh doanh",
    "vanhanh": "Vận hành", "doisong": "Đời sống", "meta": "Hỏi thẳng",
}
ADMONITION_DEFAULT = {
    "view": "Góc nhìn", "result": "Bạn sẽ thấy", "check": "Dám hỏi lại", "try": "Thử ngay",
    "answer": "Xem đáp án", "tip": "Mẹo", "note": "Lưu ý", "warning": "Cẩn thận", "danger": "Đừng làm",
    "work": "💼 Công việc", "life": "🏡 Đời sống",
}
RESOURCE_PAGES = ["thu-vien-prompt", "an-toan", "cong-cu", "tu-dien", "hoi-dap", "thu-thach-7-ngay", "tai-lieu", "video-bang-code"]


# ----------------------------------------------------------------------
# Tiện ích
# ----------------------------------------------------------------------
def slugify(value, sep="-"):
    v = unicodedata.normalize("NFD", str(value)).replace("đ", "d").replace("Đ", "D")
    v = v.encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", sep, v).strip(sep) or "muc"


def strip_tags(s):
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", s, flags=re.S)
    s = re.sub(r"<[^>]+>", " ", s)
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def parse_front(text):
    meta, body = {}, text
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            for line in text[3:end].strip().splitlines():
                if ":" in line:
                    k, v = line.split(":", 1)
                    meta[k.strip()] = v.strip().strip('"').strip("'")
            body = text[end + 4:]
    return meta, body


# ----------------------------------------------------------------------
# Tiền xử lý Markdown
# ----------------------------------------------------------------------
PROMPT_START = re.compile(r"^(\s*)```prompt(?:\s+(.*))?$")


def take_prompts(body, slug, meta, prompts):
    out, lines, i, n, section = [], body.splitlines(), 0, 0, ""
    while i < len(lines):
        m = PROMPT_START.match(lines[i])
        if not m:
            if lines[i].startswith("## "):
                section = lines[i][3:].strip()
            out.append(lines[i])
            i += 1
            continue
        indent, header = m.group(1), (m.group(2) or "").strip()
        i += 1
        buf = []
        while i < len(lines) and not lines[i].strip().startswith("```"):
            ln = lines[i]
            buf.append(ln[len(indent):] if ln.startswith(indent) else ln.lstrip())
            i += 1
        i += 1  # bỏ dòng ``` đóng
        tags = re.findall(r"#([a-z]+)", header)
        title = re.sub(r"\s*#[a-z]+", "", header).strip()
        code = ""
        if " · " in title:
            first, rest = title.split(" · ", 1)
            if len(first) <= 8:
                code, title = first.strip(), rest.strip()
        text = "\n".join(buf).strip("\n")
        n += 1
        pid = f"p-{slug}-{n}"
        prompts.append({
            "id": pid, "page": slug, "pageTitle": meta.get("title", ""), "level": int(meta.get("level", 0) or 0),
            "kind": meta.get("kind", "page"), "code": code, "title": title or "Prompt", "tags": tags or ["chung"], "section": section,
            "text": text, "url": (f"{slug}.html#{pid}" if meta.get("kind") != "prompts" else f"thu-vien-prompt.html#{pid}"),
        })
        tag_html = "".join(f'<span class="tag">{TAG_LABELS.get(t, t)}</span>' for t in tags)
        body_html = html.escape(text).replace("\n", "&#10;")
        block = (f'<div class="prompt" id="{pid}" data-tags="{" ".join(tags)}">'
                 f'<div class="prompt-head"><span class="prompt-label">Prompt{(" · " + html.escape(code)) if code else ""}</span>'
                 f'<span class="prompt-title">{html.escape(title)}</span>{tag_html}</div>'
                 f'<pre class="prompt-body">{body_html}</pre><div class="prompt-actions"></div></div>')
        out += ["", indent + block, ""]
    return "\n".join(out)


def normalize_blocks(md):
    """:::cols, dòng trống trước danh sách/bảng (python-markdown cần)."""
    out, in_code, prev = [], False, ""
    for line in md.splitlines():
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
            out.append(line)
            prev = line
            continue
        if not in_code:
            if s == ":::cols":
                out += ["", '<div class="cols" markdown="1">', ""]
                prev = ""
                continue
            if s == ":::":
                out += ["", "</div>", ""]
                prev = ""
                continue
            is_list = bool(re.match(r"\s*([-*+]|\d+\.)\s", line))
            prev_list = bool(re.match(r"\s*([-*+]|\d+\.)\s", prev)) or (prev.startswith("    ") and not prev.strip().startswith("!!!"))
            is_table = s.startswith("|")
            prev_is_bang = prev.strip().startswith("!!!")
            indent_now = len(line) - len(line.lstrip())
            indent_prev = len(prev) - len(prev.lstrip())
            if prev.strip() and not prev_is_bang and (
                (is_list and not prev_list and indent_now <= indent_prev) or (is_table and not prev.strip().startswith("|"))
            ):
                out.append(" " * indent_now if indent_now else "")
        out.append(line)
        prev = line
    return "\n".join(out)


# ----------------------------------------------------------------------
# Hậu xử lý HTML
# ----------------------------------------------------------------------
def convert_answers(h):
    """<div class="admonition answer"> → <details class="answer">"""
    out, i = [], 0
    pat = re.compile(r'<div class="admonition answer">\s*<p class="admonition-title">(.*?)</p>', re.S)
    while True:
        m = pat.search(h, i)
        if not m:
            out.append(h[i:])
            break
        out.append(h[i:m.start()])
        depth, j = 1, m.end()
        while depth and j < len(h):
            o = h.find("<div", j)
            c = h.find("</div>", j)
            if c == -1:
                break
            if o != -1 and o < c:
                depth += 1
                j = o + 4
            else:
                depth -= 1
                j = c + 6
        inner = h[m.end():j - 6]
        out.append(f'<details class="answer"><summary><span>{m.group(1)}</span></summary><div class="answer-body">{inner}</div></details>')
        i = j
    return "".join(out)


def postprocess(h, slug):
    def adm(m):
        typ, title = m.group(1), m.group(2)
        if title.strip().lower() == typ.split()[0].lower():
            title = ADMONITION_DEFAULT.get(typ.split()[0], title)
        return f'<div class="admonition {typ}">\n<p class="admonition-title">{title}</p>'
    h = re.sub(r'<div class="admonition ([a-z ]+)">\s*<p class="admonition-title">(.*?)</p>', adm, h)
    h = convert_answers(h)
    counter = {"n": 0}

    def task(m):
        counter["n"] += 1
        return (f'<li class="task"><label><input type="checkbox" data-task="{slug}:{counter["n"]}">'
                f'<span class="box" aria-hidden="true"></span><span class="txt">{m.group(1)}</span></label></li>')
    h = re.sub(r"<li>\s*\[ \]\s*(.*?)</li>", task, h, flags=re.S)
    h = re.sub(r"<ul>(\s*<li class=\"task\">)", r'<ul class="tasks">\1', h)
    h = re.sub(r'<h3 id="([^"]+)">Bước\s*(\d+)\s*·\s*(.*?)</h3>',
               lambda m: f'<h3 id="{m.group(1)}" class="step"><span class="step-n">{int(m.group(2)):02d}</span><span class="step-t">{m.group(3)}</span></h3>', h)
    h = re.sub(r"<table>", '<div class="table-wrap"><table>', h)
    h = re.sub(r"</table>", "</table></div>", h)
    h = re.sub(r'<a ([^>]*?)href="(https?://[^"]+)"', r'<a \1href="\2" target="_blank" rel="noopener"', h)
    return h, counter["n"]


def render_md(body, slug, meta, prompts):
    body = take_prompts(body, slug, meta, prompts)
    body = normalize_blocks(body)
    toc_ext = {"slugify": lambda v, s: slugify(v), "toc_depth": "2-3"}
    md = markdown.Markdown(extensions=["tables", "fenced_code", "md_in_html", "attr_list", "admonition", "sane_lists", "toc"],
                           extension_configs={"toc": toc_ext})
    h = md.convert(body)
    h, ntask = postprocess(h, slug)
    toc = [(t["id"], strip_tags(t["name"])) for t in md.toc_tokens if t["level"] == 2]
    return h, toc, ntask


# ----------------------------------------------------------------------
# Chỉ mục tìm kiếm
# ----------------------------------------------------------------------
def index_sections(h, slug, title, kind, entries):
    parts = re.split(r'(<h[23][^>]*id="[^"]+"[^>]*>.*?</h[23]>)', h, flags=re.S)
    cur_id, cur_head = "", title
    for part in parts:
        m = re.match(r'<h([23])[^>]*id="([^"]+)"[^>]*>(.*?)</h[23]>', part, flags=re.S)
        if m:
            head_html = re.sub(r'<span class="step-n">0?(\d+)</span>', r"Bước \1 · ", m.group(3))
            cur_id, cur_head = m.group(2), strip_tags(head_html).replace("·  ", "· ")
            continue
        text = strip_tags(re.sub(r'<div class="prompt".*?</div></div>', " ", part, flags=re.S))
        if len(text) < 20 and not cur_id:
            continue
        entries.append({"t": title, "h": cur_head, "u": f"{slug}.html" + (f"#{cur_id}" if cur_id else ""), "x": text[:420], "k": kind})


# ----------------------------------------------------------------------
# Template
# ----------------------------------------------------------------------
def tpl(name):
    return (TPL / name).read_text(encoding="utf-8")


def fill(s, **kw):
    kw.setdefault("VER", VER)
    for k, v in kw.items():
        s = s.replace("{{" + k + "}}", str(v))
    return s


def steps_html(lv):
    return "".join(f'<i class="{"on" if k == lv else ("done" if k < lv else "")}"></i>' for k in range(1, 8))


def nav_html(lessons, active):
    items = "".join(
        f'<a href="{l["slug"]}.html" class="mega-item{" is-active" if active == l["slug"] else ""}">'
        f'<span class="mega-n">N°{l["level"]:02d}</span><span class="mega-t">{html.escape(l["title"])}</span>'
        f'<span class="mega-h">{html.escape(l["how"])}</span></a>' for l in lessons)
    return items


TOPICS_NAV = []
FOUND_NAV = []


def page_shell(title, desc, body, lessons, resources, active="", extra_head="", extra_js="", body_class=""):
    base = tpl("base.html")
    res_links = "".join(f'<a href="{r["slug"]}.html"{" class=is-active" if active == r["slug"] else ""}>{html.escape(r["short"])}</a>' for r in resources)
    mobile = "".join(f'<a href="{l["slug"]}.html"><small>N°{l["level"]:02d}</small>{html.escape(l["title"])}</a>' for l in lessons)
    mobile_res = "".join(f'<a href="{r["slug"]}.html">{html.escape(r["short"])}</a>' for r in resources)
    topics = "".join(f'<a href="{t["slug"]}.html" class="mega-item{" is-active" if active == t["slug"] else ""}"><span class="mega-n">CHUYÊN ĐỀ {i + 1:02d}</span><span class="mega-t">{html.escape(t["title"])}</span><span class="mega-h">{html.escape(t["time"])}</span></a>' for i, t in enumerate(TOPICS_NAV))
    mobile_topics = "".join(f'<a href="{t["slug"]}.html"><small>CĐ {i + 1:02d}</small>{html.escape(t["title"])}</a>' for i, t in enumerate(TOPICS_NAV))
    start = "".join(f'<a href="{f["slug"]}.html" class="mega-item{" is-active" if active == f["slug"] else ""}"><span class="mega-n">{html.escape(f["eyebrow"]).upper()}</span><span class="mega-t">{html.escape(f["title"])}</span><span class="mega-h">{html.escape(f["summary"][:90])}…</span></a>' for f in FOUND_NAV)
    mobile_start = "".join(f'<a href="{f["slug"]}.html"><small>NỀN TẢNG</small>{html.escape(FOUND_SHORT.get(f["slug"], f["title"]))}</a>' for f in FOUND_NAV)
    return fill(base, TITLE=html.escape(title), DESC=html.escape(desc), BODY=body, MEGA=nav_html(lessons, active),
                RES=res_links, MOBILE_LESSONS=mobile, MOBILE_RES=mobile_res, EXTRA_HEAD=extra_head, EXTRA_JS=extra_js,
                TOPICS=topics, MOBILE_TOPICS=mobile_topics, START=start, MOBILE_START=mobile_start,
                BODY_CLASS=body_class, YEAR=date.today().year)


def toc_html(toc, ntask):
    rows = "".join(f'<li><a href="#{i}">{html.escape(t)}</a></li>' for i, t in toc)
    prog = (f'<div class="toc-progress" data-progress-of="{{SLUG}}" data-total="{ntask}">'
            f'<span class="toc-progress-bar"><i></i></span><span class="toc-progress-txt">0/{ntask} đã tích</span></div>') if ntask else ""
    return f'<nav class="toc" aria-label="Mục lục bài"><p class="toc-label">Trong bài này</p><ol>{rows}</ol>{prog}<div class="toc-tools"><button type="button" data-fs="-1" aria-label="Chữ nhỏ hơn">A−</button><button type="button" data-fs="1" aria-label="Chữ lớn hơn">A+</button><button type="button" onclick="window.print()">In bài</button></div></nav>'


# ----------------------------------------------------------------------
# Build
# ----------------------------------------------------------------------
def main():
    prompts, entries, pages = [], [], {}
    for f in sorted(CONTENT.glob("*.md")):
        meta, body = parse_front(f.read_text(encoding="utf-8"))
        slug = meta.get("slug") or f.stem
        meta["slug"] = slug
        h, toc, ntask = render_md(body, slug, meta, prompts)
        words = len(strip_tags(h).split())
        pages[slug] = dict(meta=meta, html=h, toc=toc, ntask=ntask, words=words)

    lessons = sorted([dict(slug=s, level=int(p["meta"]["level"]), title=p["meta"]["title"], how=p["meta"].get("how", ""),
                           summary=p["meta"].get("summary", ""), time=p["meta"].get("time", ""), tools=p["meta"].get("tools", ""),
                           free=p["meta"].get("free", ""), ntask=p["ntask"])
                      for s, p in pages.items() if p["meta"].get("kind") == "lesson"], key=lambda x: x["level"])
    topics = sorted([dict(slug=s, title=p["meta"]["title"], summary=p["meta"].get("summary", ""), time=p["meta"].get("time", ""),
                          tools=p["meta"].get("tools", ""), free=p["meta"].get("free", ""), order=int(p["meta"].get("order", 99) or 99), ntask=p["ntask"])
                     for s, p in pages.items() if p["meta"].get("kind") == "topic"], key=lambda x: x["order"])
    TOPICS_NAV[:] = topics
    FOUND_NAV[:] = [dict(slug=s, title=pages[s]["meta"]["title"], eyebrow=pages[s]["meta"].get("eyebrow", "Nền tảng"),
                         summary=pages[s]["meta"].get("summary", "")) for s in FOUNDATION if s in pages]
    short = {"thu-vien-prompt": "Thư viện prompt", "an-toan": "An toàn & tỉnh táo", "cong-cu": "Bản đồ công cụ",
             "tu-dien": "Từ điển AI", "hoi-dap": "Hỏi đáp", "thu-thach-7-ngay": "Thử thách 7 ngày",
             "tai-lieu": "Tải tài liệu", "video-bang-code": "Video bằng code"}
    resources = []
    for s in RESOURCE_PAGES:
        if s in pages or s in ("thu-vien-prompt", "video-bang-code"):
            m = pages.get(s, {}).get("meta", {})
            resources.append(dict(slug=s, short=short[s], title=m.get("title", short[s]), summary=m.get("summary", "")))

    # ---- Trang nội dung ----
    for slug, p in pages.items():
        meta = p["meta"]
        kind = meta.get("kind", "page")
        if kind == "prompts":
            continue
        title = meta.get("title", slug)
        read_min = max(3, round(p["words"] / 200))
        toc = toc_html(p["toc"], p["ntask"]).replace("{SLUG}", slug)
        first = p["toc"][0][0] if p["toc"] else "main"
        if kind == "lesson":
            lv = int(meta["level"])
            prev_l = next((l for l in lessons if l["level"] == lv - 1), None)
            next_l = next((l for l in lessons if l["level"] == lv + 1), None)
            hero = fill(tpl("lesson-hero.html"), N=f"{lv:02d}", LV=lv, TITLE=html.escape(title), HOW=html.escape(meta.get("how", "")),
                        SUMMARY=html.escape(meta.get("summary", "")), TIME=html.escape(meta.get("time", f"{read_min} phút")),
                        TOOLS=html.escape(meta.get("tools", "")), FREE=html.escape(meta.get("free", "")), READ=read_min, SLUG=slug,
                        NTASK=p["ntask"], STEPS=steps_html(lv), FIRST=first)
            pager = '<nav class="pager">'
            pager += (f'<a class="pager-prev" href="{prev_l["slug"]}.html"><small>← Bậc {prev_l["level"]:02d}</small><span>{html.escape(prev_l["title"])}</span></a>'
                      if prev_l else '<a class="pager-prev" href="giao-viec-nhu-dong-nghiep.html"><small>← Nền tảng</small><span>Giao việc như giao cho đồng nghiệp</span></a>')
            pager += (f'<a class="pager-next" href="{next_l["slug"]}.html"><small>Bậc {next_l["level"]:02d} →</small><span>{html.escape(next_l["title"])}</span></a>'
                      if next_l else '<a class="pager-next" href="thu-thach-7-ngay.html"><small>Tiếp theo →</small><span>Thử thách 7 ngày, 7 lần nhờ</span></a>')
            pager += "</nav>"
            body = f'{hero}<div class="doc"><aside class="doc-side">{toc}</aside><article class="prose" data-slug="{slug}">{p["html"]}</article></div>{pager}'
            desc = f'Bậc {lv}: {title}. {meta.get("summary", "")}'
        else:
            meta_html, cta = "", ""
            if kind == "topic":
                ti = next((k for k, t in enumerate(topics) if t["slug"] == slug), 0)
                meta_html = (f'<div class="lhero-meta" data-reveal><div><span class="label">Thời gian</span><b>{html.escape(meta.get("time", ""))}</b></div>'
                             f'<div><span class="label">Công cụ</span><b>{html.escape(meta.get("tools", ""))}</b></div>'
                             f'<div><span class="label">Bản miễn phí</span><b>{html.escape(meta.get("free", ""))}</b></div>'
                             f'<div><span class="label">Tiến độ</span><b data-hero-progress="{slug}" data-total="{p["ntask"]}">0/{p["ntask"]}</b></div></div>')
                eyebrow = f'Chuyên đề {ti + 1:02d} / {len(topics):02d}'
            else:
                eyebrow = meta.get("eyebrow", "Tài nguyên")
            if slug in DECK_ANCHOR:
                cta = (f'<div class="lhero-cta" data-reveal><a class="btn btn-solid" href="#{first}">Bắt đầu đọc <span class="arr">↓</span></a>'
                       f'<a class="btn" href="trinh-chieu.html?mode=study#{DECK_ANCHOR[slug]}">Xem phần trình chiếu <span class="arr">↗</span></a></div>')
            read_txt = f"{read_min} phút đọc" if kind == "topic" else meta.get("time", f"{read_min} phút đọc")
            hero = fill(tpl("page-hero.html"), EYEBROW=html.escape(eyebrow), TITLE=html.escape(title),
                        SUMMARY=html.escape(meta.get("summary", "")), READ=read_txt, META=meta_html, CTA=cta)
            pager = ""
            if kind == "topic":
                ti = next((k for k, t in enumerate(topics) if t["slug"] == slug), 0)
                pt = topics[ti - 1] if ti > 0 else None
                nt = topics[ti + 1] if ti + 1 < len(topics) else None
                pager = '<nav class="pager">'
                pager += (f'<a class="pager-prev" href="{pt["slug"]}.html"><small>← Chuyên đề {ti:02d}</small><span>{html.escape(pt["title"])}</span></a>' if pt
                          else '<a class="pager-prev" href="cap-7.html"><small>← Bậc 07</small><span>Giao cả đầu việc cho AI agent</span></a>')
                pager += (f'<a class="pager-next" href="{nt["slug"]}.html"><small>Chuyên đề {ti + 2:02d} →</small><span>{html.escape(nt["title"])}</span></a>' if nt
                          else '<a class="pager-next" href="thu-thach-7-ngay.html"><small>Tiếp theo →</small><span>Thử thách 7 ngày, 7 lần nhờ</span></a>')
                pager += '</nav>'
            elif slug in FOUNDATION:
                fi = FOUNDATION.index(slug)
                pf = FOUNDATION[fi - 1] if fi > 0 else None
                nf = FOUNDATION[fi + 1] if fi + 1 < len(FOUNDATION) else None
                pager = '<nav class="pager">'
                pager += (f'<a class="pager-prev" href="{pf}.html"><small>← Nền tảng</small><span>{html.escape(pages[pf]["meta"]["title"])}</span></a>' if pf
                          else '<a class="pager-prev" href="index.html"><small>← Trang chủ</small><span>Làm thật, thấy thật</span></a>')
                pager += (f'<a class="pager-next" href="{nf}.html"><small>Nền tảng →</small><span>{html.escape(pages[nf]["meta"]["title"])}</span></a>' if nf
                          else '<a class="pager-next" href="cap-1.html"><small>Bậc 01 →</small><span>Email khó, viết lại trong 30 giây</span></a>')
                pager += '</nav>'
            body = f'{hero}<div class="doc"><aside class="doc-side">{toc}</aside><article class="prose" data-slug="{slug}">{p["html"]}</article></div>{pager}'
            desc = meta.get("summary", SITE["desc"])
        out = page_shell(f'{title} · {SITE["name"]}', desc, body, lessons, resources, active=slug,
                         body_class="page-lesson" if kind == "lesson" else "page-page")
        (ROOT / f"{slug}.html").write_text(out, encoding="utf-8")
        index_sections(p["html"], slug, title, "lesson" if kind == "lesson" else ("topic" if kind == "topic" else "page"), entries)

    # ---- Trang chủ ----
    cards = []
    for l in lessons:
        cards.append(fill(tpl("home-card.html"), N=f'{l["level"]:02d}', SLUG=l["slug"], TITLE=html.escape(l["title"]),
                          HOW=html.escape(l["how"]), SUMMARY=html.escape(l["summary"]), TIME=html.escape(l["time"]),
                          TOOLS=html.escape(l["tools"]), FREE=html.escape(l["free"]), NTASK=l["ntask"], STEPS=steps_html(l["level"]),
                          TONE="ink" if l["level"] % 2 else "paper"))
    tcards = "".join(f'<a class="topic" href="{t["slug"]}.html" data-reveal><span class="topic-n">{i + 1:02d}</span><h3>{html.escape(t["title"])}</h3>'
                     f'<p>{html.escape(t["summary"])}</p><span class="topic-m"><span>{html.escape(t["time"])}</span><span class="look-prog" data-card-progress="{t["slug"]}" data-total="{t["ntask"]}"></span><span class="topic-a">↗</span></span></a>'
                     for i, t in enumerate(topics))
    rows = "".join(f'<a class="res-row" href="{r["slug"]}.html"><span class="res-n">{i + 1:02d}</span><span class="res-t">{html.escape(r["short"])}</span>'
                   f'<span class="res-s">{html.escape(r["summary"])}</span><span class="res-a">↗</span></a>' for i, r in enumerate(resources))
    home = fill(tpl("home.html"), CARDS="".join(cards), TOPICS_GRID=tcards, RESOURCES=rows, NLESSONS=len(lessons), NPROMPTS=len(prompts), NTOPICS=len(topics))
    (ROOT / "index.html").write_text(page_shell(f'{SITE["name"]} · {SITE["tagline"]}', SITE["desc"], home, lessons, resources,
                                                active="index", body_class="page-home"),
                                     encoding="utf-8")
    entries.append({"t": "Trang chủ", "h": "Làm thật, thấy thật", "u": "index.html", "x": SITE["desc"], "k": "page"})

    # ---- Thư viện prompt ----
    lib = fill(tpl("thu-vien-prompt.html"), NPROMPTS=len(prompts))
    (ROOT / "thu-vien-prompt.html").write_text(page_shell(f'Thư viện prompt · {SITE["name"]}', f"{len(prompts)} câu mở lời để copy, lọc theo bài, ngành và việc cần làm.",
                                                          lib, lessons, resources, active="thu-vien-prompt", body_class="page-library"), encoding="utf-8")
    entries.append({"t": "Thư viện prompt", "h": "Thư viện prompt", "u": "thu-vien-prompt.html", "x": "Tất cả câu mở lời, lọc theo bài và ngành, copy hoặc mở thẳng trong ChatGPT, Claude.", "k": "page"})

    # ---- Video bằng code ----
    vid = tpl("video-bang-code.html")
    (ROOT / "video-bang-code.html").write_text(page_shell(f'Video bằng code · {SITE["name"]}', "Thủ thuật làm video bằng code với Claude Code và Remotion, kèm 3 bộ phim được viết hoàn toàn bằng code ngay trên trang.",
                                                          vid, lessons, resources, active="video-bang-code", body_class="page-video",
                                                          extra_js=f'<script src="assets/js/code-video.js?v={VER}" defer></script><script src="assets/js/films.js?v={VER}" defer></script>'), encoding="utf-8")
    index_sections(vid, "video-bang-code", "Video bằng code", "page", entries)

    # ---- 404 ----
    (ROOT / "404.html").write_text(page_shell(f'Không tìm thấy · {SITE["name"]}', SITE["desc"], tpl("404.html"), lessons, resources, body_class="page-404"), encoding="utf-8")

    # ---- Trình chiếu ----
    (ROOT / "trinh-chieu.html").write_text(fill(tpl("trinh-chieu.html")), encoding="utf-8")
    entries.append({"t": "Trình chiếu", "h": "Bài trình chiếu: trình chiếu, tự học, xem như phim", "u": "trinh-chieu.html?mode=study",
                    "x": "Bài chia sẻ đầy đủ dạng trình chiếu: phễu khoảng cách, giao việc như đồng nghiệp, 7 bậc. Có chế độ tự học (bài đọc, câu nhờ để copy) và xem như phim (tự chạy, có phụ đề).", "k": "page"})

    # ---- Prompt thuộc trang "prompts" (bổ sung) ----
    for p in prompts:
        if p["kind"] == "prompts":
            entries.append({"t": "Thư viện prompt", "h": p["title"], "u": p["url"], "x": p["text"][:300], "k": "prompt"})
        else:
            entries.append({"t": p["pageTitle"], "h": "Prompt: " + p["title"], "u": p["url"], "x": p["text"][:300], "k": "prompt"})

    order = {"lesson": 0, "page": 1, "topic": 1, "prompts": 2}
    prompts.sort(key=lambda p: (order.get(p["kind"], 1), p["level"], p["page"]))
    (ROOT / "assets/js/search-index.js").write_text("window.SEARCH_INDEX=" + json.dumps(entries, ensure_ascii=False) + ";", encoding="utf-8")
    (ROOT / "assets/js/prompts-data.js").write_text(
        "window.PROMPTS=" + json.dumps(prompts, ensure_ascii=False) + ";window.LESSONS=" + json.dumps(lessons, ensure_ascii=False)
        + ";window.TOPICS=" + json.dumps([dict(slug=t["slug"], title=t["title"]) for t in topics], ensure_ascii=False) + ";",
        encoding="utf-8")
    print(f"✓ {len(pages)} file nội dung · {len(lessons)} bậc · {len(topics)} chuyên đề · {len(prompts)} prompt · {len(entries)} mục tìm kiếm")


if __name__ == "__main__":
    main()
