---
title: Tự tạo công cụ không cần code
kind: lesson
level: 6
how: Thiếu công cụ? Nhờ bạn ấy làm luôn
summary: Kể vấn đề bằng lời thường, để bạn ấy hỏi lại rồi làm ra một ứng dụng nhỏ chạy được ngay, sửa bằng cách nói chuyện tiếp.
time: 30–45 phút
tools: Claude hoặc ChatGPT
free: Có
---

## Bạn sẽ làm được gì

- Biến một nhu cầu như "nhóm mình hay quên hạn" thành một ứng dụng nhỏ chạy ngay trên trình duyệt, không viết dòng code nào.
- Sửa lỗi, thêm tính năng, đổi giao diện chỉ bằng cách nói chuyện tiếp.
- Lưu app thành file hoặc link, mở được trên điện thoại.
- Kiểm tra app có tính đúng không, thay vì chỉ nhìn thấy đẹp.
- Dám thử ý tưởng táo bạo nhất của mình: một công cụ, một trò chơi, cho công việc hay cho con.

## Vì sao cách nhờ này hiệu quả

Ai đi làm cũng từng nghĩ: "Giá mà có một công cụ nhỏ làm đúng việc này." Trước đây, ý nghĩ đó thường dừng lại ở đó, vì phải nhờ phòng IT, chờ ngân sách, hoặc tự mày mò Excel đến khuya.

Giờ người bạn AI viết được code. Bạn không cần biết code, chỉ cần **kể vấn đề** như kể cho một người bạn làm IT. Claude (với Artifacts) và ChatGPT (với Canvas) có thể hiện ứng dụng ngay cạnh cuộc trò chuyện để bạn bấm thử.

Bí quyết vẫn là chiêu quen thuộc: bạn không cần mô tả hoàn hảo, cứ **để bạn ấy hỏi lại**. Và khi app chưa chạy hay chưa đẹp, đừng bỏ cuộc. Cứ kể mình muốn gì, dùng thế nào, chỗ nào chưa được thì bảo sửa. Nhiều công cụ, trang web, kể cả bài trình chiếu đi kèm website này, đều được làm theo đúng cách đó: không viết code, chỉ trò chuyện và sửa dần.

Đây cũng là bậc mà ba điều của Boris Cherny phát huy rõ nhất: nói rõ **muốn gì** (app giải quyết vấn đề gì, cho ai dùng), **bỏ bao nhiêu công sức** (bản thử nhanh, hay bản dùng thật cho cả nhóm), và **kiểm tra thế nào** ("tự thử với vài việc có hạn khác nhau xem màu có đúng không"). Xem [Giao việc như giao cho đồng nghiệp](giao-viec-nhu-dong-nghiep.html).

!!! view "Góc nhìn"
    Thất bại không phải điểm dừng, mà là câu tiếp theo trong cuộc trò chuyện. Hầu như không có công cụ nào chạy ngon ngay lần đầu. Mình chỉ nói tiếp thôi.

## Chuẩn bị

- **Công cụ:** Claude (Artifacts) hoặc ChatGPT (Canvas). Bản miễn phí làm được, nhưng có giới hạn lượt dùng; kiểm tra trang chính thức vì gói và giới hạn thay đổi thường xuyên.
- **Máy tính** thao tác dễ hơn điện thoại. App làm xong vẫn mở được trên điện thoại.
- **Một vấn đề thật** của nhóm bạn mà chưa có công cụ phù hợp. Không có cũng được, bài có sẵn ví dụ.
- **Kết quả mẫu để so sánh.** Đây là app theo dõi tiến độ mà bài này hướng tới, mở bằng trình duyệt là chạy:

[Mở app mẫu theo dõi tiến độ (.html)](files/cap-6/app-mau-theo-doi-tien-do.html){.dl}

- **Thời gian:** 30–45 phút.

!!! warning "Cẩn thận với dữ liệu thật"
    App bạn ấy làm có thể chia sẻ bằng link, và ai có link là mở được. Đừng nhập dữ liệu khách hàng, số tài khoản, thông tin cá nhân thật vào app đã chia sẻ công khai. Luôn thử bằng dữ liệu mẫu trước.

## Làm thật: từng bước

### Bước 1 · Kể vấn đề, để bạn ấy hỏi lại

Đừng cố mô tả một phần mềm. Cứ kể vấn đề, như than với đồng nghiệp:

```prompt 6a · Hỏi thẳng bạn ấy #chung #vanhanh
Nhóm mình hay quên hạn công việc. Mình muốn một công cụ nhỏ theo dõi tiến độ, cảnh báo trước hạn 5 ngày, nhưng không biết mô tả thế nào. Hỏi mình vài câu rồi làm luôn nhé. Giao diện tiếng Việt, hiện đại.
```

!!! result "Bạn sẽ thấy"
    Bạn ấy hỏi lại 3–6 câu: nhóm mấy người, mỗi việc cần ghi thông tin gì, cảnh báo bằng màu hay bằng thông báo, có cần lọc, xuất file không, dùng trên máy tính hay điện thoại. Có lúc bạn ấy hăng hái làm luôn một bản mà chưa hỏi. Cũng không sao, sang Bước 2 bạn bổ sung sau.

!!! tip "Chưa biết trả lời gì? Dùng các ý này"
    - Nhóm 5 người, đang triển khai phần mềm kế toán mới.
    - Mỗi việc có: tên việc, người phụ trách, ngày bắt đầu, hạn chót, trạng thái (Chưa làm, Đang làm, Xong).
    - Màu: đỏ là quá hạn, cam là còn 5 ngày trở xuống, xanh là đã xong.
    - Lọc theo người phụ trách, có thanh % tiến độ, có nút xuất CSV để mở bằng Excel.
    - Có sẵn khoảng 8 việc mẫu để xem thử.

### Bước 2 · Trả lời, rồi để bạn ấy làm luôn

Trả lời từng câu như nhắn tin. Muốn nhanh thì gộp một lần:

```prompt 6b · Trả lời gộp và làm luôn #chung
Mình trả lời gộp nhé: nhóm 5 người. Mỗi việc có tên việc, người phụ trách, ngày bắt đầu, hạn chót, trạng thái (Chưa làm / Đang làm / Xong). Tô đỏ việc quá hạn, cam việc còn 5 ngày trở xuống, xanh việc đã xong. Cần lọc theo người phụ trách, thanh % tiến độ cả dự án, nút xuất CSV để mở bằng Excel. Có sẵn 8 việc mẫu. Làm luôn đi.
```

!!! result "Bạn sẽ thấy"
    Sau vài chục giây, app hiện ra. Trên Claude, app nằm ở khung bên cạnh (Artifact). Trên ChatGPT, app nằm trong Canvas; nếu chỉ thấy code, tìm nút xem trước. Thường có: vài ô thống kê (tổng việc, đã xong, sắp đến hạn, quá hạn), thanh tiến độ, bảng việc tô màu, ô lọc, nút xuất CSV.

    So với [app mẫu](files/cap-6/app-mau-theo-doi-tien-do.html): app của bạn sẽ không giống hệt, và không cần giống. Miễn đúng những gì bạn đã kể.

### Bước 3 · Dùng thử như người dùng thật

Đừng chỉ nhìn, hãy bấm. Đổi hạn chót một việc xuống còn 3 ngày nữa: dòng đó phải chuyển cam. Đổi trạng thái thành "Xong": dòng chuyển xanh, % tiến độ tăng. Thêm một việc, lọc theo một người, bấm xuất CSV rồi mở bằng Excel. Không biết thử gì? Hỏi thẳng:

```prompt 6c · Nhờ bạn ấy chỉ cách thử #chung
Chỉ mình 5 thao tác để thử xem app chạy đúng chưa. Mỗi thao tác ghi rõ: bấm vào đâu, và nếu đúng thì mình phải thấy gì.
```

!!! result "Bạn sẽ thấy"
    Một danh sách thử nghiệm ngắn, rõ ràng như hướng dẫn cho người mới. Làm lần lượt. Chỗ nào không giống mô tả, ghi lại: đó là "đơn đặt hàng" cho Bước 4.

### Bước 4 · Nói tiếp để sửa và nâng cấp

Đây là lúc cuộc trò chuyện trở nên thú vị. Muốn thêm gì, sửa gì, cứ nói như nói với người ngồi cạnh. Ba kiểu câu bạn sẽ dùng nhiều nhất:

```prompt 6d · Thêm tính năng #chung
Thêm cột mức ưu tiên (Cao / Trung bình / Thấp). Việc ưu tiên cao và sắp đến hạn xếp lên đầu.
```

