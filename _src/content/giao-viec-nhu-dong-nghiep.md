---
title: Giao việc như giao cho đồng nghiệp
kind: page
eyebrow: Nền tảng · Cách nói chuyện
summary: Người tạo ra Claude Code nói prompt chẳng có bí mật gì. Chỉ cần nói rõ ba điều: muốn gì, bỏ bao nhiêu công sức, kiểm tra thế nào.
time: 15 phút đọc
order: 2
---

Ngày 6/10/2026, Boris Cherny, người tạo ra Claude Code ở Anthropic, đăng một dòng trên X khiến nhiều người bất ngờ: anh nhờ AI bằng những câu nghe như nhắn tin cho đồng nghiệp. Không công thức, không mẫu dài, không "kỹ thuật viết prompt".

Với khoá này, đó không phải điều mới. Ngay từ buổi đầu, tinh thần của mình đã là **mọi thứ là giao tiếp, như người với người**. Trang này biến ý của Boris thành một thói quen dùng được ngay, có mẫu câu, ví dụ từng ngành, và cả những lúc vẫn cần nói nhiều hơn.

## Chuyện gì đã xảy ra

Nguyên văn câu mở đầu của Boris (tiếng Anh): *"Talk to Claude the way you would a coworker. There's no secret to prompting."* Dịch: **Hãy nói chuyện với Claude như nói với một đồng nghiệp. Prompt chẳng có bí mật gì cả.**

Anh viết tiếp, theo các báo công nghệ đưa tin: với phần lớn công việc, không cần rào trước đón sau hay chỉ dẫn từng bước. Hãy giao mục tiêu, mô hình sẽ tự tìm cách. Thời các mô hình còn yếu (anh nhắc tới thời Sonnet 3.5), câu chữ trong prompt quyết định rất nhiều. Bây giờ, quan trọng hơn là nói rõ:

1. **Bạn muốn nó làm gì.**
2. **Bạn muốn nó bỏ bao nhiêu công sức.**
3. **Nó nên kiểm tra thế nào để biết đã làm đúng.**

Anh còn chia sẻ một prompt thật của mình. Báo chí chỉ trích lại từng mảnh: một tập podcast anh thấy "thật sự tuyệt vời", nhờ làm một trang trình bày về nó, "dùng thật nhiều token", hình minh hoạ phải đẹp hơn đồ hoạ dữ liệu của New York Times hay New Yorker, "có khi thêm màu nước". Có người hỏi lại: rốt cuộc anh có muốn màu nước không? Anh trả lời rằng mô hình mới có gu, và anh "tin nó tự nấu được".

!!! view "Góc nhìn"
    Câu trả lời của Boris không phải "hãy lười nói". Nó là "hãy nói đúng thứ cần nói". Muốn gì, chuẩn đến đâu, cho phép bỏ bao nhiêu công sức, và kiểm tra thế nào. Phần "làm thế nào", cứ để người bạn giỏi của bạn tự lo.

## Ba điều cần nói rõ

### 1. Muốn gì

Không chỉ là tên việc ("viết email"), mà là **mục tiêu**: dùng vào đâu, gửi cho ai, thế nào là tốt. Một đồng nghiệp mới cần biết những điều này, AI cũng vậy.

- Chưa đủ: "Viết email trả lời khách."
- Đủ: "Mình cần trả lời chị Lan, khách quen 3 năm, đang bực vì đơn hàng giao chậm 5 ngày. Mình muốn giữ khách. Viết ngắn, thật lòng, có mốc giao mới."

### 2. Bỏ bao nhiêu công sức

Bạn ấy không tự biết việc này là việc vặt hay việc quan trọng. Hãy nói thẳng:

| Bạn muốn | Nói thế này |
|---|---|
| Nhanh, đủ dùng | "Làm nhanh gọn thôi, không cần hoàn hảo." |
| Cẩn thận | "Việc này quan trọng, cứ làm kỹ, không cần vội." |
| Rất kỹ | "Dành nhiều thời gian suy nghĩ. Thử vài hướng rồi chọn hướng tốt nhất, nói mình vì sao." |
| Có lựa chọn | "Làm 3 phương án khác nhau, mỗi phương án ghi hợp với tình huống nào." |

Một số công cụ có thêm nút hoặc chế độ "suy nghĩ lâu hơn" (thinking, reasoning). Tên gọi và giới hạn mỗi nơi một khác, lại thay đổi thường xuyên, nên hãy xem trang chính thức. Với bản miễn phí, câu "cứ làm kỹ, không cần vội" vẫn có ích.

### 3. Kiểm tra thế nào

Đây chính là vế **dám hỏi lại**, nhưng dặn từ trước để bạn ấy tự kiểm. Câu dặn càng cụ thể càng tốt:

- "Xong thì đối chiếu tổng với từng file gốc."
- "Đánh dấu những chỗ bạn tự thêm mà mình chưa nói."
- "Mỗi ý trích nguyên văn kèm số Điều. Không có trong tài liệu thì nói rõ là không có."
- "Tính lại bằng một cách khác, hai cách phải ra cùng một số."
- "Chạy thử với 3 trường hợp: hạn hôm nay, hạn ngày mai, hạn tuần sau."
- Và câu chốt: "**Báo mình đã kiểm gì, chưa kiểm được gì.**"

## Mẫu câu giao việc

```prompt DN1 · Mẫu giao việc như giao cho đồng nghiệp #meta
Mình cần [việc gì], để [dùng vào đâu / gửi cho ai].
[Những gì một đồng nghiệp mới cần biết: ai, chuyện gì, thế nào là tốt.]
Cứ [làm nhanh gọn thôi / làm thật kỹ, không cần vội].
Xong thì tự kiểm tra bằng cách [___], rồi báo mình đã kiểm gì, chưa kiểm được gì.
Thiếu gì thì hỏi mình trước nhé.
```

Dòng cuối là chiêu quen thuộc của khoá: **Hỏi thẳng bạn ấy**. Bạn không cần kể hoàn hảo, bạn ấy sẽ hỏi phần còn thiếu.

Có sẵn một câu nhờ cũ và muốn nâng cấp nó? Nhờ luôn:

```prompt DN2 · Biến câu nhờ quen thuộc thành kiểu đồng nghiệp #meta
Đây là câu mình hay nhờ AI: "[dán câu của bạn]". Viết lại giúp mình theo kiểu giao việc cho một đồng nghiệp giỏi: nói rõ mình muốn gì, bỏ bao nhiêu công sức, và kiểm tra thế nào. Giải thích ngắn vì sao bản mới tốt hơn.
```

## Trước và sau

| Kiểu cũ | Kiểu đồng nghiệp |
|---|---|
| "Tóm tắt hợp đồng này." | "Mình là bên mua, sắp ký hợp đồng này. Cần biết ai làm gì, hạn khi nào, chỗ nào bất lợi cho mình. Cứ đọc kỹ. Mỗi ý trích nguyên văn kèm số Điều." |
| "Làm sạch file Excel." | "File chi phí tháng 9, mình cần tổng theo nhóm để báo sếp thứ Hai. Bạn tự xem nên dọn gì. Xong cho mình biết đã bỏ bao nhiêu dòng trùng và giải thích 3 dòng bất kỳ." |
| "Viết báo cáo tuần." | "Đây là ghi chú vội tuần 40. Viết báo cáo đúng mẫu đã có, giọng như các tuần trước. Làm nhanh gọn. Số nào không khớp thì đánh dấu CẦN KIỂM TRA, đừng tự điền." |
| "Làm cho mình cái app nhắc việc." | "Nhóm 5 người hay quên hạn. Mình muốn một công cụ nhỏ chạy trên trình duyệt, cảnh báo trước hạn 5 ngày. Hỏi mình vài câu rồi làm luôn. Xong thì tự thử với vài việc có hạn khác nhau xem màu có đúng không." |

## Khi nào vẫn cần nói nhiều hơn

Boris nói "với phần lớn công việc". Một lưu ý trung thực: **ngắn không có nghĩa là thiếu**.

- **Việc lớn, lạ, nhiều ràng buộc:** vẫn cần bối cảnh, ví dụ mẫu, những điều tuyệt đối không được sai.
- **Định dạng bắt buộc:** văn bản theo thể thức, biểu mẫu của cơ quan, mẫu báo cáo công ty. Đưa mẫu cho bạn ấy xem.
- **Việc nhạy cảm:** pháp lý, tài chính, sức khoẻ. Dặn kỹ phần kiểm tra, và người quyết định cuối cùng vẫn là bạn.
- **Khi không chắc cần nói gì:** đừng đoán. Hỏi thẳng bạn ấy "bạn cần biết gì để làm tốt việc này?".

!!! warning "Giao việc rõ, không có nghĩa là giao hết dữ liệu"
    Đèn giao thông dữ liệu vẫn áp dụng: che tên người, tên công ty, số tiền trước khi đưa tài liệu nội bộ, và không đưa thông tin bí mật. Xem [An toàn & tỉnh táo](an-toan.html).

## Một ví dụ thật: câu giao việc đã tạo ra phiên bản này

Phiên bản 2 của website và bài trình chiếu này được làm bằng cách trò chuyện với Claude Code. Đây là những câu chính trong câu giao việc của người chia sẻ, trích nguyên văn:

| Điều | Câu giao việc |
|---|---|
| **Muốn gì** | "Update để lớp học tốt hơn, hay hơn, presentation smooth và trông wow hơn… đặc biệt có thể tự thân dùng làm material để tự học." |
| **Công sức** | "Dùng nhiều token và lặp lại cho đến khi bạn tự hào về nó. Thấy gì làm nó hay hơn thì cứ thêm, bạn tự quyết." |
| **Thế nào là tốt** | "Nhắm tới những thứ hay nhất cùng loại mà bạn từng thấy, nhưng tốt hơn." |
| **Kiểm tra** | "Trước khi nói xong, tự thử như một người dùng thật, rồi cho tôi biết bạn đã kiểm gì và chưa kiểm được gì." |

Để ý: không có câu nào dạy AI "làm thế nào". Chỉ có mục tiêu, mức công sức, chuẩn chất lượng, và cách kiểm tra.

## Biến thể theo ngành

### ⚖️ Pháp lý

Với văn bản pháp lý, phần "kiểm tra" nên đòi trích nguyên văn và phân biệt rõ điều có trong văn bản với điều suy luận.

```prompt DN3 · Rà soát hợp đồng như giao cho đồng nghiệp #luat
Mình cần rà soát hợp đồng này cho phía [bên mua / bên bán], để báo sếp trước khi ký vào [ngày]. Thế nào là tốt: chỉ ra điều khoản bất lợi, rủi ro lớn nhất, và đề xuất sửa. Cứ làm kỹ. Mỗi ý trích nguyên văn kèm số Điều; ý nào là suy luận thì ghi rõ. Thiếu gì thì hỏi mình trước.
```

### 💰 Kế toán – Tài chính

Với số liệu, phần "kiểm tra" nên là một phép đối chiếu cụ thể.

```prompt DN4 · Thuyết minh biến động chi phí #ketoan
Mình cần đoạn thuyết minh biến động chi phí tháng [X] so với tháng trước, để đưa vào báo cáo gửi Kế toán trưởng. Số liệu ở bảng dưới. Làm vừa phải, ngắn gọn. Xong thì tự cộng lại các khoản, đối chiếu với dòng tổng, và báo mình chỗ nào chưa khớp.
[dán bảng số liệu đã che tên]
```

### 🤝 Kinh doanh – CSKH

Với khách hàng, phần "muốn gì" nên nói rõ mối quan hệ và điều không được hứa.

```prompt DN5 · Thư chào hàng cho khách cũ #kinhdoanh
Mình cần thư chào hàng sản phẩm [tên] cho khách cũ [mô tả khách], mục tiêu là hẹn được một cuộc gọi 15 phút. Giọng thân thiện, dưới 120 chữ. Làm 2 phương án. Đánh dấu mọi con số, ưu đãi, cam kết trong thư để mình kiểm tra lại, mình chỉ được hứa [điều được phép].
```

### 🏗️ Vận hành – Xây dựng

Với kế hoạch, phần "kiểm tra" nên là soát lại ràng buộc thực tế.

```prompt DN6 · Xếp lại lịch thi công khi bị trễ #vanhanh
Mình cần xếp lại lịch thi công tuần tới vì [hạng mục] bị trễ 3 ngày, để gửi các tổ đội chiều nay. Ràng buộc: [danh sách]. Cứ làm kỹ, thử vài cách sắp xếp rồi chọn cách ít ảnh hưởng nhất. Xong thì tự soát lại xem có tổ nào bị xếp trùng ca hoặc thiếu vật tư không, báo mình đã kiểm gì.
```

## Tự kiểm tra

- [ ] Nói được ba điều cần nói rõ khi giao việc cho AI.
- [ ] Đã dùng mẫu DN1 cho một việc thật trong tuần.
- [ ] Đã dặn "công sức" ít nhất một lần (nhanh gọn, hoặc làm thật kỹ).
- [ ] Đã dặn "kiểm tra thế nào" và nhận được báo cáo "đã kiểm gì, chưa kiểm được gì".
- [ ] Biết khi nào vẫn cần nói nhiều hơn một câu.

## Đi xa hơn

- Xem phần case study trong [bài trình chiếu](trinh-chieu.html?mode=study#dn-hoi) ở chế độ tự học.
- Áp dụng ba điều cho email khó ở [Bậc 1](cap-1.html), và cho việc giao cả đầu việc ở [Bậc 7](cap-7.html).
- Đọc [Khoảng cách AI](khoang-cach.html): giao việc rõ ràng là cách nhanh nhất để đi xuống phễu.
- Lưu mẫu DN1 vào hướng dẫn tuỳ chỉnh hoặc một Project, để lần nào bạn ấy cũng nhớ hỏi lại và tự kiểm ([Bậc 5](cap-5.html)).
