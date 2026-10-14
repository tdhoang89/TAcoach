---
title: Giao cả đầu việc cho AI agent
kind: lesson
level: 7
how: Giao cả đầu việc, không chỉ giao câu hỏi
summary: Giao cho AI agent gom số liệu 5 chi nhánh thành báo cáo quản trị tháng, rồi duyệt kế hoạch và kiểm tra lại.
time: 45 phút
tools: Claude Cowork
free: Cần gói trả phí
---

## Bạn sẽ làm được gì

- Hiểu AI agent khác chat thường ở đâu, và khi nào nên dùng.
- Giao một đầu việc thật: gom số liệu tháng 9 của 5 chi nhánh, mỗi nơi gửi một kiểu, thành báo cáo quản trị tháng gửi Giám đốc.
- Đọc và duyệt kế hoạch của bạn ấy trước khi để bạn ấy làm.
- Kiểm tra thành phẩm bằng những câu "dám hỏi lại" nhắm đúng chỗ dễ sai.
- Chưa có gói trả phí vẫn làm gần giống bằng một cuộc trò chuyện thường.

## Vì sao cách nhờ này hiệu quả

Ở 6 bậc trước, bạn vẫn là người chạy việc: copy, dán, tải từng file lên, tải kết quả về. Với **AI agent**, bạn chỉ cho bạn ấy một thư mục, giao việc, và bạn ấy **tự mở file, tự đọc, làm từng bước, rồi lưu thành phẩm ngay trên máy bạn**. Giống hệt giao việc cho một trợ lý thật: "Số liệu các chi nhánh ở thư mục này, em gom lại thành báo cáo cho anh."

Trong bài này, mình dùng **Claude Cowork**: AI agent trong ứng dụng Claude trên máy tính, làm việc trực tiếp với file và thư mục của bạn (cần gói trả phí). Một vài lựa chọn khác:

- **ChatGPT Agent:** chế độ để ChatGPT tự thao tác nhiều bước. Cách đưa file và nhận kết quả khác với Cowork, xem trang hướng dẫn của OpenAI.
- **Claude Code:** công cụ agent của Anthropic, chạy trong Terminal, ứng dụng desktop hoặc IDE (cần gói trả phí). Hợp với ai đã quen công cụ kỹ thuật.

Công cụ nào thì **cách giao việc** trong bài vẫn dùng được: kể đủ bối cảnh, để bạn ấy hỏi lại, và yêu cầu bạn ấy **trình kế hoạch cho bạn duyệt trước khi làm**. Bạn ấy làm, nhưng bạn vẫn là người quyết định và người kiểm tra.

Bài toán của bậc này lấy từ chính khảo sát: gom báo cáo từ nhiều file rời rạc là nỗi đau chung, có bạn kể làm báo cáo kế toán tháng mất gần một tuần.

!!! view "Góc nhìn"
    Càng làm bạn lâu, mình càng giao được việc lớn. Từ một câu hỏi, đến một file, đến cả một đầu việc. Bạn ấy giỏi lên mỗi ngày. Câu hỏi là mình có dám giao không.

## Chuẩn bị

- **Claude Cowork:** cài ứng dụng Claude cho máy tính và đăng nhập tài khoản trả phí. Kiểm tra trang chính thức của Anthropic xem gói nào có Cowork, vì gói và tính năng thay đổi thường xuyên.
- **Chưa có gói trả phí?** Vẫn làm được phần lớn bài này bằng chat thường, xem Bước 6.
- **Số liệu tháng 9 của 5 chi nhánh** (hư cấu, Công ty Sao Mai):

[Tải số liệu 5 chi nhánh (.zip)](files/cap-7/bao-cao-thang-9.zip){.dl}

| File | Chi nhánh gửi kiểu gì |
|---|---|
| `CN Ha Noi.xlsx` | Đúng mẫu, có thêm sheet công nợ |
| `CN Hai Phong.xlsx` | Tính bằng **triệu đồng**, có ô gộp |
| `CN Da Nang.docx` | Viết thành đoạn văn, số liệu nằm lẫn trong câu chữ |
| `CN Can Tho.csv` | Xuất từ phần mềm kế toán, dùng mã tài khoản |
| `HCM - bao cao T9 (final) (sua lan 2).xlsx` | Cái tên quen thuộc của mọi văn phòng, bên trong có nhiều hơn một sheet |

