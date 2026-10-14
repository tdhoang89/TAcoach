---
title: Excel lộn xộn thành sạch
kind: lesson
level: 3
how: Đưa đống bừa bộn, nhờ sắp xếp
summary: Đưa file chi phí 300 dòng lộn xộn, để bạn ấy gợi ý việc cần làm, dọn sạch, phân nhóm, vẽ biểu đồ và tự giải thích cách tính.
time: 40 phút
tools: ChatGPT hoặc Claude
free: Một phần
---

## Bạn sẽ làm được gì

- Dùng chiêu "mình chưa biết nhờ gì, bạn gợi ý đi" với một file lộn xộn.
- Dọn một file chi phí 300 dòng: bỏ dòng trùng, thống nhất ngày tháng, tên nhà cung cấp, số tiền.
- Phân chi phí vào 5 nhóm, tổng hợp theo nhóm và theo tuần, vẽ biểu đồ, tải về file sạch.
- Bắt bạn ấy giải thích 3 dòng bất kỳ và cách tính, để tự kiểm tra con số.
- Nhờ bạn ấy viết công thức Excel và giải thích bằng tiếng Việt dễ hiểu.

## Vì sao cách nhờ này hiệu quả

Ai làm văn phòng cũng từng nhận một file như thế này: mỗi người nhập một kiểu, ngày tháng đủ định dạng, một nhà cung cấp viết năm sáu cách, có dòng trùng, có ô trống. Dọn tay mất cả buổi. Muốn dùng hàm thì phải biết mình cần hàm gì.

Cách nhờ ở bậc này đi ngược thói quen: **bạn không cần biết mình cần gì**. Cứ đưa nguyên đống bừa bộn và hỏi "bạn thấy làm được gì với cái này?". Người bạn AI nhìn ra quy luật rất nhanh: "Grab", "GRAB", "grab car" là một; "02 tháng 9" và "2026-09-02" là cùng một ngày. Bạn ấy đề xuất, bạn chọn, bạn ấy làm.

Với file upload, ChatGPT hay Claude thường có thể chạy một đoạn chương trình nhỏ phía sau để tính toán thay vì "đọc bằng mắt", nên con số đáng tin hơn hỏi đáp thông thường. Nhưng chưa phải đúng tuyệt đối: bạn ấy vẫn có thể bỏ sót vài ô số tiền gõ dạng chữ, đọc 03/09 thành ngày 9 tháng 3, hoặc xoá nhầm hai khoản chi khác nhau chỉ vì trông giống nhau. Vì vậy, **với số liệu, luôn nhờ bạn ấy giải thích cách tính và tự kiểm vài dòng.** Đó là vế "dám hỏi lại" của bậc này.

!!! view "Góc nhìn"
    Rất nhiều lần mình không biết chính xác mình cần gì. Thay vì loay hoay, mình đưa nguyên đống bừa bộn cho bạn ấy và hỏi "bạn thấy làm được gì với cái này?". Có điều với số liệu thì luôn nhờ bạn ấy giải thích cách tính và tự kiểm vài dòng.

## Chuẩn bị

