---
title: Trợ lý biết nhớ việc
kind: lesson
level: 5
how: Dạy bạn ấy một lần, nhờ mãi mãi
summary: Để bạn ấy phỏng vấn bạn và tự viết hướng dẫn, tạo trợ lý nhớ mẫu báo cáo. Từ đó chỉ cần dán ghi chú vội.
time: 30 phút
tools: Projects hoặc Gems
free: Một phần
---

## Bạn sẽ làm được gì

- Hiểu Project và Gem là gì: một "góc làm việc riêng" nơi bạn ấy nhớ hướng dẫn và tài liệu của bạn.
- Để bạn ấy **phỏng vấn bạn** rồi tự viết phần hướng dẫn, không cần biết viết prompt.
- Dựng trợ lý "Báo cáo tuần" từ một file mẫu và 2 báo cáo cũ.
- Từ ghi chú viết vội, không dấu, có ngay báo cáo đúng mẫu, đúng giọng, có đánh dấu chỗ cần kiểm tra.
- Nghĩ ra trợ lý riêng cho công việc và cho gia đình bạn.

## Vì sao cách nhờ này hiệu quả

Ở [Bậc 4](cap-4.html), bạn ấy nhớ mọi thứ trong một cuộc trò chuyện. Nhưng tuần sau mở chat mới, bạn ấy lại là người bạn mới quen: không biết bạn là ai, mẫu báo cáo ra sao, sếp thích gì. Chẳng lẽ tuần nào cũng kể lại từ đầu?

Với đồng nghiệp thật, mình dạy một lần là họ nhớ. **Project** (trên ChatGPT và Claude) và **Gem** (trên Gemini) cho bạn làm đúng điều đó: một góc làm việc riêng, ghi hướng dẫn một lần, tải lên tài liệu mẫu. Mọi cuộc trò chuyện mở trong góc này đều bắt đầu với những hiểu biết ấy.

Phần khó nhất là viết hướng dẫn. Mẹo ở bậc này là đảo vai: **để bạn ấy phỏng vấn bạn**, từng câu một, như trợ lý mới hỏi sếp ngày đầu đi làm. Hỏi xong, bạn ấy tự viết hướng dẫn cho chính mình. Đây là chiêu "Hỏi thẳng bạn ấy" ở mức cao nhất.

!!! view "Góc nhìn"
    Trong khảo sát, có bạn ước được "nhân bản tôi thành nhiều người như tôi". Đây chính là cách. Mỗi Project là một người bạn đã được bạn dạy việc.

## Chuẩn bị

- **Công cụ:** một trong ba: ChatGPT (Projects), Claude (Projects), Gemini (Gems).
- **Bộ file mẫu** của phòng Kinh doanh, Chi nhánh Hà Nội, Công ty Sao Mai (hư cấu). Tải trọn bộ một lần:

[Tải trọn bộ bậc 5 (.zip)](files/cap-5/cap-5-tron-bo.zip){.dl}

Hoặc tải từng file:

[Mẫu báo cáo tuần (.docx)](files/cap-5/mau-bao-cao-tuan.docx){.dl}
[Báo cáo tuần 38 (.docx)](files/cap-5/bao-cao-tuan-38.docx){.dl}
[Báo cáo tuần 39 (.docx)](files/cap-5/bao-cao-tuan-39.docx){.dl}
[Số liệu tuần 40 (.txt)](files/cap-5/so-lieu-tuan-40.txt){.dl}

| File | Là gì |
|---|---|
| `mau-bao-cao-tuan.docx` | Mẫu trống 5 mục: Tóm tắt tuần · Kết quả chính (bảng Doanh số, Số đơn, Khách mới, Thu hồi công nợ) · Việc trễ hạn · Rủi ro & đề xuất · Kế hoạch tuần tới |
| `bao-cao-tuan-38.docx`, `bao-cao-tuan-39.docx` | Hai báo cáo cũ do chị Trần Thu Hà, Trưởng nhóm Kinh doanh, viết. Đây là "giọng văn" để bạn ấy học theo |
| `so-lieu-tuan-40.txt` | Ghi chú viết vội, không dấu, lộn xộn, đúng như đời thật |

- **Thời gian:** khoảng 30 phút.

!!! warning "Bản miễn phí có Project, Gem không?"
    Gói miễn phí có Projects hay Gems không, và được tạo bao nhiêu, thay đổi khá thường xuyên. Kiểm tra trang chính thức của công cụ bạn dùng, hoặc hỏi thẳng bạn ấy ở Bước 1. Nếu bản của bạn chưa có, bạn vẫn làm được bài này theo cách dự phòng ở cuối Bước 3.

