---
title: Viết đúng giọng của bạn và của công ty
kind: topic
eyebrow: Chuyên đề
summary: Dạy bạn ấy giọng văn của bạn từ vài bài cũ, thống nhất thuật ngữ công ty và gỡ "mùi AI" khỏi mọi bản nháp.
time: 30 phút
tools: ChatGPT, Claude hoặc Gemini
free: Một phần
order: 6
---

## Khi nào dùng

Bạn nhờ AI viết email. Đúng ngữ pháp, đủ ý, nhưng không phải bạn: "Kính gửi Quý khách", "Trong bối cảnh thị trường ngày càng cạnh tranh". Người nhận đọc hai câu là đoán ra máy viết. Bạn ấy chưa viết như bạn chỉ vì chưa ai dạy. Dùng khi:

- Bạn viết nhiều: email, báo cáo, thông báo, bài đăng.
- Công ty có quy ước về xưng hô, thuật ngữ, tên sản phẩm.
- Nhiều người cùng viết mà khách cần nghe "một giọng".

## Cách nhờ

Viết đúng giọng cũng là giao việc, nên vẫn là **3 điều** như khi nói với đồng nghiệp:

1. **Bạn muốn gì:** viết gì, cho ai, theo giọng nào.
2. **Bỏ bao nhiêu công sức:** nháp nhanh để bạn sửa, hay bản gửi thật cần soát kỹ.
3. **Kiểm tra thế nào:** đối chiếu bản mô tả và bảng thuật ngữ, báo lại đã sửa gì.

Và như mọi khi: **thiếu gì thì hỏi mình**.

```prompt GV1 · Viết đúng giọng mình theo 3 điều #chung #meta
Mình cần viết [loại văn bản] gửi [ai] để [mục đích], đúng giọng mình theo bản mô tả giọng văn và bảng thuật ngữ bên dưới.
Đây là [bản nháp nhanh / bản gửi thật, làm kỹ].
Viết xong, tự soát theo bản mô tả và bảng thuật ngữ, rồi báo mình đã sửa những câu nào.
Thiếu thông tin gì thì hỏi mình trước nhé.

[Bản mô tả giọng văn]
[Bảng thuật ngữ]
```

## Làm thật

### Tình huống 1 · Rút ra "bản mô tả giọng văn" rồi lưu lại

Chọn 3–5 bài bạn ưng nhất, **che tên người, tên công ty, số tiền**, rồi dán vào:

```prompt GV2 · Rút ra bản mô tả giọng văn #chung #meta
Dưới đây là [4] bài mình từng viết (đã che tên và số). Viết "bản mô tả giọng văn" dưới 250 chữ: độ dài câu, cách xưng hô, cách mở và kết, từ mình hay dùng, từ mình không bao giờ dùng, mức trang trọng. Mỗi điểm kèm một câu trích từ bài của mình. Điểm nào bạn đoán thì ghi rõ.

[Dán các bài viết]
```

Để khỏi dán lại mỗi lần, lưu bản mô tả vào **hướng dẫn tuỳ chỉnh** (custom instructions) hoặc một **Project/Gem** riêng cho việc viết ([Bậc 5](cap-5.html)). Tên và vị trí các mục này thay đổi thường xuyên, nên kiểm tra trang chính thức hoặc hỏi thẳng bạn ấy.

```prompt GV3 · Gói gọn để dán vào cài đặt #meta
Rút gọn bản mô tả ở trên thành các quy tắc ngắn dưới 150 chữ, mở đầu bằng "Khi viết thay mình:", để mình dán vào [hướng dẫn tuỳ chỉnh / Project]. Giữ 3 câu ví dụ tiêu biểu nhất.
```

!!! result "Bạn sẽ thấy"
    Kiểu như: *"Câu ngắn, dưới 20 chữ. Xưng 'em', gọi khách là 'anh/chị'. Vào việc ngay câu đầu. Không dùng 'quý khách'."* Nhiều người đọc xong mới nhận ra thói quen viết của chính mình. Chỗ nào chưa đúng, sửa rồi mới lưu.

### Tình huống 2 · Bảng thuật ngữ của công ty

Ba nhân viên, ba cách gọi khách, ba cách viết tên công ty. Một bảng thuật ngữ nhỏ là đủ chữa.

