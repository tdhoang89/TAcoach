# Cần: máy chủ đang chạy ở cổng 8771 (python -m http.server 8771 trong thư mục website), pip install playwright, có Google Chrome.
# Kiểm thử website: link nội bộ, neo, tương tác chính, giao diện điện thoại.
import sys, re, json, pathlib, html as H
sys.stdout.reconfigure(encoding='utf-8')
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(sys.argv[1])
pages = sorted(p.name for p in ROOT.glob('*.html'))
ids = {}
for name in pages:
    t = (ROOT / name).read_text(encoding='utf-8')
    ids[name] = set(re.findall(r'\bid="([^"]+)"', t))
deck_ids = set(re.findall(r"id: '([a-z0-9-]+)'", (ROOT / 'assets/js/deck-content.js').read_text(encoding='utf-8')))
deck_ids |= {'b%d' % n for n in range(1, 8)} | {'b%d-lam' % n for n in range(1, 8)} | {'b%d-giong-vay' % n for n in range(1, 8)}
broken = []
checked = 0
for name in pages:
    t = (ROOT / name).read_text(encoding='utf-8')
    for m in re.finditer(r'(?:href|src)="([^"]+)"', t):
        u = H.unescape(m.group(1))
        if u.startswith(('http', 'mailto:', 'data:', 'javascript:')) or u == '#':
            continue
        checked += 1
        path, _, frag = u.partition('#')
        path = path.split('?')[0]
        if not path:
            if frag and frag not in ids[name] and frag != 'top':
                broken.append((name, u, 'neo không có trong trang'))
            continue
        f = ROOT / path
        if not f.exists():
            broken.append((name, u, 'file không tồn tại')); continue
        if frag and path.endswith('.html'):
            if path == 'trinh-chieu.html':
                if frag not in deck_ids: broken.append((name, u, 'slide không tồn tại'))
            elif frag not in ids.get(path, set()) and not frag.startswith('p-'):
                broken.append((name, u, 'neo không có ở trang đích'))
# link trong deck-content
dc = (ROOT / 'assets/js/deck-content.js').read_text(encoding='utf-8')
for u in set(re.findall(r'''(?:href=\\?"|link: ')([a-z0-9\-/\.]+\.(?:html|docx|xlsx|zip|pdf))''', dc)):
    checked += 1
    if not (ROOT / u).exists(): broken.append(('deck-content.js', u, 'file không tồn tại'))
print(f'Đã kiểm {checked} link nội bộ trên {len(pages)} trang · hỏng: {len(broken)}')
for b in broken[:30]: print('  ', b)

