---
title: Dùng AI an toàn & tỉnh táo
kind: page
eyebrow: Nền tảng
summary: Biết điều gì nên kể, điều gì phải che, vì sao bạn ấy đôi khi bịa, và 5 bước kiểm chứng trước khi dùng kết quả.
time: 15 phút đọc
---

Người bạn AI giỏi thật. Nhưng bạn thân đến mấy thì cũng có chuyện mình không kể, và có lúc mình phải hỏi lại "căn cứ đâu?". Trang này gom những điều mình mong bạn nắm trước khi đưa công việc thật vào AI: dữ liệu nào được kể, che thông tin thế nào, cài đặt gì cho tài khoản, vì sao bạn ấy bịa và cách bắt lỗi.

Hai nỗi lo lớn nhất của dân văn phòng khi dùng AI là **lộ dữ liệu** và **AI bịa**. Tin vui là cả hai đều có cách xử lý đơn giản, không cần biết kỹ thuật.

!!! view "Góc nhìn"
    Mình tin bạn ấy vì mình biết cách kiểm tra bạn ấy, chứ không phải tin mù quáng.

## Đèn giao thông dữ liệu

Trước khi dán bất cứ thứ gì vào khung chat, dừng lại 3 giây và tự hỏi: thông tin này thuộc đèn nào?

| Đèn | Loại thông tin | Cách làm |
|---|---|---|
| 🟢 Xanh | Thông tin công khai: văn bản pháp luật đã ban hành, tin tức, kiến thức chung, mẫu biểu trống, nội dung bạn tự viết mà không nhắc tên ai | Kể thoải mái |
| 🟡 Vàng | Tài liệu nội bộ: hợp đồng, báo cáo, email, biên bản họp, số liệu kinh doanh | **Che trước rồi mới đưa**: tên người, tên công ty, số tiền, mã số, địa chỉ |
| 🔴 Đỏ | Thông tin định danh khách hàng, số tài khoản, số CCCD, mật khẩu, dữ liệu tài chính chưa công bố, bí mật kinh doanh, thông tin sức khoẻ | **Không đưa**. Nếu cần giúp, chỉ mô tả tình huống chung chung hoặc dùng dữ liệu giả |

### Ví dụ theo ngành

| Ngành | 🟢 Thoải mái | 🟡 Che rồi mới đưa | 🔴 Không đưa |
|---|---|---|---|
| ⚖️ Pháp lý | Luật, nghị định, thông tư đã công bố · bản án đã công khai · mẫu hợp đồng trống · câu hỏi chung như "điều khoản bất khả kháng thường gồm gì?" | Hợp đồng đang đàm phán · công văn nội bộ · biên bản làm việc · thư tư vấn đã bỏ tên khách | Hồ sơ vụ việc kèm tên đương sự · chiến lược tranh tụng · thông tin khách hàng mà bạn có nghĩa vụ bảo mật · tài liệu đóng dấu "Mật" |
| 💰 Kế toán – Tài chính | Chuẩn mực, quy định thuế đã ban hành · câu hỏi về công thức Excel · cách lập một loại báo cáo · bảng số liệu tự tạo để thử | Bảng chi phí, công nợ đã thay mã khách · thuyết minh báo cáo đã bỏ tên công ty · số liệu đã làm tròn hoặc nhân cùng một hệ số | Số tài khoản ngân hàng · bảng lương có tên và mã số thuế cá nhân · báo cáo tài chính chưa công bố · mật khẩu phần mềm kế toán, chữ ký số |
| 🤝 Kinh doanh – CSKH | Thông tin sản phẩm đã công khai · bài đăng quảng cáo · kịch bản chào hàng chung · câu hỏi về kỹ năng đàm phán | Email khách đã bỏ tên và số điện thoại · báo giá đã che tên khách · ghi chú cuộc gọi đã ẩn danh | Danh sách khách hàng kèm số điện thoại, email · giá vốn, chính sách chiết khấu nội bộ · dữ liệu xuất nguyên bản từ phần mềm quản lý khách hàng |
| 🏗️ Vận hành – Xây dựng | Tiêu chuẩn kỹ thuật công khai · quy trình an toàn lao động chung · checklist bảo trì mẫu · câu hỏi về cách lập tiến độ | Nhật ký công trình đã bỏ tên dự án · báo cáo sự cố đã che tên người · bảng tiến độ đã đổi tên hạng mục | Hồ sơ dự thầu chưa nộp, giá dự thầu · thông tin cá nhân công nhân, cư dân · sơ đồ an ninh, mã ra vào toà nhà |

