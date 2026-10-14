# Làm thật, thấy thật · Phiên bản 2

Website tự học AI cho dân văn phòng **và** bài trình chiếu cho buổi chia sẻ, trong cùng một thư mục. Website tĩnh 100%: **tải nguyên thư mục này lên GitHub là chạy**, không cần cài gì.

> Dám nhờ mọi thứ, và dám hỏi lại mọi thứ. Không biết nhờ thế nào? Hỏi thẳng bạn ấy.
> Và khi giao việc: nói rõ muốn gì, bỏ bao nhiêu công sức, kiểm tra thế nào.

---

## Có gì mới so với phiên bản 1

| | V1 | V2 |
|---|---|---|
| Câu chuyện | 7 cấp độ | **Phễu khoảng cách** (Karpathy, 11/10/2026) → **giao việc như đồng nghiệp** (Boris Cherny, 6/10/2026) → **7 bậc đi xuống phễu** → đi tiếp |
| Trình chiếu | 37 slide, chuyển cảnh rời | **68 slide như một cảnh quay liền**: sợi chỉ đỏ chạy xuyên suốt và biến hình theo từng slide, mở cảnh từ đầu kim, phần tử bay từ slide này sang slide sau, đẩy camera |
| Cách xem | Chỉ trình chiếu | **Trình chiếu · Tự học** (bài đọc + câu nhờ để copy bên cạnh) **· Xem như phim** (tự chạy, phụ đề, tua) **· Bản in / PDF** |
| Người chia sẻ | Phím tắt | Thêm **màn hình ghi chú** ở cửa sổ riêng (slide hiện tại, slide kế, lời dẫn, đồng hồ), mục lục, bút laser, nhảy slide bằng số |
| Nội dung tự học | 7 bài + tài nguyên | Thêm **2 bài nền tảng** (Khoảng cách AI, Giao việc như đồng nghiệp) + **7 chuyên đề thực chiến** (giọng nói, ảnh chụp, tra cứu có nguồn, họp hành, học nhanh, giọng văn, một ngày làm việc cùng AI). **252 câu nhờ** (V1: 159) |
| Phần mở màn | Trang 100 trò chơi | Khung "Xem vài thứ này": người chia sẻ tự giới thiệu sản phẩm của mình, slide không nêu tên |

---

## 🚀 Đưa lên GitHub Pages (khoảng 5 phút)

**Cách dễ nhất, không cần dòng lệnh:**

1. Vào <https://github.com/new>, đặt tên repo (ví dụ `lam-that-thay-that`), chọn **Public**, bấm **Create repository**.
2. Trong repo vừa tạo, bấm **uploading an existing file**. Kéo thả **toàn bộ nội dung bên trong** thư mục này (các file `.html`, thư mục `assets`, `files`, `_src`…), rồi bấm **Commit changes**.
   > GitHub web nhận tối đa 100 file mỗi lần. Thư mục này có 93 file nên tải một lần là đủ. Nếu báo quá giới hạn, tải `_src` ở lượt thứ hai (website vẫn chạy khi thiếu `_src`, thư mục này chỉ dùng để sửa nội dung).
3. Vào **Settings → Pages**: *Source* chọn **Deploy from a branch**, *Branch* chọn **main** / **(root)**, bấm **Save**.
4. Chờ 1–2 phút. Website có địa chỉ `https://<tên-github>.github.io/lam-that-thay-that/`.

**Hoặc dùng git:**

```bash
git init
git add .
git commit -m "Làm thật, thấy thật V2"
git branch -M main
git remote add origin https://github.com/<tên-github>/lam-that-thay-that.git
git push -u origin main
```

---

## 🎤 Bài trình chiếu (`trinh-chieu.html`)

### Trước buổi chia sẻ: điền cấu hình

Mở `_src/templates/trinh-chieu.html`, sửa khối `window.DECK_CONFIG` ở đầu file, rồi chạy `python _src/build.py`:

| Mục | Dùng để |
|---|---|
| `presenter` | Tên người chia sẻ, hiện ở slide tiêu đề |
| `event`, `date` | Nhãn sự kiện và ngày, hiện ở đầu slide tiêu đề |
| `links.zalo`, `links.phanHoi` | Link nhóm Zalo, phiếu phản hồi. Để trống thì ô mã QR tự ẩn. Mã QR "Trang tự học" tự trỏ về website khi chạy trên GitHub Pages |
| `showcase` | Danh sách sản phẩm của người chia sẻ cho slide "Xem vài thứ này" (`{ title, url }`). Để trống thì slide chỉ hiện khung "màn hình của người chia sẻ", không nêu tên sản phẩm nào |
| `revealPrompt` | `true`: có 2 slide cuối "Bài trình chiếu này được làm thế nào?" (trích câu giao việc thật đã tạo ra V2). Đặt `false` để ẩn |
| `survey`, `breakSlide` | Đặt `false` để ẩn slide số liệu khảo sát nhóm TA, hoặc slide giải lao |

### Ba cách xem (chọn ở thanh trên cùng, hoặc thêm `?mode=` vào địa chỉ)

- **Trình chiếu** (`?mode=present`): toàn màn hình, bấm để hiện từng phần.
- **Tự học** (`?mode=study`): bài đọc bên phải (trên điện thoại: bên dưới), có lời dẫn, câu nhờ để Copy / Mở ChatGPT / Mở Claude, link sang bài đầy đủ, đánh dấu slide đã xem.
- **Xem như phim** (`?mode=film`): tự chạy liền mạch khoảng 22 phút, phụ đề đồng bộ với từng phần trên slide, tua trên dòng thời gian. Nếu trình duyệt có giọng đọc tiếng Việt (thường có trên Microsoft Edge), nút **Lời dẫn** sẽ hiện để đọc to phụ đề.
- **Bản in / PDF** (`?view=print`): mỗi trang một slide kèm lời dẫn. File PDF dựng sẵn: `files/ban-in-trinh-chieu.pdf`.

Link thẳng tới một slide: thêm `#mã-slide`, ví dụ `trinh-chieu.html?mode=study#b2-bay` (mã slide xem trong `assets/js/deck-content.js`). Mỗi bài tự học đã có nút "Xem phần trình chiếu" dẫn đúng chỗ.

### Phím tắt

| Phím | Tác dụng |
|---|---|
| <kbd>→</kbd> <kbd>Space</kbd> <kbd>PgDn</kbd> / <kbd>←</kbd> <kbd>PgUp</kbd> | Tiếp (hiện từng phần, hết thì sang slide) / Lùi |
| <kbd>12</kbd> <kbd>Enter</kbd> | Nhảy tới slide 12 |
| <kbd>O</kbd> | Mục lục |
| <kbd>S</kbd> | **Màn hình người chia sẻ** ở cửa sổ riêng: kéo cửa sổ này sang màn hình laptop, cửa sổ trình chiếu sang máy chiếu. Bấm phím ở cửa sổ nào cũng điều khiển được |
| <kbd>N</kbd> | Bật / tắt bài đọc (chế độ Tự học) |
| <kbd>P</kbd> | Xem như phim: phát / dừng |
| <kbd>F</kbd> | Toàn màn hình |
| <kbd>T</kbd> / <kbd>Y</kbd> | Đồng hồ (3 phút hoặc theo slide) / 30 giây |
| <kbd>B</kbd> / <kbd>W</kbd> | Màn hình đen / trắng |
| <kbd>L</kbd> | Bút laser |
| <kbd>H</kbd> | Bảng phím tắt |

Màn hình người chia sẻ cần mở qua `http(s)` (GitHub Pages, hoặc máy chủ nhỏ ở mục "Xem thử"), không chạy khi mở thẳng file.

### Sửa slide

Toàn bộ slide nằm trong `assets/js/deck-content.js`, mỗi slide là một khối có: `html` (nội dung trên sân khấu 1920×1080), `note` (lời dẫn, cũng là phụ đề và bài đọc), `more` (phần đọc thêm khi tự học), `th` (hình của sợi chỉ đỏ ở từng bước). Ghi chú cách viết nằm ngay đầu file. Engine ở `assets/js/deck.js`, giao diện ở `assets/css/deck.css`. Sửa xong không cần build (nhưng nên build để đổi số phiên bản, tránh trình duyệt dùng bản cũ).

