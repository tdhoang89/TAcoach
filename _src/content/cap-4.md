---
title: Số liệu thành báo cáo thành slide
kind: lesson
level: 4
how: Một cuộc trò chuyện, nhiều thành phẩm
summary: Nói tiếp trong cùng một cuộc trò chuyện để biến bảng chi phí đã làm sạch thành báo cáo hợp gu sếp và bộ slide 6 trang.
time: 30 phút
tools: ChatGPT hoặc Claude
free: Có
---

## Bạn sẽ làm được gì

- Đi từ bảng số liệu đến báo cáo một trang và bộ slide 6 trang mà **không phải giải thích lại từ đầu**.
- Để bạn ấy hỏi bạn 3 câu về sếp và cuộc họp, nhờ vậy báo cáo viết đúng "gu" người đọc.
- Nhờ bạn ấy đóng vai một Giám đốc tài chính khó tính, vặn bạn 3 câu hóc búa, rồi sửa báo cáo để trả lời trước.
- Biến báo cáo thành slide có biểu đồ, xem ngay trên màn hình hoặc mang sang PowerPoint, Google Slides.
- Dùng cách "nói tiếp" cho mọi chuỗi việc nối nhau: kế hoạch, email, lịch trình, bài thuyết trình.

## Vì sao cách nhờ này hiệu quả

Ở [Bậc 3](cap-3.html), bạn đã cùng bạn ấy dọn sạch 300 dòng chi phí tháng 9 và ra con số tổng **384.070.000đ**. Trong cuộc trò chuyện đó, bạn ấy đã biết hết: file có những cột nào, nhóm chi phí nào lớn, tuần nào chi nhiều, dòng nào bị trùng.

Nhiều người làm xong một việc là mở chat mới cho việc tiếp theo. Làm vậy chẳng khác gì tự xoá trí nhớ của người bạn vừa làm cùng mình cả buổi. Trong cùng một cuộc trò chuyện, bạn ấy nhớ mọi thứ ở phía trên. Bạn chỉ cần nói câu tiếp theo, như quay sang đồng nghiệp ngồi cạnh: "Giờ làm báo cáo cho sếp nhé."

Bậc này còn ghép hai chiêu bạn đã quen. **Hỏi thẳng bạn ấy**: để bạn ấy hỏi bạn về người đọc trước khi viết. **Nhờ góp ý thẳng**: để bạn ấy đóng vai người khó tính nhất phòng họp. Một báo cáo đã bị "vặn" trước thì lúc vào họp bạn bình tĩnh hơn hẳn.

!!! view "Góc nhìn"
    Bạn ấy nhớ hết những gì đã nói ở phía trên. Nên đừng nhờ từng việc rời rạc. Hãy nói tiếp, như làm việc với một đồng nghiệp ngồi cạnh cả buổi chiều.

## Chuẩn bị

- **Công cụ:** ChatGPT hoặc Claude, bản miễn phí là đủ (có giới hạn lượt dùng, kiểm tra trang chính thức vì giới hạn thay đổi thường xuyên). Để có slide dạng trang web bấm chạy được, Claude (Artifacts) hoặc ChatGPT (Canvas) cho kết quả trực quan nhất.
- **Cuộc trò chuyện ở Bậc 3:** tìm lại đúng cuộc trò chuyện đó trong danh sách lịch sử bên trái và mở ra. Đừng mở chat mới.
- **Bỏ qua Bậc 3?** Không sao. Dùng bảng số liệu đã làm sạch ở Bước 1 bên dưới, hoặc dán bất kỳ bảng số liệu nào của bạn (nhớ che tên khách hàng, tên người trước).
- **Muốn làm lại từ file gốc:**

[Tải bảng chi phí tháng 9 (.xlsx)](files/cap-3/chi-phi-thang-9.xlsx){.dl}

- **Thời gian:** khoảng 30 phút.

!!! note "Lưu ý"
    Số liệu trong bài là hư cấu, của Công ty CP Phân phối Thiết bị Văn phòng Sao Mai. Khi làm với số liệu thật của công ty, nhớ quy tắc đèn giao thông ở [Bậc 2](cap-2.html): che tên khách hàng, tên người, mã số trước khi dán.

