---
title: Tra cứu có nguồn: tìm kiếm web và nghiên cứu sâu
kind: topic
eyebrow: Chuyên đề
summary: Biết khi nào bạn ấy đang "nhớ", khi nào đang tìm, đòi nguồn có link và ngày, rồi tự kiểm chứng trước khi dùng thông tin.
time: 30 phút
tools: ChatGPT, Claude, Gemini, Perplexity · NotebookLM
free: Một phần
order: 3
---

## Khi nào dùng

Kiến thức của người bạn AI dừng ở một thời điểm, gọi là **mốc kiến thức**. Hỏi chuyện hay thay đổi như luật, giá cả, tin doanh nghiệp, bạn ấy vẫn trả lời trôi chảy bằng "trí nhớ", và trí nhớ đó có thể đã cũ. Bật **tìm kiếm web**, bạn ấy đọc các trang trên mạng rồi mới trả lời, kèm link. Nhớ một câu: **không có link là đang trả lời từ trí nhớ**. Không chắc thì hỏi thẳng: "câu này bạn nhớ hay bạn vừa tìm?"

| Bạn cần | Nên dùng |
|---|---|
| Kiến thức nền, ít thay đổi | Hỏi bình thường |
| Thông tin mới, cần link để kiểm | Tìm kiếm web, hoặc Perplexity |
| Câu hỏi lớn, cần đọc nhiều nguồn | Deep Research (ChatGPT, Gemini), Research (Claude) |
| Trả lời chỉ dựa trên tài liệu của bạn | NotebookLM |

Muốn bạn ấy tìm, chắc nhất là nói thẳng "tìm trên mạng giúp mình". Nghiên cứu sâu thường bị giới hạn lượt dùng; kiểm tra trang chính thức vì gói và giới hạn thay đổi thường xuyên.

## Cách nhờ

Boris Cherny, người tạo ra Claude Code, khuyên nói chuyện với AI như với đồng nghiệp và nói rõ **3 điều**:

1. **Bạn muốn gì:** câu hỏi cụ thể, dùng vào việc gì, cho ai đọc.
2. **Bỏ bao nhiêu công sức:** tra nhanh vài nguồn, hay tìm thật kỹ.
3. **Kiểm tra thế nào:** mỗi ý có link và ngày, ưu tiên nguồn chính thức.

Rồi thêm: **thiếu gì thì hỏi mình**.

```prompt TC1 · Tra cứu có nguồn: câu mẫu #chung
Tìm trên mạng giúp mình: [câu hỏi]. Mình cần thông tin này để [dùng vào việc gì, cho ai đọc].
Công sức: [tra nhanh, 3–5 nguồn là đủ / tìm kỹ, đọc nhiều nguồn uy tín].
Cách kiểm: mỗi ý ghi link và ngày, ưu tiên trang chính thức. Chưa có nguồn thì ghi "chưa có nguồn", đừng đoán. Cuối cùng cho mình biết bạn đã kiểm được gì, chưa kiểm được gì.
Thiếu thông tin gì thì hỏi mình trước nhé.
```

## Làm thật

### Tình huống 1 · Văn bản pháp luật còn hiệu lực không?

Ai cũng từng trích một thông tư rồi mới biết nó đã bị thay thế. Cứ nhờ tìm, nhưng **bắt buộc tự mở nguồn ra xem**.

```prompt TC2 · Kiểm tra hiệu lực văn bản #luat #chung
Mình đang dùng [tên và số hiệu văn bản] để [soạn hợp đồng / trả lời khách]. Tìm trên mạng giúp mình: văn bản này còn hiệu lực không? Đã bị sửa đổi, thay thế bởi văn bản nào, từ ngày nào? Dẫn link nguồn chính thức: Cơ sở dữ liệu quốc gia về văn bản pháp luật (vbpl.vn), Công báo, hoặc trang của cơ quan ban hành. Thông tin chỉ thấy ở trang tư nhân thì ghi rõ.
```

!!! result "Bạn sẽ thấy"
    Câu trả lời kèm link, nhiều khi dẫn tới thuvienphapluat.vn, trang tư nhân phổ biến, tiện tra cứu. Khi cần chắc chắn, tự mở vbpl.vn hoặc Công báo, gõ số hiệu, đối chiếu ngày hiệu lực và văn bản sửa đổi, thay thế. Địa chỉ trang có thể đổi, khi đó tìm theo tên cơ quan.