Mẹo "dám nhờ": mở Claude Code trong thư mục này và nói *"Thêm vào bậc 3 một slide ví dụ cho ngành ngân hàng, giữ đúng phong cách các slide khác, rồi chụp thử cho mình xem"*.

---

## 🗺️ Website tự học

| Trang | Dùng để |
|---|---|
| `index.html` | Trang chủ: phễu khoảng cách, ba câu để nhớ, giao việc như đồng nghiệp, 7 bậc, 7 chuyên đề, màn hình xem trước bài trình chiếu |
| `bat-dau.html` · `khoang-cach.html` · `giao-viec-nhu-dong-nghiep.html` | **Nền tảng**: đọc trước khi vào 7 bậc |
| `cap-1.html` → `cap-7.html` | 7 bậc: từng bước, câu nhờ, đáp án, biến thể theo ngành, tự kiểm tra |
| `giong-noi` · `anh-chup` · `tra-cuu-co-nguon` · `hop-hanh` · `hoc-nhanh` · `giong-van` · `mot-ngay` `.html` | **7 chuyên đề thực chiến** |
| `thu-vien-prompt.html` | 252 câu nhờ, lọc theo Nền tảng / Bậc / Chuyên đề / ngành |
| `an-toan` · `cong-cu` · `tu-dien` · `hoi-dap` · `thu-thach-7-ngay` · `tai-lieu` · `video-bang-code` `.html` | Tài nguyên |
| `files/` | File thực hành (hư cấu), thẻ 7 bậc và chứng nhận để in, PDF bài trình chiếu |

Tính năng: tìm kiếm toàn trang (<kbd>Ctrl</kbd>+<kbd>K</kbd>, gõ không dấu được), nút Copy / Mở ChatGPT / Mở Claude cho mọi câu nhờ, tiến độ tự học lưu trên trình duyệt, nền sáng / tối, chỉnh cỡ chữ, in bài.

---

## ✏️ Sửa nội dung website

Nội dung nằm trong `_src/content/*.md`. Quy ước viết (đọc mục "Bổ sung cho V2" trước): `_src/CONTENT-GUIDE.md`. Sau khi sửa:

```bash
pip install markdown
python _src/build.py
```

Muốn xuất lại file PDF của bài trình chiếu (cần `pip install playwright` và Google Chrome):

```bash
python _src/xuat-pdf.py
```

| Muốn sửa | Ở đâu |
|---|---|
| Bài học, chuyên đề, trang tài nguyên | `_src/content/*.md` (`kind: lesson` / `topic` / `page`) |
| Prompt bổ sung trong thư viện | `_src/content/_thu-vien-them.md` |
| Trang chủ, thư viện prompt, trang video, khung trang | `_src/templates/*.html` |
| Slide trình chiếu | `assets/js/deck-content.js` |
| Phim viết bằng code | `assets/js/films.js` |
| Màu sắc, phông chữ | Biến ở đầu `assets/css/site.css` và `assets/css/deck.css` |

---

## 🧪 Xem thử trên máy trước khi đưa lên

```bash
python -m http.server 8000
```

rồi mở <http://localhost:8000>. (Mở thẳng `index.html` cũng xem được gần hết, trừ màn hình người chia sẻ.)

---

## Ghi chú

- Mọi công ty, con người, số liệu trong file thực hành đều **hư cấu** (công ty "Sao Mai").
- Số liệu phễu là ước lượng của Andrej Karpathy (bài đăng trên X, 11/10/2026). Câu của Boris Cherny lấy từ bài đăng trên X ngày 6/10/2026 và các báo đưa tin; prompt mẫu của anh chỉ được báo chí trích từng mảnh, slide ghi rõ "trích ý, dịch".
- Tính năng và giới hạn của ChatGPT, Claude, Gemini… thay đổi thường xuyên. Trang luôn khuyên người đọc kiểm tra trang chính thức.
- Thư viện ngoài (CDN): Google Fonts (Noto Serif Display, Archivo, Be Vietnam Pro, JetBrains Mono), GSAP + ScrollTrigger và Lenis (chuyển động website), qrcodejs (mã QR). Bài trình chiếu không cần thư viện chuyển động nào: mất mạng vẫn chạy, chỉ đổi sang phông dự phòng.