## Làm thật: từng bước

### Bước 1 · Nói tiếp, đừng mở chat mới

Mở lại cuộc trò chuyện ở Bậc 3. Trước khi làm gì mới, nhờ bạn ấy nhắc lại những gì hai bên đã có. Đây vừa là khởi động, vừa là kiểm tra trí nhớ của bạn ấy.

```prompt 4a · Nói tiếp từ bậc 3 #chung
Mình nói tiếp nhé. Trước khi làm báo cáo, bạn nhắc lại giúp mình: tổng chi phí tháng 9 sau khi bỏ dòng trùng, chi phí theo 5 nhóm (số tiền và tỷ trọng), và chi phí theo từng tuần. Trình bày thành 2 bảng gọn.
```

Nếu bạn bỏ qua Bậc 3, mở một cuộc trò chuyện mới và dán nguyên khối số liệu đã làm sạch này:

```prompt 4b · Số liệu mẫu nếu bạn bỏ qua bậc 3 #chung #ketoan
Đây là chi phí tháng 9/2026 của công ty mình (đã làm sạch, bỏ 8 dòng trùng). Tổng: 384.070.000đ.

Theo nhóm:
- Văn phòng phẩm: 48.279.000đ (12,6%)
- Đi lại: 30.258.000đ (7,9%)
- Tiếp khách: 121.722.000đ (31,7%)
- Dịch vụ thuê ngoài: 134.183.000đ (34,9%)
- Khác: 49.628.000đ (12,9%)

Theo tuần:
- Tuần 1 (01–06/9): 81.144.000đ
- Tuần 2 (07–13/9): 63.442.000đ
- Tuần 3 (14–20/9): 80.467.000đ
- Tuần 4 (21–27/9): 123.521.000đ
- Tuần 5 (28–30/9): 35.496.000đ

Bạn đọc kỹ rồi nói cho mình 3 điều đáng chú ý nhất trong số liệu này nhé. Chưa cần viết báo cáo.
```

!!! result "Bạn sẽ thấy"
    Hai bảng nhỏ, tổng đúng **384.070.000đ**. Hai nhóm lớn nhất là Dịch vụ thuê ngoài (34,9%) và Tiếp khách (31,7%), cộng lại khoảng hai phần ba tổng chi. Tuần 4 (21–27/9) chi nhiều nhất.

    Nếu bạn đi tiếp từ Bậc 3, số theo nhóm có thể hơi khác bảng trên vì bạn ấy tự phân loại từng dòng. Điều đó chấp nhận được. Nhưng **tổng thì phải đúng**. Tổng lệch thì đừng đi tiếp, quay lại hỏi bạn ấy vì sao lệch.

### Bước 2 · Hỏi thẳng bạn ấy: sếp là người thế nào?

Một báo cáo tốt không chỉ đúng số mà còn đúng người đọc. Sếp thích số hay thích chữ? Đọc trên điện thoại hay in ra? Họp 5 phút hay 30 phút? Bạn ấy không biết, nên hãy để bạn ấy hỏi.

```prompt 4c · Hỏi thẳng bạn ấy #chung
Giờ mình cần báo cáo kết quả này lên Giám đốc. Trước khi viết, bạn hỏi mình 3 câu về sếp và cuộc họp để viết cho hợp gu nhé. Hỏi từng câu một.
```

Trả lời ngắn, tự nhiên như nhắn tin. Ví dụ: *"Sếp bận, hay đọc trên điện thoại giữa hai cuộc họp"*, *"Sếp thích số, ghét dài dòng, câu cửa miệng là 'vậy đề xuất gì?'"*, *"Báo cáo dùng cho họp giao ban sáng thứ Hai, mình có 5 phút"*.

!!! result "Bạn sẽ thấy"
    Bạn ấy hỏi những câu rất "đời": sếp đọc trên thiết bị gì, quan tâm nhất điều gì (cắt giảm chi phí hay siết quy trình), báo cáo dùng cho dịp nào. Mỗi câu trả lời của bạn sẽ thay đổi cách viết ở bước sau. Nếu bạn ấy hỏi dồn cả 3 câu một lúc, cứ trả lời gộp, không sao cả.

### Bước 3 · Viết báo cáo một trang

