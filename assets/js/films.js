/* =====================================================================
   FILMS · ba bộ phim viết hoàn toàn bằng code
   Mỗi cảnh: { name, from, to, draw(ctx, s, fx) }
   s.t = giây trong phim · s.lt = giây trong cảnh · s.p = tiến độ cảnh (0→1)
   ===================================================================== */
(function () {
  'use strict';
  const INK = '#0b0b0b', PAPER = '#f3f1ec', RED = '#ff4a1c', MUTED = '#8f8a80', LINE = 'rgba(243,241,236,.18)', LINE_D = 'rgba(11,11,11,.16)';
  const W = 1920, H = 1080, X = 140;

  const LEVELS = [
    ['01', 'Email khó, viết lại trong 30 giây', 'Giao như cho đồng nghiệp, rồi nhờ góp ý thẳng'],
    ['02', 'Tài liệu dài, và bẫy “AI bịa”', 'Bạn giỏi nhưng đôi khi đoán, cứ hỏi lại: căn cứ đâu?'],
    ['03', 'Excel lộn xộn thành sạch', 'Đưa đống bừa bộn, nhờ sắp xếp'],
    ['04', 'Số liệu thành báo cáo thành slide', 'Một cuộc trò chuyện, nhiều thành phẩm'],
    ['05', 'Trợ lý biết nhớ việc', 'Dạy bạn ấy một lần, nhờ mãi mãi'],
    ['06', 'Tự tạo công cụ không cần code', 'Thiếu công cụ? Nhờ bạn ấy làm luôn'],
    ['07', 'Giao cả đầu việc cho AI agent', 'Giao cả đầu việc, không chỉ giao câu hỏi'],
  ];

  /* Khung tạp chí dùng chung: nhãn trên cùng + đường kẻ */
  function masthead(ctx, s, fx, left, right, color, p) {
    fx.rule(ctx, X, 150, W - X, fx.interp(p, [0, .5], [0, 1], fx.ease.inOutExpo), color === INK ? LINE_D : LINE, 2);
    const a = fx.interp(p, [.2, .7]);
    fx.text(ctx, left, X, 122, { family: 'sans', size: 24, weight: 600, spacing: 5, color: color === INK ? '#5f5b54' : '#a29e96', alpha: a });
    fx.text(ctx, right, W - X, 122, { family: 'sans', size: 24, weight: 600, spacing: 5, color: color === INK ? '#5f5b54' : '#a29e96', alpha: a, align: 'right' });
  }

  /* ================================================================
     PHIM 1 · 7 cấp độ trong 60 giây
     ================================================================ */
  const intro = {
    id: 'lam-that-thay-that-7-cap-do', title: '7 bậc trong 60 giây', w: W, h: H, fps: 30, duration: 52, poster: 2.6, bg: INK,
    scenes: [
      {
        name: 'Bìa tạp chí', from: 0, to: 6.2,
        draw(ctx, s, fx) {
          fx.bg(ctx, s, INK);
          masthead(ctx, s, fx, 'PHIÊN BẢN 2 · BUỔI CHIA SẺ', 'NHÓM TA · 10 / 2026', PAPER, s.lt);
          const out = fx.interp(s.lt, [5.4, 6.2], [0, 1], fx.ease.inOutExpo);
          ctx.translate(0, -out * 120); ctx.globalAlpha = 1 - out;
          fx.rise(ctx, 'Làm thật,', X - 8, 560, fx.interp(s.lt, [.6, 1.8]), { size: 250, weight: 500, color: PAPER });
          fx.rise(ctx, 'thấy thật', X - 8, 820, fx.interp(s.lt, [1, 2.2]), { size: 250, italic: true, color: PAPER });
          const dx = fx.measure(ctx, 'thấy thật', { size: 250, italic: true });
          fx.text(ctx, '.', X - 8 + dx, 820, { size: 250, italic: true, color: RED, alpha: fx.interp(s.lt, [2, 2.4]) });
          fx.text(ctx, '7 bậc đi xuống phễu, làm bạn với AI', X, 950, { family: 'sans', size: 46, weight: 300, color: '#cfcac1', alpha: fx.interp(s.lt, [2.4, 3.4]) });
          fx.text(ctx, 'AI', W - 60, H + 120, { size: 900, italic: true, stroke: 2, color: 'rgba(243,241,236,.08)', align: 'right' });
        },
      },
      {
        name: 'Người bạn siêu nhiên', from: 6.2, to: 12.4,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .8, 'up');
          fx.bg(ctx, s, PAPER);
          masthead(ctx, s, fx, 'CÂU MỘT', 'TINH THẦN', INK, s.lt - .3);
          fx.rise(ctx, 'AI là', X, 430, fx.interp(s.lt, [.7, 1.6]), { size: 150, weight: 500, color: INK });
          fx.rise(ctx, 'một người bạn', X, 610, fx.interp(s.lt, [1.1, 2]), { size: 150, weight: 500, color: INK });
          fx.rise(ctx, 'siêu nhiên.', X, 790, fx.interp(s.lt, [1.6, 2.6]), { size: 150, italic: true, color: RED });
          const a = fx.interp(s.lt, [3, 4]);
          fx.text(ctx, 'ĐA NHIỆM  ·  LÀM ĐƯỢC GẦN NHƯ MỌI VIỆC  ·  NGÀY CÀNG GIỎI', X, 930, { family: 'sans', size: 30, weight: 600, spacing: 6, color: INK, alpha: a });
        },
      },
      {
        name: 'Dám nhờ, dám hỏi lại', from: 12.4, to: 18.6,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .8, 'up');
          fx.bg(ctx, s, INK);
          masthead(ctx, s, fx, 'CÂU HAI', 'TINH THẦN', PAPER, s.lt - .3);
          fx.rise(ctx, 'Dám nhờ', X, 430, fx.interp(s.lt, [.6, 1.5]), { size: 170, weight: 500, color: PAPER });
          fx.rise(ctx, 'mọi thứ.', X + 760, 430, fx.interp(s.lt, [1, 1.9]), { size: 170, italic: true, color: PAPER });
          fx.rise(ctx, 'Dám hỏi lại', X, 680, fx.interp(s.lt, [2.2, 3.1]), { size: 170, weight: 500, color: PAPER });
          fx.rise(ctx, 'mọi thứ.', X + 980, 680, fx.interp(s.lt, [2.6, 3.5]), { size: 170, italic: true, color: RED });
          fx.rule(ctx, X, 730, X + 1700, fx.interp(s.lt, [3.4, 4.4], [0, 1], fx.ease.inOutExpo), RED, 5);
          fx.text(ctx, 'Việc gì muốn, cứ nhờ. Việc gì quan trọng, cứ hỏi “căn cứ đâu?”.', X, 860, { family: 'sans', size: 40, weight: 300, color: '#cfcac1', alpha: fx.interp(s.lt, [4, 5]) });
        },
      },
      ...LEVELS.map((L, i) => ({
        name: 'Bậc ' + L[0], from: 18.6 + i * 3.4, to: 18.6 + (i + 1) * 3.4,
        draw(ctx, s, fx) {
          const dark = i % 2 === 0, fg = dark ? PAPER : INK;
          fx.wipe(ctx, s, .55, 'left');
          fx.bg(ctx, s, dark ? INK : PAPER);
          const nx = fx.interp(s.lt, [0, 1.2], [W + 200, W - 80], fx.ease.outExpo);
          fx.text(ctx, L[0], nx, 900, { size: 760, weight: 500, stroke: 3, color: dark ? 'rgba(243,241,236,.35)' : 'rgba(11,11,11,.28)', align: 'right' });
          fx.text(ctx, `BẬC ${L[0]} / 07`, X, 240, { family: 'sans', size: 26, weight: 700, spacing: 7, color: RED, alpha: fx.interp(s.lt, [.3, .8]) });
          const lines = fx.wrap(ctx, L[1], 1100, { size: 112, weight: 500 });
          lines.forEach((ln, k) => fx.rise(ctx, ln, X, 420 + k * 128, fx.interp(s.lt, [.35 + k * .12, 1.2 + k * .12]), { size: 112, weight: 500, color: fg }));
          const yh = 420 + lines.length * 128 + 40;
          fx.text(ctx, '“' + L[2] + '”', X, yh, { size: 50, italic: true, color: dark ? '#cfcac1' : '#5f5b54', alpha: fx.interp(s.lt, [1, 1.8]) });
          for (let k = 0; k < 7; k++) {
            ctx.fillStyle = k === i ? RED : k < i ? fg : (dark ? 'rgba(243,241,236,.2)' : 'rgba(11,11,11,.18)');
            ctx.fillRect(X + k * 70, 960, 54, 6);
          }
        },
      })),
      {
        name: 'Hỏi thẳng bạn ấy', from: 42.4, to: 48,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .7, 'up');
          fx.bg(ctx, s, RED);
          fx.text(ctx, 'CÂU BA', X, 200, { family: 'sans', size: 26, weight: 700, spacing: 7, color: INK, alpha: fx.interp(s.lt, [.4, 1]) });
          fx.rise(ctx, 'Không biết nhờ thế nào?', X, 420, fx.interp(s.lt, [.6, 1.5]), { size: 120, italic: true, color: INK });
          fx.rise(ctx, 'Hỏi thẳng', X, 680, fx.interp(s.lt, [1.6, 2.5]), { size: 230, weight: 500, color: INK });
          fx.rise(ctx, 'bạn ấy.', X, 900, fx.interp(s.lt, [2, 2.9]), { size: 230, italic: true, color: PAPER });
        },
      },
      {
        name: 'Kết', from: 48, to: 52,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .7, 'up');
          fx.bg(ctx, s, INK);
          fx.rise(ctx, 'Làm thật, thấy thật.', W / 2, 520, fx.interp(s.lt, [.5, 1.4]), { size: 140, weight: 500, color: PAPER, align: 'center' });
          fx.text(ctx, 'BẮT ĐẦU TỰ HỌC · TRANG “BẮT ĐẦU”', W / 2, 650, { family: 'sans', size: 28, weight: 700, spacing: 7, color: RED, align: 'center', alpha: fx.interp(s.lt, [1.3, 2]) });
          fx.text(ctx, 'Phim này không quay, không dựng. Nó được viết bằng code.', W / 2, 960, { family: 'sans', size: 30, weight: 300, color: MUTED, align: 'center', alpha: fx.interp(s.lt, [1.8, 2.6]) });
        },
      },
    ],
  };

  /* ================================================================
     PHIM 2 · Bẫy “AI bịa”
     ================================================================ */
  const CLAUSES = [
    ['Điều 3.4', 'Bên B (mua) chậm thanh toán: trả lãi 0,1%/ngày.', '0,1%/ngày'],
    ['Điều 7.1', 'Bên B (mua) chậm thanh toán quá 10 ngày: phạt 8%.', '8%'],
    ['Điều 7.2', 'Bên A (bán) chậm giao hàng: hai bên sẽ cùng thương lượng.', ''],
  ];
  const trap = {
    id: 'bay-ai-bia', title: 'Bẫy “AI bịa”', w: W, h: H, fps: 30, duration: 26, poster: 15.5, bg: INK,
    scenes: [
      {
        name: 'Đặt vấn đề', from: 0, to: 5,
        draw(ctx, s, fx) {
          fx.bg(ctx, s, INK);
          masthead(ctx, s, fx, 'BẬC 02 · THÍ NGHIỆM', 'BẪY “AI BỊA”', PAPER, s.lt);
          fx.rise(ctx, 'Hỏi AI một điều', X, 500, fx.interp(s.lt, [.5, 1.4]), { size: 150, weight: 500, color: PAPER });
          fx.rise(ctx, 'không có trong tài liệu.', X, 690, fx.interp(s.lt, [1, 1.9]), { size: 150, italic: true, color: RED });
          fx.text(ctx, 'Rồi xem chuyện gì xảy ra.', X, 840, { family: 'sans', size: 42, weight: 300, color: '#cfcac1', alpha: fx.interp(s.lt, [2.2, 3]) });
        },
      },
      {
        name: 'Hợp đồng', from: 5, to: 13,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .7, 'up');
          fx.bg(ctx, s, PAPER);
          fx.text(ctx, 'HỢP ĐỒNG 27/2026 · TRÍCH', X, 200, { family: 'sans', size: 26, weight: 700, spacing: 6, color: '#5f5b54', alpha: fx.interp(s.lt, [.5, 1]) });
          CLAUSES.forEach((c, i) => {
            const t0 = 1 + i * 1.6, y = 360 + i * 210;
            fx.text(ctx, c[0], X, y, { family: 'sans', size: 30, weight: 700, color: RED, alpha: fx.interp(s.lt, [t0, t0 + .3]) });
            const shown = fx.typed(c[1], fx.interp(s.lt, [t0 + .2, t0 + 1.4], [0, 1], fx.ease.linear));
            fx.text(ctx, shown, X, y + 70, { size: 58, color: INK });
            fx.rule(ctx, X, y + 115, W - X, fx.interp(s.lt, [t0, t0 + 1], [0, 1], fx.ease.inOutExpo), LINE_D, 2);
            if (c[2]) {
              const before = c[1].slice(0, c[1].indexOf(c[2]));
              const bx = X + fx.measure(ctx, before, { size: 58 }), bw = fx.measure(ctx, c[2], { size: 58 });
              const a = fx.interp(s.lt, [5.6, 6.2]);
              ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = RED; ctx.lineWidth = 4;
              fx.roundRect(ctx, bx - 14, y + 10, bw + 28, 80, 12); ctx.stroke(); ctx.restore();
            }
          });
          fx.text(ctx, '← Hai con số “trông giống đáp án”', W - X, 980, { family: 'sans', size: 34, weight: 600, color: RED, align: 'right', alpha: fx.interp(s.lt, [6, 6.8]) });
        },
      },
      {
        name: 'AI đoán', from: 13, to: 20,
        draw(ctx, s, fx) {
          fx.bg(ctx, s, PAPER);
          fx.text(ctx, 'CUỘC TRÒ CHUYỆN', X, 200, { family: 'sans', size: 26, weight: 700, spacing: 6, color: '#5f5b54' });
          const q = 'Nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?';
          const qa = fx.interp(s.lt, [.3, .9]);
          const qo = { family: 'sans', size: 42, weight: 500 }, qw = fx.measure(ctx, q, qo) + 110, qx = W - X - qw;
          ctx.save(); ctx.globalAlpha = qa; ctx.fillStyle = INK; fx.roundRect(ctx, qx, 290, qw, 150, 28); ctx.fill(); ctx.restore();
          fx.text(ctx, q, qx + 55, 382, Object.assign({ color: PAPER, alpha: qa }, qo));
          const ans = 'Bên bán sẽ bị phạt 8% giá trị phần hợp đồng bị vi phạm.';
          const aa = fx.interp(s.lt, [1.5, 2]);
          const aw = fx.measure(ctx, ans, { family: 'sans', size: 42 }) + 100;
          ctx.save(); ctx.globalAlpha = aa; ctx.strokeStyle = INK; ctx.lineWidth = 3; fx.roundRect(ctx, X, 520, aw, 160, 28); ctx.stroke(); ctx.restore();
          fx.text(ctx, 'AI', X + 40, 580, { family: 'sans', size: 26, weight: 700, spacing: 4, color: MUTED, alpha: aa });
          fx.text(ctx, fx.typed(ans, fx.interp(s.lt, [2, 3.6], [0, 1], fx.ease.linear)), X + 40, 640, { family: 'sans', size: 42, color: INK });
          const st = fx.interp(s.lt, [4.2, 4.8], [0, 1], fx.ease.outBack);
          if (st > 0) {
            ctx.save(); ctx.translate(1450, 820); ctx.rotate(-.18); ctx.scale(st, st);
            ctx.strokeStyle = RED; ctx.lineWidth = 8; fx.roundRect(ctx, -300, -95, 600, 190, 16); ctx.stroke();
            fx.text(ctx, 'ĐOÁN SAI', 0, 40, { family: 'sans', size: 110, weight: 800, color: RED, align: 'center', spacing: 6 });
            ctx.restore();
          }
          fx.text(ctx, '8% là mức phạt của BÊN MUA (Điều 7.1), không phải bên bán.', X, 990, { family: 'sans', size: 36, weight: 500, color: INK, alpha: fx.interp(s.lt, [5, 5.8]) });
        },
      },
      {
        name: 'Đáp án', from: 20, to: 26,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .7, 'up');
          fx.bg(ctx, s, INK);
          fx.text(ctx, 'ĐÁP ÁN ĐÚNG', X, 230, { family: 'sans', size: 26, weight: 700, spacing: 7, color: RED, alpha: fx.interp(s.lt, [.5, 1]) });
          fx.rise(ctx, 'Hợp đồng không quy định.', X, 420, fx.interp(s.lt, [.7, 1.6]), { size: 120, weight: 500, color: PAPER });
          fx.text(ctx, 'Điều 7.2 chỉ ghi “hai bên sẽ cùng thương lượng”.', X, 520, { family: 'sans', size: 40, weight: 300, color: '#cfcac1', alpha: fx.interp(s.lt, [1.6, 2.3]) });
          fx.rise(ctx, 'Dám hỏi lại:', X, 760, fx.interp(s.lt, [2.6, 3.4]), { size: 150, weight: 500, color: PAPER });
          fx.rise(ctx, '“căn cứ đâu?”', X, 940, fx.interp(s.lt, [3, 3.9]), { size: 150, italic: true, color: RED });
        },
      },
    ],
  };

  /* ================================================================
     PHIM 3 · Excel lộn xộn → sạch
     ================================================================ */
  const MESSY = [
    ['5-9-26', 'Minh Phat', 'Giấy A4 Double A 10 ram', '1.850.000', 'Cty TNHH Văn phòng phẩm Minh Phát', '05/09/2026'],
    ['2026-09-06', 'GRAB', 'Grab đi gặp khách hàng', '215.000', 'Grab', '06/09/2026'],
    ['07 tháng 9', 'CTY VS SACH XANH', 'Vệ sinh văn phòng định kỳ', '3.664.000', 'Công ty Vệ sinh Sạch Xanh', '07/09/2026'],
    ['2026-09-06', 'GRAB', 'Grab đi gặp khách hàng', '215.000', 'TRÙNG', ''],
    ['09/09/2026', 'NH Sen Vàng', 'Tiếp khách đối tác', '4.920.000', 'Nhà hàng Sen Vàng', '09/09/2026'],
    ['10-9-26', 'minh phát co.', 'Mực in HP 12A', '400.000đ', 'Cty TNHH Văn phòng phẩm Minh Phát', '10/09/2026'],
    ['12 tháng 9', 'IN ANH SANG', 'In catalogue sản phẩm', '7.300.000', 'Công ty In Ánh Sáng', '12/09/2026'],
    ['07 tháng 9', 'CTY VS SACH XANH', 'Vệ sinh văn phòng định kỳ', '3.664.000', 'TRÙNG', ''],
    ['2026-09-14', 'Toc Do Express', 'Gửi hồ sơ thầu', '186.000', 'Chuyển phát nhanh Tốc Độ', '14/09/2026'],
  ];
  const CATS = [['Dịch vụ thuê ngoài', 134183000], ['Tiếp khách', 121722000], ['Khác', 49628000], ['Văn phòng phẩm', 48279000], ['Đi lại', 30258000]];
  const excel = {
    id: 'excel-lon-xon-thanh-sach', title: 'Excel lộn xộn thành sạch', w: W, h: H, fps: 30, duration: 24, poster: 13.5, bg: INK,
    scenes: [
      {
        name: 'Mở', from: 0, to: 4,
        draw(ctx, s, fx) {
          fx.bg(ctx, s, INK);
          masthead(ctx, s, fx, 'BẬC 03 · CHI PHÍ THÁNG 9', '300 DÒNG', PAPER, s.lt);
          fx.rise(ctx, '300 dòng.', X, 520, fx.interp(s.lt, [.4, 1.3]), { size: 220, weight: 500, color: PAPER });
          fx.rise(ctx, 'Một tiếng thở dài.', X, 760, fx.interp(s.lt, [1, 1.9]), { size: 160, italic: true, color: RED });
        },
      },
      {
        name: 'Bảng lộn xộn → sạch', from: 4, to: 12,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .7, 'up');
          fx.bg(ctx, s, PAPER);
          const clean = fx.interp(s.lt, [3.6, 5.2], [0, 1], fx.ease.inOutCubic);
          fx.text(ctx, clean > .5 ? 'SAU KHI NHỜ BẠN ẤY SẮP XẾP' : 'TRƯỚC: NHƯ ĐỜI THẬT', X, 190, { family: 'sans', size: 26, weight: 700, spacing: 6, color: clean > .5 ? RED : '#5f5b54' });
          const cols = [X, X + 300, X + 800], moneyR = W - X - 170;
          ['NGÀY', 'NHÀ CUNG CẤP', 'NỘI DUNG'].forEach((h, k) => fx.text(ctx, h, cols[k], 270, { family: 'sans', size: 22, weight: 700, spacing: 4, color: '#5f5b54' }));
          fx.text(ctx, 'SỐ TIỀN', moneyR, 270, { family: 'sans', size: 22, weight: 700, spacing: 4, color: '#5f5b54', align: 'right' });
          fx.rule(ctx, X, 292, W - X, 1, INK, 2);
          let y = 360;
          MESSY.forEach((r, i) => {
            const dup = r[4] === 'TRÙNG';
            const a = fx.interp(s.lt, [.3 + i * .12, .7 + i * .12]);
            const collapse = dup ? fx.interp(s.lt, [2.2, 3.4], [0, 1], fx.ease.inOutCubic) : 0;
            const rowH = 76 * (1 - collapse);
            if (rowH < 2) return;
            ctx.save();
            ctx.globalAlpha = a * (1 - collapse);
            const jitter = (1 - clean) * Math.sin(i * 1.7 + s.t * 2) * 6;
            ctx.translate(jitter, 0);
            if (dup) { ctx.fillStyle = 'rgba(255,74,28,.14)'; ctx.fillRect(X - 20, y - 50, W - 2 * X + 40, rowH); }
            const date = clean > .5 && !dup ? r[5] : r[0];
            const vendor = clean > .5 && !dup ? r[4] : r[1];
            const money = clean > .5 && !dup ? r[3].replace('đ', '') : r[3];
            const fade = clean > .5 ? fx.interp(clean, [.5, 1]) : 1 - fx.interp(clean, [0, .5]);
            fx.text(ctx, date, cols[0], y, { family: 'sans', size: 30, color: INK, alpha: fade });
            fx.text(ctx, vendor.length > 30 ? vendor.slice(0, 29) + '…' : vendor, cols[1], y, { family: 'sans', size: 30, weight: clean > .5 ? 600 : 400, color: INK, alpha: fade });
            fx.text(ctx, r[2], cols[2], y, { family: 'sans', size: 30, color: INK });
            fx.text(ctx, money, moneyR, y, { family: 'sans', size: 30, color: !dup && r[3].includes('đ') && clean < .5 ? RED : INK, align: 'right', alpha: fade });
            if (dup && collapse < .5) fx.text(ctx, 'TRÙNG', W - X, y, { family: 'sans', size: 22, weight: 800, spacing: 4, color: RED, align: 'right' });
            ctx.restore();
            fx.rule(ctx, X, y + 26 * (1 - collapse), W - X, 1, LINE_D, 1);
            y += rowH;
          });
          fx.text(ctx, '8 dòng trùng · 109 ô ngày gõ dạng chữ · 3 số tiền dạng chữ · 11 nhà cung cấp viết nhiều kiểu', X, 1010, { family: 'sans', size: 28, weight: 500, color: '#5f5b54', alpha: fx.interp(s.lt, [1.4, 2]) });
        },
      },
      {
        name: 'Biểu đồ', from: 12, to: 19,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .6, 'left');
          fx.bg(ctx, s, PAPER);
          fx.text(ctx, 'CHI PHÍ THÁNG 9 THEO NHÓM', X, 190, { family: 'sans', size: 26, weight: 700, spacing: 6, color: '#5f5b54' });
          const max = CATS[0][1];
          CATS.forEach(([name, v], i) => {
            const y = 300 + i * 132, p = fx.interp(s.lt, [.6 + i * .18, 2 + i * .18], [0, 1], fx.ease.outExpo);
            fx.text(ctx, name, X, y + 30, { size: 46, color: INK, alpha: fx.interp(s.lt, [.4 + i * .15, .9 + i * .15]) });
            ctx.fillStyle = i === 0 ? RED : INK; ctx.fillRect(X + 560, y - 8, 880 * (v / max) * p, 52);
            fx.text(ctx, (v / 1e6 * p).toFixed(1).replace('.', ',') + ' tr', X + 560 + 880 * (v / max) * p + 24, y + 32, { family: 'sans', size: 34, weight: 600, color: INK, alpha: p });
          });
          const total = 384070000 * fx.interp(s.lt, [1, 3.4], [0, 1], fx.ease.outCubic);
          fx.text(ctx, 'TỔNG SAU KHI BỎ TRÙNG', X, 990, { family: 'sans', size: 24, weight: 700, spacing: 5, color: '#5f5b54' });
          fx.text(ctx, Math.round(total).toLocaleString('vi-VN') + 'đ', W - X, 1000, { size: 96, weight: 500, color: INK, align: 'right' });
        },
      },
      {
        name: 'Cách nhờ', from: 19, to: 24,
        draw(ctx, s, fx) {
          fx.wipe(ctx, s, .7, 'up');
          fx.bg(ctx, s, INK);
          fx.rise(ctx, 'Đưa đống bừa bộn,', X, 470, fx.interp(s.lt, [.6, 1.5]), { size: 150, weight: 500, color: PAPER });
          fx.rise(ctx, 'nhờ sắp xếp.', X, 660, fx.interp(s.lt, [1, 1.9]), { size: 150, italic: true, color: RED });
          fx.text(ctx, 'Rồi dám hỏi lại: “giải thích 3 dòng bất kỳ cho mình xem”.', X, 840, { family: 'sans', size: 40, weight: 300, color: '#cfcac1', alpha: fx.interp(s.lt, [2.2, 3]) });
        },
      },
    ],
  };

  Object.assign(window.CodeVideo.films, { intro, trap, excel });
})();