- **Thời gian:** khoảng 45 phút. Phần bạn ấy tự làm thường chỉ mất vài phút.

!!! danger "Đừng làm"
    - **Đừng để file đáp án** (hay bất kỳ file nào không liên quan) trong thư mục giao cho agent. Bạn ấy đọc được mọi thứ trong đó. Nếu bạn chép bảng đáp án ở mục Dám hỏi lại ra file, hãy để ở chỗ khác.
    - **Đừng giao thư mục chứa tài liệu gốc.** Luôn làm trên bản sao, trong một thư mục làm việc riêng.
    - **Với số liệu thật của công ty:** hỏi chính sách công ty trước khi cho AI đọc, và nhớ quy tắc đèn giao thông ở [Bậc 2](cap-2.html).

## Làm thật: từng bước

### Bước 1 · Dựng thư mục làm việc, cho bạn ấy làm quen

1. Tạo một thư mục mới, ví dụ `AI-lam-viec` trong thư mục Documents.
2. Giải nén file zip vào đó (chuột phải, chọn Extract All hoặc Giải nén tất cả). Bạn sẽ có thư mục con `bao-cao-thang-9` với đúng 5 file. Kiểm tra không có file nào khác.
3. Mở ứng dụng Claude, chuyển sang Cowork và chọn thư mục `bao-cao-thang-9` làm nơi làm việc. Giao diện có thể thay đổi theo phiên bản; không thấy thì xem trang hướng dẫn chính thức.

Trước khi giao việc, cho bạn ấy "đi một vòng văn phòng":

```prompt 7a · Làm quen với thư mục #chung
Trong thư mục này có số liệu tháng 9 của 5 chi nhánh. Chưa làm gì cả, bạn chỉ đọc qua từng file rồi kể lại cho mình: mỗi file của chi nhánh nào, trình bày kiểu gì, đơn vị tính là gì, có điểm gì bất thường cần lưu ý.
```

!!! result "Bạn sẽ thấy"
    Bạn ấy mở lần lượt từng file và kể lại. Một lượt đọc tốt sẽ tự nhận ra: Hải Phòng ghi "ĐVT: triệu đồng", Đà Nẵng là văn bản chứ không phải bảng, Cần Thơ dùng mã tài khoản, file HCM có hơn một sheet. Bạn ấy bỏ sót điểm nào thì ghi lại, lát nữa bạn sẽ hỏi lại đúng chỗ đó.

### Bước 2 · Giao việc, và để bạn ấy hỏi lại

Đây là bước "Hỏi thẳng bạn ấy" của bậc 7. Bạn giao việc như giao cho một trợ lý giỏi: nói rõ cần gì, lưu ở đâu, thế nào là tốt, và mời bạn ấy hỏi trước khi làm.

```prompt 7b · Giao cả đầu việc #ketoan #chung
Đây là số liệu tháng 9 của 5 chi nhánh, mỗi nơi gửi một kiểu (có nơi tính bằng triệu đồng, có nơi viết thành đoạn văn). Mình cần báo cáo quản trị tháng gửi Giám đốc, lưu vào thư mục con tên "output":
1. Một file Excel tổng hợp theo chi nhánh: kế hoạch doanh thu, doanh thu, % kế hoạch, giá vốn, chi phí bán hàng, chi phí quản lý, lợi nhuận trước thuế, và dòng tổng toàn công ty. Tất cả quy về đồng.
2. Một file Word tóm tắt cho Giám đốc: chi nhánh hụt kế hoạch, chi phí bất thường, công nợ quá hạn trên 60 ngày, những việc cần Giám đốc quyết định.
3. Một email gửi Giám đốc soạn sẵn, lưu thành file văn bản. KHÔNG gửi.
Việc này quan trọng, cứ làm kỹ, không cần vội.
Mỗi con số phải chỉ ra được nguồn (file nào, sheet nào, dòng nào). Chỗ nào không chắc thì hỏi mình, không tự đoán. Xong thì tự đối chiếu tổng với từng file gốc, báo mình đã kiểm gì, chưa kiểm được gì.
Bạn cần biết gì thì hỏi mình trước, rồi trình kế hoạch cho mình duyệt trước khi làm nhé.
```

