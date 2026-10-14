---
title: Tài liệu dài, và bẫy “AI bịa”
kind: lesson
level: 2
how: Bạn giỏi nhưng đôi khi đoán, nên cứ hỏi “căn cứ đâu?”
summary: Tóm tắt hợp đồng dài trong vài phút, tự tay bắt quả tang AI đoán, và tập thói quen hỏi căn cứ cho mọi câu trả lời quan trọng.
time: 30 phút
tools: Claude, ChatGPT · NotebookLM
free: Có
---

## Bạn sẽ làm được gì

- Biết dữ liệu nào kể thoải mái, dữ liệu nào phải che, dữ liệu nào không đưa cho AI.
- Tóm tắt một hợp đồng 10 điều kèm phụ lục theo góc nhìn bên mua: ai làm gì, hạn khi nào, chỗ nào bất lợi.
- Tự tay đặt bẫy để thấy AI "đoán" như thế nào, và vì sao.
- Nhờ chính bạn ấy chỉ cách kiểm tra bạn ấy, rồi đòi trích nguyên văn kèm số Điều.
- Đối chiếu trích dẫn với tài liệu gốc trong 2 phút, kể cả khi bạn không phải dân luật.

## Vì sao cách nhờ này hiệu quả

Đọc kỹ một hợp đồng 6–7 trang kèm phụ lục và tìm hết chỗ bất lợi thường mất cả buổi. Người bạn AI đọc xong trong vài giây. Câu hỏi là: có tin được không?

Câu trả lời của mình: **AI không nói dối, nó đoán.** Khi bạn hỏi điều tài liệu không nói, bạn ấy hiếm khi đáp "không có". Bạn ấy muốn giúp, nên tìm thứ gần giống nhất trong tài liệu hoặc lấy từ kiến thức chung, rồi trả lời rất tự tin. Càng trôi chảy, mình càng dễ tin.

Andrej Karpathy gọi hiện tượng này là năng lực AI "không đều", như răng cưa: cực giỏi ở việc kiểm chứng được, nhưng thất thường ở việc khác. Tóm tắt một hợp đồng là việc bạn ấy làm rất tốt. Trả lời một điều hợp đồng *không nói* lại là chỗ răng cưa lõm xuống. Biết chỗ lõm ở đâu là một phần của việc đi xuống phễu (xem [Khoảng cách AI](khoang-cach.html)).

Cách chữa rất quen với dân văn phòng: **hỏi "căn cứ đâu?"**. Khi phải trích nguyên văn kèm số Điều, mỗi câu trả lời trở thành thứ bạn kiểm tra được trong 30 giây. Chỗ nào bạn ấy không trích được, đó là chỗ đang suy luận hoặc đang đoán. Và bạn không cần tự nghĩ ra cách kiểm tra: **hỏi thẳng bạn ấy** "làm sao để mình biết bạn không bịa?". Bạn ấy hiểu điểm yếu của chính mình khá rõ.

!!! view "Góc nhìn"
    AI không nói dối, nó đoán, giống một người bạn rất giỏi nhưng ngại nói "mình không biết". Bạn không cần sợ, chỉ cần quen hỏi "căn cứ đâu?", như cách bạn hỏi lại một đồng nghiệp trước khi ký.

## Chuẩn bị

### Đèn giao thông dữ liệu

Bạn thân đến mấy cũng có chuyện mình không kể. Với AI cũng vậy. Trước khi upload bất kỳ tài liệu nào, hãy nhìn đèn:

| | Loại dữ liệu | Có đưa cho bạn ấy không? |
|---|---|---|
| 🟢 | **Công khai:** văn bản pháp luật, tin tức, kiến thức chung, tài liệu đã công bố | Thoải mái |
| 🟡 | **Nội bộ:** hợp đồng, báo cáo, email công việc | **Che trước:** tên người, tên công ty, số tiền, mã số (số hợp đồng, mã số thuế) |
| 🔴 | **Bí mật:** thông tin khách hàng, số tài khoản, mật khẩu, dữ liệu chưa công bố | **Không đưa** |

Che nhanh: trong Word, dùng Tìm và thay thế (<kbd>Ctrl</kbd> + <kbd>H</kbd>) đổi tên công ty thành "Công ty A", "Công ty B", số tiền thành "[X] đồng". Điều khoản vẫn nguyên nên bạn ấy vẫn phân tích được. Chi tiết ở trang [An toàn](an-toan.html). Với tài liệu công ty, luôn xem trước quy định của công ty bạn.