!!! note "Chính sách công ty đứng trên mọi bảng"
    Bảng này là điểm khởi đầu, không thay được quy định nơi bạn làm. Công ty cấm hay giới hạn điều gì thì làm theo công ty. Không chắc thì hỏi trước (xem phần "Hỏi công ty trước khi dùng" bên dưới).

## Ẩn danh hoá: che trước, dán sau

Ẩn danh hoá là thay thông tin nhận diện bằng mã giả, để AI vẫn hiểu nội dung mà không biết đó là ai. Điều quan trọng nhất: **che ngay trên máy của bạn, trước khi dán**.

!!! danger "Đừng làm"
    Đừng dán bản gốc vào rồi gõ "che giúp mình tên khách hàng nhé". Lúc bạn bấm gửi, dữ liệu thật đã rời khỏi máy rồi.

### Bước 1 · Tìm những thứ cần che

Đọc lướt tài liệu và đánh dấu:

- Tên người, kể cả chức danh đi kèm ("ông A, Giám đốc")
- Tên công ty, tên dự án, tên thương hiệu riêng
- Số hợp đồng, số hoá đơn, mã khách hàng, mã số thuế
- Số điện thoại, email, địa chỉ cụ thể
- Số tài khoản, số CCCD, biển số xe
- Số tiền, đơn giá, khi con số tự nó đã tiết lộ điều gì đó
- Ngày tháng cụ thể khiến người khác đoán ra vụ việc
- Logo, chữ ký, con dấu trong ảnh chụp hoặc file PDF

### Bước 2 · Lập bảng thay thế, giữ trên máy bạn

Mở một file ghi chú riêng, ghi lại "thật → mã". File này **chỉ bạn giữ**, không bao giờ dán vào AI. Ví dụ với dữ liệu hư cấu của trang này:

| Thông tin thật (chỉ bạn giữ) | Thay bằng |
|---|---|
| Công ty TNHH Kệ kho Phú An | [BÊN BÁN] |
| Công ty CP Phân phối Thiết bị Văn phòng Sao Mai | [BÊN MUA] |
| Trần Thu Hà | [NGƯỜI 1] |
| 27/2026/HĐMB/PA-SM | [SỐ HĐ] |
| 1.164.240.000đ | [TỔNG GIÁ TRỊ] |

Giữ mã **nhất quán**: cùng một người thì luôn là [NGƯỜI 1], để bạn ấy hiểu đúng ai làm gì. Nếu cần bạn ấy tính toán, có thể giữ số nhưng bỏ hết tên, hoặc nhân mọi con số với cùng một hệ số (tỷ lệ giữa các số vẫn đúng, số thật thì không lộ).

### Bước 3 · Thay hàng loạt bằng Tìm và Thay thế

1. Lưu một **bản sao** tài liệu, thêm chữ "AN-DANH" vào tên file. Làm trên bản sao, không đụng bản gốc.
2. Bấm <kbd>Ctrl</kbd> + <kbd>H</kbd> (Word, Excel, Google Docs đều có). Trên Mac, vào menu Edit (Sửa) > Find (Tìm) > Replace (Thay thế).
3. Ô "Tìm": thông tin thật. Ô "Thay bằng": mã. Bấm **Thay thế tất cả** (Replace All).
4. Lặp lại cho từng dòng trong bảng. Nhớ các cách viết khác nhau: "Công ty Phú An", "Cty Phú An", "Phú An", "PA".
5. Với Excel, chọn phạm vi là cả sổ làm việc (Within: Workbook) để thay ở mọi sheet.
6. Với PDF, chuyển sang Word trước, hoặc chỉ copy phần chữ thật sự cần.