## Làm thật: từng bước

### Bước 1 · Tìm "góc làm việc riêng" trong công cụ của bạn

Trên ChatGPT và Claude, thường có mục **Projects** ở thanh bên trái. Trên Gemini, tìm mục **Gems**. Giao diện tiếng Việt có thể ghi tên khác. Không thấy? Hỏi thẳng:

```prompt 5a · Hỏi về góc làm việc riêng #meta
Mình muốn tạo một "góc làm việc riêng" để bạn nhớ hướng dẫn và tài liệu của mình (kiểu Project hoặc Gem). Với công cụ mình đang dùng, tính năng đó tên là gì, nằm ở đâu, các bước tạo ra sao? Nếu bạn không chắc giao diện hiện tại, cứ nói thật để mình tự kiểm tra.
```

!!! result "Bạn sẽ thấy"
    Bạn ấy giải thích tính năng và các bước tạo. Có thể bạn ấy mô tả giao diện cũ hơn cái bạn đang thấy, vì công cụ cập nhật liên tục. Khi đó, chụp màn hình gửi bạn ấy: *"Mình đang thấy thế này, bấm vào đâu?"*.

### Bước 2 · Để bạn ấy phỏng vấn bạn

Mở một cuộc trò chuyện **thường** (chưa cần vào Project). Nếu được, tải lên 3 file `.docx` để bạn ấy hiểu bối cảnh. Rồi nói:

```prompt 5b · Phỏng vấn rồi tự viết hướng dẫn #meta #chung
Mình muốn tạo một trợ lý nhớ cách mình làm báo cáo tuần. Bạn phỏng vấn mình từng câu một: mình là ai, làm việc này thế nào, thích kết quả ra sao, điều gì tuyệt đối không được làm. Hỏi đủ thì dừng, rồi tự viết giúp mình phần hướng dẫn để dán vào Project. Viết ngắn gọn, rõ ràng, dưới 300 chữ.
```

!!! tip "Chưa biết trả lời gì? Đóng vai chị Hà"
    Với bộ file mẫu, bạn đóng vai **Trần Thu Hà**, Trưởng nhóm Kinh doanh, Chi nhánh Hà Nội. Vài câu trả lời gợi ý:

    - Báo cáo gửi Giám đốc Chi nhánh mỗi sáng thứ Hai, theo đúng 5 mục trong file mẫu.
    - Số tiền ghi bằng triệu đồng, bảng kết quả luôn có cột % kế hoạch.
    - Văn phong ngắn gọn, đi thẳng vào số. Mỗi rủi ro phải kèm một đề xuất cụ thể.
    - Ghi chú của mình hay viết tắt, không dấu: ds là doanh số, kh là khách hàng, hd là hoá đơn.
    - Tuyệt đối không bịa số. Số nào tự suy ra phải đánh dấu để mình kiểm tra.

!!! result "Bạn sẽ thấy"
    Bạn ấy hỏi khoảng 5–8 câu, mỗi lần một câu, giống hệt một trợ lý mới đi làm. Hỏi xong, bạn ấy đưa ra một đoạn hướng dẫn hoàn chỉnh, thường gồm: trợ lý là ai, làm việc cho ai; khi nhận số liệu thì làm gì; cấu trúc báo cáo; giọng văn; các điều cấm. **Bạn vừa có hướng dẫn mà không phải tự viết chữ nào.** Đọc lại một lượt, chỗ nào chưa đúng ý thì nói tiếp để bạn ấy sửa.

Muốn so sánh với một bản viết sẵn? Mở đáp án dưới đây.

!!! answer "Mẫu hướng dẫn tham khảo"
    Bạn là trợ lý báo cáo của Trần Thu Hà, Trưởng nhóm Kinh doanh, Chi nhánh Hà Nội, Công ty Sao Mai. Báo cáo gửi Giám đốc Chi nhánh.

    Mỗi khi mình gửi "Số liệu tuần [số]" kèm ghi chú, bạn:

    1. Viết báo cáo đúng cấu trúc file "mau-bao-cao-tuan" trong phần tệp: Tóm tắt tuần, Kết quả chính (bảng), Việc trễ hạn, Rủi ro & đề xuất, Kế hoạch tuần tới.
    2. Giữ giọng văn giống báo cáo tuần 38 và 39: ngắn gọn, số tiền ghi bằng triệu đồng, mỗi rủi ro kèm một đề xuất.
    3. Đánh dấu [CẦN KIỂM TRA] cạnh mọi con số bạn tự suy ra hoặc lấy từ tuần trước.
    4. Cuối báo cáo, hỏi tối đa 3 câu cần mình làm rõ.

    Tuyệt đối không bịa số liệu. Thiếu dữ liệu thì ghi "Chưa có dữ liệu".