Mỗi ý trong lời giao việc có lý do, và đủ cả ba điều Boris Cherny khuyên (xem [Giao việc như giao cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html)): **muốn gì** (ba thành phẩm, lưu ở đâu), **công sức** ("cứ làm kỹ"), **kiểm tra thế nào** ("chỉ ra nguồn", "tự đối chiếu", "báo đã kiểm gì"). Thư mục `output` riêng giúp file gốc không bị đụng tới. "Quy về đồng" và "chỉ ra nguồn" là hai lưới an toàn cho số liệu. "Không gửi" giữ quyền quyết định ở bạn.

!!! result "Bạn sẽ thấy"
    Bạn ấy chưa làm ngay mà hỏi lại vài câu, ví dụ: Giám đốc xưng hô thế nào trong email; "chi phí bất thường" tính theo ngưỡng nào; báo cáo có theo mẫu sẵn nào không. Trả lời ngắn, tự nhiên. Câu nào bạn chưa nghĩ tới, cứ nói *"bạn đề xuất đi"*. Ví dụ với ngưỡng chi phí bất thường, bạn có thể trả lời: *"Khoản nào lệch kế hoạch trên 20%, hoặc ghi chú là đột xuất."*

### Bước 3 · Đọc kế hoạch trước khi duyệt

Bạn ấy trình kế hoạch. Đọc kỹ như duyệt kế hoạch của một nhân viên mới. Năm điều cần thấy trong kế hoạch:

- Đủ 5 file, không bỏ sót chi nhánh nào.
- Hải Phòng sẽ được **đổi từ triệu đồng sang đồng**.
- File HCM: dùng sheet nào, vì sao.
- Cần Thơ: hiểu các mã tài khoản ra sao, kế hoạch doanh thu lấy ở đâu.
- Tên và nơi lưu 3 thành phẩm.

Thiếu điều gì thì hỏi thêm trước khi duyệt:

```prompt 7c · Duyệt kế hoạch có điều kiện #chung
Kế hoạch ổn. Trước khi làm, bổ sung giúp mình: [file HCM có mấy sheet, bạn định dùng sheet nào và vì sao?]. Trong file Excel, thêm một sheet tên "Nguon" ghi nguồn của từng con số. Xong thì làm đi, gặp chỗ không chắc thì dừng lại hỏi mình.
```

!!! result "Bạn sẽ thấy"
    Bạn ấy trả lời câu bạn hỏi, cập nhật kế hoạch, rồi bắt tay vào làm. Đây là khoảnh khắc đáng nhớ của bậc 7: **bạn ấy hỏi trước khi làm, và bạn vẫn là người quyết định**.

### Bước 4 · Để bạn ấy làm, và quan sát

Giờ bạn ấy tự chạy: mở từng file, đọc số liệu, tính toán, tạo file mới. Bạn sẽ thấy từng bước hiện lên. Tuỳ công cụ và cài đặt, bạn ấy có thể xin phép trước một số thao tác. Đọc kỹ rồi mới đồng ý, và từ chối bất cứ việc gì bạn không giao (như xoá file, gửi email).

Muốn biết bạn ấy đang ở đâu, cứ hỏi:

```prompt 7d · Hỏi tiến độ #chung
Đang làm tới đâu rồi? Có file nào bạn đọc chưa được, hay con số nào bạn đang phân vân không?
```

!!! result "Bạn sẽ thấy"
    Sau vài phút, thư mục `output` xuất hiện với 3 file, tên có thể như `Tong-hop-thang-9.xlsx`, `Bao-cao-quan-tri-thang-9.docx`, `email-gui-giam-doc.txt`. Trong lúc chờ, tự hỏi mình: nếu có một trợ lý như thế này, **việc đầu tiên** bạn giao là gì?

### Bước 5 · Mở thành phẩm và đọc như Giám đốc

Mở từng file. Đọc file Word như thể bạn là Giám đốc: có hiểu ngay tình hình không, có biết mình cần quyết định gì không? Rồi nhờ bạn ấy tự tóm tắt:

```prompt 7e · Tóm tắt thành phẩm #chung
Tóm tắt cho mình: 3 file nằm ở đâu, mỗi file có gì, 5 con số quan trọng nhất, và những điểm bạn chưa chắc chắn. Đừng gửi email.
```

!!! result "Bạn sẽ thấy"
    File Excel có 5 dòng chi nhánh, dòng tổng toàn công ty và sheet ghi nguồn. File Word có đủ 4 mục bạn yêu cầu. Email nằm yên trong thư mục. Phần bạn ấy tự nhận "chưa chắc chắn" là chỗ cần soi đầu tiên, rồi đối chiếu với đáp án ở mục **Dám hỏi lại**.

### Bước 6 · Chưa có gói trả phí? Một cuộc trò chuyện, từng file một

Không có agent, bạn vẫn làm gần giống được, bằng đúng chiêu của [Bậc 4](cap-4.html): **giữ một cuộc trò chuyện và nói tiếp**. Khác biệt duy nhất: bạn là người mang từng file tới cho bạn ấy.

1. Mở một cuộc trò chuyện mới trên ChatGPT hoặc Claude. Giữ nguyên cuộc này đến cuối.
2. Giao việc trước bằng câu 7f bên dưới.
3. Tải lên từng file, mỗi tin nhắn một file. Chờ bạn ấy tóm tắt xong mới gửi file tiếp theo.
4. Công cụ không nhận một loại file? Mở file ra, copy nội dung, dán vào khung chat. Với file HCM, dán **cả hai sheet** và ghi rõ tên từng sheet, để xem bạn ấy có chọn đúng không.
5. Đủ 5 file thì dùng câu 7g để tổng hợp.

```prompt 7f · Giao việc kiểu từng file #chung #ketoan
Mình cần làm báo cáo quản trị tháng 9 từ số liệu 5 chi nhánh, mỗi nơi gửi một kiểu. Mình sẽ gửi từng file một. Với mỗi file, bạn chỉ cần: đọc kỹ, lấy ra kế hoạch doanh thu, doanh thu, giá vốn, chi phí bán hàng, chi phí quản lý, lợi nhuận trước thuế, công nợ quá hạn và ghi chú đáng chú ý; quy hết về đồng; ghi rõ mỗi con số nằm ở đâu trong file. Chưa tổng hợp vội. Chỗ nào không chắc thì hỏi mình. Sẵn sàng thì nói "Gửi file đầu tiên đi".
```

```prompt 7g · Tổng hợp sau khi đủ 5 file #chung #ketoan
Đủ 5 chi nhánh rồi. Giờ làm giúp mình: (1) bảng tổng hợp theo chi nhánh và dòng toàn công ty; (2) báo cáo 1 trang cho Giám đốc: chi nhánh hụt kế hoạch, chi phí bất thường, công nợ quá hạn trên 60 ngày, việc cần Giám đốc quyết định; (3) email soạn sẵn gửi Giám đốc. Nếu công cụ cho phép, tạo file Excel và Word để mình tải về.
```

!!! result "Bạn sẽ thấy"
    Kết quả gần giống bản agent: cùng bảng tổng hợp, cùng các điểm cần phát hiện. Bạn mất thêm vài phút gửi từng file và tải kết quả về, nhưng vẫn nhanh hơn nhiều so với gom tay. Và bạn sẽ hiểu agent tiết kiệm cho bạn điều gì: không phải trí tuệ, mà là **công chạy việc**.

## Dám hỏi lại

Đây là bước quan trọng nhất của bậc 7. Bạn ấy làm nhanh, nhưng báo cáo gửi Giám đốc mang tên bạn. Đừng hỏi chung chung "đúng chưa?". Hãy hỏi đúng những chỗ dễ sai nhất, và đòi xem dòng gốc.

```prompt 7h · Hỏi lại quy đổi đơn vị #ketoan
Số liệu của chi nhánh Hải Phòng bạn quy đổi đơn vị thế nào? Chỉ cho mình dòng gốc trong file để mình đối chiếu.
```

