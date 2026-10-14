---
title: Một ngày làm việc cùng AI: bốn nghề, từ sáng đến tối
kind: topic
eyebrow: Chuyên đề
summary: Theo chân bốn người ở Sao Mai suốt một ngày làm việc cùng AI, rồi chọn 3 thói quen nhỏ để bắt đầu từ mai.
time: 25 phút đọc
tools: ChatGPT, Claude hoặc Gemini
free: Có
order: 7
---

## Vì sao đọc trang này

Bạn đã biết nhiều cách nhờ. Nhưng sáng mai, giữa email, họp hành và tin nhắn của khách, nhờ bạn ấy vào lúc nào? Trang này theo chân bốn đồng nghiệp ở Công ty CP Phân phối Thiết bị Văn phòng Sao Mai qua một ngày bình thường: năm phút trước cuộc họp, mười phút sau khi gặp khách, một câu hỏi lại trước khi bấm gửi. Rồi bạn chọn 2–3 thói quen để bắt đầu từ mai.

!!! view "Góc nhìn"
    Andrej Karpathy ví khoảng cách hiểu biết về AI như một cái phễu sắc, và khoảng cách ấy đang nới rộng. Không phải AI tạo ra khoảng cách, cách mình dùng AI tạo ra khoảng cách. Mỗi thói quen nhỏ ở trang này là một bước đi xuống phễu. Không cần nhảy vọt, chỉ cần bước đều.

## Nhịp chung của một ngày

Nghề nào cũng có chung một nhịp. Nhìn bảng, rồi tìm khe trống trong ngày của bạn.

| Lúc | Việc thường làm | Nhờ bạn ấy thế nào |
|---|---|---|
| Đầu ngày | Đọc email, xếp việc | Dán danh sách việc, nhờ xếp thứ tự |
| Trước họp | Đọc tài liệu | Nhờ tóm tắt, đoán trước 3 câu hỏi khó |
| Giữa buổi | Soạn văn bản, số liệu | Nói rõ 3 điều: muốn gì, công sức, kiểm tra thế nào |
| Sau họp | Biên bản, chia việc | Dán ghi chú vội, nhờ tách ai làm gì, hạn nào |
| Buổi chiều | Trả lời khách | Nhờ viết nháp, rồi đóng vai người nhận chê thẳng |
| Cuối ngày | Rà lại | Hỏi "căn cứ đâu?", "chỗ nào bạn tự thêm?" |
| Cuối tuần | Báo cáo tuần | Nhờ trong Project đã dạy sẵn |

Ba điều ở dòng "Giữa buổi" là lời khuyên của Boris Cherny, người tạo ra Claude Code. Bạn sẽ gặp lại chúng ở cả bốn nghề.

## ⚖️ Một ngày của người làm pháp lý

Anh Minh, chuyên viên pháp chế của Sao Mai, sống giữa hợp đồng, công văn và những câu hỏi "cái này ký được không anh?".

### 8:15 · Lọc văn bản mới

Văn bản pháp luật là dữ liệu 🟢. Anh Minh nhờ bạn ấy lọc trước, cái nào đụng tới công ty mới đọc kỹ.

```prompt ND1 · Văn bản mới có đụng tới mình không? #luat
Mình làm pháp chế cho một công ty [phân phối thiết bị văn phòng]. Đây là văn bản mới lấy từ nguồn chính thức. Tóm giúp mình trong 5 dòng: quy định gì, hiệu lực khi nào, công ty mình phải làm gì khác. Văn bản không nói rõ thì ghi "không đề cập", đừng đoán.

[Dán văn bản]
```

### 9:00 · Rà phụ lục: nói rõ 3 điều

Mười giờ anh họp với nhà cung cấp kệ kho về phụ lục gia hạn. Anh dành hai phút nói rõ ba điều.