```prompt GV4 · Lập bảng thuật ngữ công ty #chung
Lập giúp mình bảng thuật ngữ cho văn bản gửi khách, 3 cột: Dùng · Không dùng · Ghi chú. Quy ước sẵn có: gọi "khách hàng", không gọi "quý khách"; viết "Sao Mai", không viết "SaoMai"; [tên sản phẩm viết đúng]. Đọc [3 email mẫu] dưới đây, đề xuất thêm từ nên thống nhất, rồi hỏi mình duyệt từng dòng.
```

!!! result "Bạn sẽ thấy"
    Bảng 10–20 dòng, có cả điểm bạn chưa nghĩ tới: "hoá đơn" hay "hóa đơn", "đơn hàng" hay "order". Duyệt xong, lưu cùng chỗ với bản mô tả.

### Tình huống 3 · Một thông điệp, ba người đọc

Cùng một tin: sếp cần quyết, khách cần yên tâm, đồng nghiệp cần biết việc.

```prompt GV5 · Một thông điệp cho 3 người đọc #chung
Mình cần báo: [ví dụ: lô hàng giao khách chậm 5 ngày vì nhà cung cấp giao thiếu]. Viết 3 bản theo giọng của mình:
1. Cho sếp: 3–4 dòng, ảnh hưởng, phương án, điều cần sếp quyết.
2. Cho khách: xin lỗi chân thành, hẹn ngày mới rõ ràng, không đổ lỗi.
3. Cho đồng nghiệp kho: tin nhắn ngắn, ai làm gì, trước khi nào.
Rồi chỉ ra 3 điểm khác nhau lớn nhất giữa ba bản.
```

!!! result "Bạn sẽ thấy"
    Ba bản khác hẳn độ dài và cách mở đầu, nhưng cùng một "người viết": bản cho sếp có số và lựa chọn, bản cho khách ấm áp, bản cho đồng nghiệp gần như toàn động từ.

### Tình huống 4 · "Khử mùi AI"

Văn máy dễ nhận: sáo ngữ ("trong bối cảnh... ngày càng...", "đóng vai trò quan trọng"), câu văn dịch ("được thực hiện bởi"), liệt kê đều tăm tắp mà rỗng, câu kết "Tóm lại" nhắc lại điều vừa nói.

```prompt GV6 · Khử mùi AI #chung
Đọc bản nháp dưới đây, chỉ ra mọi chỗ "nghe như máy viết": sáo ngữ, câu văn dịch, liệt kê vô hồn, mở và kết chung chung, kèm lý do. Rồi viết lại theo bản mô tả giọng văn của mình, không thêm ý, không bỏ thông tin.

[Dán bản nháp]
```

!!! result "Bạn sẽ thấy"
    Danh sách chỗ "có mùi" kèm lý do, rồi bản viết lại gọn hơn. Đọc vài lần, bạn sẽ tự "ngửi" ra chúng trong văn của chính mình.

### Tình huống 5 · Chấm bài theo bản mô tả

Bản mô tả còn là thước đo cho bài của bạn, của đồng nghiệp, hay của AI.

```prompt GV7 · Chấm bài theo giọng văn #chung
Chấm bài dưới đây theo bản mô tả giọng văn và bảng thuật ngữ của mình, thang 10 điểm. Mỗi điểm trừ: trích câu, nói lệch quy tắc nào, đề xuất câu sửa. Đừng sửa chỗ đã đúng giọng chỉ vì bạn thích cách viết khác.

[Dán bài viết]
```

!!! result "Bạn sẽ thấy"
    Điểm số kèm lỗi có trích dẫn: dùng "quý khách", câu dài 40 chữ, mở đầu vòng vo. Câu cuối giữ bạn ấy khỏi "sửa cho vui".

## Dám hỏi lại

Có hai cái bẫy. Một là **bắt chước quá đà**: thấy bạn hay viết "anh chị xem giúp em", bạn ấy nhét nó vào mọi đoạn. Hai là **đúng giọng nhưng sai nội dung**.

```prompt GV8 · Soi lỗi bắt chước quá đà #chung
So bản vừa viết với các bài gốc của mình. Những cụm từ đặc trưng của mình xuất hiện bao nhiêu lần trong bài gốc, bao nhiêu lần trong bản mới? Chỗ nào dùng dày hơn hẳn thì viết lại cho tự nhiên.
```