```prompt 7i · Hỏi lại các chỗ dễ sai khác #ketoan
Thêm 3 câu nữa: (1) File HCM có mấy sheet, bạn lấy số ở sheet nào, vì sao? (2) File Cần Thơ dùng mã tài khoản: bạn hiểu mỗi mã là gì, và lấy kế hoạch doanh thu ở đâu? (3) Chi phí bán hàng HCM đã gồm các dòng chi tiết bên dưới chưa, bạn có cộng thêm lần nữa không?
```

!!! check "Dám hỏi lại"
    - **Hải Phòng:** dòng 2 của file ghi *"ĐVT: triệu đồng"*. Doanh thu 3.020 phải thành 3.020.000.000đ. Mở file ra, tự nhìn dòng đó.
    - **HCM:** phải dùng sheet `BC T9` (doanh thu 7,82 tỷ), bỏ qua sheet `nhap` cũ (7,64 tỷ).
    - **HCM, chi phí bán hàng:** 612 triệu **đã gồm** 3 dòng chi tiết bên dưới, trong đó có khoản thưởng nóng. Không cộng thêm lần nữa.
    - **Cần Thơ:** 511 là doanh thu, 632 giá vốn, 641 chi phí bán hàng, 642 chi phí quản lý, 131 phải thu khách hàng. Kế hoạch 1,9 tỷ nằm ở dòng ghi chú thứ 3, trước bảng số liệu.
    - **Công nợ trên 60 ngày:** chỉ có 2 khoản. Thiên Phú (HCM, 55 ngày) và Hải Âu (Hải Phòng, 41 ngày) chưa tới 60 ngày, không được đưa vào mục này.
    - **Email:** vẫn nằm trong thư mục, chưa gửi đi đâu.

!!! answer "Đáp án: bảng tổng hợp tháng 9 và 4 điểm phải phát hiện"
    Đơn vị: đồng.

    | Chi nhánh | Kế hoạch DT | Doanh thu | % KH | Giá vốn | CP bán hàng | CP quản lý | LN trước thuế |
    |---|---:|---:|---:|---:|---:|---:|---:|
    | Hà Nội | 5.200.000.000 | 5.460.000.000 | 105,0% | 4.040.400.000 | 386.000.000 | 298.000.000 | 735.600.000 |
    | Hải Phòng | 3.100.000.000 | 3.020.000.000 | 97,4% | 2.265.000.000 | 210.000.000 | 568.000.000 | −23.000.000 |
    | Đà Nẵng | 2.800.000.000 | 2.296.000.000 | 82,0% | 1.722.000.000 | 205.000.000 | 160.000.000 | 209.000.000 |
    | Cần Thơ | 1.900.000.000 | 1.985.000.000 | 104,5% | 1.468.900.000 | 148.000.000 | 121.500.000 | 246.600.000 |
    | TP.HCM | 7.500.000.000 | 7.820.000.000 | 104,3% | 5.865.000.000 | 612.000.000 | 455.000.000 | 888.000.000 |
    | **Toàn công ty** | **20.500.000.000** | **20.581.000.000** | **100,4%** | 15.361.300.000 | 1.561.000.000 | 1.602.500.000 | **2.056.200.000** |

    Bốn điểm báo cáo **phải** phát hiện:

    1. **Đà Nẵng hụt kế hoạch:** chỉ đạt 82% vì mất gói thầu trường học khoảng 380 triệu và mưa bão ngày 17–18/9. Số liệu nằm trong đoạn văn của file Word.
    2. **Chi phí bất thường ở Hải Phòng:** sửa mái kho đột xuất 415 triệu, khiến chi nhánh lỗ 23 triệu. Nằm ở cột Ghi chú.
    3. **Nợ quá hạn trên 60 ngày:** Đông Hưng (Hà Nội) 268,5 triệu, quá hạn 68 ngày; KH0087 (Cần Thơ) 412 triệu, quá hạn 75 ngày.
    4. **Cần Giám đốc quyết định:** thưởng nóng đội bán hàng HCM 180 triệu, đã tạm ứng 50%.

## Biến thể theo ngành

### ⚖️ Pháp lý

Gom hàng chục hồ sơ vụ việc rời rạc thành một bảng theo dõi thời hạn, có trích nguồn từng mốc.

