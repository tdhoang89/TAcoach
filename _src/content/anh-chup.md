---
title: Chụp ảnh là nhờ được: ảnh, ảnh chụp màn hình, giấy tờ
kind: topic
eyebrow: Chuyên đề
summary: Chụp hoá đơn, bảng trắng, màn hình báo lỗi, tờ khai rồi nhờ bạn ấy đọc, sắp xếp, giải thích; luôn kiểm lại con số đọc từ ảnh.
time: 20 phút
tools: ChatGPT, Claude hoặc Gemini (điện thoại hoặc web)
free: Có
order: 2
---

Thứ gì bạn nhìn thấy, bạn ấy thường cũng đọc được: hoá đơn, bảng trắng, màn hình báo lỗi, tờ khai chi chít ô. Chụp một tấm còn nhanh hơn gõ lại một dòng.

## Khi nào dùng

- **Thông tin nằm trên giấy, trên màn hình**, gõ lại thì mất công.
- **Khó tả bằng lời**, như một thông báo lỗi lạ.
- **Giấy tờ khó hiểu**, cần người giải thích.
- **Bảng trắng, ghi chú viết tay** cần thành văn bản gọn.

Ảnh có thông tin đèn đỏ mà không che được thì đừng gửi.

## Cách nhờ

Trong khung chat, bấm dấu cộng, kẹp giấy hoặc biểu tượng ảnh để chụp hay chọn ảnh. Trên Windows, nhấn <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> để chụp một vùng màn hình, rồi thường dán thẳng vào khung chat bằng <kbd>Ctrl</kbd> + <kbd>V</kbd>. Số ảnh mỗi lần gửi có thể bị giới hạn; kiểm tra trang chính thức vì gói và giới hạn thay đổi thường xuyên.

Mẹo chụp: đủ sáng, thẳng góc, mỗi ảnh một tờ.

Ảnh không thay được lời kể. Vẫn nói đủ **3 điều** như khi [giao việc cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html): **muốn gì** (bảng, biên bản hay lời giải thích), **bỏ bao nhiêu công sức** (nháp nhanh hay số liệu để quyết toán), **kiểm tra thế nào** (đánh dấu chỗ đọc không chắc), cộng thêm "thiếu gì thì hỏi mình":

```prompt AC1 · Gửi ảnh kèm đủ 3 điều #chung #meta
Mình gửi [số] ảnh [hoá đơn / bảng trắng / màn hình báo lỗi]. Mình cần [bảng chi phí để nộp kế toán]. Làm [kỹ, đây là số liệu quyết toán / nhanh, nháp là được]. Để mình kiểm: chép đúng những gì đọc được, chỗ nào mờ hay không chắc thì ghi [?] và liệt kê ở cuối, đừng đoán. Thiếu gì thì hỏi mình trước.
```

!!! warning "Ảnh nói nhiều hơn bạn nghĩ"
    Ảnh có thể lộ số CCCD, số tài khoản, mặt người, địa chỉ, biển số xe, chữ ký, con dấu, cả màn hình phía sau. **Cắt hoặc che trên máy bạn trước khi gửi**, đừng gửi rồi mới dặn "bỏ qua phần đó". Che bằng ô màu đặc, vì nét bút đánh dấu mờ vẫn đọc xuyên qua được. [Đèn giao thông dữ liệu](an-toan.html) áp dụng cho ảnh y như cho chữ.

## Làm thật

### Tình huống 1 · Mười tờ hoá đơn thành bảng chi phí

Xấp hoá đơn sau chuyến công tác: trải ra, chụp từng tờ.

```prompt AC2 · Hoá đơn thành bảng chi phí #ketoan #chung
Đây là ảnh [10] hoá đơn của [chuyến công tác tháng 9]. Lập bảng: Ngày, Nhà cung cấp, Nội dung, Số tiền (VND), và cột "Cần kiểm tra lại" cho dòng đọc không chắc. Cuối bảng có dòng tổng. Sau bảng, liệt kê riêng các số không chắc, ghi rõ ảnh số mấy.
```

!!! result "Bạn sẽ thấy"
    Bảng gọn, copy sang Excel được, vài dòng được đánh dấu "Cần kiểm tra lại" vì chữ nhoè, giấy gấp. Soi đúng những dòng đó với giấy gốc, rồi tự cộng lại bằng hàm SUM thay vì tin ngay dòng tổng.

### Tình huống 2 · Bảng trắng, ghi chú viết tay thành biên bản