```prompt ND2 · Rà phụ lục, nói rõ 3 điều #luat
Mình đính kèm hợp đồng gốc và phụ lục gia hạn (đã che tên, số tiền). Công ty mình là bên mua.
Mình muốn: các điểm bất lợi cho bên mua, xếp theo rủi ro, mỗi điểm kèm một câu đề nghị sửa để nói trong cuộc họp.
Công sức: làm kỹ, gọn trong một trang.
Kiểm tra: trích nguyên văn, ghi số điều, đối chiếu với hợp đồng gốc. Báo mình đã kiểm gì, chưa kiểm được gì.
```

### 9:40 · Dám hỏi lại: "căn cứ đâu?"

Bạn ấy ghi một điều khoản phạt là "trái quy định của pháp luật". Nghe rất chắc, nên anh Minh hỏi lại.

```prompt ND3 · Căn cứ đâu? #luat #chung
Bạn nói điều khoản [___] "trái quy định". Văn bản nào, điều mấy? Phần nào bạn chắc chắn, phần nào là suy luận? Không chắc thì nói thẳng, mình sẽ tự tra nguồn chính thức.
```

Bạn ấy thừa nhận chưa chắc số điều. Năm phút tra văn bản gốc, anh vào họp với một căn cứ đứng vững. AI rút ngắn việc tìm, còn xác nhận là việc của người làm nghề.

### 14:30 · Trả lời đồng nghiệp bằng lời thường

Chị Thu Hà bên Kinh doanh nhắn: khách đòi thêm điều khoản "bồi thường mọi thiệt hại", đồng ý được không anh?

```prompt ND4 · Giải thích cho người không chuyên #luat
Đồng nghiệp kinh doanh hỏi mình: khách muốn thêm điều khoản "[dán điều khoản]", có nên đồng ý không. Viết giúp mình tin nhắn dưới 120 chữ, lời thường: rủi ro chính, đề nghị sửa thế nào, và một câu đồng nghiệp nói thẳng được với khách.
```

## 💰 Một ngày của người làm kế toán – tài chính

Chị Ngọc là kế toán tổng hợp, tuần này chốt số liệu tháng 9.

### 8:30 · Công thức cho bảng công nợ

Viết công thức thì không cần biết khách nào nợ bao nhiêu, nên chị Ngọc chỉ mô tả các cột.

```prompt ND5 · Công thức tính quá hạn #ketoan
Bảng công nợ của mình: cột A mã khách hàng, B ngày hoá đơn, C số tiền, D ngày đã trả (trống nếu chưa trả). Hạn 30 ngày. Viết công thức cho cột E "Số ngày quá hạn" và F "Tình trạng" (Đã trả, Trong hạn, Quá hạn, Quá hạn trên 60 ngày), giải thích dễ hiểu. Excel của mình dùng dấu [";" / ","].
```

### 10:30 · Thuyết minh biến động: nói rõ 3 điều

Kế toán trưởng cần thuyết minh chi phí tháng 9 trước trưa. Bản nháp nội bộ nên chị chọn "nhanh gọn", nhưng không bỏ phần kiểm tra.

```prompt ND6 · Thuyết minh biến động, nói rõ 3 điều #ketoan
Đính kèm chi phí tháng 8 và tháng 9 theo khoản mục (đã bỏ tên nhà cung cấp).
Mình muốn: thuyết minh 5 khoản biến động lớn nhất, mỗi khoản 2–3 câu, có số tuyệt đối và phần trăm.
Công sức: nhanh gọn, bản nháp nội bộ.
Kiểm tra: cộng tổng từng tháng, so với dòng tổng trong file. Không rõ nguyên nhân thì để [CẦN BỔ SUNG LÝ DO], đừng tự nghĩ ra.
```

### 13:30 · Dám hỏi lại: mỗi con số lấy ở đâu?

Bản thuyết minh đọc rất trôi. Chính vì trôi nên chị soi kỹ.

