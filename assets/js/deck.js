/* =====================================================================
   LÀM THẬT, THẤY THẬT · V2 · deck.js
   Engine trình chiếu "một cảnh quay liền":
   - Sân khấu cố định 1920×1080, co giãn theo màn hình
   - Sợi chỉ đỏ: một đường duy nhất chạy xuyên suốt, biến hình theo từng slide
   - Chuyển cảnh: mở mống mắt từ đầu kim, trôi chữ, đẩy camera, phần tử dùng chung bay sang slide sau
   - 3 chế độ: Trình chiếu · Tự học (có bảng bài đọc) · Xem như phim (tự chạy, có phụ đề)
   Nội dung slide nằm ở deck-content.js (window.DECK).
   ===================================================================== */
(function () {
  'use strict';
  const W = 1920, H = 1080, N = 150;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const EZ = {
    io: p => (p < .5 ? 16 * p ** 5 : 1 - Math.pow(-2 * p + 2, 5) / 2),
    out: p => 1 - Math.pow(1 - p, 4),
    inOut3: p => (p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2),
  };
  const CB = { io: 'cubic-bezier(.77,0,.18,1)', out: 'cubic-bezier(.16,1,.3,1)', in: 'cubic-bezier(.7,0,.84,0)' };
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bỏ qua */ } },
  };
  const params = new URLSearchParams(location.search);
  const DECK = window.DECK;
  const CFG = Object.assign({ links: {} }, window.DECK_CONFIG || {});
  if (!DECK) { document.body.textContent = 'Thiếu deck-content.js'; return; }
  const VIEW = params.get('view') || '';
  const EMBED = VIEW === 'embed';
  if (VIEW === 'speaker') { speakerView(); return; }
  if (EMBED) document.body.classList.add('embed');

  /* =================================================================
     Dựng DOM
     ================================================================= */
  const body = document.body;
  const vp = $('.vp'), stage = $('.stage');
  const SL = DECK.slides.filter(d => !d.when || d.when(CFG));
  const CH = DECK.chapters;
  const chOf = id => CH.find(c => c.id === id) || { id, name: id, short: id };
  const fill = s => String(s).replace(/\{\{(\w+)\}\}/g, (m, k) => (CFG[k] !== undefined ? CFG[k] : ''));

  SL.forEach((d, i) => {
    const el = document.createElement('section');
    el.className = `s ${d.tone || 'ink'} ${d.cls || ''}`;
    el.id = 's-' + d.id;
    el.setAttribute('role', 'group');
    el.setAttribute('aria-roledescription', 'slide');
    el.setAttribute('aria-label', `${i + 1}/${SL.length}: ${d.title}`);
    el.innerHTML = fill(typeof d.html === 'function' ? d.html(CFG) : d.html);
    stage.insertBefore(el, $('.thread', stage));
    d.el = el; d.i = i;
    d.steps = Math.max(0, ...$$('[data-f]', el).map(x => +x.dataset.f), ...$$('[data-on]', el).flatMap(x => x.dataset.on.split(/\s+/).map(p => +p.split(':')[1] || 0)));
    if (d.extraSteps) d.steps += d.extraSteps;
  });

  /* Thời lượng "phim" của từng slide: dựa vào phụ đề */
  function syll(s) { return (s.match(/\S+/g) || []).length; }
  SL.forEach(d => {
    const caps = d.cap || (d.note ? d.note.split(/(?<=[.!?…])\s+(?=[A-ZĐÂĂÊÔƠƯÁÀẢÃẠ"“0-9«»])/u) : [d.title]);
    d.caps = caps.map(c => c.trim()).filter(Boolean);
    d.capDur = d.caps.map(c => clamp(syll(c.replace(/^»+/, '')) / 3.1, 2.2, 9.5));
    d.dur = Math.max(d.min || 3.2, d.capDur.reduce((a, b) => a + b, 0)) + 0.9;
  });
  let acc = 0;
  SL.forEach(d => { d.t0 = acc; acc += d.dur; });
  const TOTAL = acc;
  const fmtT = t => { t = Math.max(0, Math.floor(t)); const h = Math.floor(t / 3600), m = Math.floor(t % 3600 / 60), s = t % 60; return (h ? h + ':' : '') + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0'); };

  /* Masthead tự động: timecode */
  SL.forEach(d => { $$('[data-tc]', d.el).forEach(x => { x.textContent = '00:' + fmtT(d.t0); }); });

  /* =================================================================
     Tách chữ (để từng từ trồi lên)
     ================================================================= */
  function split(el) {
    if (el.dataset.split) return;
    el.dataset.split = '1';
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(p => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.append(p); return; }
            const w = document.createElement('span'); w.className = 'w';
            const s = document.createElement('span'); s.textContent = p;
            w.append(s); frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains('nosplit') && n.tagName !== 'BR') walk(n);
      });
    };
    walk(el);
  }
  $$('.split', stage).forEach(split);

  /* =================================================================
     Co giãn sân khấu
     ================================================================= */
  let scale = 1;
  function fit() {
    const r = vp.getBoundingClientRect();
    scale = Math.min(r.width / W, r.height / H);
    stage.style.transform = `translate(${-W * scale / 2}px, ${-H * scale / 2}px) scale(${scale})`;
    stage.style.left = r.width / 2 + 'px'; stage.style.top = r.height / 2 + 'px';
    stage.style.position = 'absolute';
  }
  addEventListener('resize', () => { fit(); refreshThread(); });

  /* Hạt phim: sinh nhiễu bằng canvas */
  (function grain() {
    const g = $('.grain', stage); if (!g) return;
    const c = document.createElement('canvas'); c.width = c.height = 160;
    const x = c.getContext('2d'), im = x.createImageData(160, 160);
    for (let i = 0; i < im.data.length; i += 4) { const v = Math.random() * 255; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255; }
    x.putImageData(im, 0, 0);
    g.style.backgroundImage = `url(${c.toDataURL()})`;
  })();

  /* =================================================================
     Hoạt ảnh: quản lý để có thể "tua nhanh" khi bấm liên tục
     ================================================================= */
  const running = new Set();
  const timers = new Set();
  let SPEED = REDUCED ? 0.01 : 1;
  function anim(el, kf, o) {
    if (!el || !el.animate) return null;
    const a = el.animate(kf, Object.assign({ fill: 'backwards', easing: CB.out }, o, { duration: Math.max(1, (o.duration || 600) * SPEED), delay: (o.delay || 0) * SPEED }));
    running.add(a);
    a.finished.then(() => running.delete(a), () => running.delete(a));
    return a;
  }
  function later(fn, ms) { const t = setTimeout(() => { timers.delete(t); fn(); }, ms * SPEED); timers.add(t); return t; }
  function finishAll() {
    timers.forEach(t => { clearTimeout(t); }); const pend = [...timers]; timers.clear(); void pend;
    running.forEach(a => { try { a.finish(); } catch (e) { /* bỏ qua */ } });
    running.clear();
    typers.forEach(f => f()); typers.clear();
    thread.finish();
    pendingFns.forEach(f => f()); pendingFns.clear();
  }
  const pendingFns = new Set();

  /* =================================================================
     Đo vị trí trong hệ toạ độ sân khấu (không tính transform)
     ================================================================= */
  function box(el) {
    let x = 0, y = 0, n = el;
    while (n && n !== stage && !(n.classList && n.classList.contains('pstage'))) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight, cx: x + el.offsetWidth / 2, cy: y + el.offsetHeight / 2, r: x + el.offsetWidth, b: y + el.offsetHeight };
  }
  /* Đo phần chữ thực (dòng cuối) để gạch chân đúng độ dài chữ */
  function textBox(el) {
    const b = box(el);
    try {
      // Đo trong hệ toạ độ của chính slide (slide có thể đang bị phóng/thu khi chuyển cảnh)
      const sl = el.closest('.s') || stage, sr = sl.getBoundingClientRect(), k = sr.width / W || scale;
      // Chữ đã tách (.w) thì đo khung bọc (không bị transform), còn lại đo vùng chữ
      const ws = el.classList && el.classList.contains('w') ? [el] : [...el.querySelectorAll('.w')];
      let rects;
      if (ws.length) rects = ws.map(w => { const r = w.getBoundingClientRect(), s = getComputedStyle(w), pt = parseFloat(s.paddingTop) * k, pb = parseFloat(s.paddingBottom) * k, pl = parseFloat(s.paddingLeft) * k; return { left: r.left + pl, right: r.right - pl, top: r.top + pt, bottom: r.bottom - pb, width: r.width }; });
      else { const rg = document.createRange(); rg.selectNodeContents(el); rects = [...rg.getClientRects()].filter(r => r.width > 2); }
      if (!rects.length) return b;
      const conv = r => ({ x: (r.left - sr.left) / k, y: (r.top - sr.top) / k, r: (r.right - sr.left) / k, b: (r.bottom - sr.top) / k });
      const all = rects.map(conv);
      const lastB = Math.max(...all.map(r => r.b));
      const line = all.filter(r => r.b > lastB - 20);
      // Bỏ ảnh hưởng của transform đang chạy: so box layout với rect thực của khối bao gần nhất
      let ref = el;
      while (ref.parentElement && ref !== stage && getComputedStyle(ref).display === 'inline') ref = ref.parentElement;
      const rb = box(ref), er = ref.getBoundingClientRect();
      const dy = rb.y - (er.top - sr.top) / k, dx = rb.x - (er.left - sr.left) / k;
      return { x: Math.min(...all.map(r => r.x)) + dx, y: Math.min(...all.map(r => r.y)) + dy, r: Math.max(...all.map(r => r.r)) + dx, b: lastB + dy,
        lx: Math.min(...line.map(r => r.x)) + dx, lr: Math.max(...line.map(r => r.r)) + dx };
    } catch (e) { return b; }
  }

  /* =================================================================
     SỢI CHỈ ĐỎ
     ================================================================= */
  const svg = $('.thread', stage);
  const pathEl = $('path', svg), needle = $('.needle', svg), halo = $('.halo', svg);
  function resample(pts, n = N) {
    if (!pts || !pts.length) pts = [[W / 2, H + 40]];
    if (pts.length === 1) return Array.from({ length: n }, () => [pts[0][0], pts[0][1]]);
    const L = [0];
    for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const tot = L[L.length - 1];
    if (!tot) return Array.from({ length: n }, () => [pts[0][0], pts[0][1]]);
    const out = []; let j = 0;
    for (let k = 0; k < n; k++) {
      const d = tot * k / (n - 1);
      while (j < L.length - 2 && L[j + 1] < d) j++;
      const seg = (L[j + 1] - L[j]) || 1, t = clamp((d - L[j]) / seg);
      out.push([lerp(pts[j][0], pts[j + 1][0], t), lerp(pts[j][1], pts[j + 1][1], t)]);
    }
    return out;
  }
  function pathD(pts, frac) {
    const n = pts.length, f = clamp(frac) * (n - 1);
    if (f < .02) return '';
    const i = Math.floor(f), t = f - i;
    const P = pts.slice(0, i + 1);
    if (i < n - 1) P.push([lerp(pts[i][0], pts[i + 1][0], t), lerp(pts[i][1], pts[i + 1][1], t)]);
    let d = `M${P[0][0].toFixed(1)} ${P[0][1].toFixed(1)}`;
    for (let k = 1; k < P.length - 1; k++) {
      const [x, y] = P[k], [x2, y2] = P[k + 1];
      d += ` Q${x.toFixed(1)} ${y.toFixed(1)} ${((x + x2) / 2).toFixed(1)} ${((y + y2) / 2).toFixed(1)}`;
    }
    const e = P[P.length - 1];
    d += ` L${e[0].toFixed(1)} ${e[1].toFixed(1)}`;
    return d;
  }
  function headOf(pts, frac) {
    const n = pts.length, f = clamp(frac) * (n - 1), i = Math.floor(f), t = f - i;
    if (i >= n - 1) return pts[n - 1];
    return [lerp(pts[i][0], pts[i + 1][0], t), lerp(pts[i][1], pts[i + 1][1], t)];
  }
  const thread = {
    pts: resample([[W / 2, H + 60]]), frac: 0, raf: 0, tw: null,
    render() {
      pathEl.setAttribute('d', pathD(this.pts, this.frac));
      const h = headOf(this.pts, this.frac), vis = this.frac > .03 && h[0] > -50 && h[0] < W + 50 && h[1] > -50 && h[1] < H + 50;
      needle.setAttribute('cx', h[0].toFixed(1)); needle.setAttribute('cy', h[1].toFixed(1));
      halo.setAttribute('cx', h[0].toFixed(1)); halo.setAttribute('cy', h[1].toFixed(1));
      needle.style.opacity = halo.style.opacity = vis ? '' : '0';
    },
    head() { return headOf(this.pts, this.frac); },
    to(shape, o = {}) {
      const target = resample(shape.pts || shape), tf = shape.frac !== undefined ? shape.frac : 1;
      const from = this.pts.map(p => [p[0], p[1]]), ff = this.frac;
      const dur = (o.duration || 1050) * SPEED, delay = (o.delay || 0) * SPEED;
      const ez = o.ease || EZ.io;
      // "draw": nếu sợi chỉ đang thu lại thì vẽ từ đầu theo hình mới
      const drawOn = o.draw || ff < .05;
      cancelAnimationFrame(this.raf);
      const t0 = performance.now() + delay;
      this.tw = { target, tf, drawOn };
      const step = now => {
        const p = clamp((now - t0) / dur), e = ez(p);
        if (now < t0) { this.raf = requestAnimationFrame(step); return; }
        if (drawOn) { this.pts = target; this.frac = lerp(0, tf, EZ.inOut3(p)); }
        else { this.pts = from.map((q, k) => [lerp(q[0], target[k][0], e), lerp(q[1], target[k][1], e)]); this.frac = lerp(ff, tf, e); }
        this.render();
        if (p < 1) this.raf = requestAnimationFrame(step); else this.tw = null;
      };
      this.raf = requestAnimationFrame(step);
    },
    finish() { if (this.tw) { cancelAnimationFrame(this.raf); this.pts = this.tw.target; this.frac = this.tw.tf; this.tw = null; this.render(); } },
    set(shape) { this.pts = resample(shape.pts || shape); this.frac = shape.frac !== undefined ? shape.frac : 1; this.render(); },
  };

  /* Thư viện hình cho sợi chỉ (toạ độ sân khấu) */
  function makeT(slide) {
    const q = s => (typeof s === 'string' ? $(s, slide.el) : s);
    const T = {
      W, H,
      box: s => { const e = q(s); return e ? box(e) : { x: W / 2, y: H / 2, w: 0, h: 0, cx: W / 2, cy: H / 2, r: W / 2, b: H / 2 }; },
      all: s => $$(s, slide.el).map(box),
      el: s => q(s),
      tbox: s => { const e = q(s); return e ? textBox(e) : T.box(s); },
      pts: (pts, frac = 1) => ({ pts, frac }),
      line: (x1, y1, x2, y2) => ({ pts: [[x1, y1], [x2, y2]] }),
      dot: (x, y) => ({ pts: [[x, y]], frac: 0 }),
      none: () => { const h = thread.head(); return { pts: [[h[0], h[1]]], frac: 0 }; },
      off: (side = 'r') => { const h = thread.head(); const p = side === 'r' ? [W + 80, h[1]] : side === 'l' ? [-80, h[1]] : side === 'b' ? [h[0], H + 80] : [h[0], -80]; return { pts: [h, p], frac: 1 }; },
      /* Gạch chân phần chữ cuối của phần tử (o.full: cả khối) */
      under(s, o = {}) {
        const e = q(s), fs = e ? parseFloat(getComputedStyle(e).fontSize) || 30 : 30;
        const b = o.full ? T.box(s) : T.tbox(s), dy = o.dy !== undefined ? o.dy : Math.round(8 + fs * .2);
        const x1 = (o.full ? b.x : (b.lx !== undefined ? b.lx : b.x)) - (o.pad || 0), x2 = (o.full ? b.r : (b.lr !== undefined ? b.lr : b.r)) + (o.pad || 0);
        const y = b.b + dy, tail = o.tail !== undefined ? o.tail : 0;
        const pts = [[x1, y], [x2, y]];
        if (tail) pts.push([x2 + tail, y]);
        if (o.from === 'edge') pts.unshift([-60, y]);
        if (o.to === 'edge') pts.push([W + 60, y]);
        return { pts };
      },
      /* Vòng tròn vẽ tay quanh phần tử */
      ring(s, o = {}) {
        const b = typeof s === 'object' && s.cx !== undefined ? s : (o.text ? T.tbox(s) : T.box(s));
        const cx = (b.cx !== undefined ? b.cx : (b.x + b.r) / 2) + (o.dx || 0), cy = (b.cy !== undefined ? b.cy : (b.y + b.b) / 2) + (o.dy || 0);
        const w = (b.w !== undefined ? b.w : b.r - b.x), h = (b.h !== undefined ? b.h : b.b - b.y);
        const rx = w / 2 + (o.pad || 34), ry = h / 2 + (o.pady || o.pad || 28);
        const a0 = (o.start !== undefined ? o.start : -2.4), turns = o.turns || 1.12, pts = [];
        for (let k = 0; k <= 90; k++) { const a = a0 + k / 90 * Math.PI * 2 * turns, wob = 1 + Math.sin(k / 90 * Math.PI * 3) * .02; pts.push([cx + Math.cos(a) * rx * wob, cy + Math.sin(a) * ry * wob]); }
        return { pts };
      },
      frame(s, o = {}) {
        const b = T.box(s), p = o.pad || 24, x = b.x - p, y = b.y - p, r = b.r + p, bb = b.b + p;
        return { pts: [[x, y], [r, y], [r, bb], [x, bb], [x, y + 2]] };
      },
      bracket(s, o = {}) { const b = T.box(s), x = b.x - (o.gap || 40); return { pts: [[x, b.y - 6], [x, b.b + 6]] }; },
      strike(s) { const b = T.tbox(s), y = (b.y + b.b) / 2 + 4; return { pts: [[b.x - 14, y], [b.r + 14, y]] }; },
      wave(x1, x2, y, amp = 26, per = 3) { const pts = []; for (let k = 0; k <= 120; k++) { const t = k / 120; pts.push([lerp(x1, x2, t), y + Math.sin(t * Math.PI * 2 * per) * amp]); } return { pts }; },
      check(cx, cy, s = 120) { return { pts: [[cx - s * .55, cy - s * .02], [cx - s * .15, cy + s * .4], [cx + s * .6, cy - s * .5]] }; },
      arrow(x1, y1, x2, y2, hd = 40) {
        const a = Math.atan2(y2 - y1, x2 - x1), l = [x2 - Math.cos(a - .5) * hd, y2 - Math.sin(a - .5) * hd], r = [x2 - Math.cos(a + .5) * hd, y2 - Math.sin(a + .5) * hd];
        return { pts: [[x1, y1], [x2, y2], l, [x2, y2], r] };
      },
      stairs(x, y, w, h, n) { const pts = [[x, y]], sw = w / n, sh = h / n; for (let k = 0; k < n; k++) { pts.push([x + sw * (k + 1), y + sh * k]); pts.push([x + sw * (k + 1), y + sh * (k + 1)]); } return { pts }; },
      zig(rows) { const pts = []; rows.forEach((r, k) => { if (k % 2 === 0) pts.push([r[0], r[2]], [r[1], r[2]]); else pts.push([r[1], r[2]], [r[0], r[2]]); }); return { pts }; },
      sig(x, y, w) { const pts = []; for (let k = 0; k <= 160; k++) { const t = k / 160; pts.push([x + t * w + Math.sin(t * 38) * 18 * (1 - t * .5), y + Math.sin(t * 12) * 34 * Math.sin(t * Math.PI) + Math.cos(t * 38) * 16]); } return { pts }; },
      connect(sels, o = {}) { return { pts: sels.map(s => { const b = T.box(s); return [o.side === 'l' ? b.x - 20 : b.cx, o.side === 'top' ? b.y - 20 : b.cy]; }) }; },
      join(...shapes) { return { pts: shapes.flatMap(s => s.pts) }; },
      horizon(y) { return { pts: [[-60, y], [W + 60, y]] }; },
    };
    return T;
  }
  function shapeFor(d, step) {
    const T = makeT(d);
    try {
      if (typeof d.th === 'function') { const r = d.th(T, step); if (r) return r; }
    } catch (e) { console.warn('thread', d.id, e); }
    const h = $('h1, h2', d.el);
    return h ? T.under(h) : T.none();
  }
  function refreshThread() { const d = SL[cur]; if (d) thread.set(shapeFor(d, step)); }
  /* Sau khi bố cục ổn định (chuyển động CSS xong), đo lại; lệch thì trượt nhẹ về đúng chỗ */
  function settle(d, st, ms) {
    later(() => {
      if (SL[cur] !== d || step !== st || thread.tw) return;
      const t = resample(shapeFor(d, st).pts || []);
      const off = Math.max(...t.map((p, k) => Math.hypot(p[0] - thread.pts[k][0], p[1] - thread.pts[k][1])));
      if (off > 6) thread.to({ pts: t, frac: thread.frac }, { duration: 650, ease: EZ.inOut3 });
    }, ms);
  }

  /* =================================================================
     Mảnh (fragment) và trạng thái theo bước
     ================================================================= */
  const typers = new Map();
  function typeText(el) {
    if (!el.dataset.full) el.dataset.full = el.innerHTML;
    const full = el.dataset.full, text = el.textContent.length ? el.textContent : el.dataset.txt;
    el.dataset.txt = text;
    const chars = [...(new DOMParser().parseFromString(full, 'text/html').body.textContent)];
    const dur = Math.min(2600, chars.length * 26) * SPEED;
    const t0 = performance.now();
    el.classList.add('caret');
    let raf;
    const done = () => { cancelAnimationFrame(raf); el.innerHTML = full; el.classList.remove('caret'); typers.delete(el); };
    const stepT = now => {
      const p = clamp((now - t0) / dur), k = Math.round(chars.length * p);
      el.textContent = chars.slice(0, k).join('');
      if (p < 1) raf = requestAnimationFrame(stepT); else done();
    };
    typers.set(el, done);
    el.textContent = '';
    raf = requestAnimationFrame(stepT);
  }
  const nf = new Intl.NumberFormat('vi-VN');
  function countUp(el) {
    const to = +el.dataset.to, dec = +(el.dataset.dec || 0), suf = el.dataset.suf || '';
    const fmt = v => (dec ? v.toFixed(dec).replace('.', ',') : nf.format(Math.round(v))) + suf;
    const dur = (+el.dataset.dur || 1600) * SPEED, t0 = performance.now();
    let raf;
    const done = () => { cancelAnimationFrame(raf); el.textContent = fmt(to); typers.delete(el); };
    const st = now => { const p = clamp((now - t0) / dur); el.textContent = fmt(to * EZ.out(p)); if (p < 1) raf = requestAnimationFrame(st); else done(); };
    typers.set(el, done);
    raf = requestAnimationFrame(st);
  }
  function reveal(el, delay = 0) {
    el.classList.add('f-on');
    const fx = el.dataset.fx || 'rise';
    const d = delay;
    if (fx === 'fade') anim(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 700, delay: d });
    else if (fx === 'pop') anim(el, [{ opacity: 0, scale: '.86' }, { opacity: 1, scale: '1' }], { duration: 700, delay: d, easing: 'cubic-bezier(.34,1.56,.64,1)' });
    else if (fx === 'stamp') anim(el, [{ opacity: 0, transform: 'rotate(-9deg) scale(2.4)' }, { opacity: 1, transform: 'rotate(-9deg) scale(.94)', offset: .7 }, { opacity: 1, transform: 'rotate(-9deg) scale(1)' }], { duration: 520, delay: d, easing: 'cubic-bezier(.5,0,.75,0)' });
    else if (fx === 'left') anim(el, [{ opacity: 0, translate: '-60px 0' }, { opacity: 1, translate: '0 0' }], { duration: 900, delay: d });
    else if (fx === 'right') anim(el, [{ opacity: 0, translate: '60px 0' }, { opacity: 1, translate: '0 0' }], { duration: 900, delay: d });
    else if (fx === 'grow') anim(el, [{ opacity: 1, scale: '0 1' }, { opacity: 1, scale: '1 1' }], { duration: 1100, delay: d, easing: CB.io });
    else if (fx === 'type') { anim(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 200, delay: d }); later(() => typeText(el), d); }
    else if (fx === 'count') { anim(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: d }); later(() => countUp(el), d); }
    else if (fx === 'words') { anim(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 1, delay: d }); risewords(el, d); }
    else anim(el, [{ opacity: 0, translate: '0 42px' }, { opacity: 1, translate: '0 0' }], { duration: 900, delay: d });
    $$('[data-fx="count"]', el).forEach(c => later(() => countUp(c), d + 150));
    $$('.split', el).forEach(s => risewords(s, d));
  }
  function conceal(el) {
    el.classList.remove('f-on');
    const t = typers.get(el); if (t) t();
    anim(el, [{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: 'linear' });
  }
  function risewords(el, delay = 0, stagger = 38) {
    const ws = $$('.w > span', el);
    ws.forEach((w, i) => anim(w, [{ transform: 'translateY(112%)' }, { transform: 'none' }], { duration: 1100, delay: delay + i * stagger, easing: CB.out }));
  }
  function applyOn(d, st) {
    $$('[data-on]', d.el).forEach(el => el.dataset.on.split(/\s+/).forEach(pair => {
      const [c, n] = pair.split(':'); if (c) el.classList.toggle(c, st >= +n);
    }));
    for (let k = 1; k <= Math.max(d.steps, 12); k++) d.el.classList.toggle('st-' + k, st >= k);
  }
  function setStep(d, st, animate) {
    $$('[data-f]', d.el).forEach(el => {
      const want = st >= +el.dataset.f, has = el.classList.contains('f-on');
      if (want && !has) animate ? reveal(el) : (el.classList.add('f-on'));
      else if (!want && has) animate ? conceal(el) : el.classList.remove('f-on');
    });
    applyOn(d, st);
  }

  /* =================================================================
     Chuyển cảnh
     ================================================================= */
  let cur = -1, step = 0, busy = false;
  function enterContent(d, base = 0) {
    // Từ trồi lên cho tiêu đề .split (không nằm trong fragment chưa hiện)
    $$('.split', d.el).forEach((s, k) => { if (!s.closest('[data-f]:not(.f-on)')) risewords(s, base + k * 120); });
    // Phần tử có data-in lần lượt hiện
    $$('[data-in]', d.el).forEach((el, k) => {
      if (el.closest('[data-f]:not(.f-on)')) return;
      const t = el.dataset.in || 'rise', dl = base + (+(el.dataset.d || 0)) + Math.min(k, 9) * 65;
      if (t === 'fade') anim(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 900, delay: dl });
      else if (t === 'grow') anim(el, [{ scale: '0 1' }, { scale: '1 1' }], { duration: 1200, delay: dl, easing: CB.io });
      else if (t === 'scale') anim(el, [{ opacity: 0, scale: '.9' }, { opacity: 1, scale: '1' }], { duration: 1100, delay: dl });
      else if (t === 'num') anim(el, [{ opacity: 0, translate: '140px 0' }, { opacity: 1, translate: '0 0' }], { duration: 1500, delay: dl, easing: CB.out });
      else if (t === 'left') anim(el, [{ opacity: 0, translate: '-70px 0' }, { opacity: 1, translate: '0 0' }], { duration: 1000, delay: dl });
      else anim(el, [{ opacity: 0, translate: '0 46px' }, { opacity: 1, translate: '0 0' }], { duration: 1000, delay: dl });
      if (el.dataset.fx === 'count') later(() => countUp(el), dl);
      $$('[data-fx="count"]', el).forEach(c => { if (!c.closest('[data-f]:not(.f-on)')) later(() => countUp(c), dl + 100); });
    });
    $$('.mast, .foot', d.el).forEach(m => anim(m, [{ opacity: 0, translate: '0 -10px' }, { opacity: +getComputedStyle(m).opacity || 1, translate: '0 0' }], { duration: 900, delay: base + 150 }));
  }
  function morphShared(prev, next) {
    if (!prev) return [];
    const done = [];
    $$('[data-key]', next.el).forEach(el => {
      const k = el.dataset.key, o = $(`[data-key="${k}"]`, prev.el);
      if (!o || el.closest('[data-f]:not(.f-on)')) return;
      const a = box(o), b = box(el);
      if (!b.w || !a.w) return;
      const sx = a.w / b.w, sy = a.h / b.h, dx = a.x - b.x, dy = a.y - b.y;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx - 1) < .01) { done.push(el); return; }
      el.style.transformOrigin = '0 0';
      anim(el, [{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, opacity: +getComputedStyle(o).opacity }, { transform: 'none', opacity: +getComputedStyle(el).opacity }], { duration: 1150, easing: CB.io });
      o.style.visibility = 'hidden';
      pendingFns.add(() => { o.style.visibility = ''; });
      later(() => { o.style.visibility = ''; }, 1200);
      done.push(el);
    });
    return done;
  }

  function go(n, opts = {}) {
    n = clamp(n, 0, SL.length - 1);
    if (n === cur && !opts.force) return;
    finishAll();
    const prev = n === cur ? null : SL[cur], next = SL[n], back = opts.back || (cur > n && !opts.fwd);
    const instant = opts.instant || cur < 0;
    const firstStep = back && !opts.fromStart ? next.steps : (opts.step || 0);
    // Xoá mọi hoạt ảnh còn sót trên slide mới (khi bấm nhanh)
    if (next.el.getAnimations) next.el.getAnimations({ subtree: true }).forEach(a => a.cancel());
    next.el.style.transformOrigin = '';
    // Đặt trạng thái slide mới
    next.el.classList.remove('is-out');
    next.el.classList.add('is-on');
    $$('[data-f]', next.el).forEach(el => el.classList.remove('f-on'));
    setStep(next, firstStep, false);
    step = firstStep;
    if (prev && prev !== next) { prev.el.classList.remove('is-on'); prev.el.classList.add('is-out'); }
    const oldCur = cur;
    cur = n;
    body.classList.remove('tone-ink', 'tone-paper', 'tone-red');
    body.classList.add('tone-' + (next.tone || 'ink'));
    svg.classList.toggle('on-red', next.tone === 'red');
    if (instant) {
      SL.forEach(d => { if (d !== next) d.el.classList.remove('is-on', 'is-out'); });
      thread.set(shapeFor(next, step));
      enterContent(next, 100);
      afterGo(oldCur);
      return;
    }
    const tr = opts.tr || next.tr || (prev && prev.tone === next.tone ? 'flow' : 'iris');
    const h = thread.head();
    let contentDelay = 380;
    const back2 = back ? -1 : 1;
    if (tr === 'iris') {
      const R = Math.hypot(Math.max(h[0], W - h[0]), Math.max(h[1], H - h[1])) + 40;
      anim(next.el, [{ clipPath: `circle(0px at ${h[0]}px ${h[1]}px)` }, { clipPath: `circle(${R}px at ${h[0]}px ${h[1]}px)` }], { duration: 1150, easing: CB.io });
      if (prev) anim(prev.el, [{ transform: 'none' }, { transform: 'scale(.965)' }], { duration: 1150, easing: CB.io, fill: 'forwards' });
      contentDelay = 430;
    } else if (tr === 'wipe' || tr === 'wipe-left' || tr === 'wipe-down') {
      let t2 = tr; if (back) t2 = tr === 'wipe' ? 'wipe-down' : tr === 'wipe-down' ? 'wipe' : 'wipe-right';
      const from = t2 === 'wipe' ? 'inset(100% 0 0 0)' : t2 === 'wipe-down' ? 'inset(0 0 100% 0)' : t2 === 'wipe-right' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)';
      anim(next.el, [{ clipPath: from }, { clipPath: 'inset(0 0 0 0)' }], { duration: 1050, easing: CB.io });
      if (prev) anim(prev.el, [{ transform: 'none' }, { transform: t2 === 'wipe' ? 'translateY(-90px)' : t2 === 'wipe-down' ? 'translateY(90px)' : t2 === 'wipe-right' ? 'translateX(140px)' : 'translateX(-140px)' }], { duration: 1050, easing: CB.io, fill: 'forwards' });
      contentDelay = 420;
    } else if (tr === 'zoom') {
      const o = `${h[0]}px ${h[1]}px`;
      if (prev) { prev.el.style.transformOrigin = o; anim(prev.el, [{ transform: 'none', opacity: 1 }, { transform: `scale(${back ? .7 : 1.5})`, opacity: 1, offset: .45 }, { transform: `scale(${back ? .5 : 2.6})`, opacity: 0 }], { duration: 760, easing: 'cubic-bezier(.5,0,.8,.4)', fill: 'forwards' }); }
      next.el.style.transformOrigin = o;
      anim(next.el, [{ transform: `scale(${back ? 1.3 : .82})`, opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 1000, delay: 420, easing: CB.out });
      contentDelay = 600;
    } else if (tr === 'cut') {
      contentDelay = 60;
    } else { // flow: cùng nền, nội dung cũ trôi đi, nội dung mới trồi vào
      if (prev) {
        anim(next.el, [{ opacity: 0 }, { opacity: 0, offset: .5 }, { opacity: 1 }], { duration: 560, easing: 'linear' });
        $$(':scope > *:not(.mast)', prev.el).forEach((c, k) => { if (!c.dataset.key || !$(`[data-key="${c.dataset.key}"]`, next.el)) anim(c, [{ opacity: 1, translate: '0 0' }, { opacity: 0, translate: `0 ${-36 * back2}px` }], { duration: 380, delay: k * 25, easing: CB.in, fill: 'forwards' }); });
      }
      contentDelay = 300;
    }
    const shared = morphShared(prev, next);
    // Nội dung slide mới (trừ phần tử dùng chung đang bay sang)
    shared.forEach(el => { el.dataset.sharedNow = '1'; });
    enterContentExcept(next, contentDelay, shared);
    shared.forEach(el => { delete el.dataset.sharedNow; });
    // Sợi chỉ
    const shp = shapeFor(next, step);
    thread.to(shp, { duration: tr === 'flow' ? 1000 : 1150, delay: tr === 'flow' ? 60 : 0, draw: next.drawThread });
    const cleanup = () => {
      pendingFns.delete(cleanup);
      if (prev && prev !== next && SL[cur] !== prev) {
        prev.el.classList.remove('is-out'); prev.el.style.transformOrigin = '';
        if (prev.el.getAnimations) prev.el.getAnimations({ subtree: true }).forEach(a => a.cancel());
      }
      next.el.style.transformOrigin = '';
    };
    pendingFns.add(cleanup);
    later(cleanup, 1350);
    settle(next, step, 1500);
    afterGo(oldCur);
  }
  function enterContentExcept(d, base, skip) {
    const skipSet = new Set(skip);
    const saved = [];
    skipSet.forEach(el => { if (el.hasAttribute('data-in')) { saved.push([el, el.getAttribute('data-in')]); el.removeAttribute('data-in'); } if (el.classList.contains('split')) { el.classList.remove('split'); saved.push([el, '__split']); } });
    enterContent(d, base);
    saved.forEach(([el, v]) => { if (v === '__split') el.classList.add('split'); else el.setAttribute('data-in', v); });
  }

  function next() {
    const d = SL[cur];
    if (step < d.steps) { finishAll(); step++; setStep(d, step, true); thread.to(shapeFor(d, step), { duration: 900 }); afterStep(); return true; }
    if (cur < SL.length - 1) { go(cur + 1, { fwd: true }); return true; }
    return false;
  }
  function prev() {
    const d = SL[cur];
    if (step > 0) { finishAll(); step--; setStep(d, step, true); thread.to(shapeFor(d, step), { duration: 700 }); afterStep(); return; }
    if (cur > 0) go(cur - 1, { back: true });
  }

  /* =================================================================
     Sau khi đổi slide: URL, đếm, bảng tự học, QR, phụ đề…
     ================================================================= */
  const seen = new Set((store.get('ltt2:seen', '') || '').split(',').filter(Boolean));
  function afterGo() {
    const d = SL[cur];
    if (EMBED) { mountQR(d); return; }
    history.replaceState(null, '', '#' + d.id);
    seen.add(d.id); store.set('ltt2:seen', [...seen].join(','));
    $('.pbar').style.width = ((cur + 1) / SL.length * 100) + '%';
    $('#live').textContent = `Slide ${cur + 1} trên ${SL.length}: ${d.title}`;
    mountQR(d);
    renderPanel();
    paintTimeline();
    if (MODE === 'study' && !REDUCED) autoSteps();
    if (MODE === 'film') filmStartSlide();
    bc && bc.postMessage({ t: 'state', cur, step });
  }
  function afterStep() { if (EMBED) return; paintTimeline(); settle(SL[cur], step, 950); bc && bc.postMessage({ t: 'state', cur, step }); }

  /* =================================================================
     QR
     ================================================================= */
  function mountQR(d) {
    $$('[data-qr]', d.el).forEach(box2 => {
      if (box2.dataset.done) return;
      box2.dataset.done = '1';
      const siteUrl = location.protocol.startsWith('http') ? location.href.replace(/trinh-chieu\.html.*$/, '') : '';
      const L = Object.assign({ site: siteUrl }, CFG.links || {});
      const NAMES = { site: 'Trang tự học', deck: 'Bài trình chiếu này', zalo: 'Nhóm Zalo', phanHoi: 'Phản hồi 1 phút' };
      if (!L.deck && siteUrl) L.deck = siteUrl + 'trinh-chieu.html?mode=study';
      box2.dataset.qr.split(',').forEach(k => {
        const url = L[k]; if (!url) return;
        const w = document.createElement('div'); w.className = 'qr';
        const b = document.createElement('div'); b.className = 'box';
        if (window.QRCode) { try { new window.QRCode(b, { text: url, width: 512, height: 512, correctLevel: window.QRCode.CorrectLevel.M }); } catch (e) { b.innerHTML = `<span class="url">${url}</span>`; } }
        else b.innerHTML = `<span class="url">${url}</span>`;
        const s = document.createElement('span'); s.textContent = NAMES[k] || k;
        w.append(b, s); box2.append(w);
      });
      if (!box2.children.length) box2.style.display = 'none';
    });
  }

  /* =================================================================
     CHẾ ĐỘ
     ================================================================= */
  let MODE = EMBED ? 'present' : (params.get('mode') || store.get('ltt2:mode', '') || (innerWidth < 900 ? 'study' : 'present'));
  if (!['present', 'study', 'film'].includes(MODE)) MODE = 'present';
  function setMode(m, quiet) {
    if (m === MODE && !quiet) return;
    const was = MODE;
    MODE = m;
    body.classList.remove('m-present', 'm-study', 'm-film');
    body.classList.add('m-' + m);
    $$('.seg button').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
    store.set('ltt2:mode', m);
    if (was === 'film' && m !== 'film') filmPause();
    requestAnimationFrame(() => { fit(); refreshThread(); });
    if (m === 'study') { renderPanel(); }
    if (m === 'film') { filmPlay(); }
    if (!quiet) toast(m === 'present' ? 'Chế độ trình chiếu' : m === 'study' ? 'Chế độ tự học: bài đọc ở bên phải' : 'Xem như phim: Space để dừng / tiếp');
    const u = new URL(location.href); u.searchParams.set('mode', m); history.replaceState(null, '', u.pathname + u.search + location.hash);
  }

  /* ---------- Tự học: bảng bài đọc ---------- */
  const panel = $('.panel');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function renderPanel() {
    if (MODE !== 'study' || !panel) return;
    const d = SL[cur], ch = chOf(d.ch);
    const note = (d.note || '').split(/\n\n+/).map(p => `<p>${p}</p>`).join('');
    $('.panel-scroll', panel).innerHTML = `
      <div class="p-ch"><span>${esc(ch.name)}</span><span>${cur + 1} / ${SL.length}</span></div>
      <h2>${esc(d.title)}</h2>
      <div class="p-note">${note}</div>
      <div class="p-more">${fill(d.more || '')}</div>
      ${d.link ? `<a class="p-link" href="${d.link}">${esc(d.linkText || 'Đọc bài đầy đủ')} ↗</a>` : ''}
      <p class="p-seen">Đã xem ${seen.size}/${SL.length} slide · tiến độ lưu trên trình duyệt này · <a href="trinh-chieu.html?view=print" target="_blank" rel="noopener">Bản in / PDF ↗</a></p>`;
    $('.panel-scroll', panel).scrollTop = 0;
    $$('.pp', panel).forEach(enhancePrompt);
    $('.panel-nav .pv').disabled = cur === 0;
    $('.panel-nav .nx').textContent = cur === SL.length - 1 ? 'Hết ✓' : 'Tiếp →';
    $('.panel-nav .mid').textContent = `${cur + 1} / ${SL.length}`;
  }
  async function copyText(t) {
    try { await navigator.clipboard.writeText(t); return true; } catch (e) {
      const ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.append(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (er) { /* bỏ qua */ } ta.remove(); return ok;
    }
  }
  function enhancePrompt(pp) {
    if (pp.dataset.ready) return; pp.dataset.ready = '1';
    const text = $('pre', pp).textContent;
    const a = document.createElement('div'); a.className = 'pp-a';
    const c = document.createElement('button'); c.type = 'button'; c.textContent = 'Copy';
    c.addEventListener('click', async () => { const ok = await copyText(text); c.textContent = ok ? 'Đã copy ✓' : 'Chưa copy được'; c.classList.toggle('ok', ok); toast(ok ? 'Đã copy. Dán vào ChatGPT, Claude hoặc Gemini nhé!' : 'Hãy bôi đen rồi copy thủ công'); setTimeout(() => { c.textContent = 'Copy'; c.classList.remove('ok'); }, 1800); });
    const q = encodeURIComponent(text);
    const g = Object.assign(document.createElement('a'), { href: 'https://chatgpt.com/?q=' + q, target: '_blank', rel: 'noopener', textContent: 'Mở ChatGPT ↗' });
    const k = Object.assign(document.createElement('a'), { href: 'https://claude.ai/new?q=' + q, target: '_blank', rel: 'noopener', textContent: 'Mở Claude ↗' });
    g.title = k.title = 'Mở tab mới với câu nhờ điền sẵn. Nhớ thay phần [ngoặc vuông] trước khi gửi.';
    a.append(c, g, k); pp.append(a);
  }
  let autoT = [];
  function autoSteps() {
    autoT.forEach(clearTimeout); autoT = [];
    const d = SL[cur];
    for (let k = step + 1; k <= d.steps; k++) autoT.push(setTimeout(() => { if (SL[cur] === d && step < k) { step = k; setStep(d, k, true); thread.to(shapeFor(d, k), { duration: 850 }); afterStep(); } }, 1100 + (k - step - 1) * 900));
  }

  /* ---------- Xem như phim ---------- */
  const capEl = $('.caption');
  let filmOn = false, filmTimers = [], capIdx = 0, voice = null, speakOn = store.get('ltt2:voice', '0') === '1', slideClock = 0, slideStartAt = 0, utter = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return null;
    const vs = speechSynthesis.getVoices().filter(v => /^vi/i.test(v.lang));
    return vs.find(v => /natural|online|hoaimy|namminh/i.test(v.name)) || vs[0] || null;
  }
  if ('speechSynthesis' in window) { voice = pickVoice(); speechSynthesis.onvoiceschanged = () => { voice = pickVoice(); paintVoiceBtn(); }; }
  function paintVoiceBtn() { const b = $('[data-a="voice"]'); if (!b) return; b.hidden = !voice; b.textContent = speakOn ? '🔊 Lời dẫn' : '🔈 Lời dẫn'; b.title = voice ? 'Đọc lời dẫn bằng giọng ' + voice.name : ''; }
  function clearFilm() { filmTimers.forEach(clearTimeout); filmTimers = []; if ('speechSynthesis' in window) speechSynthesis.cancel(); utter = null; }
  function stepPlan(d) {
    // Mỗi phụ đề bắt đầu bằng » sẽ mở 1 bước; nếu không có dấu » thì rải đều
    const marks = d.caps.map(c => (c.match(/^»+/) || [''])[0].length);
    const plan = d.caps.map(() => 0);
    if (marks.some(Boolean)) marks.forEach((m, i) => { plan[i] = m; });
    else if (d.steps) { for (let k = 1; k <= d.steps; k++) { const i = Math.min(d.caps.length - 1, Math.floor(k * d.caps.length / (d.steps + 1))); plan[i]++; } }
    return plan;
  }
  function filmStartSlide() {
    clearFilm();
    capIdx = 0; slideStartAt = performance.now(); slideClock = 0;
    if (!filmOn) { showCap(); return; }
    runCap();
  }
  function showCap() {
    const d = SL[cur], c = d.caps[capIdx] || '';
    capEl.textContent = c.replace(/^»+\s*/, '');
    capEl.classList.remove('on'); void capEl.offsetWidth; capEl.classList.toggle('on', !!c);
  }
  function runCap() {
    const d = SL[cur], plan = stepPlan(d);
    if (capIdx >= d.caps.length) { filmTimers.push(setTimeout(() => { if (!filmOn) return; if (cur < SL.length - 1) { while (step < d.steps) { step++; setStep(d, step, false); } go(cur + 1, { fwd: true }); } else { filmPause(); toast('Hết phim. Cảm ơn bạn đã xem!'); } }, 700)); return; }
    showCap();
    // Mở các bước gắn với phụ đề này, rải trong 40% đầu của phụ đề
    const k = plan[capIdx], dur = d.capDur[capIdx] * 1000;
    for (let j = 0; j < k; j++) filmTimers.push(setTimeout(() => { if (step < d.steps) { step++; setStep(d, step, true); thread.to(shapeFor(d, step), { duration: 900 }); afterStep(); } }, 250 + j * Math.min(900, dur * .4 / Math.max(1, k))));
    const nextCap = () => { capIdx++; if (filmOn) runCap(); };
    if (speakOn && voice) {
      utter = new SpeechSynthesisUtterance(d.caps[capIdx].replace(/^»+\s*/, ''));
      utter.voice = voice; utter.lang = voice.lang; utter.rate = 1.02;
      const t0 = performance.now();
      utter.onend = () => { const left = Math.max(0, 650 - (performance.now() - t0)); filmTimers.push(setTimeout(nextCap, left + 250)); };
      utter.onerror = () => filmTimers.push(setTimeout(nextCap, dur));
      speechSynthesis.speak(utter);
    } else filmTimers.push(setTimeout(nextCap, dur));
  }
  function filmPlay() {
    if (MODE !== 'film') { setMode('film'); return; }
    filmOn = true; body.classList.add('playing'); paintPlay();
    clearFilm(); runCap();
  }
  function filmPause() { filmOn = false; body.classList.remove('playing'); clearFilm(); paintPlay(); }
  function paintPlay() { const b = $('.play'); if (b) { b.textContent = filmOn ? '❚❚' : '▶'; b.setAttribute('aria-label', filmOn ? 'Dừng' : 'Phát'); } }

  /* ---------- Thanh thời gian ---------- */
  const tl = $('.tl');
  function buildTimeline() {
    const chs = []; let last = null;
    SL.forEach(d => { if (d.ch !== last) { chs.push(d); last = d.ch; } });
    tl.innerHTML = '<div class="track"></div><div class="fill"></div><div class="tip"></div>' + chs.map(d => `<i class="ch" style="left:${d.t0 / TOTAL * 100}%"><span>${esc(chOf(d.ch).short || chOf(d.ch).name)}</span></i>`).join('');
    const tip = $('.tip', tl);
    const at = e => { const r = tl.getBoundingClientRect(); const t = clamp((e.clientX - r.left) / r.width) * TOTAL; return { t, i: Math.max(0, SL.findIndex(d => d.t0 + d.dur > t)), x: e.clientX - r.left }; };
    tl.addEventListener('mousemove', e => { const a = at(e); tip.style.left = a.x + 'px'; tip.textContent = `${a.i + 1}. ${SL[a.i].title}`; });
    tl.addEventListener('click', e => { const a = at(e); go(a.i, { fwd: true, fromStart: true }); });
  }
  function paintTimeline() {
    const d = SL[cur]; if (!d) return;
    const frac = d.steps ? step / (d.steps + 1) : 0;
    const t = d.t0 + d.dur * frac;
    $('.fill', tl).style.width = (t / TOTAL * 100) + '%';
    $('.tc').textContent = `${fmtT(t)} / ${fmtT(TOTAL)}`;
    $('.cnt').textContent = `${cur + 1}/${SL.length}`;
  }

  /* ---------- Mục lục ---------- */
  const ix = $('.index');
  function openIndex(on = !ix.classList.contains('on')) {
    ix.classList.toggle('on', on);
    if (!on) return;
    const groups = CH.map(c => ({ c, items: SL.filter(d => d.ch === c.id) })).filter(g => g.items.length);
    $('.ix-g', ix).innerHTML = groups.map(g => `<div class="ix-c"><h3>${esc(g.c.name)}</h3>${g.items.map(d => `<button type="button" data-go="${d.i}" class="${d.i === cur ? 'cur' : ''} ${seen.has(d.id) ? 'seen' : ''}"><small>${String(d.i + 1).padStart(2, '0')}</small><span>${esc(d.title)}</span></button>`).join('')}</div>`).join('');
    const c = $('.cur', ix); c && c.scrollIntoView({ block: 'center' });
  }
  ix.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) { openIndex(false); go(+b.dataset.go, { fwd: true, fromStart: true }); } if (e.target.closest('[data-close]')) openIndex(false); });

  /* ---------- Tiện ích trình chiếu ---------- */
  const toastEl = $('.toast');
  function toast(m) { toastEl.textContent = m; toastEl.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('on'), 2300); }
  let tLeft = 0, tId = 0;
  function timer(sec) {
    const el = $('.timer');
    if (el.classList.contains('on') && tLeft > 0) { clearInterval(tId); el.className = 'timer'; return; }
    clearInterval(tId); tLeft = sec; el.className = 'timer on';
    const draw = () => { el.textContent = `${Math.floor(tLeft / 60)}:${String(tLeft % 60).padStart(2, '0')}`; };
    draw();
    tId = setInterval(() => { tLeft--; draw(); if (tLeft <= 0) { clearInterval(tId); el.classList.add('done'); setTimeout(() => { el.className = 'timer'; }, 9000); } }, 1000);
  }
  const laser = $('.laser');
  function toggleLaser() { const on = !laser.classList.contains('on'); laser.classList.toggle('on', on); body.classList.toggle('laser-on', on); toast(on ? 'Bút laser: bật' : 'Bút laser: tắt'); }
  const showUI = () => { body.classList.add('show-ui'); clearTimeout(window.__ui); window.__ui = setTimeout(() => body.classList.remove('show-ui'), 2600); };
  addEventListener('pointermove', e => {
    if (laser.classList.contains('on')) { laser.style.left = e.clientX + 'px'; laser.style.top = e.clientY + 'px'; }
    if (e.pointerType !== 'touch') showUI();
  }, { passive: true });
  // Màn hình cảm ứng: chạm vào mép trên / mép dưới để hiện thanh công cụ
  let edgeTap = false;
  addEventListener('pointerdown', e => { edgeTap = e.pointerType === 'touch' && (e.clientY < 80 || e.clientY > innerHeight - 90); if (edgeTap) showUI(); }, { passive: true });

  /* ---------- Màn hình người chia sẻ (đồng bộ) ---------- */
  let bc = null;
  if (!EMBED) { try { bc = new BroadcastChannel('ltt2-deck'); } catch (e) { bc = null; } }
  if (bc) bc.onmessage = e => {
    const m = e.data || {};
    if (m.t === 'cmd') {
      if (m.c === 'next') next(); else if (m.c === 'prev') prev(); else if (m.c === 'go') go(m.i, { fwd: true, fromStart: true });
      else if (m.c === 'black') $('.blank').classList.toggle('on'); else if (m.c === 'timer') timer(m.s || SL[cur].timer || 180);
    }
    if (m.t === 'hello') bc.postMessage({ t: 'state', cur, step });
  };
  /* Chế độ nhúng (dùng trong màn hình người chia sẻ): nhận lệnh hiển thị slide/bước */
  if (EMBED) addEventListener('message', e => {
    const m = e.data || {};
    if (m.t !== 'show') return;
    if (m.id) m.i = SL.findIndex(d => d.id === m.id);
    if (!SL[m.i]) return;
    const d = SL[m.i], st = clamp(m.step || 0, 0, d.steps);
    if (m.i !== cur) { go(m.i, { instant: !m.anim, force: true, fwd: true, step: st }); }
    else if (st !== step) { finishAll(); step = st; setStep(d, st, !!m.anim); thread.to(shapeFor(d, st), { duration: m.anim ? 800 : 1 }); }
  });
  function openSpeaker() {
    const u = new URL(location.href); u.searchParams.set('view', 'speaker'); u.searchParams.delete('mode'); u.hash = '';
    const w = window.open(u.toString(), 'ltt2-speaker', 'width=1280,height=800');
    if (!w) toast('Trình duyệt chặn cửa sổ mới. Cho phép pop-up rồi bấm S lại.');
  }

  /* ---------- Bàn phím, chuột, vuốt ---------- */
  let numBuf = '', numT = 0;
  document.addEventListener('keydown', e => {
    if (EMBED) return;
    if (e.target.closest('input, textarea, [contenteditable]')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    const overlay = ix.classList.contains('on') || $('.help').classList.contains('on');
    if (k === 'Escape') { openIndex(false); $('.help').classList.remove('on'); $('.blank').classList.remove('on'); if (laser.classList.contains('on')) toggleLaser(); if (MODE === 'film' && filmOn) filmPause(); return; }
    if (overlay && !['o', 'O', 'g', 'G', 'h', 'H', '?'].includes(k)) return;
    if (/^[0-9]$/.test(k)) { numBuf += k; clearTimeout(numT); numT = setTimeout(() => { numBuf = ''; }, 1600); toast('Tới slide ' + numBuf + '… (Enter)'); return; }
    if (k === 'Enter' && numBuf) { const n = parseInt(numBuf, 10) - 1; numBuf = ''; go(n, { fwd: true, fromStart: true }); return; }
    if (MODE === 'film' && (k === ' ' || k === 'k' || k === 'K')) { e.preventDefault(); filmOn ? filmPause() : filmPlay(); return; }
    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(k)) { e.preventDefault(); if (MODE === 'film') { go(cur + 1, { fwd: true, fromStart: true }); } else next(); }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(k)) { e.preventDefault(); if (MODE === 'film') go(cur - 1, { back: true, fromStart: true }); else prev(); }
    else if (k === 'Home') go(0, { back: true, fromStart: true });
    else if (k === 'End') go(SL.length - 1, { fwd: true });
    else if (k === 'f' || k === 'F') { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => {}); }
    else if (k === 'b' || k === 'B' || k === '.') { const bl = $('.blank'); bl.classList.remove('white'); bl.classList.toggle('on'); }
    else if (k === 'w' || k === 'W') { const bl = $('.blank'); bl.classList.add('white'); bl.classList.toggle('on'); }
    else if (k === 't' || k === 'T') timer(SL[cur].timer || 180);
    else if (k === 'y' || k === 'Y') timer(30);
    else if (k === 'p' || k === 'P') { if (MODE !== 'film') setMode('film'); else (filmOn ? filmPause() : filmPlay()); }
    else if (k === 'n' || k === 'N') setMode(MODE === 'study' ? 'present' : 'study');
    else if (k === 'o' || k === 'O' || k === 'g' || k === 'G') openIndex();
    else if (k === 's' || k === 'S') openSpeaker();
    else if (k === 'l' || k === 'L') toggleLaser();
    else if (k === 'h' || k === 'H' || k === '?') $('.help').classList.toggle('on');
  });
  vp.addEventListener('click', e => {
    if (EMBED) return;
    if (edgeTap) { edgeTap = false; return; }
    if (e.target.closest('a, button, input, [data-noclick]')) return;
    if (MODE === 'film') { filmOn ? filmPause() : filmPlay(); return; }
    next();
  });
  let tx = null, ty = null;
  vp.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  vp.addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { e.preventDefault(); (dx < 0 ? next : prev)(); }
    tx = ty = null;
  });
  addEventListener('hashchange', () => { const i = idxOf(location.hash.slice(1)); if (i > -1 && i !== cur) go(i, { fwd: true, fromStart: true }); });
  function idxOf(h) { if (!h) return -1; const n = parseInt(h, 10); if (String(n) === h) return clamp(n - 1, 0, SL.length - 1); return SL.findIndex(d => d.id === h); }

  /* Nút giao diện */
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-a], [data-mode]');
    if (!b) return;
    if (b.dataset.mode) { setMode(b.dataset.mode); return; }
    const a = b.dataset.a;
    if (a === 'index') openIndex();
    else if (a === 'help') $('.help').classList.toggle('on');
    else if (a === 'fs') { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => {}); }
    else if (a === 'play') { filmOn ? filmPause() : filmPlay(); }
    else if (a === 'prev') { MODE === 'film' ? go(cur - 1, { back: true, fromStart: true }) : prev(); }
    else if (a === 'next') { if (MODE === 'study') { cur < SL.length - 1 ? go(cur + 1, { fwd: true }) : toast('Bạn đã xem hết. Tuyệt vời!'); } else if (MODE === 'film') go(cur + 1, { fwd: true, fromStart: true }); else next(); }
    else if (a === 'speaker') openSpeaker();
    else if (a === 'voice') { speakOn = !speakOn; store.set('ltt2:voice', speakOn ? '1' : '0'); paintVoiceBtn(); if (filmOn) { clearFilm(); runCap(); } toast(speakOn ? 'Đọc lời dẫn: bật' : 'Đọc lời dẫn: tắt'); }
  });
  /* Bảng tự học: nút trước / sau */
  $('.panel-nav .pv').addEventListener('click', e => { e.stopPropagation(); if (cur > 0) go(cur - 1, { back: true, fromStart: true }); });

  /* =================================================================
     Khởi động
     ================================================================= */
  buildTimeline();
  paintVoiceBtn();
  body.classList.add('m-' + MODE);
  $$('.seg button').forEach(b => b.classList.toggle('on', b.dataset.mode === MODE));
  fit();
  const start = Math.max(0, idxOf(location.hash.slice(1)));
  const boot = () => {
    if (VIEW === 'print') { buildPrint(); body.classList.add('ready'); return; }
    fit();
    go(start, { instant: true, force: true });
    if (MODE === 'film') { filmOn = false; paintPlay(); showCap(); toast('Bấm ▶ hoặc phím Space để xem như phim'); }
    body.classList.add('ready');
  };
  // Đợi font để đo chữ chính xác (tối đa 1,8 giây)
  const fontsReady = document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1800))]) : Promise.resolve();
  fontsReady.then(boot);
  if (document.fonts) document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', () => refreshThread());

  /* =================================================================
     BẢN IN / PDF (?view=print): mỗi trang một slide (đủ mọi bước) + lời dẫn
     ================================================================= */
  function buildPrint() {
    document.title = 'Bản in · Làm thật, thấy thật V2';
    body.className = 'print-view';
    const wrap = document.createElement('div'); wrap.className = 'pv';
    wrap.innerHTML = `<header class="pv-h"><div><p class="pv-k">Làm thật, thấy thật · Phiên bản 2</p><h1>Bản in bài trình chiếu</h1><p>${SL.length} slide, mỗi trang một slide kèm lời dẫn. Bấm <b>In / Lưu PDF</b> rồi chọn "Lưu dưới dạng PDF" nếu muốn có file.</p></div><div class="pv-btns"><button type="button" onclick="window.print()">In / Lưu PDF</button><a href="trinh-chieu.html?mode=study">← Về bài trình chiếu</a></div></header>`;
    document.body.append(wrap);
    const frames = [];
    SL.forEach((d, i) => {
      const page = document.createElement('section'); page.className = 'pv-page';
      const frame = document.createElement('div'); frame.className = 'pframe';
      const ps = document.createElement('div'); ps.className = 'pstage';
      ps.append(d.el); frame.append(ps);
      d.el.classList.add('is-on'); d.el.style.visibility = 'visible';
      $$('[data-f]', d.el).forEach(x => x.classList.add('f-on'));
      applyOn(d, d.steps);
      const ch = chOf(d.ch);
      const notes = document.createElement('div'); notes.className = 'pv-notes';
      const moreTxt = (d.more || '').replace(/<div class="pp">/g, '<div class="pp-print">');
      notes.innerHTML = `<p class="pv-k">${i + 1} / ${SL.length} · ${esc(ch.name)}</p><h2>${esc(d.title)}</h2>${(d.note || '').split(/\n\n+/).map(t => `<p>${t}</p>`).join('')}<div class="pv-more">${fill(moreTxt)}</div>`;
      page.append(frame, notes); wrap.append(page);
      frames.push({ d, frame, ps });
    });
    const sizeAll = () => frames.forEach(f => { f.ps.style.transform = `scale(${f.frame.clientWidth / W})`; });
    sizeAll();
    frames.forEach(({ d, ps }) => {
      mountQR(d);
      const sv = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      sv.setAttribute('viewBox', `0 0 ${W} ${H}`); sv.setAttribute('class', 'thread' + (d.tone === 'red' ? ' on-red' : ''));
      let shp; try { shp = shapeFor(d, d.steps); } catch (e) { shp = null; }
      if (shp && shp.pts && shp.pts.length > 1 && (shp.frac === undefined || shp.frac > 0)) {
        const pts = resample(shp.pts), fr = shp.frac === undefined ? 1 : shp.frac, h2 = headOf(pts, fr);
        sv.innerHTML = `<path d="${pathD(pts, fr)}"/><circle class="needle" r="9" cx="${h2[0].toFixed(1)}" cy="${h2[1].toFixed(1)}"/>`;
      }
      ps.append(sv);
    });
    addEventListener('resize', sizeAll);
    addEventListener('beforeprint', sizeAll);
    addEventListener('afterprint', sizeAll);
  }

  window.DECKAPI = { go, next, prev, setMode, get cur() { return cur; }, get step() { return step; }, SL, thread, finishAll, setSpeed: s => { SPEED = s; } };

  /* =================================================================
     MÀN HÌNH NGƯỜI CHIA SẺ (?view=speaker)
     Mở bằng phím S ở cửa sổ trình chiếu. Hai cửa sổ đồng bộ qua BroadcastChannel.
     ================================================================= */
  function speakerView() {
    const slides = DECK.slides.filter(d => !d.when || d.when(CFG));
    const chName = id => (DECK.chapters.find(c => c.id === id) || { name: id }).name;
    const esc2 = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    // Đếm số bước mỗi slide (giống engine): dựng tạm nội dung để đếm data-f / data-on
    const tmp = document.createElement('div');
    const fillC = s => String(s).replace(/\{\{(\w+)\}\}/g, (m, k) => (CFG[k] !== undefined ? CFG[k] : ''));
    slides.forEach(d => {
      tmp.innerHTML = fillC(typeof d.html === 'function' ? d.html(CFG) : d.html);
      d._steps = Math.max(0, ...[...tmp.querySelectorAll('[data-f]')].map(x => +x.dataset.f), ...[...tmp.querySelectorAll('[data-on]')].flatMap(x => x.dataset.on.split(/\s+/).map(p => +p.split(':')[1] || 0))) + (d.extraSteps || 0);
    });
    document.title = 'Ghi chú người chia sẻ · Làm thật, thấy thật';
    document.body.className = 'speaker';
    const base = location.pathname;
    document.body.innerHTML = `
      <div class="spk">
        <header class="spk-h"><b>Ghi chú người chia sẻ</b><span class="spk-ch"></span><span class="spk-n"></span><span class="spk-clock"></span><button type="button" class="spk-el" title="Bấm để đặt lại">00:00</button></header>
        <section class="spk-cur"><p class="spk-l">Đang chiếu</p><div class="spk-frame"><iframe title="Slide hiện tại" src="${base}?view=embed"></iframe></div></section>
        <section class="spk-next"><p class="spk-l">Tiếp theo</p><div class="spk-frame"><iframe title="Slide tiếp theo" src="${base}?view=embed"></iframe></div><p class="spk-nt"></p>
          <div class="spk-btns"><button type="button" data-c="prev">← Lùi</button><button type="button" data-c="next" class="pri">Tiếp →</button><button type="button" data-c="black">Màn đen</button><button type="button" data-c="timer">Đồng hồ</button></div>
          <p class="spk-help">Phím: ← → · B màn đen · T đồng hồ · 0 đặt lại giờ</p></section>
        <section class="spk-notes"><h2 class="spk-title"></h2><div class="spk-body"></div></section>
      </div>`;
    const st = document.createElement('style');
    st.textContent = `body.speaker{overflow:auto;background:#111;color:#eee;font-family:var(--sans)}
      .spk{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-rows:auto auto 1fr;gap:18px 22px;padding:16px 20px 24px;min-height:100vh}
      .spk-h{grid-column:1/-1;display:flex;gap:22px;align-items:center;font:600 14px/1 var(--mono);letter-spacing:.06em;border-bottom:1px solid #333;padding-bottom:12px}
      .spk-h b{color:var(--red);text-transform:uppercase;letter-spacing:.14em}.spk-ch{flex:1;opacity:.75}
      .spk-el{font:700 26px/1 var(--mono);background:var(--red);color:#111;border:0;padding:8px 14px;cursor:pointer}
      .spk-clock{font:600 20px/1 var(--mono);opacity:.8}
      .spk-l{font:600 12px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;opacity:.6;margin:0 0 8px}
      .spk-frame{position:relative;aspect-ratio:16/9;background:#000;border:1px solid #333}.spk-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0;pointer-events:none}
      .spk-cur{grid-column:1;grid-row:2}.spk-next{grid-column:2;grid-row:2/4}.spk-next .spk-frame{opacity:.85}
      .spk-nt{font:400 16px/1.4 var(--sans);margin:10px 0 14px;opacity:.85}
      .spk-btns{display:flex;gap:8px;flex-wrap:wrap}.spk-btns button{font:600 14px/1 var(--mono);padding:14px 16px;border:1px solid #555;background:#1b1b1b;color:#eee;cursor:pointer;border-radius:99px}
      .spk-btns .pri{background:#f2efe8;color:#111;border-color:#f2efe8;flex:1}
      .spk-help{font:12px/1.5 var(--mono);opacity:.5;margin-top:10px}
      .spk-notes{grid-column:1;grid-row:3;background:#f2efe8;color:#111;padding:22px 26px;overflow:auto;max-height:52vh}
      .spk-title{font:400 30px/1.15 var(--serif);margin:0 0 14px}.spk-body p{font:400 21px/1.6 var(--sans);margin:0 0 12px}
      .spk-body .cap{display:block;padding:2px 0 2px 12px;border-left:3px solid transparent}.spk-body .cap.mk{border-left-color:var(--red)}
      @media (max-width:900px){.spk{grid-template-columns:1fr}.spk-cur,.spk-notes,.spk-next{grid-row:auto;grid-column:auto}}`;
    document.head.append(st);
    const [fCur, fNext] = document.querySelectorAll('iframe');
    let state = { cur: 0, step: 0 }, t0 = Date.now();
    let bc2 = null; try { bc2 = new BroadcastChannel('ltt2-deck'); } catch (e) { bc2 = null; }
    const send = (c, extra) => bc2 && bc2.postMessage(Object.assign({ t: 'cmd', c }, extra || {}));
    function paint() {
      const d = slides[state.cur]; if (!d) return;
      const nx = state.step < d._steps ? { i: state.cur, step: state.step + 1 } : (slides[state.cur + 1] ? { i: state.cur + 1, step: 0 } : null);
      try { fCur.contentWindow.postMessage({ t: 'show', i: state.cur, step: state.step, anim: true }, '*'); } catch (e) { /* bỏ qua */ }
      try { if (nx) fNext.contentWindow.postMessage({ t: 'show', i: nx.i, step: nx.step }, '*'); } catch (e) { /* bỏ qua */ }
      document.querySelector('.spk-ch').textContent = chName(d.ch);
      document.querySelector('.spk-n').textContent = `Slide ${state.cur + 1}/${slides.length} · bước ${state.step}/${d._steps}`;
      document.querySelector('.spk-title').textContent = d.title;
      const caps = d.cap || null;
      document.querySelector('.spk-body').innerHTML = caps
        ? '<p>' + caps.map(c => `<span class="cap${/^»/.test(c) ? ' mk' : ''}">${esc2(c.replace(/^»+\s*/, ''))}</span>`).join('') + '</p>'
        : (d.note || '').split(/\n\n+/).map(p => `<p>${esc2(p)}</p>`).join('') + (d.timer ? `<p style="opacity:.6;font-size:16px">Gợi ý: bấm T để chạy đồng hồ ${Math.round(d.timer / 60)} phút.</p>` : '');
      document.querySelector('.spk-nt').textContent = nx ? (nx.i === state.cur ? 'Bước tiếp theo trên cùng slide' : `${nx.i + 1}. ${slides[nx.i].title}`) : 'Hết bài';
    }
    if (bc2) bc2.onmessage = e => { const m = e.data || {}; if (m.t === 'state') { state = { cur: m.cur, step: m.step }; paint(); } };
    let ready = 0;
    [fCur, fNext].forEach(f => f.addEventListener('load', () => { if (++ready === 2) { send('noop'); bc2 && bc2.postMessage({ t: 'hello' }); setTimeout(paint, 400); } }));
    document.addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (b) send(b.dataset.c); if (e.target.closest('.spk-el')) t0 = Date.now(); });
    document.addEventListener('keydown', e => {
      const k = e.key;
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(k)) { e.preventDefault(); send('next'); }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(k)) { e.preventDefault(); send('prev'); }
      else if (k === 'b' || k === 'B' || k === '.') send('black');
      else if (k === 't' || k === 'T') send('timer');
      else if (k === '0') t0 = Date.now();
    });
    const two = n => String(n).padStart(2, '0');
    setInterval(() => {
      const s = Math.floor((Date.now() - t0) / 1000), now = new Date();
      document.querySelector('.spk-el').textContent = `${two(Math.floor(s / 3600) ? Math.floor(s / 3600) : 0) === '00' ? '' : Math.floor(s / 3600) + ':'}${two(Math.floor(s % 3600 / 60))}:${two(s % 60)}`;
      document.querySelector('.spk-clock').textContent = `${two(now.getHours())}:${two(now.getMinutes())}`;
    }, 500);
    if (!bc2) document.querySelector('.spk-notes').insertAdjacentHTML('afterbegin', '<p style="color:#c00">Trình duyệt này không hỗ trợ đồng bộ hai cửa sổ. Hãy mở trang qua http(s), ví dụ GitHub Pages.</p>');
  }
})();