Giờ mới nhờ viết. Hãy nói rõ khung bạn muốn: một trang, tóm tắt 3 câu, 3 phát hiện có số, 2 việc đề xuất. Khung càng rõ, sếp đọc càng nhanh.

```prompt 4d · Viết báo cáo một trang #chung #ketoan
Dựa trên số liệu và những gì mình vừa kể về sếp, viết giúp mình báo cáo chi phí tháng 9 gửi Giám đốc, gói gọn trong 1 trang:
1. Tóm tắt cho lãnh đạo: đúng 3 câu.
2. Ba phát hiện chính, mỗi phát hiện có con số cụ thể.
3. Hai việc đề xuất, có người phụ trách và thời hạn (chỗ nào chưa biết thì để [ngoặc vuông] cho mình điền).
Chỉ dùng số liệu có trong cuộc trò chuyện này. Con số nào bạn tự tính thêm thì ghi rõ cách tính.
```

Câu cuối là bài học từ [Bậc 2](cap-2.html): khoanh vùng nguồn số liệu thì bạn ấy ít "đoán" hơn hẳn.

!!! result "Bạn sẽ thấy"
    Một báo cáo đọc trong một phút. Phần tóm tắt nêu ngay tổng 384.070.000đ và hai nhóm chi lớn nhất. Các phát hiện thường xoay quanh: Dịch vụ thuê ngoài và Tiếp khách chiếm khoảng 2/3 tổng chi; tuần 4 chi cao hơn hẳn các tuần khác; nhóm "Khác" gần 13%, khá lớn cho một nhóm không rõ tên. Đề xuất có thể là rà soát hợp đồng thuê ngoài, đặt định mức tiếp khách. Đọc kỹ từng con số: số nào không có trong bảng phía trên thì hỏi lại ngay.

### Bước 4 · Để "sếp khó tính" vặn trước

Đây là bước nhiều người bỏ qua mà lại đáng giá nhất. Bạn nhờ bạn ấy đổi vai: từ người viết báo cáo thành người đọc khó tính nhất, một Giám đốc tài chính chuyên hỏi xoáy.

```prompt 4e · Sếp khó tính vặn trước #chung
Giờ bạn đóng vai Giám đốc tài chính rất khó tính, nổi tiếng hay vặn số liệu. Đọc báo cáo trên rồi hỏi mình 3 câu khó nhất mà ông ấy có thể hỏi trong cuộc họp. Chưa cần trả lời.
```

Đọc 3 câu hỏi. Câu nào bạn trả lời được thì kể cho bạn ấy. Câu nào chưa có số liệu thì cũng nói thật. Sau đó:

```prompt 4f · Sửa báo cáo để trả lời trước #chung
Cảm ơn bạn. Giờ quay lại vai người viết, sửa báo cáo để trả lời trước cả 3 câu đó ngay trong bài, vẫn gói trong 1 trang. Câu nào chưa đủ số liệu để trả lời thì ghi rõ "cần bổ sung" và gợi ý mình nên lấy số liệu đó ở đâu.
```

!!! result "Bạn sẽ thấy"
    Những câu hỏi rất giống sếp thật, kiểu: *"Tiếp khách 121 triệu một tháng, so với tháng 8 thế nào?"*, *"Nhóm 'Khác' gần 50 triệu là những khoản gì?"*, *"Tuần 4 vì sao tăng vọt?"*. Bản sửa có thêm vài câu giải thích, hoặc ghi rõ chỗ cần bổ sung số liệu tháng trước. Một báo cáo dám nói "chỗ này cần thêm số liệu" đáng tin hơn nhiều so với một báo cáo trả lời bằng phỏng đoán.

### Bước 5 · Biến báo cáo thành 6 slide

Báo cáo đã chắc tay, giờ đến slide. Vẫn trong cùng cuộc trò chuyện.

```prompt 4g · Biến thành slide #chung
Biến báo cáo vừa sửa thành bài trình chiếu 6 slide dạng trang web: chữ to dễ đọc, gọn và đẹp, có biểu đồ chi phí theo nhóm và theo tuần, có nút chuyển slide và dùng được phím mũi tên. Toàn bộ bằng tiếng Việt. Slide cuối là 2 đề xuất cần sếp quyết định.
```

