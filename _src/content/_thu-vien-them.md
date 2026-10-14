---
title: Prompt bổ sung
kind: prompts
summary: Các câu mở lời bổ sung cho Thư viện prompt, chia theo nhóm việc.
---

## Email & văn bản

```prompt VB1 · Soạn công văn trả lời cơ quan nhà nước #luat #chung
Công ty mình vừa nhận công văn của [cơ quan] về việc [nội dung], yêu cầu [giải trình / cung cấp hồ sơ] trước ngày [___]. Quan điểm của công ty là [___], hồ sơ mình có thể cung cấp gồm [___].
Soạn giúp mình công văn trả lời đúng thể thức văn bản hành chính: số, ký hiệu, trích yếu, kính gửi, nội dung, nơi nhận. Giọng cầu thị, rõ ràng, không nhận lỗi những việc chưa xác định. Chỗ nào cần mình điền thêm thì để trong [ngoặc vuông].
Nếu cần thêm thông tin thì hỏi mình trước nhé.
```

```prompt VB2 · Viết tờ trình xin duyệt #chung #ketoan
Mình cần trình [Giám đốc / Hội đồng quản trị] duyệt [nội dung: mua thiết bị, chi phí phát sinh, thay đổi nhà cung cấp…]. Lý do: [___]. Chi phí dự kiến: [___]. Phương án thay thế mình đã cân nhắc: [___].
Viết giúp mình tờ trình gồm: sự cần thiết, nội dung đề xuất, chi phí và nguồn kinh phí, so sánh phương án, kiến nghị. Ngắn gọn, sếp đọc 2 phút là quyết được.
Nếu cần thêm thông tin thì hỏi mình trước nhé.
```

```prompt VB3 · Email nhắc thanh toán lần 2 #ketoan #kinhdoanh
Khách hàng [tên công ty] đang quá hạn thanh toán [số] ngày với số tiền [___], hoá đơn số [___]. Mình đã nhắc lần 1 vào ngày [___] nhưng chưa thấy phản hồi. Đây là khách [lâu năm / mới], mình muốn giữ quan hệ.
Viết email nhắc lần 2: lịch sự nhưng cương quyết, nêu rõ số tiền, hạn mới, cách thanh toán, và bước tiếp theo nếu vẫn chưa thanh toán. Cho mình 2 phiên bản: mềm và cứng hơn một chút.
```

```prompt VB4 · Từ chối khéo một đề nghị #chung #kinhdoanh
Mình cần từ chối [đề nghị: giảm giá thêm / nhận thêm việc / tham gia dự án] của [ai, quan hệ thế nào]. Lý do thật là [___], nhưng mình muốn giữ quan hệ tốt và nếu được thì đưa ra một phương án khác: [___].
Viết giúp mình [email / tin nhắn Zalo] ngắn, chân thành, không vòng vo, không nghe như lấy cớ.
```

```prompt VB5 · Thông báo nội bộ dễ hiểu #vanhanh #chung
Mình cần thông báo tới [toàn công ty / cư dân / nhân viên ca đêm] về việc [nội dung thay đổi], áp dụng từ [ngày]. Người đọc cần biết: [điều gì thay đổi, ảnh hưởng gì đến họ, họ phải làm gì, hỏi ai].
Viết thông báo ngắn, dễ đọc trên điện thoại: tiêu đề rõ, gạch đầu dòng, không thuật ngữ khó. Thêm một bản rút gọn 3 dòng để gửi qua Zalo.
```

```prompt VB6 · Viết lại cho ngắn và rõ #chung
Đoạn văn dưới đây mình viết dài và rối quá. Viết lại giúp mình ngắn còn khoảng một nửa, giữ đủ ý chính, câu ngắn, dễ hiểu. Sau đó liệt kê những ý bạn đã bỏ để mình xem có cần giữ lại ý nào không.

[Dán đoạn văn]
```

