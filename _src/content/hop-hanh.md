---
title: Họp nhẹ hơn: từ chuẩn bị đến biên bản và việc cần làm
kind: topic
eyebrow: Chuyên đề
summary: Chuẩn bị họp, biến ghi chú vội thành biên bản, bảng việc và email, mà không để AI "điền" thêm quyết định.
time: 25 phút
tools: ChatGPT hoặc Claude
free: Có
order: 4
---

## Khi nào dùng

Một cuộc họp 60 phút thường kéo theo vài tiếng việc phụ: soạn chương trình, ghi biên bản, nhắc việc. Toàn việc chữ, đúng sở trường của người bạn AI: **trước họp** (chương trình, câu hỏi khó), **sau họp** (biên bản, bảng việc, email), và **khi vắng mặt** (cuộc họp mình lỡ, chuỗi email dài).

!!! warning "Ghi âm: xin phép trước"
    Đầu vào có thể là ghi chú vội, bản ghi chữ từ phần mềm họp mà công ty cho phép, hoặc bản ghi âm. Chỉ ghi âm khi mọi người đã đồng ý, theo quy định công ty. Nội dung họp là dữ liệu nội bộ: dùng tài khoản cá nhân thì che tên người, số tiền trước khi dán ([An toàn](an-toan.html)).

## Cách nhờ

Biên bản là việc AI làm nhanh nhưng dễ "quá tay": tự điền người nhận việc, tự đặt hạn, biến một ý kiến thành quyết định. Chữa bằng **3 điều** mà Boris Cherny, người tạo ra Claude Code, khuyên nói rõ khi giao việc:

1. **Bạn muốn gì:** biên bản cho ai đọc, dài bao nhiêu, gồm mục nào.
2. **Bỏ bao nhiêu công sức:** bản nhanh gửi ngay, hay bản chỉn chu để lưu hồ sơ.
3. **Kiểm tra thế nào:** chỉ ghi điều có trong ghi chú, đánh dấu chỗ không chắc.

Và: **thiếu gì thì hỏi mình**.

```prompt HH1 · Biên bản họp: câu mẫu #chung
Đây là ghi chú vội cuộc họp [tên], ngày [___], thành phần [___]. Viết biên bản gửi [cả nhóm / sếp], gọn 1 trang: điều đã thống nhất, việc cần làm (ai, việc gì, hạn), vấn đề còn treo. Làm nhanh, không cần văn hoa.
Cách kiểm: chỉ ghi điều có trong ghi chú; chưa chốt thì để ở "vấn đề còn treo"; không rõ ai làm, hạn nào thì ghi [CẦN XÁC NHẬN], đừng tự điền.
Thiếu gì thì hỏi mình trước nhé.
[dán ghi chú]
```

## Làm thật

!!! note "Cuộc họp hư cấu"
    Công ty CP Phân phối Thiết bị Văn phòng Sao Mai họp triển khai phần mềm kế toán mới: anh Minh (Giám đốc tài chính, chủ trì), chị Lan (Kế toán trưởng), anh Tuấn (IT), chị Ngọc (công nợ), anh Phong (kho).

### Tình huống 1 · Chương trình họp và câu hỏi khó

Chương trình rõ thì họp ngắn hẳn. Tập trước với người khó tính nhất phòng, như ở [Bậc 4](cap-4.html), thì vào họp bình tĩnh hơn.

```prompt HH2 · Chương trình họp và tập phản biện #chung #ketoan
Thứ Tư tới phòng mình họp 60 phút về triển khai phần mềm kế toán mới, 5 người từ tài chính, kế toán, IT, kho. Mục tiêu: chốt ngày chạy chính thức, kế hoạch chuyển dữ liệu, lịch đào tạo. Soạn chương trình họp và nửa trang đọc trước cho từng người. Xong, đóng vai Kế toán trưởng rất cẩn trọng, hỏi mình 3 câu khó nhất, từng câu một.
```

!!! result "Bạn sẽ thấy"
    Chương trình 4–6 mục có phút cụ thể, mỗi người một việc chuẩn bị. Rồi những câu rất "đời": chuyển dữ liệu giữa năm được không, số dư lệch thì ai chịu. Câu nào bạn trả lời lúng túng là câu cần chuẩn bị trước.

### Tình huống 2 · Ghi chú vội thành biên bản