Chụp bảng trắng ngay khi họp xong, trước khi ai đó lau. Ghi chú viết tay trong sổ cũng làm y vậy.

```prompt AC3 · Bảng trắng thành biên bản #chung
Ảnh này là bảng trắng sau cuộc họp [kế hoạch quý 4], chữ viết tay hơi xấu. Chuyển thành: (1) biên bản ngắn: đã bàn gì, chốt gì; (2) bảng việc cần làm: việc, người phụ trách, hạn. Chỗ nào không đọc ra hoặc không chắc mũi tên nối ý nào, ghi [?] và hỏi mình.
```

!!! result "Bạn sẽ thấy"
    Phần lớn chữ viết tay được đọc ra, trừ chỗ quá xấu hay bị lau dở. Câu hỏi kiểu "chữ này là 'Hà' hay 'Hải'?" là dấu hiệu tốt: hỏi thay vì đoán.

### Tình huống 3 · Màn hình báo lỗi thành cách sửa từng bước

Lỗi khó tả bằng lời, chụp lại thì rõ ngay. Nhớ cắt bớt phần màn hình có email, tên khách.

```prompt AC4 · Màn hình báo lỗi #chung
Mình đang [nhập công thức trong Excel trên Windows] thì hiện lỗi như ảnh. Mình không rành kỹ thuật, chỉ mình từng bước, nói rõ bấm vào đâu. Xong mỗi bước mình báo lại rồi mới sang bước tiếp.
```

!!! result "Bạn sẽ thấy"
    Bạn ấy đọc lỗi, giải thích bằng lời thường, rồi chỉ bước đầu tiên. Bạn ấy nhắc tới nút bạn không thấy? Chụp tiếp: "Mình đang thấy thế này, bấm vào đâu?"

### Tình huống 4 · Tờ khai khó hiểu, giải thích từng ô

Chụp **mẫu còn trống**. Đừng gửi bản đã điền số CCCD, số tài khoản, và đừng nhờ bạn ấy điền hộ những thông tin đó.

```prompt AC5 · Giải thích từng ô trong tờ khai #chung #doisong
Đây là ảnh mẫu [tờ khai / đơn đăng ký] còn trống. Giải thích từng ô: ô đó hỏi gì, thường lấy thông tin từ giấy tờ nào, lỗi hay gặp. Mình sẽ tự điền. Chỗ nào phụ thuộc quy định hiện hành, nói rõ để mình kiểm tra với nơi tiếp nhận.
```

!!! result "Bạn sẽ thấy"
    Danh sách từng ô, dễ hiểu như có người ngồi cạnh chỉ. Mẫu và quy định có thể đã đổi, nên chỗ nào bạn ấy đánh dấu, hỏi lại nơi tiếp nhận.

### Tình huống 5 · Biểu đồ trong báo cáo thành nhận xét và câu hỏi

Sắp nghe trình bày? Đọc trước biểu đồ cùng bạn ấy.

```prompt AC6 · Đọc biểu đồ, gợi ý câu hỏi #chung
Đây là biểu đồ [doanh thu theo quý] mình sắp nghe trình bày. Cho mình: (1) biểu đồ nói gì, trong 3 câu; (2) điểm bất thường hoặc dễ gây hiểu lầm, như trục không bắt đầu từ 0; (3) 3 câu hỏi nên đặt cho người trình bày. Số nào ước lượng từ hình, ghi rõ là ước lượng.
```

!!! result "Bạn sẽ thấy"
    Ba câu tóm tắt, vài điểm đáng ngờ, ba câu hỏi sắc. Số ước lượng từ hình chỉ để hình dung; cần số thật thì xin file gốc.

## Dám hỏi lại

Ảnh mờ, giấy gấp: bạn ấy có thể đọc 3 thành 8, 1 thành 7, bỏ sót một dòng, nhầm dấu phân cách hàng nghìn. Đọc sai mà vẫn rất tự tin.

```prompt AC7 · Liệt kê chỗ đọc không chắc #chung
Trước khi mình dùng: (1) liệt kê mọi ô, mọi số bạn đọc không chắc, ghi ảnh số mấy, vị trí nào; (2) với từng hoá đơn, cộng các dòng hàng và so với tổng in trên tờ, chỗ nào lệch thì báo; (3) mình gửi [10] ảnh, bảng có đủ [10] dòng không?
```

