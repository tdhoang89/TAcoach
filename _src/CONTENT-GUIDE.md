# Quy ước viết nội dung (đọc trước khi viết hoặc sửa bất kỳ file nào trong `_src/content/`)

## Bổ sung cho V2 (đọc trước tiên)

V2 giữ nguyên tinh thần V1 và thêm hai "xương sống" mới. Mọi trang mới phải ăn khớp với hai ý này:

1. **Phễu khoảng cách (Andrej Karpathy, bài đăng trên X ngày 11/10/2026, ông tự gọi là "ước lượng trên giấy nháp"):**
   - khoảng **6 tỷ người (~75% dân số)** gần như chưa từng chạm vào AI (LLM);
   - khoảng **1–2 tỷ (~20%)** dùng thỉnh thoảng, chủ yếu bản miễn phí kiểu ChatGPT;
   - khoảng **20 triệu (0,2%)** dùng các mô hình mạnh nhất cho công việc chuyên môn (chủ yếu lập trình, toán) và tận mắt thấy AI làm xong những dự án từng mất hàng tuần, hàng tháng;
   - khoảng **5.000 người (~0,00006%)** dùng hệ thống nội bộ của các phòng lab.
   - Ông nói khoảng cách hiểu biết **đang nới rộng**, giống "một cái phễu sắc" hơn là hai nhóm nói không hiểu nhau. Ba nguyên nhân: **độ lớn và tham vọng của việc giao cho AI**; **năng lực AI không đều** (mạnh nhất ở việc số hoá, kiểm chứng được như code, toán); **quyền truy cập** (miễn phí, trả phí, nội bộ).
   - Bài học của khoá: *không phải AI tạo ra khoảng cách, cách mình dùng AI tạo ra khoảng cách.* Mỗi bậc nâng kỹ năng là một bước đi xuống phễu: tạo khác biệt, hoặc rút ngắn khoảng cách. Đừng nói người học "đã vào nhóm 20 triệu"; nói "đi về phía".
2. **Giao việc như giao cho đồng nghiệp (Boris Cherny, người tạo ra Claude Code, bài đăng trên X ngày 6/10/2026):** "Hãy nói chuyện với Claude như nói với một đồng nghiệp. Prompt chẳng có bí mật gì cả." Với phần lớn việc, không cần câu lệnh dài, rào trước đón sau; hãy nói rõ **3 điều**:
   1. **Bạn muốn gì** (mục tiêu, dùng vào đâu, cho ai, thế nào là tốt);
   2. **Bỏ bao nhiêu công sức** (làm nhanh gọn, hay làm thật kỹ, dành nhiều thời gian suy nghĩ);
   3. **Kiểm tra thế nào** để biết đã làm đúng (và báo lại đã kiểm gì, chưa kiểm được gì).
   - Kết hợp với chiêu cũ: **"Thiếu gì thì hỏi mình"** (Hỏi thẳng bạn ấy). Lưu ý trung thực: việc phức tạp vẫn cần bối cảnh, ví dụ, ràng buộc; "ngắn" không có nghĩa là "thiếu".

**Thuật ngữ V2:** gọi 7 bài là **Bậc 1 … Bậc 7** (không dùng "Cấp"), vì mỗi bậc là một bước đi xuống phễu. Tên bài khớp với slide trình chiếu (`LV` trong `assets/js/deck-content.js`).

**Giọng V2:** vừa thực chiến vừa truyền cảm hứng. Mỗi trang nên để người đọc thấy "mình làm được, và làm ngay hôm nay". Không còn nhắc tới câu chuyện "100 trò chơi"; người chia sẻ tự giới thiệu sản phẩm của mình ở buổi gặp.

