---
title: Học nhanh mọi thứ với một gia sư kiên nhẫn
kind: topic
eyebrow: Chuyên đề
summary: Biến bạn ấy thành gia sư riêng: giải thích đúng trình độ, hỏi ngược để bạn tự nghĩ, ra đề kiểm tra, lập lộ trình hai tuần.
time: 25 phút
tools: ChatGPT, Claude, Gemini hoặc NotebookLM
free: Có
order: 5
---

## Khi nào dùng

Ai cũng từng ước có một gia sư riêng: giảng lần thứ năm vẫn không thở dài, hỏi câu "ngớ ngẩn" cũng không cười. Giờ bạn có rồi. Hãy dùng bạn ấy để **học**, chứ không chỉ để làm hộ, khi:

- Nhận mảng việc mới, hoặc có quy định mới cần nắm trong vài ngày.
- Muốn lên tay một kỹ năng: hàm Excel nâng cao, đọc báo cáo tài chính.
- Phải hiểu thật một tài liệu dài, hoặc cần kèm con học bài.

!!! view "Góc nhìn"
    Andrej Karpathy hình dung người dùng AI như một cái phễu: càng xuống sâu càng ít người giao được việc lớn cho AI ([Khoảng cách AI](khoang-cach.html)). Học là cách nhanh nhất để đi xuống phễu: hiểu thêm một điều, bạn dám giao việc lớn hơn và biết hỏi lại sắc hơn.

## Cách nhờ

Gia sư giỏi hỏi bạn biết gì, giải thích vừa tầm, rồi hỏi lại để chắc bạn hiểu. Muốn vậy, nói rõ **3 điều** như khi giao việc cho đồng nghiệp:

1. **Bạn muốn gì:** học cái gì, để làm gì, đến mức nào là đủ.
2. **Bỏ bao nhiêu công sức:** lướt 15 phút trước cuộc họp, hay học chắc trong hai tuần.
3. **Kiểm tra thế nào:** bạn ấy hỏi bạn ra sao để biết bạn hiểu thật.

Và câu quen thuộc: **thiếu gì thì hỏi mình**.

```prompt HN1 · Nhờ gia sư theo 3 điều #chung #meta
Mình muốn học [chủ đề] để [dùng vào việc gì]. Hiện mình [đã biết gì, chưa biết gì].
Mình có [15 phút mỗi tối trong 2 tuần], muốn học chắc phần cốt lõi.
Mỗi lần giải thích một ý ngắn, rồi hỏi mình một câu để kiểm tra. Mình sai thì gợi ý, đừng đưa đáp án ngay.
Cần biết thêm gì về mình thì hỏi trước nhé.
```

## Làm thật

### Tình huống 1 · Giải thích theo 3 mức

Cùng một chủ đề, ba mức giải thích, bạn sẽ tự thấy mình đang đứng ở đâu.

```prompt HN2 · Giải thích theo 3 mức #chung
Giải thích giúp mình [chủ đề, ví dụ: báo cáo lưu chuyển tiền tệ] theo 3 mức:
1. Cho người mới: khoảng 5 câu, một ví dụ đời thường, không thuật ngữ.
2. Cho người đã biết chút ít: các khái niệm chính liên quan với nhau thế nào.
3. Cho chuyên gia: điểm tinh tế, chỗ người ta hay hiểu sai.
Xong thì hỏi mình muốn đào sâu phần nào.
```

!!! result "Bạn sẽ thấy"
    Ba đoạn từ dễ đến khó. Mức 1 thấy dễ, mức 3 bắt đầu hoa mắt: chỗ chuyển giữa hai cảm giác ấy là trình độ của bạn. Học tiếp từ đó.

### Tình huống 2 · Bạn ấy hỏi, bạn nghĩ

Đọc giải thích thì thấy hiểu, gấp lại thì quên. Điều tự nghĩ ra mới nhớ lâu, nên hãy đảo vai:

```prompt HN3 · Hỏi mình, đừng đưa đáp án #chung
Mình muốn hiểu [câu hỏi, ví dụ: vì sao công ty có lãi mà vẫn thiếu tiền]. Dẫn dắt mình bằng câu hỏi, mỗi lần một câu, để mình tự suy ra. Mình sai hoặc bí thì gợi ý thêm chút ít; chỉ khi mình nói "chịu" mới giải thích. Cuối buổi, tóm tắt 3 điều mình đã tự tìm ra.
```