### Bước 4 · Rà lần cuối

Dùng <kbd>Ctrl</kbd> + <kbd>F</kbd> tìm nhanh vài từ hay lọt lưới: dấu "@" (email), "Công ty", "Ông", "Bà", "STK", "Số:", các đầu số điện thoại. Đọc kỹ phần đầu và phần cuối văn bản, nơi hay có tên, chữ ký, địa chỉ. Đừng quên đầu trang, chân trang, chú thích và tên file.

### Bước 5 · Nhận kết quả, đổi ngược lại

Bạn ấy trả kết quả có [BÊN BÁN], [NGƯỜI 1]… Dán vào Word, dùng bảng thay thế đổi ngược lại thành tên thật. Đọc lại một lượt trước khi gửi đi.

Bạn có thể nhờ bạn ấy làm sẵn **bảng mẫu** mà không cần đưa bất kỳ dữ liệu thật nào:

```prompt AT1 · Nhờ tạo bảng thay thế mẫu (không dùng dữ liệu thật) #meta #chung
Mình sắp ẩn danh một [hợp đồng / bảng công nợ / email khách hàng] trước khi nhờ AI đọc. Mình sẽ không gửi dữ liệu thật cho bạn.
Bạn tạo giúp mình một bảng thay thế mẫu gồm 3 cột: Loại thông tin, Mã thay thế gợi ý, Lưu ý khi thay. Liệt kê đủ các loại thông tin dễ bị sót trong loại tài liệu này của ngành [pháp lý / kế toán / kinh doanh / vận hành].
Cuối bảng, gợi ý thêm 5 từ khoá mình nên tìm bằng Ctrl+F để rà lần cuối.
```

## Cài đặt quyền riêng tư cho tài khoản cá nhân

Nếu bạn dùng tài khoản cá nhân (không phải tài khoản do công ty cấp), dành 5 phút làm những việc sau:

1. **Tắt tuỳ chọn cho phép dùng dữ liệu của bạn để cải thiện mô hình.** Thường nằm trong phần Cài đặt (Settings), ở mục kiểu "Kiểm soát dữ liệu" (Data controls) hoặc "Quyền riêng tư" (Privacy).
2. **Biết chỗ bật trò chuyện tạm thời.** Nhiều công cụ có chế độ trò chuyện không lưu vào lịch sử, hợp cho những câu hỏi bạn không muốn giữ lại.
3. **Xem lại các kết nối đã cấp quyền** như Gmail, Drive, lịch. Không dùng nữa thì ngắt.
4. **Xoá các cuộc trò chuyện cũ** có nội dung không cần giữ.
5. **Bật xác minh 2 bước** cho tài khoản AI, vì toàn bộ lịch sử trò chuyện của bạn nằm trong đó.

!!! warning "Menu thay đổi thường xuyên"
    Tên mục và vị trí nút đổi theo từng phiên bản, nên mình không ghi đường dẫn cụ thể. Nếu không tìm thấy, mở trang trợ giúp chính thức (Help Center) của công cụ và tìm "privacy" hoặc "data controls". Bạn cũng có thể hỏi thẳng bạn ấy "tắt chia sẻ dữ liệu ở đâu?", nhưng nhớ đối chiếu với trang trợ giúp, vì bạn ấy không phải lúc nào cũng biết giao diện mới nhất.