**Trang chuyên đề (`kind: topic`)**: bài thực chiến ngắn hơn bài cấp độ (khoảng 1.200–1.800 chữ), khung mục:
`## Khi nào dùng` · `## Cách nhờ` · `## Làm thật` (3–5 tình huống `### Tình huống n · …`, mỗi tình huống có prompt + hộp `result`) · `## Dám hỏi lại` (hộp `check`) · `## Biến thể theo ngành` (4 mục con như bài cấp độ, mỗi mục 1–2 câu + 1 prompt) · `## Còn việc gì giống vậy?` (`:::cols` work/life) · `## Tự kiểm tra` (3–5 ô) · `## Đi xa hơn` (2–4 mẹo, có link sang trang liên quan).
Front matter: `title, kind: topic, eyebrow: Chuyên đề, summary, time, tools, free, order` (order = số thứ tự hiển thị).


Website "Làm thật, thấy thật" là **trang tự học AI cho dân văn phòng Việt Nam**. Nó vừa dùng để trình chiếu ở buổi chia sẻ, vừa để người đọc **tự học một mình ở nhà**. Mỗi bài phải đủ chi tiết để người đọc **không cần người hướng dẫn** vẫn hiểu và làm được.

## Tinh thần & giọng văn
- Triết lý của người chia sẻ: **AI là người bạn trợ giúp siêu nhiên, đa nhiệm, ngày càng giỏi. Dám nhờ mọi thứ, và dám hỏi lại mọi thứ. Không biết nhờ thế nào? Hỏi thẳng bạn ấy.** Mọi thứ là **giao tiếp, như nói chuyện giữa người với người**.
- Đây là **chia sẻ**, không phải giảng bài. Gọi người đọc là **"bạn"**, gọi AI là **"bạn ấy"** hoặc **"người bạn AI"**. Người viết xưng **"mình"**.
- Câu ngắn, rõ, ấm áp, truyền cảm hứng nhưng **không sáo rỗng**, không hô khẩu hiệu. Tiếng Việt **có dấu đầy đủ**, tự nhiên như người Việt viết. Không dùng dấu gạch ngang dài (—) để nối câu; dùng dấu phẩy, dấu hai chấm hoặc tách câu.
- Đối tượng: dân văn phòng (Luật, Kế toán–Tài chính, Kinh doanh–CSKH, Vận hành–Xây dựng), đa số đã dùng ChatGPT bản miễn phí, ít người dùng Claude, nhiều người sợ "kỹ thuật", lo **bảo mật** và lo **AI bịa**.
- **Mỗi cấp độ là một "cách nhờ"**, không chỉ là một kỹ năng: luôn chỉ ra cách áp dụng sang việc khác (công việc + đời sống).

## Tính chính xác (rất quan trọng)
- **Không bịa** giá tiền, giới hạn lượt dùng, tên gói cụ thể, ngày ra mắt. Tính năng và giới hạn của các công cụ thay đổi liên tục, nên viết kiểu: *"kiểm tra trang chính thức vì gói và giới hạn thay đổi thường xuyên"*.
- Có thể khẳng định các điều cơ bản: ChatGPT (OpenAI), Claude (Anthropic), Gemini và NotebookLM (Google), Copilot (Microsoft), Perplexity. Projects (ChatGPT, Claude), Gems (Gemini), Custom GPT, Artifacts (Claude), Canvas (ChatGPT), Deep Research, chế độ giọng nói, upload file.
  - **Claude Cowork:** AI agent trong ứng dụng Claude desktop, làm việc trực tiếp với file và thư mục trên máy bạn (cần gói trả phí).
  - **Claude Code:** công cụ agent của Anthropic, chạy trong Terminal, ứng dụng desktop hoặc IDE (cần gói trả phí).
  - **Codex:** agent lập trình của OpenAI. **ChatGPT Agent:** chế độ để ChatGPT tự thao tác nhiều bước.
- Dữ liệu demo là **hư cấu**. Dùng đúng các con số được cung cấp bên dưới, không tự đổi.

## Cấu trúc file
Mỗi trang là một file `_src/content/<slug>.md`, bắt đầu bằng phần khai báo:

```
---
title: Email khó, viết lại trong 30 giây
kind: lesson
level: 1
how: Kể đủ bối cảnh, rồi nhờ bạn ấy góp ý thẳng
summary: Một câu (≤ 30 chữ) nói bài này giúp bạn điều gì.
time: 20 phút
tools: ChatGPT hoặc Claude
free: Có
---
```
- `kind`: `lesson` (7 cấp độ), `page` (trang thường), hoặc `prompts` (chỉ chứa prompt bổ sung cho thư viện, không thành trang).
- `free`: `Có` / `Một phần` / `Cần gói trả phí` (bản miễn phí có làm được bài này không).
- Với `page`: bỏ `level`, `how`; có thể thêm `eyebrow: Tài nguyên` (nhãn nhỏ phía trên tiêu đề).

## Cú pháp trong bài
- Tiêu đề mục dùng `##`, mục con dùng `###`. **Không dùng `#`.** Luôn để **một dòng trống** trước và sau tiêu đề, danh sách, bảng, khối prompt.
- **Khối prompt** (sẽ có nút Copy, nút "Mở trong ChatGPT/Claude" và tự vào Thư viện prompt):

  ````
  ```prompt 1b · Hỏi thẳng bạn ấy #chung
  Mình cần trả lời một khách hàng lâu năm đang rất bực…
  ```
  ````

  Phần sau chữ `prompt` là **tiêu đề** (mã ngắn + tên). Cuối dòng có thể thêm **thẻ**: `#chung #luat #ketoan #kinhdoanh #vanhanh #doisong #meta`. Prompt viết như **nói chuyện**, xưng "mình", chỗ cần thay đặt trong `[ngoặc vuông]`.
- **Hộp nội dung** (thụt vào 4 dấu cách, có thể nhiều đoạn, có thể chứa danh sách):

  ```
  !!! tip "Mẹo"
      Nội dung…
  ```

  Các loại hộp:
  - `tip` (mẹo) · `note` (lưu ý) · `warning` (cẩn thận) · `danger` (đừng làm)
  - `view` (*Góc nhìn*: một câu trích dẫn lớn của người chia sẻ)
  - `result` (*Bạn sẽ thấy*: mô tả kết quả mong đợi để người tự học biết mình làm đúng chưa)
  - `check` (*Dám hỏi lại*: cách kiểm chứng)
  - `try` (*Thử ngay*: một bài tập nhỏ)
  - `answer` (*Đáp án*: sẽ được **gập lại**, bấm mới mở)
- **Hai cột** (dùng cho "Còn việc gì giống vậy?"):

  ```
  :::cols
  !!! work "💼 Công việc"
      - …
  !!! life "🏡 Đời sống"
      - …
  :::
  ```
- **Các bước:** trong mục "Làm thật", mỗi bước là `### Bước 1 · Tên bước`.
- **Tự kiểm tra:** danh sách `- [ ] …` (thành ô tích, lưu tiến độ trên máy người đọc).
- **Nút tải file:** `[Tải hợp đồng mẫu (.docx)](files/cap-2/hop-dong-mua-ban-ke-kho-MAU.docx){.dl}`
- **Link nội bộ:** `[Cấp 2](cap-2.html)`, `[Thư viện prompt](thu-vien-prompt.html)`.
- Phím: `<kbd>Ctrl</kbd>`. Bảng markdown bình thường.

## Khung bắt buộc cho bài cấp độ (`kind: lesson`), đúng thứ tự và đúng tên mục
1. `## Bạn sẽ làm được gì`: 3–5 gạch đầu dòng.
2. `## Vì sao cách nhờ này hiệu quả`: giải thích dễ hiểu + 1 hộp `view`.
3. `## Chuẩn bị`: công cụ, tài khoản, file tải về (nút `.dl`), thời gian.
4. `## Làm thật: từng bước`: các `### Bước n · …`. Mỗi bước có prompt, giải thích ngắn, và hộp `result`. Có ít nhất 1 bước **"Hỏi thẳng bạn ấy"**.
5. `## Dám hỏi lại`: cách kiểm chứng kết quả, có hộp `check`; có hộp `answer` nếu bài có đáp án.
6. `## Biến thể theo ngành`: 4 mục con `### ⚖️ Pháp lý`, `### 💰 Kế toán – Tài chính`, `### 🤝 Kinh doanh – CSKH`, `### 🏗️ Vận hành – Xây dựng`, mỗi mục 1–2 câu + 1 prompt (gắn thẻ ngành).
7. `## Còn việc gì giống vậy?`: khối `:::cols` với `work` và `life` (mỗi bên 4–6 ý) + 1 câu chốt.
8. `## Khi kết quả chưa như ý`: bảng 3 cột `| Bạn gặp | Vì sao | Nói với bạn ấy thế này |` (4–6 dòng).
9. `## Tự kiểm tra`: 4–6 ô `- [ ]`.
10. `## Đi xa hơn`: 3–5 mẹo nâng cao + link sang cấp tiếp theo.