Đây cũng là cách kèm con học mà không làm hộ:

```prompt HN4 · Kèm con học, không làm hộ #doisong
Con mình học lớp [___], đang bí bài này: [chép đề hoặc gửi ảnh]. Đừng giải hộ. Gợi ý từng bước nhỏ để con tự làm. Con nghĩ đúng hướng thì khen cách nghĩ, không chỉ khen đáp án. Nói bằng lời hợp với tuổi con.
```

!!! result "Bạn sẽ thấy"
    Những câu hỏi nhỏ nối nhau như bậc thang. Hơi chậm, nhưng 3 điều cuối buổi là của bạn. Với bài của con, bạn ấy dừng ở gợi ý để con tự viết ra đáp án.

### Tình huống 3 · Ra đề và chấm điểm

Cảm giác "hiểu rồi" hay đánh lừa. Một bài kiểm tra nhỏ cho bạn biết thật.

```prompt HN5 · Ra đề và chấm điểm #chung
Mình vừa học xong [chủ đề]. Ra 5 câu từ dễ đến khó, ít nhất 2 câu là tình huống thật trong nghề [nghề của mình]. Đưa từng câu, chờ mình trả lời rồi chấm: đúng, đúng một phần hay sai, vì sao. Cuối cùng nói mình cần ôn phần nào.
```

!!! result "Bạn sẽ thấy"
    Mỗi câu có nhận xét cụ thể, cuối bài là danh sách phần cần ôn. Chấm chưa thuyết phục? Hỏi lại: *"Vì sao câu của mình chưa đủ?"*

### Tình huống 4 · Lộ trình 2 tuần cho một kỹ năng

Kỹ năng thật cần luyện nhiều ngày, nên chia nhỏ thành 14 buổi vừa sức.

```prompt HN6 · Lộ trình 2 tuần #chung
Sau 2 tuần, mình muốn [kỹ năng, ví dụ: dùng thành thạo SUMIFS và PivotTable / hiểu một quy định mới của ngành]. Mỗi ngày mình có [20] phút. Hỏi trình độ của mình trước, rồi lập lộ trình 14 ngày: mỗi ngày học gì, làm bài tập nhỏ gì. Ngày 14 là bài "thi cuối kỳ" sát với việc thật: [mô tả việc].
```

!!! result "Bạn sẽ thấy"
    Vài câu hỏi về trình độ, rồi bảng 14 ngày có bài tập và ngày ôn xen giữa. Mỗi tối mở lại cuộc trò chuyện này và nói: *"Hôm nay ngày 6."*

### Tình huống 5 · Học từ một tài liệu dài

Nghị định, sổ tay quy trình dài vài chục trang: tóm tắt thì nhanh, hiểu thật thì cần được hỏi. Tải lên ChatGPT, Claude hoặc NotebookLM, rồi nói:

```prompt HN7 · Đọc xong, hỏi mình #chung
Mình vừa tải lên [tên tài liệu], cần hiểu đủ để [áp dụng vào việc gì]. Cho mình dàn ý 5–7 ý chính trước. Đọc xong phần nào mình sẽ báo, bạn hỏi mình 3 câu về phần đó. Khi chấm, trích đúng điều, mục hoặc trang để mình đối chiếu.
```

!!! result "Bạn sẽ thấy"
    Dàn ý trước, rồi những vòng hỏi nhỏ sau mỗi phần. Quý nhất là trích dẫn: bạn lật đúng trang và hiểu bằng chính câu chữ gốc.

## Dám hỏi lại

Gia sư AI có thể giải thích rất tự tin mà vẫn sai, nhất là với **quy định mới, mức thuế, số liệu, thời hạn**: những thứ có thể đã thay đổi sau lúc bạn ấy được huấn luyện.

```prompt HN8 · Chỉ nguồn để mình đối chiếu #chung
Trong phần bạn vừa giải thích, ý nào là kiến thức nền ít thay đổi, ý nào có thể đã thay đổi theo thời gian? Với nhóm sau, chỉ mình nguồn chính thức để đối chiếu và nói bạn chắc đến đâu. Không chắc thì nói thẳng.
```