- **Trên Claude:** slide hiện ở khung bên cạnh cuộc trò chuyện (Artifact). Bấm qua từng slide để xem.
- **Trên ChatGPT:** nếu bạn ấy mở Canvas, tìm nút xem trước để chạy thử. Nếu chỉ thấy một khối code dài, nói: *"Gộp thành một file HTML duy nhất để mình lưu về và mở bằng trình duyệt."*
- **Quen PowerPoint hoặc Google Slides hơn?** Xin dàn ý, rồi tự dán vào từng slide:

```prompt 4h · Dàn ý slide cho PowerPoint #chung
Viết giúp mình dàn ý 6 slide cho PowerPoint từ báo cáo này. Mỗi slide gồm: tiêu đề dưới 10 chữ, 3–4 gạch đầu dòng ngắn, gợi ý loại biểu đồ nếu cần (kèm số liệu để mình tự vẽ), và 2–3 câu ghi chú để mình nói khi trình bày.
```

!!! result "Bạn sẽ thấy"
    Một bộ slide chạy được ngay: trang bìa, tổng quan 384.070.000đ, biểu đồ 5 nhóm chi phí, biểu đồ theo tuần, các phát hiện chính, slide đề xuất. Lần đầu có thể chưa ưng: chữ nhỏ, màu chưa hợp, biểu đồ sai nhãn. Đó chỉ là câu tiếp theo trong cuộc trò chuyện: *"Chữ to hơn nữa"*, *"Đổi sang tông xanh dương"*, *"Biểu đồ tuần dùng cột thay vì đường"*.

### Bước 6 · Mang thành phẩm đi họp

Có báo cáo và slide rồi, giờ là chuyện mang đi đâu, mở bằng gì. Giao diện mỗi công cụ một khác và thay đổi liên tục, nên cách nhanh nhất vẫn là hỏi thẳng.

```prompt 4i · Hỏi cách mang slide đi họp #chung
Mình cần chiếu bộ slide này trên máy phòng họp và gửi sếp một bản PDF. Với công cụ mình đang dùng, cách nào đơn giản nhất? Hướng dẫn mình từng bước, như hướng dẫn người không rành máy tính.
```

!!! result "Bạn sẽ thấy"
    Bạn ấy chỉ cách tải file về, mở toàn màn hình, lưu PDF. Nếu bạn ấy nhắc tới một nút mà bạn không thấy trên màn hình, chụp màn hình gửi bạn ấy và hỏi: *"Mình đang thấy thế này, bấm vào đâu?"*. Chụp màn hình là cách hỏi nhanh nhất khi lạc trong giao diện.

!!! tip "Mẹo xuất file"
    - Báo cáo dán vào Word bị dính dấu `**` hay `#`? Nói: *"Trình bày lại dạng văn bản thường, không dùng ký hiệu markdown, để mình dán vào Word."*
    - Slide dạng trang web: lưu thành file `.html`, mở bằng Chrome hoặc Edge, nhấn <kbd>F11</kbd> để chiếu toàn màn hình.
    - Cần bản PDF: nhờ bạn ấy *"thêm chế độ in, mỗi slide một trang khổ ngang"*, rồi nhấn <kbd>Ctrl</kbd> + <kbd>P</kbd> và chọn lưu dưới dạng PDF.
    - Claude có thể chia sẻ Artifact bằng link. Chỉ chia sẻ khi số liệu không nhạy cảm.

## Dám hỏi lại

Báo cáo đẹp mà sai một con số là mất uy tín cả bài. Lỗi hay gặp nhất ở bậc này là **lệch số khi chuyển định dạng**: từ bảng sang báo cáo, từ báo cáo sang slide, bạn ấy đôi khi làm tròn, ghi nhầm nhãn biểu đồ, hoặc "thêm" một con số so sánh không có trong dữ liệu.

```prompt 4j · Rà nguồn từng con số #chung
Rà lại giúp mình: liệt kê mọi con số xuất hiện trong báo cáo và trên slide, ghi bên cạnh nguồn của nó (bảng nào phía trên, hay do bạn tính). Số nào do bạn tính thì ghi phép tính. Câu nào là nhận định của bạn chứ không phải dữ liệu thì đánh dấu.
```