```prompt VB7 · Trả lời khiếu nại của khách #kinhdoanh
Khách hàng [tên hoặc mô tả] khiếu nại về [vấn đề]. Sự thật là [phía mình sai ở đâu, phía khách hiểu lầm ở đâu]. Công ty có thể [đền bù / sửa / giải thích] như sau: [___].
Viết thư trả lời: xin lỗi đúng chỗ cần xin lỗi, giải thích ngắn không đổ lỗi, đưa giải pháp kèm mốc thời gian. Sau đó đóng vai chính khách hàng đó, đọc lại và nói thật bạn còn bực ở chỗ nào.
```

## Tài liệu & pháp lý

```prompt PL1 · Rà soát hợp đồng theo phía mình #luat
Mình là [bên mua / bên bán / bên thuê…] trong hợp đồng đính kèm (đã che tên và số). Rà soát giúp mình:
1. Nghĩa vụ chính và thời hạn của mỗi bên.
2. Điều khoản bất lợi cho phía mình, xếp theo mức rủi ro.
3. Điều khoản mơ hồ, có thể hiểu theo nhiều cách.
4. Những gì thường có trong loại hợp đồng này mà ở đây còn thiếu.
Với mỗi ý, trích nguyên văn và ghi số Điều. Chỗ nào là bạn suy luận thì ghi rõ.
```

```prompt PL2 · So sánh hai phiên bản văn bản #luat #chung
Mình gửi hai phiên bản của cùng một [hợp đồng / quy chế / văn bản]: bản cũ và bản mới. Lập bảng so sánh gồm: Điều, Bản cũ, Bản mới, Thay đổi có ý nghĩa gì với [phía mình]. Chỉ liệt kê những chỗ thay đổi về nội dung, bỏ qua lỗi chính tả hay đổi cách trình bày. Cuối bảng, nêu 3 thay đổi quan trọng nhất mình cần chú ý.
```

```prompt PL3 · Giải thích văn bản pháp luật cho người không chuyên #luat #chung
Đây là [tên văn bản / đoạn trích]. Giải thích giúp mình cho [nhân viên kinh doanh / kế toán / ban giám đốc] hiểu: văn bản này quy định gì, áp dụng cho ai, từ khi nào, công ty mình cần làm gì khác đi. Dùng lời thường, có ví dụ.
Chỉ dựa trên nội dung mình gửi. Chỗ nào văn bản không nói rõ thì ghi "văn bản không đề cập", đừng đoán.
```

```prompt PL4 · Lập checklist hồ sơ #luat #vanhanh
Mình cần chuẩn bị hồ sơ cho [thủ tục / gói thầu / nghiệm thu / ký hợp đồng với nhà cung cấp mới]. Dựa trên [tài liệu hướng dẫn đính kèm / yêu cầu sau: ___], lập giúp mình checklist gồm: tên giấy tờ, số bản, bản gốc hay bản sao, ai chuẩn bị, hạn chót. Đánh dấu những giấy tờ hay bị thiếu hoặc mất nhiều thời gian nhất.
```

```prompt PL5 · Tóm tắt hồ sơ mời thầu #kinhdoanh #vanhanh
Đây là hồ sơ mời thầu [tên gói thầu]. Tóm tắt giúp mình trên 1 trang: yêu cầu bắt buộc (năng lực, kinh nghiệm, tài chính), tiêu chí đánh giá, các mốc thời gian quan trọng, bảo lãnh dự thầu. Rồi liệt kê những điểm công ty mình có thể yếu, biết rằng công ty mình [mô tả ngắn năng lực].
Mỗi ý ghi số mục hoặc số trang để mình đối chiếu.
```

```prompt PL6 · Soạn phụ lục sửa đổi hợp đồng #luat
Hai bên muốn sửa hợp đồng số [___] ở các điểm sau: [liệt kê: đổi thời hạn giao hàng, đổi giá, thêm hạng mục…]. Các điều khoản khác giữ nguyên.
Soạn giúp mình phụ lục sửa đổi: căn cứ, nội dung sửa đổi ghi rõ "Điều X được sửa thành…", hiệu lực, số bản. Thêm 3 lưu ý pháp lý mình nên kiểm tra trước khi ký. Nếu cần thêm thông tin thì hỏi mình trước nhé.
```