!!! check "Dám hỏi lại"
    - **Đặt cạnh bản gốc:** bản mới giống bạn ở một ngày bình thường, hay giống bạn bị phóng đại?
    - **Đọc to:** chỗ nào vấp, hoặc nghĩ "mình đâu có nói thế", sửa chỗ đó.
    - **Soát nội dung:** giọng đúng không có nghĩa số, tên, ngày đúng.
    - **Không dán bài có thông tin mật** để "học giọng". Chỉ dùng bài đã che tên, số tiền, mã hợp đồng. Xem [An toàn](an-toan.html).

## Biến thể theo ngành

### ⚖️ Pháp lý

Thư tư vấn của hãng luật có giọng riêng, nhất là cách dẫn chiếu và mức độ khẳng định.

```prompt GV9 · Giọng thư tư vấn của hãng #luat
Đây là 3 thư tư vấn của hãng mình (đã che tên khách và vụ việc). Rút ra bản mô tả giọng văn: cách mở đầu, cách dẫn chiếu điều luật, mức độ khẳng định khi kết luận. Rồi viết lại đoạn nháp dưới đây theo giọng đó, giữ nguyên mọi dẫn chiếu.
```

### 💰 Kế toán – Tài chính

Thuyết minh báo cáo cần gọi tên khoản mục nhất quán qua các tháng.

```prompt GV10 · Thống nhất tên khoản mục #ketoan
Từ 3 bản thuyết minh báo cáo quản trị cũ dưới đây, lập bảng: mỗi khoản mục đang được gọi bằng những tên nào, nên thống nhất tên nào. Rồi soát bản nháp tháng này, chỉ ra chỗ gọi tên lệch bảng.
```

### 🤝 Kinh doanh – CSKH

Cả đội trả lời khách cùng một giọng, qua email hay tin nhắn.

```prompt GV11 · Giọng CSKH của công ty #kinhdoanh
Đây là 5 câu trả lời khách mà sếp khen (đã che tên). Rút ra giọng chăm sóc khách hàng của công ty, rồi trả lời tình huống sau theo giọng đó, một bản email, một bản tin nhắn Zalo: [mô tả tình huống].
```

### 🏗️ Vận hành – Xây dựng

Thông báo công trường cần ngắn, rõ, đọc được trên điện thoại giữa ca.

```prompt GV12 · Thông báo đúng giọng công trường #vanhanh
Viết lại thông báo dưới đây cho anh em công trường đọc trên điện thoại: câu ngắn, ai làm gì, trước giờ nào. Giữ giọng như 2 thông báo cũ mình dán kèm. Phần an toàn giữ nguyên ý, không làm mềm.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Câu trả lời mẫu chung một giọng cho cả đội.
    - Bài đăng fanpage, bản tin nội bộ.
    - Thư chúc mừng, bài phát biểu viết thay sếp.
    - Tài liệu kỹ thuật viết lại cho khách dễ hiểu.
!!! life "🏡 Đời sống"
    - Lời chúc, thiệp mời đúng giọng bạn.
    - Bài đăng kể chuyện gia đình.
    - Thư cảm ơn thầy cô, lời phát biểu đám cưới.
    - Đơn gửi ban quản lý chung cư: lịch sự mà không khách sáo.
:::

Ở đâu có tên bạn ký bên dưới, ở đó cần giọng của bạn.

## Tự kiểm tra

- [ ] Đã có bản mô tả giọng văn từ 3–5 bài cũ đã che thông tin.
- [ ] Đã lưu nó vào hướng dẫn tuỳ chỉnh, Project hoặc Gem.
- [ ] Đã có bảng thuật ngữ ít nhất 5 dòng.
- [ ] Đã viết một thông điệp cho 3 người đọc.
- [ ] Đã khử mùi AI một bản nháp và đọc to bản cuối.

## Đi xa hơn

- **Cập nhật mỗi quý:** thay bài mẫu bằng bài mới nhất bạn ưng, rồi rút lại bản mô tả.
- **Một giọng cho cả đội:** đưa bản mô tả và bảng thuật ngữ vào một Project dùng chung ([Bậc 5](cap-5.html)) nếu gói cho phép chia sẻ. Kiểm tra trang chính thức vì gói, giới hạn và giao diện thay đổi thường xuyên.
- **Từ "nhờ viết" sang "dạy viết":** đó là một bước đi xuống phễu ([Khoảng cách AI](khoang-cach.html)). Dạy xong, câu nhờ hằng ngày chỉ cần 3 điều ([Giao việc như giao cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html)).