!!! check "Dám hỏi lại"
    - **Tổng có khớp không?** Tổng chi phí phải là 384.070.000đ. Năm nhóm cộng lại phải ra đúng con số đó. Bấm máy tính mất 30 giây.
    - **Slide có giống báo cáo không?** Đặt hai thứ cạnh nhau, dò từng con số và từng nhãn biểu đồ.
    - **Đâu là dữ liệu, đâu là phỏng đoán?** Kiểu câu *"tuần 4 tăng vì tiếp khách cuối quý"* là suy luận của bạn ấy. Hoặc bạn kiểm chứng được, hoặc ghi rõ "cần xác minh", hoặc bỏ đi.
    - **Có so sánh với tháng trước không?** Cuộc trò chuyện chỉ có số tháng 9. Nếu báo cáo nói "tăng 15% so với tháng 8", đó là số bịa.

## Biến thể theo ngành

### ⚖️ Pháp lý

Rà soát xong một hợp đồng ở [Bậc 2](cap-2.html)? Nói tiếp để có memo rủi ro gửi Ban Giám đốc, rồi vài slide cho buổi họp duyệt ký.

```prompt 4k · Từ rà soát hợp đồng đến memo #luat
Từ các điểm bất lợi bạn vừa tìm trong hợp đồng, viết giúp mình memo 1 trang gửi Ban Giám đốc: 3 rủi ro lớn nhất (kèm số Điều), mức độ rủi ro, đề xuất đàm phán lại từng điểm. Trước khi viết, hỏi mình 2 câu về người sẽ quyết định ký hợp đồng này. Xong làm 4 slide cho buổi họp duyệt ký.
```

### 💰 Kế toán – Tài chính

Từ bảng công nợ đã có cột "Số ngày quá hạn" ở Bậc 3, đi tiếp thành báo cáo tuổi nợ và slide cho Kế toán trưởng.

```prompt 4l · Báo cáo tuổi nợ #ketoan
Từ bảng công nợ mình vừa làm, chia khách hàng thành các nhóm: trong hạn, quá hạn 1–30 ngày, 31–60 ngày, trên 60 ngày. Viết báo cáo 1 trang gửi Kế toán trưởng: tổng nợ từng nhóm, 3 khách cần ưu tiên thu hồi, 2 đề xuất. Sau đó làm 4 slide có biểu đồ tuổi nợ.
```

### 🤝 Kinh doanh – CSKH

Bảng doanh số tháng thành báo cáo cho trưởng phòng và màn mở đầu cho buổi họp sales đầu tuần.

```prompt 4m · Doanh số tháng thành bài họp sales #kinhdoanh
Đây là bảng doanh số tháng [tháng] theo nhân viên và khách hàng (đã che tên khách): [dán bảng]. Hỏi mình 3 câu về buổi họp sales sáng thứ Hai, rồi viết báo cáo 1 trang: ai vượt chỉ tiêu, khách nào mua ít đi, 2 việc cả nhóm cần làm tuần này. Xong làm 5 slide thật có năng lượng để mở đầu buổi họp.
```

### 🏗️ Vận hành – Xây dựng

Nhật ký sự cố bảo trì của cả quý thành báo cáo và slide cho Ban quản lý toà nhà.

