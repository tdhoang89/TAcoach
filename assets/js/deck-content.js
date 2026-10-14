/* =====================================================================
   NỘI DUNG TRÌNH CHIẾU V2 · "Làm thật, thấy thật"
   Mỗi slide:
     id      : mã ngắn, dùng làm địa chỉ (#id) để link từ bài học
     ch      : chương
     title   : tên slide (mục lục, bảng tự học)
     tone    : 'ink' | 'paper' | 'red'
     tr      : chuyển cảnh 'iris' | 'flow' | 'wipe' | 'wipe-left' | 'zoom' | 'cut' (bỏ trống = tự chọn)
     html    : nội dung trên sân khấu 1920×1080
               data-f="n"  : hiện ở bước n (bấm → để hiện)   data-fx: rise | fade | pop | stamp | type | count | grow | left | right
               data-in     : hiện khi vào slide               data-on="lop:n": thêm class "lop" khi tới bước n
               data-key    : phần tử dùng chung, bay từ slide trước sang
               .split      : chữ trồi lên từng từ
     th(T, step): hình của sợi chỉ đỏ ở từng bước (bỏ trống = gạch chân tiêu đề)
     note    : lời dẫn (cũng là phụ đề khi "Xem như phim", và bài đọc khi "Tự học")
     cap     : (tuỳ chọn) phụ đề tách sẵn; câu bắt đầu bằng » sẽ mở thêm 1 bước
     more    : phần đọc thêm trong chế độ Tự học (câu nhờ để copy, mẹo…)
     link    : bài tự học liên quan
   ===================================================================== */
