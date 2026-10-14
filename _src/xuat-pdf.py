# -*- coding: utf-8 -*-
"""
Xuất bài trình chiếu thành file PDF (mỗi trang một slide + lời dẫn) vào files/ban-in-trinh-chieu.pdf.

Chạy (từ thư mục gốc của website, SAU khi đã chạy build.py):   python _src/xuat-pdf.py
Cần:  pip install playwright   và máy có Google Chrome (dùng channel="chrome").
      Nếu chưa có Chrome: python -m playwright install chromium, rồi sửa CHANNEL = None.

Không cài được? Mở trinh-chieu.html?view=print trên trình duyệt, bấm "In / Lưu PDF", chọn "Lưu dưới dạng PDF".
"""
import functools
import http.server
import socketserver
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "files" / "ban-in-trinh-chieu.pdf"
CHANNEL = "chrome"


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def main():
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    with socketserver.TCPServer(("127.0.0.1", 0), handler) as httpd:
        port = httpd.server_address[1]
        threading.Thread(target=httpd.serve_forever, daemon=True).start()
        with sync_playwright() as p:
            browser = p.chromium.launch(channel=CHANNEL, headless=True) if CHANNEL else p.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1100, "height": 900})
            page.goto(f"http://127.0.0.1:{port}/trinh-chieu.html?view=print", wait_until="networkidle")
            page.wait_for_function('document.body.classList.contains("ready")', timeout=20000)
            page.wait_for_timeout(2500)
            n = page.evaluate('document.querySelectorAll(".pv-page").length')
            page.emulate_media(media="print")
            page.pdf(path=str(OUT), format="A4", print_background=True)
            browser.close()
        httpd.shutdown()
    print(f"✓ Đã xuất {n} slide → {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