### Tình huống 2 · So sánh 3–5 nhà cung cấp

Thay vì mở mười tab, nhờ bạn ấy lập bảng, rồi bạn chỉ kiểm những ô quan trọng.

```prompt TC3 · So sánh nhà cung cấp #kinhdoanh #vanhanh
Công ty mình khoảng [số] người, ở [thành phố], cần nhà cung cấp [dịch vụ]. Tìm trên mạng 3–5 nơi, lập bảng theo [giá công bố, điều kiện hợp đồng, hỗ trợ], mỗi ô kèm nguồn và ngày. Không có thông tin công khai thì ghi "không công bố", đừng ước đoán. Gợi ý thêm 5 câu nên hỏi từng nơi.
```

!!! result "Bạn sẽ thấy"
    Một bảng có link và vài ô "không công bố", vì giá thường phải xin báo giá. Ô đó là dấu hiệu tốt: bạn ấy đang trung thực. Bảng là điểm khởi đầu, chưa phải kết luận.

### Tình huống 3 · Tìm hiểu đối tác trước cuộc gặp

**Chỉ tìm thông tin công khai về doanh nghiệp**, đừng nhờ bạn ấy đào đời tư một cá nhân.

```prompt TC4 · Hồ sơ nhanh về đối tác #kinhdoanh #chung
Chiều nay mình gặp [tên công ty], mã số thuế [___] nếu có, bàn về [nội dung]. Tìm trên mạng thông tin công khai: họ làm gì, quy mô, tin nổi bật 12 tháng gần đây, mỗi ý kèm link và ngày. Gọn nửa trang, thêm 5 câu nên hỏi. Thấy công ty trùng tên thì báo mình, đừng tự chọn.
```

!!! result "Bạn sẽ thấy"
    Nửa trang có link, kèm 5 câu hỏi. Cẩn thận nhất là **trùng tên**: tin công ty này có thể bị ghép sang công ty kia. Đối chiếu mã số thuế hoặc địa chỉ trước khi nhắc chi tiết nào.

### Tình huống 4 · Câu hỏi lớn: giao cho nghiên cứu sâu

"Công ty 200 người nên chọn phần mềm kế toán nào?" không trả lời được bằng năm cái link. Hãy dùng **nghiên cứu sâu**: Deep Research ở ChatGPT, Gemini; Research ở Claude (tên gọi có thể thay đổi); Perplexity cũng có chế độ tìm sâu. Bạn ấy tự đọc hàng chục nguồn rồi viết báo cáo dài có trích dẫn. Theo Andrej Karpathy, khoảng cách giữa người dùng AI đến một phần từ độ lớn của việc mình dám giao; đây là một bước nhỏ đi về phía đó.

```prompt TC5 · Giao đề bài nghiên cứu sâu #chung
Mình cần báo cáo về [chủ đề] để [quyết định gì, trình ai]. Phạm vi: [khu vực, giai đoạn]. Ba câu mình quan tâm nhất: [___].
Cứ đọc kỹ, ưu tiên nguồn chính thức, hạn chế blog. Mọi con số kèm nguồn và ngày. Tách riêng điều nhiều nguồn xác nhận, điều chỉ một nguồn nói, chỗ các nguồn mâu thuẫn. Cuối cùng liệt kê câu chưa trả lời được.
```

!!! result "Bạn sẽ thấy"
    Một báo cáo nhiều trang, trích dẫn đánh số. Đọc tóm tắt, rồi đi thẳng tới phần "mâu thuẫn" và "chưa trả lời được". Muốn hỏi tiếp **chỉ** trên tài liệu của mình, tải văn bản gốc vào NotebookLM: mỗi ý có trích dẫn bấm được, như ở [Bậc 2](cap-2.html).

## Dám hỏi lại

Có link chưa chắc đã đúng. Coi chừng **nguồn không tồn tại** hoặc không hề nói điều đó; **trích sai, lệch năm**; **blog đứng ngang trang chính thức**.

```prompt TC6 · Rà lại nguồn #meta #chung
Rà lại nguồn bạn vừa dùng: nguồn nào chính thức, nguồn nào báo chí, nguồn nào blog hay trang tư nhân? Nguồn nào cũ hơn 12 tháng? Nguồn nào mâu thuẫn nhau, ở điểm nào? Ý nào chỉ dựa trên một nguồn?
```