## Số liệu & Excel

```prompt SL1 · Viết công thức Excel bằng tiếng Việt #chung #ketoan
Bảng của mình: cột A là [___], cột B là [___], cột C là [___], dữ liệu từ dòng 2 đến dòng [___]. Mình muốn [mô tả điều muốn tính, ví dụ: tổng tiền theo từng nhà cung cấp trong tháng 9].
Viết công thức giúp mình và giải thích từng phần thật dễ hiểu. Excel của mình dùng dấu [";" / ","] để ngăn cách. Nếu có cách đơn giản hơn công thức (như PivotTable) thì gợi ý luôn.
```

```prompt SL2 · Đối chiếu công nợ #ketoan
Mình có hai bảng: sổ chi tiết công nợ của công ty và biên bản đối chiếu khách hàng [mã KH] gửi về (đã che tên). Đối chiếu giúp mình từng hoá đơn và từng lần thanh toán: khớp, lệch số tiền, có bên này mà không có bên kia. Lập bảng chênh lệch, đoán nguyên nhân có thể (ghi rõ là đoán), và soạn sẵn email gửi khách để xác nhận các khoản lệch.
```

```prompt SL3 · Giải thích biến động so với kỳ trước #ketoan
Đây là số liệu [chi phí / doanh thu] kỳ này và kỳ trước theo từng khoản mục. Chỉ ra 5 khoản biến động lớn nhất (cả số tuyệt đối và phần trăm), rồi viết đoạn thuyết minh ngắn cho từng khoản. Chỗ nào bạn không biết nguyên nhân thì để [CẦN BỔ SUNG LÝ DO] cho mình điền, đừng tự nghĩ ra lý do.
```

```prompt SL4 · Dọn sạch một danh sách #chung
Đây là danh sách [khách hàng / nhà cung cấp / nhân sự] gõ tay qua nhiều năm, khá lộn xộn. Dọn giúp mình: gộp tên viết khác nhau của cùng một đơn vị, chuẩn hoá số điện thoại và ngày tháng, đánh dấu dòng trùng và dòng thiếu thông tin. Cho mình tải file đã sửa, kèm bảng ghi lại bạn đã sửa những gì.
```

```prompt SL5 · Tìm điểm bất thường #ketoan #vanhanh
Đây là bảng [chi phí / nhật ký kho / chấm công] tháng [___]. Tìm giúp mình những điểm bất thường: số tiền lớn khác thường, giao dịch trùng, ngày lạ (cuối tuần, ngày lễ), người đề nghị lặp lại nhiều. Với mỗi điểm, nói vì sao bạn thấy bất thường và mình nên kiểm tra gì. Đừng kết luận ai sai, chỉ đánh dấu để mình xem.
```

```prompt SL6 · Từ bảng số đến nhận xét cho sếp #chung #kinhdoanh
Đây là bảng số liệu [doanh số / tiến độ / chi phí] tuần này. Viết giúp mình 5 dòng nhận xét cho Giám đốc: điều tốt nhất, điều đáng lo nhất, xu hướng so với tuần trước, một việc cần sếp quyết định, một đề xuất. Mỗi nhận xét phải kèm con số cụ thể từ bảng. Sau đó đóng vai sếp khó tính, hỏi vặn mình 2 câu.
```

## Họp & kế hoạch

```prompt HK1 · Biên bản họp từ ghi chú vội #chung
Đây là ghi chú mình viết vội trong cuộc họp [tên cuộc họp] ngày [___], thành phần gồm [___]. Viết lại thành biên bản: nội dung đã thống nhất, việc cần làm (ai làm, hạn khi nào), vấn đề còn treo. Chỗ nào ghi chú không rõ ai nhận việc hoặc hạn khi nào thì đánh dấu [CẦN XÁC NHẬN], đừng tự điền.

[Dán ghi chú]
```