### Bước 3 · Tạo Project, dán hướng dẫn, tải 3 file mẫu

1. Tạo một Project (hoặc Gem) mới, đặt tên **Trợ lý báo cáo tuần**.
2. Tìm ô hướng dẫn (thường ghi là Instructions, hoặc "Hướng dẫn") và dán đoạn bạn ấy vừa viết.
3. Tải lên đúng 3 file: `mau-bao-cao-tuan.docx`, `bao-cao-tuan-38.docx`, `bao-cao-tuan-39.docx`. **Không** tải file số liệu tuần 40, vì số liệu là thứ bạn đưa mỗi tuần.
4. Lưu lại. Mở một cuộc trò chuyện mới **bên trong** Project và kiểm tra xem bạn ấy đã "học bài" chưa:

```prompt 5c · Kiểm tra bạn ấy đã học bài #meta
Trước khi làm việc, bạn cho mình biết: bạn hiểu mình sẽ nhờ bạn làm gì? Mẫu báo cáo có những mục nào? Giọng văn bạn rút ra từ 2 báo cáo cũ ra sao? Có điều gì trong hướng dẫn bạn thấy chưa rõ không?
```

!!! result "Bạn sẽ thấy"
    Bạn ấy kể lại đúng 5 mục của mẫu, nhận ra số tiền ghi bằng triệu đồng, mỗi rủi ro đều có đề xuất, bảng kết quả có cột % kế hoạch. Một trợ lý tinh ý còn hỏi ngược: *"Kế hoạch tuần lấy ở đâu?"*. Nếu bạn ấy nói không thấy file nào, có thể file chưa tải lên xong, hoặc bạn đang chat ngoài Project.

!!! note "Chưa có Project hoặc Gem? Cách dự phòng"
    Lưu đoạn hướng dẫn vào một ghi chú (Notes, Google Keep, Word, đâu cũng được). Mỗi lần cần, mở cuộc trò chuyện mới, dán hướng dẫn vào đầu, tải kèm 3 file mẫu, rồi dán số liệu. Tốn thêm một phút, nhưng kết quả gần như nhau. Nếu công cụ không nhận file `.docx`, mở file ra, copy nội dung và dán thẳng vào khung chat.

### Bước 4 · Từ giờ chỉ cần: "Số liệu tuần 40:"

Mở cuộc trò chuyện mới trong Project. Không cần chào, không cần giải thích. Dán nguyên ghi chú vội của chị Hà:

```prompt 5d · Số liệu tuần 40 #chung #kinhdoanh
Số liệu tuần 40:
so lieu tuan 40 (28/9 - 4/10) - Ha ghi vội
- ds tuan nay ~1,29 ty (CHUA tinh don truong Hoa Sen 85tr dang cho xuat hd)
- don: 44 / kh moi: 7 (2 truong hoc, 1 van phong luat, con lai le)
- thu no dc 1,02 ty. Phuc Loc tra them 40tr, con 80tr, qua han 40 ngay roi
- Minh Quang: KH doi thong so ban hop LAN 2 -> bao gia lui sang 9/10, Quan phu trach
- doi thu giam gia giay A4 tong ~5%, tuan nay mat 1 khach le vi gia
- sep hoi ve combo giay + muc -> chua co quyet dinh
- tuan sau: chot Hoa Sen, gui bao gia Minh Quang, hop voi Phuc Loc, chuan bi hoi cho VPP thang 10
```

Những tuần sau, bạn chỉ cần gõ *"Số liệu tuần [số]:"* rồi dán ghi chú của tuần đó.