```prompt 6e · Báo lỗi như nói chuyện #chung
Cái nút [Xuất CSV] bấm không ăn, bạn sửa giúp. Mình bấm vào thì [không có gì xảy ra / hiện thông báo: dán nội dung lỗi vào đây].
```

```prompt 6f · Đổi giao diện #chung #doisong
Đẹp hơn được không? Mình muốn kiểu [vui vẻ, nhiều màu, dành cho trẻ con / tối giản, tông xanh dương / chữ thật to cho người lớn tuổi].
```

Khi báo lỗi, kể đủ 3 ý: **bấm gì, mong thấy gì, thực tế thấy gì**. Gửi kèm ảnh chụp màn hình càng tốt. Bạn ấy không nhìn thấy màn hình của bạn, nên càng tả rõ, sửa càng trúng.

!!! result "Bạn sẽ thấy"
    Mỗi câu bạn nói, app có một phiên bản mới. Thường sửa 1–2 vòng là xong một lỗi. Nếu bản mới tệ hơn bản cũ, nói: *"Quay lại bản trước, chỉ sửa [điều bạn muốn]."* Sau 5–10 câu nói chuyện, bạn sẽ có một công cụ đúng ý hơn hẳn bản đầu.

### Bước 5 · Lưu, chia sẻ, mở trên điện thoại

- **Trên Claude:** Artifact có thể chia sẻ thành link. Tìm nút chia sẻ hoặc Publish (tên nút có thể khác tuỳ phiên bản). Ai có link là mở được.
- **Trên ChatGPT:** tìm nút chia sẻ trong Canvas hoặc trong cuộc trò chuyện. Tính năng thay đổi theo thời gian, kiểm tra trên giao diện của bạn.
- **Cách chắc chắn nhất, dùng được với mọi công cụ:** nhờ bạn ấy gộp thành một file HTML, lưu về máy, mở bằng trình duyệt. Gửi file qua Zalo hay email, người nhận bấm mở là chạy.

```prompt 6g · Gộp thành một file HTML #chung
Gộp toàn bộ app thành một file HTML duy nhất, không cần cài đặt gì, mở được bằng trình duyệt trên máy tính và điện thoại. Hướng dẫn mình cách lưu file này về máy, từng bước, cho người không rành máy tính.
```

!!! result "Bạn sẽ thấy"
    Bạn ấy đưa toàn bộ code kèm cách lưu. Thường là: có nút tải về thì bấm; không có thì copy code, dán vào Notepad, lưu với tên `theo-doi-tien-do.html` (chọn mã hoá UTF-8 nếu được hỏi, để giữ tiếng Việt), rồi bấm đúp để mở. Từ đây, app là của bạn, không phụ thuộc vào cuộc trò chuyện nữa.

### Bước 6 · Thử thách táo bạo

Giờ quên ví dụ đi. Nghĩ về **công cụ hoặc trò chơi táo bạo nhất** bạn từng muốn có. Càng "điên" càng tốt: một trò chơi ôn bảng cửu chương với nhân vật khủng long con bạn mê, một trò đố vui về quy chế công ty cho nhân viên mới, một bảng tính lãi vay mua nhà so sánh 3 ngân hàng, một vòng quay chọn món ăn tối cho cả nhà.

```prompt 6h · Thử thách táo bạo #chung #doisong
Mình có một ý tưởng hơi "điên": [mô tả công cụ hoặc trò chơi bạn muốn, càng cụ thể càng tốt: dành cho ai, để làm gì, vui hay nghiêm túc]. Mình không biết code. Hỏi mình vài câu rồi làm luôn bản đầu tiên. Mình sẽ cùng bạn sửa dần.
```

!!! result "Bạn sẽ thấy"
    Bản đầu tiên thường chạy được nhưng còn thô: luật chơi chưa chuẩn, màu chưa ưng, nút hơi nhỏ trên điện thoại. Hoàn toàn bình thường. Chơi thử, kể cho bạn ấy điều bạn thấy, sửa tiếp. Nếu hết lượt dùng giữa chừng, lưu file HTML lại; hôm sau mở cuộc trò chuyện mới, dán code vào và nói *"Đây là app mình đang làm dở, mình muốn sửa tiếp [điều bạn muốn]."*

## Dám hỏi lại