!!! check "Kiểm chứng trong 5 phút"
    - Mở ít nhất **2 nguồn quan trọng nhất**, nhấn <kbd>Ctrl</kbd> + <kbd>F</kbd> tìm đúng câu được trích.
    - Xem ngày đăng; văn bản pháp luật thì xem ngày hiệu lực trên nguồn chính thức.
    - Con số quan trọng cần 2 nguồn độc lập, trong đó 1 nguồn chính thức.
    - Link chết hoặc không thấy thông tin: coi như **chưa có nguồn**, và nói lại với bạn ấy.

## Biến thể theo ngành

### ⚖️ Pháp lý

Lập "bản đồ văn bản" đang áp dụng để không trích nhầm văn bản hết hiệu lực.

```prompt TC7 · Bản đồ văn bản một vấn đề #luat
Tìm các văn bản pháp luật đang áp dụng về [vấn đề]. Lập bảng: số hiệu, cơ quan ban hành, ngày hiệu lực, tình trạng hiệu lực, link chính thức. Dự thảo để bảng riêng. Không chắc thì ghi "cần kiểm tra".
```

### 💰 Kế toán – Tài chính

Thay đổi về thuế, hoá đơn đều có văn bản gốc; link phải dẫn về đó.

```prompt TC8 · Thay đổi mới về thuế, hoá đơn #ketoan
Tìm các thay đổi về [thuế GTGT / hoá đơn điện tử] có hiệu lực từ [kỳ] mà công ty [ngành] cần lưu ý. Mỗi thay đổi ghi nội dung, ngày hiệu lực, số hiệu và link văn bản gốc. Tin từ báo, blog thì ghi là nguồn thứ cấp.
```

### 🤝 Kinh doanh – CSKH

Thông tin đối thủ cũ đi rất nhanh, nên luôn đòi ngày.

```prompt TC9 · Cập nhật nhanh về đối thủ #kinhdoanh
Tìm thông tin công khai mới nhất về [2–3 đối thủ] mảng [sản phẩm]: sản phẩm mới, khuyến mãi đang chạy. Lập bảng kèm link và ngày. Cũ hơn 3 tháng thì đánh dấu "có thể đã cũ".
```

### 🏗️ Vận hành – Xây dựng

Giá vật liệu và quy chuẩn đều có nguồn chính thức, đòi đúng kỳ, đúng địa phương.

```prompt TC10 · Tìm công bố giá, quy chuẩn #vanhanh
Tìm công bố giá vật liệu xây dựng kỳ gần nhất của Sở Xây dựng [tỉnh, thành] cho [vật liệu], và quy chuẩn đang áp dụng cho [hạng mục]. Ghi kỳ, số hiệu, link chính thức. Không thấy thì nói không thấy, đừng lấy số từ trang rao bán.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Tra mức xử phạt hiện hành trước khi tư vấn
    - So 3 khoá đào tạo cho phòng
    - Tìm hiểu khách trước khi chào hàng
    - Mẫu tờ khai mới nhất của cơ quan nhà nước
!!! life "🏡 Đời sống"
    - So 3 gói bảo hiểm sức khoẻ
    - Thủ tục làm hộ chiếu hiện hành
    - Quy định hành lý trước chuyến bay
    - Một tin "nghe nói" bắt nguồn từ đâu
:::

Câu trả lời **có thể đã thay đổi**, hoặc sẽ dẫn tới một quyết định? Nhờ tìm có nguồn, rồi tự mở ít nhất hai link.

## Tự kiểm tra

- [ ] Phân biệt được trả lời từ trí nhớ và trả lời có tìm kiếm.
- [ ] Đã dùng câu mẫu TC1 cho một câu hỏi thật.
- [ ] Đã tự kiểm tra hiệu lực một văn bản trên vbpl.vn hoặc Công báo.
- [ ] Đã mở 2 link và tìm thấy đúng câu được trích.

## Đi xa hơn

- **Hỏi chéo hai công cụ.** Chỗ hai bên nói khác nhau là chỗ cần tự đọc, như ở [Bậc 2](cap-2.html).
- **Biến tra cứu định kỳ thành trợ lý.** Project hoặc Gem dặn sẵn "luôn tìm, kèm link và ngày", như ở [Bậc 5](cap-5.html).
- **Đề bài nghiên cứu càng rõ, báo cáo càng dùng được.** Cách viết ở [Giao việc như giao cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html).
- **Điều gõ vào ô tìm kiếm cũng là dữ liệu.** Xem [An toàn](an-toan.html) trước khi gõ tên khách.