Dưới đây là ghi chú vội của buổi họp hư cấu: không dấu, viết tắt, đúng kiểu ghi trong họp. Copy cả khối, dán vào cuộc trò chuyện mới.

```prompt HH3 · Ghi chú vội thành biên bản #chung #ketoan
Viết ghi chú vội này thành biên bản gửi cả nhóm. Chỉ ghi điều có trong ghi chú; ý chưa chốt để ở "vấn đề còn treo"; chỗ không rõ ghi [CẦN XÁC NHẬN].

hop trien khai PM ke toan moi, 14/10, a Minh chu tri
tp: a Minh GDTC, c Lan KTT, a Tuan IT, c Ngoc cong no, a Phong kho
- go-live 1/1/2027?? a Minh muon chot, c Lan xin them 1 tuan
- chuyen DL: so du dau ky, DM KH, hang hoa. c Ngoc: cong no le nhieu, doi chieu xong truoc 15/12
- a Tuan: may cu yeu, co the mua them 2 may, chua co bao gia
- dao tao 2 buoi, NCC day, ngay chua chot
- a Phong hoi ma hang cu/moi ai map?? chua ai nhan
- c Lan de xuat chay song song 1 thang. a Minh: xem chi phi da
- hop lai tuan sau
```

!!! result "Bạn sẽ thấy"
    Biên bản có dấu, chia mục rõ. Giờ soi ba điểm bẫy:

    - **Ngày chạy 1/1/2027 chưa chốt:** hai dấu hỏi, chị Lan xin thêm một tuần.
    - **Chạy song song chưa chốt:** anh Minh mới nói "xem chi phí đã".
    - **Việc map mã hàng chưa ai nhận**, "họp lại tuần sau" chưa có ngày.

    Biên bản ghi "đã thống nhất chạy từ 1/1/2027", hay giao việc map mã hàng cho anh Phong? Bạn vừa bắt quả tang AI "điền" quyết định.

### Tình huống 3 · Bảng việc và email sau họp

Nói tiếp trong cùng cuộc trò chuyện:

```prompt HH4 · Bảng việc và email sau họp #chung
Từ biên bản này, lập bảng việc cần làm: Việc, Người phụ trách, Hạn. Chưa có người hay hạn thì để trống và đánh dấu, đừng tự gán. Rồi soạn email gửi cả nhóm: 3 điểm chính, bảng việc, và mời mọi người phản hồi trước [hạn] nếu ghi nhận chưa đúng.
```

!!! result "Bạn sẽ thấy"
    Bảng 5–7 việc, vài ô trống được đánh dấu: đó là những câu cần hỏi anh Minh trước khi gửi. Câu mời phản hồi rất đáng giữ: biên bản thành thứ cả nhóm cùng xác nhận.

### Tình huống 4 · Cuộc họp mình vắng, chuỗi email dài

Nghỉ phép đúng hôm họp, hay bị kéo vào chuỗi hai mươi email? Bạn chỉ cần biết phần của mình và **mình phải quyết gì**.

```prompt HH5 · Tóm tắt khi mình vắng mặt #chung
Mình vắng [cuộc họp / chuỗi email] này, mình là [vai trò]. Đọc nội dung bên dưới (đã che tên): tóm tắt 5 dòng; điều gì đã chốt, ai chốt; việc nào giao cho mình; quyết định nào đang chờ mình, kèm 2–3 phương án. Chỗ các bên nói khác nhau thì chỉ ra, trích câu gốc ngắn.
[dán nội dung]
```

!!! result "Bạn sẽ thấy"
    Nửa trang viết riêng cho bạn. Đáng đọc nhất là phần "các bên nói khác nhau": hay gặp là hai người hiểu khác nhau về cùng một hạn chót.

## Dám hỏi lại

Biên bản sai nguy hiểm hơn không có, vì người ta sẽ làm theo. Coi chừng **gán nhầm lời** (ý chị Lan thành ý anh Minh), **điền quyết định** (câu "xem đã" thành "đã thống nhất"), và **thêm chi tiết** không có trong ghi chú.

```prompt HH6 · Soát biên bản với ghi chú gốc #meta #chung
Soát biên bản với ghi chú gốc: mỗi câu về người nhận việc, hạn, con số, quyết định là "có trong ghi chú", "suy luận" hay "không có căn cứ"? Sửa để chỉ giữ điều có căn cứ.
```