!!! note "Tắt rồi vẫn giữ đèn giao thông"
    Tắt tuỳ chọn cải thiện mô hình giúp giảm rủi ro, nhưng nội dung bạn gửi vẫn đi qua máy chủ của nhà cung cấp. Thông tin 🔴 vẫn không đưa vào.

## Hỏi công ty trước khi dùng

Trong khảo sát của nhóm mình, nhiều bạn trả lời "không rõ" công ty có cho dùng AI hay không. Hỏi trước là cách bảo vệ chính bạn. Những câu nên hỏi IT hoặc quản lý:

- Công ty có cho dùng AI trong công việc không? Có văn bản quy định không?
- Được dùng công cụ nào? Công ty có cấp tài khoản doanh nghiệp không (ví dụ Copilot trong Microsoft 365, hoặc ChatGPT, Claude bản dành cho tổ chức)?
- Loại dữ liệu nào tuyệt đối không được đưa vào? Dữ liệu khách hàng thì sao?
- Có được dùng tài khoản cá nhân cho việc công ty không?
- Có được kết nối AI với email, Drive, lịch công việc không?
- Có được cài ứng dụng AI trên máy công ty không?
- Văn bản có AI hỗ trợ có cần ghi chú hay cần ai duyệt không?
- Lỡ đưa nhầm dữ liệu thì báo cho ai, làm gì?

```prompt AT2 · Soạn tin nhắn hỏi về chính sách AI #chung
Mình muốn hỏi [quản lý / bộ phận IT] xem công ty có cho dùng AI trong công việc không và được đưa loại dữ liệu nào vào. Mình muốn tin nhắn nghe như đang muốn làm đúng quy định, chứ không như đang xin làm việc riêng.
Viết giúp mình một [tin nhắn Zalo / email] ngắn, lịch sự, kèm 4–5 câu hỏi cụ thể. Giọng [thân thiện / trang trọng].
```

## Vì sao AI "bịa"?

Người bạn AI không tra cứu sự thật như tra từ điển. Bạn ấy đã "đọc" một lượng chữ khổng lồ và học cách **dự đoán chữ tiếp theo** hợp lý nhất. Giống tính năng gợi ý từ trên bàn phím điện thoại, nhưng giỏi hơn rất, rất nhiều.

Vì thế bạn ấy luôn trả lời trôi chảy, kể cả khi không có thông tin. Khi tài liệu không nói, hoặc bạn ấy không biết, bạn ấy có thể **đoán** ra một câu nghe rất hợp lý. Giới công nghệ gọi đó là "ảo giác" (hallucination). Dân văn phòng mình gọi gọn: "bịa".

Ví dụ ở [Bậc 2](cap-2.html): hợp đồng mẫu không hề quy định phạt bên bán khi giao chậm, vậy mà AI hay trả lời "phạt 8%", vì lấy nhầm điều khoản phạt bên mua. Câu trả lời nghe rất chắc, có cả số điều, nhưng sai.

Bạn ấy dễ đoán nhất khi:

- Bạn hỏi điều **không có** trong tài liệu.
- Câu hỏi đã **gài sẵn giả định** sai, ví dụ hỏi "vì sao Điều 12 quy định như vậy?" trong khi hợp đồng chỉ có 10 điều.
- Cần **con số, ngày tháng, số hiệu văn bản** cụ thể.
- Hỏi về **chuyện mới xảy ra** mà bạn ấy không tìm kiếm trên mạng.
- Cuộc trò chuyện **quá dài**, phần đầu bắt đầu bị "trôi".

!!! view "Góc nhìn"
    AI không nói dối, bạn ấy đoán. Giống một người bạn rất giỏi nhưng ngại nói "mình không biết". Bạn không cần sợ, chỉ cần quen hỏi "căn cứ đâu?", như cách bạn hỏi lại một đồng nghiệp trước khi ký.

!!! tip "Dặn trước, đỡ bịa"
    Thêm một câu vào cuối lời nhờ: *"Nếu tài liệu không có thông tin, nói rõ là không có, đừng đoán."* Câu này không chặn được mọi lỗi, nhưng giúp bạn ấy thật thà hơn hẳn.