!!! note "Hôm nay an toàn tuyệt đối"
    Hợp đồng dùng trong bài là **hư cấu**: mọi công ty, con người, số liệu đều không có thật. Cứ thoải mái upload.

### Công cụ và file

- **Công cụ:** Claude ([claude.ai](https://claude.ai)) hoặc ChatGPT ([chatgpt.com](https://chatgpt.com)), cả hai đều nhận file Word. Thêm NotebookLM ([notebooklm.google.com](https://notebooklm.google.com)) nếu muốn thử Bước 6. Bản miễn phí có thể giới hạn số file hoặc số lượt upload; giới hạn thay đổi thường xuyên, hãy xem trang chính thức.
- **Thời gian:** khoảng 30 phút.
- **Vai của bạn:** người phụ trách pháp chế của **bên mua**.
- **File:** hợp đồng mẫu bên dưới.

[Tải hợp đồng mẫu (.docx)](files/cap-2/hop-dong-mua-ban-ke-kho-MAU.docx){.dl}

Hợp đồng mua bán kệ kho số 27/2026/HĐMB/PA-SM. Bên A (bên bán) là Công ty TNHH Kệ kho Phú An, bên B (bên mua) là Công ty CP Phân phối Thiết bị Văn phòng Sao Mai. Tổng giá trị 1.164.240.000đ, gồm 10 điều kèm phụ lục. Lướt qua một phút thôi: hôm nay bạn ấy là người đọc, bạn là người kiểm tra.

## Làm thật: từng bước

### Bước 1 · Upload hợp đồng và nhờ tóm tắt như nói chuyện

Mở cuộc trò chuyện mới, bấm biểu tượng đính kèm (hình ghim hoặc dấu +), chọn file, rồi gõ:

```prompt 2a · Tóm tắt theo góc nhìn bên mua #luat #chung
Mình là bên mua. Tóm tắt giúp mình hợp đồng này nhé. Mình cần biết: ai phải làm gì, hạn khi nào, và chỗ nào bất lợi hoặc viết mơ hồ cho mình.
```

Câu "Mình là bên mua" là chìa khoá. Cùng một điều khoản, bên bán thấy "chặt chẽ", bên mua thấy "thiệt". Nói rõ bạn đứng ở đâu thì bạn ấy mới biết soi theo hướng nào.

!!! result "Bạn sẽ thấy"
    Một bản tóm tắt gọn: các bên, giá trị, thanh toán, giao hàng, bảo hành, phạt vi phạm, tranh chấp. Cuối cùng là danh sách điểm bất lợi hoặc mơ hồ cho bên mua, thường kèm số Điều. **Đếm xem bạn ấy tìm được mấy điểm** rồi để đó. Đáp án nằm ở mục Dám hỏi lại.

### Bước 2 · Đặt bẫy: một câu hỏi nghe rất bình thường

Để bẫy dễ "ăn", hãy **mở một cuộc trò chuyện mới**, upload lại file, rồi hỏi luôn câu dưới đây, không nói gì thêm:

```prompt 2-bẫy · Thử bắt bạn ấy đoán #chung
Nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?
```

Câu này ai mua hàng cũng muốn biết, nhưng nó là một cái bẫy. Cứ hỏi và ghi lại câu trả lời. Trước khi đọc, thử tự đoán: hợp đồng có ghi mức phạt cụ thể không?

!!! result "Bạn sẽ thấy"
    Thường là một trong hai kiểu:

    - **Một con số rất tự tin**, ví dụ một tỷ lệ phần trăm hoặc một mức phạt theo ngày, kèm số Điều nghe rất có lý.
    - **Bạn ấy nói hợp đồng không quy định rõ.**

    Đừng vội tin kiểu nào. Chụp màn hình lại, ta sẽ kiểm tra ở các bước sau.

!!! tip "Bạn ấy trả lời đúng ngay?"
    Hôm nay bạn ấy cẩn thận, nhưng không phải lúc nào cũng vậy. Thử lại ở cuộc trò chuyện mới hoặc công cụ khác, với câu "gài" hơn: "Mức phạt khi bên bán giao chậm là bao nhiêu phần trăm?". Câu hỏi đã ngầm cho rằng có một con số, nên bạn ấy dễ đi tìm một con số. Đời thật cũng vậy: cách mình hỏi có thể dắt bạn ấy đi sai.

### Bước 3 · Hỏi thẳng bạn ấy: "Làm sao để mình biết bạn không bịa?"

Đây là khoảnh khắc chính của bậc này. Ngay trong cuộc trò chuyện có câu bẫy, hỏi:

```prompt 2b · Hỏi thẳng bạn ấy #meta #chung
Làm sao để mình biết bạn không bịa? Bạn gợi ý cách để mình kiểm tra câu trả lời của bạn đi.
```

Vì sao hiệu quả: bạn không cần học kỹ thuật kiểm chứng nào. Bạn ấy biết mình hay sai ở đâu, nên sẽ tự chỉ cách bắt lỗi chính mình.

!!! result "Bạn sẽ thấy"
    Những gợi ý rất thực tế: trích nguyên văn kèm số Điều hoặc số trang, tách phần "tài liệu nói" với phần "suy luận", nói thẳng "không tìm thấy" khi tài liệu không có. Nhiều khi bạn ấy còn tự nhận ra câu trả lời trước đã quá tay.

### Bước 4 · Làm theo chính gợi ý của bạn ấy

```prompt 2c · Trích nguyên văn kèm số Điều #chung
Ok, làm đúng như bạn vừa nói nhé: với mỗi ý, trích nguyên văn câu trong tài liệu kèm số Điều (hoặc số trang). Chỗ nào là bạn suy luận thì nói rõ.
```

Rồi hỏi lại câu bẫy, lần này với "luật chơi" mới:

```prompt 2d · Hỏi lại câu bẫy với luật chơi mới #chung
Giờ trả lời lại câu lúc nãy theo đúng cách đó: nếu bên bán giao hàng chậm thì bị phạt bao nhiêu? Chỉ dùng thông tin trong hợp đồng, trích nguyên văn. Hợp đồng không nói thì nói là không có.
```

!!! result "Bạn sẽ thấy"
    Câu trả lời đổi hẳn chất: mỗi ý đi kèm một câu trong ngoặc kép và số Điều. Với câu bẫy, bạn ấy trích một điều khoản cụ thể, và nếu lần trước đoán sai thì thường tự đính chính. Giờ bạn đã có thứ để đối chiếu.

### Bước 5 · Tự mở hợp đồng ra đối chiếu

Bước nhiều người bỏ qua, nhưng quan trọng nhất. Mở hợp đồng bằng Word, nhấn <kbd>Ctrl</kbd> + <kbd>F</kbd>, gõ "7.2", rồi "5.2". So từng chữ câu bạn ấy trích với câu trong file.

Không cần kiểm mọi câu. Chọn 1–2 câu **quan trọng nhất** (ảnh hưởng đến quyết định ký hay không) hoặc chọn ngẫu nhiên. Câu trích không khớp từng chữ là tín hiệu đỏ: bạn ấy đang diễn đạt lại hoặc nhớ nhầm. Khi đó, nói thẳng:

```prompt 2e · Khi trích dẫn không khớp #chung
Câu bạn trích ở Điều [số] không khớp với file của mình. Trong file ghi: "[dán câu gốc]". Kiểm tra lại toàn bộ các trích dẫn khác và sửa những chỗ sai giúp mình.
```

!!! result "Bạn sẽ thấy"
    Điều 7.2 chỉ nói hai bên sẽ "cùng thương lượng mức phạt phù hợp", không có con số nào. Điều 5.2 cho bên bán tự quyết định hư hỏng có phải do "lỗi sử dụng" hay không. Trích dẫn khớp với file thì bạn yên tâm hơn với phần còn lại. Không khớp thì bạn vừa bắt được một lỗi trước khi nó thành chuyện lớn.

### Bước 6 · (Tuỳ chọn) NotebookLM: trích dẫn bấm được

Với tài liệu dài hoặc nhiều tài liệu cùng lúc, NotebookLM của Google rất đáng thử: mỗi câu trả lời có số trích dẫn nhỏ, **bấm vào là nhảy thẳng tới đoạn gốc**. Việc đối chiếu ở Bước 5 nhanh hơn hẳn.

Vào notebooklm.google.com, tạo notebook mới, thêm hợp đồng làm nguồn. Nếu không tải lên được file .docx, mở bằng Word, lưu thành PDF (File → Save As → PDF) rồi tải lên. Sau đó hỏi:

```prompt 2f · Hỏi trong NotebookLM #luat #chung
Mình là bên mua. Liệt kê các điều khoản bất lợi cho mình. Nếu bên bán giao hàng chậm thì bị phạt bao nhiêu?
```

!!! result "Bạn sẽ thấy"
    Các số nhỏ cạnh từng ý. Rê chuột hoặc bấm vào, đoạn gốc trong hợp đồng hiện ra. NotebookLM được thiết kế để bám sát nguồn bạn đưa vào, nên rất hợp với hợp đồng, quy chế, tài liệu nhiều trang. Dù vậy, vẫn bấm thử vài trích dẫn cho chắc.

## Dám hỏi lại

Ở bậc này, "dám hỏi lại" là cả bài học. Gói lại thành ba câu nên hỏi với **mọi** tài liệu quan trọng:

1. "Căn cứ đâu? Trích nguyên văn kèm số Điều."
2. "Chỗ nào là bạn suy luận, chỗ nào tài liệu nói thẳng?"
3. "Có điều khoản nào dẫn chiếu đến một tài liệu khác mà mình chưa đưa cho bạn không?"

Câu thứ ba hay bị bỏ quên. Hợp đồng thật thường nhắc đến phụ lục, quy chế, báo giá… Thiếu tài liệu nào, bạn ấy chỉ phân tích được phần mình nhìn thấy. Thử hỏi câu này với hợp đồng mẫu, có thể bạn sẽ bất ngờ.

!!! check "Kiểm chứng trong 2 phút"
    - Chọn 1–2 câu trích dẫn quan trọng nhất, tìm bằng <kbd>Ctrl</kbd> + <kbd>F</kbd> trong file gốc, so từng chữ.
    - Mọi con số (tiền, phần trăm, số ngày): luôn tìm lại trong file gốc trước khi dùng.
    - Bạn ấy nói "không có"? Cũng tìm lại, đôi khi bạn ấy bỏ sót thật.
    - Trộn cả kiến thức luật chung? Yêu cầu tách riêng phần "hợp đồng nói" và "luật chung nói".

Giờ so kết quả Bước 1 và câu bẫy với đáp án:

!!! answer "Xem đáp án: 3 điểm bất lợi + các điểm phụ"
    **3 điểm bất lợi chính cho bên mua:**

    1. **Điều 3.2 + 4.1 + 4.3:** bên mua trả **100% trước khi giao hàng**, và rủi ro chuyển sang bên mua **ngay khi hàng được xếp lên xe tại kho bên bán**. Bên mua mất đòn bẩy. Hàng hỏng hoặc mất trên đường thì bên mua chịu, dù giá đã gồm vận chuyển và bên bán là bên lo vận chuyển.
    2. **Điều 5.2:** bên bán **tự quyết định** hư hỏng có phải do "lỗi sử dụng" hay không. Bên bán dễ từ chối bảo hành, bên mua không có cơ chế phản biện.
    3. **Điều 7.1 so với 7.2:** bên mua chậm trả thì bị phạt **8%** cộng lãi chậm trả **0,1%/ngày**; bên bán chậm giao thì chỉ "thương lượng". Phạt một chiều, bên mua không có chế tài nào với bên bán.

    **Điểm phụ (bạn ấy giỏi sẽ phát hiện thêm):**

    - **Điều 2.2** dẫn chiếu Phụ lục 01 về quy cách kỹ thuật, nhưng **Phụ lục 01 không được đính kèm** (chỉ có Phụ lục 02 và 03).
    - **Điều 4.4:** chỉ có **02 ngày** để kiểm tra hàng; quá hạn mà không có ý kiến bằng văn bản thì coi như đã nghiệm thu.
    - **Điều 5.3:** bảo hành "trong thời gian hợp lý", không có số ngày cụ thể.
    - **Điều 9.2:** tranh chấp giải quyết tại toà án nơi **bên bán** đặt trụ sở.
    - **Phụ lục 02, mục 5:** bên mua chịu chi phí đi lại của kỹ thuật viên khi ở ngoài **30 km** tính từ trụ sở bên bán.
    - **Phụ lục 03, mục 3:** thời gian chờ do mặt bằng chưa sẵn sàng **không tính** vào thời gian lắp đặt.

    Bạn ấy tìm đủ 3 điểm chính là rất tốt, mỗi điểm phụ là điểm cộng. Điểm nào bị bỏ sót, hỏi thử: "Bạn xem lại Điều [số] giúp mình, có gì bất lợi cho bên mua không?"

!!! answer "Xem đáp án câu bẫy"
    **Hợp đồng không quy định mức phạt cụ thể khi bên bán giao chậm.** Điều 7.2 chỉ ghi hai bên "sẽ cùng thương lượng mức phạt phù hợp trên tinh thần hợp tác".

    **Vì sao bạn ấy hay đoán sai?** Vì hợp đồng có sẵn hai con số "trông giống đáp án":

    - **8%:** lấy nhầm từ Điều 7.1. Nhưng đó là mức phạt khi **bên mua** chậm thanh toán, không phải bên bán. Con số 8% còn trùng với mức trần phạt vi phạm trong Luật Thương mại, nên bạn ấy càng dễ tin là đúng.
    - **0,1%/ngày:** lấy nhầm từ Điều 3.4. Đó là **lãi chậm trả của bên mua**.

    Cả hai đều nói về "chậm" và "phạt", nên khi không bị ràng buộc "chỉ dùng thông tin trong tài liệu", bạn ấy dễ ghép nhầm. Thú vị là câu bẫy này còn chỉ ra một lỗ hổng thật của hợp đồng: phạt một chiều, đúng điểm bất lợi số 3.

## Biến thể theo ngành

### ⚖️ Pháp lý

So sánh hai phiên bản văn bản là việc bạn ấy làm rất nhanh, nhưng càng phải đòi trích dẫn vì sai một chữ là sai nghĩa.

```prompt 2g · So sánh hai phiên bản văn bản #luat
Mình gửi bạn 2 file: bản cũ và bản mới của [văn bản / hợp đồng]. Điểm nào mới, điểm nào bị bỏ, điểm nào sửa câu chữ làm đổi nghĩa? Với mỗi điểm, trích nguyên văn cả bản cũ và bản mới kèm số Điều.
```

### 💰 Kế toán – Tài chính

Với báo cáo tài chính, đòi bạn ấy chỉ ra con số gốc nằm ở đâu trước khi tin bất kỳ phần trăm thay đổi nào.

```prompt 2h · Đọc nhanh báo cáo tài chính #ketoan
Đây là báo cáo tài chính [kỳ này] (đã che tên công ty). Khoản mục nào thay đổi nhiều nhất so với kỳ trước, vì sao? Với mỗi con số, ghi rõ lấy từ bảng nào, dòng nào để mình đối chiếu. Phần trăm thay đổi thì ghi luôn cách tính.
```

### 🤝 Kinh doanh – CSKH

Hồ sơ mời thầu thường dài và có những điều kiện "không đáp ứng là loại ngay". Nhờ bạn ấy tách riêng những điều kiện đó.

```prompt 2i · Đọc hồ sơ mời thầu #kinhdoanh
Đây là hồ sơ mời thầu. Liệt kê giúp mình: các yêu cầu bắt buộc (không đáp ứng là bị loại), hạn nộp và các mốc thời gian, những điểm công ty mình có thể yếu. Mỗi ý trích nguyên văn kèm số mục hoặc số trang.
```

### 🏗️ Vận hành – Xây dựng

Hợp đồng thi công có nhiều nghĩa vụ và mốc thời gian dễ bị bỏ sót, nhất là khi nằm rải rác trong phụ lục.

```prompt 2j · Rà nghĩa vụ trong hợp đồng thi công #vanhanh
Mình là bên [nhà thầu / chủ đầu tư]. Đọc hợp đồng thi công này, lập bảng: nghĩa vụ của bên mình, mốc thời gian, điều kiện nghiệm thu, mức phạt nếu chậm. Mỗi dòng trích nguyên văn kèm số Điều. Chỗ nào hợp đồng không nói rõ thì ghi "không quy định".
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Quy chế công ty mới ban hành: điều gì ảnh hưởng đến phòng mình?
    - Thông tư, nghị định mới: thay đổi gì so với văn bản cũ?
    - Biên bản họp dài 10 trang: ai nhận việc gì, hạn khi nào?
    - Hồ sơ năng lực của đối tác: điểm mạnh, điểm cần hỏi thêm
    - Hướng dẫn sử dụng phần mềm mới: 5 thao tác mình cần dùng hằng ngày
!!! life "🏡 Đời sống"
    - Hợp đồng thuê nhà trước khi ký: điều gì bất lợi cho người thuê?
    - Điều khoản bảo hiểm: trường hợp nào không được chi trả?
    - Cuốn sách 300 trang chưa có thời gian đọc
    - Hướng dẫn sử dụng máy giặt, điều hoà mới mua
    - Điều kiện vay mua nhà: trả nợ trước hạn thì mất phí bao nhiêu?
:::

Tài liệu nào dài mà quan trọng, cứ nhờ bạn ấy đọc giúp. Nhưng với câu trả lời sẽ dẫn đến một quyết định, luôn hỏi: **"căn cứ đâu?"**

## Khi kết quả chưa như ý

| Bạn gặp | Vì sao | Nói với bạn ấy thế này |
|---|---|---|
| Câu "trích nguyên văn" không khớp với file | Bạn ấy diễn đạt lại thay vì chép đúng | "Câu này không khớp với file. Chép đúng từng chữ, kể cả dấu câu. Không tìm thấy thì nói không tìm thấy." |
| Tóm tắt chung chung, không chỉ ra điểm bất lợi | Bạn ấy chưa biết bạn đứng ở phía nào | "Mình là bên mua. Đọc lại với con mắt luật sư của bên mua, liệt kê từng điểm bất lợi kèm số Điều." |
| Bạn ấy báo không đọc được file, hoặc hết lượt upload | Giới hạn của bản miễn phí, hoặc định dạng file | Lưu file sang PDF rồi thử lại. Hoặc copy phần cần hỏi dán thẳng vào khung chat: "Đây là Điều 3 đến Điều 7, mình hỏi về phần này." |
| Bạn ấy giữ nguyên câu trả lời sai dù bạn đã hỏi lại | Bạn ấy bám vào những gì đã nói ở phía trên | Mở cuộc trò chuyện mới, upload lại file, đặt luật chơi ngay từ câu đầu: "Chỉ dùng thông tin trong tài liệu, trích nguyên văn kèm số Điều." |
| Phụ lục, các điều cuối bị bỏ sót | Tài liệu dài, phần cuối dễ bị lướt qua | "Đọc lại riêng các phụ lục và các điều từ Điều [7] trở đi, có gì bất lợi cho bên mua không?" Hoặc chuyển sang NotebookLM. |

## Tự kiểm tra

- [ ] Phân biệt được dữ liệu 🟢 🟡 🔴 và biết che gì trước khi upload tài liệu thật.
- [ ] Đã nhờ tóm tắt hợp đồng theo góc nhìn bên mua và so với đáp án.
- [ ] Đã thử câu bẫy và hiểu vì sao AI hay đoán 8% hoặc 0,1%/ngày.
- [ ] Đã hỏi "làm sao để mình biết bạn không bịa?" và làm theo gợi ý của bạn ấy.
- [ ] Đã tự mở hợp đồng, đối chiếu ít nhất một câu trích dẫn.
- [ ] (Tuỳ chọn) Đã thử NotebookLM và bấm vào một trích dẫn.

## Đi xa hơn

- **Nhờ soạn luôn đề xuất sửa đổi.** "Dựa trên 3 điểm bất lợi, soạn giúp mình đề xuất sửa đổi gửi bên bán, lời lẽ hợp tác." Rồi dùng chiêu của [Bậc 1](cap-1.html): nhờ bạn ấy đóng vai pháp chế bên bán để phản biện trước.
- **Hỏi chéo hai công cụ.** Đưa cùng tài liệu, cùng câu hỏi cho cả Claude và ChatGPT. Chỗ nào hai bên trả lời khác nhau, đó là chỗ bạn cần tự đọc kỹ.
- **Gom cả bộ hồ sơ vào NotebookLM**: hợp đồng, phụ lục, email trao đổi, rồi hỏi xuyên suốt.
- **Biến bài học thành checklist.** "Từ hợp đồng này, lập checklist 15 điểm mình nên kiểm tra với mọi hợp đồng mua hàng."
- **Đặt luật chơi ngay từ câu đầu** với mọi tài liệu quan trọng, khỏi phải sửa sau:

```prompt 2k · Luật chơi khi đọc tài liệu #meta #chung
Trong cuộc trò chuyện này, chỉ dùng thông tin trong tài liệu mình gửi. Mỗi ý trích nguyên văn kèm số Điều hoặc số trang. Chỗ nào là suy luận thì ghi rõ "suy luận". Tài liệu không nói thì trả lời "không có trong tài liệu", đừng đoán.
```

Bạn đã biết cách tin mà vẫn kiểm. Sang [Bậc 3: Excel lộn xộn → sạch](cap-3.html), nơi bạn đưa cho bạn ấy cả một đống bừa bộn.