```prompt HK2 · Lên kế hoạch tuần #chung
Tuần này mình có các việc sau: [liệt kê, kèm hạn nếu có]. Lịch cố định: [các cuộc họp, buổi đi công tác]. Mình làm việc tốt nhất vào [buổi sáng / buổi chiều].
Sắp xếp giúp mình kế hoạch tuần: việc nào làm trước, chia vào từng ngày, chừa thời gian cho việc phát sinh. Chỉ ra việc nào có thể nhờ AI làm nháp, việc nào nên giao hoặc bỏ.
```

```prompt HK3 · Viết OKR cho quý #chung
Mình là [vị trí] ở [phòng ban]. Quý tới, công ty ưu tiên [___], còn phòng mình muốn [___]. Giúp mình viết 2–3 mục tiêu (Objective) truyền cảm hứng, mỗi mục tiêu có 2–4 kết quả then chốt (Key Result) đo được bằng con số. Sau đó chỉ ra kết quả nào đang mơ hồ hoặc khó đo, và gợi ý sửa.
Hỏi mình vài câu trước nếu bạn cần hiểu thêm về phòng mình nhé.
```

```prompt HK4 · Chuẩn bị cho một cuộc họp khó #chung
Tuần sau mình họp với [ai] về [vấn đề]. Mình muốn đạt được [___], còn phía bên kia có thể muốn [___]. Giúp mình chuẩn bị: mục tiêu cuộc họp, 3 luận điểm chính, 5 câu hỏi khó họ có thể hỏi và cách trả lời, điểm mình có thể nhượng bộ và điểm không được nhượng. Sau đó đóng vai họ để mình tập nói thử.
```

```prompt HK5 · Chia việc lớn thành đầu việc nhỏ #vanhanh #chung
Mình phụ trách [dự án / sự kiện / chuyển văn phòng], hạn hoàn thành [ngày], nhóm có [số người, vai trò]. Chia giúp mình thành các đầu việc nhỏ, mỗi việc làm xong trong 1–2 ngày, có người phụ trách gợi ý, thứ tự trước sau, và mốc kiểm tra. Đánh dấu những việc dễ bị trễ nhất. Xuất thành bảng để mình dán vào Excel.
```

```prompt HK6 · Bộ câu hỏi phỏng vấn tuyển dụng #chung
Mình cần phỏng vấn ứng viên vị trí [___], yêu cầu chính: [kỹ năng, kinh nghiệm]. Văn hoá nhóm mình: [___].
Soạn giúp mình 10 câu hỏi phỏng vấn: kiểm tra chuyên môn, kỹ năng xử lý tình huống, độ hợp văn hoá. Với mỗi câu, ghi câu trả lời tốt trông thế nào và dấu hiệu đáng lo. Kèm một bảng chấm điểm đơn giản để những người cùng phỏng vấn chấm cho thống nhất.
```

```prompt HK7 · Viết nhận xét đánh giá nhân viên #chung
Mình cần viết nhận xét đánh giá [6 tháng / cuối năm] cho một thành viên trong nhóm (không ghi tên). Điểm mạnh mình quan sát được: [ví dụ cụ thể]. Điểm cần cải thiện: [ví dụ cụ thể]. Mục tiêu kỳ tới: [___].
Viết giúp mình bản nhận xét công bằng, cụ thể, dựa trên hành vi chứ không phán xét con người, giọng động viên. Gợi ý thêm 3 câu mình nên nói khi gặp trực tiếp.
```

## Thuyết trình & truyền thông

```prompt TT1 · Dàn ý bài thuyết trình #chung
Mình cần thuyết trình [chủ đề] trong [số] phút cho [ai nghe, họ quan tâm gì]. Điều mình muốn họ nhớ nhất sau buổi là [___].
Giúp mình dàn ý: mở đầu gây chú ý, 3 ý chính, mỗi ý có ví dụ hoặc con số, kết thúc với lời kêu gọi rõ ràng. Gợi ý nội dung cho từng slide, mỗi slide không quá 15 chữ.
```