Độ dài mỗi bài cấp độ: khoảng **1.500–2.500 chữ**.

## Dữ liệu demo (dùng đúng tên file và con số)
Công ty hư cấu chung: **Công ty CP Phân phối Thiết bị Văn phòng Sao Mai**.

- **Cấp 2** – `files/cap-2/hop-dong-mua-ban-ke-kho-MAU.docx`: hợp đồng mua bán kệ kho số 27/2026/HĐMB/PA-SM. Bên A (bán) là Công ty TNHH Kệ kho Phú An, bên B (mua) là Sao Mai. Tổng 1.164.240.000đ. Gồm 10 điều + Phụ lục 02, 03 (Phụ lục 01 được nhắc tới nhưng **không đính kèm**).
  - **Câu bẫy:** "Nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?" → **không quy định** (Điều 7.2 chỉ ghi "hai bên sẽ cùng thương lượng"). AI hay đoán nhầm thành 8% (Điều 7.1, phạt **bên mua** chậm trả) hoặc 0,1%/ngày (Điều 3.4, lãi chậm trả của bên mua).
  - **3 điểm bất lợi cho bên mua:** (1) Điều 3.2 + 4.1 + 4.3: trả 100% trước khi giao, rủi ro chuyển sang bên mua ngay khi hàng lên xe tại kho bên bán; (2) Điều 5.2: bên bán tự quyết hư hỏng có phải "lỗi sử dụng" hay không; (3) Điều 7.1 vs 7.2: phạt một chiều.
  - **Điểm phụ:** Phụ lục 01 không đính kèm; Điều 4.4 chỉ 02 ngày kiểm tra; Điều 5.3 "thời gian hợp lý"; Điều 9.2 toà nơi bên bán đặt trụ sở; Phụ lục 02 mục 5 bên mua chịu chi phí đi lại ngoài 30 km; Phụ lục 03 mục 3 thời gian chờ mặt bằng không tính.
- **Cấp 3** – `files/cap-3/chi-phi-thang-9.xlsx`: 300 dòng chi phí tháng 9/2026 = 292 dòng thật + **8 dòng trùng**. Có 109 ô ngày gõ dạng chữ (nhiều định dạng), **3 số tiền gõ dạng chữ** ("400.000đ"), **10 ô trống**, 11 nhà cung cấp mỗi nơi viết 3–6 kiểu. **Tổng đúng sau khi bỏ trùng: 384.070.000đ.** 5 nhóm: Văn phòng phẩm, Đi lại, Tiếp khách, Dịch vụ thuê ngoài, Khác. Cột: Ngày, Nhà cung cấp, Nội dung, Số tiền (VND), Người đề nghị, Phòng ban.
  - `files/cap-3/cong-no-mau.xlsx`: 25 khách hàng, cột A Mã KH, B Ngày hoá đơn, C Số tiền, D Ngày đã trả (trống nếu chưa trả). Cột E "Số ngày quá hạn", F "Tình trạng" để trống cho người học nhờ AI viết công thức (hạn 30 ngày).