(function () {
  'use strict';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const M = (l, r, rec) => `<div class="mast"><span${rec ? ' class="rec"' : ''}>${l}</span><span data-tc></span><span>${r}</span></div>`;
  const P = (code, title, text) => `<div class="pp"><div class="pp-h"><span><b>${esc(code)}</b> · ${esc(title)}</span></div><pre>${esc(text)}</pre></div>`;
  const MF = lv => `<div class="mf" data-key="mf">${[44, 38, 32, 26, 20, 14, 9].map((h, i) => `<i class="${i + 1 === lv ? 'on' : i + 1 < lv ? 'done' : ''}" style="height:${h}px"></i>`).join('')}<b>Bậc ${pad(lv)} / 07</b></div>`;
  const LINK = (href, t) => `<div class="foot"><span></span><a href="${href}">${t} ↗</a></div>`;
  const ph = s => s.replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
  const PC = (code, title, text, cls = '', attrs = '') => `<div class="pc ${cls}" ${attrs}><div class="pl"><b>${esc(code)}</b><span>${esc(title)}</span></div><p>${ph(esc(text)).replace(/\n/g, '<br>')}</p></div>`;
  const TIP = t => `<p class="tip">${t}</p>`;
  const H4 = t => `<h4>${t}</h4>`;
  const UL = items => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;

  const chapters = [
    { id: 'mo', name: 'Mở màn · Phễu khoảng cách', short: 'Phễu' },
    { id: 'khoi', name: 'Khởi động', short: 'Khởi động' },
    { id: 'dn', name: 'Giao việc như giao cho đồng nghiệp', short: 'Đồng nghiệp' },
    { id: 'b1', name: 'Bậc 1 · Email khó', short: 'Bậc 1' },
    { id: 'b2', name: 'Bậc 2 · Tài liệu dài & bẫy AI bịa', short: 'Bậc 2' },
    { id: 'b3', name: 'Bậc 3 · Excel lộn xộn', short: 'Bậc 3' },
    { id: 'b4', name: 'Bậc 4 · Báo cáo & slide', short: 'Bậc 4' },
    { id: 'b5', name: 'Bậc 5 · Trợ lý biết nhớ', short: 'Bậc 5' },
    { id: 'b6', name: 'Bậc 6 · Tự tạo công cụ', short: 'Bậc 6' },
    { id: 'b7', name: 'Bậc 7 · Giao cả đầu việc', short: 'Bậc 7' },
    { id: 'dt', name: 'Đi tiếp', short: 'Đi tiếp' },
  ];

  const S = [];
  const add = o => S.push(o);
  /* Thẻ hồi (intertitle) giữa các phần, như trong phim */
  const act = (id, ch, n, name, line, parts, note) => add({
    id, ch, title: `Hồi ${pad(n)} · ${name}`, tone: 'ink', tr: 'iris', min: 4,
    html: `${M(`Hồi ${pad(n)} / 03`, 'Làm thật, thấy thật · V2', true)}
      <div class="act">
        <div class="act-l">
          <p class="lbl red" data-in>Hồi ${pad(n)}</p>
          <h2 class="t-hero split" style="font-size:210px;margin-top:20px"><em class="it">${name}</em></h2>
          <p class="lead mt-l" data-in style="max-width:880px">${line}</p>
        </div>
        <ol class="act-parts">${parts.map((x, i) => `<li data-in><span>${pad(i + 1)}</span>${x}</li>`).join('')}</ol>
      </div>`,
    th: T => T.under('.lead', { from: 'edge' }),
    note,
  });

  /* =================================================================
     MỞ MÀN · PHỄU KHOẢNG CÁCH
     ================================================================= */
  add({
    id: 'mo-8-ty', ch: 'mo', title: 'Tám tỷ người', tone: 'ink', min: 6,
    html: `${M('Cảnh 01 · Mở', 'Làm thật, thấy thật · V2', true)}
      <p class="lbl muted" data-in>Trên Trái Đất hôm nay có khoảng</p>
      <p class="k-xl mt-s" data-in="num"><span data-fx="count" data-to="8000000000" data-dur="2600">8.000.000.000</span></p>
      <p class="t-m mt-l split">người. Bao nhiêu người <em class="it accent">thật sự</em> dùng AI?</p>`,
    th: T => { const b = T.box('.k-xl'); return T.horizon(b.b + 34); },
    note: 'Trên Trái Đất hôm nay có khoảng tám tỷ người. Câu hỏi mở đầu: trong tám tỷ người đó, bao nhiêu người thật sự dùng AI? Mọi người đoán thử một con số, nói to lên.',
    more: `${H4('Đoán trước khi xem')}<p>Ghi ra một con số bạn đoán, rồi bấm Tiếp. Đoán sai cũng tốt: cảm giác "ồ, không ngờ" sẽ giúp bạn nhớ lâu.</p>`,
  });

  const TIERS = [
    ['6 tỷ', '~75% dân số', '<b>Gần như chưa từng chạm</b> vào AI.', 1],
    ['1–2 tỷ', '~20%', '<b>Dùng thỉnh thoảng</b>, chủ yếu bản miễn phí kiểu ChatGPT.', .7],
    ['20 triệu', '0,2%', '<b>Dùng bản mạnh nhất</b> cho việc chuyên môn. Tận mắt thấy AI làm xong dự án từng mất hàng tuần, hàng tháng.', .4],
    ['5.000', '0,00006%', '<b>Dùng hệ thống nội bộ</b> của các phòng lab AI.', .1],
  ];
  add({
    id: 'mo-pheu', ch: 'mo', title: 'Phễu khoảng cách của Karpathy', tone: 'ink', tr: 'flow',
    html: `${M('Cảnh 02 · Phễu', 'Andrej Karpathy · X · 11/10/2026')}
      <h2 class="t-s split" style="margin-top:-30px">Ai đang thật sự <em class="it">dùng</em> AI?</h2>
      <div class="funnel">${TIERS.map((t, k) => `<div class="tier" data-f="${k + 1}" data-fx="fade"><div class="num">${t[0]}<small>${t[1]}</small></div><i class="mid" data-r="${t[3]}"></i><div class="desc">${t[2]}</div></div>`).join('')}</div>
      <p class="src mt-m" data-f="4" data-fx="fade">Andrej Karpathy, đồng sáng lập OpenAI, bài đăng trên X ngày 11/10/2026. Ông gọi đây là “ước lượng trên giấy nháp”.</p>`,
    th: (T, s) => {
      if (!s) return T.under('h2');
      const rows = T.all('.tier .mid').slice(0, s).map((b, k) => { const r = TIERS[k][3], w = b.w * r; return [b.cx - w / 2, b.cx + w / 2, b.b - 34]; });
      return T.zig(rows);
    },
    cap: [
      'Andrej Karpathy, một trong những người đồng sáng lập OpenAI, vừa vẽ ra một cái phễu.',
      '» Khoảng sáu tỷ người, ba phần tư thế giới, gần như chưa từng chạm vào AI.',
      '» Khoảng một đến hai tỷ người dùng thỉnh thoảng, chủ yếu là bản miễn phí.',
      '» Chỉ khoảng hai mươi triệu người dùng các mô hình mạnh nhất cho công việc chuyên môn, và tận mắt thấy AI làm xong những dự án từng mất hàng tuần, hàng tháng.',
      '» Và khoảng năm nghìn người được dùng hệ thống nội bộ ở các phòng lab.',
      'Ông nói rõ đây là ước lượng trên giấy nháp. Con số có thể lệch, nhưng hình dạng của nó mới đáng nghĩ.',
    ],
    note: 'Andrej Karpathy, một trong những người đồng sáng lập OpenAI, vừa vẽ ra một cái phễu. Khoảng sáu tỷ người, ba phần tư thế giới, gần như chưa từng chạm vào AI. Khoảng một đến hai tỷ người dùng thỉnh thoảng, chủ yếu là bản miễn phí. Chỉ khoảng hai mươi triệu người dùng các mô hình mạnh nhất cho công việc chuyên môn, và tận mắt thấy AI làm xong những dự án từng mất hàng tuần, hàng tháng. Và khoảng năm nghìn người được dùng hệ thống nội bộ ở các phòng lab.\n\nÔng nói rõ đây là ước lượng trên giấy nháp. Con số có thể lệch, nhưng hình dạng của nó mới đáng nghĩ.',
    more: `${H4('Nguồn')}<p>Bài đăng của Andrej Karpathy trên X ngày 11/10/2026 (ông "phủi bụi" lại một bài viết từ tháng 4 vì thấy khoảng cách đang lớn thêm). Tầng 20 triệu người trong bài chủ yếu là dân lập trình và toán, nơi AI mạnh nhất hiện nay.</p>${TIP('Đừng ghi nhớ con số. Hãy nhớ hình dạng: càng xuống sâu càng ít người, và khoảng cách giữa các tầng đang giãn ra.')}`,
    link: 'khoang-cach.html', linkText: 'Đọc bài: Khoảng cách AI',
  });

  add({
    id: 'mo-noi-rong', ch: 'mo', title: 'Khoảng cách đang nới rộng', tone: 'paper',
    html: `${M('Cảnh 03 · Khoảng cách', 'Ý chính của Karpathy')}
      <h2 class="t-xl split" style="max-width:1200px">Khoảng cách đang <em class="it accent">nới rộng</em>.</h2>
      <p class="lead mt-m" data-in style="max-width:960px">Không còn là hai nhóm người nói không hiểu nhau. Nó là một cái phễu, càng xuống càng hẹp.</p>
      <p class="t-xs it mt-l" data-f="1" style="max-width:900px">“Một nhóm nhỏ đang trải qua cảm giác chóng mặt khi đường cong dựng đứng.”</p>`,
    th: (T, s) => { const pts = []; for (let k = 0; k <= 80; k++) { const t = k / 80; pts.push([1240 + t * 560, 990 - Math.pow(t, 5.5) * 820]); } return s ? T.pts([[1080, 990], ...pts]) : T.under('h2'); },
    note: 'Ý chính của Karpathy: khoảng cách hiểu biết về AI đang nới rộng. Không còn là hai nhóm người nói không hiểu nhau, mà là một cái phễu sắc, càng xuống càng hẹp. Một nhóm nhỏ đang trải qua cảm giác chóng mặt khi đường cong dựng đứng, trong khi phần lớn chúng ta mới thấy AI giúp được chút ít.',
    more: `${TIP('Câu "đường cong dựng đứng" là cách Karpathy tả nhóm người dùng AI sâu nhất: mỗi tháng họ thấy AI làm được việc lớn hơn hẳn tháng trước.')}`,
  });

  add({
    id: 'mo-vi-sao', ch: 'mo', title: 'Vì sao phễu ngày càng sâu', tone: 'ink',
    html: `${M('Cảnh 04 · Ba nguyên nhân', 'Theo Karpathy')}
      <h2 class="t-m split">Vì sao phễu <em class="it">ngày càng sâu?</em></h2>
      <div class="rows mt-m">
        <div data-f="1"><span class="n">01<br>Tham vọng</span><p>Việc bạn giao lớn cỡ nào.<small>Hỏi một câu khác xa với giao cả một dự án. AI càng mạnh, người dám giao việc lớn càng bứt xa.</small></p></div>
        <div data-f="2"><span class="n">02<br>Không đều</span><p>AI giỏi lệch, như răng cưa.<small>Cực mạnh ở việc số hoá, kiểm chứng được (code, toán, số liệu). Ở việc khác, lúc giỏi lúc đoán.</small></p></div>
        <div data-f="3"><span class="n">03<br>Truy cập</span><p>Miễn phí, trả phí, nội bộ.<small>Mỗi tầng nhìn thấy một AI khác nhau, nên mỗi người tin một kiểu.</small></p></div>
      </div>`,
    th: (T, s) => s ? T.bracket(T.el(`.rows > :nth-child(${s})`), { gap: 34 }) : T.under('h2'),
    note: 'Vì sao phễu ngày càng sâu? Karpathy chỉ ra ba nguyên nhân. Thứ nhất là tham vọng: hỏi một câu khác xa với giao cả một dự án. Thứ hai, AI giỏi không đều như răng cưa: cực mạnh ở việc số hoá, kiểm chứng được, còn ở việc khác thì lúc giỏi lúc đoán. Thứ ba là quyền truy cập: bản miễn phí, bản trả phí và bản nội bộ là ba AI rất khác nhau.',
    more: `${H4('Ba nguyên nhân, ba câu để nhớ')}${UL(['<b>Tham vọng</b> ↔ <b>Dám nhờ mọi thứ</b>: giao việc lớn dần.', '<b>Năng lực không đều</b> ↔ <b>Dám hỏi lại mọi thứ</b>: biết chỗ AI mạnh, chỗ AI hay đoán.', '<b>Quyền truy cập</b> ↔ <b>Chọn đúng bạn</b>: biết lúc nào bản miễn phí là đủ, lúc nào đáng nâng cấp.'])}`,
  });

  add({
    id: 'mo-bai-hoc', ch: 'mo', title: 'Bài học: cách dùng tạo ra khoảng cách', tone: 'red', tr: 'iris',
    html: `${M('Cảnh 05 · Bài học', 'Ghi lên bảng')}
      <h2 class="t-l split" style="max-width:1500px">Không phải AI tạo ra khoảng cách.</h2>
      <h2 class="t-l mt-s" data-f="1" data-fx="words" style="max-width:1600px"><span class="split"><em class="it" style="color:var(--paper)">Cách mình dùng AI</em> tạo ra khoảng cách.</span></h2>
      <p class="lead mt-l" data-f="2" style="max-width:1200px">Mỗi bậc kỹ năng bạn nâng lên là một bước đi xuống phễu: <b>tạo ra khác biệt</b>, hoặc <b>rút ngắn khoảng cách</b>. Cả hai đều bắt đầu từ hôm nay.</p>`,
    th: (T, s) => s ? T.under(T.el('[data-f="1"] .split')) : T.under('h2'),
    note: 'Đây là bài học đầu tiên của hôm nay. Không phải AI tạo ra khoảng cách. Cách mình dùng AI tạo ra khoảng cách. Cùng một công cụ, người hỏi một câu và người giao cả đầu việc nhận về hai thế giới khác nhau. Mỗi bậc kỹ năng bạn nâng lên là một bước đi xuống phễu: tạo ra khác biệt so với người bên cạnh, hoặc rút ngắn khoảng cách với người đi trước.',
    more: `${P('KC1', 'Mình đang ở tầng nào của phễu?', 'Mình làm [nghề], dùng AI kiểu: [mô tả ngắn, ví dụ: vài lần một tuần, hỏi đáp, viết email]. Theo phễu của Karpathy (6 tỷ người gần như chưa dùng, 1–2 tỷ dùng thỉnh thoảng bản miễn phí, khoảng 20 triệu dùng bản mạnh nhất cho việc chuyên môn), bạn đoán mình đang ở đâu? Gợi ý 3 việc cụ thể trong công việc của mình để đi xuống một bậc trong 30 ngày tới. Cần biết thêm gì thì hỏi mình trước.')}`,
    link: 'khoang-cach.html', linkText: 'Đọc bài: Khoảng cách AI',
  });

  add({
    id: 'mo-nhom-minh', ch: 'mo', title: 'Nhóm mình đang ở đâu', tone: 'paper', when: c => c.survey !== false,
    html: `${M('Cảnh 06 · Nhóm mình', 'Khảo sát trước buổi · 21 người')}
      <h2 class="t-m split">Nhóm mình đang <em class="it">ở đâu?</em></h2>
      <div class="stats mt-l">
        <div class="hl" data-in><b><span data-fx="count" data-to="67">67</span><small>%</small></b><span>chỉ dùng bản miễn phí</span></div>
        <div data-in><b>7<small>/20</small></b><span>từng dùng Claude (ChatGPT: 20/20)</span></div>
        <div data-in><b>4<small>/16</small></b><span>từng dùng Projects, "góc làm việc riêng"</span></div>
        <div data-in><b>19<small>/21</small></b><span>muốn AI giúp làm <em>tốt hơn</em>, không chỉ nhanh hơn</span></div>
      </div>
      <p class="t-xs mt-l" data-f="1" style="max-width:1500px">Phần lớn chúng ta đang ở tầng <em class="it accent">“1–2 tỷ”</em>. Tin tốt: bậc tiếp theo rất gần, và hôm nay mình đi cùng nhau.</p>`,
    th: (T, s) => s ? T.under(T.el('[data-f="1"]')) : T.ring(T.el('.stats .hl b'), { pad: 40, pady: 30 }),
    note: 'Còn nhóm mình thì sao? Theo khảo sát trước buổi, sáu mươi bảy phần trăm chỉ dùng bản miễn phí. Ai cũng dùng ChatGPT, nhưng chỉ bảy người từng thử Claude, và chỉ bốn người từng dùng Projects. Nghĩa là phần lớn chúng ta đang ở tầng một đến hai tỷ. Tin tốt là bậc tiếp theo rất gần, và mười chín trên hai mươi mốt người muốn AI giúp mình làm tốt hơn, không chỉ nhanh hơn. Hôm nay mình đi cùng nhau.',
    more: `${TIP('Số liệu từ khảo sát 21 người nhóm TA trước buổi chia sẻ đầu tiên. Nếu bạn tự học, hãy tự trả lời: tuần qua mình nhờ AI mấy lần, và việc lớn nhất mình từng giao là gì?')}`,
  });

  /* =================================================================
     KHỞI ĐỘNG
     ================================================================= */
  add({
    id: 'tieu-de', ch: 'khoi', title: 'Làm thật, thấy thật', tone: 'ink', tr: 'zoom', min: 5,
    html: `${M('{{event}}', '{{date}}')}
      <div class="abs" style="right:40px;bottom:-140px;font:italic 300 900px/1 var(--serif);color:transparent;-webkit-text-stroke:2px rgba(242,239,232,.1);letter-spacing:-.05em" data-in="fade">AI</div>
      <h1 class="t-hero split">Làm thật,<br><em class="it">thấy thật<span class="accent">.</span></em></h1>
      <p class="lead mt-l" data-in>Bảy bậc đi xuống phễu, làm bạn với AI. <span class="muted">{{presenter}}</span></p>`,
    th: T => T.under('.lead', { from: 'edge' }),
    note: 'Chào mọi người. Đây là buổi chia sẻ "Làm thật, thấy thật": bảy bậc đi xuống phễu, làm bạn với AI. Hôm nay không phải buổi học. Mình chia sẻ cách mình làm việc cùng AI, bằng những việc thật, để mọi người thấy tận mắt.',
    more: `${H4('Cách dùng bài này khi tự học')}${UL(['Bấm <b>Tiếp →</b> hoặc phím mũi tên. Mỗi slide có lời dẫn ở bảng này.', 'Câu nhờ nào có nút <b>Copy</b> thì dán thẳng vào ChatGPT, Claude hoặc Gemini để làm theo.', 'Muốn ngồi xem như một bộ phim? Chọn <b>Xem phim</b> ở thanh trên cùng.', 'Mỗi bậc có một bài tự học đầy đủ trên website, với file mẫu và đáp án.'])}`,
  });

  add({
    id: 'xem-vai-thu', ch: 'khoi', title: 'Xem vài thứ này', tone: 'ink', tr: 'flow',
    html: c => {
      const list = (c.showcase || []).filter(x => x && x.title);
      const right = list.length
        ? `<div class="show-list" style="width:100%">${list.map((x, i) => `<a href="${esc(x.url || '#')}" target="_blank" rel="noopener" data-f="${i + 1}"><span class="n">${pad(i + 1)}</span><p>${esc(x.title)}</p><small>${x.url ? esc(String(x.url).replace(/^https?:\/\//, '').split('/')[0]) : ''} ↗</small></a>`).join('')}</div>`
        : `<div class="screen" style="width:1180px" data-in="scale"><p class="lbl rec" style="opacity:.7">Màn hình của người chia sẻ</p></div>`;
      return `${M('Cảnh 07 · Xem trước', 'Không giới thiệu, chỉ bấm thử', true)}
        <div class="row" style="align-items:center;gap:90px">
          <h2 class="t-l split" style="width:520px;flex:none">Xem vài thứ <em class="it">này</em>.</h2>
          ${right}
        </div>`;
    },
    th: T => (T.el('.screen') ? T.frame('.screen', { pad: 30 }) : T.under('h2')),
    note: 'Trước khi nói tiếp, mọi người xem vài thứ này. Mình sẽ không giới thiệu gì cả, chỉ bấm thử thôi.',
    more: `<p>Ở buổi gặp, người chia sẻ mở vài sản phẩm do chính mình làm ra bằng cách trò chuyện với AI. Khi tự học, hãy tự hỏi: nếu chỉ cần nói chuyện là làm ra được, mình muốn làm ra thứ gì cho công việc, cho gia đình?</p>`,
  });

  add({
    id: 'ai-lam', ch: 'khoi', title: 'Ai làm? Bao lâu? Bao nhiêu tiền?', tone: 'paper',
    html: `${M('Cảnh 08 · Đoán', 'Hỏi cả phòng')}
      <div class="rows tight">
        <div data-in><span class="n">Ai làm?</span><p>Một công ty phần mềm? Một đội thiết kế?</p></div>
        <div data-in><span class="n">Bao lâu?</span><p>Vài tháng? Vài tuần?</p></div>
        <div data-in><span class="n">Bao nhiêu?</span><p>Vài chục triệu? Vài trăm triệu?</p></div>
      </div>
      <p class="t-m mt-l" data-f="1">Không đội dự án. Không thuê ngoài.</p>
      <p class="t-m it accent" data-f="2">Chỉ là những cuộc trò chuyện.</p>`,
    th: (T, s) => s >= 2 ? T.under(T.el('[data-f="2"]')) : s === 1 ? T.strike(T.el('[data-f="1"]')) : T.bracket('.rows', { gap: 40 }),
    note: 'Mọi người đoán thử: ai làm ra những thứ vừa rồi? Một công ty phần mềm, hay một đội thiết kế? Mất bao lâu, tốn bao nhiêu tiền? Câu trả lời: không đội dự án, không thuê ngoài. Chỉ là những cuộc trò chuyện với AI.',
  });

  add({
    id: 'chao-ban-moi', ch: 'khoi', title: 'Chào người bạn mới (giọng nói)', tone: 'red', timer: 300,
    html: `${M('Cảnh 09 · Demo trực tiếp', 'Chế độ giọng nói', true)}
      <h2 class="t-xl split">Chào<br><em class="it" style="color:var(--paper)">người bạn mới.</em></h2>
      <p class="lead mt-m" data-in style="max-width:1100px">Không phải phần mềm để học thuộc. <b>Một cuộc trò chuyện</b>, bằng giọng nói, ngay bây giờ.</p>
      <div class="mt-m" data-f="1">${PC('Nói vào điện thoại', 'bật loa ngoài', 'Chào bạn! Mình đang đứng trước [số] người làm văn phòng: luật, kế toán, kinh doanh. Bạn chào mọi người một câu, rồi nói xem bạn giúp được họ những việc gì trong một ngày làm việc nhé. Nói ngắn thôi.', 'solid')}</div>`,
    th: (T, s) => { const y = s ? T.box('.pc').b + 50 : T.box('.lead').b + 60; return T.wave(-60, 1980, y, 22, 7); },
    note: 'Giờ mình chào người bạn này bằng giọng nói, ngay trước cả phòng. Mình mở chế độ giọng nói, bật loa ngoài, rồi nói chuyện như với một người thật. Ai trong phòng có câu hỏi, cứ nói, mình hỏi tiếp bạn ấy.',
    more: `${P('GN0', 'Câu chào bằng giọng nói', 'Chào bạn! Mình đang tập dùng chế độ giọng nói. Mình làm [nghề]. Bạn nói xem bạn giúp được mình những việc gì trong một ngày làm việc nhé. Nói ngắn thôi, rồi hỏi lại mình một câu.')}${TIP('Chế độ giọng nói có trong ứng dụng ChatGPT, Claude và Gemini (Gemini Live). Chất lượng tiếng Việt khác nhau theo công cụ và thời điểm, cứ thử để biết.')}`,
    link: 'giong-noi.html', linkText: 'Chuyên đề: Nói thay vì gõ',
  });

  add({
    id: 'ba-cau', ch: 'khoi', title: 'Ba câu để nhớ', tone: 'ink',
    html: `${M('Tinh thần hôm nay', 'Ba câu để nhớ')}
      <div class="rows">
        <div data-f="1"><span class="n">01</span><p>AI là người bạn <em class="it">siêu nhiên</em>: đa nhiệm, ngày càng giỏi.</p></div>
        <div data-f="2"><span class="n">02</span><p>Dám nhờ mọi thứ, và <em class="it accent">dám hỏi lại</em> mọi thứ.<small>Việc gì muốn, cứ nhờ. Việc gì quan trọng, cứ hỏi “căn cứ đâu?”.</small></p></div>
        <div data-f="3"><span class="n">03</span><p>Không biết nhờ thế nào? <em class="it">Hỏi thẳng bạn ấy.</em></p></div>
      </div>`,
    th: (T, s) => s ? T.bracket(T.el(`.rows > :nth-child(${s})`), { gap: 34 }) : T.line(128, 300, 128, 300),
    note: 'Ba câu để nhớ, giữ trên bảng đến cuối buổi. Một: AI là người bạn siêu nhiên, đa nhiệm, ngày càng giỏi. Hai: dám nhờ mọi thứ, và dám hỏi lại mọi thứ. Việc gì muốn thì cứ nhờ, việc gì quan trọng thì cứ hỏi "căn cứ đâu?". Ba: không biết nhờ thế nào thì hỏi thẳng bạn ấy. Mọi thứ chỉ là giao tiếp, như người với người.',
    more: `${P('0a', 'Bạn cần biết gì từ mình?', 'Mình muốn [việc bạn cần]. Bạn cần biết gì từ mình để làm tốt nhất? Hỏi mình từng câu một nhé.')}${P('0c', 'Mình làm nghề này, bạn giúp được gì?', 'Mình làm nghề [___], mỗi ngày mình hay làm [___]. Bạn giúp được mình những việc gì? Gợi ý 10 việc, xếp từ dễ đến khó.')}`,
    link: 'bat-dau.html', linkText: 'Đọc bài: Bắt đầu ở đây',
  });

  /* =================================================================
     GIAO VIỆC NHƯ GIAO CHO ĐỒNG NGHIỆP · Boris Cherny
     ================================================================= */
  act('hoi-1', 'dn', 1, 'Cách nói chuyện', 'Người làm ra công cụ AI nhờ AI thế nào? Câu trả lời đơn giản hơn bạn nghĩ.', ['Case study: Boris Cherny', 'Ngày xưa và bây giờ', 'Ba điều cần nói rõ', 'Mẫu câu giao việc'],
    'Hồi một: cách nói chuyện. Trước khi vào bảy bậc, mình xem người làm ra công cụ AI nhờ AI thế nào. Câu trả lời đơn giản hơn mọi người nghĩ.');
  add({
    id: 'dn-hoi', ch: 'dn', title: 'Người tạo ra Claude Code nhờ AI thế nào?', tone: 'paper',
    html: `${M('Case study', 'Boris Cherny · Anthropic')}
      <p class="lbl red" data-in>Người tạo ra Claude Code</p>
      <h2 class="t-l split mt-s" style="max-width:1500px">Người làm ra công cụ AI <em class="it">nhờ AI thế nào?</em></h2>
      <p class="lead mt-m" data-f="1">Bạn đoán: câu lệnh của anh ấy dài mấy trang? Có công thức bí mật nào không?</p>`,
    th: (T, s) => s ? T.under(T.el('.lead')) : T.under('h2'),
    note: 'Một câu chuyện mới tuần trước. Boris Cherny là người tạo ra Claude Code, công cụ AI viết phần mềm của Anthropic. Mọi người đoán thử: một người như vậy nhờ AI bằng câu lệnh dài mấy trang? Có công thức bí mật nào không?',
    link: 'giao-viec-nhu-dong-nghiep.html', linkText: 'Đọc bài: Giao việc như giao cho đồng nghiệp',
  });

  add({
    id: 'dn-quote', ch: 'dn', title: '“Nói chuyện như với đồng nghiệp”', tone: 'ink', tr: 'iris',
    html: `${M('Case study', 'X · 6/10/2026')}
      <blockquote class="quote split">“Hãy nói chuyện với Claude như nói với <span class="q1">một đồng nghiệp</span>. Prompt chẳng có bí mật gì cả.”</blockquote>
      <p class="who" data-in><i></i>Boris Cherny · người tạo ra Claude Code · dịch từ tiếng Anh</p>`,
    th: T => T.under(T.el('.q1')),
    note: 'Câu trả lời của anh ấy, đăng ngày sáu tháng mười: hãy nói chuyện với Claude như nói với một đồng nghiệp. Prompt chẳng có bí mật gì cả. Với phần lớn công việc, không cần rào trước đón sau, không cần câu lệnh dài. Cứ giao mục tiêu, và bạn ấy sẽ tự tìm cách.',
    more: `${H4('Nguyên văn (tiếng Anh)')}<p><i>"Talk to Claude the way you would a coworker. There's no secret to prompting."</i> Boris Cherny, bài đăng trên X ngày 6/10/2026, được nhiều báo công nghệ đưa tin.</p>`,
  });

  add({
    id: 'dn-xua-nay', ch: 'dn', title: 'Ngày xưa và bây giờ', tone: 'paper',
    html: `${M('Case study', 'Điều gì đã thay đổi')}
      <div class="cols2">
        <div data-in>
          <p class="lbl muted">Ngày xưa · thời Sonnet 3.5</p>
          <p class="t-s mt-s">Câu chữ của prompt quyết định nhiều. Người ta học <span class="strike" data-on="struck:1">“kỹ thuật viết prompt”</span>, công thức, mẫu câu dài.</p>
        </div>
        <div data-f="1">
          <p class="lbl red">Bây giờ</p>
          <p class="t-s mt-s">Mô hình đủ giỏi để tự xoay xở. Điều quan trọng là <em class="it accent">nói rõ ba điều.</em></p>
        </div>
      </div>
`,
    th: (T, s) => s ? T.under(T.el('[data-f="1"] .it')) : T.under(T.el('.cols2 > div .t-s')),
    note: 'Anh ấy kể: thời các mô hình còn yếu, câu chữ trong prompt quyết định rất nhiều. Người ta đi học "kỹ thuật viết prompt", thuộc công thức, chép mẫu câu dài. Bây giờ mô hình đủ giỏi để tự xoay xở. Điều quan trọng không còn là câu chữ, mà là nói rõ ba điều.',
  });

  add({
    id: 'dn-ba-dieu', ch: 'dn', title: 'Nói rõ ba điều', tone: 'ink',
    html: `${M('Case study', 'Ba điều cần nói rõ')}
      <h2 class="t-m split">Nói rõ <em class="it accent">ba điều.</em></h2>
      <div class="anat mt-m">
        <div data-f="1"><span class="k"><em>01</em> Muốn gì</span><span class="v">Mục tiêu, dùng vào đâu, cho ai, thế nào là tốt.</span></div>
        <div data-f="2"><span class="k"><em>02</em> Công sức</span><span class="v">Làm nhanh gọn thôi, hay làm thật kỹ, dành nhiều thời gian suy nghĩ.</span></div>
        <div data-f="3"><span class="k"><em>03</em> Kiểm tra</span><span class="v">Làm sao để biết đã làm đúng. Và báo lại: kiểm gì rồi, chưa kiểm được gì.</span></div>
      </div>`,
    th: (T, s) => s ? T.under(T.el(`.anat > :nth-child(${s}) .k`), { dy: 10 }) : T.under('h2'),
    note: 'Ba điều đó là: một, bạn muốn gì, dùng vào đâu, cho ai, thế nào là tốt. Hai, bạn muốn bạn ấy bỏ bao nhiêu công sức: làm nhanh gọn, hay làm thật kỹ. Ba, làm sao để biết đã làm đúng, và báo lại cho mình đã kiểm gì, chưa kiểm được gì. Điều thứ ba chính là "dám hỏi lại", được dặn từ trước.',
    more: `${H4('Ghép với ba câu để nhớ')}${UL(['<b>Muốn gì</b>: kể như kể cho một đồng nghiệp mới vào nghề.', '<b>Công sức</b>: việc nhỏ thì "nhanh gọn thôi", việc quan trọng thì "cứ làm kỹ, không cần vội".', '<b>Kiểm tra</b>: chính là "dám hỏi lại", nhưng dặn trước để bạn ấy tự kiểm.', 'Thêm câu quen thuộc: <b>"Thiếu gì thì hỏi mình."</b>'])}`,
  });

  add({
    id: 'dn-prompt-that', ch: 'dn', title: 'Prompt thật của anh ấy', tone: 'paper',
    html: `${M('Case study', 'Trích ý từ báo chí · dịch từ tiếng Anh')}
      <p class="lbl muted" data-in>Một prompt anh ấy chia sẻ, nghe như nhắn tin</p>
      <div class="chat mt-m">
        <div class="msg me" data-who="BORIS" data-in style="max-width:1500px;font-size:38px">Tập podcast này <span class="mark" data-m="1" data-on="on:1">thật sự tuyệt vời</span>. Làm cho mình một trang trình bày về nó… <span class="mark" data-m="2" data-on="on:2">dùng thật nhiều token</span>… hình minh hoạ phải <span class="mark" data-m="3" data-on="on:3">đẹp hơn đồ hoạ dữ liệu của New York Times</span>… có khi thêm màu nước.</div>
        <div class="msg ai" data-who="NGƯỜI XEM HỎI" data-f="4">Rốt cuộc anh có muốn màu nước không?</div>
        <div class="msg me" data-who="BORIS" data-f="5" style="font-size:36px">Opus 5.5 có gu. <b>Tôi tin nó tự nấu được.</b></div>
      </div>
`,
    th: (T, s) => s >= 5 ? T.under(T.el('.msg:last-child b')) : s === 4 ? T.ring(T.el('.msg.ai'), { pad: 26 }) : s ? T.under(T.el(`[data-m="${s}"]`), { dy: 8 }) : T.bracket('.msg.me', { gap: 30 }),
    cap: ['Đây là một prompt anh ấy chia sẻ, theo báo chí trích lại. Nghe như nhắn tin cho đồng nghiệp.', '» Muốn gì: một trang trình bày về một tập podcast mà anh thấy thật sự tuyệt vời.', '» Công sức: dùng thật nhiều token, tức là cứ làm kỹ, đừng tiết kiệm.', '» Thế nào là tốt: đẹp hơn đồ hoạ dữ liệu của New York Times.', '» Có người hỏi lại: rốt cuộc anh có muốn màu nước không?', '» Anh trả lời: mô hình mới có gu, tôi tin nó tự nấu được. Giao mục tiêu, không giao từng bước.'],
    note: 'Đây là một prompt anh ấy chia sẻ, theo báo chí trích lại. Nghe như nhắn tin cho đồng nghiệp. Muốn gì: một trang trình bày về một tập podcast mà anh thấy thật sự tuyệt vời. Công sức: dùng thật nhiều token, tức là cứ làm kỹ, đừng tiết kiệm. Thế nào là tốt: đẹp hơn đồ hoạ dữ liệu của New York Times. Có người hỏi lại: rốt cuộc anh có muốn màu nước không? Anh trả lời: mô hình mới có gu, tôi tin nó tự nấu được. Giao mục tiêu, không giao từng bước.',
    more: `${TIP('"Token" là đơn vị chữ mà AI đọc và viết. "Dùng nhiều token" nghĩa là cho phép bạn ấy suy nghĩ lâu, viết dài, thử nhiều lần. Với bản miễn phí, bạn có thể nói "cứ làm kỹ, không cần vội".')}`,
  });

  add({
    id: 'dn-giao-tiep', ch: 'dn', title: 'Mọi thứ là giao tiếp', tone: 'red', tr: 'iris',
    html: `${M('Case study', 'Điều mình vẫn nói')}
      <h2 class="t-xl split" style="max-width:1600px">Mọi thứ là <em class="it" style="color:var(--paper)">giao tiếp</em>, như người với người.</h2>
      <p class="lead mt-l" data-f="1" style="max-width:1150px">Đó là tinh thần của buổi chia sẻ này từ ngày đầu. Giờ chính người làm ra công cụ cũng nói vậy.</p>`,
    note: 'Mọi thứ là giao tiếp, như người với người. Đó là tinh thần của buổi chia sẻ này từ ngày đầu. Giờ chính người làm ra công cụ cũng nói vậy. Không cần học thuộc công thức. Cần học cách giao việc rõ ràng, như mình vẫn giao cho một đồng nghiệp giỏi.',
  });

  const MAU = [
    ['Muốn gì', 'Mình cần [việc gì], để [dùng vào đâu / gửi cho ai].'],
    ['Bối cảnh', '[Những gì một đồng nghiệp mới cần biết: ai, chuyện gì, thế nào là tốt.]'],
    ['Công sức', 'Cứ [làm nhanh gọn thôi / làm thật kỹ, không cần vội].'],
    ['Kiểm tra', 'Xong thì tự kiểm tra bằng cách [___], rồi báo mình đã kiểm gì, chưa kiểm được gì.'],
    ['Hỏi thẳng', 'Thiếu gì thì hỏi mình trước nhé.'],
  ];
  add({
    id: 'dn-mau', ch: 'dn', title: 'Mẫu: giao việc như giao cho đồng nghiệp', tone: 'ink',
    html: `${M('Mang về dùng', 'Mẫu câu giao việc')}
      <h2 class="t-m split">Giao việc như giao cho <em class="it accent">đồng nghiệp</em></h2>
      <div class="anat mt-m">${MAU.map((m, i) => `<div data-f="${i + 1}" data-fx="left"><span class="k">${m[0]}</span><span class="v">${ph(esc(m[1]))}</span></div>`).join('')}</div>
      <style>#s-dn-mau .anat .v{font:400 38px/1.4 var(--sans)}#s-dn-mau .anat .k{font-size:46px}#s-dn-mau .anat>div{padding:20px 0}</style>`,
    th: (T, s) => s ? T.bracket(T.el(`.anat > :nth-child(${s}) .v`), { gap: 26 }) : T.under('h2'),
    note: 'Đây là mẫu câu mang về dùng ngay. Muốn gì: mình cần việc gì, dùng vào đâu, gửi cho ai. Bối cảnh: những gì một đồng nghiệp mới cần biết. Công sức: làm nhanh gọn, hay làm thật kỹ. Kiểm tra: xong thì tự kiểm bằng cách nào, báo lại đã kiểm gì, chưa kiểm được gì. Và câu quen thuộc: thiếu gì thì hỏi mình trước.',
    more: `${P('DN1', 'Mẫu giao việc như giao cho đồng nghiệp', MAU.map(m => m[1]).join('\n'))}${P('DN2', 'Biến câu nhờ quen thuộc thành kiểu đồng nghiệp', 'Đây là câu mình hay nhờ AI: "[dán câu của bạn]". Viết lại giúp mình theo kiểu giao việc cho một đồng nghiệp giỏi: nói rõ mình muốn gì, bỏ bao nhiêu công sức, và kiểm tra thế nào. Giải thích ngắn vì sao bản mới tốt hơn.')}`,
    link: 'giao-viec-nhu-dong-nghiep.html', linkText: 'Đọc bài: Giao việc như giao cho đồng nghiệp',
  });

  add({
    id: 'dn-ngan-khong-thieu', ch: 'dn', title: '“Ngắn” không có nghĩa là “thiếu”', tone: 'paper',
    html: `${M('Case study', 'Một lưu ý trung thực')}
      <h2 class="t-l split">“Ngắn” không có nghĩa là <em class="it accent">“thiếu”</em>.</h2>
      <div class="cols3 mt-l">
        <div data-f="1"><span class="code">Việc nhỏ, quen</span><h3>Một câu là đủ.</h3><p>“Viết lại cho ngắn và lịch sự hơn.”</p></div>
        <div data-f="2"><span class="code">Việc lớn, lạ</span><h3>Vẫn cần bối cảnh.</h3><p>Ví dụ mẫu, ràng buộc, người đọc là ai, chỗ nào không được sai.</p></div>
        <div data-f="3"><span class="code">Không chắc</span><h3>Hỏi thẳng bạn ấy.</h3><p>“Bạn cần biết gì để làm tốt việc này?”</p></div>
      </div>`,
    th: (T, s) => s ? T.under(T.el(`.cols3 > :nth-child(${s}) h3`)) : T.under('h2'),
    note: 'Một lưu ý trung thực: ngắn không có nghĩa là thiếu. Việc nhỏ, quen thuộc thì một câu là đủ. Việc lớn, lạ thì vẫn cần bối cảnh, ví dụ mẫu, ràng buộc. Còn khi không chắc mình cần nói gì, cứ hỏi thẳng bạn ấy: bạn cần biết gì để làm tốt việc này?',
  });

  /* =================================================================
     BẢY BẬC · hàm dựng chung
     ================================================================= */
  const LV = {
    1: { title: 'Email khó, viết lại trong 30 giây', short: 'Email khó', how: 'Giao như cho đồng nghiệp, rồi nhờ góp ý thẳng', time: '20 phút', tools: 'ChatGPT hoặc Claude', tone: 'paper', guess: 'Một email trả lời khách đang bực, bình thường bạn mất bao lâu?' },
    2: { title: 'Tài liệu dài, và bẫy “AI bịa”', short: 'Tài liệu & bẫy', how: 'Bạn giỏi nhưng đôi khi đoán, nên cứ hỏi “căn cứ đâu?”', time: '30 phút', tools: 'Claude, ChatGPT · NotebookLM', tone: 'ink', guess: 'Đọc kỹ một hợp đồng 10 điều kèm phụ lục mất bao lâu? Và có tin AI được không?' },
    3: { title: 'Excel lộn xộn thành sạch', short: 'Excel', how: 'Đưa đống bừa bộn, nhờ sắp xếp', time: '40 phút', tools: 'ChatGPT hoặc Claude', tone: 'paper', guess: '300 dòng, một nhà cung cấp viết 5 kiểu, ngày đủ định dạng. Dọn mất bao lâu?' },
    4: { title: 'Số liệu thành báo cáo thành slide', short: 'Báo cáo & slide', how: 'Một cuộc trò chuyện, nhiều thành phẩm', time: '30 phút', tools: 'ChatGPT hoặc Claude', tone: 'ink', guess: 'Từ file Excel thô đến bài trình chiếu cho sếp: mất bao lâu?' },
    5: { title: 'Trợ lý biết nhớ việc', short: 'Trợ lý nhớ việc', how: 'Dạy bạn ấy một lần, nhờ mãi mãi', time: '30 phút', tools: 'Projects hoặc Gems', tone: 'paper', guess: 'Tuần sau làm lại báo cáo tuần. Chẳng lẽ lại kể từ đầu?' },
    6: { title: 'Tự tạo công cụ, không cần biết code', short: 'Tự tạo công cụ', how: 'Thiếu công cụ? Nhờ bạn ấy làm luôn', time: '30–45 phút', tools: 'Claude hoặc ChatGPT', tone: 'ink', guess: 'Thuê người làm một app theo dõi tiến độ: bao lâu, bao nhiêu tiền?' },
    7: { title: 'Giao cả đầu việc cho AI agent', short: 'Giao cả đầu việc', how: 'Giao cả đầu việc, không chỉ giao câu hỏi', time: '45 phút', tools: 'Claude Cowork', tone: 'paper', guess: 'Báo cáo quản trị tháng từ 5 chi nhánh, mỗi nơi gửi một kiểu: bình thường mất bao lâu?' },
  };
  const other = t => (t === 'ink' ? 'paper' : 'ink');
  function card(n, o) {
    const L = LV[n];
    add(Object.assign({
      id: 'b' + n, ch: 'b' + n, title: `Bậc ${n} · ${L.title}`, tone: L.tone, tr: 'iris',
      html: `${M(`Bậc ${pad(n)} / 07`, `${L.time} · ${L.tools}`)}
        <div class="numeral" data-in="num">${pad(n)}</div>
        <p class="lbl red" data-in>Cách nhờ · ${esc(L.how)}</p>
        <h2 class="t-l split mt-s" style="max-width:1350px">${esc(L.title)}</h2>
        <div class="mt-l" data-f="1" style="max-width:1100px"><p class="lbl muted">Đoán trước</p><p class="lead mt-s">${esc(L.guess)}</p></div>
        ${MF(n)}`,
      th: (T, s) => (s ? T.under(T.el('[data-f="1"] .lead')) : T.under('h2')),
      link: `cap-${n}.html`, linkText: `Bài tự học: Bậc ${n}`,
    }, o));
  }
  function stepsSlide(n, o) {
    const L = LV[n];
    add(Object.assign({
      id: `b${n}-lam`, ch: 'b' + n, title: `Bậc ${n} · Mọi người làm`, tone: o.tone || other(L.tone),
      html: `${M(`Bậc ${pad(n)} · ${n === 5 || n === 7 ? 'Cùng xem' : 'Mọi người làm'}`, L.short)}
        <span class="mode" data-in style="align-self:flex-start;margin-bottom:30px"><i></i>${esc(o.mode)}</span>
        <h2 class="t-m split">${o.head}</h2>
        <div class="cols3 mt-m">${o.items.map((s, i) => `<div data-f="${i + 1}"><span class="code">${esc(s[0])}</span><h3>${esc(s[1])}</h3><p class="q">${ph(esc(s[2]))}</p></div>`).join('')}</div>
        ${o.quote ? `<p class="t-xs it mt-l" data-f="${o.items.length + 1}" style="max-width:1500px">“${esc(o.quote)}”</p>` : ''}
        ${MF(n)}`,
      th: (T, s) => (s && s <= o.items.length ? T.under(T.el(`.cols3 > :nth-child(${s}) h3`)) : s ? T.under(T.el(`[data-f="${o.items.length + 1}"]`)) : T.under('h2')),
    }, o));
  }
  function exSlide(n, o) {
    const L = LV[n];
    add(Object.assign({
      id: `b${n}-giong-vay`, ch: 'b' + n, title: `Bậc ${n} · Còn việc gì giống vậy?`, tone: o.tone || L.tone,
      html: `${M(`Bậc ${pad(n)}`, 'Còn việc gì giống vậy?')}
        <h2 class="t-m split">Còn việc gì <em class="it">giống vậy?</em></h2>
        <div class="ex2 mt-m"><div data-f="1"><h3>Công việc</h3><ul>${o.work.map(w => `<li>${esc(w)}</li>`).join('')}</ul></div><div data-f="2"><h3>Đời sống</h3><ul>${o.life.map(w => `<li>${esc(w)}</li>`).join('')}</ul></div></div>
        ${MF(n)}`,
      th: (T, s) => (s ? T.bracket(T.el(`.ex2 > :nth-child(${s}) ul`), { gap: 34 }) : T.under('h2')),
    }, o));
  }

  /* =================================================================
     BẬC 1 · EMAIL KHÓ
     ================================================================= */
  act('hoi-2', 'b1', 2, 'Bảy bậc', 'Bảy việc thật ở văn phòng. Bảy cách nhờ, dùng được cho hàng trăm việc khác, cả công việc lẫn đời sống.', [1, 2, 3, 4, 5, 6, 7].map(n => `${esc(LV[n].short)}`),
    'Hồi hai: bảy bậc. Bảy việc thật ở văn phòng, đi từ dễ đến khó, như một tình bạn lớn dần. Mỗi bậc là một cách nhờ dùng được cho hàng trăm việc khác, cả công việc lẫn đời sống.');
  card(1, {
    note: 'Bậc một: email khó, viết lại trong ba mươi giây. Cách nhờ: giao việc như giao cho một đồng nghiệp, rồi nhờ bạn ấy góp ý thẳng. Đoán trước: một email trả lời khách đang bực, bình thường mọi người mất bao lâu?',
    more: `${H4('Tình huống mẫu (hư cấu)')}<p>Chị Lan, trưởng phòng hành chính Công ty A, khách quen 3 năm. Đơn 20 tủ hồ sơ và 15 ghế xoay giao chậm 5 ngày do kho điều phối nhầm xe. Đã sắp xe riêng, giao đủ trong 2 ngày tới. Được duyệt bù: miễn phí vận chuyển đơn sau, hoặc giảm 5% đơn này.</p>`,
  });
  add({
    id: 'b1-nguoi-la', ch: 'b1', title: 'Bậc 1 · Nhờ kiểu người lạ', tone: 'ink',
    html: `${M('Bậc 01 · Thử nghiệm', 'Kiểu “người lạ”')}
      <div class="chat" style="margin-top:20px">
        <div class="msg me" data-who="BẠN" data-f="1" data-fx="type">viết email trả lời khách về việc giao hàng chậm</div>
        <div class="msg ai" data-who="AI" data-f="2" data-fx="type" style="max-width:1300px">Kính gửi Quý khách, Chúng tôi vô cùng lấy làm tiếc về sự chậm trễ trong việc giao hàng. Chúng tôi xin cam kết sẽ giao hàng trong thời gian sớm nhất. Trân trọng, [Tên của bạn]</div>
      </div>
      <span class="stamp" data-f="3" data-fx="stamp" style="right:180px;bottom:200px">Sáo rỗng</span>
      <p class="t-xs it" data-f="4" style="position:absolute;left:128px;bottom:120px;max-width:1100px">Lỗi không ở bạn ấy. Ở cách mình <em class="accent">kể</em>.</p>
      ${MF(1)}`,
    th: (T, s) => s >= 4 ? T.under(T.el('[data-f="4"]')) : s === 3 ? T.ring(T.el('.stamp'), { pad: 30 }) : s === 2 ? T.bracket('.msg.ai', { gap: 30 }) : s === 1 ? T.under(T.el('.msg.me'), { full: true, dy: 18 }) : T.line(128, 200, 128, 200),
    note: 'Thử nhờ kiểu người lạ trước, cụt lủn như lúc vội: viết email trả lời khách về việc giao hàng chậm. Kết quả: một email đúng ngữ pháp, lịch sự, nhưng ai đọc cũng biết là thư mẫu. Không tên khách, không lý do, không ngày giao. Lỗi không ở bạn ấy. Nếu mình nhờ một đồng nghiệp mới mà chỉ nói đúng một câu này, họ cũng viết ra như thế thôi.',
    more: `${P('1a', 'Kiểu “người lạ” (cố tình nhờ cụt lủn)', 'viết email trả lời khách về việc giao hàng chậm')}${TIP('Đừng bỏ qua bước này. Thấy "bản chung chung" một lần, bạn sẽ hiểu rõ các bước sau khác ở đâu.')}`,
  });
  add({
    id: 'b1-dong-nghiep', ch: 'b1', title: 'Bậc 1 · Giao như cho đồng nghiệp', tone: 'ink', tr: 'flow',
    html: `${M('Bậc 01 · Thử nghiệm', 'Kiểu “đồng nghiệp”')}
      <div class="chat" style="margin-top:10px">
        <div class="msg me" data-who="BẠN" data-in style="max-width:1450px"><span class="mark" data-on="on:1">Mình cần trả lời chị Lan, khách quen 3 năm, đang rất bực vì đơn 20 tủ hồ sơ giao chậm 5 ngày</span> do kho điều phối nhầm xe. Mình muốn giữ khách. <span class="mark" data-on="on:2">Viết ngắn, thật lòng, có mốc giao mới.</span> <span class="mark" data-on="on:3">Thiếu gì thì hỏi mình trước.</span></div>
        <div class="msg ai" data-who="AI" data-f="4" data-fx="type" style="max-width:1250px">Mình hỏi 2 câu trước nhé. Ngày giao chắc chắn là ngày nào? Công ty được phép bù đắp gì cho chị Lan?</div>
      </div>
      <p class="t-xs it" data-f="5" style="position:absolute;left:128px;bottom:120px">Bạn ấy <em class="accent">hỏi lại</em>, như một đồng nghiệp tận tâm.</p>
      ${MF(1)}`,
    th: (T, s) => s >= 5 ? T.under(T.el('[data-f="5"]')) : s === 4 ? T.bracket('.msg.ai', { gap: 30 }) : T.bracket('.msg.me', { gap: 30 }),
    cap: ['Lần này giao như giao cho một đồng nghiệp.', '» Muốn gì: trả lời chị Lan, khách quen ba năm, đang bực vì đơn hàng giao chậm năm ngày.', '» Thế nào là tốt: ngắn, thật lòng, có mốc giao mới.', '» Và câu quen thuộc: thiếu gì thì hỏi mình trước.', '» Bạn ấy không viết ngay. Bạn ấy hỏi lại: ngày giao chắc chắn là ngày nào, công ty được bù đắp gì.', '» Như một đồng nghiệp tận tâm.'],
    note: 'Lần này giao như giao cho một đồng nghiệp. Muốn gì: trả lời chị Lan, khách quen ba năm, đang bực vì đơn hàng giao chậm năm ngày. Thế nào là tốt: ngắn, thật lòng, có mốc giao mới. Và câu quen thuộc: thiếu gì thì hỏi mình trước. Bạn ấy không viết ngay mà hỏi lại: ngày giao chắc chắn là ngày nào, công ty được bù đắp gì. Như một đồng nghiệp tận tâm.',
    more: `${P('1b', 'Hỏi thẳng bạn ấy', 'Mình cần trả lời một khách hàng lâu năm đang rất bực vì đơn hàng giao chậm. Bạn cần biết gì để viết email này thật tốt? Hỏi mình từng câu một nhé.')}${P('1e', 'Bản đầy đủ: giao một lần cho trọn', 'Mình cần trả lời chị Lan, trưởng phòng hành chính Công ty A, khách quen 3 năm, đang rất bực vì đơn 20 tủ hồ sơ giao chậm 5 ngày do kho điều phối nhầm xe. Đã sắp xe riêng, giao đủ trong 2 ngày tới. Được bù: miễn phí vận chuyển đơn sau hoặc giảm 5% đơn này (chọn một).\nMình muốn giữ khách. Viết ngắn dưới 150 chữ, thật lòng, không đổ lỗi, có mốc giao cụ thể. Làm 2 phiên bản: trang trọng và thân thiện.\nXong thì tự đọc lại như chị Lan, đánh dấu chỗ bạn tự thêm mà mình chưa nói. Thiếu gì thì hỏi mình trước.')}`,
  });
  add({
    id: 'b1-gop-y', ch: 'b1', title: 'Bậc 1 · Nhờ góp ý thẳng', tone: 'paper', tr: 'wipe',
    html: `${M('Bậc 01 · Nhờ góp ý thẳng', 'Đổi vai')}
      <div class="chat">
        <div class="msg me" data-who="BẠN" data-in>Giờ bạn đóng vai chị Lan, đang rất bực và khó tính. Đọc email này, nói thật 3 chỗ chưa ổn, rồi viết lại giúp mình.</div>
        <div class="msg ai" data-who="AI · VAI CHỊ LAN" data-f="1" style="max-width:1400px"><b>Nói thật nhé:</b><ul><li data-f="2">“Vô cùng lấy làm tiếc” nghe như thư mẫu, không thấy ai thật sự xin lỗi.</li><li data-f="3">“Trong 2 ngày tới” là ngày nào? Tôi cần một ngày cụ thể.</li><li data-f="4">Ưu đãi đặt ngay đầu thư nghe như đang mua chuộc tôi.</li></ul></div>
      </div>
      <p class="t-xs it" data-f="5" style="margin-top:44px">AI hay khen cho bạn vui. <em class="accent">Phải mời</em> bạn ấy nói thật.</p>
      ${MF(1)}`,
    th: (T, s) => s >= 5 ? T.under(T.el('[data-f="5"]')) : s >= 2 ? T.bracket(T.el(`.msg.ai li:nth-child(${s - 1})`), { gap: 24 }) : s === 1 ? T.bracket('.msg.ai', { gap: 30 }) : T.bracket('.msg.me', { gap: 30 }),
    note: 'Email đã khá. Nhưng khá chưa chắc đủ để gửi cho một khách đang giận. Mình mời bạn ấy đổi vai: đóng vai chị Lan đang rất bực, đọc email, nói thật ba chỗ chưa ổn. Lời chê rất cụ thể, có khi hơi đau: câu xin lỗi nghe như thư mẫu, "hai ngày tới" là ngày nào, ưu đãi đặt đầu thư nghe như mua chuộc. AI vốn hay khen cho mình vui, nên mình phải chủ động mời bạn ấy nói thật.',
    more: `${P('1c', 'Nhờ góp ý thẳng', 'Giờ bạn đóng vai người nhận, một người đang rất bực và khó tính. Đọc email này rồi nói thật 3 chỗ chưa ổn. Xong viết lại giúp mình.')}${P('1f', 'Soi chỗ bạn ấy tự thêm', 'Trong email này, liệt kê giúp mình mọi tên người, con số, ngày giờ, cam kết và ưu đãi. Cái nào là mình đã nói, cái nào là bạn tự thêm?')}${TIP('Nếu bạn ấy chỉ khen chung chung, nói: "Bạn đang nể mình quá. Chê thật đi, như chị Lan sẽ nghĩ."')}`,
  });
  stepsSlide(1, {
    tone: 'ink', head: 'Ba bước, <em class="it">ba phút</em>', mode: 'Mọi người làm · 3 phút', timer: 180,
    items: [['1a', 'Kiểu “người lạ”', 'viết email trả lời khách về việc giao hàng chậm'], ['1b', 'Giao như đồng nghiệp', 'Mình cần trả lời [ai] về [chuyện gì]. Viết ngắn, thật lòng. Thiếu gì thì hỏi mình trước.'], ['1c', 'Nhờ góp ý thẳng', 'Đóng vai người nhận đang rất bực, nói thật 3 chỗ chưa ổn, rồi viết lại.']],
    quote: 'Cứ kể như kể cho một người bạn mới vào nghề. Quên ý nào thì bạn ấy sẽ hỏi lại.',
    note: 'Giờ đến lượt mọi người. Chọn một tình huống của ngành mình, hoặc một email thật đang phải viết, nhớ che tên và số tiền. Làm ba bước: nhờ kiểu người lạ, giao như đồng nghiệp, rồi nhờ góp ý thẳng. Ba phút. Cứ kể như kể cho một người bạn mới vào nghề, quên ý nào thì bạn ấy sẽ hỏi lại.',
    more: `${P('1g', 'Pháp lý · Công văn giải trình', 'Công ty mình vừa nhận công văn của [cơ quan] yêu cầu giải trình về [vấn đề] trong 10 ngày. Mình cần soạn công văn trả lời, chặt chẽ, đúng thể thức, không thừa nhận quá những gì đã xảy ra. Bạn cần biết gì thì hỏi mình từng câu một nhé.')}${P('1h', 'Kế toán · Nhắc nợ lần 2', 'Khách hàng [B] quá hạn thanh toán 45 ngày, mình đã nhắc 1 lần qua email. Mình cần email nhắc lần 2, lịch sự mà cương quyết, nêu rõ bước tiếp theo nếu vẫn chưa thanh toán. Hỏi mình từng câu một trước khi viết nhé.')}${P('1i', 'Kinh doanh · Từ chối giảm giá khéo', 'Khách hỏi giảm giá 15% nhưng mình chỉ được duyệt tối đa 5%. Mình cần trả lời khéo để không mất khách, có thể đề xuất thứ khác thay cho giảm giá. Bạn cần biết gì về khách và đơn hàng thì hỏi mình nhé.')}`,
  });
  exSlide(1, {
    work: ['Tin nhắn báo sếp dự án trễ hạn', 'Trả lời đánh giá 1 sao của khách', 'Công văn trả lời cơ quan', 'Góp ý nhân viên mà không làm họ nản'],
    life: ['Bài phát biểu đám cưới bạn thân', 'Tin nhắn làm hoà sau một lần cãi nhau', 'Thư gửi cô giáo chủ nhiệm của con', 'Nhắc khéo người quen trả tiền'],
    note: 'Còn việc gì giống vậy? Việc gì cần chọn lời, đều làm theo cùng một nhịp: giao như cho đồng nghiệp, để bạn ấy hỏi lại, rồi nhờ bạn ấy đóng vai người nghe để chê thẳng. Mọi người kể thử một việc của mình.',
  });

  /* =================================================================
     BẬC 2 · TÀI LIỆU DÀI & BẪY
     ================================================================= */
  card(2, {
    note: 'Bậc hai: tài liệu dài, và bẫy AI bịa. Cách nhờ: bạn ấy giỏi nhưng đôi khi đoán, nên cứ hỏi căn cứ đâu. Đoán trước: đọc kỹ một hợp đồng mười điều kèm phụ lục, tìm hết chỗ bất lợi, mất bao lâu? Và có tin AI được không?',
    more: `<p>Hợp đồng mẫu hư cấu số 27/2026/HĐMB/PA-SM: bên bán là Kệ kho Phú An, bên mua là Sao Mai. Bạn đóng vai pháp chế bên mua.</p><p><a href="files/cap-2/hop-dong-mua-ban-ke-kho-MAU.docx">Tải hợp đồng mẫu (.docx) ↓</a></p>`,
  });
  add({
    id: 'b2-den', ch: 'b2', title: 'Bậc 2 · Đèn giao thông dữ liệu', tone: 'paper',
    html: `${M('Bậc 02 · Ranh giới của tình bạn', 'Đèn giao thông dữ liệu')}
      <h2 class="t-m split">Bạn thân đến mấy cũng có chuyện <em class="it accent">mình không kể.</em></h2>
      <div class="rows lights mt-m">
        <div data-f="1"><span class="n"><i class="dotc g"></i>Xanh</span><p>Công khai<small>Văn bản pháp luật, tin tức, kiến thức chung → thoải mái.</small></p></div>
        <div data-f="2"><span class="n"><i class="dotc y"></i>Vàng</span><p>Nội bộ<small>Hợp đồng, báo cáo, email → che tên người, tên công ty, số tiền, mã số trước.</small></p></div>
        <div data-f="3"><span class="n"><i class="dotc r"></i>Đỏ</span><p>Bí mật<small>Thông tin khách hàng, số tài khoản, mật khẩu, số liệu chưa công bố → không kể.</small></p></div>
      </div>
      ${MF(2)}`,
    th: (T, s) => s ? T.bracket(T.el(`.rows > :nth-child(${s})`), { gap: 34 }) : T.under('h2'),
    note: 'Trước khi đưa tài liệu cho AI, nhìn đèn giao thông. Bạn thân đến mấy cũng có chuyện mình không kể. Đèn xanh: thông tin công khai, thoải mái. Đèn vàng: tài liệu nội bộ như hợp đồng, báo cáo, nhớ che tên, số tiền, mã số trước. Đèn đỏ: thông tin khách hàng, tài khoản, mật khẩu, số liệu chưa công bố, không kể. Hôm nay mình dùng hợp đồng hư cấu, nên an toàn tuyệt đối.',
    more: `${TIP('Che nhanh trong Word: Ctrl + H (Tìm và thay thế), đổi tên công ty thành "Công ty A", số tiền thành "[X] đồng". Điều khoản vẫn nguyên nên bạn ấy vẫn phân tích được. Với tài liệu công ty, luôn xem quy định của công ty trước.')}`,
    link: 'an-toan.html', linkText: 'Đọc bài: An toàn & tỉnh táo',
  });
  add({
    id: 'b2-hop-dong', ch: 'b2', title: 'Bậc 2 · Hai con số trông giống đáp án', tone: 'paper', tr: 'flow',
    html: `${M('Bậc 02 · Thí nghiệm', 'Hợp đồng 27/2026 · trích')}
      <div class="rows">
        <div data-in><span class="n">Điều 3.4</span><p style="font-size:52px">Bên mua chậm thanh toán: trả lãi <span class="c1">0,1%/ngày</span>.</p></div>
        <div data-in data-on="hl:1"><span class="n">Điều 7.1</span><p style="font-size:52px">Bên mua chậm thanh toán quá 10 ngày: phạt <span class="c2">8%</span>.</p></div>
        <div data-in><span class="n">Điều 7.2</span><p style="font-size:52px">Bên bán chậm giao hàng: hai bên sẽ cùng <span class="c3">thương lượng</span>.</p></div>
      </div>
      <p class="lead mt-m" data-f="2">Câu hỏi bẫy: <b>“Nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?”</b></p>
      ${MF(2)}`,
    th: (T, s) => s >= 2 ? T.bracket(T.el('[data-f="2"]'), { gap: 30 }) : s === 1 ? T.ring(T.el('.c2'), { pad: 30, pady: 20, text: true }) : T.ring(T.el('.c1'), { pad: 26, pady: 18, text: true }),
    cap: ['Trong hợp đồng có ba câu này.', 'Điều 3.4: bên mua chậm thanh toán thì trả lãi không phẩy một phần trăm mỗi ngày.', '» Điều 7.1: bên mua chậm quá mười ngày thì phạt tám phần trăm.', 'Điều 7.2: bên bán chậm giao hàng thì hai bên thương lượng. Không có con số nào.', '» Và đây là câu hỏi bẫy: nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?'],
    note: 'Trong hợp đồng có ba câu này. Điều 3.4: bên mua chậm thanh toán thì trả lãi không phẩy một phần trăm mỗi ngày. Điều 7.1: bên mua chậm quá mười ngày thì phạt tám phần trăm. Điều 7.2: bên bán chậm giao hàng thì hai bên thương lượng, không có con số nào. Hai con số kia trông rất giống đáp án. Và đây là câu hỏi bẫy: nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?',
    more: `${P('2-bẫy', 'Câu hỏi bẫy', 'Nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?')}${TIP('Mẹo để bẫy dễ "ăn": mở một cuộc trò chuyện mới, chỉ upload hợp đồng rồi hỏi luôn câu bẫy.')}`,
  });
  add({
    id: 'b2-bay', ch: 'b2', title: 'Bậc 2 · AI đoán sai', tone: 'paper', tr: 'flow',
    html: `${M('Bậc 02 · Thí nghiệm', 'Cuộc trò chuyện')}
      <div class="chat">
        <div class="msg me" data-who="BẠN" data-in>Nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?</div>
        <div class="msg ai" data-who="AI" data-f="1" data-fx="type" style="max-width:1250px">Theo hợp đồng, bên bán sẽ bị phạt 8% giá trị phần hợp đồng bị vi phạm.</div>
      </div>
      <span class="stamp" data-f="2" data-fx="stamp" style="right:150px;top:640px">Đoán sai</span>
      <p class="lead" data-f="3" style="position:absolute;left:128px;bottom:130px;max-width:1300px">8% là mức phạt <b>bên mua</b> chậm trả (Điều 7.1), không phải bên bán. Trả lời trôi chảy, tự tin, và <b class="accent">sai</b>.</p>
      ${MF(2)}`,
    th: (T, s) => s >= 3 ? T.under(T.el('[data-f="3"] .accent')) : s === 2 ? T.ring(T.el('.stamp'), { pad: 34 }) : s === 1 ? T.bracket('.msg.ai', { gap: 30 }) : T.bracket('.msg.me', { gap: 30 }),
    note: 'Và đây là chuyện hay xảy ra. Bạn ấy trả lời: bên bán sẽ bị phạt tám phần trăm. Trôi chảy, tự tin, và sai. Tám phần trăm là mức phạt bên mua chậm trả. Nếu hôm nay bạn ấy trả lời đúng là hợp đồng không quy định, thì đó là hôm bạn ấy cẩn thận. Không phải lúc nào cũng vậy.',
    more: `${TIP('Nếu bạn ấy trả lời đúng ngay ("hợp đồng không quy định"), thử thêm vài lần ở cuộc trò chuyện mới, hoặc với công cụ khác. Mục tiêu không phải bắt lỗi AI cho vui, mà để tự tay thấy AI đoán.')}`,
  });
  add({
    id: 'b2-dap-an', ch: 'b2', title: 'Bậc 2 · Hợp đồng không quy định', tone: 'ink', tr: 'iris',
    html: `${M('Bậc 02 · Đáp án', 'Điều 7.2')}
      <p class="lbl red" data-in>Đáp án đúng</p>
      <h2 class="t-l split mt-s">Hợp đồng <em class="it">không quy định.</em></h2>
      <p class="lead mt-s" data-in>Điều 7.2 chỉ ghi “hai bên sẽ cùng thương lượng”.</p>
      <p class="t-l mt-xl" data-f="1">AI không nói dối.</p>
      <p class="t-l it accent" data-f="2">Nó đoán.</p>
      ${MF(2)}`,
    th: (T, s) => s >= 2 ? T.under(T.el('[data-f="2"]')) : s === 1 ? T.under(T.el('[data-f="1"]')) : T.under('h2'),
    note: 'Đáp án đúng: hợp đồng không quy định. Điều 7.2 chỉ ghi hai bên sẽ cùng thương lượng. AI không nói dối, nó đoán. Giống một người bạn rất giỏi nhưng ngại nói "mình không biết". Đây cũng là điều Karpathy nói: năng lực AI không đều. Tóm tắt thì rất giỏi, nhưng khi tài liệu im lặng, bạn ấy dễ lấp chỗ trống bằng một con số gần giống.',
  });
  add({
    id: 'b2-hoi-thang', ch: 'b2', title: 'Bậc 2 · Làm sao biết bạn không bịa?', tone: 'paper', tr: 'wipe',
    html: `${M('Bậc 02 · Hỏi thẳng bạn ấy', 'Khoảnh khắc chính')}
      <div class="chat">
        <div class="msg me" data-who="BẠN" data-in>Làm sao để mình biết bạn không bịa? Gợi ý cách để mình kiểm tra bạn đi.</div>
        <div class="msg ai" data-who="AI" data-f="1" style="max-width:1400px">Bạn có thể yêu cầu mình:<ul><li data-f="2">trích nguyên văn kèm số Điều cho mỗi ý;</li><li data-f="3">ghi rõ ý nào là suy luận, ý nào có trong tài liệu;</li><li data-f="4">trả lời “hợp đồng không quy định” nếu không tìm thấy.</li></ul></div>
      </div>
      <p class="t-xs it" data-f="5" style="margin-top:40px">Bạn ấy <em class="accent">dạy mình cách bắt lỗi</em> chính bạn ấy.</p>
      ${MF(2)}`,
    th: (T, s) => s >= 5 ? T.under(T.el('[data-f="5"] .accent')) : s >= 2 ? T.bracket(T.el(`.msg.ai li:nth-child(${s - 1})`), { gap: 24 }) : s === 1 ? T.bracket('.msg.ai', { gap: 30 }) : T.bracket('.msg.me', { gap: 30 }),
    note: 'Giờ là khoảnh khắc chính của bậc này. Hỏi thẳng bạn ấy: làm sao để mình biết bạn không bịa? Bạn ấy tự chỉ cách kiểm tra chính mình: trích nguyên văn kèm số Điều, ghi rõ ý nào là suy luận, và nói thẳng "không quy định" nếu không tìm thấy. Bạn ấy dạy mình cách bắt lỗi chính bạn ấy. Rồi mình nói: ok, làm đúng như bạn vừa nói nhé. Mở hợp đồng gốc, đối chiếu Điều 7.2 trước cả phòng.',
    more: `${P('2a', 'Nhờ tự nhiên', 'Mình là bên mua. Tóm tắt giúp mình hợp đồng này, mình cần biết ai phải làm gì, hạn khi nào, chỗ nào bất lợi cho mình.')}${P('2b', 'Hỏi thẳng: làm sao biết bạn không bịa?', 'Làm sao để mình biết bạn không bịa? Bạn gợi ý cách để mình kiểm tra bạn đi.')}${P('2c', 'Làm đúng như bạn vừa nói', 'Ok, làm đúng như bạn vừa nói nhé: trả lời lại câu hỏi về phạt giao hàng chậm, trích nguyên văn kèm số Điều. Không có trong hợp đồng thì nói rõ là không có.')}${TIP('NotebookLM: mỗi câu trả lời có số trích dẫn, bấm vào là nhảy tới đoạn gốc. Rất hợp để đọc tài liệu dài.')}`,
    link: 'cap-2.html', linkText: 'Bài tự học: Bậc 2',
  });
  stepsSlide(2, {
    tone: 'ink', head: 'Bắt quả tang <em class="it">AI đoán</em>', mode: 'Mọi người làm · 4 phút', timer: 240,
    items: [['2a', 'Nhờ tự nhiên', 'Mình là bên mua. Tóm tắt: ai làm gì, hạn khi nào, chỗ nào bất lợi cho mình.'], ['Bẫy', 'Hỏi điều không có', 'Nếu bên bán giao hàng chậm thì bị phạt bao nhiêu tiền?'], ['2b', 'Hỏi thẳng bạn ấy', 'Làm sao để mình biết bạn không bịa? Gợi ý cách để mình kiểm tra bạn đi.']],
    quote: 'AI không nói dối, nó đoán. Cứ hỏi lại: căn cứ đâu?',
    note: 'Đến lượt mọi người. Upload hợp đồng mẫu, làm ba bước: nhờ tự nhiên, hỏi câu bẫy, rồi hỏi thẳng làm sao biết bạn không bịa. Bốn phút. Cặp nào bắt được AI đoán sai thì hô lên.',
  });
  exSlide(2, {
    work: ['Hồ sơ mời thầu 80 trang', 'Báo cáo tài chính của đối tác', 'Quy chế, quy trình nội bộ', 'Văn bản pháp luật mới ban hành'],
    life: ['Hợp đồng thuê nhà', 'Điều khoản bảo hiểm', 'Cuốn sách 300 trang chưa kịp đọc', 'Hướng dẫn sử dụng máy móc'],
    note: 'Còn việc gì giống vậy? Mọi tài liệu dài: hồ sơ mời thầu, báo cáo tài chính, quy chế nội bộ. Và đời sống: hợp đồng thuê nhà, điều khoản bảo hiểm, cuốn sách chưa kịp đọc. Cứ nhờ đọc, nhưng với điều quan trọng thì luôn hỏi căn cứ đâu.',
  });

  /* =================================================================
     BẬC 3 · EXCEL
     ================================================================= */
  card(3, {
    note: 'Bậc ba: Excel lộn xộn thành sạch. Cách nhờ: đưa đống bừa bộn, nhờ sắp xếp. Đoán trước: ba trăm dòng chi phí, một nhà cung cấp viết năm kiểu, ngày đủ định dạng. Dọn tay mất bao lâu?',
    more: `<p><a href="files/cap-3/chi-phi-thang-9.xlsx">Tải file chi phí tháng 9 (.xlsx) ↓</a> · <a href="files/cap-3/cong-no-mau.xlsx">File công nợ mẫu ↓</a></p>`,
  });
  const ROWS = [
    ['5-9-26', '05/09/2026', 'Minh Phat', 'VPP Minh Phát', 'Giấy A4 Double A 10 ram', '1.850.000', '1.850.000'],
    ['2026-09-06', '06/09/2026', 'GRAB', 'Grab', 'Grab đi gặp khách hàng', '215.000', '215.000'],
    ['07 tháng 9', '07/09/2026', 'CTY VS SACH XANH', 'Vệ sinh Sạch Xanh', 'Vệ sinh văn phòng định kỳ', '3.664.000', '3.664.000'],
    ['2026-09-06', '', 'GRAB', '', 'Grab đi gặp khách hàng', '215.000', '', 1],
    ['09/09/2026', '09/09/2026', 'NH Sen Vàng', 'Nhà hàng Sen Vàng', 'Tiếp khách đối tác', '4.920.000', '4.920.000'],
    ['10-9-26', '10/09/2026', 'minh phát co.', 'VPP Minh Phát', 'Mực in HP 12A', '400.000đ', '400.000', 0, 1],
    ['07 tháng 9', '', 'CTY VS SACH XANH', '', 'Vệ sinh văn phòng định kỳ', '3.664.000', '', 1],
    ['12 tháng 9', '12/09/2026', 'IN ANH SANG', 'In Ánh Sáng', 'In catalogue sản phẩm', '7.300.000', '7.300.000'],
  ];
  const cell = (a, b, cls = '') => `<span class="cell ${cls}"><span class="a">${esc(a)}</span><span class="b">${esc(b || a)}</span></span>`;
  add({
    id: 'b3-bang', ch: 'b3', title: 'Bậc 3 · Bảng lộn xộn thành sạch', tone: 'paper', tr: 'flow',
    html: `${M('Bậc 03 · Như đời thật', '300 dòng · trích 8 dòng')}
      <p class="lbl swap" style="margin-bottom:26px;position:relative;height:28px"><span data-on="hide:3" class="t-before">Trước: như đời thật, mỗi người nhập một kiểu</span><span class="accent t-after" data-on="show:3">Sau: nhờ bạn ấy sắp xếp, không cần biết hàm gì</span></p>
      <div class="sheet" data-on="mark:1 dedup:2 clean:3">
        <div class="tr th"><span>Ngày</span><span>Nhà cung cấp</span><span>Nội dung</span><span class="money">Số tiền</span><span></span></div>
        ${ROWS.map(r => `<div class="tr${r[7] ? ' dup' : ''}">${cell(r[0], r[1])}${cell(r[2], r[3])}<span class="cell">${esc(r[4])}</span>${cell(r[5], r[6], 'money' + (r[8] ? ' bad' : ''))}<span class="flag">${r[7] ? 'TRÙNG' : ''}</span></div>`).join('')}
      </div>
      <p class="small mt-m muted">Cả file: 8 dòng trùng · 109 ô ngày gõ dạng chữ · 3 số tiền gõ dạng chữ · 11 nhà cung cấp, mỗi nơi viết 3–6 kiểu.</p>
      <style>
        #s-b3-bang .sheet .tr.dup .flag{opacity:0;transition:opacity .4s}#s-b3-bang .sheet.mark .tr.dup{background:color-mix(in srgb,var(--red) 13%,transparent)}#s-b3-bang .sheet.mark .tr.dup .flag{opacity:1}
        #s-b3-bang .sheet.clean .bad{color:inherit}#s-b3-bang .swap span{position:absolute;left:0;top:0;white-space:nowrap;transition:opacity .5s,transform .7s var(--io)}#s-b3-bang .t-after{opacity:0;transform:translateY(16px)}#s-b3-bang .t-after.show{opacity:1;transform:none}#s-b3-bang .t-before.hide{opacity:0;transform:translateY(-16px)}
      </style>
      ${MF(3)}`,
    th: (T, s) => {
      if (s === 1) { const d = T.all('.sheet .tr.dup'); return T.join(T.ring(d[0], { pad: 18, pady: 10 }), T.ring(d[1], { pad: 18, pady: 10 })); }
      if (s === 2) return T.under('.sheet', { full: true, dy: 20 });
      if (s >= 3) return T.under(T.el('.t-after'));
      return T.ring(T.el('.sheet .bad .a'), { pad: 24, pady: 16, text: true });
    },
    cap: ['Đây là tám dòng trích từ file thật: ngày mỗi dòng một kiểu, nhà cung cấp viết hoa viết thường, có số tiền gõ cả chữ đ.', '» Bạn ấy nhìn ra quy luật rất nhanh: hai dòng này trùng nhau.', '» Bỏ dòng trùng.', '» Rồi thống nhất ngày, tên nhà cung cấp, số tiền. Mình không cần biết dùng hàm gì.'],
    note: 'Đây là tám dòng trích từ file thật: ngày mỗi dòng một kiểu, nhà cung cấp viết hoa viết thường, có số tiền gõ cả chữ đ. Bạn ấy nhìn ra quy luật rất nhanh: hai dòng này trùng nhau, bỏ đi. Rồi thống nhất ngày, tên nhà cung cấp, số tiền. Mình không cần biết dùng hàm gì, chỉ cần nói: file này lộn xộn quá, bạn gợi ý xem làm được gì.',
    more: `${P('3a', 'Hỏi thẳng: nên làm gì với file này?', 'File này lộn xộn quá, mình cũng chưa biết nên làm gì với nó. Bạn xem qua rồi gợi ý 5 việc bạn có thể làm giúp mình nhé.')}${P('3b', 'Làm + tự giải thích', 'Làm hết 5 việc đó đi, xong cho mình tải file. Chọn 3 dòng bất kỳ giải thích vì sao bạn xếp như vậy để mình kiểm tra.')}`,
  });
  const CATS = [['Dịch vụ thuê ngoài', 134183000], ['Tiếp khách', 121722000], ['Khác', 49628000], ['Văn phòng phẩm', 48279000], ['Đi lại', 30258000]];
  add({
    id: 'b3-bieu-do', ch: 'b3', title: 'Bậc 3 · Biểu đồ và con số tổng', tone: 'paper', tr: 'flow',
    html: `${M('Bậc 03 · Thành phẩm', 'Chi phí tháng 9 theo nhóm')}
      <div class="bars" style="width:1300px">${CATS.map((c, i) => `<div class="bar" data-in><span>${c[0]}</span><i class="${i ? '' : 'hl'}" data-in="grow" style="width:${(c[1] / CATS[0][1] * 100).toFixed(1)}%" data-v="${(c[1] / 1e6).toFixed(1).replace('.', ',')} tr"></i></div>`).join('')}</div>
      <div class="row mt-l" style="justify-content:space-between;align-items:flex-end">
        <p class="lbl">Tổng sau khi bỏ 8 dòng trùng</p>
        <p class="k-l" data-f="1"><span data-fx="count" data-to="384070000">384.070.000</span><span class="lc">đ</span></p>
      </div>
      <p class="lead mt-m" data-f="2" style="max-width:1400px">Dám hỏi lại: <b>“Bạn tìm được bao nhiêu dòng trùng? Giải thích 3 dòng bất kỳ.”</b></p>
      ${MF(3)}`,
    th: (T, s) => s >= 2 ? T.bracket(T.el('[data-f="2"]'), { gap: 30 }) : s === 1 ? T.under(T.el('.k-l'), { dy: 18 }) : T.bracket('.bars', { gap: 34 }),
    note: 'Từ đống bừa bộn thành biểu đồ: dịch vụ thuê ngoài lớn nhất, rồi đến tiếp khách. Tổng sau khi bỏ tám dòng trùng: ba trăm tám mươi tư triệu, không trăm bảy mươi nghìn đồng. Nhưng với số liệu, luôn dám hỏi lại: bạn tìm được bao nhiêu dòng trùng? Giải thích ba dòng bất kỳ cho mình xem. Đáp án đúng là tám dòng.',
    more: `${P('3c', 'Bonus: công thức Excel bằng tiếng Việt', 'Trong file công nợ, cột B là ngày hoá đơn, cột D là ngày đã trả (trống nếu chưa trả), hạn thanh toán 30 ngày. Viết giúp mình công thức cho cột E "Số ngày quá hạn" và cột F "Tình trạng", giải thích từng phần bằng tiếng Việt dễ hiểu.')}${P('AT7', 'Chỉ cách tính', 'Bạn tính con số này thế nào? Liệt kê các bước và các dòng bạn đã dùng, để mình tự kiểm lại vài dòng.')}`,
    link: 'cap-3.html', linkText: 'Bài tự học: Bậc 3',
  });
  stepsSlide(3, {
    tone: 'ink', head: 'Đưa đống bừa bộn, <em class="it">nhờ sắp xếp</em>', mode: 'Mọi người làm · 4 phút', timer: 240,
    items: [['3a', 'Hỏi thẳng bạn ấy', 'File này lộn xộn quá, mình chưa biết nên làm gì. Gợi ý 5 việc bạn làm được nhé.'], ['3b', 'Làm + tự giải thích', 'Làm hết đi, cho mình tải file. Chọn 3 dòng giải thích vì sao bạn làm vậy.'], ['3c', 'Bonus', 'Viết công thức Excel tính số ngày quá hạn, giải thích bằng tiếng Việt.']],
    quote: 'Nhiều khi mình không biết chính xác mình cần gì. Cứ đưa cả đống cho bạn ấy.',
    note: 'Đến lượt mọi người: tải file mẫu, hỏi thẳng bạn ấy nên làm gì, rồi nhờ làm và tự giải thích. Ai dùng điện thoại thì làm câu bonus về công thức Excel. Nhiều khi mình không biết chính xác mình cần gì, cứ đưa cả đống cho bạn ấy.',
  });
  exSlide(3, {
    work: ['Ghi chú họp viết vội', 'Danh sách hồ sơ vụ việc', 'Nhật ký đơn hàng nhiều người nhập', 'Danh bạ khách hàng trùng lặp'],
    life: ['Ảnh chụp 20 hoá đơn đi chợ', 'Danh sách khách mời đám cưới', 'Ảnh chụp bảng trắng', 'Chi tiêu gia đình cả năm'],
    note: 'Còn việc gì giống vậy? Mọi đống bừa bộn: ghi chú họp, danh sách hồ sơ, nhật ký đơn hàng. Và đời sống: ảnh chụp hoá đơn đi chợ, danh sách khách mời đám cưới. Chụp ảnh là nhờ được.',
    more: `${TIP('Chuyên đề "Chụp ảnh là nhờ được" có thêm nhiều tình huống: hoá đơn, bảng trắng, màn hình báo lỗi, giấy tờ.')}`,
    link: 'anh-chup.html', linkText: 'Chuyên đề: Chụp ảnh là nhờ được',
  });
  add({
    id: 'giai-lao', ch: 'b3', title: 'Giải lao', tone: 'red', when: c => c.breakSlide !== false, timer: 600,
    html: `${M('Giải lao', '10 phút')}
      <h2 class="t-hero split">Giải lao<em class="it" style="color:var(--paper)">.</em></h2>
      <p class="lead mt-m" data-in style="max-width:1200px">Thử ngay trong lúc nghỉ: nhờ bạn AI <b>một việc đời sống</b> chưa từng nhờ, rồi khoe vào nhóm Zalo.</p>
      <div class="qrs mt-m" data-qr="zalo" data-in></div>`,
    th: T => T.wave(-60, 1980, 960, 30, 4),
    note: 'Giải lao mười phút. Trong lúc nghỉ, thử nhờ bạn AI một việc đời sống chưa từng nhờ: thực đơn tuần này, lời chúc sinh nhật, kế hoạch cuối tuần. Rồi khoe vào nhóm Zalo.',
  });

  /* =================================================================
     BẬC 4 · BÁO CÁO & SLIDE
     ================================================================= */
  card(4, {
    note: 'Bậc bốn: số liệu thành báo cáo thành slide. Cách nhờ: một cuộc trò chuyện, nhiều thành phẩm. Đoán trước: từ file Excel thô đến bài trình chiếu cho sếp, bình thường mất bao lâu?',
  });
  add({
    id: 'b4-chuoi', ch: 'b4', title: 'Bậc 4 · Một cuộc trò chuyện, bốn thành phẩm', tone: 'ink', tr: 'flow',
    html: `${M('Bậc 04 · Nói tiếp, đừng mở chat mới', 'Một cuộc trò chuyện')}
      <h2 class="t-s split" style="margin-bottom:56px">Bạn ấy <em class="it accent">nhớ hết</em> những gì đã nói ở phía trên.</h2>
      <div class="chain">
        <div class="card" data-f="1"><span class="lbl">Từ bậc 3</span><h4>Bảng số đã sạch</h4><p>384.070.000đ, 5 nhóm, 4 tuần. Bạn ấy còn nhớ hết, không phải kể lại.</p></div>
        <div class="card" data-f="2"><span class="lbl">Sau 3 câu hỏi về sếp</span><h4>Báo cáo 1 trang</h4><p>“Sếp đọc trên điện thoại, thích con số, ghét chữ dài.”</p></div>
        <div class="card hl" data-f="3"><span class="lbl red">Đóng vai sếp khó tính</span><h4>Vặn trước 3 câu</h4><p>Tiếp khách tăng vì sao? Thuê ngoài cắt được không? Tháng 10 dự báo thế nào?</p></div>
        <div class="card solid" data-f="4"><span class="lbl">Thành phẩm</span><h4>6 slide có biểu đồ</h4><div class="mini-grid"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
      </div>
      ${MF(4)}`,
    th: (T, s) => { if (!s) return T.under('h2'); const c = T.all('.chain .card'), last = c[s - 1]; return T.pts([[c[0].x, c[0].b + 40], [last.r, last.b + 40]]); },
    note: 'Ở bậc ba, bạn ấy đã biết hết: file có những cột nào, nhóm nào lớn, tuần nào chi nhiều. Đừng mở chat mới, cứ nói tiếp. Nhờ bạn ấy hỏi mình ba câu về sếp, rồi viết báo cáo một trang. Nhờ bạn ấy đóng vai sếp khó tính, vặn trước ba câu hóc búa, sửa báo cáo để trả lời trước. Cuối cùng biến thành sáu slide có biểu đồ. Bốn thành phẩm, một cuộc trò chuyện.',
    more: `${P('4a', 'Hỏi 3 câu về sếp trước khi viết', 'Mình cần làm báo cáo chi phí tháng 9 lên Giám đốc từ số liệu ở trên. Trước khi viết, hỏi mình 3 câu về người đọc và cuộc họp nhé.')}${P('4b', 'Đóng vai sếp khó tính', 'Giờ bạn đóng vai một Giám đốc tài chính khó tính. Đọc báo cáo này, vặn mình 3 câu hóc búa nhất. Sau đó sửa báo cáo để trả lời trước 3 câu đó.')}${P('4c', 'Thành slide', 'Biến báo cáo này thành 6 slide: gọn, có biểu đồ, mỗi slide một ý chính. Làm dạng trang web để mình xem ngay, rồi gợi ý cách mang sang PowerPoint.')}`,
    link: 'cap-4.html', linkText: 'Bài tự học: Bậc 4',
  });
  stepsSlide(4, {
    tone: 'paper', head: 'Một cuộc trò chuyện, <em class="it">nhiều thành phẩm</em>', mode: 'Mọi người làm · 3 phút', timer: 180,
    items: [['4a', 'Hỏi thẳng bạn ấy', 'Mình cần báo cáo lên Giám đốc. Hỏi mình 3 câu về sếp trước khi viết nhé.'], ['4b', 'Sếp khó tính', 'Đóng vai ông sếp khó tính, vặn mình 3 câu, rồi sửa báo cáo để trả lời trước.'], ['4c', 'Thành slide', 'Biến báo cáo này thành 6 slide có biểu đồ, gọn và đẹp.']],
    quote: 'Đừng nhờ rời rạc. Hãy nói tiếp, như đồng nghiệp ngồi cạnh cả buổi chiều.',
    note: 'Đến lượt mọi người: mở lại đúng cuộc trò chuyện ở bậc ba và nói tiếp. Hỏi ba câu về sếp, đóng vai sếp khó tính, rồi thành slide. Đừng nhờ rời rạc, hãy nói tiếp như với một đồng nghiệp ngồi cạnh cả buổi chiều.',
  });
  exSlide(4, {
    work: ['Ý tưởng → kế hoạch → email kêu gọi', 'Biên bản → danh sách việc → nhắc việc', 'Đề xuất → phản biện → bản trình sếp', 'Số liệu → nhận xét → slide họp quý'],
    life: ['Lịch trình du lịch → đồ cần mang → tin nhắn rủ cả nhà', 'Thực đơn tuần → danh sách đi chợ', 'Kế hoạch tiết kiệm → bảng theo dõi'],
    note: 'Còn việc gì giống vậy? Mọi chuỗi việc nối nhau: ý tưởng thành kế hoạch thành email, biên bản thành danh sách việc thành lời nhắc. Và đời sống: lịch trình du lịch thành đồ cần mang thành tin nhắn rủ cả nhà.',
    more: `${TIP('Chuyên đề "Họp nhẹ hơn" đi trọn chuỗi: chuẩn bị họp → biên bản → bảng việc → email sau họp.')}`,
    link: 'hop-hanh.html', linkText: 'Chuyên đề: Họp nhẹ hơn',
  });

  /* =================================================================
     BẬC 5 · TRỢ LÝ BIẾT NHỚ
     ================================================================= */
  card(5, {
    note: 'Bậc năm: trợ lý biết nhớ việc. Cách nhờ: dạy bạn ấy một lần, nhờ mãi mãi. Đoán trước: tuần sau làm lại báo cáo tuần, chẳng lẽ lại kể từ đầu?',
    more: `<p><a href="files/cap-5/cap-5-tron-bo.zip">Tải trọn bộ file bậc 5 (.zip) ↓</a></p>`,
  });
  add({
    id: 'b5-project', ch: 'b5', title: 'Bậc 5 · Góc làm việc riêng', tone: 'paper', tr: 'flow',
    html: `${M('Bậc 05 · Project · Gem', 'Góc làm việc riêng')}
      <h2 class="t-s split" style="margin-bottom:50px">Một <em class="it accent">góc làm việc riêng</em>, nơi bạn ấy nhớ bạn.</h2>
      <div class="proj">
        <div data-f="1"><span class="lbl red">01 · Hướng dẫn</span><h4>Bạn ấy phỏng vấn bạn</h4><p>“Hỏi mình từng câu, rồi tự viết hướng dẫn cho trợ lý báo cáo tuần của mình.” Bạn chỉ việc trả lời.</p></div>
        <div data-f="2"><span class="lbl red">02 · Tài liệu</span><h4>Tải lên một lần</h4><ul><li>Mẫu báo cáo tuần</li><li>Báo cáo tuần 38, 39</li><li>Giọng văn của chị Hà</li></ul></div>
        <div data-f="3"><span class="lbl red">03 · Mỗi tuần</span><h4>Dán ghi chú vội</h4><p>“Số liệu tuần 40:” + vài dòng không dấu. Xong.</p></div>
      </div>
      ${MF(5)}`,
    th: (T, s) => s ? T.under(T.el(`.proj > :nth-child(${s}) h4`)) : T.under('h2'),
    note: 'Project trên ChatGPT, Claude, hay Gem trên Gemini là một góc làm việc riêng. Phần khó nhất là viết hướng dẫn, nên mình đảo vai: để bạn ấy phỏng vấn mình từng câu, rồi tự viết hướng dẫn. Tải lên mẫu báo cáo và hai báo cáo cũ một lần. Từ đó mỗi tuần chỉ cần dán vài dòng ghi chú vội.',
    more: `${P('5a', 'Phỏng vấn mình rồi tự viết hướng dẫn', 'Mình muốn tạo một trợ lý viết báo cáo tuần cho phòng mình. Bạn phỏng vấn mình từng câu một: báo cáo gửi ai, gồm những mục nào, giọng văn ra sao, số liệu lấy từ đâu, điều gì sếp hay hỏi. Hỏi xong, tự viết phần hướng dẫn (instructions) để mình dán vào Project.')}${TIP('Gói miễn phí có Projects hay Gems không thay đổi khá thường xuyên. Kiểm tra trang chính thức, hoặc hỏi thẳng bạn ấy.')}`,
    link: 'cap-5.html', linkText: 'Bài tự học: Bậc 5',
  });
  add({
    id: 'b5-ghi-chu', ch: 'b5', title: 'Bậc 5 · Ghi chú vội thành báo cáo', tone: 'paper', tr: 'flow',
    html: `${M('Bậc 05 · Tuần 40', 'Ghi chú vội → báo cáo')}
      <div class="cols2" style="grid-template-columns:1fr 1.05fr;gap:70px;align-items:start">
        <div data-in><p class="lbl muted" style="margin-bottom:18px">Chị Hà ghi vội, không dấu</p><div class="note-raw" style="font-size:24px">- ds tuan nay ~1,29 ty (CHUA tinh don
  truong Hoa Sen 85tr)
- don: 44 / kh moi: 7
- thu no dc 1,02 ty. Phuc Loc con 80tr,
  qua han 40 ngay roi
- Minh Quang: bao gia lui sang 9/10
- doi thu giam gia giay A4 ~5%</div></div>
        <div data-f="1"><p class="lbl red" style="margin-bottom:18px">Báo cáo tuần 40 · đúng mẫu, đúng giọng</p>
          <div class="rows tight" style="border-top-width:2px"><div><span class="n">Doanh số</span><p style="font-size:40px">~1,29 tỷ<small>Chưa gồm đơn Hoa Sen 85 triệu đang chờ xuất hoá đơn.</small></p></div><div><span class="n">Đơn · Khách</span><p style="font-size:40px">44 đơn · 7 khách mới</p></div><div><span class="n">Thu nợ</span><p style="font-size:40px">1,02 tỷ<small><b class="accent">Cần kiểm tra:</b> Phúc Lộc còn 80 triệu, quá hạn 40 ngày.</small></p></div></div>
        </div>
      </div>
      ${MF(5)}`,
    th: (T, s) => s ? T.ring(T.el('.rows .accent'), { pad: 24, pady: 14, text: true }) : T.bracket('.note-raw', { gap: 30 }),
    note: 'Đây là ghi chú thật của tuần bốn mươi: viết vội, không dấu, lộn xộn đúng như đời thật. Dán vào Project, và có ngay báo cáo đúng mẫu, đúng giọng chị Hà. Điều hay nhất: bạn ấy biết đánh dấu chỗ cần kiểm tra, như khoản nợ Phúc Lộc quá hạn bốn mươi ngày.',
    more: `${P('5b', 'Dùng hằng tuần', 'Số liệu tuần 40:\n[dán ghi chú vội của bạn]')}${TIP('Dặn thêm trong hướng dẫn: "Chỗ nào số liệu không khớp hoặc thiếu, đánh dấu [CẦN KIỂM TRA], đừng tự điền." Đó là vế "kiểm tra thế nào" trong ba điều của Boris.')}`,
  });
  stepsSlide(5, {
    tone: 'ink', head: 'Dạy một lần, <em class="it">nhờ mãi mãi</em>', mode: 'Xem · ghi ý tưởng', timer: 180,
    items: [['5a', 'Để bạn ấy phỏng vấn', 'Phỏng vấn mình từng câu, rồi tự viết hướng dẫn cho trợ lý báo cáo tuần của mình.'], ['Project', 'Góc làm việc riêng', 'Dán hướng dẫn, tải lên mẫu báo cáo và 2 báo cáo cũ.'], ['5b', 'Dùng hằng tuần', '“Số liệu tuần 40:” + dán vài dòng. Xong.']],
    quote: 'Mỗi Project là một người bạn đã được bạn dạy việc.',
    note: 'Ở bậc này mọi người xem và ghi ý tưởng: mình sẽ dạy bạn ấy việc gì lặp lại hằng tuần? Có bạn trong khảo sát ước được nhân bản mình thành nhiều người như mình. Đây chính là cách: mỗi Project là một người bạn đã được bạn dạy việc.',
  });
  exSlide(5, {
    work: ['Trợ lý pháp chế theo mẫu công ty', 'Trợ lý trả lời khách theo chính sách', '“Bản sao của tôi” cho người mới vào team', 'Trợ lý soát chứng từ theo quy định'],
    life: ['Gia sư tiếng Anh riêng cho con', 'Trợ lý nấu ăn hợp khẩu vị cả nhà', 'Bạn đồng hành viết sách', 'Huấn luyện viên tập luyện cá nhân'],
    note: 'Còn việc gì giống vậy? Trợ lý pháp chế theo mẫu công ty, trợ lý trả lời khách theo chính sách. Và đời sống: gia sư tiếng Anh riêng cho con, trợ lý nấu ăn hợp khẩu vị cả nhà.',
    more: `${TIP('Chuyên đề "Viết đúng giọng của bạn" hướng dẫn rút ra "bản mô tả giọng văn" để đưa vào Project.')}`,
    link: 'giong-van.html', linkText: 'Chuyên đề: Viết đúng giọng của bạn',
  });

  /* =================================================================
     BẬC 6 · TỰ TẠO CÔNG CỤ
     ================================================================= */
  card(6, {
    note: 'Bậc sáu: tự tạo công cụ, không cần biết code. Cách nhờ: thiếu công cụ thì nhờ bạn ấy làm luôn. Đoán trước: thuê người làm một app theo dõi tiến độ thì mất bao lâu, bao nhiêu tiền?',
  });
  add({
    id: 'b6-app', ch: 'b6', title: 'Bậc 6 · Kể vấn đề, nhận về một app', tone: 'ink', tr: 'flow',
    html: `${M('Bậc 06 · Không viết dòng code nào', 'Claude Artifacts · ChatGPT Canvas')}
      <div class="row" style="align-items:flex-start;gap:70px">
        <div style="width:560px;flex:none">
          <div class="msg me" data-who="BẠN" data-in style="font-size:29px">Nhóm mình hay quên hạn. Mình muốn một công cụ nhỏ theo dõi tiến độ, cảnh báo trước hạn 5 ngày. Hỏi mình vài câu rồi làm luôn nhé.</div>
          <div class="msg me mt-m" data-who="BẠN" data-f="2" style="font-size:29px">Thêm lọc theo người. Việc quá hạn cho lên đầu.</div>
        </div>
        <div class="app" data-f="1" data-fx="pop" style="width:1050px">
          <div class="bar-top"><i></i><i></i><i></i><span>theo-doi-tien-do.html</span></div>
          <div class="ap-h"><h5>Triển khai phần mềm kế toán</h5><span class="pct">58%</span></div>
          <div class="prog"><i></i></div>
          <div class="task late"><i class="st red2"></i><span>Chốt danh mục tài khoản</span><span class="who2">Hà</span><span class="due">Quá 3 ngày</span></div>
          <div class="task"><i class="st or"></i><span>Nhập số dư đầu kỳ</span><span class="who2">Minh</span><span class="due">Còn 2 ngày</span></div>
          <div class="task"><i class="st or"></i><span>Đào tạo nhóm kế toán</span><span class="who2">Lan</span><span class="due">Còn 5 ngày</span></div>
          <div class="task"><i class="st"></i><span>Kiểm thử báo cáo thuế</span><span class="who2">Quân</span><span class="due">20/10</span></div>
          <div class="task"><i class="st gr"></i><span>Cài đặt phần mềm</span><span class="who2">Tú</span><span class="due">Xong ✓</span></div>
        </div>
      </div>
      ${MF(6)}`,
    th: (T, s) => s >= 2 ? T.bracket(T.el('[data-f="2"]'), { gap: 30 }) : s === 1 ? T.frame('.app', { pad: 22 }) : T.bracket(T.el('.msg.me'), { gap: 30 }),
    note: 'Đừng cố mô tả một phần mềm. Cứ kể vấn đề như than với đồng nghiệp: nhóm mình hay quên hạn. Để bạn ấy hỏi lại vài câu, rồi bạn ấy làm ra một app chạy ngay trên trình duyệt: đỏ là quá hạn, cam là sắp đến hạn, xanh là xong. Muốn sửa gì cứ nói tiếp: thêm lọc theo người, việc quá hạn cho lên đầu.',
    more: `${P('6a', 'Kể vấn đề, để bạn ấy hỏi lại', 'Nhóm mình hay quên hạn công việc. Mình muốn một công cụ nhỏ theo dõi tiến độ, cảnh báo trước hạn 5 ngày, nhưng không biết mô tả thế nào. Hỏi mình vài câu rồi làm luôn nhé. Giao diện tiếng Việt, hiện đại.')}<p><a href="files/cap-6/app-mau-theo-doi-tien-do.html" target="_blank">Mở app mẫu để so sánh ↗</a></p>${TIP('Dám hỏi lại với app: nhập thử vài việc có hạn hôm nay, ngày mai, tuần sau, rồi xem màu có đúng không. Đẹp chưa đủ, phải tính đúng.')}`,
    link: 'cap-6.html', linkText: 'Bài tự học: Bậc 6',
  });
  stepsSlide(6, {
    tone: 'paper', head: 'Thiếu công cụ? <em class="it">Nhờ làm luôn</em>', mode: 'Cả phòng ra đề', timer: 300,
    items: [['6a', 'Kể vấn đề', 'Nhóm mình hay quên hạn. Hỏi mình vài câu rồi làm luôn nhé.'], ['Sửa', 'Nói chuyện tiếp', '“Thêm cột ưu tiên.” “Nút này bấm không ăn.” “Đẹp hơn được không?”'], ['Táo bạo', 'Cả phòng ra đề', 'Một công cụ, một trò chơi, cho công việc hay cho con. Càng táo bạo càng vui.']],
    quote: 'Thất bại không phải điểm dừng, mà là câu tiếp theo trong cuộc trò chuyện.',
    note: 'Giờ cả phòng ra đề. Một công cụ cho công việc, hay một trò chơi cho con, càng táo bạo càng vui. Mình làm trực tiếp trên màn hình. Nếu lần đầu chưa chạy, đó không phải điểm dừng, mà là câu tiếp theo trong cuộc trò chuyện.',
  });
  exSlide(6, {
    work: ['Checklist rà soát hợp đồng', 'Bảng tính khấu hao', 'Công cụ lập báo giá nhanh', 'Lịch trực, lịch phân ca'],
    life: ['Bảng chi tiêu gia đình', 'Lịch tập luyện cá nhân', 'Trò chơi ôn bảng cửu chương cho con', 'Bảng chia việc nhà'],
    note: 'Còn việc gì giống vậy? Checklist rà soát hợp đồng, bảng tính khấu hao, công cụ báo giá. Và đời sống: bảng chi tiêu gia đình, trò chơi ôn bảng cửu chương cho con. Thiếu công cụ nào, nhờ bạn ấy làm luôn.',
  });

  /* =================================================================
     BẬC 7 · AGENT
     ================================================================= */
  card(7, {
    note: 'Bậc bảy: giao cả đầu việc cho AI agent. Cách nhờ: giao cả đầu việc, không chỉ giao câu hỏi. Đoán trước: làm báo cáo quản trị tháng từ năm chi nhánh, mỗi nơi gửi một kiểu, bình thường mất bao lâu?',
    more: `<p><a href="files/cap-7/bao-cao-thang-9.zip">Tải số liệu 5 chi nhánh (.zip) ↓</a></p>${TIP('Đừng để file đáp án hay tài liệu gốc trong thư mục giao cho agent. Luôn làm trên bản sao, trong một thư mục làm việc riêng.')}`,
  });
  add({
    id: 'b7-giao', ch: 'b7', title: 'Bậc 7 · Giao việc cho agent', tone: 'paper', tr: 'flow',
    html: `${M('Bậc 07 · Claude Cowork', 'Năm chi nhánh, năm kiểu')}
      <div class="cols2" style="grid-template-columns:600px 1fr;gap:80px;align-items:start">
        <div class="files" data-in>
          <div class="file"><span class="ext">XLSX</span><span>CN Ha Noi<small>Đúng mẫu, có sheet công nợ</small></span></div>
          <div class="file"><span class="ext">XLSX</span><span>CN Hai Phong<small>Tính bằng <b>triệu đồng</b>, có ô gộp</small></span></div>
          <div class="file"><span class="ext">DOCX</span><span>CN Da Nang<small>Viết thành đoạn văn</small></span></div>
          <div class="file"><span class="ext">CSV</span><span>CN Can Tho<small>Xuất từ phần mềm, dùng mã tài khoản</small></span></div>
          <div class="file"><span class="ext">XLSX</span><span>HCM - bao cao T9 (final) (sua lan 2)<small>Có sheet “nhap” cũ</small></span></div>
        </div>
        <div>
          <p class="lbl red" data-in style="margin-bottom:22px">Giao như giao cho đồng nghiệp</p>
          <div class="anat" style="border-top-width:2px">
            <div data-f="1"><span class="k" style="font-size:40px">Muốn gì</span><span class="v" style="font-size:29px">Gom số liệu 5 chi nhánh thành báo cáo quản trị tháng 9 gửi Giám đốc.</span></div>
            <div data-f="2"><span class="k" style="font-size:40px">Công sức</span><span class="v" style="font-size:29px">Cứ làm kỹ. Trình kế hoạch cho mình duyệt trước khi làm.</span></div>
            <div data-f="3"><span class="k" style="font-size:40px">Kiểm tra</span><span class="v" style="font-size:29px">Tự đối chiếu tổng với từng file gốc, báo mình đã kiểm gì, chỗ nào chưa chắc.</span></div>
          </div>
        </div>
      </div>
      <style>#s-b7-giao .anat>div{grid-template-columns:220px 1fr;gap:30px;padding:22px 0}</style>
      ${MF(7)}`,
    th: (T, s) => s ? T.under(T.el(`.anat > :nth-child(${s}) .k`), { dy: 8 }) : T.bracket('.files', { gap: 34 }),
    note: 'Ở sáu bậc trước, mình vẫn là người chạy việc: copy, dán, tải lên, tải về. Với AI agent như Claude Cowork, mình chỉ cho bạn ấy một thư mục và giao việc. Năm chi nhánh gửi năm kiểu: Hải Phòng tính bằng triệu đồng, Đà Nẵng viết thành đoạn văn, Cần Thơ dùng mã tài khoản, HCM có sheet nháp cũ. Mình giao đúng ba điều: muốn gì, cứ làm kỹ nhưng trình kế hoạch trước, và tự đối chiếu với file gốc.',
    more: `${P('7a', 'Giao cả đầu việc', 'Trong thư mục này là số liệu tháng 9 của 5 chi nhánh, mỗi nơi gửi một kiểu. Mình cần báo cáo quản trị tháng 9 gửi Giám đốc: doanh thu, lợi nhuận trước thuế, so với kế hoạch, theo từng chi nhánh, và những điểm bất thường cần sếp quyết.\nCứ làm kỹ. Trước khi làm, trình kế hoạch cho mình duyệt. Cần gì thì hỏi.\nXong thì tự đối chiếu tổng với từng file gốc, báo mình đã kiểm gì, chỗ nào chưa chắc.')}`,
    link: 'cap-7.html', linkText: 'Bài tự học: Bậc 7',
  });
  const PLAN = ['Đọc 5 file, ghi chú đơn vị từng nơi (Hải Phòng: triệu đồng)', 'Bỏ qua sheet “nhap” cũ của HCM', 'Quy đổi mã tài khoản 511, 632, 641, 642 của Cần Thơ', 'Tổng hợp doanh thu, LNTT, so với kế hoạch', 'Tìm điểm bất thường cần Giám đốc quyết', 'Viết báo cáo, tự đối chiếu với file gốc'];
  add({
    id: 'b7-ke-hoach', ch: 'b7', title: 'Bậc 7 · Bạn ấy trình kế hoạch', tone: 'ink', tr: 'iris',
    html: `${M('Bậc 07 · Bạn vẫn là người quyết định', 'Kế hoạch của agent')}
      <div class="cols2" style="grid-template-columns:1fr 640px;gap:90px;align-items:start">
        <div>
          <p class="lbl red" data-in>Kế hoạch đề xuất · chờ bạn duyệt</p>
          <div class="plan mt-m">${PLAN.map((p, i) => `<div data-in><span class="ck" data-on="ok:${i + 2}">${i + 1}</span><span>${esc(p)}</span></div>`).join('')}</div>
        </div>
        <div>
          <div class="term" data-in>Mình đã đọc 5 file.
Hải Phòng ghi số theo <span class="p">triệu đồng</span>.
HCM có 2 sheet, mình sẽ dùng sheet “T9”.
Bạn duyệt kế hoạch này chứ?</div>
          <div class="msg me mt-m" data-who="BẠN" data-f="1" style="font-size:30px">Duyệt. Làm đi nhé.</div>
        </div>
      </div>
      <style>#s-b7-ke-hoach .ck{transition:background .3s,border-color .3s}#s-b7-ke-hoach .ck.ok{font-size:0}#s-b7-ke-hoach .ck.ok::after{content:'✓';font-size:22px}</style>
      ${MF(7)}`,
    extraSteps: 0,
    th: (T, s) => { if (s >= 2) { const k = Math.min(PLAN.length, s - 1); return T.under(T.el(`.plan > :nth-child(${k}) span:last-child`), { dy: 6 }); } return s === 1 ? T.bracket(T.el('[data-f="1"]'), { gap: 30 }) : T.bracket('.term', { gap: 30 }); },
    note: 'Bạn ấy không làm ngay. Bạn ấy đọc năm file, phát hiện Hải Phòng tính bằng triệu đồng, HCM có hai sheet, rồi trình kế hoạch sáu bước chờ mình duyệt. Mình đọc, duyệt, và để bạn ấy chạy. Từng bước được đánh dấu xong. Bạn ấy làm, nhưng mình vẫn là người quyết định.',
  });
  add({
    id: 'b7-ket-qua', ch: 'b7', title: 'Bậc 7 · Thành phẩm và điểm bất thường', tone: 'paper', tr: 'wipe',
    html: `${M('Bậc 07 · Thành phẩm', 'Báo cáo quản trị tháng 9')}
      <div class="row" style="gap:90px;align-items:flex-end">
        <div data-in><p class="lbl muted">Doanh thu toàn công ty</p><p class="k-l mt-s"><span data-fx="count" data-to="20581000000">20.581.000.000</span><span class="lc">đ</span></p><p class="small muted">100,4% kế hoạch</p></div>
        <div data-in><p class="lbl muted">Lợi nhuận trước thuế</p><p class="k-m mt-s">2.056.200.000<span class="lc">đ</span></p></div>
      </div>
      <p class="lbl red mt-l" data-f="1">Điểm bất thường cần sếp quyết</p>
      <div class="find mt-s" style="grid-template-columns:repeat(4,1fr)">
        <div data-f="1"><b>82%</b><span>Đà Nẵng đạt kế hoạch. Mất gói thầu trường học, bão giữa tháng.</span></div>
        <div data-f="2"><b>−23 tr</b><span>Hải Phòng lỗ vì sửa mái kho đột xuất 415 triệu.</span></div>
        <div data-f="3"><b>&gt; 60 ngày</b><span>Nợ quá hạn: Đông Hưng 268,5 tr (68 ngày), KH0087 412 tr (75 ngày).</span></div>
        <div data-f="4"><b>180 tr</b><span>Thưởng nóng đội HCM cần Giám đốc duyệt (đã tạm ứng 50%).</span></div>
      </div>
      ${MF(7)}`,
    th: (T, s) => s ? T.under(T.el(`.find > :nth-child(${s}) b`), { dy: 8 }) : T.under(T.el('.k-l'), { dy: 16 }),
    note: 'Vài phút sau: doanh thu toàn công ty hai mươi tỷ năm trăm tám mươi mốt triệu, đạt một trăm phẩy bốn phần trăm kế hoạch. Và quan trọng hơn, những điểm bất thường cần sếp quyết: Đà Nẵng chỉ đạt tám mươi hai phần trăm, Hải Phòng lỗ hai mươi ba triệu vì sửa mái kho đột xuất, hai khoản nợ quá hạn trên sáu mươi ngày, và khoản thưởng nóng một trăm tám mươi triệu cần Giám đốc duyệt.',
  });
  add({
    id: 'b7-hoi-lai', ch: 'b7', title: 'Bậc 7 · Dám hỏi lại agent', tone: 'ink', tr: 'iris',
    html: `${M('Bậc 07 · Dám hỏi lại', 'Hỏi đúng chỗ dễ sai')}
      <div class="chat">
        <div class="msg me" data-who="BẠN" data-in style="font-size:38px">Số của Hải Phòng bạn quy đổi đơn vị thế nào? Chỉ mình dòng gốc.</div>
        <div class="msg ai" data-who="AI" data-f="1" data-fx="type" style="max-width:1350px">File Hải Phòng ghi doanh thu 3.020 (đơn vị triệu đồng, dòng 4). Mình đã nhân 1.000.000, thành 3.020.000.000đ.</div>
      </div>
      <p class="t-s mt-xl" data-f="2" style="max-width:1500px">Càng làm bạn lâu, càng <em class="it accent">giao được việc lớn</em>. Câu hỏi là mình có dám giao không.</p>
      ${MF(7)}`,
    th: (T, s) => s >= 2 ? T.ring(T.el('[data-f="2"] .it'), { text: true, pad: 30, pady: 16 }) : s === 1 ? T.bracket('.msg.ai', { gap: 30 }) : T.bracket('.msg.me', { gap: 30 }),
    note: 'Và không bao giờ quên vế thứ hai: dám hỏi lại. Hỏi đúng chỗ dễ sai nhất: số của Hải Phòng bạn quy đổi đơn vị thế nào, chỉ mình dòng gốc. Càng làm bạn lâu, mình càng giao được việc lớn. Từ một câu hỏi, đến một file, đến cả một đầu việc. Câu hỏi là mình có dám giao không.',
    more: `${P('7b', 'Dám hỏi lại agent', 'Số của Hải Phòng bạn quy đổi đơn vị thế nào? Chỉ mình dòng gốc trong file.')}${P('7c', 'Tự soát trước khi nộp', 'Trước khi mình gửi Giám đốc, bạn liệt kê mọi con số trong báo cáo, mỗi số lấy từ file nào, dòng nào. Số nào bạn tự tính, ghi rõ cách tính.')}${TIP('Chưa có gói trả phí? Bài tự học Bậc 7 có cách làm gần giống bằng chat thường: tải từng file lên một cuộc trò chuyện và giao việc theo đúng ba điều.')}`,
  });
  stepsSlide(7, {
    tone: 'paper', head: 'Giao việc, <em class="it">duyệt, hỏi lại</em>', mode: 'Xem demo agent',
    items: [['7a', 'Giao việc', 'Gom số liệu 5 chi nhánh thành báo cáo quản trị tháng. Cần gì thì hỏi, trình kế hoạch cho mình duyệt.'], ['Duyệt', 'Bạn vẫn quyết định', 'Bạn ấy hỏi trước khi làm. Đọc kế hoạch, duyệt, để bạn ấy chạy.'], ['7b', 'Dám hỏi lại', 'Số của Hải Phòng bạn quy đổi đơn vị thế nào? Chỉ mình dòng gốc.']],
    note: 'Tóm lại bậc bảy có ba nhịp: giao việc theo ba điều, đọc và duyệt kế hoạch, rồi dám hỏi lại đúng chỗ dễ sai. Công cụ có thể là Claude Cowork, ChatGPT Agent hay Claude Code, cách giao việc vẫn vậy.',
  });
  exSlide(7, {
    work: ['Gom 30 hồ sơ vụ việc thành bảng theo dõi', 'So sánh báo giá 5 nhà cung cấp', 'Đối chiếu sao kê với sổ sách', 'Dọn thư mục dự án năm cũ'],
    life: ['Dọn 5.000 ảnh điện thoại theo năm', 'Gom chứng từ cả năm để quyết toán thuế', 'Lên kế hoạch chuyến đi 10 ngày'],
    note: 'Còn việc gì giống vậy? Mọi đầu việc gom nhiều file: hồ sơ vụ việc, báo giá nhà cung cấp, sao kê với sổ sách. Và đời sống: dọn năm nghìn ảnh điện thoại, gom chứng từ cả năm để quyết toán thuế.',
  });

  /* =================================================================
     ĐI TIẾP
     ================================================================= */
  act('hoi-3', 'dt', 3, 'Đi tiếp', 'Phễu sẽ còn sâu thêm. Làm sao để bạn cũng vậy, và kéo được người khác đi cùng?', ['Nhìn lại bảy bậc', 'Nhịp luyện tập', '7 ngày, 7 lần nhờ', 'Tiết lộ cuối'],
    'Hồi ba: đi tiếp. Phễu sẽ còn sâu thêm. Phần cuối này nói về cách giữ nhịp, và cách kéo người khác đi cùng.');
  const LAD = [1, 2, 3, 4, 5, 6, 7].map(n => LV[n]);
  add({
    id: 'dt-bay-bac', ch: 'dt', title: 'Bạn vừa đi qua bảy bậc', tone: 'ink', tr: 'iris',
    html: `${M('Nhìn lại', 'Bảy bậc, bảy cách nhờ')}
      <h2 class="t-m split">Bạn vừa đi <em class="it accent">xuống phễu</em> bảy bậc.</h2>
      <div class="ladder mt-m">${LAD.map((L, i) => `<div data-in style="height:${100 - i * 9}%"><b>${pad(i + 1)}</b><strong>${esc(L.short)}</strong><em>${esc(L.how)}</em></div>`).join('')}</div>
      <style>#s-dt-bay-bac .ladder{height:600px}</style>`,
    th: T => { const c = T.all('.ladder > div'); return T.pts(c.flatMap(b => [[b.x, b.y - 26], [b.r + 8, b.y - 26]])); },
    note: 'Nhìn lại, mọi người vừa đi xuống phễu bảy bậc. Từ một email khó, đến bắt quả tang AI đoán, dọn bảng tính, làm báo cáo và slide, dạy bạn ấy nhớ việc, tự tạo công cụ, đến giao cả đầu việc. Mỗi bậc là một cách nhờ, dùng được cho hàng trăm việc khác.',
    more: `${H4('Bảy bậc và ba nguyên nhân của phễu')}${UL(['Bậc 1, 4, 6, 7 nâng <b>tham vọng</b>: từ một câu nhờ lên cả đầu việc.', 'Bậc 2, 3 dạy cách sống với <b>năng lực không đều</b>: dám hỏi lại, đòi căn cứ, tự kiểm vài dòng.', 'Bậc 5, 7 mở rộng <b>quyền truy cập</b>: Project, agent, những thứ bản dùng thử ít ai đụng tới.'])}`,
  });
  add({
    id: 'dt-nhip', ch: 'dt', title: 'Phễu sẽ còn sâu thêm. Bạn cũng vậy', tone: 'paper',
    html: `${M('Đi tiếp', 'Nhịp luyện tập')}
      <h2 class="t-l split">Phễu sẽ còn sâu thêm. <em class="it accent">Bạn cũng vậy.</em></h2>
      <div class="rows mt-m">
        <div data-f="1"><span class="n">Mỗi ngày</span><p>Nhờ một việc chưa từng nhờ.</p></div>
        <div data-f="2"><span class="n">Mỗi tuần</span><p>Giao một việc lớn hơn tuần trước.</p></div>
        <div data-f="3"><span class="n">Mỗi tháng</span><p>Dạy lại cho một người. Kéo thêm một người xuống phễu.</p></div>
      </div>`,
    th: (T, s) => s ? T.bracket(T.el(`.rows > :nth-child(${s})`), { gap: 34 }) : T.under('h2'),
    note: 'Phễu sẽ còn sâu thêm, vì AI giỏi lên mỗi tháng. Bạn cũng vậy, nếu giữ một nhịp đơn giản. Mỗi ngày: nhờ một việc chưa từng nhờ. Mỗi tuần: giao một việc lớn hơn tuần trước. Mỗi tháng: dạy lại cho một người, kéo thêm một người xuống phễu.',
    more: `${P('DT1', 'Kế hoạch 30 ngày đi xuống một bậc', 'Mình vừa học xong 7 cách nhờ AI: viết email khó, đọc tài liệu dài và hỏi căn cứ, dọn Excel, làm báo cáo và slide, tạo Project, tự làm công cụ nhỏ, giao việc cho agent. Mình làm [nghề], mỗi tuần có thể dành [số] phút. Lên giúp mình kế hoạch 30 ngày, mỗi tuần một việc thật trong công việc của mình, việc sau lớn hơn việc trước. Hỏi mình vài câu trước nếu cần.')}`,
    link: 'khoang-cach.html', linkText: 'Đọc bài: Khoảng cách AI',
  });
  const DAYS = [['Bạn giúp được gì?', 'Hỏi nghề của mình, chọn việc dễ nhất'], ['Góp ý thẳng', 'Đóng vai người nhận khó tính'], ['Chụp đống lộn xộn', '“Bạn giúp được gì với cái này?”'], ['Nói 5 phút', 'Bằng giọng nói, nghĩ cho rõ'], ['Project đầu tiên', 'Để bạn ấy phỏng vấn mình'], ['Một công cụ nhỏ', 'Hoặc một trò chơi cho con'], ['Việc táo bạo nhất', 'Giao như cho đồng nghiệp']];
  add({
    id: 'dt-7-ngay', ch: 'dt', title: '7 ngày, 7 lần nhờ', tone: 'red', tr: 'iris',
    html: `${M('Lời mời', 'Thử thách 7 ngày')}
      <h2 class="t-xl split">7 ngày, <em class="it" style="color:var(--paper)">7 lần nhờ.</em></h2>
      <div class="week mt-l">${DAYS.map((d, i) => `<div data-in><b>${i + 1}</b><span><b style="font:600 25px/1.3 var(--sans);display:inline">${esc(d[0])}</b><br>${esc(d[1])}</span></div>`).join('')}</div>`,
    th: T => { const c = T.all('.week > div'); return T.pts(c.map(b => [b.x + (b.x > 200 ? 22 : 0) + 6, b.y - 30]).concat([[c[6].r, c[6].y - 30]])); },
    note: 'Lời mời cuối: bảy ngày, bảy lần nhờ. Mỗi ngày nhờ người bạn AI một việc chưa từng nhờ, rồi khoe vào nhóm Zalo. Sau bảy ngày, nhờ AI sẽ thành thói quen.',
    link: 'thu-thach-7-ngay.html', linkText: 'Thử thách 7 ngày',
  });
  add({
    id: 'dt-keo', ch: 'dt', title: 'Người đi trước kéo người đi sau', tone: 'ink', tr: 'iris',
    html: `${M('Đi tiếp', 'Sáu tỷ người')}
      <p class="k-xl" data-in="num" style="color:transparent;-webkit-text-stroke:3px var(--paper)">6 tỷ người</p>
      <p class="t-m mt-m split" style="max-width:1500px">chưa chạm vào AI. Có ai trong số đó là <em class="it">bố mẹ, con cái, đồng nghiệp</em> của bạn?</p>
      <p class="t-s it accent mt-l" data-f="1">Người đi trước kéo người đi sau.</p>`,
    th: (T, s) => s ? T.under(T.el('[data-f="1"]')) : T.under(T.el('.k-xl'), { dy: 24 }),
    note: 'Sáu tỷ người chưa chạm vào AI. Có ai trong số đó là bố mẹ, con cái, đồng nghiệp của bạn? Khoảng cách không chỉ để mình bứt lên. Người đi trước có thể kéo người đi sau. Tuần này, thử ngồi cạnh một người thân mười lăm phút và cùng nhờ AI một việc của họ.',
    more: `${P('DT2', 'Dạy lại cho người thân', 'Mình muốn chỉ cho [bố mẹ / con / đồng nghiệp] cách dùng AI lần đầu. Họ [mô tả: tuổi, nghề, hay lo điều gì]. Gợi ý cho mình 3 việc đầu tiên thật hợp với họ, và câu nói mở đầu để họ không ngại.')}`,
  });
  add({
    id: 'dt-tiet-lo', ch: 'dt', title: 'Bài trình chiếu này được làm thế nào?', tone: 'paper', when: c => c.revealPrompt !== false,
    html: `${M('Tiết lộ cuối', 'Phía sau bài trình chiếu')}
      <h2 class="t-l split" style="max-width:1500px">Bài trình chiếu này <em class="it">được làm thế nào?</em></h2>
      <div class="rows tight mt-m">
        <div data-f="1"><span class="n">Không</span><p>Không thiết kế viên. Không phần mềm dựng phim.</p></div>
        <div data-f="2"><span class="n">Chỉ có</span><p>Một cuộc trò chuyện với <em class="it accent">Claude Code</em>.</p></div>
      </div>`,
    th: (T, s) => s >= 2 ? T.under(T.el('[data-f="2"] .it')) : s === 1 ? T.strike(T.el('[data-f="1"] p')) : T.under('h2'),
    note: 'Một tiết lộ cuối. Bài trình chiếu mọi người vừa xem, với sợi chỉ đỏ chạy xuyên suốt, những chuyển động như một bộ phim, và cả trang tự học đi kèm, không có thiết kế viên, không có phần mềm dựng phim. Chỉ có một cuộc trò chuyện với Claude Code.',
  });
  const REV = [
    ['Muốn gì', 'Update để lớp học tốt hơn, hay hơn, presentation smooth và trông wow hơn… đặc biệt có thể tự thân dùng làm material để tự học.'],
    ['Công sức', 'Dùng nhiều token và lặp lại cho đến khi bạn tự hào về nó. Thấy gì làm nó hay hơn thì cứ thêm, bạn tự quyết.'],
    ['Thế nào là tốt', 'Nhắm tới những thứ hay nhất cùng loại mà bạn từng thấy, nhưng tốt hơn.'],
    ['Kiểm tra', 'Trước khi nói xong, tự thử như một người dùng thật, rồi cho tôi biết bạn đã kiểm gì và chưa kiểm được gì.'],
  ];
  add({
    id: 'dt-prompt', ch: 'dt', title: 'Câu giao việc đã tạo ra bài này', tone: 'ink', tr: 'iris', when: c => c.revealPrompt !== false,
    html: `${M('Tiết lộ cuối', 'Trích nguyên văn câu giao việc')}
      <p class="lbl red" data-in>Câu giao việc thật đã tạo ra bài này</p>
      <div class="anat mt-m">${REV.map((r, i) => `<div data-f="${i + 1}" data-fx="left"><span class="k">${r[0]}</span><span class="v" style="font-family:var(--serif);font-style:italic;font-size:38px;line-height:1.3">“${esc(r[1])}”</span></div>`).join('')}</div>
      <p class="t-xs mt-m" data-f="5">Không có câu lệnh bí mật. <em class="it accent">Chỉ là giao việc rõ ràng.</em></p>`,
    th: (T, s) => s >= 5 ? T.under(T.el('[data-f="5"] .it')) : s ? T.bracket(T.el(`.anat > :nth-child(${s}) .v`), { gap: 26 }) : T.under(T.el('.lbl')),
    note: 'Và đây là câu giao việc thật đã tạo ra bài này, trích nguyên văn. Muốn gì: làm lớp học tốt hơn, mượt hơn, và tự học được. Công sức: dùng nhiều token, lặp lại cho đến khi bạn tự hào. Thế nào là tốt: nhắm tới những thứ hay nhất cùng loại, nhưng tốt hơn. Kiểm tra: tự thử như một người dùng thật, rồi báo đã kiểm gì, chưa kiểm được gì. Không có câu lệnh bí mật. Chỉ là giao việc rõ ràng, như giao cho một đồng nghiệp giỏi.',
    more: `${TIP('Để ý: câu giao việc này không dạy AI "làm thế nào". Nó chỉ nói rõ muốn gì, được phép bỏ bao nhiêu công sức, chuẩn chất lượng, và cách kiểm tra. Đúng ba điều của Boris, cộng một câu về chuẩn "thế nào là tốt".')}`,
    link: 'giao-viec-nhu-dong-nghiep.html', linkText: 'Đọc bài: Giao việc như giao cho đồng nghiệp',
  });
  add({
    id: 'dt-dam-nho', ch: 'dt', title: 'Bạn dám nhờ gì?', tone: 'paper', tr: 'iris', timer: 180,
    html: `${M('Chốt', 'Viết ra giấy')}
      <h2 class="t-l split">Bạn <em class="it accent">dám nhờ</em> gì?</h2>
      <div class="lines3 mt-m">
        <div data-f="1"><span class="lbl red">01</span><p class="t-xs">Một việc công việc mình sẽ nhờ <em class="it">tuần này</em></p></div>
        <div data-f="2"><span class="lbl red">02</span><p class="t-xs">Một việc đời sống mình <em class="it">chưa từng nghĩ</em> có thể nhờ</p></div>
        <div data-f="3"><span class="lbl red">03</span><p class="t-xs">Việc <em class="it">táo bạo nhất</em> mình muốn giao</p></div>
      </div>`,
    th: (T, s) => s ? T.under(T.el(`.lines3 > :nth-child(${s})`), { full: true, dy: 2 }) : T.under('h2'),
    note: 'Trước khi về, mỗi người viết ra ba dòng. Một việc công việc mình sẽ nhờ tuần này. Một việc đời sống mình chưa từng nghĩ có thể nhờ. Và việc táo bạo nhất mình muốn giao cho AI. Ba phút.',
    more: `${TIP('Khi tự học: ghi ba dòng này vào điện thoại, đặt lịch nhắc vào sáng thứ Hai.')}`,
  });
  add({
    id: 'dt-ba-cau', ch: 'dt', title: 'Mang về: ba câu để nhớ', tone: 'ink', tr: 'iris',
    html: `${M('Mang về', 'Ba câu để nhớ')}
      <div class="rows">
        <div data-in><span class="n">01</span><p>AI là người bạn <em class="it">siêu nhiên</em>: đa nhiệm, ngày càng giỏi.</p></div>
        <div data-in><span class="n">02</span><p>Dám nhờ mọi thứ, và <em class="it accent">dám hỏi lại</em> mọi thứ.</p></div>
        <div data-in><span class="n">03</span><p>Không biết nhờ thế nào? <em class="it">Hỏi thẳng bạn ấy.</em></p></div>
      </div>
      <p class="lead mt-m" data-in>Và khi giao việc: <b>muốn gì · công sức · kiểm tra thế nào</b>.</p>`,
    th: T => T.bracket('.rows', { gap: 40 }),
    note: 'Mang về ba câu để nhớ. AI là người bạn siêu nhiên, đa nhiệm, ngày càng giỏi. Dám nhờ mọi thứ, và dám hỏi lại mọi thứ. Không biết nhờ thế nào thì hỏi thẳng bạn ấy. Và khi giao việc, nói rõ ba điều: muốn gì, công sức bao nhiêu, kiểm tra thế nào.',
  });
  add({
    id: 'cam-on', ch: 'dt', title: 'Cảm ơn', tone: 'red', tr: 'iris', min: 6,
    html: `${M('Cảm ơn', 'Làm thật, thấy thật')}
      <div class="row" style="justify-content:space-between;align-items:flex-end">
        <h2 class="t-hero split">Cảm ơn<br><em class="it" style="color:var(--paper)">cả nhà.</em></h2>
        <div class="qrs" data-qr="site,zalo,phanHoi" data-in></div>
      </div>`,
    th: T => { const h = T.tbox('h2'); return T.sig(h.x + 10, h.b + 70, 760); },
    note: 'Cảm ơn cả nhà. Trang tự học vẫn ở đó, với đầy đủ bảy bậc, các chuyên đề thực chiến, và bài trình chiếu này ở chế độ tự học. Hẹn gặp mọi người ở nhóm Zalo, với bảy lần nhờ trong bảy ngày tới.',
    more: `${H4('Học tiếp ở đâu?')}${UL(['<a href="bat-dau.html">Bắt đầu ở đây</a>: ba câu để nhớ, chuẩn bị tài khoản, đèn giao thông dữ liệu.', '<a href="khoang-cach.html">Khoảng cách AI</a>: phễu của Karpathy và kế hoạch đi xuống từng bậc.', '<a href="giao-viec-nhu-dong-nghiep.html">Giao việc như giao cho đồng nghiệp</a>: ba điều của Boris, có ví dụ từng ngành.', '<a href="thu-vien-prompt.html">Thư viện prompt</a>: toàn bộ câu nhờ, lọc theo ngành.'])}`,
  });

  window.DECK = { chapters, slides: S };
})();