```prompt 7j · Bảng theo dõi hạn hồ sơ #luat
Thư mục này có [30] hồ sơ vụ việc (Word, PDF, email đã lưu). Đọc từng hồ sơ, lập file Excel theo dõi: mã vụ việc, khách hàng (chỉ ghi mã), loại việc, mốc thời hạn sắp tới, người phụ trách, việc cần làm tiếp. Tô đỏ hồ sơ còn dưới 7 ngày đến hạn. Mỗi thời hạn ghi rõ lấy từ trang nào của hồ sơ nào. Trình kế hoạch cho mình duyệt trước.
```

### 💰 Kế toán – Tài chính

Đối chiếu sao kê ngân hàng với sổ sách. Đây là dữ liệu nhạy cảm: che số tài khoản, hoặc chỉ dùng công cụ được công ty cho phép.

```prompt 7k · Đối chiếu sao kê với sổ sách #ketoan
Thư mục có sao kê ngân hàng tháng [tháng] và sổ chi tiết tiền gửi xuất từ phần mềm kế toán. Đối chiếu từng giao dịch: khớp, lệch số tiền, có ở sao kê mà không có ở sổ, và ngược lại. Lập file Excel kết quả và danh sách khoản cần giải trình. Không sửa file gốc. Hỏi mình trước nếu có quy ước ghi sổ bạn chưa rõ, rồi trình kế hoạch cho mình duyệt.
```

### 🤝 Kinh doanh – CSKH

Gộp báo giá của nhiều nhà cung cấp, mỗi nơi một định dạng, thành một bảng so sánh.

```prompt 7l · So sánh báo giá nhà cung cấp #kinhdoanh
Thư mục có báo giá của 5 nhà cung cấp, mỗi nơi một định dạng (PDF, Excel, ảnh chụp). Gộp thành một bảng so sánh: mã hàng, đơn giá, đã gồm VAT chưa, chiết khấu, thời gian giao, bảo hành, điều kiện thanh toán. Đánh dấu chỗ các báo giá không cùng điều kiện để so sánh. Viết thêm 1 trang đề xuất chọn nhà cung cấp nào, vì sao. Trình kế hoạch trước khi làm.
```

### 🏗️ Vận hành – Xây dựng

Gom báo cáo ngày của nhiều công trường thành báo cáo tuần cho Ban chỉ huy.