App trông đẹp chưa chắc đã tính đúng. Với công cụ theo dõi hạn, sai một ngày là cảnh báo vô nghĩa. Hỏi bạn ấy giải thích bằng lời thường, rồi tự thử:

```prompt 6i · Hỏi lại cách app tính #chung
Giải thích cho mình bằng lời thường: app quyết định một việc là đỏ, cam hay xanh theo quy tắc nào? Việc có hạn đúng 5 ngày nữa thì màu gì? Hạn đúng hôm nay thì sao? Dữ liệu mình nhập được lưu ở đâu, tải lại trang có mất không, người khác có xem được không?
```

!!! check "Dám hỏi lại"
    - **Thử 3 mốc:** tạo một việc hạn hôm qua (phải đỏ), một việc hạn đúng 5 ngày nữa (phải cam), một việc hạn 6 ngày nữa (không tô cảnh báo). App mẫu tô cam cả việc có hạn đúng hôm nay.
    - **Thử lưu:** thêm một việc, tải lại trang. Việc đó còn không? Tuỳ nơi chạy app, dữ liệu có thể không được giữ lại. Mất thì hỏi bạn ấy cách lưu, ví dụ thêm nút xuất và nhập file dữ liệu.
    - **Thử xuất:** bấm xuất CSV, mở bằng Excel. Tiếng Việt bị lỗi font thì nói: *"File CSV mở bằng Excel bị lỗi tiếng Việt, sửa giúp."*
    - **Hiểu chỗ lưu:** với app mẫu, dữ liệu nằm trong trình duyệt của từng máy. Mỗi người mở file sẽ thấy bản của riêng mình, chưa phải bảng dùng chung cho cả nhóm.

## Biến thể theo ngành

### ⚖️ Pháp lý

Checklist rà soát hợp đồng dạng app: tick từng mục, ghi chú, chấm mức rủi ro, in ra một trang tóm tắt.

```prompt 6j · Checklist rà soát hợp đồng #luat
Mình làm pháp chế. Mình muốn một checklist rà soát hợp đồng mua bán dạng app: tick từng mục (thanh toán, giao nhận, chuyển rủi ro, bảo hành, phạt vi phạm, giải quyết tranh chấp…), mỗi mục có ô ghi chú và mức rủi ro, cuối cùng in ra một trang tóm tắt. Hỏi mình vài câu rồi làm luôn.
```

### 💰 Kế toán – Tài chính

Bảng tính khấu hao tài sản cố định có biểu đồ, tự ra lịch khấu hao từng tháng.

```prompt 6k · Bảng tính khấu hao #ketoan
Mình muốn một công cụ tính khấu hao tài sản cố định theo phương pháp đường thẳng: nhập nguyên giá, ngày bắt đầu, số năm sử dụng; ra bảng khấu hao từng tháng, từng năm, có biểu đồ giá trị còn lại, xuất được CSV. Hỏi mình vài câu trước khi làm, và ghi rõ công thức để mình kiểm tra.
```

### 🤝 Kinh doanh – CSKH

Công cụ lập báo giá tự tính chiết khấu và VAT, in ra gửi khách ngay.

```prompt 6l · Công cụ lập báo giá #kinhdoanh
Mình muốn một công cụ lập báo giá: chọn sản phẩm từ danh sách, nhập số lượng, tự tính chiết khấu theo bậc số lượng, thuế VAT (mình tự nhập tỷ lệ), tổng tiền bằng số và bằng chữ, in ra một trang báo giá có chỗ cho logo công ty. Hỏi mình vài câu rồi làm luôn, dùng dữ liệu sản phẩm mẫu trước.
```

### 🏗️ Vận hành – Xây dựng

Sổ theo dõi bảo trì: ghi sự cố, thống kê hạng mục hỏng nhiều, nhắc lịch bảo dưỡng định kỳ.

```prompt 6m · Sổ theo dõi bảo trì #vanhanh
Mình quản lý vận hành toà nhà. Mình muốn một sổ theo dõi bảo trì dạng app: ghi sự cố theo hạng mục (thang máy, điện, nước, phòng cháy chữa cháy), ngày báo, ngày xử lý, người xử lý, chi phí; thống kê hạng mục hỏng nhiều nhất và thời gian xử lý trung bình; nhắc lịch bảo dưỡng định kỳ sắp tới. Hỏi mình vài câu rồi làm luôn.
```

## Còn việc gì giống vậy?