```prompt ND7 · Mỗi con số lấy ở đâu? #ketoan #chung
Liệt kê giúp mình mọi con số trong đoạn thuyết minh: số nào lấy từ file (dòng nào, cột nào), số nào bạn tính ra (ghi cách tính), số nào đã làm tròn.
```

Chị dùng hàm SUM đối chiếu ba số lớn nhất: hai số khớp, một số lệch vì làm tròn quá sớm. Ba phút, đổi lại chị yên tâm ký tên.

### 16:30 · Quy chế thành hướng dẫn một trang

Cả tuần chị trả lời đi trả lời lại: "hoàn ứng cần giấy tờ gì hả chị?". Chiều nay, trả lời một lần cho xong.

```prompt ND8 · Quy chế thành hướng dẫn một trang #ketoan #chung
Đây là quy chế công tác phí của công ty mình. Viết hướng dẫn một trang cho nhân viên: các bước hoàn ứng, giấy tờ, hạn nộp, và mục "Hay bị trả lại vì" dựa trên các lỗi mình kể: [___]. Quy chế không nói thì ghi [HỎI KẾ TOÁN], đừng đoán.

[Dán đoạn quy chế]
```

## 🤝 Một ngày của người làm kinh doanh – CSKH

Chị Trần Thu Hà (bạn đã gặp ở [Bậc 5](cap-5.html)) là trưởng nhóm Kinh doanh chi nhánh Hà Nội, nửa ngày ở văn phòng, nửa ngày trên đường.

### 7:45 · Tập trước cuộc gặp bằng giọng nói

Trên taxi tới gặp khách, chị Hà bật chế độ giọng nói và tập.

```prompt ND9 · Tập trước cuộc gặp #kinhdoanh
Lát nữa mình gặp [phòng hành chính một trường tư thục] lần đầu, họ cần [bàn ghế cho 10 phòng học]. Bạn đóng vai người phụ trách mua sắm, hỏi mình 3 câu khó nhất, từng câu một. Mình trả lời xong thì góp ý ngắn.
```

### 14:00 · Báo giá: nói rõ 3 điều

Chị thay tên trường bằng [Trường A], bỏ số điện thoại người liên hệ (đèn 🟡, 🔴 ở trang [An toàn](an-toan.html)).

```prompt ND10 · Báo giá, nói rõ 3 điều #kinhdoanh
Mình cần báo giá cho [Trường A]: [danh mục, số lượng, đơn giá, chiết khấu được duyệt, VAT, thời gian giao].
Mình muốn: bảng báo giá và thư chào hàng ngắn nhấn vào [điều khách quan tâm nhất], gửi chiều nay.
Công sức: kỹ ở phần tính toán, gọn ở phần thư.
Kiểm tra: tính tổng tiền bằng hai cách, báo mình có khớp không. Không thêm ưu đãi nào mình chưa nói.
```

### 15:30 · Dám hỏi lại: chỗ nào bạn tự thêm?

Thư có câu "miễn phí lắp đặt, bảo hành 36 tháng". Nghe hấp dẫn, nhưng chị Hà chưa hề nhắc chuyện lắp đặt.

```prompt ND11 · Chỗ nào bạn tự thêm? #kinhdoanh #chung
Liệt kê mọi con số, thời hạn, bảo hành, ưu đãi trong báo giá và thư. Cái nào lấy từ thông tin mình đưa, cái nào bạn tự thêm? Xoá phần tự thêm, gửi lại bản sạch.
```

Đúng là bạn ấy tự thêm. Một email hứa điều công ty không có còn tệ hơn email gửi chậm nửa tiếng.

### 17:30 · Nhắn vào Project báo cáo tuần

Chị nhắn vài dòng vào cuộc trò chuyện của tuần trong Project "Báo cáo tuần". Thứ Sáu, một câu là có bản nháp. Chưa có Project? Một cuộc trò chuyện riêng cũng được.