!!! check "Kiểm chứng trước khi gửi"
    - Soát phần "đã thống nhất" và bảng việc với ghi chú gốc, từng dòng.
    - Người và hạn phải **do chính cuộc họp nói ra**; ô trống thì hỏi người chủ trì.
    - Gửi bản nháp cho người chủ trì xác nhận trước khi gửi cả nhóm.

## Biến thể theo ngành

### ⚖️ Pháp lý

Biên bản làm việc với đối tác có thể thành chứng cứ, nên tách rõ bên nào nói gì, hai bên thống nhất gì.

```prompt HH7 · Biên bản làm việc với đối tác #luat
Từ ghi chú buổi làm việc với [đối tác] về [vụ việc] (đã che tên), soạn biên bản: ý kiến từng bên, điểm đã thống nhất, điểm còn bảo lưu. Giữ đúng ý, không diễn giải. Không rõ ai nói thì ghi [CẦN XÁC NHẬN].
```

### 💰 Kế toán – Tài chính

Họp khoá sổ có nhiều việc nối nhau, việc này chờ việc kia.

```prompt HH8 · Việc sau họp khoá sổ #ketoan
Lập bảng việc từ ghi chú họp khoá sổ tháng [tháng]: việc, người phụ trách, hạn, phải chờ việc nào trước. Sắp theo thứ tự làm. Chưa có người hoặc hạn thì ghi [CẦN XÁC NHẬN].
```

### 🤝 Kinh doanh – CSKH

Email tóm tắt gửi trong ngày giữ cho hai bên hiểu giống nhau.

```prompt HH9 · Email sau buổi gặp khách #kinhdoanh
Từ ghi chú buổi gặp khách hôm nay (đã che tên), soạn email cảm ơn kèm tóm tắt: nhu cầu khách nêu, điều đã thống nhất, bước tiếp theo của mỗi bên kèm hạn. Giọng thân thiện. Không hứa thêm điều gì ngoài ghi chú.
```

### 🏗️ Vận hành – Xây dựng

Giao ban công trường ghi theo hạng mục thì ai cũng thấy phần mình.

```prompt HH10 · Biên bản giao ban công trường #vanhanh
Từ ghi chú giao ban công trường [tên dự án] sáng nay, soạn biên bản theo hạng mục: tiến độ so với kế hoạch, vướng mắc, việc cần làm (ai, hạn), lưu ý an toàn. Chỗ không rõ thì ghi [CẦN XÁC NHẬN].
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Giao ban đầu tuần thành 5 việc ưu tiên
    - Buổi phỏng vấn thành ghi nhận theo tiêu chí
    - Buổi đào tạo thành tài liệu cho người vắng
    - Cuộc gọi nhà cung cấp thành email xác nhận
!!! life "🏡 Đời sống"
    - Họp phụ huynh: việc cần chuẩn bị
    - Họp chung cư: biên bản ngắn gửi nhóm
    - Họp gia đình lo đám cưới: ai lo việc gì
    - Nhóm bạn bàn du lịch: ai lo khâu nào
:::

Nhiều người nói, việc rải rác? Đó là chỗ cho một biên bản ngắn và một bảng "ai, việc gì, hạn".

## Tự kiểm tra

- [ ] Đã dùng câu mẫu HH1 với một cuộc họp thật.
- [ ] Đã biến ghi chú mẫu thành biên bản và soi đủ 3 điểm bẫy.
- [ ] Đã lập bảng việc mà không để bạn ấy tự gán người hoặc hạn.
- [ ] Biết phải xin phép trước khi ghi âm.

## Đi xa hơn

- **Dạy bạn ấy mẫu biên bản của phòng** bằng Project hoặc Gem ([Bậc 5](cap-5.html)), rồi biến bảng việc thành công cụ theo dõi ([Bậc 6](cap-6.html)).
- **Công ty đã cấp Copilot hay Gemini?** Hỏi IT tính năng tóm tắt họp nào được dùng.
- **Giao cả đầu việc:** "từ ghi chú này, làm biên bản, bảng việc và email; chưa rõ thì hỏi mình". Đó là [giao việc như giao cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html), một bước đi xuống cái phễu mà Andrej Karpathy mô tả.