!!! result "Bạn sẽ thấy"
    Một báo cáo tuần 40 (28/9 – 4/10/2026) đúng 5 mục của mẫu, giọng văn giống tuần 38 và 39, dù ghi chú gốc không dấu và lộn xộn:

    - **Kết quả chính:** doanh số khoảng 1.290 triệu đồng, 44 đơn, 7 khách mới, thu nợ 1.020 triệu đồng. Ghi chú không có số kế hoạch, nên bạn ấy thường lấy theo các tuần trước và đánh dấu **[CẦN KIỂM TRA]**, hoặc hỏi lại bạn.
    - **Việc trễ hạn:** báo giá toà nhà Minh Quang lùi sang 9/10 vì khách đổi thông số bàn họp lần 2, anh Quân phụ trách.
    - **Rủi ro & đề xuất:** Phúc Lộc còn nợ 80 triệu, quá hạn 40 ngày; đối thủ giảm giá giấy A4 khoảng 5%, đã mất 1 khách lẻ; combo giấy + mực chưa có quyết định. Trợ lý tinh ý sẽ nhắc: tuần 39 từng đề xuất chuyển sang thu hồi theo hợp đồng nếu quá 45 ngày, giờ đã 40 ngày.
    - **Lưu ý doanh số:** chưa tính đơn trường Hoa Sen 85 triệu đang chờ xuất hoá đơn.
    - **Kế hoạch tuần tới:** chốt Hoa Sen, gửi báo giá Minh Quang, họp với Phúc Lộc, chuẩn bị hội chợ văn phòng phẩm tháng 10.
    - **Cuối bài:** tối đa 3 câu hỏi, ví dụ kế hoạch tuần 40 có thay đổi không, đơn Hoa Sen sẽ tính vào tuần nào.

### Bước 5 · Dạy thêm khi chưa ưng ý

Trợ lý mới cũng như nhân viên mới, tuần đầu chưa hoàn hảo. Nếu chỉ muốn sửa lần này, cứ nói thẳng trong cuộc trò chuyện. Còn nếu muốn sửa **mãi mãi**, hãy đưa điều đó vào hướng dẫn. Điều bạn dặn trong một cuộc trò chuyện chưa chắc được nhớ sang cuộc sau; điều ghi trong hướng dẫn thì luôn được đọc.

```prompt 5e · Dạy thêm một điều #meta
Báo cáo ổn rồi, nhưng từ nay mình muốn [phần Tóm tắt luôn mở đầu bằng % kế hoạch doanh số / mục Rủi ro xếp từ mức độ cao xuống thấp]. Viết lại toàn bộ phần hướng dẫn, đã thêm điều này, để mình dán đè vào Project.
```

!!! result "Bạn sẽ thấy"
    Một bản hướng dẫn mới, đầy đủ, đã gài thêm điều bạn muốn. Dán đè lên bản cũ trong phần cài đặt của Project. Tuần sau, bạn ấy tự làm đúng mà bạn không cần nhắc. Cứ mỗi lần chưa ưng là một lần dạy thêm, trợ lý của bạn sẽ ngày càng "ra dáng".

### Bước 6 · Nghĩ ra trợ lý của riêng bạn

Bạn đã thấy cách dạy một trợ lý. Giờ đến lượt việc của chính bạn. Lại hỏi thẳng:

```prompt 5f · Gợi ý trợ lý cho riêng mình #meta #doisong
Mình làm [nghề, vị trí]. Mỗi tuần mình hay lặp lại những việc như [kể 3–4 việc]. Ở nhà, mình [kể chút về gia đình, sở thích, việc hay phải lo]. Gợi ý cho mình 5 trợ lý nên tạo bằng Project hoặc Gem, mỗi trợ lý ghi: tên, việc nó làm, cần tải lên tài liệu gì, và câu mở lời mỗi lần dùng.
```

!!! result "Bạn sẽ thấy"
    Năm gợi ý sát với đời bạn, có cả công việc lẫn gia đình. Chọn một cái, quay lại Bước 2 và để bạn ấy phỏng vấn bạn. Ghi tên trợ lý đó lên thẻ 7 bậc của bạn: *"Mình sẽ dạy bạn ấy việc ___."*

## Dám hỏi lại

Trợ lý giỏi đến đâu thì báo cáo vẫn mang tên bạn. Trước khi gửi, soát từng chỗ **[CẦN KIỂM TRA]** và hỏi nguồn của các con số:

```prompt 5g · Hỏi nguồn từng con số #chung
Với mỗi con số trong báo cáo, ghi giúp mình nó lấy từ đâu: từ ghi chú tuần 40 mình vừa dán, từ báo cáo tuần trước trong phần tệp, hay do bạn tự tính. Số nào tự tính thì ghi phép tính.
```