```prompt TT2 · Luyện trả lời câu hỏi khó #chung
Mình sắp trình bày [nội dung] trước [ai]. Bạn đóng vai người nghe khó tính nhất trong phòng, hỏi mình từng câu một, mỗi lần một câu. Sau mỗi câu trả lời của mình, chấm điểm 1–10 và gợi ý cách trả lời gọn, thuyết phục hơn. Hỏi tổng cộng 5 câu nhé.
```

```prompt TT3 · Báo giá kèm thư chào hàng #kinhdoanh
Khách [mô tả: loại doanh nghiệp, nhu cầu] hỏi báo giá [sản phẩm / dịch vụ]. Thông tin: [danh mục, số lượng, đơn giá, chiết khấu, VAT, thời gian giao, hiệu lực báo giá].
Làm giúp mình bảng báo giá rõ ràng, tự tính thành tiền, chiết khấu, VAT, tổng cộng, kèm một thư chào hàng ngắn nhấn vào lợi ích khách quan tâm nhất. Kiểm tra lại các phép tính và ghi rõ cách tính.
```

```prompt TT4 · Bài đăng giới thiệu sản phẩm #kinhdoanh
Viết giúp mình 3 phiên bản bài đăng [Facebook / LinkedIn / Zalo OA] giới thiệu [sản phẩm, dịch vụ] cho [khách hàng mục tiêu]. Điểm khác biệt: [___]. Ưu đãi: [___].
Mỗi bản một phong cách: kể chuyện, ngắn gọn thẳng vào lợi ích, hỏi đáp. Không phóng đại, không dùng từ "tốt nhất", "số 1" nếu không có căn cứ.
```

```prompt TT5 · Kịch bản chăm sóc khách hàng qua điện thoại #kinhdoanh
Mình cần kịch bản gọi điện cho [khách mới mua hàng / khách lâu không quay lại / khách vừa phàn nàn] của công ty [ngành]. Mục tiêu cuộc gọi: [___].
Viết kịch bản gồm: câu chào, câu hỏi mở, cách xử lý 4 phản ứng thường gặp (bận, không quan tâm, đang bực, hỏi giá), cách kết thúc. Lời nói tự nhiên như người thật, không đọc như máy.
```

```prompt TT6 · Viết lại cho từng đối tượng #chung
Đây là nội dung về [chủ đề, ví dụ: chính sách công tác phí mới]. Viết lại thành 3 phiên bản: một cho Ban giám đốc (ngắn, tập trung tác động và chi phí), một cho nhân viên (dễ hiểu, họ cần làm gì), một cho khách hàng hoặc đối tác (nếu liên quan, lịch sự, ngắn). Giữ đúng thông tin, chỉ đổi cách nói.

[Dán nội dung]
```

## Học & phát triển bản thân

```prompt PT1 · Luyện tiếng Anh theo tình huống công việc #chung
Mình muốn luyện tiếng Anh để [họp với đối tác / viết email cho khách nước ngoài / phỏng vấn]. Trình độ của mình khoảng [mới bắt đầu / giao tiếp cơ bản / khá]. Bạn đóng vai [đối tác / khách hàng / người phỏng vấn], nói chuyện với mình bằng tiếng Anh đơn giản, mỗi lần 1–2 câu. Sau mỗi câu mình trả lời, sửa lỗi của mình bằng tiếng Việt và gợi ý cách nói tự nhiên hơn.
```

```prompt PT2 · Sửa email tiếng Anh và giải thích lỗi #chung
Đây là email tiếng Anh mình viết gửi [ai] về [việc gì]. Sửa giúp mình cho tự nhiên và chuyên nghiệp, giữ đúng ý. Sau đó lập bảng các lỗi mình hay mắc (ngữ pháp, từ dùng chưa hợp, câu dịch kiểu tiếng Việt), giải thích bằng tiếng Việt để lần sau mình tự tránh được.

[Dán email]
```