- **Cấp 5** – `files/cap-5/`: `mau-bao-cao-tuan.docx` (mẫu trống: Tóm tắt tuần · Kết quả chính (bảng Doanh số, Số đơn, Khách mới, Thu hồi công nợ) · Việc trễ hạn · Rủi ro & đề xuất · Kế hoạch tuần tới), `bao-cao-tuan-38.docx`, `bao-cao-tuan-39.docx` (phòng Kinh doanh CN Hà Nội, người lập Trần Thu Hà), `so-lieu-tuan-40.txt` (ghi chú viết vội, không dấu: doanh số ~1,29 tỷ, 44 đơn, 7 khách mới, thu nợ 1,02 tỷ, Phúc Lộc còn nợ 80 triệu quá hạn 40 ngày, báo giá Minh Quang lùi sang 9/10…). Bản nén: `files/cap-5/cap-5-tron-bo.zip`.
- **Cấp 6** – `files/cap-6/app-mau-theo-doi-tien-do.html`: app mẫu theo dõi tiến độ (đỏ quá hạn, cam còn ≤ 5 ngày, xanh đã xong, lọc theo người, % tiến độ, xuất CSV).
- **Cấp 7** – `files/cap-7/bao-cao-thang-9.zip`: 5 file của 5 chi nhánh, mỗi nơi một kiểu: `CN Ha Noi.xlsx` (đúng mẫu, có sheet công nợ), `CN Hai Phong.xlsx` (**đơn vị triệu đồng**, gộp ô), `CN Da Nang.docx` (viết thành đoạn văn), `CN Can Tho.csv` (xuất từ phần mềm kế toán, mã tài khoản 511/632/641/642/131, kế hoạch nằm ở dòng ghi chú thứ 3), `HCM - bao cao T9 (final) (sua lan 2).xlsx` (có sheet `nhap` cũ phải bỏ qua).
  - **Đáp án:** doanh thu toàn công ty **20.581.000.000đ** (kế hoạch 20,5 tỷ, đạt 100,4%), LNTT **2.056.200.000đ**.
  - **Phải phát hiện:** Đà Nẵng đạt **82%** kế hoạch (mất gói thầu trường học ~380 triệu, bão 17–18/9); Hải Phòng **sửa mái kho đột xuất 415 triệu**, khiến chi nhánh **lỗ 23 triệu**; nợ quá hạn trên 60 ngày gồm **Đông Hưng (HN) 268,5 triệu – 68 ngày** và **KH0087 (Cần Thơ) 412 triệu – 75 ngày**; **thưởng nóng đội bán hàng HCM 180 triệu cần GĐ duyệt** (đã tạm ứng 50%).
  - Theo chi nhánh (DT / %KH / LNTT): Hà Nội 5,46 tỷ / 105,0% / 735,6 tr · Hải Phòng 3,02 tỷ / 97,4% / −23 tr · Đà Nẵng 2,296 tỷ / 82,0% / 209 tr · Cần Thơ 1,985 tỷ / 104,5% / 246,6 tr · TP.HCM 7,82 tỷ / 104,3% / 888 tr.
- **In:** `files/in/the-cap-do-in.html` (thẻ cấp độ), `files/in/chung-nhan-level-up.html` (chứng nhận).

## Nguồn tham khảo đã có (đọc để lấy ý)
- `../../buoi-chia-se-01/03-nguoi-tham-du/so-tay-nguoi-tham-du.md`: câu mở lời từng cấp, biến thể ngành, thử thách 7 ngày.
- `../../buoi-chia-se-01/01-nguoi-chia-se/kich-ban-chia-se.md`: lời dẫn, góc nhìn, ví dụ "còn việc gì giống vậy".
- `../../buoi-chia-se-01/01-nguoi-chia-se/tong-quan.md`: tinh thần, căn cứ khảo sát.
- `../../giao-trinh-ai-cho-dan-van-phong.md`: kết quả khảo sát 21 người (nỗi đau: văn bản 13, Excel 11, tóm tắt 8, email 7; 19/21 muốn nâng chất lượng; lo bảo mật 9, sợ AI bịa 8; 67% dùng bản miễn phí; ChatGPT 20/20, Claude 7/20).
- `../../buoi-chia-se-01/06-truyen-thong/tin-nhan.md`: 7 ngày thử thách.