:::cols
!!! work "💼 Công việc"
    - Bảng theo dõi hạn hồ sơ, tô màu hồ sơ sắp đến hạn.
    - Công cụ xếp lịch trực, chia ca cho nhóm nhỏ.
    - Máy tính hoa hồng bán hàng theo bậc doanh số.
    - Trò đố vui về quy chế công ty cho nhân viên mới.
    - Dashboard xem nhanh từ một bảng Excel (đã che dữ liệu nhạy cảm).
!!! life "🏡 Đời sống"
    - Bảng chi tiêu gia đình có biểu đồ theo tháng.
    - Lịch tập gym, đánh dấu buổi đã tập.
    - Bảng tính lãi vay mua nhà, so sánh nhiều phương án.
    - Trò chơi ôn bảng cửu chương cho con, theo nhân vật con thích.
    - Thiệp mời sinh nhật hoặc thiệp cưới dạng trang web.
    - Vòng quay chọn món ăn tối cho cả nhà.
:::

Lần tới bạn nghĩ "giá mà có một công cụ…", hãy nói nguyên câu đó với bạn ấy.

## Khi kết quả chưa như ý

| Bạn gặp | Vì sao | Nói với bạn ấy thế này |
|---|---|---|
| Chỉ thấy code, không thấy app | Công cụ chưa mở chế độ xem trước | "Hiển thị app để mình bấm thử." Hoặc dùng câu 6g để gộp thành file HTML. |
| Bấm nút không có phản ứng | Code có lỗi | "Nút [tên nút] bấm không ăn. Mình bấm thì thấy [mô tả]. Sửa giúp." Gửi kèm ảnh chụp màn hình. |
| Sửa chỗ này, hỏng chỗ khác | Bản sửa đụng tới phần đang chạy tốt | "Bản trước nút [X] chạy được, bản này hỏng. Giữ nguyên mọi thứ khác, chỉ sửa [Y]." |
| Tải lại trang là mất dữ liệu | Nơi chạy app không cho lưu dữ liệu | "Thêm nút Xuất và Nhập dữ liệu để mình tự lưu ra file." Hoặc tải file HTML về máy rồi mở bằng trình duyệt. |
| App rối, quá nhiều chức năng | Bạn ấy "tặng" thêm nhiều thứ | "Bỏ bớt, chỉ giữ 3 chức năng: [liệt kê]. Giao diện đơn giản cho người mới." |
| Hết lượt dùng giữa chừng | Bản miễn phí có giới hạn | Lưu code lại. Hôm sau mở chat mới: "Đây là app mình đang làm dở, mình muốn sửa tiếp [điều bạn muốn]." |

## Tự kiểm tra

- [ ] Mình đã kể vấn đề và để bạn ấy hỏi lại trước khi làm.
- [ ] Mình có một app theo dõi tiến độ chạy được, có đủ màu đỏ, cam, xanh.
- [ ] Mình đã nói chuyện tiếp ít nhất 2 lần để sửa lỗi hoặc thêm tính năng.
- [ ] Mình đã thử quy tắc màu bằng 3 mốc: hôm qua, đúng 5 ngày, 6 ngày.
- [ ] Mình đã lưu app thành file hoặc link và mở được trên điện thoại.
- [ ] Mình đã thử (hoặc ít nhất ghi lại) ý tưởng táo bạo nhất của mình.

## Đi xa hơn

- **Nối với Bậc 5:** lưu "phong cách công ty" (màu, font, logo, giọng chữ) vào một Project, để mọi app bạn làm đều cùng một bộ nhận diện.
- **Hướng dẫn nằm sẵn trong app:** *"Thêm một nút Hướng dẫn, giải thích cách dùng trong 5 dòng."* Đồng nghiệp tự dùng, không cần hỏi bạn.
- **App từ file thật:** tải lên một bảng Excel đã che dữ liệu nhạy cảm và nói *"Làm cho mình một dashboard từ file này."*
- **Muốn cả nhóm cùng cập nhật một bảng chung?** Đó là bài toán lớn hơn, cần nơi lưu dữ liệu chung. Hỏi thẳng: *"Mình muốn cả nhóm cùng cập nhật, có những cách nào, cách nào không cần IT, cách nào an toàn cho dữ liệu công ty?"*
- Sẵn sàng giao cả một đầu việc, chứ không chỉ một công cụ? Đến bậc cuối: [Bậc 7](cap-7.html).