```prompt PT3 · Lộ trình học nhanh một chủ đề mới #chung
Mình cần hiểu về [chủ đề, ví dụ: hoá đơn điện tử, quản trị dự án, phân tích báo cáo tài chính] đủ để [mục tiêu cụ thể] trong 2 tuần, mỗi ngày học được khoảng [số] phút.
Lập giúp mình lộ trình theo ngày: học gì, tài liệu loại gì nên tìm, bài tập nhỏ để tự kiểm tra. Bắt đầu bằng việc hỏi mình 3 câu để biết mình đang ở đâu.
```

```prompt PT4 · Chuẩn bị phỏng vấn hoặc đàm phán lương #chung
Mình sắp [phỏng vấn vị trí ___ / nói chuyện tăng lương với sếp]. Những gì mình đã làm được: [kết quả cụ thể, con số]. Điều mình mong muốn: [___].
Giúp mình chuẩn bị: cách kể thành tích ngắn gọn, thuyết phục; 5 câu khó có thể bị hỏi và gợi ý trả lời; những câu nên tránh nói. Rồi đóng vai [người phỏng vấn / sếp] để mình tập.
```

```prompt PT5 · Tóm tắt sách để áp dụng ngay #chung
Mình vừa đọc (hoặc muốn đọc) cuốn [tên sách] của [tác giả]. Tóm tắt giúp mình các ý chính, rồi gợi ý 5 cách áp dụng cụ thể cho công việc [nghề của bạn] và đời sống. Nếu bạn không chắc về nội dung cuốn sách thì nói rõ, đừng đoán.
```

## Đời sống & gia đình

```prompt DS1 · Kế hoạch du lịch gia đình #doisong
Nhà mình [số người, độ tuổi các con, ông bà có đi không] muốn đi [địa điểm] [số] ngày vào [thời gian], ngân sách khoảng [___]. Nhà mình thích [biển / ăn uống / thiên nhiên / nghỉ ngơi nhẹ nhàng], không thích [___].
Lên giúp mình lịch trình từng ngày, có thời gian nghỉ cho trẻ nhỏ, danh sách đồ cần mang, và các việc cần đặt trước. Giá vé, giờ mở cửa thì ghi chú để mình tự kiểm tra lại.
Nếu cần thêm thông tin thì hỏi mình trước nhé.
```

```prompt DS2 · Thực đơn tuần và danh sách đi chợ #doisong
Nhà mình [số người], có [trẻ nhỏ / người lớn tuổi / người ăn kiêng / dị ứng ___]. Mình có khoảng [số] phút nấu mỗi tối, thích món [miền Bắc / miền Nam / đa dạng].
Lên thực đơn 7 ngày cho bữa tối, cân bằng dinh dưỡng, tận dụng nguyên liệu giữa các ngày để đỡ phí. Kèm danh sách đi chợ gom theo nhóm (rau, thịt cá, đồ khô) để mình mua một lần cuối tuần.
```

```prompt DS3 · Giúp con học mà không làm hộ #doisong
Con mình học lớp [___], đang gặp khó với [môn / dạng bài]. Mình muốn giúp con tự hiểu, không làm hộ.
Bạn đóng vai gia sư kiên nhẫn: giải thích bằng ví dụ gần gũi với trẻ [tuổi], rồi đưa từng câu hỏi gợi mở để con tự tìm ra đáp án. Cho thêm 5 bài luyện từ dễ đến khó. Mình sẽ đọc to cho con nghe, nên viết thật dễ hiểu nhé.
```

```prompt DS4 · Lập ngân sách gia đình #doisong
Thu nhập hằng tháng của nhà mình khoảng [___]. Các khoản chi cố định: [___]. Mục tiêu: [tiết kiệm mua nhà / quỹ học cho con / quỹ dự phòng] khoảng [___] trong [thời gian].
Giúp mình chia ngân sách hằng tháng thành các nhóm hợp lý, chỉ ra khoản nào có thể cắt giảm, và làm một bảng theo dõi đơn giản mình dùng được trên điện thoại. Đây là lập kế hoạch chi tiêu, không cần gợi ý đầu tư.
```