```prompt 4n · Nhật ký bảo trì thành báo cáo quý #vanhanh
Đây là nhật ký sự cố bảo trì quý [quý]: [dán bảng]. Tìm 3 hạng mục hỏng nhiều nhất, thời gian xử lý trung bình, chi phí từng hạng mục. Viết báo cáo 1 trang gửi Ban quản lý, có 2 đề xuất thay thế hoặc bảo dưỡng định kỳ. Rồi đóng vai trưởng ban quản lý khó tính, vặn mình 3 câu.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Ý tưởng sản phẩm → kế hoạch → email kêu gọi góp vốn → lịch triển khai.
    - Biên bản họp → danh sách việc → email giao việc cho từng người.
    - Kết quả khảo sát khách hàng → báo cáo → slide họp chiến lược.
    - Hồ sơ mời thầu → bảng yêu cầu → thư hỏi làm rõ gửi bên mời thầu.
    - Kết quả cả năm → bản tự đánh giá → slide trình bày với sếp.
!!! life "🏡 Đời sống"
    - Chuyến du lịch gia đình: lịch trình → danh sách đồ mang → tin nhắn rủ cả nhà.
    - Thu chi gia đình 3 tháng → nhận xét → kế hoạch tiết kiệm.
    - Sinh nhật con: ý tưởng → danh sách khách → thiệp mời → kịch bản trò chơi.
    - Lịch học của con → thời gian biểu → bảng thưởng sao dán tủ lạnh.
:::

Gặp chuỗi việc nào mà thành phẩm sau dựa trên thành phẩm trước, hãy giữ một cuộc trò chuyện và cứ thế nói tiếp.

## Khi kết quả chưa như ý

| Bạn gặp | Vì sao | Nói với bạn ấy thế này |
|---|---|---|
| Bạn ấy "quên" số liệu ở Bậc 3, hoặc đưa ra số khác | Cuộc trò chuyện quá dài, phần đầu bị trôi khỏi trí nhớ | "Nhắc lại tổng và 5 nhóm chi phí trước khi viết tiếp. Không chắc thì nói, để mình dán lại." |
| Báo cáo dài 2–3 trang | Bạn ấy thích đầy đủ hơn gọn gàng | "Cắt còn đúng 1 trang. Mỗi phát hiện tối đa 2 câu." |
| Có con số không thấy trong bảng | Bạn ấy tự suy ra hoặc đoán | "Con số [X] lấy ở đâu? Nếu bạn tự tính thì ghi phép tính, nếu đoán thì bỏ đi." |
| Chỉ thấy code, không thấy slide | Công cụ chưa mở chế độ xem trước | "Gộp thành 1 file HTML duy nhất để mình mở bằng trình duyệt." |
| Slide chữ nhỏ, rối mắt | Bạn ấy nhồi quá nhiều chữ | "Mỗi slide tối đa 4 dòng, chữ to gấp rưỡi, thêm nhiều khoảng trắng." |
| Câu hỏi của "sếp khó tính" quá hiền | Bạn ấy đang lịch sự | "Khó hơn nữa. Hỏi như người đang muốn tìm lỗi trong báo cáo của mình." |

## Tự kiểm tra

- [ ] Mình làm cả bài trong **một** cuộc trò chuyện, không mở chat mới giữa chừng.
- [ ] Bạn ấy đã hỏi mình về sếp và cuộc họp trước khi viết.
- [ ] Báo cáo của mình gói trong 1 trang: 3 câu tóm tắt, 3 phát hiện có số, 2 đề xuất.
- [ ] Mình đã để "sếp khó tính" vặn 3 câu và sửa báo cáo để trả lời trước.
- [ ] Mình có bộ slide 6 trang (hoặc dàn ý) và biết cách mang đi họp.
- [ ] Mình đã đối chiếu tổng 384.070.000đ trên cả báo cáo lẫn slide.

## Đi xa hơn

- **Một nguồn, nhiều phiên bản:** từ cùng báo cáo, nhờ thêm bản tin nhắn Zalo 3 dòng cho sếp và bản email cho cả phòng. Mỗi người đọc một kiểu, bạn ấy viết lại trong vài giây.
- **Tập dượt trình bày:** *"Viết lời thuyết minh cho từng slide, nói trong 5 phút."* Sau đó bật chế độ giọng nói, trình bày thử và nhờ bạn ấy góp ý thẳng.
- **Nối nhiều bậc thành một mạch:** đọc tài liệu ([Bậc 2](cap-2.html)) → làm sạch số ([Bậc 3](cap-3.html)) → báo cáo, slide (bậc này) có thể nằm trọn trong một cuộc trò chuyện.
- **Hỏi thẳng về thành phẩm tiếp theo:** *"Với báo cáo này, còn thành phẩm nào giúp cuộc họp hiệu quả hơn?"* Bạn ấy có thể gợi ý biên bản họp soạn sẵn, bảng theo dõi việc sau họp.
- Tuần sau lại làm báo cáo y như vậy? Đừng kể lại từ đầu. [Bậc 5](cap-5.html) chỉ bạn cách dạy bạn ấy một lần, nhờ mãi mãi.