!!! check "Dám hỏi lại"
    - **Doanh số** phải là khoảng 1.290 triệu đồng và **chưa** gồm đơn Hoa Sen 85 triệu. Nếu thấy 1.375 triệu, bạn ấy đã cộng nhầm đơn chưa xuất hoá đơn.
    - **Phúc Lộc** còn nợ **80 triệu** (đã trả thêm 40 triệu), quá hạn 40 ngày. Không phải 120 triệu như tuần 39.
    - **Số kế hoạch tuần 40** không có trong ghi chú. Nếu bạn ấy điền mà không đánh dấu hay không hỏi lại, đó là "đoán". Thêm vào hướng dẫn ở Bước 5 để lần sau không lặp lại.
    - **Chữ viết tắt:** "KH" trong dòng Minh Quang là *khách hàng*, không phải *kế hoạch*. Đọc kỹ câu bạn ấy viết về Minh Quang.

!!! answer "Đáp án: bảng kết quả tuần 40 (nếu dùng kế hoạch như các tuần trước)"
    - Doanh số (triệu đồng): kế hoạch 1.250 · thực hiện khoảng 1.290 · đạt 103,2%
    - Số đơn hàng: kế hoạch 42 · thực hiện 44 · đạt 104,8%
    - Khách hàng mới: kế hoạch 5 · thực hiện 7 · đạt 140,0%
    - Thu hồi công nợ (triệu đồng): kế hoạch 900 · thực hiện 1.020 · đạt 113,3%

    Cột kế hoạch lấy từ tuần 38 và 39. Nếu kế hoạch tuần 40 khác, cột % sẽ khác. Đó chính là lý do bạn ấy phải đánh dấu [CẦN KIỂM TRA].

## Biến thể theo ngành

### ⚖️ Pháp lý

Trợ lý pháp chế biết mẫu hợp đồng và checklist rà soát của công ty. Mỗi lần chỉ cần tải hợp đồng mới lên và nói "rà giúp mình".

```prompt 5h · Trợ lý rà soát hợp đồng #luat
Mình muốn tạo một trợ lý pháp chế rà soát hợp đồng mua bán theo đúng checklist của công ty (mình sẽ tải lên checklist và 2 hợp đồng mẫu đã che tên). Phỏng vấn mình từng câu: công ty thường ở vị thế bên mua hay bên bán, điều khoản nào bắt buộc phải có, rủi ro mức nào phải báo sếp, trình bày kết quả ra sao. Xong viết hướng dẫn cho Project, có yêu cầu trích số Điều cho mọi nhận xét.
```

### 💰 Kế toán – Tài chính

Trợ lý báo cáo tháng biết mẫu báo cáo quản trị, cách gọi tên khoản mục, ngưỡng chênh lệch nào phải giải trình.

```prompt 5i · Trợ lý báo cáo tháng #ketoan
Mình muốn tạo trợ lý viết thuyết minh báo cáo quản trị tháng. Phỏng vấn mình từng câu: báo cáo gửi ai, gồm những khoản mục nào, chênh lệch so với kế hoạch bao nhiêu phần trăm thì phải giải thích, giọng văn ra sao. Xong viết hướng dẫn cho Project. Nhớ thêm quy tắc: không bịa số, số tự tính phải ghi phép tính.
```

### 🤝 Kinh doanh – CSKH

Trợ lý chăm sóc khách hàng trả lời đúng giọng công ty, thuộc chính sách đổi trả và bảo hành.

```prompt 5j · Trợ lý trả lời khách #kinhdoanh
Mình muốn tạo trợ lý soạn câu trả lời cho khách hàng đúng giọng công ty mình. Mình sẽ tải lên chính sách đổi trả, bảo hành và 10 câu trả lời mẫu mà sếp khen. Phỏng vấn mình từng câu về giọng điệu, cách xưng hô, điều gì không bao giờ hứa với khách. Xong viết hướng dẫn cho Project.
```

### 🏗️ Vận hành – Xây dựng

Trợ lý biến ghi chú hiện trường, ảnh chụp bảng trắng thành báo cáo ngày hoặc biên bản đúng mẫu.