```prompt DS5 · Lời chúc, lời phát biểu #doisong
Mình cần [phát biểu ở đám cưới bạn thân / chúc mừng sinh nhật mẹ / chia tay đồng nghiệp nghỉ hưu], dài khoảng [số] phút. Vài kỷ niệm thật: [___]. Mình muốn giọng [xúc động / vui vẻ / trang trọng].
Viết giúp mình 2 phiên bản, câu ngắn để dễ nói, không sáo rỗng. Đánh dấu chỗ nên ngừng lại một chút khi nói.
```

```prompt DS6 · Đọc hiểu giấy tờ cá nhân #doisong
Đây là [hợp đồng thuê nhà / điều khoản bảo hiểm / hợp đồng vay] mình sắp ký (đã che tên và số giấy tờ). Giải thích giúp mình bằng lời thường: mình phải làm gì, mất tiền ở những khoản nào, trường hợp nào mình bị thiệt, điều khoản nào nên hỏi lại trước khi ký. Trích nguyên văn điều khoản để mình đối chiếu.
```

## Hỏi thẳng bạn ấy (meta)

```prompt MT1 · Bạn cần biết gì? #meta
Mình muốn [việc bạn cần]. Bạn cần biết gì từ mình để làm tốt nhất? Hỏi mình từng câu một, đợi mình trả lời rồi mới hỏi câu tiếp nhé.
```

```prompt MT2 · Viết lại câu nhờ của mình cho tốt hơn #meta
Đây là câu mình định nhờ AI: "[dán câu nhờ]". Bạn góp ý giúp: còn thiếu bối cảnh gì, chỗ nào dễ hiểu sai, kết quả mình mong đợi đã rõ chưa. Rồi viết lại thành một câu nhờ tốt hơn, giải thích ngắn vì sao tốt hơn.
```

```prompt MT3 · Tự chấm bài theo tiêu chí #meta
Trước khi đưa mình bản cuối, tự chấm bài của bạn theo các tiêu chí sau, mỗi tiêu chí điểm 1–10: [đúng mục tiêu / chính xác về số liệu / đúng giọng văn / ngắn gọn / người nhận hành động được ngay]. Tiêu chí nào dưới 8 điểm thì sửa, rồi mới đưa mình bản cuối kèm bảng điểm.
```

```prompt MT4 · Đóng vai người phản biện #meta
Bạn đóng vai [luật sư phía đối tác / sếp khó tính / khách hàng khó chiều / kiểm toán viên], đọc bản nháp này và phản biện thẳng thắn: 3 điểm yếu nhất, 3 câu hỏi khó nhất họ sẽ hỏi. Sau đó giúp mình sửa bản nháp để trả lời trước những câu hỏi đó.
```

```prompt MT5 · Có file mà chưa biết nhờ gì #meta
Mình có [file / tài liệu / ảnh] này nhưng chưa biết nên nhờ bạn làm gì với nó. Mình làm [nghề], file này dùng để [___]. Bạn xem qua rồi gợi ý 5 việc bạn có thể giúp, việc nào tiết kiệm thời gian nhất cho mình thì đưa lên đầu.
```

```prompt MT6 · Tóm tắt để mở cuộc trò chuyện mới #meta
Cuộc trò chuyện này dài quá rồi. Tóm tắt giúp mình mọi thứ quan trọng để mình mở cuộc trò chuyện mới mà không mất mạch: mục tiêu, bối cảnh, những gì đã quyết định, kết quả hiện tại, việc còn dang dở. Viết thành một đoạn để mình copy dán vào cuộc trò chuyện mới.
```

```prompt MT7 · Biến cách làm hôm nay thành hướng dẫn dùng lại #meta
Hôm nay mình với bạn đã làm xong [việc] qua cuộc trò chuyện này. Viết giúp mình một bản hướng dẫn để lần sau dán vào Project (hoặc gửi cho đồng nghiệp làm theo): đầu vào cần chuẩn bị, các bước, câu nhờ mẫu cho từng bước, cách kiểm tra kết quả, những lỗi đã gặp và cách tránh.
```