!!! check "Dám hỏi lại"
    - **Văn bản gốc là trọng tài:** đối chiếu số hiệu, ngày hiệu lực, điều khoản. Điều bạn ấy trích mà bạn không tìm thấy, coi như chưa đúng.
    - **Cho bạn ấy đọc nguồn:** tải chính văn bản lên, hoặc bật tìm kiếm web nếu công cụ có.
    - **Hỏi lại người có chuyên môn** khi kiến thức dùng để tư vấn khách, quyết định tài chính hay an toàn công trình. Gia sư AI giúp bạn hỏi đúng câu, không thay người chịu trách nhiệm.

## Biến thể theo ngành

### ⚖️ Pháp lý

Đặt văn bản mới cạnh văn bản cũ, rồi tự thử áp dụng.

```prompt HN9 · Văn bản mới khác gì văn bản cũ #luat
Mình tải lên [văn bản mới] và [văn bản cũ]. Chỉ dựa vào hai văn bản này, liệt kê điểm thay đổi ảnh hưởng tới [loại hợp đồng của mình], trích số điều. Rồi cho mình 3 tình huống thử áp dụng và nhận xét câu trả lời của mình.
```

### 💰 Kế toán – Tài chính

Học đọc báo cáo tài chính ngay trên tài liệu thật.

```prompt HN10 · Đọc báo cáo tài chính từng bước #ketoan
Mình tải lên báo cáo tài chính của [khách hàng] (đã che tên) để xem họ có trả nợ nổi không. Dạy mình từng bước trên chính báo cáo này: xem chỉ tiêu nào, tính chỉ số nào, dấu hiệu nào đáng lo. Mỗi bước hỏi mình một câu.
```

### 🤝 Kinh doanh – CSKH

Hiểu ngành của khách trước buổi gặp, rồi tập trả lời như thật.

```prompt HN11 · Hiểu ngành của khách trong 30 phút #kinhdoanh
Tuần sau mình gặp khách ngành [ngành] mà mình chưa biết gì. Giúp mình nắm: họ kiếm tiền thế nào, lo nhất điều gì, hay dùng từ chuyên môn nào. Rồi đóng vai khách hỏi mình 5 câu và chấm điểm.
```

### 🏗️ Vận hành – Xây dựng

Hiểu một quy trình, rồi biến nó thành câu hỏi kiểm tra tổ đội.

```prompt HN12 · Quy trình thành câu hỏi kiểm tra #vanhanh
Mình tải lên [quy trình vận hành thiết bị]. Giải thích theo 3 mức, rồi soạn 10 câu hỏi nhanh kèm đáp án để kiểm tra anh em trước ca. Đánh dấu chỗ liên quan an toàn để mình đối chiếu văn bản gốc và hỏi cán bộ kỹ thuật.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Làm quen phần mềm mới.
    - Tập phỏng vấn, bạn ấy đóng vai người hỏi.
    - Học thuật ngữ tiếng Anh chuyên ngành.
    - Soạn câu hỏi kiểm tra sau đào tạo.
!!! life "🏡 Đời sống"
    - Kèm con học mà không làm hộ.
    - Luyện ngoại ngữ mỗi tối.
    - Tìm hiểu bảo hiểm, khoản vay trước khi ký.
    - Hiểu kết quả khám để hỏi bác sĩ đúng câu.
:::

Lúc nào bạn nghĩ "giá có ai kèm mình chuyện này", đó là lúc mở một gia sư.

## Tự kiểm tra

- [ ] Đã nhờ giải thích theo 3 mức và biết mình ở mức nào.
- [ ] Đã học một buổi hỏi đáp, tự nghĩ ra câu trả lời.
- [ ] Đã làm bài kiểm tra 5 câu và biết phần cần ôn.
- [ ] Đã có lộ trình 2 tuần cho một kỹ năng thật.
- [ ] Đã tự đối chiếu một ý quan trọng với nguồn chính thức.

## Đi xa hơn

- **Gia sư nhớ bài:** lưu lộ trình và trình độ vào Project hoặc Gem ([Bậc 5](cap-5.html)), mỗi buổi chỉ cần nói "học tiếp".
- **Dạy lại để hiểu sâu:** viết lại điều vừa học bằng lời của bạn, nhờ bạn ấy bắt lỗi.
- **Học để giao việc lớn hơn:** hiểu thêm là thêm một bước xuống phễu. Đọc [Khoảng cách AI](khoang-cach.html) và [Giao việc như giao cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html).
