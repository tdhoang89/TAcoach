# Chụp từng slide ở trạng thái cuối (mọi bước đã hiện) bằng Chrome thật, headless.
# Dùng: python _src/kiem-thu/chup-slide.py [base_url] [out_dir] [mã slide...]
# Cần: máy chủ đang chạy (python -m http.server 8771), pip install playwright, có Google Chrome.
import sys, os, json, time
from playwright.sync_api import sync_playwright

base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8771/trinh-chieu.html?mode=present'
import tempfile
out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(tempfile.gettempdir(), 'ltt2-shots')
only = sys.argv[3:]
os.makedirs(out, exist_ok=True)
W, H = 1600, 900
with sync_playwright() as p:
    b = p.chromium.launch(channel='chrome', headless=True)
    pg = b.new_page(viewport={'width': W, 'height': H}, device_scale_factor=1)
    errs = []
    pg.on('console', lambda m: errs.append(f'{m.type}: {m.text}') if m.type in ('error', 'warning') else None)
    pg.on('pageerror', lambda e: errs.append(f'pageerror: {e}'))
    pg.goto(base, wait_until='networkidle')
    pg.wait_for_function('document.body.classList.contains("ready")', timeout=15000)
    pg.wait_for_timeout(600)
    n = pg.evaluate('DECKAPI.SL.length')
    ids = pg.evaluate('DECKAPI.SL.map(d => d.id)')
    pg.evaluate('''window.__show = (i, st) => { DECKAPI.setSpeed(0.01); DECKAPI.go(i, { fwd: true, fromStart: true, force: true }); const d = DECKAPI.SL[i]; const m = st === undefined ? d.steps : Math.min(st, d.steps); for (let k = 0; k < m; k++) DECKAPI.next(); return d.steps; }; 1''')
    for i, sid in enumerate(ids):
        if only and sid not in only:
            continue
        steps = pg.evaluate(f'__show({i})')
        pg.wait_for_timeout(950)
        pg.evaluate('DECKAPI.finishAll()')
        pg.wait_for_timeout(60)
        pg.screenshot(path=os.path.join(out, f'{i+1:02d}-{sid}.png'))
    print(json.dumps({'slides': n, 'errors': errs[:30]}, ensure_ascii=False, indent=1))
    b.close()