```prompt 5k · Trợ lý báo cáo hiện trường #vanhanh
Mình muốn tạo trợ lý viết báo cáo ngày công trường từ ghi chú vội và ảnh chụp của mình. Mình sẽ tải lên mẫu báo cáo ngày và 2 báo cáo cũ. Phỏng vấn mình từng câu: báo cáo gửi ai, gồm mục nào, sự cố nào phải báo ngay. Xong viết hướng dẫn cho Project, nhớ đánh dấu [CẦN KIỂM TRA] với khối lượng tự suy ra.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Trợ lý pháp chế biết mẫu hợp đồng và checklist của công ty.
    - Trợ lý báo cáo tháng, thuộc mẫu và các ngưỡng phải giải trình.
    - Trợ lý chăm sóc khách hàng trả lời đúng giọng công ty.
    - **"Bản sao của tôi"**: tải lên quy trình và câu hỏi thường gặp, để cả team hỏi khi bạn vắng.
    - Trợ lý soạn biên bản họp theo mẫu của phòng.
!!! life "🏡 Đời sống"
    - Gia sư tiếng Anh cho con, biết trình độ, sở thích và lỗi con hay mắc.
    - Trợ lý nấu ăn biết nhà mình ai dị ứng gì, ai đang ăn kiêng.
    - Bạn đồng hành viết sách, nhớ toàn bộ dàn ý và giọng văn của bạn.
    - Huấn luyện viên sức khoẻ nhớ mục tiêu và lịch tập của bạn.
    - Trợ lý chi tiêu gia đình, chia nhóm đúng như cách nhà mình vẫn chia.
:::

Việc gì bạn phải giải thích lại lần thứ ba, đó là lúc nên dạy bạn ấy một lần cho xong.

## Khi kết quả chưa như ý

| Bạn gặp | Vì sao | Nói với bạn ấy thế này |
|---|---|---|
| Báo cáo không theo mẫu | Bạn đang chat ngoài Project, hoặc file chưa tải lên xong | Kiểm tra cuộc trò chuyện nằm trong Project, rồi: "Mở file mau-bao-cao-tuan trong phần tệp và viết lại đúng 5 mục của nó." |
| Tự điền số kế hoạch mà không đánh dấu | Hướng dẫn chưa nói rõ | "Mình chưa đưa kế hoạch tuần này. Đánh dấu [CẦN KIỂM TRA] cạnh mọi số không có trong ghi chú." Rồi đưa câu này vào hướng dẫn (Bước 5). |
| Giọng văn khác hẳn báo cáo cũ | Bạn ấy chưa bám sát 2 file mẫu | "Đọc lại báo cáo tuần 38 và 39, liệt kê 5 đặc điểm giọng văn, rồi viết lại theo đúng 5 đặc điểm đó." |
| Hiểu sai chữ viết tắt ("ds", "kh") | Viết tắt là thói quen riêng của bạn | "Trong ghi chú của mình: ds = doanh số, kh = khách hàng, hd = hoá đơn." Thêm bảng viết tắt này vào hướng dẫn. |
| Hỏi quá nhiều, hoặc chẳng hỏi câu nào | Hướng dẫn chưa giới hạn | "Chỉ hỏi tối đa 3 câu, ưu tiên câu ảnh hưởng đến số liệu." |

## Tự kiểm tra

- [ ] Mình đã để bạn ấy phỏng vấn mình và tự viết phần hướng dẫn.
- [ ] Mình đã tạo Project hoặc Gem (hoặc lưu hướng dẫn vào ghi chú nếu bản của mình chưa có).
- [ ] Mình đã tải lên mẫu và 2 báo cáo cũ, rồi kiểm tra xem bạn ấy đã "học bài" chưa.
- [ ] Chỉ với "Số liệu tuần 40:" và ghi chú vội, mình có báo cáo đúng mẫu, đúng giọng.
- [ ] Mình đã soát từng chỗ [CẦN KIỂM TRA] và hỏi nguồn các con số.
- [ ] Mình đã ghi ra ít nhất một trợ lý sẽ tạo cho công việc hoặc gia đình.

## Đi xa hơn

- **Mỗi trợ lý một việc:** đừng nhồi mọi thứ vào một Project. Việc càng rõ, bạn ấy làm càng chuẩn.
- **Thay "sách giáo khoa" định kỳ:** mỗi tháng thay 2 báo cáo cũ bằng 2 báo cáo mới nhất mà sếp ưng.
- **"Bản sao của tôi" cho cả team:** một số gói cho phép chia sẻ Project, Gem, hoặc tạo Custom GPT cho người khác dùng. Kiểm tra trang chính thức vì gói và quyền chia sẻ thay đổi thường xuyên. Đừng tải lên tài liệu mà người được chia sẻ không được phép xem.
- **Nối với Bậc 4:** có báo cáo rồi thì nói tiếp *"biến thành 3 slide cho họp giao ban"*.
- Có trợ lý nhớ việc rồi, nhưng thiếu một công cụ? Sang [Bậc 6](cap-6.html): nhờ bạn ấy làm luôn.
