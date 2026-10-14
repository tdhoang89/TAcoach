/* =====================================================================
   CODE VIDEO · video được viết bằng code
   Cùng nguyên lý với Remotion: mỗi khung hình là một HÀM CỦA THỜI GIAN.
   frame(t) → vẽ lên canvas. Phát, tua, và ghi ra file video ngay trong trình duyệt.
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- Công cụ chuyển động (giống interpolate / spring của Remotion) ---------- */
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, p) => a + (b - a) * p;
  const ease = {
    linear: p => p,
    outCubic: p => 1 - Math.pow(1 - p, 3),
    inOutCubic: p => (p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2),
    outExpo: p => (p === 1 ? 1 : 1 - Math.pow(2, -10 * p)),
    inOutExpo: p => (p === 0 ? 0 : p === 1 ? 1 : p < .5 ? Math.pow(2, 20 * p - 10) / 2 : (2 - Math.pow(2, -20 * p + 10)) / 2),
    outBack: p => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); },
  };
  /** interp(t, [t0, t1], [v0, v1], easing): ánh xạ thời gian sang giá trị, có giới hạn. */
  function interp(t, range, out = [0, 1], e = ease.outExpo) {
    const p = clamp((t - range[0]) / (range[1] - range[0] || 1));
    return lerp(out[0], out[1], e(p));
  }

  const SERIF = '"Playfair Display", Georgia, serif';
  const SANS = '"Be Vietnam Pro", system-ui, sans-serif';
  function font(o) { return `${o.italic ? 'italic ' : ''}${o.weight || 400} ${o.size || 40}px ${o.family === 'sans' ? SANS : SERIF}`; }

  /** Vẽ chữ. o: {size, weight, italic, family:'serif'|'sans', color, align, alpha, spacing, stroke} */
  function text(ctx, str, x, y, o = {}) {
    ctx.save();
    ctx.font = font(o);
    ctx.textAlign = o.align || 'left';
    ctx.textBaseline = o.baseline || 'alphabetic';
    ctx.globalAlpha *= o.alpha === undefined ? 1 : o.alpha;
    if ('letterSpacing' in ctx) ctx.letterSpacing = (o.spacing || 0) + 'px';
    if (o.stroke) { ctx.strokeStyle = o.color || '#fff'; ctx.lineWidth = o.stroke; ctx.strokeText(str, x, y); }
    else { ctx.fillStyle = o.color || '#fff'; ctx.fillText(str, x, y); }
    ctx.restore();
  }
  function measure(ctx, str, o) { ctx.save(); ctx.font = font(o); if ('letterSpacing' in ctx) ctx.letterSpacing = (o.spacing || 0) + 'px'; const w = ctx.measureText(str).width; ctx.restore(); return w; }
  function wrap(ctx, str, maxW, o) {
    const words = str.split(' '), lines = [];
    let cur = '';
    words.forEach(w => { const test = cur ? cur + ' ' + w : w; if (measure(ctx, test, o) > maxW && cur) { lines.push(cur); cur = w; } else cur = test; });
    if (cur) lines.push(cur);
    return lines;
  }
  /** Chữ "trồi lên" trong khung cắt, giống hiệu ứng tạp chí. p: 0 → 1 */
  function rise(ctx, str, x, y, p, o = {}) {
    const size = o.size || 40;
    ctx.save();
    const w = measure(ctx, str, o) + size;
    const left = o.align === 'center' ? x - w / 2 : o.align === 'right' ? x - w : x - size * .1;
    ctx.beginPath();
    ctx.rect(left, y - size * 1.12, w + size * .2, size * 1.45);
    ctx.clip();
    text(ctx, str, x, y + (1 - p) * size * 1.3, o);
    ctx.restore();
  }
  function rule(ctx, x1, y, x2, p, color = '#fff', width = 2) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width;
    ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(lerp(x1, x2, clamp(p)), y); ctx.stroke(); ctx.restore();
  }
  function typed(str, p) { const chars = [...str]; return chars.slice(0, Math.round(chars.length * clamp(p))).join(''); }
  /** Màn chuyển cảnh: cắt vùng vẽ theo hướng. dir: 'up' | 'left' | 'down' */
  function wipe(ctx, s, dur = .7, dir = 'up') {
    const p = ease.inOutExpo(clamp(s.lt / dur));
    ctx.beginPath();
    if (dir === 'up') ctx.rect(0, s.h * (1 - p), s.w, s.h * p);
    else if (dir === 'down') ctx.rect(0, 0, s.w, s.h * p);
    else ctx.rect(s.w * (1 - p), 0, s.w * p, s.h);
    ctx.clip();
  }
  function bg(ctx, s, color) { ctx.fillStyle = color; ctx.fillRect(0, 0, s.w, s.h); }
  function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }

  const fx = { clamp, lerp, ease, interp, text, measure, wrap, rise, rule, typed, wipe, bg, roundRect, SERIF, SANS };

  /* ---------- Trình phát ---------- */
  const fmt = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  let fontsReady = null;
  function loadFonts() {
    if (fontsReady) return fontsReady;
    if (!document.fonts || !document.fonts.load) return (fontsReady = Promise.resolve());
    fontsReady = Promise.all([
      document.fonts.load(`500 100px ${SERIF}`, 'Làm thật'), document.fonts.load(`italic 400 100px ${SERIF}`, 'thấy thật'),
      document.fonts.load(`400 40px ${SANS}`, 'Ấy'), document.fonts.load(`600 40px ${SANS}`, 'Ấy'), document.fonts.load(`700 40px ${SANS}`, 'Ấy'),
    ]).catch(() => {});
    return Promise.race([fontsReady, new Promise(r => setTimeout(r, 2500))]);
  }

  class Player {
    constructor(mount, film) {
      this.film = film; this.t = film.poster || 0; this.playing = false; this.recording = false;
      mount.classList.add('cv');
      mount.innerHTML = '';
      this.canvas = document.createElement('canvas');
      this.canvas.width = film.w || 1920; this.canvas.height = film.h || 1080;
      this.canvas.setAttribute('role', 'img');
      this.canvas.setAttribute('aria-label', 'Phim: ' + film.title);
      this.ctx = this.canvas.getContext('2d');
      const big = document.createElement('button');
      big.className = 'cv-big'; big.type = 'button'; big.textContent = 'PHÁT'; big.setAttribute('aria-label', 'Phát phim');
      const bar = document.createElement('div');
      bar.className = 'cv-bar';
      bar.innerHTML = `<button type="button" data-a="play">▶ Phát</button><span class="cv-time">0:00 / ${fmt(film.duration)}</span><input class="cv-range" type="range" min="0" max="1000" value="0" aria-label="Tua phim"><button type="button" data-a="rec" title="Ghi lại phim thành file video trong trình duyệt">⬇ Tải video</button><button type="button" data-a="fs" aria-label="Toàn màn hình">⛶</button>`;
      mount.append(this.canvas, big, bar);
      this.mount = mount; this.big = big;
      this.btnPlay = bar.querySelector('[data-a=play]'); this.btnRec = bar.querySelector('[data-a=rec]');
      this.timeEl = bar.querySelector('.cv-time'); this.range = bar.querySelector('.cv-range');
      big.addEventListener('click', () => this.play());
      this.canvas.addEventListener('click', () => (this.playing ? this.pause() : this.play()));
      this.btnPlay.addEventListener('click', () => (this.playing ? this.pause() : this.play()));
      this.btnRec.addEventListener('click', () => this.record());
      bar.querySelector('[data-a=fs]').addEventListener('click', () => {
        if (document.fullscreenElement) document.exitFullscreen(); else mount.requestFullscreen && mount.requestFullscreen().catch(() => {});
      });
      this.range.addEventListener('input', () => { if (this.recording) return; this.pause(); this.seek(this.range.value / 1000 * film.duration); });
      mount.tabIndex = 0;
      mount.addEventListener('keydown', e => { if (e.key === ' ') { e.preventDefault(); this.playing ? this.pause() : this.play(); } });
      loadFonts().then(() => this.draw());
      this.draw();
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting && this.playing && !this.recording) this.pause(); }), { threshold: .2 }).observe(mount);
      }
    }
    draw() {
      const f = this.film, ctx = this.ctx, t = this.t;
      const s0 = { t, w: this.canvas.width, h: this.canvas.height };
      ctx.save();
      bg(ctx, s0, f.bg || '#0b0b0b');
      ctx.restore();
      for (const sc of f.scenes) {
        if (t < sc.from || t >= sc.to) continue;
        const s = Object.assign({}, s0, { lt: t - sc.from, dur: sc.to - sc.from, p: (t - sc.from) / (sc.to - sc.from) });
        ctx.save();
        try { sc.draw(ctx, s, fx); } catch (e) { /* một cảnh lỗi không làm hỏng cả phim */ console.warn(e); }
        ctx.restore();
      }
      this.timeEl.textContent = `${fmt(t)} / ${fmt(f.duration)}`;
      this.range.value = Math.round(t / f.duration * 1000);
    }
    seek(t) { this.t = clamp(t, 0, this.film.duration); this.draw(); }
    play() {
      if (this.playing) return;
      if (this.t >= this.film.duration - .05) this.t = 0;
      this.playing = true; this.mount.classList.add('playing'); this.btnPlay.textContent = '❚❚ Dừng';
      let last = performance.now();
      const step = now => {
        if (!this.playing) return;
        this.t += (now - last) / 1000; last = now;
        if (this.t >= this.film.duration) { this.t = this.film.duration - .001; this.draw(); this.pause(true); return; }
        this.draw();
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    pause(ended) {
      this.playing = false; this.mount.classList.remove('playing');
      this.btnPlay.textContent = ended ? '↺ Xem lại' : '▶ Phát';
      this.big.textContent = ended ? 'XEM LẠI' : 'PHÁT';
      if (ended && this.onEnd) this.onEnd();
    }
    record() {
      const say = m => (window.LTT ? window.LTT.toast(m) : alert(m));
      if (this.recording) return;
      if (!this.canvas.captureStream || !window.MediaRecorder) { say('Trình duyệt này chưa hỗ trợ ghi video. Hãy thử Chrome hoặc Edge trên máy tính.'); return; }
      const types = ['video/mp4;codecs=avc1', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'];
      const mime = types.find(m => MediaRecorder.isTypeSupported(m)) || '';
      const stream = this.canvas.captureStream(this.film.fps || 30);
      let rec;
      try { rec = new MediaRecorder(stream, mime ? { mimeType: mime, videoBitsPerSecond: 10e6 } : undefined); } catch (e) { say('Không khởi tạo được bộ ghi video.'); return; }
      const chunks = [];
      rec.ondataavailable = e => e.data.size && chunks.push(e.data);
      rec.onstop = () => {
        const type = rec.mimeType || mime || 'video/webm';
        const ext = type.includes('mp4') ? 'mp4' : 'webm';
        const url = URL.createObjectURL(new Blob(chunks, { type }));
        const a = Object.assign(document.createElement('a'), { href: url, download: `${this.film.id}.${ext}` });
        document.body.append(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        this.recording = false; this.btnRec.classList.remove('cv-rec'); this.btnRec.textContent = '⬇ Tải video';
        say(`Đã tạo file ${this.film.id}.${ext} từ code 🎬`);
      };
      this.recording = true; this.btnRec.classList.add('cv-rec');
      say('Đang ghi phim thành file video… giữ tab này mở cho tới khi phim chạy xong.');
      this.pause(); this.t = 0; this.draw();
      this.onEnd = () => { this.onEnd = null; setTimeout(() => rec.state !== 'inactive' && rec.stop(), 250); };
      const tick = setInterval(() => { if (!this.recording) return clearInterval(tick); this.btnRec.textContent = `● Đang ghi ${fmt(this.t)}`; }, 250);
      rec.start(200);
      setTimeout(() => this.play(), 150);
    }
  }

  window.CodeVideo = { Player, fx, films: {} };
  function mountAll() {
    document.querySelectorAll('[data-film]').forEach(el => {
      const film = window.CodeVideo.films[el.dataset.film];
      if (film && !el.dataset.mounted) { el.dataset.mounted = '1'; el._player = new Player(el, film); }
    });
  }
  window.CodeVideo.mountAll = mountAll;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountAll); else setTimeout(mountAll);
})();
