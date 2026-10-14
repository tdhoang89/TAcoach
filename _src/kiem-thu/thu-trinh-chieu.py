# Cần: máy chủ đang chạy ở cổng 8771 (python -m http.server 8771 trong thư mục website), pip install playwright, có Google Chrome.
# Kiểm thử như người dùng thật: bấm qua toàn bộ bài trình chiếu ở tốc độ thật.
import sys, json, time
sys.stdout.reconfigure(encoding='utf-8')
from playwright.sync_api import sync_playwright

CHECK = r"""(() => {
  const S = DECKAPI.SL, d = S[DECKAPI.cur], el = d.el;
  const on = [...document.querySelectorAll('.s.is-on')].map(x => x.id);
  const out = [...document.querySelectorAll('.s.is-out')].map(x => x.id);
  const vis = getComputedStyle(el).visibility;
  // Mọi phần tử đáng lẽ phải hiện: kiểm tra độ mờ thực tế
  const hidden = [...el.querySelectorAll('[data-f].f-on, [data-in], h1, h2, .rows > *, .msg')].filter(x => {
    if (x.closest('[data-f]:not(.f-on)')) return false;
    let n = x, op = 1; while (n && n !== el) { op *= +getComputedStyle(n).opacity; n = n.parentElement; }
    return op < 0.5;
  }).map(x => (x.className || x.tagName).toString().slice(0, 40));
  const path = document.querySelector('.thread path').getAttribute('d') || '';
  const r = el.getBoundingClientRect();
  return { id: d.id, step: DECKAPI.step, steps: d.steps, on, out, vis, hidden: hidden.slice(0, 5), pathLen: path.length, scale: Math.round(r.width) };
})()"""