```prompt ND12 · Cập nhật cuối ngày #kinhdoanh
Hôm nay: [gặp Trường A, đã gửi báo giá; Khách B hẹn thanh toán thứ Sáu]. Ghi nhận giúp mình theo mẫu báo cáo tuần. Việc sáng mai cần nhắc thì liệt kê riêng.
```

## 🏗️ Một ngày của người làm vận hành – xây dựng

Anh Tuấn phụ trách vận hành kho, tháng này giám sát lắp kệ cho kho mới, ở công trường nhiều hơn ở bàn.

### 7:30 · Chụp bảng trắng giao ca

Anh Tuấn chụp bảng trắng, cắt góc có số điện thoại, rồi gửi.

```prompt ND13 · Bảng trắng thành việc của từng tổ #vanhanh
Đây là ảnh bảng trắng giao ca ở công trường. Chép lại thành danh sách việc của từng tổ: việc gì, ai phụ trách, xong trước mấy giờ. Chữ nào bạn đọc không chắc thì đánh dấu [?].
```

### 10:00 · Hàng về thiếu: ảnh thành biên bản

Lô thanh giằng kệ về thiếu, vài thanh móp. Anh đếm tay, chụp ảnh, nhờ soạn biên bản để hai bên ký luôn.

```prompt ND14 · Biên bản hàng về thiếu, móp #vanhanh
Đây là ảnh lô [thanh giằng kệ] vừa giao và phiếu giao hàng (đã che tên, số điện thoại). Mình đếm được [___] thanh, [___] thanh móp. Soạn biên bản ghi nhận: số theo phiếu, số thực nhận, hư hỏng thấy trong ảnh, đề nghị của bên nhận. Ảnh không đủ rõ thì ghi "cần kiểm tra tại chỗ".
```

### 13:30 · Xếp lại lịch lắp đặt: nói rõ 3 điều

Hàng bổ sung sớm nhất thứ Năm mới về. Sếp cần biết có kịp ngày bàn giao không.

```prompt ND15 · Xếp lại lịch, nói rõ 3 điều #vanhanh
Hàng bổ sung về sớm nhất [thứ Năm]. Đính kèm kế hoạch lắp đặt hiện tại.
Mình muốn: lịch mới để báo sếp chiều nay, cố giữ ngày bàn giao [___]; không giữ được thì nói rõ trễ mấy ngày, vì sao.
Công sức: làm kỹ, tính cả việc nào làm song song được.
Kiểm tra: không tổ nào làm hai việc cùng lúc, không hạng mục nào bắt đầu khi việc trước nó chưa xong. Báo mình đã kiểm gì.
```

### 15:30 · Dám hỏi lại: số an toàn lấy từ đâu?

Bạn ấy gợi ý xếp hàng lên dãy kệ đã lắp, kèm câu "mỗi tầng chịu khoảng 500 kg". Chuyện an toàn, anh Tuấn không dùng số chưa rõ nguồn.

```prompt ND16 · Con số này lấy từ đâu? #vanhanh #chung
Số [___] kg mỗi tầng kệ lấy từ tài liệu mình gửi (trang nào) hay từ kiến thức chung? Nói thẳng nhé. Việc an toàn, mình chỉ dùng số trong hồ sơ kỹ thuật của nhà sản xuất.
```

Bạn ấy thừa nhận đó chỉ là "mức thường gặp". Anh chụp trang thông số trong hồ sơ kỹ thuật, nhờ bạn ấy đọc lại. AI đọc hộ, còn người ký tên vẫn là anh.

## Buổi tối: cho chính mình

Hết giờ làm, bạn ấy vẫn ở đó. Buổi tối là chỗ tập nhờ tốt nhất, vì không đụng dữ liệu công ty.