!!! check "Soát trước khi dùng số đọc từ ảnh"
    - Số dòng trong bảng có bằng số tờ, số mục trong ảnh không?
    - Tổng bạn ấy tính có khớp tổng bạn tự cộng trong Excel không?
    - Các ô "cần kiểm tra lại": đã nhìn tận mắt ảnh gốc chưa?
    - Tên riêng, mã số, số hoá đơn: đã so từng ký tự chưa?

## Biến thể theo ngành

### ⚖️ Pháp lý

Công văn giấy vừa nhận: che tên, chụp, nhờ tóm tắt yêu cầu và thời hạn.

```prompt AC8 · Tóm tắt công văn giấy #luat
Đây là ảnh công văn [đã che tên công ty và người ký]. Tóm tắt: ai yêu cầu gì, căn cứ nào được viện dẫn, thời hạn trả lời. Trích nguyên văn câu chứa thời hạn để mình đối chiếu với bản giấy.
```

### 💰 Kế toán – Tài chính

Biên bản đối chiếu công nợ bản giấy: chụp, chuyển thành bảng để so với sổ.

```prompt AC9 · Biên bản đối chiếu thành bảng #ketoan
Đây là ảnh biên bản đối chiếu công nợ [đã che tên và mã số thuế]. Chuyển thành bảng: Số hoá đơn, Ngày, Số tiền, Đã thanh toán, Còn lại. Ô nào đọc không chắc thì ghi [?]. Cộng cột Còn lại và so với số tổng in trên biên bản.
```

### 🤝 Kinh doanh – CSKH

Khách gửi ảnh hàng lỗi: nhờ mô tả và soạn phản hồi, không để bạn ấy kết luận thay bộ phận kỹ thuật.

```prompt AC10 · Ảnh hàng lỗi thành phản hồi #kinhdoanh
Khách gửi ảnh [ghế xoay] bị [nứt chân], mình đã cắt phần có mặt người và địa chỉ. Mô tả lỗi nhìn thấy, gợi ý 3 câu cần hỏi thêm để xét bảo hành, soạn tin trả lời ngắn, ân cần. Chỗ nào ảnh không đủ để kết luận, nói rõ.
```

### 🏗️ Vận hành – Xây dựng

Ảnh hiện trường thành mô tả cho báo cáo sự cố, tách rõ điều thấy và điều đoán.

```prompt AC11 · Ảnh hiện trường thành báo cáo #vanhanh
Đây là [3] ảnh [vết thấm trần tầng hầm]. Viết phần mô tả hiện trạng cho báo cáo sự cố: vị trí, điều nhìn thấy, mức độ ước lượng, đề xuất kiểm tra tiếp. Phần đoán nguyên nhân ghi rõ là suy đoán.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Slide chụp ở hội thảo thành bản tóm tắt
    - Phiếu nhập kho viết tay thành bảng
    - Sơ đồ vẽ tay thành quy trình từng bước
    - Bảng giá ở hội chợ thành bảng so sánh
!!! life "🏡 Đời sống"
    - Tủ lạnh thành thực đơn 3 ngày
    - Sách hướng dẫn tiếng nước ngoài thành tiếng Việt
    - Bài tập của con: nhờ giải thích cách làm, không giải hộ
    - Hoá đơn điện nước: so với tháng trước
:::

Thứ gì nhìn thấy mà ngại gõ lại, cứ chụp và nhờ. **Riêng con số đọc từ ảnh, luôn hỏi lại.**

## Tự kiểm tra

- [ ] Đã gửi thử một ảnh giấy tờ và một ảnh chụp màn hình.
- [ ] Đã nhờ bạn ấy liệt kê chỗ đọc không chắc, và soi lại với ảnh gốc.
- [ ] Đã tự cộng lại tổng thay vì tin ngay dòng tổng.
- [ ] Đã cắt hoặc che thông tin cá nhân trước khi gửi.

## Đi xa hơn

- **Dọn tiếp.** Bảng chi phí từ hoá đơn có thể làm sạch tiếp như ở [Bậc 3](cap-3.html).
- **Dạy bạn ấy một lần.** Ngày nào cũng chụp hiện trường, bảng trắng? Tạo trợ lý biết sẵn mẫu báo cáo như ở [Bậc 5](cap-5.html).
- **Chụp rồi nói.** Gửi ảnh, rồi kể bối cảnh bằng giọng như ở [Nói thay vì gõ](giong-noi.html). Ảnh nhạy cảm? Xem lại [An toàn](an-toan.html).