## 5 bước kiểm chứng

Không phải việc gì cũng cần đủ 5 bước. Lời chúc sinh nhật thì không cần. Nhưng thứ gì sẽ **ký, nộp, gửi khách hay trình sếp** thì nên đi hết.

1. **Hỏi căn cứ.** Nhờ bạn ấy trích nguyên văn câu trong tài liệu, kèm số Điều hoặc số trang, và nói rõ chỗ nào là suy luận.
2. **Tự kiểm 1–2 điểm.** Mở bản gốc, dùng <kbd>Ctrl</kbd> + <kbd>F</kbd> tìm đúng câu được trích. Ưu tiên điểm quan trọng nhất, hoặc điểm nghe "tiện" quá.
3. **Hỏi "điểm nào bạn không chắc?".** Bạn ấy thường tự chỉ ra chỗ yếu khi được hỏi thẳng.
4. **Đối chiếu chéo.** Hỏi cùng câu đó ở một AI khác, dùng NotebookLM (trích dẫn bấm được), tra văn bản trên nguồn chính thức, hoặc tính lại bằng Excel.
5. **Người ký duyệt.** AI là người soạn nháp, bạn (hoặc người có thẩm quyền) là người ký. Đọc lại toàn bộ lần cuối bằng con mắt của người chịu trách nhiệm.

!!! check "Dám hỏi lại"
    Nếu bạn ấy trích một câu mà bạn tìm không ra trong bản gốc, đó là dấu hiệu đỏ. Đừng sửa cho khớp, hãy hỏi lại: *"Mình không tìm thấy câu này trong tài liệu. Bạn kiểm tra lại giúp mình?"*

## Vùng rủi ro cao: kiểm kỹ gấp đôi

| Loại thông tin | Vì sao dễ sai | Kiểm thế nào |
|---|---|---|
| Trích dẫn pháp luật: số hiệu văn bản, số điều, khoản | Dễ nhớ nhầm số, ghép điều của luật này với luật kia, thậm chí "tạo ra" một văn bản nghe rất thật | Tra văn bản gốc trên nguồn chính thức, đọc đúng điều khoản được dẫn |
| Văn bản đã sửa đổi, thay thế, hết hiệu lực | Kiến thức của bạn ấy có mốc thời gian, có thể vẫn dùng bản cũ | Hỏi "văn bản này còn hiệu lực không, căn cứ đâu?" rồi tự tra tình trạng hiệu lực |
| Con số, phép tính, tổng cộng | Có thể cộng sai, làm tròn, bỏ sót dòng | Bảo bạn ấy chỉ cách tính, tính lại bằng Excel, kiểm 3 dòng ngẫu nhiên |
| Ngày tháng, thời hạn | Dễ nhầm ngày làm việc với ngày lịch, nhầm định dạng ngày/tháng | Đếm lại trên lịch, hỏi rõ "tính theo ngày nào?" |
| Tên người, tên công ty, chức danh | Dễ sai chính tả, gán nhầm người | So với hợp đồng gốc, danh bạ |
| Thông tin hay thay đổi: thuế suất, tỷ giá, giá cả, địa chỉ hành chính | Thay đổi liên tục, ví dụ địa chỉ sau đợt sắp xếp đơn vị hành chính năm 2025 | Kiểm tra nguồn chính thức, hỏi ngày cập nhật của nguồn |

## Bản quyền & bảo mật: những điều cơ bản