- **Công cụ:** ChatGPT ([chatgpt.com](https://chatgpt.com)) hoặc Claude ([claude.ai](https://claude.ai)). Bản miễn phí có thể bị giới hạn số file upload, lượt phân tích hoặc khả năng tạo file tải về. Giới hạn thay đổi thường xuyên, hãy xem trang chính thức.
- **Thời gian:** khoảng 40 phút (30 phút cho file chi phí, 10 phút cho file công nợ).
- **File:** hai file mẫu bên dưới, đều hư cấu.

[Tải file chi phí tháng 9 (.xlsx)](files/cap-3/chi-phi-thang-9.xlsx){.dl}

[Tải file công nợ mẫu (.xlsx)](files/cap-3/cong-no-mau.xlsx){.dl}

**`chi-phi-thang-9.xlsx`:** 300 dòng chi phí tháng 9/2026 của Công ty CP Phân phối Thiết bị Văn phòng Sao Mai. Các cột: Ngày, Nhà cung cấp, Nội dung, Số tiền (VND), Người đề nghị, Phòng ban. Mở ra cuộn xuống một phút, bạn sẽ thấy đủ kiểu lỗi quen thuộc. Đừng sửa gì cả.

**`cong-no-mau.xlsx`:** 25 khách hàng. Cột A Mã khách hàng, B Ngày hoá đơn, C Số tiền, D Ngày đã trả (trống nếu chưa trả). Cột E "Số ngày quá hạn" và F "Tình trạng" đang trống, chờ bạn nhờ viết công thức.

!!! tip "Bản miễn phí không cho upload file?"
    Bôi đen khoảng 30 dòng đầu (kể cả dòng tiêu đề), nhấn <kbd>Ctrl</kbd> + <kbd>C</kbd>, rồi dán thẳng vào khung chat. Bạn ấy vẫn đọc được dạng bảng, làm mẫu cách dọn, rồi chỉ cho bạn công thức hoặc thao tác để tự làm phần còn lại trong Excel.

!!! warning "Với file thật của bạn"
    File chi phí thật thường có tên nhân viên, có khi có cả số tài khoản. Theo [đèn giao thông dữ liệu](an-toan.html): thay tên người bằng mã (NV01, NV02…) hoặc xoá cột không cần thiết trước khi upload. Số tài khoản thì không đưa.

## Làm thật: từng bước

### Bước 1 · Hỏi thẳng bạn ấy: "Nên làm gì với file này?"

Mở cuộc trò chuyện mới, upload `chi-phi-thang-9.xlsx`, rồi gõ đúng tâm trạng của bạn:

```prompt 3a · Hỏi thẳng bạn ấy #chung #ketoan
File này lộn xộn quá, mình cũng chưa biết nên làm gì với nó. Bạn xem qua rồi gợi ý 5 việc bạn có thể làm giúp mình nhé.
```

Vì sao hiệu quả: bạn không phải biết trước tên các thao tác như "chuẩn hoá", "loại trùng", "pivot". Bạn ấy xem file, tự gọi tên vấn đề, rồi đề xuất. Bạn chỉ cần gật hoặc lắc.

!!! result "Bạn sẽ thấy"
    Bạn ấy mô tả nhanh file rồi đề xuất khoảng 5 việc, đại loại: thống nhất định dạng ngày, chuẩn hoá tên nhà cung cấp, đổi số tiền dạng chữ thành số, xoá dòng trùng, xử lý ô trống, phân loại, tổng hợp và vẽ biểu đồ. Thường bạn ấy đã kịp chỉ ra vài lỗi cụ thể, kiểu "Grab được viết theo 4 cách". Bạn vừa có kế hoạch dọn dẹp mà không cần nghĩ.

### Bước 2 · Nhờ làm, và nói rõ thành phẩm bạn muốn

Giờ đã biết có thể nhờ gì, hãy nói rõ bạn muốn nhận về cái gì:

```prompt 3b · Dọn, phân nhóm, tổng hợp, cho tải file #chung #ketoan
Làm hết mấy việc đó giúp mình nhé. Cụ thể:
1. Bỏ dòng trùng (dòng giống hệt nhau ở mọi cột).
2. Đưa cột Ngày về một định dạng ngày/tháng/năm. Tất cả đều là tháng 9/2026.
3. Thống nhất tên nhà cung cấp, mỗi nơi một tên chuẩn.
4. Đổi số tiền gõ dạng chữ thành số.
5. Ô trống thì ghi "Chưa rõ", đừng tự điền.
6. Thêm cột Nhóm chi phí với 5 nhóm: Văn phòng phẩm, Đi lại, Tiếp khách, Dịch vụ thuê ngoài, Khác.
Sau đó tổng hợp theo nhóm và theo tuần (tuần tính từ thứ Hai đến Chủ nhật), vẽ biểu đồ, và cho mình tải file Excel đã làm sạch. Làm xong thì liệt kê ngắn những gì bạn đã sửa, mỗi loại bao nhiêu dòng.
```

Mỗi dòng trong câu nhờ đều có lý do:

- "Tất cả đều là tháng 9/2026" để bạn ấy không đọc nhầm 03/09 thành ngày 9 tháng 3 theo kiểu Mỹ.
- "Đừng tự điền" ngăn bạn ấy "đoán cho đẹp" những ô đang trống.
- "Tuần từ thứ Hai đến Chủ nhật" để cách chia tuần khớp với đáp án.
- "Mỗi loại bao nhiêu dòng" cho bạn con số để kiểm tra ở bước sau.

!!! result "Bạn sẽ thấy"
    Bảng tổng hợp theo 5 nhóm, bảng theo tuần, một biểu đồ, một link hoặc nút để tải file `.xlsx` đã làm sạch, và danh sách những gì đã sửa (bao nhiêu dòng trùng, ô ngày, tên nhà cung cấp, ô trống). Hai nhóm Tiếp khách và Dịch vụ thuê ngoài thường chiếm phần lớn chi phí. Không thấy link tải thì nói: "Cho mình link tải file .xlsx nhé."

### Bước 3 · Dám hỏi lại ngay: giải thích 3 dòng bất kỳ

Khoan tải file về. Hỏi trước đã:

```prompt 3c · Giải thích 3 dòng và cách tính #chung #ketoan
Chọn ngẫu nhiên 3 dòng trong file gốc, cho mình biết số thứ tự dòng, rồi giải thích từng dòng: bạn đã sửa gì, xếp vào nhóm nào và vì sao. Chỉ luôn cho mình cách bạn tính tổng của nhóm Tiếp khách.
```

Mở file gốc, tìm đúng 3 dòng đó và so. Thêm một dòng **do chính bạn chọn**: dòng "lạ" nhất bạn thấy khi lướt file (số tiền có chữ "đ", ngày kiểu "05 tháng 9", ô trống…), rồi hỏi: "Dòng [số] bạn xử lý thế nào?"

Vì sao hiệu quả: kiểm 3–4 dòng, nhất là dòng khó, là cách nhanh nhất để biết bạn ấy làm cẩn thận hay làm ẩu. Giống kế toán trưởng kiểm xác suất chứng từ.

!!! result "Bạn sẽ thấy"
    Với mỗi dòng: giá trị gốc, giá trị sau khi sửa, nhóm được xếp và lý do. Ví dụ "Giấy note, bút dạ" của "VPP Bút Xanh" được đổi tên thành "Cửa hàng VPP Bút Xanh" và xếp vào Văn phòng phẩm. Phần cách tính cho thấy bạn ấy cộng những dòng nào, đã bỏ trùng chưa. Trả lời vòng vo hoặc không khớp file gốc thì yêu cầu làm lại.

### Bước 4 · Tải file về và tự kiểm bằng Excel

Giờ mới tải file về. Chưa quen tự kiểm trong Excel thì nhờ bạn ấy chỉ:

```prompt 3d · Chỉ cách tự kiểm trong Excel #chung #ketoan
Mình đã tải file về. Chỉ mình cách tự kiểm tra trong Excel trong 2 phút: đếm số dòng, tính lại tổng tiền, và lọc xem tên nhà cung cấp đã thống nhất chưa. Hướng dẫn từng bước, nói rõ bấm vào đâu.
```

Thường là: chọn cột Số tiền rồi nhìn tổng (Sum) ở thanh trạng thái góc dưới bên phải; bật bộ lọc (Filter) ở cột Nhà cung cấp để xem danh sách tên; nhìn số dòng cuối bảng.

!!! result "Bạn sẽ thấy"
    Một file gọn gàng: ngày cùng một định dạng, mỗi nhà cung cấp chỉ còn một tên trong bộ lọc, có cột Nhóm chi phí, có thể có thêm sheet tổng hợp và biểu đồ. Tổng ở thanh trạng thái phải khớp con số bạn ấy báo. Lệch thì hỏi ngay: "Excel của mình ra [số], bạn báo [số]. Vì sao lệch?"

### Bước 5 · Nhờ viết công thức Excel, giải thích bằng tiếng Việt

Nhiều khi bạn không cần bạn ấy làm hộ, mà cần một công thức để tự dùng mãi. Mở `cong-no-mau.xlsx` xem cấu trúc. Không cần upload, chỉ cần mô tả bảng bằng lời:

```prompt 3e · Viết công thức và giải thích bằng tiếng Việt #ketoan #chung
Bảng của mình: cột A mã khách hàng, cột B ngày hoá đơn, cột C số tiền, cột D ngày đã trả (trống nếu chưa trả). Dữ liệu từ dòng 2 đến dòng 26. Hạn trả là 30 ngày kể từ ngày hoá đơn.
Mình muốn cột E tính số ngày quá hạn (khoản chưa trả thì tính đến hôm nay, khoản đã trả thì để 0), cột F ghi "Đã trả", "Quá hạn" hoặc "Trong hạn".
Viết công thức giúp mình, giải thích từng phần thật dễ hiểu. Excel của mình dùng dấu ";".
```

Vì sao phải nói "dấu ;": Excel trên nhiều máy cài định dạng Việt Nam dùng dấu chấm phẩy để ngăn các phần trong công thức, vì dấu phẩy đã dùng làm dấu thập phân. Công thức viết bằng dấu phẩy dán vào sẽ báo lỗi.

Để bạn hình dung: ý tưởng cho cột E là "nếu ô D trống thì lấy hôm nay trừ ngày hoá đơn, trừ tiếp 30 ngày, không cho ra số âm; còn không thì bằng 0", viết ra có dạng kiểu `=IF(D2="";MAX(0;TODAY()-B2-30);0)`. Bạn không cần nhớ, bạn ấy sẽ viết và giải thích từng mảnh. Dán vào ô E2, F2, rồi kéo ô vuông nhỏ ở góc dưới bên phải ô xuống đến dòng 26.

!!! result "Bạn sẽ thấy"
    Hai công thức cho E2 và F2, giải thích bằng lời thường (IF là "nếu… thì… không thì…", TODAY() là "ngày hôm nay"…), kèm hướng dẫn kéo xuống. Dán vào Excel, cột F hiện "Đã trả", "Quá hạn" hoặc "Trong hạn" cho 25 khách. Số ngày quá hạn tự tăng mỗi ngày vì tính theo hôm nay. Nếu cột E hiện ra ngày tháng thay vì con số, chỉ cần đổi định dạng ô sang Number (Số).

!!! try "Thử ngay"
    Hỏi tiếp trong cùng cuộc trò chuyện: "Mình muốn cả dòng tự tô đỏ khi khách quá hạn, làm sao?". Bạn ấy sẽ hướng dẫn dùng Conditional Formatting (Định dạng có điều kiện), từng bước bấm vào đâu.

## Dám hỏi lại

Với số liệu, câu hỏi lại này nên thành phản xạ. Quay lại cuộc trò chuyện về file chi phí và hỏi:

```prompt 3f · Hỏi lại dòng trùng và tổng tiền #chung #ketoan
Bạn tìm được bao nhiêu dòng trùng? Liệt kê số thứ tự các dòng đó trong file gốc. Tổng chi phí sau khi bỏ trùng là bao nhiêu? Có dòng nào số tiền không phải dạng số không, bạn xử lý chúng thế nào?
```

So câu trả lời với đáp án bên dưới. Nếu lệch, đọc phần "Vì sao hay lệch" trong đáp án.

!!! check "Tự kiểm bằng chính Excel, không cần tin ai"
    - Trên **một bản sao** của file gốc, chọn toàn bảng, vào **Data → Remove Duplicates** (Excel tiếng Việt: thẻ Dữ liệu, nút loại bỏ trùng lặp). Excel sẽ báo đã xoá bao nhiêu dòng trùng.
    - Chọn cột Số tiền, nhìn **Sum** ở thanh trạng thái. Lưu ý: Excel **bỏ qua** những ô số tiền gõ dạng chữ, nên con số này sẽ thấp hơn tổng đúng. Tức là bạn tự làm cũng có thể mắc đúng lỗi mà bạn ấy hay mắc!
    - Trong file sạch, bật bộ lọc cột Nhà cung cấp: mỗi nhà cung cấp chỉ còn một tên.

!!! answer "Xem đáp án: dòng trùng, tổng tiền và các lỗi đã cài"
    **Dòng trùng: 8 dòng**, ở các dòng 87, 91, 134, 182, 184, 186, 207, 254 trong Excel (tính cả dòng tiêu đề; bạn ấy có thể đánh số lệch 1–2 dòng). File có 300 dòng dữ liệu, gồm 292 dòng thật và 8 dòng chép y nguyên.

    **Tổng chi phí sau khi bỏ trùng: 384.070.000đ.**

    **Các lỗi khác đã cài sẵn:**

    - **3 số tiền gõ dạng chữ** (kiểu "449.000đ"), ở các dòng 42, 174, 193.
    - **10 ô trống**, nằm ở các cột Nội dung, Người đề nghị, Phòng ban.
    - **109 ô ngày gõ dạng chữ**, trộn 4 kiểu: 01/09/2026, 2026-09-01, 2-9-26, "02 tháng 9".
    - **11 nhà cung cấp**, mỗi nơi được viết 3–6 kiểu (ví dụ: GRAB, Grab, Grab Vietnam, grab car).

    **Tổng theo nhóm (để tham khảo):** Văn phòng phẩm 48.279.000đ · Đi lại 30.258.000đ · Tiếp khách 121.722.000đ · Dịch vụ thuê ngoài 134.183.000đ · Khác 49.628.000đ. Một vài khoản có thể xếp vào hai nhóm (ví dụ "Taxi đón đối tác" là Đi lại hay Tiếp khách?), nên tổng từng nhóm của bạn ấy có thể lệch đôi chút. Tổng toàn bộ thì phải khớp.

    **Vì sao hay lệch:**

    - Ra **381.601.000đ**: bạn ấy quên đổi 3 số tiền dạng chữ (thiếu đúng 2.469.000đ, là tổng của ba khoản đó).
    - Ra con số **lớn hơn 384.070.000đ**: còn sót dòng trùng.
    - Số dòng trùng **nhiều hơn 8**: bạn ấy coi hai khoản chi khác nhau (cùng nhà cung cấp, cùng số tiền) là trùng. Hỏi lại: "Bạn coi thế nào là trùng? Chỉ xoá dòng giống hệt nhau ở mọi cột."

## Biến thể theo ngành

### ⚖️ Pháp lý

Danh sách hồ sơ vụ việc do nhiều người nhập cũng lộn xộn không kém file chi phí, mà trễ hạn thì hậu quả lớn hơn nhiều.

```prompt 3g · Dọn danh sách hồ sơ vụ việc #luat
Đây là danh sách hồ sơ vụ việc (đã thay tên khách hàng bằng mã). Bạn xem rồi gợi ý cách sắp xếp lại cho dễ theo dõi. Sau đó đánh dấu giúp mình những hồ sơ còn dưới 7 ngày là đến hạn, và giải thích bạn tính hạn thế nào.
```

### 💰 Kế toán – Tài chính

Sao kê tải từ ngân hàng thường rất khó đọc: diễn giải dài, viết tắt, không phân loại. Nhớ xoá số tài khoản trước khi upload.

```prompt 3h · Phân loại sao kê ngân hàng #ketoan
Đây là sao kê tài khoản tháng [9] tải từ ngân hàng (mình đã xoá số tài khoản). Phân loại các khoản thu chi theo nhóm hợp lý, tổng hợp theo nhóm, đánh dấu các khoản bất thường. Chọn 3 dòng giải thích cách bạn phân loại để mình kiểm tra.
```

### 🤝 Kinh doanh – CSKH

Danh sách đơn hàng là mỏ vàng nếu được dọn sạch: biết ai là khách quan trọng, ai đang rời đi.

```prompt 3i · Ai là khách hàng quan trọng nhất? #kinhdoanh
Đây là danh sách đơn hàng 3 tháng gần nhất. Gộp những tên khách hàng bị viết khác nhau, rồi cho mình biết: top 10 khách hàng theo doanh số, và những khách đang mua ít đi so với tháng trước. Nói rõ cách bạn tính.
```

### 🏗️ Vận hành – Xây dựng

Nhật ký sự cố ghi tay mỗi người một kiểu, nhưng chứa câu trả lời cho câu hỏi "nên ưu tiên bảo trì cái gì trước".

```prompt 3j · Phân tích nhật ký sự cố #vanhanh
Đây là nhật ký sự cố bảo trì 6 tháng. Chuẩn hoá tên hạng mục, rồi cho mình biết: hạng mục nào hỏng nhiều nhất, thời gian xử lý trung bình bao lâu, tháng nào nhiều sự cố nhất. Vẽ biểu đồ và cho mình tải file đã làm sạch.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Danh sách khách hàng gom từ nhiều nguồn, vừa trùng vừa sai chính tả
    - Ghi chú họp viết vội → biên bản có người phụ trách và hạn chót
    - Ảnh chụp bảng trắng sau buổi brainstorm → danh sách ý tưởng đã nhóm
    - Kết quả đăng ký sự kiện từ Google Form, mỗi người điền một kiểu
    - Ảnh chụp chồng hoá đơn công tác phí → bảng kê để quyết toán
!!! life "🏡 Đời sống"
    - Chụp ảnh 20 hoá đơn đi chợ → tổng hợp chi tiêu theo nhóm
    - Danh sách khách mời đám cưới lộn xộn → bảng có số người, số bàn, đã xác nhận chưa
    - Ảnh chụp tủ lạnh → thực đơn 3 ngày từ những gì đang có
    - Lịch học thêm của con rải rác trong nhiều nhóm Zalo → một lịch tuần gọn gàng
    - Ghi chép chi tiêu viết tay cả tháng → biết tiền đã đi đâu
:::

Thứ gì lộn xộn, dù là ảnh chụp, file hay ghi chú, cứ đưa cho bạn ấy và hỏi **"bạn giúp được gì với cái này?"**. Riêng con số thì luôn hỏi lại.

## Khi kết quả chưa như ý

| Bạn gặp | Vì sao | Nói với bạn ấy thế này |
|---|---|---|
| Không upload được file, hoặc báo hết lượt | Giới hạn của bản miễn phí | Dán khoảng 30 dòng vào chat: "Đây là 30 dòng mẫu. Làm mẫu cách dọn, rồi chỉ mình công thức hoặc thao tác để tự làm phần còn lại." |
| Tổng tiền lệch so với đáp án | Thường do quên đổi số tiền dạng chữ, hoặc bỏ trùng sai | "Liệt kê các dòng có số tiền không phải dạng số và cách bạn xử lý. Bạn coi thế nào là trùng? Tính lại tổng." |
| Ô trống bị tự điền nội dung | Bạn ấy muốn bảng trông "đầy đủ" | "Không tự điền ô trống. Ghi 'Chưa rõ' và liệt kê các dòng đó cho mình." |
| Ngày bị hiểu nhầm (03/09 thành 9 tháng 3) | Bạn ấy đọc theo kiểu Mỹ: tháng trước, ngày sau | "Tất cả ngày đều thuộc tháng 9/2026, định dạng Việt Nam ngày/tháng/năm. Kiểm tra lại cột Ngày." |
| Phân nhóm lạ, ví dụ cà phê bị xếp vào Văn phòng phẩm | Nội dung mơ hồ, bạn ấy tự đặt quy tắc | "Cho mình xem quy tắc bạn dùng để phân nhóm. Sửa: [khoản] thuộc nhóm [X]. Áp dụng lại cho cả file." |
| Công thức dán vào Excel báo lỗi | Sai dấu ngăn cách (phẩy hay chấm phẩy), hoặc lệch cột, lệch dòng | "Excel báo lỗi [dán nguyên thông báo]. Máy mình dùng dấu ';', dữ liệu bắt đầu từ dòng 2. Sửa giúp mình." |

## Tự kiểm tra

- [ ] Đã để bạn ấy xem file và gợi ý những việc nên làm.
- [ ] Đã có file sạch: có cột Nhóm chi phí, tổng hợp theo nhóm và theo tuần, có biểu đồ.
- [ ] Đã nhờ bạn ấy giải thích 3 dòng bất kỳ và tự đối chiếu với file gốc.
- [ ] Đã hỏi số dòng trùng và tổng tiền, rồi so với đáp án.
- [ ] Đã có công thức cho cột E, F của file công nợ và chạy được trong Excel.

## Đi xa hơn

- **Ghi lại "công thức nấu ăn".** "Viết lại các bước bạn vừa dọn thành hướng dẫn, để tháng sau mình đưa file mới là làm y hệt." Hoặc dạy bạn ấy nhớ luôn ở [Bậc 5](cap-5.html).
- **Chữa tận gốc.** Hỏi: "Làm sao để tháng sau file nhập liệu không lộn xộn nữa?" Bạn ấy có thể gợi ý danh sách thả xuống (Data Validation) cho tên nhà cung cấp và chỉ bạn làm từng bước.
- **Tự động hoá bằng Power Query.** Tháng nào cũng dọn một kiểu file? Nhờ bạn ấy hướng dẫn dùng Power Query: thiết lập một lần, tháng sau chỉ cần bấm làm mới (Refresh).
- **Theo dõi khách trả trễ.** File công nợ có khách đã trả nhưng trả sau hạn. Hỏi tiếp: "Thêm cột G tính số ngày trả trễ cho những khoản đã trả."
- **Nói tiếp, đừng mở chat mới.** File đã sạch, giờ cần báo cáo cho sếp? Cứ nói tiếp trong cùng cuộc trò chuyện. Đó chính là [Bậc 4](cap-4.html): một cuộc trò chuyện, nhiều thành phẩm.
