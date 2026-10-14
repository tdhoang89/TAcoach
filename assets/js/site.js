/* =====================================================================
   LÀM THẬT, THẤY THẬT · site.js
   Điều hướng · tìm kiếm · prompt · tiến độ · chuyển động
   ===================================================================== */
(function () {
  'use strict';
  const root = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bộ nhớ bị chặn */ } },
  };
  let lenis = null;

  /* ---------- Toast ---------- */
  const toastEl = $('.toast');
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  /* ---------- Giao diện sáng / tối, cỡ chữ ---------- */
  $$('[data-theme-toggle]').forEach(b => b.addEventListener('click', () => {
    const dark = root.dataset.theme === 'dark';
    root.dataset.theme = dark ? 'light' : 'dark';
    store.set('ltt:theme', root.dataset.theme);
    toast(dark ? 'Nền sáng' : 'Nền tối');
  }));
  $$('[data-fs]').forEach(b => b.addEventListener('click', () => {
    const cur = parseFloat(getComputedStyle(root).getPropertyValue('--fs')) || 1;
    const next = Math.min(1.3, Math.max(.9, +(cur + (+b.dataset.fs) * .06).toFixed(2)));
    root.style.setProperty('--fs', next);
    store.set('ltt:fs', next);
    toast(`Cỡ chữ ${Math.round(next * 100)}%`);
  }));

  /* ---------- Điều hướng ---------- */
  const nav = $('[data-nav]');
  const megas = $$('.has-mega');
  function closeMegas(except) {
    megas.forEach(m => { if (m !== except) { m.classList.remove('open'); $('.nav-btn', m).setAttribute('aria-expanded', 'false'); } });
  }
  megas.forEach(m => {
    const btn = $('.nav-btn', m);
    btn.addEventListener('click', e => {
      e.stopPropagation();
      // Vừa mở bằng di chuột thì cú bấm ngay sau đó giữ menu mở (không đóng lại)
      const justHovered = FINE && Date.now() - (+m.dataset.hoverAt || 0) < 700;
      const open = justHovered ? true : !m.classList.contains('open');
      closeMegas(m);
      m.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
    });
    if (FINE) {
      let t;
      m.addEventListener('mouseenter', () => { clearTimeout(t); closeMegas(m); if (!m.classList.contains('open')) m.dataset.hoverAt = Date.now(); m.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); });
      m.addEventListener('mouseleave', () => { t = setTimeout(() => { m.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }, 180); });
    }
  });
  document.addEventListener('click', e => { if (!e.target.closest('.has-mega')) closeMegas(); });

  const menuBtn = $('[data-menu]');
  const menuPanel = $('[data-menu-panel]');
  function toggleMenu(force) {
    const open = force !== undefined ? force : !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', open);
    menuPanel && menuPanel.setAttribute('aria-hidden', !open);
    if (lenis) open ? lenis.stop() : lenis.start();
  }
  menuBtn && menuBtn.addEventListener('click', () => toggleMenu());
  menuPanel && menuPanel.addEventListener('click', e => { if (e.target.closest('a')) toggleMenu(false); });

  /* ---------- Cuộn: nav, thanh tiến độ đọc ---------- */
  const progressLine = $('.progress-line');
  const heroEl = $('.hero, .lhero, .phero, .nf');
  let lastY = 0;
  function onScroll() {
    const y = window.scrollY;
    const heroH = heroEl ? heroEl.offsetHeight - 70 : 40;
    if (nav) {
      nav.classList.toggle('is-solid', y > heroH);
      const anyOpen = megas.some(m => m.classList.contains('open')) || document.body.classList.contains('menu-open');
      nav.classList.toggle('is-hidden', !anyOpen && y > lastY + 4 && y > 400);
      if (y < lastY - 4) nav.classList.remove('is-hidden');
    }
    lastY = y;
    if (progressLine) {
      const max = document.documentElement.scrollHeight - innerHeight;
      progressLine.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Prompt: copy, mở trong ChatGPT / Claude ---------- */
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.append(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (er) { /* bỏ qua */ }
      ta.remove(); return ok;
    }
  }
  function enhancePrompt(card) {
    if (card.dataset.ready) return;
    card.dataset.ready = '1';
    const body = $('.prompt-body', card);
    const actions = $('.prompt-actions', card);
    if (!body || !actions) return;
    const text = body.textContent;
    const copy = document.createElement('button');
    copy.type = 'button'; copy.className = 'p-copy'; copy.textContent = 'Copy';
    copy.addEventListener('click', async () => {
      const ok = await copyText(text);
      copy.textContent = ok ? 'Đã copy ✓' : 'Không copy được';
      copy.classList.toggle('ok', ok);
      toast(ok ? 'Đã copy. Dán vào ChatGPT, Claude hoặc Gemini nhé!' : 'Hãy bôi đen và copy thủ công');
      setTimeout(() => { copy.textContent = 'Copy'; copy.classList.remove('ok'); }, 1800);
    });
    const q = encodeURIComponent(text);
    const gpt = Object.assign(document.createElement('a'), { href: 'https://chatgpt.com/?q=' + q, target: '_blank', rel: 'noopener', textContent: 'Mở ChatGPT ↗' });
    const cla = Object.assign(document.createElement('a'), { href: 'https://claude.ai/new?q=' + q, target: '_blank', rel: 'noopener', textContent: 'Mở Claude ↗' });
    gpt.title = cla.title = 'Mở tab mới với prompt đã điền sẵn. Nhớ thay phần [ngoặc vuông] trước khi gửi.';
    actions.append(copy, gpt, cla);
  }
  $$('.prompt').forEach(enhancePrompt);

  /* ---------- Tự kiểm tra & tiến độ ---------- */
  function taskKey(id) { return 'ltt:task:' + id; }
  function countDone(slug, total) {
    let n = 0;
    for (let i = 1; i <= total; i++) if (store.get(taskKey(slug + ':' + i)) === '1') n++;
    return n;
  }
  function paintProgress() {
    $$('[data-progress-of]').forEach(el => {
      const total = +el.dataset.total, done = countDone(el.dataset.progressOf, total);
      $('.toc-progress-bar i', el).style.width = (total ? done / total * 100 : 0) + '%';
      $('.toc-progress-txt', el).textContent = `${done}/${total} đã tích${done === total && total ? ' · Hoàn thành ✓' : ''}`;
    });
    $$('[data-hero-progress]').forEach(el => {
      const total = +el.dataset.total, done = countDone(el.dataset.heroProgress, total);
      el.textContent = total ? `${done}/${total}` : '–';
    });
    let all = 0, allDone = 0;
    $$('[data-card-progress]').forEach(el => {
      const total = +el.dataset.total, done = countDone(el.dataset.cardProgress, total);
      all += total; allDone += done;
      el.textContent = done ? (done === total ? 'Hoàn thành ✓' : `${done}/${total} đã tích`) : '';
      el.classList.toggle('done', done === total && total > 0);
    });
    const tp = $('[data-total-progress]');
    if (tp) tp.textContent = `Tiến độ của bạn: ${all ? Math.round(allDone / all * 100) : 0}%`;
  }
  $$('input[data-task]').forEach(cb => {
    cb.checked = store.get(taskKey(cb.dataset.task)) === '1';
    cb.addEventListener('change', () => {
      store.set(taskKey(cb.dataset.task), cb.checked ? '1' : '0');
      paintProgress();
      if (cb.checked) {
        const list = cb.closest('ul');
        if (list && $$('input[data-task]', list).every(x => x.checked)) toast('Tuyệt vời! Bạn đã tích hết phần này 🎉');
      }
    });
  });
  paintProgress();

  /* ---------- Mục lục: đánh dấu mục đang đọc ---------- */
  const tocLinks = $$('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const map = new Map(tocLinks.map(a => [decodeURIComponent(a.hash.slice(1)), a]));
    const io = new IntersectionObserver(ents => {
      ents.forEach(en => {
        if (en.isIntersecting) {
          tocLinks.forEach(a => a.classList.remove('is-active'));
          const a = map.get(en.target.id); a && a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    $$('.prose h2[id]').forEach(h => io.observe(h));
  }

  /* ---------- Neo trong trang ---------- */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.hasAttribute('data-open-search')) return;
    const id = decodeURIComponent(a.getAttribute('href').slice(1));
    const t = id ? document.getElementById(id) : null;
    if (!t) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(t, { offset: -84 }); else t.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' });
    history.replaceState(null, '', '#' + id);
  });
  function flashHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    const el = id && document.getElementById(id);
    if (el && el.classList.contains('prompt')) { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
  }
  addEventListener('hashchange', flashHash);
  setTimeout(flashHash, 400);

  /* =====================================================================
     TÌM KIẾM
     ===================================================================== */
  const sBox = $('[data-search]');
  const sInput = $('[data-search-input]');
  const sResults = $('[data-search-results]');
  const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase();
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let INDEX = null, sel = 0, hits = [];
  function loadIndex() {
    if (INDEX || window.SEARCH_INDEX) { INDEX = INDEX || prep(window.SEARCH_INDEX); return Promise.resolve(); }
    return new Promise(res => {
      const s = document.createElement('script');
      const ver = (document.querySelector('script[data-ver]') || {}).dataset;
      s.src = 'assets/js/search-index.js' + (ver && ver.ver ? '?v=' + ver.ver : '');
      s.onload = () => { INDEX = prep(window.SEARCH_INDEX || []); res(); };
      s.onerror = () => { INDEX = []; res(); };
      document.head.append(s);
    });
  }
  function prep(list) { return list.map(e => Object.assign({}, e, { nh: norm(e.h), nt: norm(e.t), nx: norm(e.x) })); }
  function highlight(text, toks) {
    const chars = [...text];
    const n = chars.map(c => norm(c)).join('');
    const o = chars.join('');
    if (n.length !== o.length) return esc(text);
    const marks = new Array(o.length).fill(false);
    toks.forEach(t => { let i = n.indexOf(t); while (t && i > -1) { for (let k = i; k < i + t.length; k++) marks[k] = true; i = n.indexOf(t, i + t.length); } });
    let out = '', on = false;
    for (let i = 0; i < o.length; i++) {
      if (marks[i] && !on) { out += '<mark>'; on = true; }
      if (!marks[i] && on) { out += '</mark>'; on = false; }
      out += esc(o[i]);
    }
    return out + (on ? '</mark>' : '');
  }
  function snippet(e, toks) {
    const i = Math.max(0, Math.min(...toks.map(t => { const k = e.nx.indexOf(t); return k < 0 ? 1e9 : k; })));
    if (i >= 1e9 || i < 60) return e.x.slice(0, 170);
    return '…' + e.x.slice(i - 50, i + 130);
  }
  function search(q) {
    const nq = norm(q.trim());
    const toks = nq.split(/\s+/).filter(t => t.length > 0);
    if (!toks.length) return [];
    const out = [];
    for (const e of INDEX) {
      let s = 0, ok = true;
      for (const t of toks) {
        if (e.nh.includes(t)) s += e.nh.startsWith(t) || e.nh.includes(' ' + t) ? 9 : 6;
        else if (e.nt.includes(t)) s += 3;
        else if (e.nx.includes(t)) s += 1;
        else { ok = false; break; }
      }
      if (!ok) continue;
      if (toks.length > 1 && e.nh.includes(nq)) s += 10;
      else if (toks.length > 1 && e.nx.includes(nq)) s += 4;
      if (e.k === 'lesson') s += 1;
      out.push([s, e]);
    }
    out.sort((a, b) => b[0] - a[0]);
    return out.slice(0, 40).map(x => x[1]);
  }
  const GROUP = { lesson: 'Bài học', topic: 'Chuyên đề', page: 'Trang', prompt: 'Prompt' };
  function renderResults() {
    const q = sInput.value;
    if (!q.trim()) { sResults.innerHTML = '<p class="sr-empty">Gõ từ khoá để tìm trong toàn bộ bài học, prompt, từ điển và hỏi đáp.</p>'; hits = []; return; }
    hits = search(q);
    const toks = norm(q).split(/\s+/).filter(Boolean);
    if (!hits.length) { sResults.innerHTML = `<p class="sr-empty">Chưa tìm thấy "${esc(q)}". Thử từ khác ngắn hơn, hoặc… hỏi thẳng người bạn AI của bạn 😉</p>`; return; }
    let html = '', last = '';
    hits.forEach((e, i) => {
      const g = GROUP[e.k] || 'Trang';
      if (g !== last) { html += `<div class="sr-group">${g}</div>`; last = g; }
      const head = e.h === e.t ? e.h : `${e.h} · <small>${esc(e.t)}</small>`;
      html += `<a class="sr${i === sel ? ' on' : ''}" href="${e.u}" data-i="${i}"><b>${e.h === e.t ? highlight(e.h, toks) : highlight(e.h, toks) + ' <span style="display:inline;color:var(--muted);font-weight:400">· ' + esc(e.t) + '</span>'}</b><span>${highlight(snippet(e, toks), toks)}</span></a>`;
      void head;
    });
    sResults.innerHTML = html;
  }
  function openSearch(q) {
    if (!sBox) return;
    closeMegas(); toggleMenu(false);
    sBox.hidden = false;
    if (lenis) lenis.stop();
    loadIndex().then(() => { if (q) sInput.value = q; sel = 0; renderResults(); });
    setTimeout(() => sInput.focus(), 30);
  }
  function closeSearch() { if (!sBox) return; sBox.hidden = true; if (lenis) lenis.start(); }
  $$('[data-open-search]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openSearch(); }));
  $$('[data-close-search]').forEach(b => b.addEventListener('click', closeSearch));
  sBox && sBox.addEventListener('click', e => { if (e.target === sBox) closeSearch(); });
  $$('.search-hints button').forEach(b => b.addEventListener('click', () => { sInput.value = b.textContent; sel = 0; renderResults(); sInput.focus(); }));
  sInput && sInput.addEventListener('input', () => { sel = 0; renderResults(); });
  sInput && sInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!hits.length) return;
      sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + hits.length) % hits.length;
      $$('.sr', sResults).forEach((a, i) => a.classList.toggle('on', i === sel));
      const on = $('.sr.on', sResults); on && on.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      const on = $('.sr.on', sResults) || $('.sr', sResults);
      if (on) { location.href = on.getAttribute('href'); closeSearch(); }
    }
  });
  sResults && sResults.addEventListener('click', e => { if (e.target.closest('.sr')) closeSearch(); });
  document.addEventListener('keydown', e => {
    const typing = e.target.closest('input, textarea, select, [contenteditable]');
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); sBox.hidden ? openSearch() : closeSearch(); }
    else if (e.key === '/' && !typing) { e.preventDefault(); openSearch(); }
    else if (e.key === 'Escape') { closeSearch(); closeMegas(); toggleMenu(false); }
  });

  /* =====================================================================
     CON TRỎ
     ===================================================================== */
  const cursor = $('.cursor');
  if (cursor && FINE && !REDUCED) {
    const label = $('span', cursor);
    let x = -100, y = -100, cx = x, cy = y;
    addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; }, { passive: true });
    (function loop() { cx += (x - cx) * .22; cy += (y - cy) * .22; cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(loop); })();
    document.addEventListener('pointerover', e => {
      const big = e.target.closest('[data-cursor]');
      const link = e.target.closest('a, button, summary, label, input');
      cursor.classList.toggle('big', !!big);
      cursor.classList.toggle('link', !big && !!link);
      label.textContent = big ? big.dataset.cursor : '';
    });
  } else if (cursor) cursor.remove();

  /* =====================================================================
     CHUYỂN ĐỘNG (GSAP + ScrollTrigger + Lenis), tự lùi nếu không có
     ===================================================================== */
  function splitWords(el) {
    if (el.dataset.splitDone) return [];
    el.dataset.splitDone = '1';
    const out = [];
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const parts = n.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach(p => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.append(' '); return; }
            const w = document.createElement('span'); w.className = 'wl';
            const inner = document.createElement('span'); inner.textContent = p;
            w.append(inner); frag.append(w); out.push(inner);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'SMALL') walk(n);
      });
    };
    walk(el);
    return out;
  }
  function splitScrub(el) {
    const words = [];
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(p => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.append(p); return; }
            const w = document.createElement('span'); w.className = 'word'; w.textContent = p; frag.append(w); words.push(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'SMALL') walk(n);
      });
    };
    walk(el);
    return words;
  }

  function motion() {
    const gsap = window.gsap, ST = window.ScrollTrigger;
    if (!gsap || !ST || REDUCED) { root.classList.remove('motion-pre'); return; }
    gsap.registerPlugin(ST);
    root.classList.add('motion-on');
    const style = document.createElement('style');
    style.textContent = '.wl{display:inline-block;overflow:hidden;vertical-align:top;padding:.16em .03em .12em;margin:-.16em -.03em -.12em}.wl>span{display:inline-block;will-change:transform}';
    document.head.append(style);

    if (window.Lenis && FINE) {
      lenis = new window.Lenis({ duration: 1.05, smoothWheel: true });
      lenis.on('scroll', ST.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      root.classList.add('lenis');
    }

    const splits = $$('[data-split]').map(el => splitWords(el));
    $$('[data-reveal]').forEach(el => gsap.set(el, { autoAlpha: 0, y: 36 }));
    splits.forEach(w => gsap.set(w, { yPercent: 115 }));
    const heroLines = $$('[data-split-lines] .line > span');
    gsap.set(heroLines, { yPercent: 115 });
    gsap.set('.hero-meta, .hero-bottom > *', { autoAlpha: 0, y: 20 });
    root.classList.remove('motion-pre');

    /* Intro */
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    const curtain = $('[data-curtain]');
    let seen = false;
    try { seen = sessionStorage.getItem('ltt:intro') === '1'; sessionStorage.setItem('ltt:intro', '1'); } catch (e) { /* bỏ qua */ }
    if (curtain) {
      if (seen) curtain.remove();
      else {
        tl.from($$('span', curtain), { yPercent: 120, duration: 1, stagger: .12 })
          .to(curtain, { yPercent: -100, duration: 1.1, ease: 'expo.inOut', onComplete: () => curtain.remove() }, '+=.35');
      }
    }
    tl.to(heroLines, { yPercent: 0, duration: 1.4, stagger: .12 }, curtain && !seen ? '-=.55' : .1)
      .to('.hero-meta, .hero-bottom > *', { autoAlpha: 1, y: 0, duration: 1.1, stagger: .08 }, '-=1');
    const heroSplit = $$('.lhero [data-split], .phero [data-split]').map(el => $$('.wl > span', el)).flat();
    if (heroSplit.length) tl.to(heroSplit, { yPercent: 0, duration: 1.2, stagger: .04 }, .1);
    const heroReveal = $$('.lhero [data-reveal], .phero [data-reveal]');
    if (heroReveal.length) tl.to(heroReveal, { autoAlpha: 1, y: 0, duration: 1.1, stagger: .08 }, .35);

    /* Bộ sưu tập ngang (máy tính) */
    const coll = $('.collection');
    const track = $('[data-collection]');
    if (coll && track) {
      ST.matchMedia({
        '(min-width: 1000px)': () => {
          coll.classList.add('is-pinned');
          const dist = () => Math.max(0, track.scrollWidth - track.clientWidth);
          const tw = gsap.to(track, {
            x: () => -dist(), ease: 'none',
            scrollTrigger: { trigger: coll, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true },
          });
          gsap.from($$('.look', track), { y: 80, autoAlpha: 0, stagger: .08, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: coll, start: 'top 70%' } });
          return () => { coll.classList.remove('is-pinned'); tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(track, { x: 0 }); };
        },
      });
    }

    /* Reveal khi cuộn */
    const rest = $$('[data-reveal]').filter(el => !el.closest('.lhero, .phero'));
    ST.batch(rest, {
      start: 'top 88%', once: true,
      onEnter: b => { gsap.to(b, { autoAlpha: 1, y: 0, duration: 1.1, stagger: .09, ease: 'expo.out', overwrite: true }); b.forEach(el => el.classList.add('in')); },
    });
    $$('[data-split]').filter(el => !el.closest('.lhero, .phero')).forEach(el => {
      ST.create({ trigger: el, start: 'top 85%', once: true, onEnter: () => gsap.to($$('.wl > span', el), { yPercent: 0, duration: 1.2, stagger: .04, ease: 'expo.out' }) });
    });

    /* Tuyên ngôn: chữ sáng dần theo cuộn */
    $$('[data-scrub]').forEach(el => {
      const words = splitScrub(el);
      gsap.fromTo(words, { opacity: .13 }, { opacity: 1, stagger: .05, ease: 'none', scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 52%', scrub: true } });
    });

    /* Đếm số */
    $$('[data-count]').forEach(el => {
      const end = +el.dataset.count, o = { v: 0 };
      el.textContent = '0';
      ST.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => gsap.to(o, { v: end, duration: 1.8, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(o.v); } }) });
    });

    /* Parallax */
    $$('.lhero-n').forEach(el => gsap.to(el, { yPercent: 30, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top top', end: 'bottom top', scrub: true } }));
    $$('.hero-bg').forEach(el => gsap.to(el, { yPercent: -18, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top top', end: 'bottom top', scrub: true } }));
    $$('.look-n').forEach(el => gsap.from(el, { yPercent: 22, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } }));

    /* Tiêu đề h2 trong bài: gạch trên chạy vào */
    $$('.prose h2').forEach(h => gsap.from(h, { autoAlpha: 0, y: 24, duration: .9, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 90%', once: true } }));

    addEventListener('load', () => ST.refresh());
    document.fonts && document.fonts.ready.then(() => ST.refresh());
  }

  /* Đợi GSAP (script defer) rồi chạy */
  if (window.gsap) motion();
  else addEventListener('load', motion, { once: true });

  /* =====================================================================
     XEM TRƯỚC BÀI TRÌNH CHIẾU (trang chủ): một "màn hình" tự chạy qua vài cảnh
     ===================================================================== */
  const prev = $('[data-deck-preview]');
  if (prev && 'IntersectionObserver' in window) {
    const SEQ = ['mo-pheu', 'mo-bai-hoc', 'tieu-de', 'dn-quote', 'dn-ba-dieu', 'b1-dong-nghiep', 'b2-bay', 'b2-dap-an', 'b3-bang', 'b3-bieu-do', 'b6-app', 'b7-ket-qua', 'dt-bay-bac', 'cam-on'];
    let k = 0, timer = 0, visible = false, loaded = false;
    const show = () => { try { prev.contentWindow.postMessage({ t: 'show', id: SEQ[k % SEQ.length], step: 99, anim: true }, '*'); } catch (e) { /* bỏ qua */ } k++; };
    const loop = () => { clearInterval(timer); if (visible && loaded && !document.hidden) timer = setInterval(show, 4200); };
    prev.addEventListener('load', () => { loaded = true; setTimeout(() => { show(); loop(); }, 1400); });
    new IntersectionObserver(es => es.forEach(en => {
      visible = en.isIntersecting;
      if (visible && !prev.src) prev.src = prev.dataset.src;
      loop();
    }), { rootMargin: '200px' }).observe(prev);
    document.addEventListener('visibilitychange', loop);
  }

  window.LTT = { toast, enhancePrompt, copyText, openSearch, norm, store };
})();