- **Nghĩa vụ bảo mật vẫn còn nguyên.** Thoả thuận bảo mật, hợp đồng lao động, quy tắc nghề nghiệp của luật sư, kế toán, kiểm toán vẫn áp dụng khi bạn dùng AI. Dán tài liệu của khách vào một dịch vụ bên ngoài có thể là vi phạm, dù không ai biết.
- **Tài liệu của người khác.** Nhờ tóm tắt một cuốn sách để tự học khác hẳn việc chép lại nội dung đó để phát hành. Khi viết bài đăng công khai, đừng để AI chép nguyên văn của người khác.
- **Kết quả AI tạo ra.** Hỏi công ty về quy định sở hữu nội dung và việc có cần ghi chú "có AI hỗ trợ" hay không.
- **Hình ảnh, giọng nói người thật.** Không dùng AI tạo nội dung giả mạo người khác, kể cả để đùa.
- **Đây là hướng dẫn chung**, không phải tư vấn pháp lý. Tình huống cụ thể, hỏi bộ phận pháp chế.

## Bộ câu "Dám hỏi lại"

Copy, dán, dùng cho mọi việc quan trọng.

```prompt AT3 · Căn cứ đâu? #meta
Với mỗi ý bạn vừa đưa ra, trích nguyên văn câu trong tài liệu kèm số Điều (hoặc số trang). Chỗ nào là bạn suy luận chứ không có trong tài liệu thì ghi rõ "suy luận".
```

```prompt AT4 · Điểm nào bạn không chắc? #meta
Trong câu trả lời vừa rồi, điểm nào bạn không chắc chắn nhất? Xếp từ ít chắc đến chắc nhất, và nói mình nên kiểm tra từng điểm ở đâu.
```

```prompt AT5 · Dặn trước: không có thì nói không có #meta
Trước khi bắt đầu: chỉ trả lời dựa trên tài liệu mình gửi. Nếu tài liệu không có thông tin, nói rõ "tài liệu không đề cập", đừng đoán. Nếu bạn dùng kiến thức bên ngoài, đánh dấu riêng để mình biết.
```

```prompt AT6 · Làm sao để mình kiểm tra bạn? #meta
Làm sao để mình biết bạn không bịa trong câu trả lời này? Gợi ý cho mình 3 cách cụ thể để tự kiểm tra, cách nhanh nhất trước.
```

```prompt AT7 · Chỉ cách tính #meta #ketoan
Chỉ cho mình từng bước bạn tính ra con số [___]: lấy từ dòng nào, cộng trừ thế nào, có làm tròn hay bỏ dòng nào không. Chọn 3 dòng bất kỳ để mình đối chiếu với file gốc.
```

```prompt AT8 · Văn bản còn hiệu lực không? #meta #luat
Bạn vừa dẫn [tên văn bản / số điều]. Văn bản này hiện còn hiệu lực không, đã bị sửa đổi hay thay thế chưa? Kiến thức của bạn cập nhật đến khi nào? Nếu không chắc thì nói thẳng, và chỉ mình nên tra ở nguồn chính thức nào.
```

```prompt AT9 · Đóng vai người soát lỗi khó tính #meta
Giờ bạn đóng vai một người soát lỗi khó tính, đọc lại câu trả lời của chính bạn. Tìm mọi chỗ có thể sai: con số, ngày tháng, tên riêng, trích dẫn, suy luận vội. Liệt kê ra, rồi sửa những chỗ bạn chắc là sai.
```

## Tự kiểm tra

- [ ] Mình phân biệt được 3 đèn và kể được 2 ví dụ 🔴 trong ngành của mình
- [ ] Mình đã tắt tuỳ chọn dùng dữ liệu để cải thiện mô hình trên tài khoản cá nhân
- [ ] Mình đã thử ẩn danh một tài liệu bằng bảng thay thế và <kbd>Ctrl</kbd> + <kbd>H</kbd>
- [ ] Mình biết chính sách AI của công ty, hoặc đã gửi câu hỏi cho người phụ trách
- [ ] Mình giải thích được cho đồng nghiệp vì sao AI "bịa"
- [ ] Mình đã dùng ít nhất 2 câu trong bộ "Dám hỏi lại" cho một việc thật