with sync_playwright() as p:
    br = p.chromium.launch(channel='chrome', headless=True)
    ctx = br.new_context(viewport={'width': 1440, 'height': 900})
    ctx.grant_permissions(['clipboard-read', 'clipboard-write'], origin='http://localhost:8771')
    pg = ctx.new_page()
    errs = []
    pg.on('pageerror', lambda e: errs.append(f'{pg.url}: {e}'))
    pg.on('console', lambda m: errs.append(f'{pg.url}: {m.text}') if m.type == 'error' else None)
    # Mọi trang tải không lỗi JS
    for name in pages:
        if name == 'trinh-chieu.html': continue
        pg.goto('http://localhost:8771/' + name, wait_until='networkidle'); pg.wait_for_timeout(250)
    print('Lỗi JS khi tải các trang:', errs[:8])
    # Mega menu
    pg.goto('http://localhost:8771/index.html', wait_until='networkidle'); pg.wait_for_timeout(2500)
    pg.click('.has-mega:nth-of-type(3) .nav-btn'); pg.wait_for_timeout(700)
    print('Mega "Chuyên đề" mở:', pg.evaluate("document.querySelectorAll('.has-mega.open').length"), '· số mục:', pg.evaluate("document.querySelectorAll('.has-mega.open .mega-item').length"))
    pg.keyboard.press('Escape')
    # Tìm kiếm
    pg.keyboard.press('Control+k'); pg.wait_for_timeout(500)
    pg.keyboard.type('pheu khoang cach'); pg.wait_for_timeout(500)
    n = pg.evaluate("document.querySelectorAll('.sr').length"); first = pg.evaluate("(document.querySelector('.sr b')||{}).innerText")
    print('Tìm "pheu khoang cach":', n, 'kết quả · đầu tiên:', first)
    pg.keyboard.press('Enter'); pg.wait_for_timeout(1500); print('Enter →', pg.url.split('/')[-1])
    pg.keyboard.press('Control+k'); pg.wait_for_timeout(300); pg.fill('[data-search-input]', 'dong nghiep boris'); pg.wait_for_timeout(400)
    print('Tìm "dong nghiep boris":', pg.evaluate("document.querySelectorAll('.sr').length"), 'kết quả'); pg.keyboard.press('Escape')
    # Tự kiểm tra lưu tiến độ
    pg.goto('http://localhost:8771/giong-noi.html', wait_until='networkidle'); pg.wait_for_timeout(1500)
    pg.evaluate("document.querySelector('input[data-task]').scrollIntoView({block:'center'})"); pg.wait_for_timeout(600)
    pg.click('li.task label >> nth=0'); pg.wait_for_timeout(300)
    pg.reload(wait_until='networkidle'); pg.wait_for_timeout(1200)
    print('Ô tự kiểm tra còn tích sau tải lại:', pg.evaluate("document.querySelector('input[data-task]').checked"), '· tiến độ hero:', pg.inner_text('[data-hero-progress]'))
    # Copy prompt
    pg.evaluate("document.querySelector('.prompt .p-copy').scrollIntoView({block:'center'})"); pg.wait_for_timeout(500)
    pg.click('.prompt .p-copy'); pg.wait_for_timeout(300)
    print('Copy prompt trên trang:', pg.evaluate('navigator.clipboard.readText()')[:50])
    # Đổi nền tối
    pg.click('[data-theme-toggle]'); pg.wait_for_timeout(300); print('Nền tối:', pg.evaluate('document.documentElement.dataset.theme'))
    pg.click('[data-theme-toggle]')
    # Thư viện lọc
    pg.goto('http://localhost:8771/thu-vien-prompt.html', wait_until='networkidle'); pg.wait_for_timeout(1200)
    pg.click('.fchip:has-text("Chuyên đề")'); pg.wait_for_timeout(300); a = pg.inner_text('[data-lib-count]')
    pg.click('.fchip:has-text("Nền tảng")'); pg.wait_for_timeout(300); b2 = pg.inner_text('[data-lib-count]')
    pg.click('.fchip:has-text("Bậc 7")'); pg.wait_for_timeout(300); c = pg.inner_text('[data-lib-count]')
    print('Thư viện: Chuyên đề', a, '· Nền tảng', b2, '· Bậc 7', c)
    # Điện thoại
    m = br.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True).new_page()
    m.on('pageerror', lambda e: errs.append('mobile ' + str(e)))
    for name in ['index.html', 'khoang-cach.html', 'cap-3.html', 'mot-ngay.html', 'thu-vien-prompt.html', 'giao-viec-nhu-dong-nghiep.html', 'hop-hanh.html']:
        m.goto('http://localhost:8771/' + name, wait_until='networkidle'); m.wait_for_timeout(700)
        ov = m.evaluate('document.documentElement.scrollWidth - innerWidth')
        print(f'Điện thoại 390px · {name}: tràn ngang {ov}px')
    m.goto('http://localhost:8771/index.html', wait_until='networkidle'); m.wait_for_timeout(2600)
    m.click('[data-menu]'); m.wait_for_timeout(900)
    print('Menu điện thoại mở:', m.evaluate("document.body.classList.contains('menu-open')"), '· số link:', m.evaluate("document.querySelectorAll('.menu a').length"))
    m.screenshot(path='m-menu.png')
    m.goto('http://localhost:8771/index.html', wait_until='networkidle'); m.wait_for_timeout(3000)
    m.screenshot(path='m-home.png')
    m.goto('http://localhost:8771/cap-2.html', wait_until='networkidle'); m.wait_for_timeout(2600)
    m.screenshot(path='m-cap2.png')
    print('Lỗi JS tổng:', errs[:8])
    br.close()