with sync_playwright() as p:
    b = p.chromium.launch(channel='chrome', headless=True)
    ctx = b.new_context(viewport={'width': 1440, 'height': 810})
    pg = ctx.new_page()
    errs = []
    pg.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
    pg.on('console', lambda m: errs.append('console: ' + m.text) if m.type in ('error', 'warning') else None)
    pg.goto('http://localhost:8771/trinh-chieu.html?mode=present', wait_until='networkidle')
    pg.wait_for_function('document.body.classList.contains("ready")'); pg.wait_for_timeout(1500)
    total = pg.evaluate('DECKAPI.SL.length')
    problems = []
    presses = 0
    t0 = time.time()
    # 1) Đi hết bài bằng phím → , mỗi lần chờ như người thật (0,9 giây)
    while True:
        st = pg.evaluate(CHECK)
        bad = []
        if st['vis'] != 'visible': bad.append('slide hiện tại không hiển thị')
        if st['hidden']: bad.append('phần tử bị ẩn: ' + ', '.join(st['hidden']))
        if len(st['on']) != 1: bad.append('số slide is-on = %d' % len(st['on']))
        if bad: problems.append((st['id'], st['step'], bad))
        if pg.evaluate('DECKAPI.cur') == total - 1 and st['step'] >= st['steps']:
            break
        pg.keyboard.press('ArrowRight'); presses += 1
        pg.wait_for_timeout(900)
        if presses > 400: problems.append(('loop', 0, ['quá nhiều lần bấm'])); break
    pg.wait_for_timeout(1500)
    end = pg.evaluate(CHECK)
    print(f'Đi hết {total} slide bằng {presses} lần bấm trong {time.time() - t0:.0f}s')
    print('Trạng thái cuối:', json.dumps(end, ensure_ascii=False))
    leftover = pg.evaluate("[...document.querySelectorAll('.s.is-out')].length")
    print('Slide còn kẹt is-out:', leftover)
    # 2) Bấm dồn dập: 25 lần, mỗi lần cách 60ms, rồi lùi dồn dập 25 lần
    pg.keyboard.press('Home'); pg.wait_for_timeout(1500)
    for k in range(25): pg.keyboard.press('ArrowRight'); pg.wait_for_timeout(60)
    pg.wait_for_timeout(1800)
    st = pg.evaluate(CHECK); print('Sau 25 lần bấm nhanh:', st['id'], 'bước', st['step'], 'ẩn:', st['hidden'], 'on:', st['on'], 'out:', st['out'])
    if st['hidden'] or len(st['on']) != 1 or st['out']: problems.append(('rapid-fwd', st['step'], [str(st)]))
    for k in range(25): pg.keyboard.press('ArrowLeft'); pg.wait_for_timeout(60)
    pg.wait_for_timeout(1800)
    st = pg.evaluate(CHECK); print('Sau 25 lần lùi nhanh:', st['id'], 'bước', st['step'], 'ẩn:', st['hidden'], 'on:', st['on'], 'out:', st['out'])
    if st['hidden'] or len(st['on']) != 1 or st['out']: problems.append(('rapid-back', st['step'], [str(st)]))
    # 3) Nhảy slide bằng số, mục lục, màn đen, đồng hồ, laser
    for k in '30': pg.keyboard.press(k)
    pg.keyboard.press('Enter'); pg.wait_for_timeout(1500)
    print('Gõ 30 Enter → slide', pg.evaluate('DECKAPI.cur') + 1)
    pg.keyboard.press('o'); pg.wait_for_timeout(400)
    print('Mục lục mở:', pg.evaluate("document.querySelector('.index').classList.contains('on')"), '· số mục:', pg.evaluate("document.querySelectorAll('.ix-c button').length"))
    pg.click('.ix-c button >> nth=5'); pg.wait_for_timeout(1500)
    print('Bấm mục 6 → slide', pg.evaluate('DECKAPI.cur') + 1, '· mục lục đóng:', not pg.evaluate("document.querySelector('.index').classList.contains('on')"))
    pg.keyboard.press('b'); print('Màn đen:', pg.evaluate("document.querySelector('.blank').classList.contains('on')")); pg.keyboard.press('b')
    pg.keyboard.press('t'); pg.wait_for_timeout(1200); print('Đồng hồ:', pg.evaluate("document.querySelector('.timer').textContent")); pg.keyboard.press('t')
    pg.keyboard.press('l'); print('Laser:', pg.evaluate("document.querySelector('.laser').classList.contains('on')")); pg.keyboard.press('l')
    # 4) Click chuột vào sân khấu = tiếp
    c0 = pg.evaluate('[DECKAPI.cur, DECKAPI.step]'); pg.mouse.click(700, 400); pg.wait_for_timeout(1200)
    print('Click sân khấu:', c0, '→', pg.evaluate('[DECKAPI.cur, DECKAPI.step]'))
    # 5) Chế độ tự học: nút Tiếp trong bảng, nút Copy
    ctx.grant_permissions(['clipboard-read', 'clipboard-write'], origin='http://localhost:8771')
    pg.goto('http://localhost:8771/trinh-chieu.html?mode=study#mo-bai-hoc', wait_until='networkidle')
    pg.wait_for_function('document.body.classList.contains("ready")'); pg.wait_for_timeout(1200)
    print('Tự học · tiêu đề bảng:', pg.inner_text('.panel h2'))
    pg.click('.panel .pp-a button'); pg.wait_for_timeout(300)
    clip = pg.evaluate('navigator.clipboard.readText()')
    print('Copy câu nhờ → clipboard bắt đầu bằng:', clip[:50])
    pg.click('.panel-nav .nx'); pg.wait_for_timeout(1500)
    print('Bấm Tiếp → bảng:', pg.inner_text('.panel h2'), '· slide', pg.evaluate('DECKAPI.cur') + 1, 'bước', pg.evaluate('DECKAPI.step'))
    vp = pg.evaluate("JSON.stringify(document.querySelector('.vp').getBoundingClientRect())"); print('Khung sân khấu khi tự học:', vp)
    # 6) Xem như phim: phát 20 giây, phải tự sang slide
    pg.goto('http://localhost:8771/trinh-chieu.html?mode=film#mo-8-ty', wait_until='networkidle')
    pg.wait_for_function('document.body.classList.contains("ready")'); pg.wait_for_timeout(800)
    pg.keyboard.press('Space'); pg.wait_for_timeout(22000)
    print('Phim sau 22 giây: slide', pg.evaluate('DECKAPI.cur') + 1, 'bước', pg.evaluate('DECKAPI.step'), '· phụ đề:', pg.inner_text('.caption')[:70])
    pg.keyboard.press('Space'); t1 = pg.evaluate('DECKAPI.cur'); pg.wait_for_timeout(6000)
    print('Dừng phim 6 giây: vẫn slide', pg.evaluate('DECKAPI.cur') == t1)
    print('LỖI JS:', errs[:10])
    print('VẤN ĐỀ:', json.dumps(problems[:20], ensure_ascii=False))
    b.close()