- **Bữa tối:** chụp tủ lạnh, hỏi nấu gì trong 30 phút.
- **Con học bài:** nhờ bạn ấy làm gia sư gợi mở, không làm hộ.
- **Cuối tuần:** nhờ lên hai phương án đi chơi hợp ngân sách, giá vé thì tự kiểm lại.
- **Học một kỹ năng:** mười lăm phút mỗi tối, có bạn ấy kèm riêng.

```prompt ND17 · Tủ lạnh còn gì, nấu nấy #doisong
Đây là ảnh tủ lạnh nhà mình. Nhà có [2 người lớn, 1 bé 6 tuổi], mình có 30 phút. Gợi ý 2 món cho bữa tối, dùng tối đa đồ đang có.
```

```prompt ND18 · Mười lăm phút học mỗi tối #doisong
Mình muốn [nói tiếng Anh tự tin hơn khi họp], mỗi tối có 15 phút. Hỏi mình 3 câu để biết mình đang ở đâu, rồi cho bài tập đầu tiên.
```

## Chọn 3 thói quen để bắt đầu từ mai

Đừng thử hết một lúc. Chọn 3 thói quen bạn thấy "làm được ngay":

1. **Đầu ngày:** nhờ xếp thứ tự việc.
2. **Trước họp:** nhờ đoán trước 3 câu hỏi khó.
3. **Giữa buổi:** nói rõ 3 điều trước khi nhờ.
4. **Sau họp:** dán ghi chú vội, nhờ chia việc.
5. **Chụp, nói thay vì gõ:** chụp bảng trắng, tập trước cuộc gặp bằng giọng nói.
6. **Trước khi gửi:** hỏi "chỗ nào bạn tự thêm?".
7. **Cuối tuần:** ghi lại việc đã nhờ ba lần, để dạy thành Project.

Viết ra giấy, dán cạnh màn hình, rồi tự cam kết:

- [ ] Mình đã chọn 3 thói quen và dán cạnh màn hình.
- [ ] Sáng mai, mình làm thói quen đầu tiên trước 9 giờ.
- [ ] Mình giữ cả 3 thói quen đủ 5 ngày làm việc.
- [ ] Cuối tuần, mình kể cho một đồng nghiệp nghe kết quả.

## Dám hỏi lại

Thói quen nhờ luôn đi kèm thói quen hỏi lại.

!!! check "Hỏi lại xuyên suốt cả ngày"
    - **Trước khi dán:** xanh, vàng hay đỏ? Che tên, số tiền, số điện thoại ([An toàn](an-toan.html)).
    - **Khi bạn ấy dẫn luật, quy chuẩn, thông số:** hỏi "căn cứ đâu?", rồi tự mở nguồn gốc.
    - **Khi có con số:** số nào từ file, số nào tự tính? Tự đối chiếu 2–3 số lớn nhất.
    - **Trước khi gửi:** hỏi "chỗ nào bạn tự thêm?", xoá lời hứa bạn không có quyền hứa.
    - **Việc pháp lý, tiền bạc, an toàn:** AI làm nháp, bạn ký tên.

## Đi xa hơn

- **Biến thói quen thành trợ lý.** Việc nhờ đến lần thứ ba nên được dạy một lần trong Project hoặc Gem: [Bậc 5](cap-5.html).
- **Giao cả đầu việc.** Khi một việc cần năm, sáu lần nhờ nối nhau, thử giao trọn cho AI agent ở [Bậc 7](cap-7.html) (cần gói trả phí). Theo Karpathy, độ lớn của việc giao cho AI là một nguyên nhân làm khoảng cách nới rộng.
- **Luyện "3 điều" thành phản xạ** với [Giao việc như giao cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html).
- **Chưa biết bắt đầu từ đâu?** Làm [Thử thách 7 ngày](thu-thach-7-ngay.html).

Ngày mai vẫn là email, họp, khách và số liệu. Khác ở chỗ bạn có thêm một đồng nghiệp ngồi cạnh. Bắt đầu bằng ba thói quen nhỏ, rồi cứ thế bước đều.