```prompt 7m · Báo cáo tuần từ nhiều công trường #vanhanh
Thư mục có báo cáo ngày trong tuần của [3] công trường, mỗi đội viết một kiểu. Tổng hợp thành báo cáo tuần: khối lượng hoàn thành so với kế hoạch, nhân lực, sự cố an toàn, vật tư thiếu, việc cần Ban chỉ huy quyết định. Lưu thành file Word và một bảng Excel. Ghi rõ nguồn từng con số. Hỏi mình trước, rồi trình kế hoạch cho mình duyệt.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Gom chứng từ cuối năm từ nhiều thư mục thành bảng kê.
    - Gộp phiếu khảo sát khách hàng từ nhiều file thành báo cáo.
    - Đổi tên và sắp xếp 200 file hợp đồng theo một quy tắc thống nhất.
    - Rà một thư mục hồ sơ dự thầu, lập danh sách giấy tờ còn thiếu.
    - Gom bảng chấm công của nhiều phòng thành bảng tổng hợp lương.
!!! life "🏡 Đời sống"
    - Dọn thư mục 5.000 ảnh điện thoại theo năm và theo sự kiện.
    - Gom hoá đơn điện, nước, internet cả năm thành một bảng chi tiêu.
    - Sắp xếp tài liệu học tập của con theo môn và theo lớp.
    - Gom giấy tờ bảo hiểm, bảo hành của cả nhà vào một danh mục dễ tìm.
:::

Việc nào bạn từng than "cái này phải ngồi cả ngày gom file", đó là việc nên giao cho agent.

## Khi kết quả chưa như ý

| Bạn gặp | Vì sao | Nói với bạn ấy thế này |
|---|---|---|
| Tổng doanh thu chỉ khoảng 17,6 tỷ | Bạn ấy cộng thẳng số triệu đồng của Hải Phòng | "File Hải Phòng ghi ĐVT: triệu đồng ở dòng 2. Đổi sang đồng, tính lại và cập nhật cả 3 file." |
| Doanh thu HCM là 7,64 tỷ | Đọc nhầm sheet nháp cũ | "Dùng sheet BC T9, bỏ qua sheet nhap. Tính lại và cập nhật cả 3 file." |
| Chi phí bán hàng HCM lên tới 1.224 triệu | Cộng 3 dòng chi tiết thêm một lần nữa | "612 triệu đã gồm 3 dòng chi tiết bên dưới, đừng cộng thêm." |
| Danh sách nợ trên 60 ngày có Thiên Phú hoặc Hải Âu | Hiểu sai ngưỡng | "Chỉ liệt kê khoản quá hạn trên 60 ngày. Ghi số ngày bên cạnh từng khoản." |
| Bạn ấy làm luôn, không trình kế hoạch | Lời giao việc chưa đủ rõ | Dừng lại: "Khoan đã, trình kế hoạch cho mình duyệt trước." Lần sau giữ nguyên câu cuối của 7b. |
| Không đọc được một file | Định dạng lạ hoặc file lỗi | "Đọc file [tên] không được thì nói mình, mình sẽ dán nội dung vào." |

## Tự kiểm tra

- [ ] Mình làm trên bản sao, trong thư mục làm việc riêng, không có file đáp án.
- [ ] Mình đã để bạn ấy hỏi lại và trình kế hoạch trước khi làm.
- [ ] Mình có 3 thành phẩm: Excel tổng hợp, Word báo cáo, email soạn sẵn chưa gửi.
- [ ] Mình đã hỏi lại cách quy đổi Hải Phòng và tự nhìn dòng gốc trong file.
- [ ] Tổng doanh thu (20.581.000.000đ) và lợi nhuận trước thuế (2.056.200.000đ) của mình khớp đáp án.
- [ ] Báo cáo của mình nêu đủ 4 điểm phải phát hiện.

## Đi xa hơn

Nhìn lại cả 7 bậc, bạn sẽ thấy một điều: agent chỉ giỏi khi người giao việc rõ ràng. Bạn càng luyện bậc 1 đến 6 (kể đủ bối cảnh, hỏi "căn cứ đâu?", nói tiếp, dạy bạn ấy, tự làm công cụ), quy trình làm việc của bạn càng rõ: báo cáo cần gì, dữ liệu nằm đâu, chỗ nào phải kiểm tra. Quy trình càng rõ, bạn càng giao được việc lớn.

- **Biến thành quy trình hằng tháng:** lưu lời giao việc 7b cùng các câu 7h, 7i thành một file hướng dẫn. Tháng sau chỉ cần thay số liệu và nói "làm như tháng trước, theo file hướng dẫn". Đây chính là [Bậc 5](cap-5.html) dành cho agent.
- **Bắt đầu nhỏ với việc thật:** chọn một việc lặp lại, ít rủi ro, dữ liệu không nhạy cảm. Niềm tin tăng dần theo số lần bạn kiểm chứng.
- **Bạn ấy còn làm được nhiều hơn bạn nghĩ:** trang khảo sát trước buổi chia sẻ, trang tự học bạn đang đọc, và cả bài trình chiếu đi kèm, đều được làm bằng Claude Code, chỉ bằng cách nói chuyện. Câu giao việc thật có ở trang [Giao việc như giao cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html). Muốn xem thêm một điều bất ngờ? Ghé [Làm video bằng code](video-bang-code.html).
- **Tự thưởng cho mình:** in [thẻ 7 bậc](files/in/the-cap-do-in.html) và [chứng nhận Level Up](files/in/chung-nhan-level-up.html).
- **Đi tiếp xuống phễu:** chọn 2–3 [chuyên đề thực chiến](index.html#chuyen-de) hợp với việc của bạn, và lên kế hoạch 30 ngày ở trang [Khoảng cách AI](khoang-cach.html).
- Hết 7 bậc chưa phải hết đường. Mở [Thư viện prompt](thu-vien-prompt.html), rồi quay lại [Bậc 1](cap-1.html) với một việc thật của chính bạn. Và nhớ: dám nhờ mọi thứ, dám hỏi lại mọi thứ, không biết thì hỏi thẳng bạn ấy.
