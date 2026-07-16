// Dữ liệu bài viết kiến thức YHCT — thêm bài mới vào ĐẦU mảng (prepend)
// Schema: { id, slug, date, category, categoryLabel, icon, gradient, title, excerpt, readTime, content }
// category values: "mat-benh" | "khong-thuoc" | "thuoc-yhct" | "phong-benh" | "phuong-huyet" | "lam-dep"
// gradient values: "g-herb" | "g-amber" | "g-navy" | "g-fire" | "g-huyet" | "g-rose"

const ARTICLES = [
  {
    id: 99,
    slug: "hen-phe-quan-yhct-phan-the-phac-do-dieu-tri",
    date: "2026-07-16",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Hen phế quản theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Hen phế quản được Y học cổ truyền gọi là 'Háo suyễn' — bệnh tái phát do đàm ẩm tích tụ phế lạc kết hợp ngoại tà xâm nhập. YHCT phân thể chính xác để điều trị tận gốc, giảm cơn và ngăn tái phát.",
    readTime: 6,
    content: `
<h2>Đại cương về hen phế quản theo Y học cổ truyền</h2>
<p>Hen phế quản là bệnh viêm mạn tính đường hô hấp, biểu hiện bằng cơn khó thở tái phát, khò khè, tức ngực và ho. Theo Y học cổ truyền (YHCT), bệnh được gọi là <strong>Háo suyễn</strong> — "háo" chỉ tiếng khò khè trong cổ họng, "suyễn" chỉ tình trạng thở gấp, hơi thở không đủ. Cổ nhân đúc kết: <em>"Háo dĩ tà thực vi chủ, suyễn dĩ chính hư vi yếu"</em> — tức cơn háo phần lớn do tà khí thực, còn suyễn mạn thì thiên về chính khí hư tổn.</p>
<p>Bệnh sinh theo YHCT xoay quanh <strong>đàm ẩm</strong> — chất bệnh lý tích tụ trong phế lạc từ trước (túc căn), kết hợp với ngoại tà (phong hàn, phong nhiệt, phong táo) hoặc nội nhân (ăn uống sai, cảm xúc thất thường, lao lực) làm khởi phát cơn. Phế chủ khí, Tỳ chủ vận hóa, Thận chủ nạp khí — ba tạng này liên quan mật thiết đến bệnh sinh và điều trị hen phế quản.</p>

<h2>Nguyên nhân và cơ chế bệnh sinh</h2>
<p>YHCT xác định các nguyên nhân chủ yếu gây Háo suyễn như sau:</p>
<ul>
  <li><strong>Ngoại tà xâm phạm:</strong> Phong hàn hoặc phong nhiệt xâm nhập Phế, làm Phế khí tuyên giáng thất thường, đàm ẩm theo đó bùng phát, tắc nghẽn phế lạc gây cơn.</li>
  <li><strong>Ẩm thực bất tiết:</strong> Ăn nhiều đồ sống lạnh, béo ngậy, cay nóng, uống nhiều rượu bia làm Tỳ Vị tổn thương, mất chức năng vận hóa, sinh đàm thấp ứ đọng phế.</li>
  <li><strong>Tình chí nội thương:</strong> Lo lắng, buồn phiền lâu ngày tổn hại Phế khí; tức giận uất kết hại Can, Can khí thượng nghịch phạm Phế.</li>
  <li><strong>Lao lực thái quá:</strong> Làm việc quá sức hoặc quan hệ tình dục không điều độ hao tổn Thận khí, Thận không nạp khí được khiến suyễn nặng, tái phát nhiều.</li>
</ul>

<h2>Phân thể lâm sàng theo Y học cổ truyền</h2>
<p>YHCT chia hen phế quản thành hai giai đoạn: <strong>phát tác kỳ</strong> (lúc đang lên cơn) và <strong>hoãn giải kỳ</strong> (ngoài cơn). Trong phát tác kỳ có bốn thể chính:</p>
<ul>
  <li><strong>Thể hàn háo (Đàm hàn phục Phế):</strong> Cơn khó thở kèm khò khè, đờm loãng trắng, sợ lạnh, không khát, rêu lưỡi trắng trơn, mạch phù hoặc khẩn. Pháp điều trị: Ôn phế tán hàn, hóa đàm bình háo. Bài thuốc tiêu biểu: <em>Tiểu thanh long thang</em> gia giảm.</li>
  <li><strong>Thể nhiệt háo (Đàm nhiệt phạm Phế):</strong> Cơn khó thở dữ dội, đờm vàng đặc dính, sốt, khát nước, rêu lưỡi vàng, mạch hoạt sác. Pháp điều trị: Thanh nhiệt tuyên phế, hóa đàm bình háo. Bài thuốc: <em>Định háo thang</em> kết hợp <em>Mã hạnh thạch cam thang</em>.</li>
  <li><strong>Thể phong đàm háo (Phong đàm ủng Phế):</strong> Cơn xuất hiện đột ngột, hay tái phát theo mùa, đờm nhiều, hắt hơi, ngứa mũi họng. Pháp điều trị: Khu phong hóa đàm, giáng khí bình háo. Bài thuốc: <em>Tam tử dưỡng thân thang</em> gia phong dược.</li>
  <li><strong>Thể hư háo (Phế Thận đều hư):</strong> Cơn kéo dài, mạn tính, khó thở liên tục tăng lên khi gắng sức, gầy yếu, lưng gối mỏi. Pháp điều trị: Bổ Phế ích Thận, định háo.</li>
</ul>
<p>Trong hoãn giải kỳ, YHCT tập trung điều trị <strong>gốc bệnh</strong> theo ba thể: Phế hư, Tỳ hư và Thận hư để giảm tần suất tái phát.</p>

<h2>Phương pháp điều trị và huyệt vị</h2>
<p>YHCT điều trị hen phế quản bằng sự kết hợp nhiều phương pháp:</p>
<ul>
  <li><strong>Châm cứu:</strong> Các huyệt vị được sử dụng thường xuyên gồm Phế du (BL13), Thiên đột (CV22), Đản trung (CV17), Phong long (ST40), Xích trạch (LU5), Túc tam lý (ST36). Trong cơn cấp, bổ sung châm Định suyễn (EX-B1) có tác dụng khai Phế định háo nhanh.</li>
  <li><strong>Cứu ngải:</strong> Đặc biệt hiệu quả trong thể hàn háo. Cứu huyệt Phế du, Đản trung, Quan nguyên, Túc tam lý để ôn dương, tán hàn, hóa đàm.</li>
  <li><strong>Thủy châm:</strong> Tiêm thuốc (thường dùng dung dịch vitamin B12 hoặc dung dịch sinh lý) vào các huyệt có tác dụng kéo dài tác động, thường dùng huyệt Phế du và Định suyễn.</li>
  <li><strong>Thuốc YHCT:</strong> Lựa chọn bài thuốc theo phân thể, uống theo đợt 15–30 ngày, điều chỉnh liều tùy đáp ứng lâm sàng.</li>
</ul>

<h2>Phòng ngừa tái phát và chăm sóc tại nhà</h2>
<p>Người bệnh hen phế quản cần kết hợp điều trị y tế với chăm sóc lối sống theo nguyên tắc YHCT:</p>
<ul>
  <li>Tránh các yếu tố khởi phát: lạnh, ẩm, khói bụi, phấn hoa, lông thú cưng.</li>
  <li>Điều hòa ẩm thực: hạn chế đồ lạnh, sống, hải sản tanh, đồ ngọt; tăng cường rau xanh, thực phẩm ôn ấm.</li>
  <li>Luyện tập hô hấp bụng (phúc thức hô hấp) mỗi ngày 15–20 phút để tăng dung tích phổi.</li>
  <li>Thực hành bài khí công đơn giản hoặc thái cực quyền để tăng cường Phế khí và Thận khí.</li>
  <li>Dùng bài chườm ngải cứu hoặc cao cứu vào mùa hè theo phương pháp "Thiên cứu" — dán cao trên huyệt lưng 3 năm liên tục để giảm cơn trong mùa đông.</li>
</ul>

<div class="art-cta-box"><p>Hen phế quản cần được chẩn đoán phân thể chính xác để lựa chọn phương pháp điều trị phù hợp. Tại <strong>Phòng khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> thực hiện thăm khám toàn diện bằng tứ chẩn, xác định thể bệnh và xây dựng phác đồ kết hợp châm cứu, cứu ngải và thuốc thang. Liên hệ đặt lịch: <strong>0973 710 237</strong>, giờ khám <strong>18:00–22:00 hàng ngày</strong>, tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 100,
    slug: "chuom-ngai-cuu-tri-dau-on-thong-kinh-lac",
    date: "2026-07-16",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Chườm ngải cứu trị đau: Phương pháp ôn thông kinh lạc không dùng thuốc",
    excerpt: "Chườm ngải cứu là phương pháp YHCT sử dụng nhiệt ẩm từ lá ngải để ôn thông kinh lạc, tán hàn, chỉ thống. Đây là liệu pháp an toàn, hiệu quả tại nhà cho nhiều chứng đau do hàn tà và khí huyết ứ trệ.",
    readTime: 5,
    content: `
<h2>Cơ sở lý luận của chườm ngải cứu</h2>
<p>Chườm ngải cứu (ngải nhiệt liệu pháp) là phương pháp không dùng thuốc đặc trưng của Y học cổ truyền, kết hợp tác dụng ôn nhiệt và dược tính của lá ngải cứu (<em>Folium Artemisiae Argyi</em>) để tác động lên kinh lạc qua da. Theo YHCT, <strong>lá ngải cứu</strong> có vị đắng cay, tính ôn, quy kinh Can – Tỳ – Thận. Khi được nung nóng và áp lên da, nhiệt ẩm cùng tinh dầu thấm qua lỗ chân lông, xâm nhập kinh lạc, có tác dụng <strong>ôn kinh tán hàn, thông lạc chỉ thống, hành khí hoạt huyết</strong>.</p>
<p>Nguyên lý của chườm ngải cứu khác với cứu ngải truyền thống ở chỗ: thay vì đốt cháy ngải nhung và hơ trực tiếp, chườm ngải sử dụng lá ngải cứu tươi hoặc khô ngâm/hấp nóng rồi bọc vải áp lên vùng đau, tạo nhiệt ẩm lan tỏa đều và an toàn hơn, phù hợp để tự thực hiện tại nhà.</p>

<h2>Chỉ định và chống chỉ định</h2>
<p>Chườm ngải cứu thích hợp cho các chứng bệnh thuộc <strong>hàn tà</strong> hoặc <strong>khí huyết ứ trệ</strong>:</p>
<ul>
  <li><strong>Đau do hàn:</strong> Đau lưng, đau gối, đau vai gáy tăng khi gặp lạnh, ẩm; đau bụng kinh do hàn ngưng, lạnh bụng.</li>
  <li><strong>Đau xương khớp mạn tính:</strong> Thoái hóa khớp gối, viêm quanh khớp vai, đau cổ vai gáy do phong hàn thấp tý.</li>
  <li><strong>Đau cơ căng thẳng:</strong> Đau cơ lưng do lao động nặng, đau cơ toàn thân sau làm việc.</li>
  <li><strong>Rối loạn tiêu hóa hàn tính:</strong> Đau bụng, đầy hơi, tiêu lỏng do Tỳ Vị hư hàn.</li>
</ul>
<p><strong>Chống chỉ định tuyệt đối:</strong></p>
<ul>
  <li>Vùng da đang có viêm cấp, sưng nóng đỏ đau (nhiệt tà) — chườm nóng sẽ làm nặng thêm.</li>
  <li>Vết thương hở, da bị trầy xước, bỏng hoặc nhiễm trùng.</li>
  <li>Phụ nữ có thai (tránh vùng bụng và lưng dưới).</li>
  <li>Người bệnh tiểu đường có biến chứng thần kinh (giảm cảm giác, dễ bỏng).</li>
</ul>

<h2>Cách thực hiện chườm ngải cứu tại nhà</h2>
<p>Có hai phương pháp đơn giản có thể thực hiện tại nhà:</p>
<ul>
  <li><strong>Phương pháp 1 — Chườm ngải cứu tươi:</strong> Lấy 200–300g lá ngải cứu tươi, rửa sạch, giã nhẹ cho dập (để giải phóng tinh dầu), sao nóng trên chảo (không dùng dầu) đến khi lá mềm và bốc mùi thơm. Bọc lá vào khăn cotton mỏng, đắp lên vùng đau. Giữ 20–30 phút, thay mới khi nguội. Thực hiện 1–2 lần/ngày.</li>
  <li><strong>Phương pháp 2 — Chườm túi ngải khô:</strong> Dùng ngải nhung khô (bán tại các hiệu thuốc YHCT), cho vào túi vải nhỏ may kín. Hấp cách thủy cho túi nóng đều (hoặc đặt vào lò vi sóng 1–2 phút, kiểm tra nhiệt độ trước khi dùng). Áp túi lên vùng cần điều trị. Có thể tái sử dụng nhiều lần.</li>
</ul>
<p><strong>Lưu ý quan trọng:</strong> Nhiệt độ lý tưởng là 40–45°C — nóng ấm dễ chịu, không quá bỏng. Luôn đặt một lớp vải giữa ngải và da, đặc biệt với người có da nhạy cảm. Sau chườm, giữ ấm vùng được điều trị, tránh gió lạnh ít nhất 30 phút.</p>

<h2>Kết hợp chườm ngải với bấm huyệt và xoa bóp</h2>
<p>Hiệu quả điều trị tăng cao khi kết hợp chườm ngải với xoa bóp nhẹ nhàng:</p>
<ul>
  <li><strong>Đau lưng:</strong> Chườm dọc theo Bàng quang kinh (hai bên cột sống), kết hợp ấn huyệt Thận du (BL23), Đại trường du (BL25).</li>
  <li><strong>Đau gối:</strong> Chườm bao quanh khớp gối, ấn huyệt Độc tỵ (ST35), Âm lăng tuyền (SP9).</li>
  <li><strong>Đau bụng kinh:</strong> Chườm vùng bụng dưới và lưng dưới, ấn huyệt Quan nguyên (CV4), Tam âm giao (SP6).</li>
  <li><strong>Đau vai gáy:</strong> Chườm vùng cổ vai, ấn huyệt Phong trì (GB20), Kiên tỉnh (GB21).</li>
</ul>

<h2>Liệu trình và theo dõi kết quả</h2>
<p>Với các chứng đau mạn tính, một liệu trình chườm ngải cứu kéo dài <strong>10–15 ngày</strong> mới cho thấy kết quả rõ rệt. Sau mỗi buổi, người bệnh nên ghi nhận mức độ đau trước và sau để theo dõi tiến triển. Nếu sau 5–7 ngày không có cải thiện hoặc đau tăng lên, cần đến cơ sở YHCT để được thăm khám lại, điều chỉnh phương pháp hoặc kết hợp thêm châm cứu chuyên sâu.</p>

<div class="art-cta-box"><p>Chườm ngải cứu tại nhà là bước hỗ trợ tốt, nhưng điều trị bài bản cần có sự thăm khám của thầy thuốc. Tại <strong>Phòng khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> sẽ đánh giá thể bệnh, chỉ định phương pháp phù hợp — từ cứu ngải, điện châm đến thủy châm — giúp giải quyết triệt để nguyên nhân gây đau. Đặt lịch khám: <strong>0973 710 237</strong>, giờ khám <strong>18:00–22:00 hàng ngày</strong>, tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 101,
    slug: "tieu-sai-ho-thang-hoa-giai-thieu-duong-kinh-dien",
    date: "2026-07-16",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Tiểu sài hồ thang — Bài thuốc hòa giải thiếu dương kinh điển của Y học cổ truyền",
    excerpt: "Tiểu sài hồ thang là bài thuốc hòa giải thiếu dương kinh điển từ 'Thương hàn luận', được sử dụng rộng rãi trong điều trị bệnh ngoại cảm giai đoạn trung gian, viêm gan mạn, viêm túi mật và nhiều bệnh nội khoa mạn tính.",
    readTime: 6,
    content: `
<h2>Nguồn gốc và ý nghĩa lịch sử</h2>
<p><strong>Tiểu sài hồ thang</strong> (小柴胡湯 — Xiǎo Chái Hú Tāng) được ghi chép lần đầu trong <em>Thương hàn luận</em> của Trương Trọng Cảnh — danh y Trung Hoa thế kỷ thứ 2 sau Công nguyên. Trải qua gần 2.000 năm, bài thuốc này vẫn giữ vị trí quan trọng trong y học cổ truyền Trung Quốc, Nhật Bản (Kampo), Hàn Quốc và Việt Nam. Đây là bài thuốc tiêu biểu cho pháp <strong>hòa giải thiếu dương</strong> — phương pháp điều trị bệnh ở giai đoạn trung gian giữa biểu và lý, không thuần thiên về tán biểu cũng không hoàn toàn thanh lý.</p>
<p>Trong hệ thống Lục kinh của Thương hàn luận, bệnh tiến triển từ Thái dương (bề mặt) vào Dương minh (trong) phải đi qua Thiếu dương — giai đoạn "nửa biểu nửa lý". Tiểu sài hồ thang chính là vũ khí để giải quyết giai đoạn này.</p>

<h2>Thành phần và vai trò từng vị thuốc</h2>
<p>Bài thuốc gồm 7 vị với tỷ lệ cổ phương:</p>
<ul>
  <li><strong>Sài hồ</strong> (Radix Bupleuri) 24g — Quân dược: Sơ can giải uất, sơ tán Thiếu dương tà khí, thăng đề dương khí. Là vị thuốc chủ đạo quyết định tên bài.</li>
  <li><strong>Hoàng cầm</strong> (Radix Scutellariae) 9g — Thần dược: Thanh nhiệt táo thấp, kết hợp với Sài hồ tạo nên đôi thuốc kinh điển "Sài – Cầm" để hòa giải thiếu dương.</li>
  <li><strong>Bán hạ</strong> (Rhizoma Pinelliae, chế) 9g — Tá dược: Hóa đàm chỉ ẩu, giáng nghịch hòa Vị, trị buồn nôn và nôn mửa.</li>
  <li><strong>Nhân sâm</strong> (Radix Ginseng) 9g — Tá dược: Bổ khí phù chính, giúp chính khí đủ sức kháng tà, phòng tà sâu nhập.</li>
  <li><strong>Cam thảo nướng</strong> (Radix Glycyrrhizae Praeparata) 9g — Sứ dược: Điều hòa các vị thuốc, bổ Tỳ ích khí, giải độc.</li>
  <li><strong>Sinh khương</strong> (Rhizoma Zingiberis Recens) 9g — Tá dược: Ôn Vị tán hàn, hợp với Bán hạ tăng tác dụng chỉ ẩu.</li>
  <li><strong>Đại táo</strong> (Fructus Jujubae) 4 quả — Tá dược: Bổ Tỳ ích khí, dưỡng huyết an thần, điều hòa Vinh Vệ.</li>
</ul>

<h2>Cơ chế tác dụng và chỉ định lâm sàng</h2>
<p>Pháp điều trị: <strong>Hòa giải thiếu dương, phù chính khử tà</strong>. Bài thuốc tác động đồng thời vào cả tà khí và chính khí: một mặt khu tà ra khỏi khu vực thiếu dương, một mặt bổ chính khí để tăng sức đề kháng.</p>
<p><strong>Chứng thiếu dương điển hình theo cổ điển:</strong></p>
<ul>
  <li>Hàn nhiệt vãng lai (sốt rét khi nóng khi lạnh luân phiên)</li>
  <li>Hung hiếp khổ mãn (tức đầy vùng ngực sườn)</li>
  <li>Tâm phiền hỷ ẩu (bồn chồn, buồn nôn)</li>
  <li>Khẩu khổ, yết can, mục huyễn (miệng đắng, họng khô, chóng mặt hoa mắt)</li>
</ul>
<p><strong>Ứng dụng lâm sàng hiện đại:</strong></p>
<ul>
  <li><strong>Bệnh gan mật:</strong> Viêm gan siêu vi mạn tính, viêm túi mật, sỏi mật — nhờ Sài hồ và Hoàng cầm có tác dụng kháng viêm, bảo vệ tế bào gan.</li>
  <li><strong>Bệnh hô hấp:</strong> Cảm cúm kéo dài, viêm phổi giai đoạn bán cấp, lao phổi hỗ trợ.</li>
  <li><strong>Bệnh tiêu hóa:</strong> Viêm dạ dày, loét dạ dày tá tràng thể Can khí phạm Vị.</li>
  <li><strong>Rối loạn thần kinh thực vật:</strong> Lo âu, trầm cảm, mất ngủ kèm biểu hiện thiếu dương.</li>
  <li><strong>Phụ khoa:</strong> Kinh nguyệt không đều thể Can uất, hội chứng tiền kinh nguyệt.</li>
</ul>

<h2>Gia giảm theo bệnh chứng</h2>
<p>Tiểu sài hồ thang là bài thuốc linh hoạt, được gia giảm rộng rãi theo bệnh cụ thể:</p>
<ul>
  <li><strong>Hung trung phiền nhiệt nhiều:</strong> Bỏ Bán hạ, thêm Qua lâu nhân để thanh nhiệt trừ đàm.</li>
  <li><strong>Khát nhiều:</strong> Bỏ Bán hạ, thêm Thiên hoa phấn để sinh tân chỉ khát.</li>
  <li><strong>Bụng đau:</strong> Bỏ Hoàng cầm, thêm Bạch thược để nhu Can chỉ thống.</li>
  <li><strong>Viêm gan mạn:</strong> Thêm Uất kim, Đan sâm để hoạt huyết, bảo vệ tế bào gan.</li>
  <li><strong>Cảm mạo kèm sốt cao:</strong> Thêm Kim ngân hoa, Liên kiều để tăng tác dụng thanh nhiệt.</li>
</ul>

<h2>Chống chỉ định và thận trọng</h2>
<p>Tiểu sài hồ thang không phải là bài thuốc bổ dưỡng, cần thận trọng trong các trường hợp:</p>
<ul>
  <li>Âm hư dương vượng nặng (không có tà khí thực) — dễ tổn thương âm huyết.</li>
  <li>Thể hàn tỳ hư (đàm thấp nhiều, tiêu lỏng mạn tính) — Sài hồ thăng đề có thể làm nặng tiêu lỏng.</li>
  <li>Phụ nữ có thai — cần tham khảo ý kiến thầy thuốc trước khi dùng.</li>
  <li>Không dùng kéo dài không kiểm soát — cần định kỳ đánh giá lại thể bệnh.</li>
  <li>Tương tác thuốc: thận trọng khi dùng cùng thuốc kháng đông, thuốc hạ đường huyết.</li>
</ul>

<div class="art-cta-box"><p>Tiểu sài hồ thang là bài thuốc mạnh, chỉ phát huy đúng tác dụng khi được kê đúng thể bệnh. Tại <strong>Phòng khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> sẽ thăm khám tứ chẩn, xác định thể bệnh và kê bài thuốc thang phù hợp — không dùng bài thuốc bán sẵn không qua chẩn đoán. Liên hệ: <strong>0973 710 237</strong>, giờ khám <strong>18:00–22:00 hàng ngày</strong>, tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 102,
    slug: "phong-ngua-mat-ngu-man-tinh-yhct-duong-tam-an-than",
    date: "2026-07-16",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Phòng ngừa mất ngủ mạn tính theo Y học cổ truyền: Dưỡng tâm an thần từ lối sống",
    excerpt: "Mất ngủ mạn tính không chỉ là triệu chứng rối loạn giấc ngủ mà còn là dấu hiệu tạng phủ mất cân bằng. YHCT chỉ ra cách phòng ngừa từ gốc qua điều chỉnh lối sống, ẩm thực và các bài tập dưỡng sinh.",
    readTime: 5,
    content: `
<h2>Vì sao mất ngủ mạn tính ngày càng phổ biến?</h2>
<p>Trong xã hội hiện đại, mất ngủ mạn tính (ngủ kém liên tục trên 3 tháng) đang trở thành vấn đề sức khỏe nghiêm trọng. Theo Y học cổ truyền, giấc ngủ được điều phối bởi <strong>Thần</strong> — hoạt động tư duy cảm xúc — cư trú tại Tâm. Ban ngày, dương khí vận hành ra ngoài, Thần hoạt động tỉnh táo; ban đêm, dương khí thu vào bên trong, Thần về Tâm, con người đi vào giấc ngủ. Khi Tâm thần không được nuôi dưỡng đầy đủ, hoặc bị can nhiễu bởi hỏa nhiệt, đàm nhiệt, Can khí uất kết... giấc ngủ sẽ bị rối loạn.</p>
<p>Lối sống hiện đại — áp lực công việc, ánh sáng màn hình đêm khuya, ăn uống thất thường, thiếu vận động — chính là "mảnh đất màu mỡ" cho mất ngủ mạn tính hình thành và bám rễ.</p>

<h2>Các yếu tố nguy cơ cần phòng tránh theo YHCT</h2>
<p>YHCT xác định 5 nhóm nguy cơ chính dẫn đến mất ngủ mạn tính:</p>
<ul>
  <li><strong>Tư lự thái quá (suy nghĩ, lo lắng nhiều):</strong> Làm hao tổn Tâm huyết và Tỳ khí. Tỳ hư không vận hóa được thủy cốc tinh vi để nuôi Tâm, dẫn đến Tâm huyết bất túc, Thần không yên.</li>
  <li><strong>Thức khuya liên tục:</strong> Theo học thuyết Tý Ngọ lưu chú, 23:00–01:00 là giờ Tý — giờ Đởm kinh vận hành, dương khí bắt đầu sinh. Thức trong giờ này tổn hao Đởm khí và Can huyết nghiêm trọng.</li>
  <li><strong>Ăn tối quá no hoặc quá muộn:</strong> Làm Vị khí bất hòa, sinh ra nội nhiệt và tích trệ, gây ra chứng "Vị bất hòa tắc ngọa bất an" (dạ dày không yên thì không ngủ được).</li>
  <li><strong>Cảm xúc thất thường, uất ức kéo dài:</strong> Tổn hại Can khí, dẫn đến Can hỏa vượng, hỏa nhiệt bốc lên quấy rối Tâm thần.</li>
  <li><strong>Hoạt động trí não căng thẳng kéo dài sau 20:00:</strong> Làm Tâm hỏa không thể hạ xuống, Thận thủy không thể thăng lên, dẫn đến mất cân bằng Tâm – Thận.</li>
</ul>

<h2>Lối sống phòng ngừa mất ngủ theo YHCT</h2>
<p>YHCT đề cao "thuận theo tự nhiên" — sống hòa hợp với quy luật âm dương trời đất để bảo vệ giấc ngủ:</p>
<ul>
  <li><strong>Giờ ngủ và giờ thức:</strong> Nên đi ngủ trước 23:00 và thức dậy trong khoảng 6:00–7:00. Đây là chu kỳ dương khí phù hợp nhất với cơ thể.</li>
  <li><strong>Tắt màn hình điện tử sau 21:00:</strong> Ánh sáng xanh từ điện thoại, máy tính ức chế melatonin và kích thích Tâm hỏa theo quan điểm YHCT.</li>
  <li><strong>Ngâm chân nước ấm trước ngủ 30 phút:</strong> Nước ấm 40–42°C ngâm 15–20 phút, có thể thêm vài nhánh ngải cứu, gừng hoặc muối hạt. Phương pháp này dẫn hỏa hạ hành, kéo khí huyết xuống dưới, giúp Tâm hỏa hạ xuống, Thần yên.</li>
  <li><strong>Thực hành thở bụng (phúc thức hô hấp):</strong> 10 phút trước khi ngủ, thở chậm sâu vào bụng (4 giây hít vào, 6 giây thở ra), giúp kích hoạt Phó giao cảm, an Tâm thần.</li>
  <li><strong>Xoa huyệt Nội quan, Thần môn:</strong> Dùng ngón cái xoa bóp nhẹ huyệt Nội quan (PC6) và Thần môn (HT7) ở cổ tay mỗi bên 2–3 phút trước khi ngủ.</li>
</ul>

<h2>Chế độ ẩm thực phòng mất ngủ</h2>
<p>Thực phẩm ảnh hưởng trực tiếp đến chất lượng giấc ngủ theo nguyên lý YHCT:</p>
<ul>
  <li><strong>Nên ăn:</strong> Hạt sen, táo đỏ, long nhãn, bách hợp, nấm linh chi — đây là các thực phẩm dưỡng Tâm an thần, bổ huyết, ích khí. Cháo hạt sen – bách hợp buổi tối là bài ăn dưỡng sinh kinh điển cho người mất ngủ.</li>
  <li><strong>Hạn chế:</strong> Cà phê, trà đặc, đồ uống có cồn sau 15:00; thức ăn cay nóng, chiên rán nhiều dầu mỡ vào buổi tối.</li>
  <li><strong>Bữa tối:</strong> Nên ăn nhẹ, ăn trước 19:00–19:30, ưu tiên thức ăn dễ tiêu như cháo, súp, rau củ hấp.</li>
</ul>

<h2>Các bài tập dưỡng sinh trước khi ngủ</h2>
<p>Thực hành đều đặn các bài tập nhẹ nhàng sau đây có tác dụng phòng ngừa mất ngủ hiệu quả:</p>
<ul>
  <li><strong>Bài tập Thư cân hoạt lạc:</strong> Vươn vai, xoay cổ, xoay hông nhẹ nhàng 5–10 phút để giải phóng căng thẳng cơ bắp sau một ngày làm việc.</li>
  <li><strong>Công thức "18 phép vỗ gõ":</strong> Vỗ nhẹ dọc theo các kinh Tâm, Tâm bào, Phế theo đường kinh ở mặt trong cánh tay.</li>
  <li><strong>Thiền chú tâm vào hơi thở:</strong> 10–15 phút tĩnh lặng theo dõi hơi thở ra vào, không phán xét, giúp Tâm thần định tĩnh trước khi ngủ.</li>
</ul>

<div class="art-cta-box"><p>Nếu mất ngủ đã kéo dài trên 3 tháng và không đáp ứng với điều chỉnh lối sống, cần được thăm khám chuyên sâu để xác định thể bệnh. Tại <strong>Phòng khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> sẽ chẩn đoán và điều trị mất ngủ mạn tính bằng châm cứu an thần và thuốc thang cá nhân hóa. Liên hệ: <strong>0973 710 237</strong>, giờ khám <strong>18:00–22:00 hàng ngày</strong>, tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 103,
    slug: "phuong-huyet-dieu-tri-tri-yhct",
    date: "2026-07-16",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị trĩ theo Y học cổ truyền",
    excerpt: "Châm cứu điều trị trĩ theo YHCT tác động vào các huyệt có tác dụng thanh nhiệt, lương huyết, thăng đề dương khí và hoạt huyết hóa ứ, giúp co búi trĩ, giảm chảy máu và ngăn sa trĩ.",
    readTime: 5,
    content: `
<h2>Cơ sở Y học cổ truyền trong điều trị trĩ</h2>
<p>Trĩ (痔 — Zhì) theo Y học cổ truyền được gọi là <strong>Trĩ sang</strong> hoặc <strong>Thoát giang</strong> (trường hợp sa trĩ). Bệnh sinh liên quan đến <strong>thấp nhiệt hạ chú</strong> (nhiệt thấp tụ xuống vùng hậu môn trực tràng), <strong>khí hư hạ hãm</strong> (dương khí không đủ để cố nhiếp, khiến tĩnh mạch trĩ giãn sa xuống), và <strong>huyết ứ</strong> (máu ứ tại mạch hậu môn do ngồi nhiều, ít vận động).</p>
<p>Châm cứu điều trị trĩ theo cơ chế: điều chỉnh chức năng Co trực tràng — cơ vòng hậu môn, giảm sung huyết tĩnh mạch, tăng cường khả năng cầm máu tự nhiên, đồng thời nâng cao trung khí để điều trị gốc bệnh <em>khí hư hạ hãm</em>.</p>

<h2>Phương huyệt chính trong điều trị trĩ</h2>
<p>Bài phương huyệt kinh điển gồm 6 huyệt vị cốt lõi:</p>
<ul>
  <li><strong>Trường cường (GV1) — Huyệt chủ yếu:</strong> Vị trí: điểm giữa xương cụt và hậu môn, trên đường giữa. Tác dụng: thông điều đốc mạch, thanh nhiệt lợi thấp, hoạt huyết hóa ứ trực tiếp tại vùng hậu môn trực tràng. Đây là huyệt đặc hiệu nhất trong điều trị trĩ. Châm sâu 1,5–2 thốn, hướng kim lên trên theo trục đốc mạch.</li>
  <li><strong>Thừa sơn (BL57) — Huyệt hội cơ:</strong> Vị trí: mặt sau cẳng chân, điểm giữa cơ bụng chân, ở chỗ lõm hình chữ V khi co cơ bắp chân. Tác dụng: thư cân hoạt lạc, hành khí hoạt huyết, điều trị trĩ và sa trực tràng. Theo cổ điển, Thừa sơn có tác dụng "thụ trĩ đặc hiệu" được ghi nhận từ thời Tống. Châm thẳng 1–1,5 thốn.</li>
  <li><strong>Thứ liêu (BL32) — Huyệt bàng quang kinh:</strong> Vị trí: lỗ cùng thứ hai (S2), cách đường giữa 1,5 thốn. Tác dụng: điều chỉnh chức năng trực tràng, giảm đau hậu môn, trị co thắt cơ vòng và táo bón. Châm sâu 1,5–2 thốn vào lỗ cùng.</li>
  <li><strong>Đại trường du (BL25) — Bối du huyệt đại tràng:</strong> Vị trí: ngang L4, cách đường giữa 1,5 thốn (huyệt lưng tương ứng với Đại trường). Tác dụng: thông đại tràng, điều hòa khí huyết vùng hậu môn trực tràng, trị táo bón và tiêu chảy — hai yếu tố thúc đẩy trĩ.</li>
  <li><strong>Thứ bạch (BL31) — Huyệt bàng quang kinh:</strong> Vị trí: lỗ cùng thứ nhất (S1). Tác dụng: bổ sung cho Thứ liêu, điều chỉnh chức năng vùng chậu và hậu môn, giảm áp lực tĩnh mạch trĩ.</li>
  <li><strong>Túc tam lý (ST36) — Huyệt bổ chính khí:</strong> Vị trí: dưới đầu gối 3 thốn, cách mào chày 1 thốn (ngoài). Tác dụng: kiện Tỳ ích khí, nâng cao trung khí để điều trị gốc bệnh khí hư hạ hãm — nguyên nhân gây sa búi trĩ. Kết hợp Túc tam lý với Bách hội (GV20) tạo nên bài phương "thăng đề dương khí" hiệu quả.</li>
</ul>

<h2>Huyệt bổ sung theo thể bệnh</h2>
<p>Tùy loại trĩ và thể bệnh, bổ sung các huyệt sau:</p>
<ul>
  <li><strong>Trĩ chảy máu nhiều (huyết nhiệt):</strong> Thêm Huyết hải (SP10), Âm lăng tuyền (SP9), Khúc trì (LI11) — thanh nhiệt lương huyết cầm máu.</li>
  <li><strong>Trĩ sa, sa trực tràng (khí hư hạ hãm):</strong> Thêm Bách hội (GV20) cứu bổ, Khí hải (CV6) — bổ trung ích khí, thăng đề.</li>
  <li><strong>Trĩ đau nhiều, sưng phù (huyết ứ, khí trệ):</strong> Thêm Hợp cốc (LI4), Thái xung (LV3) — hành khí hoạt huyết, giảm đau tiêu phù.</li>
  <li><strong>Táo bón kèm theo:</strong> Thêm Thiên khu (ST25), Quan nguyên (CV4) — thông trường nhuận táo.</li>
</ul>

<h2>Kỹ thuật châm và liệu trình</h2>
<p>Để đạt hiệu quả tối ưu trong điều trị trĩ bằng châm cứu:</p>
<ul>
  <li>Huyệt Trường cường và Thứ liêu cần châm đúng độ sâu và hướng kim — đây là hai huyệt yêu cầu kỹ thuật của thầy thuốc, không tự châm tại nhà.</li>
  <li>Cứu ngải huyệt Bách hội và Túc tam lý 10–15 phút sau châm nếu thể khí hư.</li>
  <li>Liệu trình: 10–15 buổi, mỗi buổi cách nhau 1 ngày. Trĩ độ 1–2 thường cải thiện rõ sau 1 liệu trình. Trĩ độ 3 cần 2–3 liệu trình.</li>
  <li>Kết hợp thuốc thang YHCT (Hòe hoa tán, Ất tự hoàn gia giảm) sẽ tăng hiệu quả đáng kể so với chỉ châm cứu đơn thuần.</li>
</ul>

<h2>Chăm sóc hỗ trợ tại nhà</h2>
<p>Song song với điều trị tại phòng khám, người bệnh cần thực hiện các biện pháp hỗ trợ:</p>
<ul>
  <li>Ăn nhiều rau xanh, uống đủ nước (2–2,5 lít/ngày) để chống táo bón.</li>
  <li>Ngâm hậu môn bằng nước ấm 40°C, 15 phút/lần, 2 lần/ngày để giảm đau và phù nề.</li>
  <li>Tránh ngồi một chỗ quá lâu; vận động nhẹ nhàng 30 phút mỗi ngày.</li>
  <li>Tập bài "co cơ đáy chậu" (Kegel) 10 lần × 3 hiệp mỗi ngày để tăng trương lực cơ vùng chậu.</li>
</ul>

<div class="art-cta-box"><p>Trĩ có thể điều trị hiệu quả mà không cần phẫu thuật ở giai đoạn sớm và trung bình. Tại <strong>Phòng khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> thực hiện châm cứu điều trị trĩ kết hợp thuốc thang cá nhân hóa, giúp co búi trĩ và ngăn tái phát bền vững. Liên hệ đặt lịch: <strong>0973 710 237</strong>, giờ khám <strong>18:00–22:00 hàng ngày</strong>, tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 104,
    slug: "phong-ngua-lao-hoa-da-yhct-can-than-duong-nhan",
    date: "2026-07-16",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Phòng ngừa lão hóa da theo Y học cổ truyền: Dưỡng Can Thận để nhan sắc bền lâu",
    excerpt: "Theo YHCT, lão hóa da bắt nguồn từ sự suy giảm Can huyết và Thận tinh — hai kho dự trữ sinh lực của cơ thể. Phòng ngừa từ bên trong bằng dưỡng Can bổ Thận kết hợp chăm sóc bên ngoài là chìa khóa cho nhan sắc bền lâu.",
    readTime: 6,
    content: `
<h2>Lão hóa da nhìn từ góc độ Y học cổ truyền</h2>
<p>Lão hóa là quy luật tự nhiên, nhưng tốc độ và mức độ lão hóa có thể được điều chỉnh đáng kể bằng lối sống và y học. Theo <strong>Y học cổ truyền</strong>, làn da và dung nhan phản chiếu sức khỏe nội tạng — đặc biệt là <strong>Can (gan)</strong> và <strong>Thận</strong>. Cổ nhân đúc kết: <em>"Thận là gốc tiên thiên — nguồn năng lượng sinh mệnh; Can là biển chứa huyết — nuôi dưỡng cân mạch và bề mặt da."</em></p>
<p>Những biểu hiện lão hóa da như nếp nhăn sâu, da khô sần, mất đàn hồi, tàn nhang nám tăng, sạm xỉn... đều được YHCT lý giải là hệ quả của <strong>Thận tinh suy giảm, Can huyết bất túc</strong>. Khi Thận tinh không còn dồi dào, tinh chất không được cung cấp để nuôi dưỡng da; khi Can huyết thiếu, bề mặt cơ thể thiếu "mưa tưới" của huyết dịch, da mất sắc bóng và sức sống.</p>

<h2>Các yếu tố thúc đẩy lão hóa da theo YHCT</h2>
<p>Bên cạnh yếu tố tuổi tác tự nhiên, YHCT chỉ ra những nguyên nhân làm tăng tốc lão hóa:</p>
<ul>
  <li><strong>Thức khuya liên tục:</strong> Tổn hao Can huyết và Thận âm nghiêm trọng — đây là nguyên nhân hàng đầu làm da xỉn màu, xuất hiện quầng thâm mắt sớm và nếp nhăn sớm.</li>
  <li><strong>Căng thẳng, lo âu mạn tính:</strong> Can khí uất kết, hỏa nhiệt tích tụ đốt cháy âm huyết, dẫn đến da khô, nám và sạm.</li>
  <li><strong>Ăn uống thiếu dưỡng chất hoặc kiêng khem thái quá:</strong> Tỳ Vị không có đủ nguồn vật chất để sản sinh khí huyết nuôi da.</li>
  <li><strong>Quan hệ tình dục không điều độ hoặc sinh nhiều con:</strong> Hao tổn Thận tinh và Thận khí, làm tốc độ lão hóa tăng nhanh.</li>
  <li><strong>Tiếp xúc nhiều nắng, gió, lạnh:</strong> Ngoại tà tổn thương Vệ khí — lớp bảo vệ bề mặt da, làm da mất khả năng tự bảo vệ.</li>
</ul>

<h2>Phương pháp dưỡng nội — Bổ Can Thận từ bên trong</h2>
<p>Nguyên tắc YHCT là "trị từ gốc" — muốn da đẹp bền lâu phải nuôi dưỡng Can và Thận:</p>
<ul>
  <li><strong>Bài thuốc kinh điển:</strong> <em>Lục vị địa hoàng hoàn</em> bổ Thận âm, dưỡng Can huyết là nền tảng. Có thể gia thêm Nữ trinh tử, Hà thủ ô đỏ (chế), Câu kỷ tử để tăng tác dụng dưỡng Thận ích tinh, đen tóc sáng da.</li>
  <li><strong>Thực phẩm bổ Can Thận:</strong> Câu kỷ tử (hàng ngày 10–15g pha trà), hà thủ ô chế, mè đen, hạt óc chó, trứng gà, thịt bò, cật heo (dưỡng Thận theo nguyên lý "đồng khí tương cầu").</li>
  <li><strong>Dưỡng huyết an Tâm:</strong> Long nhãn, táo đỏ, nhãn nhục, hạt sen — khi Tâm huyết đầy đủ, da mặt hồng hào tươi tắn.</li>
  <li><strong>Chống oxy hóa tự nhiên:</strong> Uống trà xanh, trà hoa cúc, trà hoa hồng hàng ngày — theo YHCT, những vị này thanh nhiệt, hoạt huyết, giải uất và chống lão hóa.</li>
</ul>

<h2>Phương pháp dưỡng ngoại — Châm cứu và chăm sóc bề mặt</h2>
<p>Song song với dưỡng nội, YHCT có các phương pháp tác động trực tiếp lên da mặt:</p>
<ul>
  <li><strong>Châm cứu mỹ dung (Facial Acupuncture):</strong> Châm các vi huyệt trên mặt kết hợp huyệt toàn thân như Túc tam lý (ST36), Tam âm giao (SP6), Huyết hải (SP10). Kích thích sản sinh collagen tại chỗ, tăng tuần hoàn máu da mặt, nâng cơ và giảm nếp nhăn.</li>
  <li><strong>Xoa bóp mặt dưỡng nhan:</strong> Kỹ thuật xoa bóp nhẹ nhàng theo kinh lạc mặt (Vị, Đởm, Đại trường, Tiểu trường) thực hiện 10 phút mỗi sáng giúp khí huyết lưu thông, da mặt hồng hào và săn chắc.</li>
  <li><strong>Đắp mặt nạ thảo dược:</strong> Bột ngọc trai, bột bạch linh, bột ngải cứu, mật ong nguyên chất — các vị liệu này dưỡng âm, trắng da, se khít lỗ chân lông từ bên ngoài.</li>
  <li><strong>Cứu ngải nhẹ huyệt mặt (gián tiếp):</strong> Cứu huyệt Bách hội (GV20) và huyệt lưng Tâm du, Cách du để tăng Dương khí và Huyết, gián tiếp nuôi dưỡng da mặt.</li>
</ul>

<h2>Thói quen sinh hoạt phòng lão hóa sớm</h2>
<p>YHCT nhấn mạnh <strong>phòng bệnh hơn chữa bệnh</strong> — những thói quen nhỏ tích lũy mỗi ngày mới tạo nên nhan sắc bền vững:</p>
<ul>
  <li>Ngủ đủ giấc trước 23:00, ngủ đủ 7–8 tiếng — đây là "thuốc làm đẹp" hiệu quả nhất.</li>
  <li>Tập dưỡng sinh mỗi sáng 20–30 phút (Thái cực quyền, bát đoạn cẩm, khí công) — tăng cường khí huyết lưu thông, nuôi dưỡng da từ bên trong.</li>
  <li>Duy trì tâm trạng vui vẻ, tránh uất ức — Can khí thư thái thì khí huyết lưu thông, da mặt tươi sáng tự nhiên.</li>
  <li>Uống đủ nước (1,5–2 lít/ngày), ưu tiên nước ấm — theo YHCT, nước ấm dưỡng Tỳ Vị và giúp vận chuyển tinh chất đến toàn thân.</li>
  <li>Chống nắng mỗi ngày — phòng phong nhiệt và tử ngoại tổn thương Phế khí (Phế chủ bì mao — Phế quản lý bề mặt da).</li>
</ul>

<div class="art-cta-box"><p>Nhan sắc bền lâu đến từ sức khỏe nội tạng được cân bằng và nuôi dưỡng đúng cách. Tại <strong>Phòng khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> thăm khám tứ chẩn để xác định thể trạng, từ đó xây dựng phác đồ làm đẹp bằng châm cứu mỹ dung và thuốc thang bổ Can Thận cá nhân hóa. Liên hệ: <strong>0973 710 237</strong>, giờ khám <strong>18:00–22:00 hàng ngày</strong>, tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 98,
    slug: "luc-vi-dia-hoang-hoan-bo-than-am",
    date: "2026-07-16",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Lục vị địa hoàng hoàn — Bài thuốc bổ thận âm kinh điển của Y học cổ truyền",
    excerpt: "Lục vị địa hoàng hoàn là bài thuốc bổ thận âm kinh điển, được dùng hơn nghìn năm để điều trị thận âm hư: mỏi lưng, tai ù, mất ngủ, đổ mồ hôi trộm. Tìm hiểu thành phần, cơ chế và cách dùng đúng bài thuốc quý này.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Lục vị địa hoàng hoàn (六味地黄丸) là một trong những bài thuốc cổ phương nổi tiếng nhất trong Y học cổ truyền (YHCT), được ghi chép lần đầu trong <em>Tiểu nhi dược chứng trực quyết</em> (thế kỷ XI) của danh y Tiền Ất. Ban đầu bài thuốc được dùng để điều trị trẻ em phát dục chậm do thận tinh bất túc, về sau được mở rộng ứng dụng rộng rãi cho người lớn với chứng <strong>thận âm hư</strong> — một trong những thể bệnh phổ biến nhất trong thực hành lâm sàng YHCT hiện đại.</p>
<p>Theo lý thuyết YHCT, <strong>thận tàng tinh, chủ cốt tủy, khai khiếu ở nhĩ và nhị âm</strong>. Khi thận âm bị hao tổn do tuổi tác, lao lực, bệnh mạn tính, hay tinh thần căng thẳng kéo dài, cơ thể sẽ xuất hiện nhiều triệu chứng đặc trưng: đau mỏi thắt lưng và gối, ù tai, hoa mắt chóng mặt, ra mồ hôi trộm, lòng bàn tay và chân nóng, miệng khô, mất ngủ hay mơ, di tinh ở nam giới và kinh nguyệt không đều ở nữ giới. Lục vị địa hoàng hoàn được bào chế để <strong>tư bổ thận âm, điền tinh ích tủy</strong>, giải quyết căn nguyên gốc rễ của những triệu chứng này.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể Thận âm hư điển hình:</strong> Đau mỏi lưng gối âm ỉ, ù tai, hoa mắt, họng khô miệng khát về đêm, lưỡi đỏ ít rêu, mạch tế sác. Đây là chứng chỉ định cốt lõi của Lục vị địa hoàng hoàn. Pháp điều trị: tư âm bổ thận, điền tinh ích tủy.</li>
  <li><strong>Thể Thận âm hư kèm hư nhiệt (âm hư hỏa vượng):</strong> Ngoài các triệu chứng thận âm hư, còn có cảm giác nóng bừng trong xương (cốt chưng triều nhiệt), ra nhiều mồ hôi trộm, lòng bàn tay bàn chân nóng bứt rứt, di tinh. Pháp điều trị: tư âm thanh nhiệt, thường phối hợp thêm tri mẫu và hoàng bá (bài Tri bá địa hoàng hoàn).</li>
  <li><strong>Thể Thận âm hư kèm Can âm hư:</strong> Mắt khô, nhìn mờ, hay chóng mặt, đau đầu đỉnh, dễ nổi nóng cáu gắt, co giật cơ nhỏ. Pháp điều trị: tư bổ can thận, thường phối hợp thêm kỷ tử và cúc hoa (bài Kỷ cúc địa hoàng hoàn).</li>
  <li><strong>Thể Thận âm hư kèm Tâm âm hư:</strong> Mất ngủ, hay hoảng hốt giật mình, hồi hộp, ra mồ hôi trộm nhiều, hay quên. Pháp điều trị: tư thận dưỡng tâm, thường phối hợp thêm các vị an thần như toan táo nhân, bá tử nhân.</li>
  <li><strong>Thể Thận âm hư kèm Phế âm hư:</strong> Ho khan ít đờm, họng khô, tiếng khàn, ra mồ hôi trộm. Pháp điều trị: tư âm bổ phế thận, thường phối hợp thêm mạch môn và ngũ vị tử (bài Bát tiên trường thọ hoàn).</li>
</ul>

<h2>Thành phần và phương pháp điều trị</h2>
<p>Lục vị địa hoàng hoàn gồm <strong>6 vị thuốc</strong> được phân thành hai nhóm "tam bổ" và "tam tả" tạo nên sự cân bằng âm dương tinh tế:</p>
<ul>
  <li><strong>Tam bổ (ba vị bổ):</strong>
    <ul>
      <li><em>Thục địa hoàng</em> (32g — quân dược): Đại bổ thận âm, điền tinh ích tủy. Vị ngọt, tính ôn, quy kinh Tâm — Can — Thận.</li>
      <li><em>Sơn thù du</em> (16g — thần dược): Bổ can thận, cố sáp tinh khí, chống thoát hư. Vị chua, tính vi ôn, quy kinh Can — Thận.</li>
      <li><em>Hoài sơn</em> (16g — thần dược): Bổ tỳ thận, cố tinh chỉ tả. Vị ngọt, tính bình, quy kinh Tỳ — Phế — Thận.</li>
    </ul>
  </li>
  <li><strong>Tam tả (ba vị tả — phụ trợ):</strong>
    <ul>
      <li><em>Trạch tả</em> (12g — tá dược): Lợi thủy thẩm thấp, phòng thục địa quá nê trệ. Vị ngọt nhạt, tính hàn.</li>
      <li><em>Phục linh</em> (12g — tá dược): Kiện tỳ thẩm thấp, điều hòa tỳ vị. Vị ngọt nhạt, tính bình.</li>
      <li><em>Đơn bì</em> (12g — tá dược): Thanh can nhiệt, lương huyết, phòng sơn thù du quá ôn táo. Vị đắng cay, tính hàn.</li>
    </ul>
  </li>
</ul>
<p>Sự kết hợp "tam bổ tam tả" tạo nên đặc điểm nổi bật của bài thuốc: <strong>bổ mà không trệ, tả mà không thương chính</strong> — bổ thận âm mạnh nhưng không gây ứ trệ đàm thấp, không làm suy yếu tỳ vị.</p>
<p><strong>Liều dùng thông thường:</strong> Dạng hoàn mật: 8–12g/lần × 2 lần/ngày sau bữa ăn. Dạng thang sắc: sắc uống ngày 1 thang chia 2–3 lần. Liệu trình tối thiểu 4–8 tuần để thấy rõ hiệu quả.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li>Dùng kết hợp với thay đổi lối sống: ngủ đủ giấc trước 23 giờ (thận phục hồi từ 23:00–01:00), tránh thức khuya và làm việc quá sức là nguyên nhân hàng đầu gây thận âm hư.</li>
  <li>Chế độ ăn bổ thận âm: bổ sung thực phẩm màu đen như đậu đen, vừng đen, táo đen (kỷ tử), hải sản, trứng, thịt lợn đen; kiêng đồ cay nóng, rượu bia và đồ chiên rán.</li>
  <li>Bấm huyệt hỗ trợ tại nhà: Thái khê (KI3) — hõm giữa mắt cá trong và gân gót, bấm 60 lần mỗi chân; Thận du (BL23) — huyệt lưng ngang thắt lưng, xoa ấm bằng lòng bàn tay 5 phút mỗi ngày.</li>
  <li>Lưu ý chống chỉ định: Không dùng khi đang bị cảm cúm, sốt, tiêu chảy cấp; thận trọng với người tỳ vị hư hàn (tiêu hóa yếu, hay lạnh bụng) — cần giảm liều hoặc thêm vị kiện tỳ như bạch truật, sa nhân.</li>
  <li>Phụ nữ có thai: tham khảo ý kiến bác sĩ YHCT trước khi dùng.</li>
</ul>

<div class="art-cta-box">
  <p>Lục vị địa hoàng hoàn là bài thuốc bổ thận âm kinh điển, nhưng hiệu quả phụ thuộc vào việc chẩn đoán đúng thể bệnh. Để được thăm khám tứ chẩn (vọng, văn, vấn, thiết) xác định đúng thể thận âm hư và tư vấn liều dùng phù hợp, hãy đến <strong>Phòng Khám Y học Cổ truyền Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ phân thể chính xác và điều chỉnh bài thuốc phù hợp với từng người. Liên hệ: <strong>0973 710 237</strong> — giờ khám từ <strong>18:00 đến 22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>.</p>
</div>
    `
  },
  {
    id: 97,
    slug: "phan-xa-ban-chan-yhct-cham-soc-toan-than",
    date: "2026-07-15",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Phản xạ học bàn chân theo Y học cổ truyền: Chăm sóc toàn thân không dùng thuốc",
    excerpt: "Bàn chân là bản đồ thu nhỏ của cơ thể — xoa bóp đúng vùng phản xạ có thể kích thích tạng phủ, cân bằng khí huyết và phòng ngừa bệnh tật theo nguyên lý Y học cổ truyền. Phương pháp hoàn toàn không dùng thuốc, an toàn cho mọi lứa tuổi.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Trong Y học cổ truyền (YHCT), bàn chân có vị trí đặc biệt quan trọng vì đây là nơi hội tụ của nhiều đường kinh lạc đi qua: <strong>Thận kinh (KI)</strong>, <strong>Bàng quang kinh (BL)</strong>, <strong>Can kinh (LR)</strong>, <strong>Tỳ kinh (SP)</strong> và <strong>Vị kinh (ST)</strong>. Đặc biệt, <strong>Dũng tuyền (KI1)</strong> — huyệt khởi đầu của Thận kinh — nằm ở lòng bàn chân và được coi là nơi khí của cơ thể "giao tiếp" với đất, mang năng lượng dương địa vào nuôi dưỡng thận tạng.</p>
<p>Phản xạ học bàn chân (túc tâm phản xạ liệu pháp) là phương pháp tác động lên các vùng phản xạ ở lòng và mặt bàn chân để điều chỉnh chức năng tạng phủ và hệ thần kinh tự chủ. YHCT lý giải điều này thông qua lý thuyết kinh lạc: tác động đúng điểm trên kinh → kích thích tạng phủ mà kinh lạc đó chủ quản → cân bằng âm dương và khí huyết toàn thân. Phương pháp này hoàn toàn không xâm lấn, an toàn và có thể tự thực hành tại nhà.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<p>Xoa bóp phản xạ bàn chân được chỉ định rộng rãi, phù hợp với nhiều thể bệnh khác nhau:</p>
<ul>
  <li><strong>Thể Thận hư (âm hư hoặc dương hư):</strong> Biểu hiện đau mỏi lưng, tai ù, mất ngủ, tiểu đêm nhiều, hay hoa mắt chóng mặt. Tập trung vào vùng phản xạ thận và tuyến thượng thận ở giữa lòng bàn chân.</li>
  <li><strong>Thể Tỳ Vị hư yếu:</strong> Biểu hiện tiêu hóa kém, ăn uống không ngon, bụng đầy hơi, phân lỏng. Tập trung vào vùng phản xạ dạ dày, ruột non và tỳ ở cung bàn chân (arch).</li>
  <li><strong>Thể Can khí uất kết:</strong> Biểu hiện căng thẳng, hay cáu gắt, ngủ khó, đau tức mạng sườn. Tập trung vào vùng phản xạ gan và túi mật ở nửa dưới bàn chân phải.</li>
  <li><strong>Thể Tâm Thận bất giao:</strong> Biểu hiện hồi hộp, mất ngủ kéo dài, hay lo âu, mơ nhiều. Tập trung vào vùng phản xạ tim (bàn chân trái) và thận (cả hai chân).</li>
  <li><strong>Thể Phế khí hư:</strong> Biểu hiện hay cảm lạnh, ho kéo dài, thở ngắn, da khô. Tập trung vào vùng phản xạ phổi và phế quản ở nền các ngón chân (đặc biệt ngón 2, 3, 4).</li>
</ul>

<h2>Phương pháp điều trị — Huyệt vị và kỹ thuật xoa bóp</h2>
<p>Các huyệt chính trên bàn chân cần kích thích và cách thực hiện:</p>
<ul>
  <li><strong>Dũng tuyền (KI1):</strong> Nằm ở 1/3 trước lòng bàn chân, hõm giữa ngón chân thứ 2 và 3. Dùng ngón cái bấm và xoa tròn 2–3 phút mỗi chân. Tác dụng: bổ thận tinh, an thần, hạ hỏa hư. Đặc biệt tốt cho người mất ngủ, căng thẳng và cao huyết áp thể thận âm hư.</li>
  <li><strong>Thái khê (KI3):</strong> Nằm trong mắt cá chân trong, hõm giữa đỉnh mắt cá và gân gót. Bấm và giữ áp lực 30–60 giây mỗi chân. Tác dụng: bổ thận âm, kiện thận dương, giảm đau lưng, điều kinh.</li>
  <li><strong>Chiếu hải (KI6):</strong> Nằm dưới đỉnh mắt cá trong 1 thốn. Bấm nhẹ theo vòng tròn. Tác dụng: an thần, dưỡng âm, điều hòa kinh nguyệt, cải thiện giấc ngủ.</li>
  <li><strong>Công tôn (SP4):</strong> Nằm ở mặt trong bàn chân, dưới đầu xương bàn chân thứ nhất. Bấm và ấn theo chiều dọc 60 lần. Tác dụng: kiện tỳ hòa vị, hỗ trợ tiêu hóa, giảm đầy hơi.</li>
  <li><strong>Thái xung (LR3):</strong> Nằm trên mu bàn chân, trong kẽ ngón 1 và 2, khoảng 2 thốn tính từ kẽ ngón. Bấm mạnh và giữ 30 giây. Tác dụng: sơ can giải uất, hạ huyết áp, giảm stress.</li>
</ul>
<p><strong>Quy trình xoa bóp vùng phản xạ:</strong> Dùng ngón cái lăn nhấn từng vùng với lực vừa phải (cảm giác tức nhẹ, không đau rát), thực hiện theo chiều ngón chân → gót chân. Mỗi vùng xoa 1–2 phút. Tổng thời gian 20–30 phút mỗi buổi. Ngâm chân nước ấm 10 phút trước khi xoa để tăng hiệu quả.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li>Thời điểm tốt nhất: buổi tối trước khi ngủ hoặc sau khi tắm nước ấm. Không thực hiện ngay sau ăn no hoặc khi bụng đói.</li>
  <li>Chuẩn bị: ngâm chân nước ấm 40–42°C trong 10 phút (có thể thêm một nhúm muối và vài lát gừng tươi để tăng tác dụng ôn thông kinh lạc).</li>
  <li>Tư thế: ngồi thoải mái trên ghế, gác chân lên đùi đối diện để tiếp cận dễ lòng bàn chân. Thư giãn hoàn toàn, thở sâu đều trong suốt quá trình xoa bóp.</li>
  <li>Thứ tự huyệt: Dũng tuyền (KI1) → Thái khê (KI3) → Chiếu hải (KI6) → Công tôn (SP4) → Thái xung (LR3). Thực hiện lần lượt từng chân.</li>
  <li>Tần suất: duy trì 4–5 buổi/tuần; cải thiện rõ rệt sau 2–3 tuần thực hành đều đặn.</li>
  <li>Chống chỉ định: không thực hiện khi có vết thương hở, viêm da nhiễm trùng ở bàn chân, gãy xương chưa lành, hoặc trong 3 tháng đầu thai kỳ.</li>
</ul>

<div class="art-cta-box">
  <p>Xoa bóp phản xạ bàn chân là phương pháp tự chăm sóc hiệu quả tại nhà, nhưng để được đánh giá thể trạng đúng và hướng dẫn kỹ thuật trực tiếp, hãy đến thăm khám tại <strong>Phòng Khám Y học Cổ truyền Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ xác định thể bệnh và xây dựng liệu trình xoa bóp bấm huyệt toàn diện phù hợp với tình trạng sức khỏe của bạn. Liên hệ: <strong>0973 710 237</strong> — giờ khám từ <strong>18:00 đến 22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>.</p>
</div>
    `
  },
  {
    id: 91,
    slug: "soi-than-tiet-nieu-yhct-phan-the-phac-do",
    date: "2026-07-14",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Sỏi thận - tiết niệu theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Y học cổ truyền gọi sỏi thận - tiết niệu là \"Thạch lâm\" — một trong ngũ lâm chứng do thấp nhiệt tích tụ hạ tiêu. Bài viết trình bày cách YHCT phân thể và điều trị chứng bệnh này một cách toàn diện.",
    readTime: 7,
    content: `
<h2>Sỏi thận - tiết niệu theo quan niệm Y học cổ truyền</h2>
<p>Trong Y học cổ truyền (YHCT), sỏi thận - tiết niệu được gọi là <strong>Thạch lâm</strong> (石淋), thuộc phạm trù <em>Ngũ lâm chứng</em> — nhóm bệnh lý về tiểu tiện bao gồm: thạch lâm, khí lâm, huyết lâm, cao lâm và lao lâm. Nguyên nhân chủ yếu là do <strong>thấp nhiệt uất kết ở hạ tiêu</strong>, làm cho tân dịch bị chưng đốt, lắng đọng thành sa thạch trong thận và đường tiết niệu.</p>
<p>Về cơ chế bệnh sinh, YHCT nhận định rằng:</p>
<ul>
  <li><strong>Thận khí hư suy</strong>: Thận chủ thủy, khi thận khí không đủ sức khí hóa, nước bị đình trệ, muối khoáng lắng cặn.</li>
  <li><strong>Thấp nhiệt hạ chú</strong>: Ăn uống thức ăn nhiều béo ngọt, sinh nội nhiệt, thấp nhiệt chạy xuống hạ tiêu, đốt cháy tân dịch thành thạch.</li>
  <li><strong>Khí trệ huyết ứ</strong>: Sỏi gây tắc nghẽn, khí không lưu thông, huyết không vận hành, tạo thành vòng bệnh lý ác tính.</li>
</ul>
<p>Trên lâm sàng, bệnh nhân thường có triệu chứng đau quặn thắt lưng từng cơn, tiểu buốt, tiểu đục, tiểu máu, hoặc tắc tiểu đột ngột khi sỏi di chuyển xuống niệu quản.</p>

<h2>Phân thể lâm sàng trong YHCT</h2>

<h3>1. Thể Thấp nhiệt hạ chú (湿热下注)</h3>
<p><strong>Triệu chứng:</strong> Tiểu buốt, tiểu rắt, tiểu đục hoặc tiểu máu; lưng và vùng bụng dưới đau nhói hoặc đau quặn; miệng khô, khát, táo bón; lưỡi đỏ, rêu vàng nhờn; mạch hoạt sác.</p>
<p><strong>Pháp điều trị:</strong> Thanh nhiệt lợi thấp, thông lâm bài thạch.</p>
<p><strong>Phương thuốc tiêu biểu:</strong> Bát chính tán gia vị — Kim tiền thảo, Hải kim sa, Thạch vĩ, Hoạt thạch, Mộc thông, Xa tiền tử, Đại hoàng, Cam thảo.</p>

<h3>2. Thể Khí trệ huyết ứ (气滞血瘀)</h3>
<p><strong>Triệu chứng:</strong> Đau lưng dữ dội từng cơn, đau cố định, tiểu máu đỏ tươi hoặc tím; lưỡi tím hoặc có điểm ứ huyết; mạch huyền hoặc sáp.</p>
<p><strong>Pháp điều trị:</strong> Hành khí hoạt huyết, thông lâm bài thạch.</p>
<p><strong>Phương thuốc tiêu biểu:</strong> Thạch vĩ tán hợp Thất tiếu tán gia Kim tiền thảo, Uất kim, Ngưu tất.</p>

<h3>3. Thể Thận âm hư (肾阴虚)</h3>
<p><strong>Triệu chứng:</strong> Đau âm ỉ vùng thắt lưng kéo dài, tiểu ít vàng hoặc tiểu máu; hoa mắt, chóng mặt, tai ù; lưỡi đỏ ít rêu; mạch tế sác.</p>
<p><strong>Pháp điều trị:</strong> Tư âm bổ thận, lợi thấp bài thạch.</p>
<p><strong>Phương thuốc tiêu biểu:</strong> Lục vị địa hoàng hoàn gia Hoạt thạch, Kim tiền thảo, Xa tiền tử, Hải kim sa.</p>

<h3>4. Thể Thận dương hư (肾阳虚)</h3>
<p><strong>Triệu chứng:</strong> Lưng đau mỏi lạnh, tiểu đêm nhiều lần, tiểu trong dài; tay chân lạnh, mệt mỏi; lưỡi nhợt bệu; mạch trầm trì vô lực.</p>
<p><strong>Pháp điều trị:</strong> Ôn thận trợ dương, khí hóa lợi niệu.</p>
<p><strong>Phương thuốc tiêu biểu:</strong> Thận khí hoàn gia Kim tiền thảo, Trạch tả, Cẩu tích.</p>

<h3>5. Thể Tỳ thận lưỡng hư (脾肾两虚)</h3>
<p><strong>Triệu chứng:</strong> Mệt mỏi toàn thân, ăn uống kém, bụng chướng; lưng đau mỏi; tiểu nhiều lần hoặc tiểu ít; lưỡi nhợt rêu trắng; mạch trầm nhược.</p>
<p><strong>Pháp điều trị:</strong> Kiện tỳ ích thận, hóa thấp bài thạch.</p>
<p><strong>Phương thuốc tiêu biểu:</strong> Sâm linh bạch truật tán hợp Thận khí hoàn gia vị.</p>

<h2>Châm cứu và huyệt vị điều trị</h2>
<p>Châm cứu có tác dụng giảm đau quặn thận, tăng nhu động niệu quản giúp tống sỏi ra ngoài, đồng thời điều chỉnh chức năng thận-bàng quang.</p>
<ul>
  <li><strong>Huyệt chính:</strong> Thận du (BL23), Bàng quang du (BL28), Trung cực (CV3), Tam tiêu du (BL22), Tam âm giao (SP6).</li>
  <li><strong>Huyệt phụ theo thể bệnh:</strong>
    <ul>
      <li>Thấp nhiệt: thêm Âm lăng tuyền (SP9), Uỷ dương (BL39).</li>
      <li>Khí trệ huyết ứ: thêm Huyết hải (SP10), Thái xung (LR3).</li>
      <li>Thận hư: thêm Thái khê (KI3), Mệnh môn (GV4).</li>
    </ul>
  </li>
  <li><strong>Kỹ thuật:</strong> Châm tả với thể thực chứng, châm bổ với thể hư chứng. Có thể kết hợp điện châm tần số thấp để tăng hiệu quả giảm đau.</li>
</ul>

<h2>Thảo dược hỗ trợ điều trị sỏi thận</h2>
<p>Các vị thuốc YHCT thường dùng trong điều trị sỏi thận bao gồm:</p>
<ul>
  <li><strong>Kim tiền thảo (Desmodium styracifolium):</strong> Vị ngọt nhạt, tính mát — thanh lợi thấp nhiệt, bài thạch trông lâm, được coi là "hoàng đế" trong điều trị sỏi tiết niệu.</li>
  <li><strong>Hải kim sa (Lycopodium japonicum):</strong> Vị ngọt, tính hàn — lợi niệu thông lâm, bài thạch, đặc biệt hiệu quả với sỏi nhỏ dưới 10mm.</li>
  <li><strong>Thạch vĩ (Pyrrosia lingua):</strong> Vị đắng ngọt, tính lương — lợi niệu thông lâm, cầm huyết, giảm viêm.</li>
  <li><strong>Xa tiền tử (Plantago asiatica):</strong> Vị ngọt, tính hàn — lợi tiểu, thanh nhiệt, thẩm thấp.</li>
  <li><strong>Mã đề thảo (Plantago major):</strong> Dễ kiếm, dùng tươi sắc uống hàng ngày hỗ trợ lợi niệu.</li>
</ul>
<p>Ngoài ra, bệnh nhân được khuyến cáo uống đủ 2–3 lít nước mỗi ngày để duy trì lưu lượng nước tiểu, giúp hòa tan và đẩy sỏi nhỏ ra ngoài tự nhiên.</p>

<h2>Lưu ý và chỉ định phối hợp Đông - Tây y</h2>
<p>YHCT đạt hiệu quả tốt nhất với sỏi có kích thước nhỏ hơn 10mm, sỏi bùn, và trong giai đoạn điều trị duy trì sau tán sỏi. Những trường hợp cần can thiệp y tế khẩn cấp bao gồm:</p>
<ul>
  <li>Sỏi lớn hơn 10–15mm gây tắc hoàn toàn niệu quản.</li>
  <li>Sốt cao, nhiễm khuẩn tiết niệu nặng đi kèm sỏi.</li>
  <li>Suy thận cấp do tắc nghẽn.</li>
  <li>Đau quặn thận không đáp ứng với điều trị nội khoa.</li>
</ul>
<p>Trong những trường hợp này, bệnh nhân cần được điều trị Tây y (nội soi tán sỏi, mổ lấy sỏi) trước, sau đó dùng YHCT để phục hồi chức năng thận và phòng ngừa tái phát.</p>

<div class="art-cta-box"><p>Nếu bạn đang có triệu chứng đau lưng, tiểu buốt, tiểu máu nghi ngờ sỏi thận - tiết niệu, hãy đến thăm khám tại <strong>Phòng Khám Y học Cổ truyền Tâm Đức</strong> — nơi BS. Nguyễn Đức Tâm sẽ thăm khám toàn diện, kết hợp siêu âm và xét nghiệm để xác định thể bệnh, từ đó xây dựng phác đồ điều trị bằng thuốc YHCT và châm cứu phù hợp. Liên hệ: <strong>0973 710 237</strong> — giờ khám từ <strong>18:00 đến 22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 92,
    slug: "yoga-ket-hop-duong-sinh-yhct-khong-dung-thuoc",
    date: "2026-07-14",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Yoga kết hợp dưỡng sinh Y học cổ truyền: Phương pháp luyện tập không dùng thuốc",
    excerpt: "Sự kết hợp giữa Yoga Ấn Độ và dưỡng sinh Y học cổ truyền Trung Quốc tạo ra một phương pháp luyện tập toàn diện — vừa điều khí, vừa nuôi tạng, vừa an tâm thần mà không cần dùng thuốc.",
    readTime: 6,
    content: `
<h2>Yoga và dưỡng sinh YHCT: Hai dòng chảy, một đích đến</h2>
<p>Yoga (có nguồn gốc từ Ấn Độ cổ đại) và dưỡng sinh Y học cổ truyền (YHCT) Trung Hoa tuy xuất phát từ hai nền văn minh khác nhau, nhưng cùng chia sẻ triết lý cốt lõi: <strong>sức khỏe thực sự là sự hài hòa giữa thân — tâm — khí</strong>. Cả hai đều nhấn mạnh vai trò của hơi thở có ý thức, tư thế điều chỉnh cơ thể, và thiền định an tĩnh tâm trí.</p>
<p>Trong YHCT, dưỡng sinh (養生) là nghệ thuật bảo tồn và tăng cường sức sống thông qua điều tiết ăn uống, luyện tập, nghỉ ngơi, và quản lý cảm xúc. Các hình thức dưỡng sinh vận động bao gồm Thái cực quyền, Bát đoạn cẩm, Ngũ cầm hí, và các bài khí công — tất cả đều dựa trên nguyên lý <strong>điều khí, thông kinh, dưỡng tạng</strong>.</p>
<p>Kết hợp Yoga với dưỡng sinh YHCT cho phép người tập tận dụng ưu điểm của cả hai hệ thống: tính linh hoạt và tăng sức mạnh cơ bắp từ Yoga, cùng với sự điều hòa khí huyết và cân bằng âm dương từ dưỡng sinh YHCT.</p>

<h2>Nguyên tắc kết hợp theo quan điểm YHCT</h2>
<p>Để kết hợp hiệu quả, cần nắm vững một số nguyên tắc cơ bản của YHCT:</p>
<ul>
  <li><strong>Thuận theo thời tiết và giờ giấc:</strong> YHCT đề cao luyện tập theo quy luật tự nhiên. Buổi sáng sớm (giờ Dần — Mão, 3:00–7:00) là lúc dương khí mới trỗi dậy, thích hợp nhất để tập luyện vận động nhẹ nhàng như yoga hoặc khí công.</li>
  <li><strong>Điều tức (điều hòa hơi thở):</strong> Hơi thở bụng sâu và chậm, phối hợp nhịp nhàng với mỗi tư thế yoga, giúp đưa khí vào đan điền (vùng bụng dưới rốn 3 thốn — kho chứa khí gốc theo YHCT).</li>
  <li><strong>Điều thân (điều chỉnh tư thế):</strong> Mỗi tư thế yoga cần được giữ đúng, thoải mái, không gắng sức. YHCT nhấn mạnh luyện tập "nhu" (mềm mại) để khí lưu thông, tránh luyện "cứng" (cố gắng thái quá) làm tổn khí.</li>
  <li><strong>Điều tâm (an định tâm trí):</strong> Tâm trí tập trung vào hơi thở và cảm nhận cơ thể, không để suy nghĩ tản mạn. Đây là điểm chung giữa thiền trong Yoga và công pháp nhập tĩnh trong YHCT.</li>
</ul>

<h2>Bài tập kết hợp yoga - dưỡng sinh gợi ý</h2>
<p>Dưới đây là một chương trình 45 phút kết hợp, phù hợp cho người mới bắt đầu và người trung niên:</p>
<ul>
  <li><strong>5 phút — Khởi động khí công:</strong> Đứng thẳng, hai chân rộng bằng vai, thư giãn toàn thân. Thực hiện bài <em>Kéo giãn cung trời</em> (ngửa người, hai tay đan lồng nhau đưa lên cao) kết hợp hít thở sâu 5–8 lần. Khởi động kinh khí trước khi tập.</li>
  <li><strong>10 phút — Tư thế Yoga khai kinh Phế - Đại tràng:</strong> Tư thế <em>Tam giác mở rộng</em> (Utthita Trikonasana) và <em>Cánh tay đại bàng</em> (Garudasana) — kéo giãn kênh kinh Phế và Đại tràng ở hai cánh tay và thành ngực, hỗ trợ hệ hô hấp.</li>
  <li><strong>10 phút — Tư thế Yoga khai kinh Thận - Bàng quang:</strong> Tư thế <em>Ngồi gập người về phía trước</em> (Paschimottanasana) và <em>Rắn hổ mang</em> (Bhujangasana) — tác động đến vùng thắt lưng, bổ thận khí, tăng cường kinh Thận và Bàng quang dọc theo cột sống.</li>
  <li><strong>10 phút — Khí công Bát đoạn cẩm (đoạn 5-8):</strong> Xen kẽ sau yoga để điều hòa khí huyết. Thực hiện chậm rãi, kết hợp hơi thở bụng.</li>
  <li><strong>10 phút — Thiền định và thư giãn:</strong> Nằm tư thế xác chết (Savasana), thực hiện thiền quét thân thể — đưa ý thức lần lượt qua từng bộ phận từ chân lên đầu để thư giãn hoàn toàn. YHCT gọi đây là giai đoạn <em>thu công</em> — thu nạp khí đã luyện vào đan điền.</li>
</ul>

<h2>Lợi ích theo từng nhóm bệnh lý</h2>
<p>Kết hợp Yoga - Dưỡng sinh YHCT đặc biệt có lợi cho những người mắc:</p>
<ul>
  <li><strong>Đau cổ vai gáy, đau thắt lưng:</strong> Các tư thế kéo giãn cột sống giảm co cứng cơ, kết hợp điều khí giúp giảm đau mạn tính hiệu quả không cần thuốc.</li>
  <li><strong>Căng thẳng, lo âu, mất ngủ:</strong> Thiền định kết hợp yoga kích hoạt hệ thần kinh phó giao cảm, giảm cortisol. YHCT gọi đây là "dưỡng tâm an thần".</li>
  <li><strong>Cao huyết áp nhẹ đến trung bình:</strong> Hơi thở sâu trong yoga giúp hạ huyết áp; các động tác khí công nhẹ nhàng hỗ trợ lưu thông kinh mạch, điều hòa can khí.</li>
  <li><strong>Tiểu đường type 2:</strong> Tập yoga đều đặn cải thiện độ nhạy insulin; khí công giúp điều hòa tỳ vị — cơ quan chủ vận hóa theo YHCT.</li>
  <li><strong>Phụ nữ mãn kinh:</strong> Yoga và dưỡng sinh tư âm, bình can tiềm dương giúp giảm bốc hỏa, ra mồ hôi đêm, lo âu do suy giảm estrogen.</li>
</ul>

<h2>Những điều cần lưu ý khi thực hành</h2>
<ul>
  <li>Không tập ngay sau khi ăn no — nên cách bữa ăn ít nhất 2 tiếng.</li>
  <li>Người bị huyết áp thấp cần tránh các tư thế đảo ngược (đầu thấp hơn tim) hoặc thay bằng phiên bản nhẹ hơn.</li>
  <li>Phụ nữ có thai chỉ tập yoga dành riêng cho bà bầu, tham khảo ý kiến thầy thuốc trước.</li>
  <li>Người mới tập nên bắt đầu với cường độ thấp, tăng dần sau 2–4 tuần.</li>
  <li>Sau tập cần uống nước ấm (không uống nước lạnh) — YHCT khuyến cáo nước lạnh sau vận động làm tổn thương dương khí tỳ vị.</li>
</ul>

<div class="art-cta-box"><p>Nếu bạn muốn được tư vấn chương trình tập yoga - dưỡng sinh phù hợp với thể trạng và bệnh lý cá nhân, hãy đến thăm khám tại <strong>Phòng Khám Y học Cổ truyền Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ đánh giá thể chất và tư vấn phác đồ không dùng thuốc kết hợp châm cứu, dưỡng sinh và vật lý trị liệu phù hợp nhất. Liên hệ: <strong>0973 710 237</strong> — giờ khám từ <strong>18:00 đến 22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 93,
    slug: "ngan-kieu-tan-bai-thuoc-so-tan-phong-nhiet",
    date: "2026-07-14",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Ngân kiều tán — Bài thuốc sơ tán phong nhiệt kinh điển của Y học cổ truyền",
    excerpt: "Ngân kiều tán là bài thuốc danh tiếng do Ngô Cúc Thông soạn trong sách Ôn bệnh điều biện, được dùng điều trị phong nhiệt xâm phạm vệ phận với các chứng sốt, đau họng, ho khan không có đờm.",
    readTime: 6,
    content: `
<h2>Nguồn gốc và lịch sử bài thuốc</h2>
<p><strong>Ngân kiều tán</strong> (銀翹散) là một trong những bài thuốc nổi tiếng nhất của trường phái <em>Ôn bệnh học</em> — một hệ thống lý luận và điều trị các bệnh nhiệt do ngoại cảm được phát triển mạnh vào thời nhà Thanh (Trung Quốc). Bài thuốc được ghi chép lần đầu trong tác phẩm <strong>Ôn bệnh điều biện</strong> (溫病條辨, 1798) của danh y <strong>Ngô Cúc Thông</strong> (吳鞠通, 1758–1836).</p>
<p>Ngô Cúc Thông xây dựng bài thuốc dựa trên lý luận về tam tiêu biện chứng — đặc biệt cho chứng bệnh ở <em>thượng tiêu</em> (vệ phận) do phong nhiệt tà khí xâm phạm vào hệ thống phòng thủ bề ngoài của cơ thể. Đây là bài thuốc "tân lương giải biểu" — dùng vị thuốc cay mát để tán tà nhiệt ở bề mặt cơ thể mà không làm tổn thương âm dịch.</p>
<p>Cho đến ngày nay, Ngân kiều tán vẫn là bài thuốc được sử dụng rộng rãi trong điều trị các bệnh nhiễm khuẩn hô hấp trên (viêm họng, cảm cúm, viêm amidan) và được nghiên cứu về tác dụng kháng vi rút, kháng khuẩn, chống viêm hiện đại.</p>

<h2>Thành phần và vai trò từng vị thuốc</h2>
<p>Bài thuốc gồm 10 vị, mỗi vị đảm nhận một vai trò cụ thể:</p>
<ul>
  <li><strong>Kim ngân hoa (Flos Lonicerae) — 30g [Quân]:</strong> Vị ngọt, tính hàn — thanh nhiệt giải độc, sơ tán phong nhiệt. Được nghiên cứu có hoạt tính kháng khuẩn và kháng vi rút rộng.</li>
  <li><strong>Liên kiều (Fructus Forsythiae) — 30g [Quân]:</strong> Vị đắng, tính hơi hàn — thanh nhiệt giải độc, tán kết tiêu thũng, đặc biệt hiệu quả với viêm nhiễm vùng họng.</li>
  <li><strong>Cát cánh (Radix Platycodonis) — 18g [Thần]:</strong> Vị đắng cay, tính bình — tuyên phế lợi yết, hóa đờm, dẫn thuốc lên trên.</li>
  <li><strong>Bạc hà (Herba Menthae) — 18g [Thần]:</strong> Vị cay, tính hàn — sơ tán phong nhiệt ở đầu mặt, làm mát họng, thông khiếu.</li>
  <li><strong>Đạm trúc diệp (Herba Lophatheri) — 12g [Tá]:</strong> Vị ngọt nhạt, tính hàn — thanh tâm hỏa, sinh tân dịch, giảm khát.</li>
  <li><strong>Kinh giới tuệ (Spica Schizonepetae) — 12g [Tá]:</strong> Vị cay, tính ôn — sơ phong giải biểu, phối với Bạc hà để tăng tác dụng phát tán ngoại tà.</li>
  <li><strong>Đạm đậu xị (Semen Sojae Praeparatum) — 15g [Tá]:</strong> Vị cay ngọt, tính hàn — giải biểu, thanh nhiệt nhẹ nhàng, an thần.</li>
  <li><strong>Ngưu bàng tử (Fructus Arctii) — 18g [Tá]:</strong> Vị cay đắng, tính hàn — sơ tán phong nhiệt, lợi yết, giải độc tiêu thũng.</li>
  <li><strong>Lô căn (Rhizoma Phragmitis) — 60g [Tá]:</strong> Vị ngọt, tính hàn — thanh nhiệt sinh tân, giảm buồn nôn, bảo vệ tân dịch không bị tổn thương khi dùng thuốc tân khai.</li>
  <li><strong>Cam thảo (Radix Glycyrrhizae) — 15g [Sứ]:</strong> Vị ngọt, tính bình — điều hòa các vị thuốc, giải độc, lợi họng.</li>
</ul>
<p><em>Cách dùng truyền thống:</em> Tất cả nghiền thô (không sắc đặc), mỗi lần dùng 18–30g, sắc với nước lạnh đến khi sôi là uống ngay (không đun lâu để giữ tinh dầu bay hơi trong Bạc hà, Kinh giới). Ngày 2 lần. Hiện nay có dạng viên hoàn hoặc thuốc sắc đóng gói sẵn.</p>

<h2>Chỉ định lâm sàng</h2>
<p>Ngân kiều tán được chỉ định trong các trường hợp <strong>phong nhiệt xâm phạm vệ phận</strong> với đặc điểm:</p>
<ul>
  <li>Sốt nhẹ đến vừa, ớn lạnh nhẹ (sợ lạnh ít hơn sợ nóng).</li>
  <li>Đau đầu, họng đỏ đau, amidan sưng.</li>
  <li>Ho khan hoặc ít đờm vàng, khô miệng khát nước.</li>
  <li>Lưỡi đỏ đầu lưỡi, rêu trắng mỏng hoặc vàng mỏng; mạch phù sác.</li>
  <li>Ứng dụng lâm sàng hiện đại: cảm cúm, viêm họng cấp, viêm amidan, viêm phế quản cấp giai đoạn đầu, quai bị giai đoạn đầu, sởi giai đoạn phát ban.</li>
</ul>

<h2>Chống chỉ định và lưu ý</h2>
<ul>
  <li><strong>Không dùng</strong> với chứng phong hàn (sợ lạnh nhiều, không khát, rêu trắng, mạch phù khẩn) — bài thuốc tính hàn lương sẽ làm hàn tà vào sâu hơn.</li>
  <li><strong>Không dùng</strong> khi bệnh nhân đã có thấp nhiệt nặng, bụng đầy chướng (Bạc hà, Kinh giới có thể làm tăng thấp tà).</li>
  <li><strong>Thận trọng</strong> với người dạ dày hư hàn, tiêu chảy mạn tính.</li>
  <li><strong>Phụ nữ có thai:</strong> cần thận trọng với Kinh giới và Ngưu bàng tử — nên hỏi thầy thuốc trước khi dùng.</li>
  <li><strong>Thời gian dùng:</strong> thường chỉ 3–5 ngày trong giai đoạn cấp. Nếu bệnh không cải thiện hoặc tiến triển phức tạp hơn, cần thay bài thuốc phù hợp.</li>
  <li>Không sắc thuốc quá lâu vì sẽ làm mất tác dụng của các vị thuốc tân khai (Bạc hà, Kinh giới).</li>
</ul>

<h2>Nghiên cứu hiện đại về Ngân kiều tán</h2>
<p>Các nghiên cứu dược lý hiện đại đã xác nhận nhiều tác dụng của bài thuốc:</p>
<ul>
  <li><strong>Kháng vi rút:</strong> Kim ngân hoa và Liên kiều có hoạt tính ức chế nhiều chủng vi rút cúm, adenovirus, và vi rút hợp bào hô hấp (RSV).</li>
  <li><strong>Kháng khuẩn:</strong> Ức chế Streptococcus pyogenes (liên cầu nhóm A), Staphylococcus aureus — tác nhân phổ biến gây viêm họng vi khuẩn.</li>
  <li><strong>Chống viêm:</strong> Giảm sản xuất các cytokine tiền viêm (TNF-α, IL-6, IL-1β).</li>
  <li><strong>Hạ nhiệt:</strong> Cơ chế hạ sốt thông qua ức chế tổng hợp prostaglandin E2.</li>
</ul>

<div class="art-cta-box"><p>Nếu bạn thường xuyên bị viêm họng, cảm cúm tái phát hoặc muốn tìm hiểu liệu trình điều trị bằng thuốc YHCT phù hợp với thể trạng, hãy đến thăm khám tại <strong>Phòng Khám Y học Cổ truyền Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ thăm khám và kê đơn thuốc YHCT phù hợp, đảm bảo an toàn và hiệu quả. Liên hệ: <strong>0973 710 237</strong> — giờ khám từ <strong>18:00 đến 22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 94,
    slug: "duong-than-bao-tinh-ich-tho-yhct",
    date: "2026-07-14",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Dưỡng thận bảo tinh ích thọ theo Y học cổ truyền: Bí quyết sống thọ, sống khỏe",
    excerpt: "Thận là gốc của sinh mệnh, kho chứa tiên thiên chi tinh — theo Y học cổ truyền, bảo vệ và bồi bổ thận tinh là chìa khóa để sống thọ, duy trì năng lượng và phòng ngừa lão hóa sớm.",
    readTime: 6,
    content: `
<h2>Tại sao thận là "căn bản của sinh mệnh"?</h2>
<p>Trong lý luận Y học cổ truyền (YHCT), <strong>Thận</strong> (腎) được coi là "tiên thiên chi bản" — gốc rễ của sự sống. Thận chứa đựng <em>tinh khí</em> nhận từ cha mẹ lúc mới sinh (tiên thiên chi tinh) và tinh khí được hóa sinh từ đồ ăn thức uống hàng ngày (hậu thiên chi tinh). Tổng thể tinh khí này quyết định sức sống, khả năng sinh sản, trí tuệ và tuổi thọ của con người.</p>
<p>Thận đảm nhiệm nhiều chức năng sinh lý quan trọng:</p>
<ul>
  <li><strong>Thận chủ tàng tinh, chủ sinh trưởng phát dục và sinh dục:</strong> Tinh khí thận điều tiết quá trình phát triển từ khi sinh ra đến tuổi trưởng thành, rồi lão hóa. Thận tinh suy giảm → tóc bạc sớm, rụng răng, lưng mỏi gối yếu, giảm libido.</li>
  <li><strong>Thận chủ thủy:</strong> Điều tiết toàn bộ cân bằng nước trong cơ thể thông qua khí hóa bàng quang. Thận hư → tiểu nhiều đêm, tiểu dắt, hoặc phù nề.</li>
  <li><strong>Thận chủ nạp khí:</strong> Hỗ trợ phế trong hô hấp sâu. Thận hư → khó thở khi gắng sức, hắt hơi, hen suyễn.</li>
  <li><strong>Thận khai khiếu ở tai và nhị âm:</strong> Thận tinh đủ → thính lực tốt; thận suy → tai ù, điếc tuổi già.</li>
  <li><strong>Thận chủ cốt tủy, thông não:</strong> Thận tinh nuôi dưỡng não bộ và xương. Thận suy → xương loãng, trí nhớ giảm, đầu óc u mê.</li>
</ul>
<p>Vì vậy, <strong>dưỡng thận bảo tinh</strong> — bảo tồn và bồi bổ thận tinh — là chiến lược phòng bệnh và dưỡng sinh hàng đầu của YHCT để đạt được "ích thọ" (延年益寿 — sống lâu và khỏe mạnh).</p>

<h2>Những thói quen "hao thận" cần tránh</h2>
<p>YHCT nhận định nhiều thói quen thường ngày làm tổn hao thận tinh nhanh chóng:</p>
<ul>
  <li><strong>Thức khuya thường xuyên:</strong> Giờ Tý (23:00–1:00) là thời điểm thận và bàng quang hoạt động bài tiết mạnh nhất. Thức khuya làm gián đoạn quá trình phục hồi thận tinh qua đêm.</li>
  <li><strong>Sinh hoạt tình dục quá độ:</strong> Xuất tinh tiêu hao thận tinh trực tiếp. Người lớn tuổi cần điều tiết — không kiêng hoàn toàn, nhưng không phóng túng.</li>
  <li><strong>Căng thẳng, sợ hãi kéo dài:</strong> Sợ hãi là cảm xúc thuộc thận. Lo sợ mạn tính làm thận khí co rút, hao tổn thận tinh.</li>
  <li><strong>Ăn mặn quá mức:</strong> Vị mặn vào thận — ít thì bổ thận, nhiều thì hại thận và hại tim mạch.</li>
  <li><strong>Lạm dụng thuốc kháng sinh, hóa chất:</strong> Nhiều loại thuốc Tây y có thể gây độc cho thận nếu dùng lâu dài không kiểm soát.</li>
  <li><strong>Uống nước ít:</strong> Thận cần nước đầy đủ để thực hiện chức năng lọc và bài tiết.</li>
</ul>

<h2>Chế độ ăn uống dưỡng thận theo YHCT</h2>
<p>YHCT có câu: "Sắc đen vào thận" — các thực phẩm màu đen và sẫm màu, hải sản, và thực phẩm có vị mặn vừa phải đặc biệt tốt cho thận:</p>
<ul>
  <li><strong>Đậu đen:</strong> Bổ thận, hoạt huyết, giải độc — có thể nấu cháo hoặc rang ăn thay bữa sáng.</li>
  <li><strong>Vừng đen (mè đen):</strong> Bổ thận tinh, dưỡng huyết, đen tóc — dùng rắc vào cơm, cháo hoặc xay bột pha nước.</li>
  <li><strong>Hạt óc chó (Hồ đào nhục):</strong> Vị ngọt, tính ôn — bổ thận dương, ích não tủy, nhuận táo — ăn 2–3 quả/ngày.</li>
  <li><strong>Kỷ tử (Câu kỷ tử):</strong> Bổ thận âm, dưỡng can mục — ngâm nước uống hoặc hầm súp.</li>
  <li><strong>Hải sản (tôm, mực, hàu):</strong> Bổ thận dương, ích tinh — tôm đặc biệt được YHCT xếp vào nhóm bổ thận tráng dương.</li>
  <li><strong>Sơn dược (khoai mài):</strong> Bổ thận tỳ phế đồng thời, dùng rất tốt cho người thận hư kèm tỳ vị yếu.</li>
  <li><strong>Linh chi:</strong> Dùng dạng trà hàng ngày — nghiên cứu hiện đại cho thấy linh chi có tác dụng bảo vệ thận, chống lão hóa tế bào.</li>
</ul>

<h2>Bài tập dưỡng sinh bổ thận hàng ngày</h2>
<p>Các bài tập khí công và dưỡng sinh sau đây có tác dụng bổ thận tinh theo YHCT:</p>
<ul>
  <li><strong>Xoa thận du mỗi sáng:</strong> Hai tay xoa nóng rồi áp vào vùng thắt lưng (vị trí huyệt Thận du — lưng, ngang đốt sống thắt lưng 2, cách đường giữa 1,5 thốn), xoa tròn 36 lần mỗi bên. Làm vào buổi sáng sớm khi thức dậy.</li>
  <li><strong>Gõ nhẹ vùng thắt lưng:</strong> Nắm tay lỏng, gõ nhẹ 2 bên thắt lưng mỗi sáng 50–100 cái — kích thích thận du, mệnh môn.</li>
  <li><strong>Tập nuốt nước bọt:</strong> Nước bọt trong YHCT gọi là "Kim tân" và "Ngọc dịch" — nuốt chậm vào dưới lưỡi mỗi sáng 36 lần giúp bổ thận tinh, dưỡng âm.</li>
  <li><strong>Đứng tấn dưỡng sinh (Trạm trang):</strong> Đứng hai chân rộng bằng vai, hơi khom gối, hai tay đặt nhẹ trên đùi, nhắm mắt, hít thở bụng sâu 5–10 phút. Bổ thận khí, tăng cường căn bản.</li>
  <li><strong>Đoạn 8 Bát đoạn cẩm — "Bối hậu thất điên bách bệnh tiêu":</strong> Đứng trên đầu ngón chân, rồi hạ gót chân đột ngột xuống đất nhẹ nhàng 7 lần — có tác dụng kích thích thận kinh và điều hòa toàn thân.</li>
</ul>

<h2>Phòng ngừa lão hóa thận theo từng giai đoạn tuổi</h2>
<p>YHCT chia lộ trình suy giảm thận tinh theo từng giai đoạn và đề xuất can thiệp phòng ngừa phù hợp:</p>
<ul>
  <li><strong>30–40 tuổi:</strong> Thận tinh bắt đầu giảm dần. Tập trung vào chế độ ngủ đủ giấc, giảm stress, ăn uống dưỡng thận, hạn chế rượu bia và thuốc lá.</li>
  <li><strong>40–50 tuổi:</strong> Bắt đầu xuất hiện dấu hiệu thận hư (lưng mỏi, ngủ kém, tóc bạc sớm). Bắt đầu dùng các thực phẩm bổ thận, tập dưỡng sinh đều đặn, thăm khám định kỳ.</li>
  <li><strong>Trên 50 tuổi:</strong> Cần bổ thận chủ động bằng thuốc YHCT (Lục vị địa hoàng hoàn, Thận khí hoàn tùy thể bệnh), kết hợp châm cứu huyệt Thận du, Thái khê, Tam âm giao định kỳ.</li>
</ul>

<div class="art-cta-box"><p>Để được tư vấn phác đồ dưỡng thận bảo tinh và phòng ngừa lão hóa phù hợp với thể trạng cá nhân, hãy đến thăm khám tại <strong>Phòng Khám Y học Cổ truyền Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ thăm khám tứ chẩn, xác định thể thận hư cụ thể và xây dựng phác đồ kết hợp thuốc, châm cứu và dưỡng sinh phù hợp nhất. Liên hệ: <strong>0973 710 237</strong> — giờ khám từ <strong>18:00 đến 22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 95,
    slug: "phuong-huyet-ha-huyet-ap-yhct",
    date: "2026-07-14",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt hạ huyết áp theo Y học cổ truyền",
    excerpt: "Châm cứu và bấm huyệt điều trị cao huyết áp là phương pháp không dùng thuốc được nghiên cứu khoa học nhiều nhất trong YHCT. Bài viết giới thiệu các huyệt vị cốt lõi, vị trí chính xác và cơ chế hạ áp theo lý luận YHCT.",
    readTime: 7,
    content: `
<h2>Cơ sở lý luận YHCT trong điều trị cao huyết áp</h2>
<p>Cao huyết áp trong Y học cổ truyền (YHCT) không có tên gọi tương đương trực tiếp, nhưng được quy vào các chứng như <strong>Huyễn vựng</strong> (眩暈 — chóng mặt), <strong>Đầu thống</strong> (頭痛 — đau đầu), <strong>Can dương thượng cang</strong> (肝陽上亢 — dương khí của can xông lên mạnh). Nguyên nhân theo YHCT bao gồm:</p>
<ul>
  <li><strong>Can dương cang thịnh:</strong> Can âm bất túc không kiềm chế được dương, dương khí xông mạnh lên đầu gây huyết áp cao. Đây là thể phổ biến nhất, thường gặp ở người căng thẳng, dễ nổi nóng.</li>
  <li><strong>Đờm thấp trở trệ:</strong> Tỳ hư không vận hóa, đàm thấp tích tụ, trở trệ kinh mạch, khí huyết không thông suốt.</li>
  <li><strong>Âm hư dương cang:</strong> Thận âm hư không nuôi dưỡng được can, can dương bốc lên trên.</li>
  <li><strong>Khí huyết ứ trệ:</strong> Khí không lưu thông, huyết ứ trệ trong mạch, áp lực tăng.</li>
</ul>
<p>Nguyên tắc điều trị: bình can tiềm dương, bổ thận tư âm, hóa đàm thông lạc. Châm cứu tác động lên hệ thần kinh tự chủ, ức chế hoạt động giao cảm và điều chỉnh hệ renin-angiotensin, từ đó hạ huyết áp một cách sinh lý.</p>

<h2>Phương huyệt điều trị cao huyết áp</h2>

<h3>Huyệt 1: Thái xung (LR3 — 太衝)</h3>
<p><strong>Vị trí:</strong> Mu bàn chân, nằm trong rãnh giữa xương bàn chân ngón 1 và ngón 2, cách gốc hai ngón chân khoảng 2 thốn về phía cổ chân. Ấn vào cảm thấy đau tức.</p>
<p><strong>Thuộc kinh:</strong> Can kinh (Túc Quyết Âm Can kinh) — huyệt du nguyên của Can kinh.</p>
<p><strong>Chức năng YHCT:</strong> Bình can tiềm dương, sơ can giải uất, hành khí hoạt huyết. Là huyệt quan trọng nhất để hạ áp theo cơ chế bình can.</p>
<p><strong>Nghiên cứu hiện đại:</strong> Châm Thái xung làm giảm hoạt động thần kinh giao cảm, giảm sức cản mạch ngoại vi, từ đó hạ cả huyết áp tâm thu và tâm trương.</p>
<p><strong>Cách bấm huyệt tại nhà:</strong> Dùng ngón cái ấn sâu vào huyệt, xoay tròn và giữ áp lực 1–2 phút mỗi bên, ngày 2 lần sáng tối.</p>

<h3>Huyệt 2: Khúc trì (LI11 — 曲池)</h3>
<p><strong>Vị trí:</strong> Gấp khuỷu tay thành góc 90 độ, huyệt nằm ở đầu nếp gấp khuỷu tay phía ngoài (phía ngón cái). Cách lồi cầu ngoài xương cánh tay khoảng 1 thốn.</p>
<p><strong>Thuộc kinh:</strong> Đại trường kinh (Thủ Dương Minh Đại Trường kinh) — huyệt hợp thổ.</p>
<p><strong>Chức năng YHCT:</strong> Thanh nhiệt, giải biểu, điều hòa khí huyết toàn thân. Huyệt hợp thổ của Đại trường kinh có tác dụng giáng nhiệt từ phần trên cơ thể.</p>
<p><strong>Ứng dụng:</strong> Đặc biệt hiệu quả trong cao huyết áp kèm đau đầu, mặt đỏ, táo bón (thể can hỏa thịnh). Nhiều nghiên cứu lâm sàng Trung Quốc xác nhận châm Khúc trì hạ huyết áp tâm thu hiệu quả.</p>

<h3>Huyệt 3: Túc tam lý (ST36 — 足三里)</h3>
<p><strong>Vị trí:</strong> Mặt ngoài cẳng chân, dưới đầu gối khoảng 3 thốn (4 ngón tay), cách mào chày (xương cẳng chân) khoảng 1 ngón tay về phía ngoài.</p>
<p><strong>Thuộc kinh:</strong> Vị kinh (Túc Dương Minh Vị kinh) — huyệt hợp thổ, huyệt cường tráng toàn thân.</p>
<p><strong>Chức năng YHCT:</strong> Kiện tỳ hòa vị, bổ khí dưỡng huyết, điều hòa toàn thân. Trong điều trị cao huyết áp, Túc tam lý giúp hóa đàm thấp (thể đàm thấp) và bổ khí để điều hòa huyết áp.</p>
<p><strong>Cơ chế hiện đại:</strong> Kích thích Túc tam lý làm tăng hoạt động dây thần kinh phó giao cảm, giảm nhịp tim và giảm cung lượng tim, hạ huyết áp một cách gián tiếp.</p>

<h3>Huyệt 4: Tam âm giao (SP6 — 三陰交)</h3>
<p><strong>Vị trí:</strong> Mặt trong cẳng chân, phía trên mắt cá trong 3 thốn (4 ngón tay), sát bờ sau xương chày.</p>
<p><strong>Thuộc kinh:</strong> Tỳ kinh — nhưng là giao hội của ba kinh âm ở chân (Tỳ kinh, Thận kinh, Can kinh).</p>
<p><strong>Chức năng YHCT:</strong> Bổ tỳ thận, tư âm dưỡng huyết, sơ can lý khí. Điều trị cả ba tạng liên quan đến cơ chế sinh cao huyết áp theo YHCT (Can - Tỳ - Thận).</p>
<p><strong>Lưu ý:</strong> Không bấm hoặc châm huyệt này khi phụ nữ đang mang thai vì có thể gây co bóp tử cung.</p>

<h3>Huyệt 5: Thần môn (HT7 — 神門)</h3>
<p><strong>Vị trí:</strong> Mặt trong cổ tay, nằm ở đầu nếp gấp cổ tay phía trong (phía ngón út), trong rãnh giữa gân cơ gấp cổ tay trụ và xương đậu.</p>
<p><strong>Thuộc kinh:</strong> Tâm kinh (Thủ Thiếu Âm Tâm kinh) — huyệt du nguyên.</p>
<p><strong>Chức năng YHCT:</strong> Dưỡng tâm an thần, thanh tâm hỏa. Cao huyết áp thường kèm mất ngủ, lo âu — Thần môn giải quyết triệu chứng đồng hành này đồng thời hỗ trợ hạ áp.</p>

<h3>Huyệt 6: Bách hội (GV20 — 百會)</h3>
<p><strong>Vị trí:</strong> Đỉnh đầu, giao điểm của đường nối hai đỉnh tai lên đỉnh đầu và đường chính giữa đầu. Khi ấn vào cảm thấy một chỗ lõm nhỏ.</p>
<p><strong>Thuộc kinh:</strong> Đốc mạch — giao hội của tất cả kinh dương.</p>
<p><strong>Chức năng YHCT:</strong> Thăng dương ích khí, bình can tiềm dương, khai khiếu tỉnh thần. Trong điều trị cao huyết áp, Bách hội giúp điều hòa dương khí không bị xung lên quá mức.</p>
<p><strong>Cách kích thích tại nhà:</strong> Dùng đầu ngón giữa gõ nhẹ huyệt Bách hội 36 lần mỗi sáng thức dậy.</p>

<h3>Huyệt 7: Dũng tuyền (KI1 — 涌泉)</h3>
<p><strong>Vị trí:</strong> Lòng bàn chân, ở rãnh giữa ngón 2 và ngón 3, khoảng 1/3 trước của bàn chân (khi gấp ngón chân, điểm lõm nhất ở lòng bàn chân).</p>
<p><strong>Thuộc kinh:</strong> Thận kinh (Túc Thiếu Âm Thận kinh) — huyệt tỉnh kim, điểm khởi đầu của Thận kinh.</p>
<p><strong>Chức năng YHCT:</strong> Bổ thận tư âm, giáng hỏa dẫn dương xuống hạ. Khi can dương bốc lên đầu gây đau đầu, chóng mặt, huyết áp cao — kích thích Dũng tuyền để dẫn dương xuống thận, cân bằng âm dương.</p>
<p><strong>Thực hành tại nhà:</strong> Mỗi tối ngâm chân nước ấm 15 phút, sau đó xoa mạnh huyệt Dũng tuyền mỗi bên 100 lần — giúp hạ áp, cải thiện giấc ngủ.</p>

<h2>Phác đồ châm cứu điều trị cao huyết áp theo thể bệnh</h2>
<ul>
  <li><strong>Thể Can dương cang thịnh:</strong> Thái xung (tả), Khúc trì (tả), Hành gian (LR2, tả), Thiên trụ (BL10), Bách hội (tả). Tần suất: 3 lần/tuần x 4 tuần.</li>
  <li><strong>Thể Âm hư dương cang:</strong> Thái xung (tả), Tam âm giao (bổ), Thận du (bổ), Thái khê (bổ), Thần môn (bổ). Kết hợp cứu Thận du, Thái khê.</li>
  <li><strong>Thể Đàm thấp trở trệ:</strong> Túc tam lý (tả), Phong long (ST40, tả), Trung quản (CV12), Nội quan (PC6). Thêm điện châm để tăng hiệu quả hóa đàm.</li>
</ul>
<p><em>Lưu ý quan trọng:</em> Châm cứu điều trị cao huyết áp là phương pháp hỗ trợ, không thay thế thuốc hạ áp Tây y trong giai đoạn cấp hoặc huyết áp cao nguy hiểm (≥180/110 mmHg). Bệnh nhân đang dùng thuốc hạ áp cần báo với thầy thuốc để điều chỉnh phác đồ phối hợp an toàn.</p>

<div class="art-cta-box"><p>Nếu bạn đang bị cao huyết áp và muốn tìm hiểu liệu trình châm cứu, bấm huyệt hỗ trợ hạ áp an toàn và bền vững, hãy đến thăm khám tại <strong>Phòng Khám Y học Cổ truyền Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ thăm khám và xây dựng phác đồ châm cứu phù hợp, kết hợp với tư vấn lối sống dưỡng sinh. Liên hệ: <strong>0973 710 237</strong> — giờ khám từ <strong>18:00 đến 22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
  {
    id: 96,
    slug: "an-uong-duong-da-sac-nhan-yhct",
    date: "2026-07-14",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Ăn uống dưỡng da và sắc nhan theo Y học cổ truyền: Đẹp từ bên trong",
    excerpt: "Y học cổ truyền tin rằng da dẻ và dung nhan là tấm gương phản chiếu sức khỏe tạng phủ bên trong. Ăn uống đúng loại thực phẩm theo thể trạng không chỉ nuôi tạng mà còn trực tiếp nuôi dưỡng da, giúp da sáng, mịn và chống lão hóa.",
    readTime: 6,
    content: `
<h2>Da dẻ là gương của tạng phủ — Quan điểm YHCT</h2>
<p>Trong Y học cổ truyền (YHCT), vẻ đẹp của da mặt và sắc diện không phải là vấn đề nông cạn bề ngoài mà là biểu hiện trực tiếp của sức khỏe tạng phủ bên trong. Cụ thể:</p>
<ul>
  <li><strong>Phế chủ bì mao:</strong> Phổi điều tiết toàn bộ da và lông tóc thông qua khí và tân dịch. Phế khí đầy đủ → da sáng mịn, lỗ chân lông khít; Phế hư → da khô ráp, lỗ chân lông to, da dễ kích ứng.</li>
  <li><strong>Tâm chủ huyết mạch và vinh nhan:</strong> Tâm (tim) điều tiết máu lưu thông lên mặt. Tâm huyết đủ → da hồng hào, má ửng; Tâm huyết hư → da xanh xao, môi nhợt, trán trắng bệch.</li>
  <li><strong>Tỳ chủ cơ nhục, thống huyết:</strong> Tỳ (lách-tụy) là nguồn gốc sinh hóa khí huyết từ thức ăn. Tỳ vị khỏe → da đàn hồi tốt, cơ mặt săn chắc; Tỳ hư → da chảy xệ, vàng úa, môi thâm.</li>
  <li><strong>Can tàng huyết, chủ sơ tiết:</strong> Can điều tiết lưu lượng huyết đến bì phu, đặc biệt theo chu kỳ ngày đêm. Can huyết đủ → da mịn màng, móng tay hồng; Can huyết hư → da tàn nhang, khô, nứt nẻ; Can uất hỏa vượng → da nổi mụn, đỏ, dầu.</li>
  <li><strong>Thận tàng tinh, chủ nạp:</strong> Thận tinh là vật chất cơ sở của mọi tế bào. Thận tinh đủ → da chắc khỏe, chống lão hóa tốt; Thận tinh hư → da nhăn nheo sớm, tóc bạc, quầng thâm mắt sâu.</li>
</ul>
<p>Vì vậy, để có làn da khỏe đẹp bền lâu, YHCT tiếp cận từ gốc rễ — điều chỉnh chức năng tạng phủ thông qua ăn uống đúng loại và đúng thời điểm, thay vì chỉ bôi thoa bên ngoài.</p>

<h2>Thực phẩm dưỡng da theo từng tạng phủ</h2>

<h3>Dưỡng Phế — Da sáng, lỗ chân lông thu nhỏ</h3>
<p>Các thực phẩm màu trắng và vị cay nhẹ đặc biệt tốt cho Phế (vì "sắc trắng vào phế" theo học thuyết ngũ hành):</p>
<ul>
  <li><strong>Bạch mộc nhĩ (nấm tuyết):</strong> Giàu polysaccharide — bổ Phế âm, dưỡng tân dịch, cải thiện độ ẩm da từ bên trong. Dùng hầm đường phèn hoặc nấu súp mỗi tuần 2–3 lần.</li>
  <li><strong>Lê:</strong> Vị ngọt mát, tính lương — nhuận Phế, sinh tân dịch, thanh nhiệt. Uống nước ép lê hoặc hầm lê với mật ong và bạch mộc nhĩ.</li>
  <li><strong>Sơn dược (khoai mài):</strong> Bổ Phế tỳ thận đồng thời — làm da sáng và cải thiện hệ miễn dịch da.</li>
  <li><strong>Ngó sen:</strong> Thanh nhiệt Phế, cầm huyết, làm da sáng — ăn sống hoặc nấu canh đều tốt.</li>
</ul>

<h3>Dưỡng Tâm huyết — Da hồng hào, chống xạm xỉn</h3>
<ul>
  <li><strong>Long nhãn (nhãn nhục):</strong> Bổ tâm tỳ, dưỡng huyết an thần — thích hợp với người da xanh xao, ngủ kém do tâm huyết hư.</li>
  <li><strong>Đại táo (táo đỏ tàu):</strong> Bổ tỳ dưỡng huyết, điều hòa tâm khí — nghiên cứu hiện đại xác nhận táo đỏ giàu sắt và vitamin C, hỗ trợ tổng hợp collagen.</li>
  <li><strong>Hoa hồng (Rosa rugosa):</strong> Sơ can giải uất, hoạt huyết, đẹp da — pha trà hoa hồng uống hàng ngày giúp da hồng hào, giảm thâm nám do can uất.</li>
</ul>

<h3>Dưỡng Tỳ vị — Da săn chắc, chống chảy xệ</h3>
<ul>
  <li><strong>Hạt sen:</strong> Bổ tỳ thận, an thần — dùng nấu cháo hoặc hầm cùng bạch mộc nhĩ.</li>
  <li><strong>Ý dĩ (coix seed):</strong> Kiện tỳ thẩm thấp, làm trắng da — được dùng rộng rãi trong các bài thuốc làm trắng da YHCT. Nấu cháo ý dĩ hoặc pha bột uống hàng ngày.</li>
  <li><strong>Bí đỏ:</strong> Bổ tỳ khí, giàu beta-carotene chuyển hóa thành vitamin A — dưỡng da, chống lão hóa.</li>
</ul>

<h3>Dưỡng Can huyết — Da mịn màng, giảm tàn nhang</h3>
<ul>
  <li><strong>Kỷ tử (câu kỷ tử):</strong> Bổ can thận, dưỡng huyết sáng mắt — giàu zeaxanthin và lutein bảo vệ da khỏi tia UV, giảm nám.</li>
  <li><strong>Gan lợn, gan gà:</strong> "Dĩ tạng bổ tạng" — dưỡng can huyết, chứa retinol (vitamin A) và sắt heme dễ hấp thu.</li>
  <li><strong>Rau chân vịt (cải bó xôi):</strong> Bổ huyết, thanh nhiệt can — giàu folate, sắt, vitamin K hỗ trợ tuần hoàn da.</li>
</ul>

<h3>Bổ Thận tinh — Chống lão hóa da, da căng bóng</h3>
<ul>
  <li><strong>Vừng đen:</strong> Bổ thận tinh, dưỡng huyết, đen tóc — giàu vitamin E và sesamin chống oxy hóa mạnh, bảo vệ collagen và elastin.</li>
  <li><strong>Hạt óc chó:</strong> Bổ thận, ích não, nhuận bì — giàu omega-3 và vitamin E, giúp da đàn hồi và chống nhăn.</li>
  <li><strong>Linh chi:</strong> Bổ thận an thần, chống lão hóa — polysaccharide trong linh chi ức chế enzyme phân hủy collagen (collagenase, elastase).</li>
</ul>

<h2>Món ăn - bài thuốc dưỡng da kinh điển theo YHCT</h2>
<ul>
  <li><strong>Cháo đẹp da (Ngọc dung cháo):</strong> Ý dĩ 30g + hạt sen 20g + kỷ tử 15g + đại táo 5 quả + gạo nếp 50g. Nấu cháo loãng, ăn sáng 3–4 lần/tuần. Bổ tỳ dưỡng huyết, làm trắng sáng da toàn diện.</li>
  <li><strong>Canh bổ huyết đẹp da:</strong> Đuôi lợn (hoặc chân giò) 300g + đại táo 10 quả + kỷ tử 15g + gừng tươi. Hầm nhỏ lửa 2 tiếng — giàu collagen tự nhiên, bổ can thận, dưỡng da.</li>
  <li><strong>Trà dưỡng nhan:</strong> Hoa hồng 5g + kỷ tử 10g + mật ong 1 thìa cà phê — pha với nước 70°C, uống buổi chiều. Sơ can giải uất, hoạt huyết, dưỡng âm.</li>
  <li><strong>Chè bạch mộc nhĩ - hạt sen:</strong> Bạch mộc nhĩ 10g (ngâm nở) + hạt sen 30g + đường phèn vừa đủ — nấu chè ăn tối. Nhuận Phế, dưỡng tân dịch, làm ẩm da từ bên trong.</li>
</ul>

<h2>Những thực phẩm cần hạn chế để bảo vệ làn da</h2>
<p>Theo YHCT, một số thực phẩm "phát" (gây bùng phát) hoặc làm tổn hại tạng phủ dẫn đến da xấu:</p>
<ul>
  <li><strong>Thức ăn cay nóng, đồ chiên rán:</strong> Sinh nội nhiệt, tổn thương Phế âm và Vị âm → da khô, nổi mụn, đỏ rát.</li>
  <li><strong>Đường tinh luyện và nước ngọt:</strong> Sinh đàm thấp, tổn hại tỳ vị → da vàng úa, nổi mụn đầu đen, lỗ chân lông to.</li>
  <li><strong>Rượu bia:</strong> Nhiệt độc, tổn thương can và vị → da đỏ, nổi mụn đỏ, giãn mao mạch.</li>
  <li><strong>Thức ăn lạnh quá mức:</strong> Tổn thương dương khí tỳ vị → da xanh xao, tay chân lạnh, môi thâm.</li>
</ul>

<div class="art-cta-box"><p>Nếu bạn muốn được tư vấn chế độ ăn uống dưỡng da cá nhân hóa theo thể trạng YHCT — kết hợp với liệu trình châm cứu dưỡng nhan và thuốc uống bồi bổ từ bên trong — hãy đến thăm khám tại <strong>Phòng Khám Y học Cổ truyền Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ thăm khám tứ chẩn, xác định thể trạng và xây dựng phác đồ làm đẹp toàn diện từ gốc. Liên hệ: <strong>0973 710 237</strong> — giờ khám từ <strong>18:00 đến 22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>.</p></div>
    `
  },
{
  id: 90,
  slug: "tam-that-bo-huyet-cam-mau-yhct",
  date: "2026-07-14",
  category: "thuoc-yhct",
  categoryLabel: "Thuốc YHCT",
  icon: "🌿",
  gradient: "g-fire",
  title: "Tam thất — Vị thuốc bổ huyết, cầm máu và hoạt huyết toàn diện của Y học cổ truyền",
  excerpt: "Tam thất (Panax notoginseng) được mệnh danh 'Kim bất hoán' — vàng không đổi được. Vừa cầm máu, vừa bổ huyết, vừa hoạt huyết hóa ứ: ba công dụng nghịch chiều trong một vị thuốc quý hiếm bậc nhất YHCT.",
  readTime: 6,
  content: `
<h2>Tổng quan về Tam thất theo Y học cổ truyền</h2>
<p>Tam thất (田七 — Điền thất) — tên khoa học <em>Panax notoginseng</em> (Burk.) F.H.Chen, họ Nhân sâm (Araliaceae) — là vị thuốc quý bậc nhất trong YHCT về lĩnh vực điều trị bệnh huyết. Sách <em>Bản thảo cương mục thập di</em> ghi: "Tam thất vừa có thể cầm máu vừa có thể hóa ứ huyết — nhất vị thuốc mà hai dụng tương phản." Đây là đặc tính độc đáo mà rất ít vị thuốc nào trong kho dược liệu YHCT sở hữu.</p>
<p>Theo YHCT, Tam thất có vị ngọt hơi đắng, tính ấm; quy vào kinh <strong>Can</strong> và <strong>Vị</strong>. Tác dụng chính: <em>hóa ứ chỉ huyết, hoạt huyết giảm đau</em>. Cơ chế theo YHCT: Tam thất kích thích huyết hành (hoạt huyết), tiêu tan huyết ứ, đồng thời thu liễm cầm máu khi xuất huyết — phù hợp nguyên tắc <strong>"khứ ứ sinh tân"</strong> (loại bỏ máu cũ sinh huyết mới). Người Trung Hoa cổ đại gọi Tam thất là <em>"Kim bất hoán"</em> — vàng không đổi được — nhấn mạnh giá trị vô song của vị thuốc này.</p>

<h2>Các ứng dụng điều trị Tam thất theo YHCT</h2>
<ul>
  <li><strong>Chứng xuất huyết các loại:</strong> Tam thất cầm máu hiệu quả trong xuất huyết tiêu hóa, chảy máu cam, tiểu ra máu, rong kinh, chấn thương chảy máu. Đặc điểm nổi bật: cầm máu mà không gây đọng máu — tránh hậu quả ứ trệ như các vị cầm máu thông thường.</li>
  <li><strong>Chứng huyết ứ — đau do ứ huyết:</strong> Đau ngực kiểu nhói (tâm mạch ứ trở), đau bụng kinh do huyết ứ (thống kinh thể ứ huyết), đau bầm tím sau chấn thương. Tam thất hoạt huyết tiêu ứ, thông lạc chỉ thống — đặc trị mọi chứng đau do ứ huyết.</li>
  <li><strong>Bổ huyết tăng sức phục hồi:</strong> Sau phẫu thuật, mất máu nhiều, cơ thể suy nhược. Tam thất (dạng thục — đã bào chế) bổ khí huyết, tăng sức đề kháng. Thường kết hợp với Đương quy, Hoàng kỳ.</li>
  <li><strong>Hỗ trợ tim mạch:</strong> Tam thất ích khí thông mạch, giảm huyết ứ trong tâm mạch — hỗ trợ phòng ngừa và phục hồi sau nhồi máu cơ tim, tai biến (giai đoạn hồi phục).</li>
</ul>

<h2>Bài thuốc và cách dùng Tam thất trong YHCT</h2>
<p>Tam thất có hai dạng bào chế với tác dụng khác nhau, kết hợp huyệt vị để tăng hiệu quả:</p>
<ul>
  <li><strong>Sinh Tam thất (dùng sống):</strong> Tán mịn 3–6g bột Tam thất sống hòa nước ấm uống trực tiếp. Tác dụng hoạt huyết hóa ứ, cầm máu mạnh nhất. Dùng cho chấn thương, bầm tím, kinh nguyệt ứ trệ, xuất huyết cấp.</li>
  <li><strong>Thục Tam thất (đã bào chế):</strong> Tam thất ngâm dầu mè rồi sao vàng. Tính ấm hơn, chuyên về bổ huyết, ít tác dụng hoạt huyết mạnh. Phù hợp người huyết hư, sau mất máu, phụ nữ sau sinh cần bổ.</li>
  <li><strong>Bài Tam thất hoạt huyết thông mạch:</strong> Tam thất 6g + Đan sâm 15g + Xuyên khung 9g + Đương quy 12g sắc uống ngày 1 thang. Hoạt huyết hóa ứ, thông lạc chỉ thống — điều trị đau ngực thể ứ huyết.</li>
  <li><strong>Bài Tam thất cầm huyết:</strong> Bột Tam thất sống 3g + Hoa hòe sao 10g + Địa du sao 15g sắc uống, uống bột Tam thất kèm theo. Chỉ định: xuất huyết tiêu hóa, rong kinh thể ứ huyết kèm xuất huyết.</li>
  <li><strong>Huyệt vị kết hợp điều trị tim mạch:</strong> Khi dùng Tam thất hỗ trợ tim mạch, kết hợp châm cứu huyệt <strong>Nội quan (PC6)</strong>, <strong>Tâm du (BL15)</strong>, <strong>Cách du (BL17)</strong> — hội huyệt của huyết — và <strong>Huyết hải (SP10)</strong> để tăng cường hoạt huyết thông mạch.</li>
</ul>

<h2>Tự thực hành tại nhà với Tam thất</h2>
<ul>
  <li><strong>Trà Tam thất dưỡng sinh hàng ngày:</strong> 2–3g bột Tam thất sống + 1 muỗng mật ong nguyên chất + nước ấm 50–60°C (không dùng nước sôi sẽ phá hoạt chất). Khuấy đều uống buổi sáng lúc đói. Hỗ trợ tuần hoàn, giảm mệt mỏi, phòng ngừa ứ huyết.</li>
  <li><strong>Cháo Tam thất bổ huyết:</strong> Nấu cháo gạo lứt, thêm 5g bột Tam thất chín (thục) + kỷ tử 10 hạt + táo đỏ 3 quả vào cuối. Ăn bữa sáng. Bổ khí huyết, phù hợp người thiếu máu, sau phẫu thuật, phụ nữ sau sinh.</li>
  <li><strong>Liều dùng an toàn:</strong> Người lớn 3–9g/ngày (bột hoặc sắc). Không dùng quá 10g/ngày liên tục dài hạn.</li>
  <li><strong>Chống chỉ định:</strong> Phụ nữ có thai <em>không dùng Tam thất sống</em> — hoạt huyết mạnh có thể gây co tử cung. Sau sinh chỉ dùng Tam thất chín. Người đang dùng thuốc chống đông máu (warfarin, aspirin liều cao) cần hỏi bác sĩ trước khi dùng.</li>
</ul>

<div class="art-cta-box">
  <p>Tam thất là vị thuốc quý nhưng cần biện chứng đúng để dùng đúng — sinh hay thục, đơn độc hay phối hợp đều ảnh hưởng đến hiệu quả và an toàn. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> sẽ thăm khám, phân thể và kê phác đồ phù hợp thể trạng từng bệnh nhân. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
  id: 89,
  slug: "cuu-ngai-dieu-tri-lanh-bung-yhct",
  date: "2026-07-13",
  category: "khong-thuoc",
  categoryLabel: "Không dùng thuốc",
  icon: "🧘",
  gradient: "g-herb",
  title: "Cứu ngải điều trị lạnh bụng theo Y học cổ truyền: Kỹ thuật thực hành và huyệt vị tại nhà",
  excerpt: "Cứu ngải (moxibustion) dùng nhiệt từ ngải cứu tác động lên huyệt vị để ôn trung tán hàn, điều trị đau bụng lạnh, đầy hơi và tiêu chảy do hàn — an toàn, hiệu quả, tự thực hành được tại nhà.",
  readTime: 6,
  content: `
<h2>Tổng quan về cứu ngải theo Y học cổ truyền</h2>
<p>Cứu ngải (灸法 — Cứu pháp) là phương pháp dùng sức nóng từ điếu ngải hoặc nụ ngải đốt cháy tác động lên huyệt vị và kinh lạc, nhằm <strong>ôn thông kinh mạch, tán hàn chỉ thống, hồi dương cứu nghịch</strong>. Ngải cứu (Folium Artemisiae Argyi — Ngải diệp) được xếp vào loại thuốc <em>ôn kinh tán hàn</em>, tính ấm vị đắng cay, quy kinh Tỳ – Thận – Can — phù hợp điều trị các chứng bệnh do hàn tà xâm nhập hoặc dương khí hư suy.</p>
<p>Trong điều trị các chứng <strong>lạnh bụng, đau bụng do hàn</strong> (Trung hàn), cứu ngải được xem là phương pháp ưu tiên hàng đầu vì đặc tính nhiệt thấu sâu, ôn ấm Tỳ Vị, thúc đẩy dương khí lưu thông. Sách <em>Hoàng Đế Nội Kinh</em> ghi: "Hàn giả nhiệt chi" (Hàn thì dùng nhiệt trị) — nguyên tắc căn bản giải thích vì sao cứu ngải hiệu quả với lạnh bụng mà châm kim đơn thuần lại kém hiệu quả hơn.</p>

<h2>Phân thể lạnh bụng theo Y học cổ truyền</h2>
<ul>
  <li><strong>Thể Tỳ Vị hư hàn:</strong> Đau bụng âm ỉ, thích ấm, thích chườm, đau giảm khi ăn ấm, ăn lạnh đau ngay. Kèm mệt mỏi, ăn kém, phân lỏng sệt hoặc tiêu chảy sáng sớm. Lưỡi nhợt bệu, rêu trắng mỏng, mạch trầm trì nhược. Pháp trị: <em>ôn trung kiện Tỳ, tán hàn chỉ thống</em>.</li>
  <li><strong>Thể Thận dương hư (ngũ canh tả):</strong> Tiêu chảy mỗi sáng sớm 4–5 giờ (giờ Mão — Đại tràng vượng), kèm đau quặn bụng dưới, lưng lạnh mỏi, tay chân lạnh, tiểu nhiều đêm. Lưỡi nhợt, mạch trầm tế vô lực. Pháp trị: <em>ôn bổ Thận dương, ấm ấm Tỳ chỉ tả</em>.</li>
  <li><strong>Thể hàn tà trực trúng:</strong> Đau bụng đột ngột dữ dội sau ăn lạnh, tắm lạnh hoặc tiếp xúc lạnh đột ngột. Đau co cứng, sợ lạnh, nôn nao buồn nôn. Lưỡi nhợt, rêu trắng dày, mạch khẩn. Pháp trị: <em>tán hàn ôn trung, lý khí chỉ thống</em>.</li>
  <li><strong>Thể khí trệ kiêm hàn:</strong> Bụng đầy hơi, đau thắt từng cơn, xì hơi giảm đau, kèm người lạnh không muốn ăn. Lưỡi nhợt, rêu trắng nhờn, mạch huyền khẩn. Pháp trị: <em>hành khí tán hàn, ôn trung hóa trệ</em>.</li>
</ul>

<h2>Huyệt vị và kỹ thuật cứu ngải điều trị lạnh bụng</h2>
<p>Các huyệt cứu ngải chính:</p>
<ul>
  <li><strong>Thần khuyết (CV8):</strong> Chính giữa rốn. Huyệt cấm châm kim nhưng được chỉ định đặc biệt cho cứu gián tiếp (qua muối, gừng hoặc tỏi). Ôn dương cứu nghịch, hồi dương cố thoát — huyệt hàng đầu cho lạnh bụng, tiêu chảy, đau quặn do hàn. Cứu gián tiếp qua lát gừng tươi 0,3cm dày 15–20 phút.</li>
  <li><strong>Trung quản (CV12):</strong> Trên rốn 4 thốn, đường giữa bụng. Mộ huyệt của Vị, hội huyệt của các phủ. Ôn Vị kiện Tỳ, hóa thấp tiêu trệ. Cứu điếu ngải cách da 3–4cm trong 15–20 phút, ngày 1 lần.</li>
  <li><strong>Khí hải (CV6):</strong> Dưới rốn 1,5 thốn. "Biển của Khí" — bổ nguyên khí, ôn dương tán hàn. Đặc biệt hiệu quả với đau bụng dưới, tiêu chảy Thận dương hư. Cứu điếu ngải 15 phút.</li>
  <li><strong>Quan nguyên (CV4):</strong> Dưới rốn 3 thốn. Mộ huyệt Tiểu trường, giao hội Nhâm mạch với Túc tam âm. Ôn bổ Thận dương, bổ Tỳ cố thoát. Cứu ngải 20 phút, đặc trị thể Thận dương hư tiêu chảy sáng sớm.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới đầu gối bên ngoài 3 thốn, chếch 1 thốn về phía ngoài xương chày. Huyệt hội của Vị, kiện Tỳ ích Vị, phù chính khu tà, tăng miễn dịch. Cứu 15 phút mỗi bên — huyệt bổ khí số 1 trong YHCT.</li>
  <li><strong>Công tôn (SP4):</strong> Bờ trong bàn chân, lõm phía sau đầu xương bàn chân ngón 1. Lạc huyệt của Tỳ, thông Xung mạch. Điều hòa Tỳ Vị, chỉ thống, chữa đau bụng, buồn nôn, tiêu chảy. Cứu 10–15 phút mỗi bên.</li>
</ul>

<h2>Tự thực hành cứu ngải tại nhà</h2>
<ul>
  <li><strong>Chuẩn bị:</strong> Mua điếu ngải thành phẩm tại các cơ sở YHCT hoặc hiệu thuốc đông y uy tín. Chuẩn bị gừng tươi thái lát mỏng 0,3cm để cứu gián tiếp tại Thần khuyết (CV8). Tư thế: nằm ngửa thoải mái, bụng để trần.</li>
  <li><strong>Kỹ thuật cứu điếu (Ôn hòa cứu):</strong> Đốt đầu điếu ngải, giữ cách da 3–4cm trên huyệt, di chuyển xoay tròn nhẹ. Cảm giác ấm dễ chịu là đúng — nếu rát bỏng, giữ xa hơn. Mỗi huyệt 15–20 phút.</li>
  <li><strong>Cứu gián tiếp qua gừng tại Thần khuyết (CV8):</strong> Đặt lát gừng lên rốn, đặt nụ ngải nhỏ lên trên, đốt. Khi cảm thấy nóng, thay lát gừng mới hoặc dừng. 3–5 nụ/lần. Rất hiệu quả với đau bụng lạnh cấp.</li>
  <li><strong>Phác đồ tại nhà:</strong> Cứu bộ 4 huyệt Thần khuyết + Trung quản + Khí hải + Túc tam lý mỗi tối trước khi ngủ. Liệu trình: 10 ngày liên tiếp/đợt, nghỉ 5 ngày rồi lặp lại. 2–3 đợt cho thể hư hàn mạn tính.</li>
  <li><strong>Chống chỉ định tuyệt đối:</strong> Không cứu khi sốt cao, viêm cấp tính (viêm ruột thừa, viêm đại tràng cấp), bụng đau không rõ nguyên nhân. Phụ nữ có thai không cứu vùng bụng.</li>
  <li><strong>Hỗ trợ thêm:</strong> Uống trà gừng tươi + đường đen ấm sau cứu tăng hiệu quả ôn trung tán hàn. Tránh ăn lạnh, uống đá trong và sau đợt điều trị.</li>
</ul>

<div class="art-cta-box">
  <p>Lạnh bụng tái phát nhiều lần, đau không dứt dù đã giữ ấm là dấu hiệu Tỳ Vị hay Thận dương hư cần điều trị chuyên sâu. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> sẽ biện chứng phân thể và thực hiện cứu ngải chuyên nghiệp kết hợp châm cứu, giúp ôn dương từ gốc, không tái phát. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
  id: 83,
  slug: "viem-mui-di-ung-yhct",
  date: "2026-07-10",
  category: "mat-benh",
  categoryLabel: "Mặt bệnh",
  icon: "🩺",
  gradient: "g-navy",
  title: "Viêm mũi dị ứng theo Y học cổ truyền: Phân thể và phác đồ điều trị",
  excerpt: "Viêm mũi dị ứng (Tỵ cừu) theo YHCT bắt nguồn từ Phế khí hư làm bề ngoài suy yếu, kết hợp Tỳ hoặc Thận hư. Nhận biết đúng thể bệnh giúp điều trị tận gốc, tránh tái phát theo mùa.",
  readTime: 7,
  content: `
<h2>Tổng quan về viêm mũi dị ứng theo Y học cổ truyền</h2>
<p>Viêm mũi dị ứng trong Y học cổ truyền (YHCT) được gọi là <strong>Tỵ cừu</strong> (鼻鼽) — mũi chảy nước liên tục — hoặc <strong>Tỵ thế</strong> (鼻嚏) — hay hắt hơi. Bệnh được ghi chép từ "Hoàng Đế Nội Kinh", xem mũi là khiếu của Phế (Phế khai khiếu ở tỵ). Khi Phế khí suy yếu, vệ khí không bảo vệ được bề ngoài, phong hàn hoặc dị nguyên dễ xâm nhập gây hắt hơi, sổ mũi, ngứa mũi liên tục.</p>
<p>Khác với y học hiện đại tập trung vào phản ứng miễn dịch IgE, YHCT nhìn viêm mũi dị ứng như hệ quả của <em>chính khí hư nhược</em> — cơ thể thiếu sức đề kháng nội tại — kết hợp với <em>tà khí</em> (phong hàn, phong nhiệt) từ bên ngoài. Điều trị YHCT không chỉ giảm triệu chứng mà tập trung <strong>bổ chính khu tà</strong>: tăng cường chính khí để cơ thể tự chống lại dị nguyên.</p>
<p>Bệnh thường nặng hơn vào buổi sáng sớm (giờ Dần — Phế khí vượng), khi thời tiết thay đổi, tiếp xúc bụi, phấn hoa hoặc lông động vật. Mãn tính có thể dẫn đến viêm xoang, polyp mũi, hen phế quản dị ứng.</p>

<h2>Phân thể lâm sàng viêm mũi dị ứng theo YHCT</h2>
<p>YHCT phân viêm mũi dị ứng thành 4 thể chính. Mỗi thể có đặc điểm triệu chứng và phác đồ điều trị riêng:</p>
<ul>
  <li><strong>Thể 1 — Phế khí hư hàn (phổ biến nhất):</strong> Hắt hơi nhiều liên tiếp, nước mũi trong loãng chảy nhiều, mũi nghẹt khi ra gió lạnh. Người sợ lạnh, hay mệt mỏi, tiếng nói nhỏ. Lưỡi nhợt, rêu trắng mỏng, mạch phù hoãn hoặc trầm nhược. Pháp trị: <em>ôn Phế, tán hàn, thông tỵ khiếu</em>. Bài thuốc: Tiểu thanh long thang gia giảm, Ngọc bình phong tán kết hợp Thương nhĩ tử tán.</li>
  <li><strong>Thể 2 — Phế Tỳ khí hư:</strong> Triệu chứng mũi như trên nhưng kèm người mệt, ăn kém, bụng đầy, phân lỏng, da mặt xanh xao. Lưỡi bệu có dấu răng, rêu trắng nhờn, mạch hoãn nhược. Pháp trị: <em>bổ Phế kiện Tỳ, hóa thấp thông tỵ</em>. Bài thuốc: Bổ trung ích khí thang kết hợp Thương nhĩ tử tán.</li>
  <li><strong>Thể 3 — Phế Thận dương hư:</strong> Thường gặp ở người cao tuổi hoặc bệnh kéo dài nhiều năm. Triệu chứng nặng vào sáng sớm và mùa lạnh, kèm đau lưng mỏi gối, tay chân lạnh, tiểu nhiều về đêm, liệt dương hoặc lạnh kinh. Lưỡi nhợt có răng, mạch trầm tế nhược. Pháp trị: <em>ôn bổ Thận dương, bổ Phế tán hàn</em>. Bài thuốc: Kim quỹ thận khí hoàn kết hợp Ngọc bình phong tán.</li>
  <li><strong>Thể 4 — Phong nhiệt xâm Phế:</strong> Ít gặp hơn, thường xuất hiện vào mùa xuân/hè. Nước mũi vàng hoặc xanh, mũi ngứa nóng, đau đầu, họng khô đỏ, miệng khát. Lưỡi đỏ rêu vàng mỏng, mạch phù sác. Pháp trị: <em>sơ phong thanh nhiệt, tuyên Phế thông tỵ</em>. Bài thuốc: Tang cúc ẩm kết hợp Thương nhĩ tử tán.</li>
</ul>

<h2>Huyệt vị điều trị chính trong viêm mũi dị ứng</h2>
<p>Châm cứu là phương pháp hiệu quả, đặc biệt với thể Phế khí hư. Các huyệt chính:</p>
<ul>
  <li><strong>Nghinh hương (LI20):</strong> Nằm bên cạnh cánh mũi. Huyệt cục bộ quan trọng nhất, thông tỵ khiếu, giảm nghẹt mũi ngay tức thì.</li>
  <li><strong>Tỵ thông (EX-HN8):</strong> Điểm kinh ngoại, nằm giữa gốc mũi và khóe mắt trong. Thông xoang, giảm hắt hơi.</li>
  <li><strong>Hợp cốc (LI4):</strong> Mu bàn tay, giữa ngón cái và ngón trỏ. Sơ phong giải biểu, thông lạc, hỗ trợ điều trị dị ứng toàn thân.</li>
  <li><strong>Phong phủ (GV16):</strong> Sau gáy, dưới xương chẩm. Khu phong, thông lạc, giải biểu. Cứu huyệt này ôn tán phong hàn.</li>
  <li><strong>Phế du (BL13):</strong> Ngang đốt sống ngực D3, cách đường giữa 1,5 thốn. Bối du huyệt của Phế, bổ Phế khí, điều khiếu.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới đầu gối bên ngoài 3 thốn. Kiện Tỳ ích khí, tăng cường miễn dịch (chính khí).</li>
</ul>
<p>Liệu trình thông thường: 10–15 buổi/đợt, mỗi buổi cách nhau 1 ngày. Kết hợp cứu ngải tại Phế du, Túc tam lý để ôn bổ chính khí. Duy trì bổ khí 1–2 đợt/năm trước mùa bệnh nặng.</p>

<h2>Phòng ngừa tái phát và chăm sóc tại nhà</h2>
<ul>
  <li>Rửa mũi bằng nước muối sinh lý hoặc nước muối ấm 0,9% mỗi sáng để loại bỏ dị nguyên.</li>
  <li>Tránh tiếp xúc đột ngột với không khí lạnh — đeo khẩu trang vải khi ra ngoài sáng sớm.</li>
  <li>Ăn bổ Phế: lê hấp đường phèn, yến mạch, bạch mộc nhĩ, hạnh nhân (Prunus armeniaca).</li>
  <li>Xoa bóp huyệt Nghinh hương, Ấn đường (GV29) mỗi sáng 2–3 phút giúp thông khiếu.</li>
  <li>Tập thở bụng sâu (phúc thức hô hấp) 10–15 phút/ngày để tăng cường Phế khí.</li>
  <li>Giữ ấm lưng và cổ gáy vì hàn tà thường xâm nhập qua vùng phong môn (GV12–BL12).</li>
</ul>

<div class="art-cta-box">
  <p>Viêm mũi dị ứng dai dẳng theo mùa không chỉ là vấn đề cục bộ tại mũi mà phản ánh Phế khí suy yếu cần được bổ từ gốc. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> sẽ thăm mạch, biện chứng phân thể và xây dựng phác đồ kết hợp châm cứu – cứu ngải – bài thuốc phù hợp thể trạng từng người. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
  id: 84,
  slug: "tu-truong-tri-lieu-yhct",
  date: "2026-07-10",
  category: "khong-thuoc",
  categoryLabel: "Không dùng thuốc",
  icon: "🧘",
  gradient: "g-herb",
  title: "Từ trường trị liệu trong Y học cổ truyền: Phương pháp hỗ trợ điều trị không dùng thuốc",
  excerpt: "Từ trường trị liệu kết hợp lý luận kinh lạc YHCT với vật lý trị liệu hiện đại, tác động lên huyệt vị bằng từ trường để điều hòa khí huyết, giảm đau và tăng cường tái tạo mô mà không cần kim châm hay dùng thuốc.",
  readTime: 5,
  content: `
<h2>Từ trường trị liệu là gì và cơ sở lý luận theo YHCT</h2>
<p>Từ trường trị liệu (磁療法 — Từ liệu pháp) là phương pháp sử dụng từ trường tĩnh hoặc từ trường xung tần số thấp tác động lên cơ thể để điều hòa sinh lý. Trong bệnh viện YHCT Việt Nam, phương pháp này được phân loại vào nhóm <em>vật lý trị liệu kết hợp YHCT</em> — không dùng thuốc, không xâm lấn.</p>
<p>Theo lý luận YHCT, kinh lạc là hệ thống dẫn truyền khí huyết qua toàn thân. Khi khí huyết ứ trệ — do ngoại cảm, chấn thương, căng thẳng hoặc lão hóa — sẽ sinh ra đau, tê bì, teo cơ, hoặc rối loạn chức năng tạng phủ. Từ trường, với đặc tính thẩm thấu sâu vào mô không qua da, được cho là có thể <em>kích hoạt kinh khí</em>, làm thông thoáng kinh lạc và phục hồi lưu thông khí huyết — tương tự như châm cứu nhưng không dùng kim.</p>
<p>Nghiên cứu hiện đại ghi nhận từ trường tần số thấp (ELF — Extremely Low Frequency, 1–100 Hz) có tác dụng: giãn mạch máu nhỏ, tăng tuần hoàn vi mạch, kích thích tổng hợp collagen, giảm viêm qua ức chế prostaglandin, và điều chỉnh dẫn truyền thần kinh cảm giác. Tất cả phù hợp với mô tả "hoạt huyết thông lạc, giảm đau" trong YHCT.</p>

<h2>Các loại thiết bị từ trường dùng trong YHCT</h2>
<ul>
  <li><strong>Từ trường tĩnh (nam châm vĩnh cửu):</strong> Dán nam châm nhỏ hoặc băng từ trực tiếp lên huyệt vị. Đơn giản, dễ dùng tại nhà. Cường độ thấp (1.000–3.000 Gauss). Thường dùng tại huyệt Nội quan (PC6) chống nôn, huyệt Tâm du (BL15) an thần, huyệt A thị huyệt (điểm đau cục bộ).</li>
  <li><strong>Từ trường xung (Pulsed Electromagnetic Field — PEMF):</strong> Thiết bị điện tử phát xung từ trường tần số 1–100 Hz. Dùng tại phòng khám, bệnh viện. Hiệu quả hơn với đau mãn tính, viêm khớp, loãng xương, hỗ trợ liền xương.</li>
  <li><strong>Từ huyệt châm (Magneto-acupuncture):</strong> Đặt cực từ tại các huyệt vị theo hệ thống kinh lạc — kết hợp chính xác lý luận YHCT với tác dụng sinh học của từ trường.</li>
</ul>

<h2>Chỉ định điều trị theo YHCT</h2>
<p>Từ trường trị liệu phù hợp với các chứng bệnh thuộc <em>khí trệ huyết ứ, kinh lạc tắc trở</em>:</p>
<ul>
  <li><strong>Đau cơ xương khớp:</strong> Đau cổ vai gáy, đau thắt lưng, viêm quanh khớp vai (ngũ thập kiên), thoái hóa khớp gối. Từ trường giảm viêm, tăng tuần hoàn tại ổ khớp.</li>
  <li><strong>Rối loạn giấc ngủ — tâm thần:</strong> Mất ngủ, lo âu, căng thẳng mạn tính. Từ trường tần số thấp (8–13 Hz) đồng bộ với sóng alpha não, hỗ trợ thư giãn thần kinh, bổ ích Tâm khí.</li>
  <li><strong>Phục hồi chức năng:</strong> Di chứng liệt sau tai biến, liệt dây thần kinh mặt, teo cơ. Kích thích tái phân phối thần kinh, hỗ trợ tái tạo sợi cơ.</li>
  <li><strong>Hỗ trợ liền xương và mô mềm:</strong> Sau gãy xương, bong gân, phẫu thuật. Kích thích nguyên bào xương (osteoblast), tăng tổng hợp collagen.</li>
  <li><strong>Giảm huyết áp nhẹ:</strong> Từ trường tại huyệt Nội quan (PC6), Khúc trì (LI11), Túc tam lý (ST36) hỗ trợ hạ huyết áp nhẹ trong thể Can dương thượng cường.</li>
</ul>

<h2>Quy trình thực hiện tại phòng khám YHCT</h2>
<ul>
  <li>Bước 1: Thầy thuốc biện chứng, xác định kinh lạc và huyệt vị cần tác động theo thể bệnh.</li>
  <li>Bước 2: Đặt đầu phát từ trường lên vùng huyệt vị hoặc vùng đau. Bệnh nhân nằm thoải mái, tránh vật kim loại và máy điện tử gần thiết bị.</li>
  <li>Bước 3: Thời gian chiếu: 15–30 phút/buổi, tần số và cường độ được điều chỉnh theo mục tiêu: giảm đau (50–100 Hz), an thần (8–13 Hz), kích thích phục hồi (2–10 Hz).</li>
  <li>Bước 4: Liệu trình: 10–15 buổi/đợt, nghỉ 1–2 tuần rồi đánh giá lại.</li>
  <li>Bước 5: Kết hợp với châm cứu, xoa bóp hoặc bài thuốc YHCT theo chỉ định để nâng cao hiệu quả.</li>
</ul>

<h2>Lưu ý và chống chỉ định</h2>
<ul>
  <li>Không dùng cho người mang máy tạo nhịp tim (pacemaker) hoặc cấy ghép điện tử.</li>
  <li>Không chiếu trực tiếp lên vùng ung thư đang tiến triển, phụ nữ có thai (3 tháng đầu), vùng xuất huyết cấp.</li>
  <li>Trẻ em dưới 6 tuổi và người cao tuổi dùng cường độ thấp hơn, thời gian ngắn hơn.</li>
  <li>Không tự ý mua thiết bị PEMF về dùng tại nhà khi chưa có chẩn đoán — sai tần số, sai huyệt vị có thể kích thích ngược.</li>
</ul>

<div class="art-cta-box">
  <p>Từ trường trị liệu tại <strong>Phòng Khám YHCT Tâm Đức</strong> được chỉ định bởi <strong>BS. Nguyễn Đức Tâm</strong> sau khi biện chứng đầy đủ — chọn đúng tần số, đúng huyệt vị, kết hợp liệu pháp phù hợp để đạt hiệu quả tối ưu mà không dùng thuốc. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch tư vấn: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
  id: 85,
  slug: "hoang-lien-giai-doc-thang",
  date: "2026-07-10",
  category: "thuoc-yhct",
  categoryLabel: "Thuốc YHCT",
  icon: "🌿",
  gradient: "g-fire",
  title: "Hoàng liên giải độc thang — Bài thuốc thanh nhiệt giải độc kinh điển của Y học cổ truyền",
  excerpt: "Hoàng liên giải độc thang là bài thuốc thanh nhiệt mạnh, giải độc tam tiêu, trị thực nhiệt toàn thân từ kinh điển 'Ngoại Đài Bí Yếu'. Phân biệt đúng chứng nhiệt thực, hư thực để dùng an toàn, hiệu quả.",
  readTime: 6,
  content: `
<h2>Nguồn gốc và ý nghĩa tên bài thuốc</h2>
<p><strong>Hoàng liên giải độc thang</strong> (黃連解毒湯) lần đầu được ghi chép trong <em>"Ngoại Đài Bí Yếu"</em> (外臺秘要) của Vương Đảo — biên soạn năm 752 sau Công nguyên, đời Đường. Bài thuốc được trích dẫn từ sách "Thôi Thị Phương" của Thôi Thị, một thầy thuốc thời kỳ trước Đường. Đây là bài thuốc <em>thuần nhất thanh nhiệt</em> — dùng bốn vị thuốc đắng hàn để thanh nhiệt giải độc tam tiêu (Thượng — Trung — Hạ tiêu) đồng thời.</p>
<p>Tên bài phản ánh công dụng chính: <strong>Hoàng liên</strong> là vị chủ lực thanh tâm hỏa; <strong>Giải độc</strong> chỉ khả năng trừ hỏa độc, nhiệt độc gây ra các chứng viêm nhiễm, xuất huyết, loét, mụn nhọt nặng. Bài thuốc có sức thanh nhiệt mạnh, không bổ, thuần dùng khi tà nhiệt thực thịnh.</p>

<h2>Thành phần và vai trò từng vị thuốc</h2>
<ul>
  <li><strong>Hoàng liên (黃連 — Rhizoma Coptidis) 9g:</strong> Vị chủ dược. Tính hàn, vị cực đắng. Quy kinh Tâm, Can, Vị, Đại trường. Thanh Tâm hỏa (Thượng tiêu), giải nhiệt độc Vị trường (Trung tiêu), trị tiêu chảy do nhiệt lỵ. Berberine trong Hoàng liên có tác dụng kháng khuẩn phổ rộng và kháng viêm.</li>
  <li><strong>Hoàng cầm (黃芩 — Radix Scutellariae) 6g:</strong> Vị thần dược. Tính hàn, vị đắng. Quy kinh Phế, Đởm, Đại trường. Thanh Phế nhiệt (Thượng tiêu), hóa thấp nhiệt, cầm huyết, an thai. Hỗ trợ Hoàng liên trong thanh trừ nhiệt ở Thượng tiêu và phần khí.</li>
  <li><strong>Hoàng bá (黃柏 — Cortex Phellodendri) 6g:</strong> Vị tá dược. Tính hàn, vị đắng. Quy kinh Thận, Bàng quang, Đại trường. Thanh nhiệt táo thấp Hạ tiêu, tả thận hỏa, trị nhiệt lâm (đái buốt đái rắt do nhiệt), nhiệt lỵ, hoàng đản thấp nhiệt. Phụ trách Hạ tiêu trong bộ tam hoàng.</li>
  <li><strong>Chi tử (梔子 — Fructus Gardeniae) 9g:</strong> Vị sứ dược. Tính hàn, vị đắng. Quy kinh Tâm, Phế, Tam tiêu. Thanh nhiệt tả hỏa toàn thân, trừ phiền — vì Tâm chủ thần minh, khi Tâm hỏa thịnh sinh ra phiền táo, bất an. Chi tử còn lợi thấp thông hoàng qua đường tiểu tiện — dẫn nhiệt xuất hạ. Là vị duy nhất trong bài tác động lên cả ba tiêu.</li>
</ul>

<h2>Tác dụng và chỉ định lâm sàng</h2>
<p>Bài thuốc chủ trị <strong>tam tiêu thực nhiệt</strong> — nhiệt tà thực thịnh ở cả ba tiêu, biểu hiện:</p>
<ul>
  <li>Sốt cao, phiền táo (bứt rứt không yên), mất ngủ do Tâm hỏa vượng.</li>
  <li>Miệng lưỡi lở loét, miệng khô đắng, khát uống nước lạnh.</li>
  <li>Thổ huyết, nục huyết (chảy máu cam), xuất huyết dưới da do nhiệt bức huyết vọng hành.</li>
  <li>Hoàng đản (vàng da vàng mắt) thể thấp nhiệt.</li>
  <li>Nhiệt lỵ: đại tiện ra máu mũi, đau quặn hậu môn, hậu môn nóng rát.</li>
  <li>Mụn nhọt, viêm da mủ, nhọt độc (nhiệt độc ung thũng).</li>
  <li>Điên cuồng — nhiệt nhiễu tâm thần, nói sảng, hành vi kích động.</li>
  <li>Lưỡi đỏ sẫm, rêu vàng dày, mạch hồng sác hoặc huyền sác là biểu hiện đặc trưng của chứng thực nhiệt.</li>
</ul>

<h2>Chống chỉ định và thận trọng</h2>
<ul>
  <li><strong>Tuyệt đối không dùng</strong> khi người bệnh thuộc thể <em>hư hàn</em>: sợ lạnh, tay chân lạnh, tiêu chảy do tỳ hư, mạch trầm tế. Bài thuốc thuần thanh nhiệt sẽ làm hàn tà nặng hơn.</li>
  <li>Không dùng kéo dài quá 2–3 tuần liên tục vì các vị đắng hàn hại Vị khí, có thể gây ăn kém, buồn nôn.</li>
  <li>Phụ nữ có thai dùng thận trọng — Hoàng liên liều cao có thể ảnh hưởng thai nhi; cần thầy thuốc chỉ định.</li>
  <li>Người có bệnh lý dạ dày mạn (viêm loét dạ dày, viêm Vị hư hàn) cần gia giảm hoặc tránh dùng.</li>
  <li>Berberine trong Hoàng liên có thể tương tác với một số thuốc tây như cyclosporin, clarithromycin — cần báo với bác sĩ nếu đang dùng thuốc tây.</li>
</ul>

<h2>Gia giảm lâm sàng thông dụng</h2>
<ul>
  <li><strong>Kèm thổ huyết, nục huyết nặng:</strong> Gia Sinh địa, Đan bì, Xích thược — tăng lương huyết cầm huyết.</li>
  <li><strong>Kèm mất ngủ nặng, bồn chồn:</strong> Gia Chu sa (trấn tâm an thần), Liên nhục.</li>
  <li><strong>Kèm viêm họng, sưng tuyến hạch:</strong> Gia Bản lam căn, Kim ngân hoa, Liên kiều — tăng giải độc thanh nhiệt.</li>
  <li><strong>Kèm điên cuồng thực nhiệt:</strong> Kết hợp với Đại thừa khí thang — thông phủ tiết nhiệt.</li>
  <li><strong>Ứng dụng ngoài da:</strong> Sắc đặc, lấy nước rửa vết thương, mụn mủ, vùng da viêm đỏ.</li>
</ul>

<div class="art-cta-box">
  <p>Hoàng liên giải độc thang là bài thuốc mạnh — hiệu quả cao khi dùng đúng chứng, nguy hại khi dùng sai. Nếu bạn hoặc người thân có biểu hiện nhiệt thực như miệng lở nặng, thổ huyết, sốt kéo dài, mụn nhọt lở loét, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để <strong>BS. Nguyễn Đức Tâm</strong> biện chứng và kê bài thuốc gia giảm phù hợp. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
  id: 86,
  slug: "phong-ngua-gout-yhct",
  date: "2026-07-10",
  category: "phong-benh",
  categoryLabel: "Phòng bệnh",
  icon: "🛡️",
  gradient: "g-amber",
  title: "Phòng ngừa bệnh Gout (Thống phong) theo Y học cổ truyền: Chế độ ăn, lối sống và bài thuốc hỗ trợ",
  excerpt: "Gout là bệnh do acid uric tích lũy, mà YHCT gọi là Thống phong — phong thấp nhiệt xâm nhập vào khớp. Phòng ngừa tận gốc cần điều chỉnh ăn uống, bổ Tỳ lợi thấp và bài thuốc kiên trì lâu dài.",
  readTime: 6,
  content: `
<h2>Quan điểm YHCT về phòng ngừa Gout (Thống phong)</h2>
<p>Trong Y học cổ truyền (YHCT), bệnh Gout được xếp vào nhóm <strong>Thống phong</strong> (痛風) — đau do phong thấp nhiệt tấn công khớp — hoặc <strong>Lịch tiết phong</strong> (歷節風) khi có nhiều khớp bị ảnh hưởng. Quan điểm YHCT nhấn mạnh: Gout không xuất phát từ bên ngoài mà chủ yếu do <em>nội nhân</em> — chế độ ăn uống thiên lệch (ăn nhiều đồ béo ngọt, uống rượu bia) làm Tỳ Vị không vận hóa được, sinh ra thấp trọc tích tụ. Thấp trọc lâu ngày hóa nhiệt, cộng với phong tà từ bên ngoài, dẫn hỏa nhiệt và thấp xuống khớp — đặc biệt ngón chân cái (vị trí Can kinh và Thận kinh đi qua).</p>
<p>Về <em>nội tạng</em>, Thống phong phản ánh <strong>Tỳ hư không vận hóa thủy thấp</strong> (acid uric không được chuyển hóa đào thải) và <strong>Thận khí hư không bài tiết được</strong> (thận lọc kém). Phòng ngừa Gout theo YHCT do đó tập trung vào <em>kiện Tỳ, bổ Thận, lợi thấp, thanh nhiệt</em> — giữ cho trọc khí không tích lũy thành Gout.</p>

<h2>Chế độ ăn uống phòng ngừa theo nguyên tắc YHCT</h2>
<p>YHCT phân thực phẩm theo tính (hàn/nhiệt) và công năng với tạng phủ. Nguyên tắc ăn uống phòng Gout:</p>
<ul>
  <li><strong>Hạn chế đồ ăn "thấp nhiệt" gây tích trọc:</strong> Thịt đỏ (bò, dê, chó), nội tạng động vật, hải sản (tôm, cua, sò), bia rượu — những thứ này làm nặng thêm thấp nhiệt trong trung tiêu, tăng sản sinh trọc khí.</li>
  <li><strong>Ưu tiên thực phẩm kiện Tỳ lợi thấp:</strong> Ý dĩ nhân (Coix lacryma-jobi) — lợi thấp, kiện Tỳ; Hoài sơn (Dioscorea opposita) — bổ Tỳ Thận; Phục linh (Poria cocos) — kiện Tỳ thẩm thấp. Ba vị này nấu cháo ăn sáng 3–4 lần/tuần.</li>
  <li><strong>Uống đủ nước và trà lợi tiểu:</strong> Rễ tranh (Imperata cylindrica), Mã đề (Plantago asiatica), Kim tiền thảo (Desmodium styracifolium) sắc uống thay trà — lợi tiểu thông lâm, đưa thấp nhiệt ra ngoài qua đường tiểu.</li>
  <li><strong>Tránh thức ăn cay nóng:</strong> Ớt, tiêu, gừng sống liều cao, rượu mạnh — làm nhiệt thêm thịnh, thúc đẩy phát cơn Gout cấp.</li>
  <li><strong>Ăn nhiều rau xanh tính hàn mát:</strong> Bí đỏ, cần tây, dưa leo, khổ qua — thanh nhiệt, lợi thủy, hỗ trợ thận bài tiết acid uric.</li>
</ul>

<h2>Bài thuốc YHCT hỗ trợ phòng ngừa Gout mạn tính</h2>
<p>Giữa các cơn Gout, YHCT dùng bài thuốc thể Tỳ hư thấp trọc để phòng ngừa tái phát:</p>
<ul>
  <li><strong>Bài kiện Tỳ lợi thấp cơ bản:</strong> Ý dĩ nhân 20g + Phục linh 15g + Trạch tả (Alisma) 12g + Trần bì 6g + Bạch truật 12g. Sắc uống ngày 1 thang, dùng 2–3 tuần/tháng trong giai đoạn giữa cơn. Công năng: kiện Tỳ vận hóa, thẩm thấp giáng trọc.</li>
  <li><strong>Gia giảm khi có Thận hư:</strong> Thêm Thỏ ty tử 12g, Ngưu tất 10g, Đỗ trọng 12g để bổ Thận, tăng khả năng bài tiết acid uric qua thận.</li>
  <li><strong>Gia giảm khi nhiệt thấp còn tồn:</strong> Thêm Thổ phục linh (Smilax glabra) 20–30g + Hoàng bá 9g. Thổ phục linh là vị thuốc đặc hiệu trong YHCT cho Gout — thanh nhiệt, giải thấp độc, thực nghiệm hiện đại xác nhận hạ acid uric máu.</li>
  <li><strong>Trà thảo dược phòng Gout hàng ngày:</strong> Thổ phục linh 20g + Ý dĩ nhân 15g + Cam thảo 5g sắc với 1 lít nước, uống thay trà trong ngày. Dễ thực hiện, an toàn khi dùng dài hạn.</li>
</ul>

<h2>Lối sống và dưỡng sinh phòng ngừa Gout</h2>
<ul>
  <li><strong>Kiểm soát cân nặng:</strong> Béo phì làm Tỳ khí suy yếu, thấp trọc thêm nặng. YHCT khuyến khích giảm cân từ từ qua điều chỉnh ăn uống và tập luyện nhẹ nhàng — không ăn kiêng cực đoan vì tăng ceton máu cũng làm tăng acid uric.</li>
  <li><strong>Vận động đều đặn:</strong> Đi bộ 30 phút/ngày, bơi lội, thái cực quyền — tăng cường Tỳ vận hóa, thúc đẩy khí huyết lưu thông. Tránh vận động cường độ cao đột ngột vì phá vỡ ATP tạo nhiều purine.</li>
  <li><strong>Tránh lạnh đột ngột tại khớp:</strong> Phong hàn thấp là yếu tố khởi phát cơn Gout. Giữ ấm chân, tránh ngâm chân lạnh, không đi chân trần trên nền lạnh ẩm.</li>
  <li><strong>Điều tiết tình chí:</strong> Căng thẳng kéo dài làm Can khí uất — Can mộc khắc Tỳ thổ, làm Tỳ vận hóa kém hơn. Thiền định, thở bụng giúp giải tỏa Can khí uất, gián tiếp phòng Gout.</li>
  <li><strong>Kiểm tra acid uric định kỳ:</strong> 3–6 tháng/lần, đặc biệt người có tiền sử gia đình. YHCT kết hợp chỉ số acid uric với biện chứng để điều chỉnh bài thuốc kịp thời.</li>
</ul>

<h2>Khi nào cần gặp thầy thuốc YHCT?</h2>
<ul>
  <li>Acid uric > 420 μmol/L (nam) hoặc > 360 μmol/L (nữ) dù chưa có cơn Gout.</li>
  <li>Đã có ≥ 2 cơn Gout cấp trong năm — cần điều trị dự phòng chủ động.</li>
  <li>Gout kèm sỏi thận, suy thận, tăng huyết áp, đái tháo đường — cần phác đồ YHCT toàn diện.</li>
  <li>Muốn giảm hoặc ngừng dần thuốc allopurinol tây y dưới sự theo dõi y tế.</li>
</ul>

<div class="art-cta-box">
  <p>Phòng ngừa Gout theo YHCT là hành trình dài — điều chỉnh ăn uống, lối sống và dùng bài thuốc kiên trì, không phải giải pháp tức thời. Để được biện chứng thể trạng và xây dựng kế hoạch phòng ngừa cá nhân hóa, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> gặp <strong>BS. Nguyễn Đức Tâm</strong>. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
  id: 87,
  slug: "phuong-huyet-bo-than-trang-duong",
  date: "2026-07-10",
  category: "phuong-huyet",
  categoryLabel: "Phương huyệt",
  icon: "📍",
  gradient: "g-huyet",
  title: "Phương huyệt bổ thận tráng dương theo Y học cổ truyền",
  excerpt: "Phương huyệt bổ thận tráng dương kết hợp các huyệt bối du, nhâm mạch và kinh thận để ôn bổ Thận dương, tăng cường tinh khí, cải thiện chức năng sinh lý và sức khỏe tổng thể cho người Thận dương hư.",
  readTime: 6,
  content: `
<h2>Cơ sở lý luận: Thận dương hư và vai trò của châm cứu bổ thận</h2>
<p>Trong Y học cổ truyền (YHCT), <strong>Thận</strong> là căn bản của âm dương toàn cơ thể — Thận tàng tinh, chủ sinh trưởng, phát dục và sinh sản. <strong>Thận dương</strong> (Mệnh môn hỏa) là nguồn nhiệt năng gốc của cơ thể: ôn ấm tạng phủ, thúc đẩy khí hóa, bảo đảm chức năng tiêu hóa, sinh sản, thủy dịch và thần kinh. Khi Thận dương suy hư — do lão hóa, lao lực, bệnh mạn tính hoặc sống thiếu điều độ — xuất hiện các triệu chứng điển hình: lưng gối mỏi lạnh, mệt mỏi, sợ lạnh, liệt dương (nam), lạnh kinh – vô kinh (nữ), tiểu đêm nhiều, phù nhẹ, trí nhớ giảm.</p>
<p>Phương huyệt bổ thận tráng dương nhắm vào các huyệt vị kết nối trực tiếp với Thận và Mệnh môn — ôn bổ dương khí từ gốc, thay vì chỉ giải quyết triệu chứng cục bộ. Châm cứu kết hợp cứu ngải (moxibustion) tại các huyệt này là phương pháp bền vững, không tác dụng phụ, phù hợp dùng lâu dài.</p>

<h2>Bảy huyệt vị cốt lõi trong phương huyệt bổ thận tráng dương</h2>
<ul>
  <li><strong>1. Mệnh môn (GV4 — 命門):</strong> Vị trí: dưới mỏm gai đốt sống thắt lưng L2, trên đường giữa sau lưng. Ý nghĩa: "Cổng Mệnh" — nơi cư trú của Thận dương nguyên khí, là trung tâm Mệnh môn hỏa. Công năng: ôn bổ Thận dương, tráng dương trừ hàn, hồi dương cứu nghịch. Đặc biệt hiệu quả khi cứu ngải trực tiếp hoặc cứu hộp. Chỉ định: liệt dương, di tinh, lưng lạnh đau, tiêu chảy do Thận dương hư.</li>
  <li><strong>2. Thận du (BL23 — 腎俞):</strong> Vị trí: ngang đốt sống L2, cách đường giữa 1,5 thốn (mỗi bên). Ý nghĩa: Bối du huyệt (back-shu point) của Thận — cửa ngõ điều tiết Thận khí trực tiếp nhất. Công năng: bổ Thận âm dương, ích tinh tủy, mạnh lưng gối, thông nhĩ khiếu (điếc tai do Thận hư), điều kinh. Cứu Thận du + Mệnh môn là cặp đôi ôn Thận dương kinh điển không thể thiếu.</li>
  <li><strong>3. Quan nguyên (CV4 — 關元):</strong> Vị trí: đường giữa bụng, dưới rốn 3 thốn (cun). Ý nghĩa: Mộ huyệt của Tiểu trường, giao hội của tam âm kinh (Thận, Tỳ, Can) và Nhâm mạch. Là "kho chứa nguyên khí". Công năng: bổ Thận tráng dương, bổ khí huyết, điều hòa xung nhâm, cố tinh chỉ di, ôn trung cầm tiết. Cứu Quan nguyên liều lớn (số lượng mồi cứu nhiều) là phương pháp "hồi dương cứu nghịch" trong trường hợp dương khí suy kiệt.</li>
  <li><strong>4. Khí hải (CV6 — 氣海):</strong> Vị trí: đường giữa bụng, dưới rốn 1,5 thốn. Ý nghĩa: "Biển của khí" — tập trung nguyên khí toàn thân. Công năng: bổ nguyên khí (cả khí lẫn dương), ôn hạ tiêu, điều kinh, trị sán khí. Kết hợp Khí hải + Quan nguyên cứu thường xuyên phòng suy giảm thể chất do lão hóa.</li>
  <li><strong>5. Thái khê (KD3 — 太谿):</strong> Vị trí: lõm giữa mắt cá trong (nội khỏa) và gân gót chân (gân Achilles). Ý nghĩa: Nguyên huyệt (source point) của Kinh Thận Túc Thiếu Âm — điều tiết trực tiếp Thận khí nguyên bản. Công năng: bổ Thận âm và Thận dương, ích tinh tủy, mạnh lưng gối, dưỡng Phế âm (Kim thủy tương sinh). Là huyệt bổ Thận cân bằng nhất — hiệu quả cả với Thận âm hư lẫn Thận dương hư.</li>
  <li><strong>6. Tam âm giao (SP6 — 三陰交):</strong> Vị trí: mặt trong cẳng chân, trên đỉnh mắt cá trong 3 thốn. Ý nghĩa: Giao hội của ba kinh âm: Tỳ (SP), Can (LR), Thận (KD). Công năng: bổ ba âm tạng, điều hòa kinh huyết, trị di tinh liệt dương (phối Thận du, Quan nguyên), điều kinh bế kinh. Phụ nữ dùng Tam âm giao + Quan nguyên ôn thận ấm cung, cải thiện lạnh kinh – vô kinh do Thận dương hư.</li>
  <li><strong>7. Túc tam lý (ST36 — 足三里):</strong> Vị trí: dưới đầu gối bên ngoài 3 thốn, bên cạnh xương chày. Ý nghĩa: Hợp huyệt của Kinh Vị — huyệt tổng quát bổ hậu thiên (Tỳ Vị) để hỗ trợ tiên thiên (Thận). Công năng: kiện Tỳ ích Vị, bổ khí huyết, tăng cường chính khí toàn thân. Cứu Túc tam lý thường xuyên là phương pháp dưỡng sinh trường thọ kinh điển trong YHCT — "thường cứu Túc tam lý, lão lai như bồng thơm".</li>
</ul>

<h2>Phác đồ châm cứu và cứu ngải cụ thể</h2>
<ul>
  <li><strong>Huyệt chủ yếu:</strong> Mệnh môn, Thận du (2 bên), Quan nguyên, Thái khê (2 bên).</li>
  <li><strong>Huyệt phối hợp:</strong> Khí hải, Tam âm giao, Túc tam lý.</li>
  <li><strong>Kỹ thuật:</strong> Châm bổ pháp — kim đưa nhẹ, xoay chậm theo chiều thuận, không kích thích mạnh. Lưu kim 20–30 phút. Cứu ngải điếu trên Mệnh môn, Thận du, Quan nguyên sau châm 10–15 phút mỗi huyệt.</li>
  <li><strong>Liệu trình:</strong> 10 buổi/đợt (cách 1 ngày/buổi). Nghỉ 1–2 tuần rồi thực hiện đợt tiếp. Duy trì 3–4 đợt để thấy hiệu quả bền vững.</li>
  <li><strong>Tự cứu tại nhà (bổ sung):</strong> Dùng điếu ngải cứu (điếu hương ngải) di chuyển vòng tròn cách huyệt 2–3 cm, mỗi huyệt 10 phút, tối trước khi ngủ. Thực hiện 3–5 lần/tuần.</li>
</ul>

<h2>Triệu chứng cải thiện và thời gian điều trị</h2>
<p>Sau 1 đợt (10 buổi) thường thấy: ngủ sâu hơn, lưng gối bớt mỏi, sợ lạnh giảm, năng lượng tăng. Sau 3 đợt: chức năng sinh lý cải thiện rõ. Liệt dương do Thận dương hư cần ít nhất 2–3 tháng điều trị kiên trì. Kết hợp bài thuốc bổ Thận dương (Thận khí hoàn, Hữu quy hoàn) sẽ tăng hiệu quả đáng kể.</p>

<div class="art-cta-box">
  <p>Bổ thận tráng dương bằng châm cứu cần phân biệt rõ Thận âm hư hay Thận dương hư — sai thể bệnh, dùng sai kỹ thuật có thể gây bốc hỏa, mất ngủ nặng hơn. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> sẽ thăm mạch, biện chứng chính xác và thực hiện phương huyệt phù hợp thể trạng từng người. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
  id: 88,
  slug: "duong-da-mua-dong-yhct",
  date: "2026-07-10",
  category: "lam-dep",
  categoryLabel: "Làm đẹp",
  icon: "🌸",
  gradient: "g-rose",
  title: "Dưỡng da mùa đông theo Y học cổ truyền: Giữ ẩm, sáng da từ Phế và Huyết",
  excerpt: "Da khô nứt nẻ mùa đông theo YHCT phản ánh Phế âm hư và Huyết hư không dưỡng được bì phu. Bài viết hướng dẫn cách dưỡng da từ bên trong bằng thuốc, thực phẩm và bên ngoài bằng liệu pháp YHCT để da ẩm mịn suốt mùa lạnh.",
  readTime: 5,
  content: `
<h2>Mùa đông và da khô theo lý luận YHCT</h2>
<p>Theo Y học cổ truyền (YHCT), mùa đông thuộc hành <strong>Thủy</strong>, ứng với tạng <strong>Thận</strong>. Mùa đông khí hậu lạnh khô, tân dịch (thủy dịch cơ thể) dễ bị hao tổn — da trở nên khô, thiếu độ đàn hồi, nứt nẻ tại môi, gót chân, mu bàn tay. YHCT lý giải: da và lông (bì mao) thuộc quyền quản của <strong>Phế</strong>. Mùa đông hàn tà làm Phế khí thu liễm, tấu lý (lỗ chân lông và kẽ da) đóng lại để bảo vệ dương khí — nhưng cũng làm dưỡng ẩm không thể toát ra nuôi bì phu đều đặn.</p>
<p>Hai nguyên nhân nội tạng chính gây da khô mùa đông:</p>
<ul>
  <li><strong>Phế âm hư:</strong> Phế không đủ âm dịch để dưỡng bì mao — da khô, ngứa, tróc vảy, dễ nứt nẻ. Thường kèm họng khô, ho khan, khát nước nhẹ, lưỡi đỏ ít rêu.</li>
  <li><strong>Huyết hư không dưỡng bì phu:</strong> "Huyết là gốc của sắc da" (Huyết vi sắc chi bản). Huyết hư khiến da xỉn màu, khô, nhăn nheo sớm, môi nhợt nhạt. Thường gặp ở phụ nữ sau sinh, người ăn uống kém, người lớn tuổi.</li>
</ul>

<h2>Dưỡng da từ bên trong: Thực phẩm và bài thuốc YHCT</h2>
<p>YHCT xem "dưỡng da từ bên trong" là gốc — dùng thực phẩm và thuốc bổ Phế âm, dưỡng huyết, sinh tân dịch:</p>
<ul>
  <li><strong>Thực phẩm bổ Phế âm, sinh tân:</strong> Lê (Pyrus pyrifolia) — thanh nhiệt, nhuận Phế, sinh tân, ăn tươi hoặc hầm đường phèn; Bạch mộc nhĩ (Tremella fuciformis) — bổ Phế âm, dưỡng Vị sinh tân, giàu beta-glucan và polysaccharide thực vật; Hạnh nhân (Prunus armeniaca, qua lăng) — nhuận Phế, nhuận trường; Ngó sen — thanh nhiệt sinh tân, cầm huyết.</li>
  <li><strong>Thực phẩm dưỡng Huyết:</strong> Long nhãn nhục (Longan) — bổ tâm tỳ dưỡng huyết; Đại táo (Ziziphus jujuba) — bổ khí dưỡng huyết; Kỷ tử (Lycium barbarum) — bổ Can thận, dưỡng huyết sáng mắt; Mộc nhĩ đen (Auricularia auricula) — dưỡng huyết hoạt huyết.</li>
  <li><strong>Cháo dưỡng da mùa đông:</strong> Bạch mộc nhĩ 10g (ngâm nở) + Kỷ tử 15g + Đại táo 5 quả + Gạo nếp 50g nấu cháo, thêm mật ong khi ăn. Ăn 2–3 lần/tuần, bổ Phế âm dưỡng Huyết từ bên trong, hiệu quả sau 2–3 tuần kiên trì.</li>
  <li><strong>Trà dưỡng da:</strong> Sa sâm (Glehnia littoralis) 10g + Ngọc trúc (Polygonatum odoratum) 10g + Mạch môn đông 10g sắc với 600ml nước, uống thay trà. Bộ ba này đặc trị Phế Vị âm hư — sinh tân dịch, nhuận bì phu, trị da khô và ho khan mùa đông.</li>
  <li><strong>Bài thuốc:</strong> Người da khô nặng kèm mệt mỏi, lưỡi đỏ, ít ngủ dùng <em>Bách hợp cố kim thang gia giảm</em> (Bách hợp + Sinh địa + Thục địa + Mạch môn + Sa sâm + Ngọc trúc) — bổ Phế âm, dưỡng huyết dưỡng da toàn diện. Cần thầy thuốc kê đơn theo thể trạng.</li>
</ul>

<h2>Dưỡng da từ bên ngoài theo YHCT</h2>
<ul>
  <li><strong>Tắm thảo dược dưỡng da:</strong> Ngải cứu 30g + Bạch chỉ 15g + Gừng tươi 20g + Muối biển 1 muỗng đun sôi với 3 lít nước, đổ vào bồn tắm nước ấm 38–40°C, ngâm 15–20 phút. Ôn kinh tán hàn, khai tấu lý, tăng tuần hoàn da. Làm 2–3 lần/tuần.</li>
  <li><strong>Dầu thực vật dưỡng ẩm theo YHCT:</strong> Dầu vừng (Sesamum indicum) — tính ấm, bổ Can Thận, nhuận táo; thoa lên da mặt và tay sau tắm khi da còn ẩm. Dầu hạnh nhân — nhuận da, bổ Phế; thoa vùng môi, gót chân khô nứt. Mật ong nguyên chất trộn bột nghệ (1:1) đắp mặt 15 phút mỗi tuần — dưỡng ẩm, sáng da, kháng khuẩn.</li>
  <li><strong>Xoa bóp mặt theo kinh lạc:</strong> Hàng sáng sau rửa mặt, dùng đầu ngón tay xoa tròn từ Nghinh hương (LI20) theo gò má lên Thái dương (EX-HN5), Tình minh (BL1) xuống Tứ bạch (ST2). Thực hiện 2–3 phút kích thích tuần hoàn da mặt, đưa khí huyết và dưỡng chất đến nuôi da.</li>
  <li><strong>Điểm châm mặt (facial acupressure) tại nhà:</strong> Bấm huyệt Nhân trung (GV26), Thừa tương (CV24), Nghinh hương (LI20) và Ấn đường (GV29) mỗi ngày 1–2 phút. Kích thích microtuần hoàn mặt, giảm khô và mờ nếp nhăn nhỏ.</li>
</ul>

<h2>Những điều cần tránh để da không thêm khô mùa đông theo YHCT</h2>
<ul>
  <li>Tránh rửa mặt nước quá nóng — mở tấu lý đột ngột làm mất dưỡng ẩm tự nhiên của da.</li>
  <li>Hạn chế đồ ăn cay nóng (ớt, tiêu, rượu) vì đốt Phế âm, khiến da khô thêm.</li>
  <li>Không thức khuya quá 23:00 — giờ Tý (23:00–01:00) là giờ Đởm và Can hồi phục tân dịch nuôi da; thức khuya làm Can âm huyết hao tổn, da xỉn và khô.</li>
  <li>Uống đủ 1,5–2 lít nước/ngày kể cả mùa đông không khát — tân dịch đủ thì da ẩm.</li>
  <li>Không tắm xà phòng kiềm mạnh hàng ngày — rửa trôi lớp bã nhờn bảo vệ tự nhiên của da.</li>
</ul>

<div class="art-cta-box">
  <p>Da khô mùa đông dai dẳng, nứt nẻ không thuyên giảm dù dùng kem dưỡng nhiều có thể là dấu hiệu Phế âm hư hoặc Huyết hư cần điều trị từ bên trong. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, <strong>BS. Nguyễn Đức Tâm</strong> sẽ biện chứng tổng thể và phối hợp liệu pháp dưỡng da nội - ngoại theo YHCT. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
    id: 82,
    slug: "thanh-loc-co-the-theo-yhct",
    date: "2026-07-10",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Thanh lọc cơ thể theo Y học cổ truyền: Phương pháp giải độc an toàn từ thiên nhiên",
    excerpt: "Y học cổ truyền có hệ thống lý luận riêng về thanh lọc cơ thể, không dùng hóa chất mà qua điều chỉnh chức năng Can, Tỳ, Thận — tam tạng chủ giải độc. Bài viết hướng dẫn phương pháp giải độc theo mùa, bài thuốc và thực phẩm hỗ trợ an toàn cho người Việt.",
    readTime: 6,
    content: `
<h2>Tổng quan về thanh lọc cơ thể theo Y học cổ truyền</h2>
<p>Trong Y học cổ truyền (YHCT), khái niệm "thanh lọc cơ thể" không phải là thuật ngữ đơn lẻ mà là kết quả của quá trình <em>điều hòa tam tạng giải độc</em> gồm <strong>Can, Tỳ và Thận</strong>. Theo lý luận YHCT, cơ thể tích tụ "độc tố" — còn gọi là <em>Tà khí</em>, <em>Thấp trọc</em>, <em>Đàm ẩm</em> hoặc <em>Huyết ứ</em> — từ hai nguồn chính: ngoại nhân (ô nhiễm môi trường, thức ăn không sạch, khí hậu thay đổi) và nội nhân (tình chí không ổn, ăn uống thất thường, thức khuya mệt mỏi).</p>
<p>Can tàng huyết và chủ sơ tiết — điều phối lưu thông khí huyết, giải trừ uất kết. Tỳ vận hóa thủy thấp — biến đổi đồ ăn thức uống thành tinh vi và bài thải thấp trọc. Thận chủ thủy — lọc tạp chất qua đường tiểu tiện. Khi ba tạng này hoạt động hài hòa, cơ thể tự có năng lực <em>trừ tà ngoại xuất</em> — loại bỏ chất có hại ra ngoài theo nhiều đường: mồ hôi, đại tiện, tiểu tiện và hơi thở.</p>

<h2>Dấu hiệu cơ thể cần thanh lọc theo YHCT</h2>
<ul>
  <li><strong>Can khí uất kết, Can nhiệt:</strong> Hay cáu gắt, miệng đắng, đầu nặng, ngủ khó, nước tiểu vàng sậm, mắt đỏ, táo bón, lưỡi đỏ rêu vàng. Biểu hiện Can đang ứ độc, cần sơ can giải uất, thanh Can.</li>
  <li><strong>Tỳ hư thấp trọc:</strong> Bụng đầy, chướng hơi, phân lỏng hoặc nát, người mệt mỏi nặng nề, da dầu, mụn nhọt nhiều, rêu lưỡi dày nhờn. Tỳ yếu không vận hóa thủy thấp, cần kiện tỳ hóa thấp.</li>
  <li><strong>Thận hư thủy độc tích:</strong> Phù nhẹ ở mắt và bàn chân buổi sáng, nước tiểu ít, lưng mỏi, tóc rụng, sức đề kháng giảm. Thận suy giảm chức năng lọc, cần bổ thận lợi thủy.</li>
  <li><strong>Huyết ứ trọc:</strong> Da sạm tối, xuất hiện nám, mảng thâm, lưỡi tím hoặc có điểm ứ huyết, kinh nguyệt có cục máu đông. Cần hoạt huyết hóa ứ.</li>
</ul>

<h2>Phương pháp thanh lọc cơ thể theo YHCT</h2>
<p>YHCT không dùng liệu pháp thanh lọc cực đoan mà chú trọng <em>từ từ, bền vững</em>, hỗ trợ chức năng tự đào thải của cơ thể. Ba hướng chính bao gồm:</p>
<ul>
  <li><strong>Thanh Can giải độc:</strong> Dùng các vị thuốc và thực phẩm có tính mát, vào kinh Can như nhân trần (Herba Artemisiae Scopariae), chi tử (Fructus Gardeniae), rau má, cà rốt, nghệ vàng (Curcuma longa). Châm cứu tại Thái xung (LR3), Kỳ môn (LR14), Dương lăng tuyền (GB34) để sơ tiết Can khí.</li>
  <li><strong>Kiện Tỳ hóa thấp:</strong> Bài thuốc Sâm linh bạch truật tán (Nhân sâm, Phục linh, Bạch truật, Ý dĩ nhân, Hoài sơn) kiện tỳ thẩm thấp. Thực phẩm hỗ trợ: ý dĩ nấu cháo, hoài sơn hấp, bí đỏ. Huyệt Tỳ du (BL20), Túc tam lý (ST36), Âm lăng tuyền (SP9) để tăng cường vận hóa.</li>
  <li><strong>Bổ Thận lợi thủy:</strong> Các vị trạch tả (Alisma orientale), xa tiền tử (Plantago asiatica), kim tiền thảo (Desmodium styracifolium) hỗ trợ Thận lọc và bài xuất thủy thấp. Huyệt Thận du (BL23), Quan nguyên (CV4), Tam âm giao (SP6) để bổ thận, thông lợi đường tiểu.</li>
</ul>

<h2>Tự thực hành thanh lọc tại nhà theo mùa</h2>
<ul>
  <li><strong>Trà thanh lọc mùa hè (thanh nhiệt lợi thấp):</strong> Nhân trần 10g + Ý dĩ 15g + Rễ tranh 10g sắc với 800ml nước, uống thay trà trong ngày. Thích hợp khi người nóng bức, mụn nhiều, nước tiểu vàng.</li>
  <li><strong>Cháo kiện tỳ giải thấp (quanh năm):</strong> Ý dĩ nhân 30g + Hoài sơn 20g + Phục linh 15g + Gạo tẻ 50g nấu cháo, ăn sáng 3–4 lần/tuần. Giúp Tỳ vận hóa tốt, giảm phù thũng và chướng bụng.</li>
  <li><strong>Nước detox YHCT buổi sáng:</strong> Pha 1 thìa mật ong + vài lát gừng tươi + nước ấm 40°C, uống khi thức dậy trước khi ăn 30 phút. Ôn Tỳ Vị, khởi động tiêu hóa, hỗ trợ đào thải qua đại tiện.</li>
  <li><strong>Ngâm chân thanh lọc:</strong> Ngải cứu 20g + Muối biển 1 muỗng + Gừng tươi 5 lát sắc với 2 lít nước, ngâm chân 20–25 phút trước ngủ. Mở tấu lý, khai thông kinh lạc, hỗ trợ đào thải qua mồ hôi chân.</li>
  <li><strong>Lưu ý quan trọng:</strong> Thanh lọc không đồng nghĩa với nhịn ăn hay thụt rửa. Không tự dùng các thuốc lợi tiểu, nhuận tràng mạnh khi chưa có chỉ định. Người mang thai, bệnh thận mạn, sỏi mật cần hỏi thầy thuốc trước.</li>
</ul>

<div class="art-cta-box">
  <p>Thanh lọc cơ thể đúng cách theo YHCT cần xác định đúng thể trạng — người hàn hay nhiệt, hư hay thực — để chọn đúng phương pháp, tránh làm suy yếu chính khí. Nếu bạn thường xuyên mệt mỏi, da xỉn, tiêu hóa kém hoặc muốn thực hiện liệu trình thanh lọc định kỳ theo mùa, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để <strong>BS. Nguyễn Đức Tâm</strong> thăm mạch, biện chứng và xây dựng phác đồ cá nhân hóa. Phòng khám làm việc <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
    id: 81,
    slug: "duong-quy-vi-thuoc-duong-huyet-dieu-kinh",
    date: "2026-07-09",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Đương quy — Vị thuốc dưỡng huyết, điều kinh kinh điển của Y học cổ truyền",
    excerpt: "Đương quy (Angelica sinensis) là vị thuốc hàng đầu trong dưỡng huyết và điều kinh của Y học cổ truyền. Từ hơn 2.000 năm, đương quy được dùng để trị huyết hư, đau bụng kinh, tê bì tay chân và phục hồi khí huyết sau sinh với hiệu quả lâu bền.",
    readTime: 6,
    content: `
<h2>Tổng quan về đương quy theo Y học cổ truyền</h2>
<p>Đương quy (<em>Angelica sinensis</em> (Oliv.) Diels), còn gọi là Tần quy, Vân quy, thuộc họ Hoa tán (Apiaceae). Rễ đương quy được dùng làm thuốc, thu hoạch vào mùa thu khi cây 3 tuổi, phơi hoặc sấy khô. Trong Y học cổ truyền (YHCT), đây là một trong <em>"tứ đại thuốc bổ"</em> gồm nhân sâm, hoàng kỳ, đương quy và thục địa, được gọi là "thuốc số một về huyết".</p>
<p>Theo <em>Thần Nông Bản Thảo Kinh</em> và <em>Bản Thảo Cương Mục</em>, đương quy vị ngọt, cay, tính ôn, quy vào các kinh Can, Tâm, Tỳ. Có ba tác dụng chính: <strong>bổ huyết</strong> (tạo thêm huyết dịch cho cơ thể thiếu huyết), <strong>hoạt huyết</strong> (lưu thông khí huyết, phá ứ trệ), <strong>nhuận tràng</strong> (giúp đại tiện thông suốt do huyết hư tân dịch thiếu). Đặc biệt, phần thân rễ (qui thân) có tác dụng bổ huyết mạnh hơn, còn phần đầu rễ (qui đầu) và đuôi rễ (qui vĩ) có tác dụng hoạt huyết, phá ứ tốt hơn.</p>

<h2>Phân thể bệnh và chỉ định của đương quy theo YHCT</h2>
<ul>
  <li><strong>Huyết hư — chỉ định cốt lõi:</strong> Biểu hiện da xanh xao, môi nhợt, hoa mắt chóng mặt, hồi hộp, mất ngủ, tay chân tê bì, phụ nữ kinh nguyệt ít hoặc chậm kinh, lưỡi nhạt, mạch tế nhược. Đương quy là vị thuốc không thể thiếu trong mọi bài thuốc bổ huyết.</li>
  <li><strong>Huyết ứ — đau bụng kinh, bế kinh:</strong> Phụ nữ đau bụng kinh (thống kinh) do huyết ứ, bế kinh, khối u tử cung, sau sinh loét sản. Đương quy kết hợp hoạt huyết để thông kinh, giảm đau.</li>
  <li><strong>Phong hàn thấp tý — đau nhức xương khớp:</strong> Đau nhức cơ khớp do huyết hư không nuôi dưỡng gân cốt, hoặc phong hàn thấp xâm nhập. Đương quy bổ huyết đồng thời tán hàn thông lạc.</li>
  <li><strong>Huyết hư táo bón:</strong> Người cao tuổi, sau bệnh dài ngày, phụ nữ sau sinh táo bón do huyết hư không đủ tân dịch nhuận tràng. Dùng đương quy ôn nhuận thông đại tiện.</li>
  <li><strong>Mụn nhọt lâu lành — ngoại khoa YHCT:</strong> Mụn nhọt, vết thương lâu lành miệng do khí huyết hư. Đương quy bổ huyết sinh cơ, hỗ trợ tái tạo mô.</li>
</ul>

<h2>Các bài thuốc kinh điển chứa đương quy</h2>
<p>Đương quy xuất hiện trong rất nhiều bài thuốc cổ phương kinh điển:</p>
<ul>
  <li><strong>Tứ vật thang (Si Wu Tang):</strong> Bài bổ huyết cơ bản gồm Đương quy 12g + Thục địa 12g + Bạch thược 12g + Xuyên khung 8g. Là nền tảng của hầu hết bài thuốc điều kinh, dưỡng huyết.</li>
  <li><strong>Đương quy bổ huyết thang:</strong> Chỉ hai vị: Hoàng kỳ 30g + Đương quy 6g (tỷ lệ 5:1). Bổ khí sinh huyết, dùng sau mất máu nhiều hoặc khí hư huyết nhược.</li>
  <li><strong>Bát trân thang (Ba Zhen Tang):</strong> Kết hợp Tứ quân (bổ khí) + Tứ vật (bổ huyết), trong đó đương quy đóng vai trò dẫn thuốc vào huyết phần và dưỡng huyết toàn diện.</li>
  <li><strong>Quy tỳ thang:</strong> Đương quy kết hợp long nhãn nhục, toan táo nhân, viễn chí để dưỡng tâm an thần cho chứng tâm tỳ lưỡng hư.</li>
</ul>

<h2>Tự thực hành tại nhà với đương quy</h2>
<ul>
  <li><strong>Trà đương quy:</strong> Lấy 6–10g đương quy thái lát, sắc với 500ml nước trong 20 phút, uống 2 lần/ngày sau bữa ăn. Phù hợp cho phụ nữ huyết hư, kinh nguyệt ít.</li>
  <li><strong>Cháo đương quy táo đỏ:</strong> Đương quy 10g sắc lấy nước, nấu cháo với gạo tẻ 60g, táo đỏ 5 quả, thêm đường phèn vừa đủ. Ăn buổi sáng, bổ huyết dưỡng nhan.</li>
  <li><strong>Rượu thuốc đương quy:</strong> Ngâm đương quy 50g + thục địa 50g + long nhãn nhục 30g với 500ml rượu 35–40 độ trong 30 ngày. Uống 20–30ml trước bữa tối, bổ khí huyết.</li>
  <li><strong>Ngâm chân đương quy:</strong> Sắc đương quy 20g + gừng tươi 3 lát + ngải cứu 15g với 2 lít nước, đổ vào chậu ngâm chân 20 phút trước khi ngủ. Giúp lưu thông khí huyết, ấm chân, cải thiện giấc ngủ.</li>
  <li><strong>Lưu ý quan trọng:</strong> Không dùng đương quy cho người đang tiêu chảy, thấp nhiệt nặng, phụ nữ mang thai 3 tháng đầu hoặc đang có thai mà không có chỉ định của bác sĩ. Liều dùng thông thường 6–12g/ngày dạng sắc.</li>
</ul>

<div class="art-cta-box">
  <p>Đương quy tuy là vị thuốc quen thuộc nhưng cần biện chứng đúng thể bệnh để dùng đúng liều lượng và kết hợp thuốc phù hợp — dùng sai có thể gây trướng bụng, tiêu chảy hoặc tương tác thuốc. Nếu bạn có các chứng huyết hư, kinh nguyệt không đều, suy nhược sau bệnh hoặc cần bổ huyết dưỡng nhan, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám và tư vấn bài thuốc phù hợp. Phòng khám làm việc <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
    id: 80,
    slug: "nhi-cham-giam-stress-cang-thang",
    date: "2026-07-08",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Nhĩ châm giảm stress và căng thẳng: Phương pháp không dùng thuốc theo Y học cổ truyền",
    excerpt: "Nhĩ châm — châm cứu vùng tai — là kỹ thuật không dùng thuốc giúp giảm stress, lo âu và mất ngủ hiệu quả. Loa tai phản chiếu toàn bộ cơ thể, kích thích đúng điểm nhĩ huyệt giúp cân bằng thần kinh và điều hòa nội tiết tố theo Y học cổ truyền.",
    readTime: 5,
    content: `
<h2>Tổng quan về nhĩ châm theo Y học cổ truyền</h2>
<p>Nhĩ châm (耳鍼, ear acupuncture) là phương pháp kích thích các huyệt vị trên loa tai để điều trị bệnh toàn thân. Theo Y học cổ truyền, loa tai là nơi hội tụ của nhiều đường kinh lạc: kinh Túc thiếu dương đởm, kinh Thủ dương minh đại tràng, kinh Túc thái dương bàng quang đều liên hệ trực tiếp đến tai. Sách <em>Linh Khu</em> ghi: "Nhĩ giả, tông mạch chi sở tụ dã" — tai là nơi hội tụ của các tông mạch.</p>
<p>Trong y học hiện đại, bản đồ nhĩ huyệt được bác sĩ người Pháp Paul Nogier hệ thống hóa từ năm 1957, chỉ ra rằng loa tai có hình dạng tương tự thai nhi lộn ngược, mỗi vùng tai tương ứng với một bộ phận cơ thể. Khi cơ thể căng thẳng, lo âu, mất ngủ, các điểm nhĩ huyệt tương ứng sẽ xuất hiện phản ứng đặc hiệu — nhạy đau, đỏ hoặc có vảy — giúp thầy thuốc định vị và điều trị chính xác.</p>

<h2>Cơ chế giảm stress của nhĩ châm theo YHCT và y học hiện đại</h2>
<ul>
  <li><strong>Theo YHCT:</strong> Stress, lo âu thuộc chứng <em>Uất chứng</em> và <em>Thất miên</em>, nguyên nhân do Can khí uất kết, Tâm thần thất dưỡng. Nhĩ châm kích thích điểm Tâm, Thần môn nhĩ và Dưới vỏ não giúp sơ can giải uất, dưỡng tâm an thần, trực tiếp điều hòa khí huyết và ổn định thần kinh.</li>
  <li><strong>Theo y học hiện đại:</strong> Kích thích loa tai hoạt hóa nhánh tai của dây thần kinh phế vị (auricular branch of vagus nerve), làm tăng trương lực phó giao cảm, giảm cortisol huyết tương, kích thích não tiết beta-endorphin và serotonin — các chất dẫn truyền thần kinh liên quan đến cảm giác thư giãn và hạnh phúc.</li>
</ul>

<h2>Các nhĩ huyệt quan trọng điều trị stress và lo âu</h2>
<p>Thầy thuốc YHCT thường phối hợp các nhĩ huyệt sau trong phác đồ chống stress:</p>
<ul>
  <li><strong>Thần môn nhĩ (Ear Shen Men — MA-TF1):</strong> Điểm quan trọng nhất trong điều trị lo âu, mất ngủ, bồn chồn. Nằm ở phần tam giác gờ tai (fossa triangularis). Tác dụng an thần, trấn tĩnh mạnh.</li>
  <li><strong>Điểm Tâm (Heart — MA-IC):</strong> Tương ứng với tạng Tâm — chủ trì thần kinh và tâm lý. Kích thích giúp dưỡng tâm, ổn định nhịp tim, giảm hồi hộp lo âu.</li>
  <li><strong>Dưới vỏ não (Subcortex — MA-AT):</strong> Nằm ở mặt trong bình tai (antitragus). Điều hòa hoạt động vỏ não, giảm căng thẳng tinh thần, cải thiện giấc ngủ.</li>
  <li><strong>Điểm Nội tiết (Endocrine — MA-IC3):</strong> Cân bằng hệ nội tiết, giảm cortisol, đặc biệt hữu ích cho stress mạn tính ảnh hưởng đến nội tiết tố.</li>
  <li><strong>Điểm Đởm (Gallbladder — MA-SC):</strong> Theo YHCT, Can Đởm liên quan đến cảm xúc lo âu, sợ hãi, phiền muộn. Kích thích điểm Đởm giúp sơ can giải uất, giảm lo âu tâm lý.</li>
  <li><strong>Điểm Thận (Kidney — MA-SC):</strong> Thận tàng chí, bổ thận giúp tăng cường ý chí, giảm suy nhược thần kinh và mệt mỏi do stress kéo dài.</li>
</ul>

<h2>Kỹ thuật thực hiện nhĩ châm</h2>
<p>Có hai hình thức nhĩ châm phổ biến tại phòng khám YHCT:</p>
<ul>
  <li><strong>Châm kim nhĩ huyệt:</strong> Dùng kim nhĩ châm chuyên dụng (kim ngắn 0,5–1 cm) châm vào nhĩ huyệt, lưu kim 20–30 phút mỗi buổi. Hiệu quả nhanh, phù hợp điều trị cơn stress cấp tính.</li>
  <li><strong>Dán hạt từ (Seeds/Magnets):</strong> Dán hạt đậu Vương bất lưu hành (Vaccaria seeds) hoặc hạt từ nhỏ lên nhĩ huyệt, dán băng dính y tế cố định 3–5 ngày. Bệnh nhân tự bấm nhẹ 3–4 lần/ngày, mỗi lần 1–2 phút — phương pháp này tiện lợi, không đau, phù hợp duy trì điều trị tại nhà.</li>
</ul>

<h2>Tự thực hành bấm nhĩ huyệt tại nhà giảm stress</h2>
<ul>
  <li>Xác định điểm Thần môn nhĩ ở đỉnh tam giác gờ tai (hõm tam giác phía trên), dùng ngón tay cái và ngón trỏ bấm nhẹ nhàng cả hai tai cùng lúc, giữ 30–60 giây, lặp lại 3–5 lần khi cảm thấy căng thẳng.</li>
  <li>Xoa toàn bộ loa tai từ trên xuống dưới 50–100 lần mỗi buổi tối trước khi ngủ: kích thích toàn diện các nhĩ huyệt, tăng tuần hoàn, an thần hiệu quả.</li>
  <li>Bấm mạnh nhẹ nhịp nhàng vào dái tai (ear lobe) 1–2 phút — vùng này tương ứng với mặt và não bộ trong bản đồ nhĩ huyệt, giúp tỉnh táo và thư giãn.</li>
  <li>Phối hợp nhĩ châm với hít thở sâu bụng 4–7–8 (hít vào 4 nhịp, nín 7 nhịp, thở ra 8 nhịp) để tăng cường tác dụng kích hoạt phó giao cảm.</li>
  <li>Kiên trì thực hành mỗi ngày 2 lần (sáng và tối) trong 2–4 tuần để thấy rõ kết quả giảm stress và cải thiện giấc ngủ.</li>
</ul>

<div class="art-cta-box">
  <p>Nhĩ châm là liệu pháp đơn giản, an toàn nhưng cần được biện chứng đúng thể bệnh để chọn nhĩ huyệt phù hợp. Nếu bạn đang bị stress kéo dài, lo âu, mất ngủ hoặc mệt mỏi thần kinh, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám và thực hiện nhĩ châm kết hợp bấm huyệt an thần. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p>
</div>
  `
},
{
    id: 74,
    slug: "suy-nhuoc-than-kinh-theo-yhct",
    date: "2026-07-07",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Suy nhược thần kinh theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Y học cổ truyền lý giải suy nhược thần kinh qua sự mất cân bằng giữa tâm – thận – tỳ, từ đó xây dựng phác đồ dưỡng tâm an thần, kiện tỳ bổ thận giúp phục hồi hệ thần kinh bền vững hơn thuốc an thần Tây y.",
    readTime: 7,
    content: `
<h2>Tổng quan về suy nhược thần kinh theo Y học cổ truyền</h2>
<p>Suy nhược thần kinh (neurasthenia) là trạng thái mệt mỏi thần kinh kéo dài, biểu hiện qua mất ngủ, đau đầu, hay quên, mất tập trung, lo âu, dễ cáu gắt và mệt mỏi cả thể chất lẫn tinh thần. Theo Y học cổ truyền (YHCT), hội chứng này không có tên gọi riêng mà được mô tả trong các chứng <em>Thất miên</em> (mất ngủ), <em>Kiện vong</em> (hay quên), <em>Uất chứng</em> (lo âu, trầm cảm), <em>Hư lao</em> (suy nhược thể chất và tinh thần).</p>
<p>Cơ chế bệnh sinh theo YHCT: Tâm tàng thần — chủ trì mọi hoạt động tinh thần và tư duy. Thận tàng chí — là gốc rễ của sức sống và trí lực. Tỳ sinh hóa khí huyết — nuôi dưỡng tâm thần. Khi ba tạng này suy yếu do làm việc quá sức, lo nghĩ quá nhiều, cảm xúc tổn thương kéo dài, hoặc thể chất vốn yếu, khí huyết không đủ nuôi tâm thần, dẫn đến suy nhược thần kinh.</p>

<h2>Phân thể bệnh suy nhược thần kinh theo Y học cổ truyền</h2>
<p>Biện chứng luận trị suy nhược thần kinh thường gặp các thể sau:</p>
<ul>
<li><strong>Thể tâm tỳ lưỡng hư (thường gặp nhất):</strong> Mất ngủ khó vào giấc, ngủ hay mơ, hay quên, hồi hộp trống ngực, mệt mỏi, ăn kém, bụng đầy, da xanh, sắc mặt vàng úa. Lưỡi nhạt, rêu mỏng trắng, mạch tế nhược. Nguyên nhân thường do lao tâm khổ tứ, ăn uống thất điều làm tỳ hư không sinh huyết được, tâm thần không được nuôi dưỡng.</li>
<li><strong>Thể tâm thận bất giao:</strong> Mất ngủ nặng, khó vào giấc hoặc thức dậy sớm không ngủ lại được, tâm phiền bồn chồn, lòng bàn tay chân nóng, đổ mồ hôi trộm ban đêm, tiếng ù tai, đau lưng mỏi gối, di tinh (nam giới). Lưỡi đỏ ít rêu, mạch tế sác. Do thận âm suy không nuôi dưỡng được tâm hỏa, tâm hỏa vượng bốc lên gây rối loạn giấc ngủ.</li>
<li><strong>Thể can khí uất kết:</strong> Lo âu, dễ cáu gắt, tức ngực thở dài, ăn kém, bụng đầy, mất ngủ hoặc ngủ không sâu, phụ nữ có thể rối loạn kinh nguyệt. Lưỡi nhạt hoặc hơi đỏ, rêu mỏng, mạch huyền. Gặp nhiều ở người chịu áp lực công việc, căng thẳng tâm lý kéo dài.</li>
<li><strong>Thể đàm hỏa nhiễu tâm:</strong> Mất ngủ kèm nóng trong người, bứt rứt khó chịu, đầu nặng, đờm nhiều, miệng đắng, buồn nôn, hay nghĩ vẩn vơ. Lưỡi đỏ rêu vàng nhớt, mạch huyền hoạt sác. Gặp ở người ăn uống nhiều chất béo ngọt, uống rượu bia, kết hợp với cảm xúc uất ức sinh đàm nhiệt.</li>
<li><strong>Thể thận âm dương lưỡng hư:</strong> Suy nhược kéo dài nhiều năm, mệt mỏi rã rời, sợ lạnh tứ chi lạnh, lưng đau gối mỏi, ngủ ít và hay mơ, trí nhớ kém rõ rệt. Lưỡi nhạt bệu, mạch trầm tế nhược. Gặp ở người lớn tuổi hoặc bệnh lâu ngày chuyển sang hư suy cả âm lẫn dương thận.</li>
</ul>

<h2>Phác đồ điều trị bằng thuốc YHCT và châm cứu</h2>
<p>Nguyên tắc điều trị theo từng thể bệnh:</p>
<ul>
<li><strong>Thể tâm tỳ lưỡng hư:</strong> Ích khí bổ huyết, dưỡng tâm an thần — dùng Quy tỳ thang (nhân sâm, hoàng kỳ, bạch truật, phục thần, toan táo nhân, long nhãn nhục, đương quy, viễn chí). Châm bổ: Tâm du (BL15), Tỳ du (BL20), Túc tam lý (ST36), Tam âm giao (SP6), Thần môn (HT7).</li>
<li><strong>Thể tâm thận bất giao:</strong> Tư âm giáng hỏa, giao thông tâm thận — dùng Hoàng liên a giao thang hoặc Thiên vương bổ tâm đan. Châm: Tâm du (BL15), Thận du (BL23), Thần môn (HT7), Thái khê (KD3), Tam âm giao (SP6), Nội quan (PC6).</li>
<li><strong>Thể can khí uất kết:</strong> Sơ can giải uất, dưỡng huyết an thần — dùng Tiêu dao tán gia thêm toan táo nhân, bá tử nhân. Châm: Thái xung (LV3), Nội quan (PC6), Kỳ môn (LV14), Thần môn (HT7), Dương lăng tuyền (GB34).</li>
<li><strong>Thể đàm hỏa nhiễu tâm:</strong> Thanh hóa đàm nhiệt, trấn tâm an thần — dùng Hoàng liên ôn đởm thang. Châm tả: Phong long (ST40), Nội đình (ST44), Đại lăng (PC7), Thần môn (HT7).</li>
<li><strong>Thể thận âm dương lưỡng hư:</strong> Âm dương song bổ, dưỡng tâm an thần — dùng Địa hoàng ẩm tử gia giảm hoặc Thận khí hoàn phối hợp với thuốc dưỡng tâm. Châm cứu kết hợp bổ Thận du, Quan nguyên (CV4), Khí hải (CV6).</li>
</ul>

<h2>Phương pháp không dùng thuốc hỗ trợ phục hồi thần kinh</h2>
<p>Ngoài thuốc và châm cứu, các liệu pháp không dùng thuốc sau đây rất quan trọng trong phục hồi suy nhược thần kinh:</p>
<ul>
<li><strong>Nhĩ châm an thần:</strong> Dán hạt từ hoặc châm các điểm Tâm, Thần môn nhĩ, Dưới vỏ não, Nội tiết trên loa tai — duy trì kích thích liên tục 24 giờ, mỗi ngày bấm nhẹ 3–4 lần.</li>
<li><strong>Xoa bóp bấm huyệt vùng đầu:</strong> Bấm Bách hội (GV20), An miên (ngoài kinh), Thái dương, Phong trì (GB20) mỗi tối trước khi ngủ 10–15 phút.</li>
<li><strong>Thiền định và thở bụng:</strong> Thực hành 15–20 phút mỗi sáng giúp điều hòa hệ thần kinh tự chủ, giảm cortisol.</li>
<li><strong>Ngũ cầm hí hoặc Bát đoạn cẩm:</strong> Tập nhẹ nhàng 20–30 phút mỗi sáng giúp điều hòa khí huyết, an thần.</li>
</ul>

<h2>Lưu ý trong điều trị và phòng ngừa tái phát</h2>
<ul>
<li>Điều chỉnh lối sống trước tiên: ngủ đúng giờ, ngủ trước 23:00, không dùng điện thoại sau 21:00.</li>
<li>Hạn chế cà phê, rượu bia, đồ ăn cay nóng vì dễ sinh đàm nhiệt kích thích thần kinh.</li>
<li>Ăn tăng cường thực phẩm dưỡng tâm an thần: hạt sen, long nhãn, táo đỏ, tâm sen, mộc nhĩ đen.</li>
<li>Quản lý công việc hợp lý, không làm việc quá sức kéo dài — "Lao thương khí, lo thương tỳ" theo YHCT.</li>
<li>Liệu trình điều trị thường 4–8 tuần, kiên nhẫn và đều đặn là chìa khóa thành công.</li>
</ul>
<div class="art-cta-box"><p>Nếu bạn đang bị suy nhược thần kinh, mất ngủ kéo dài, lo âu hay trí nhớ giảm sút và muốn được điều trị theo hướng tự nhiên, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> biện chứng phân thể, châm cứu và tư vấn bài thuốc dưỡng tâm an thần phù hợp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
{
    id: 75,
    slug: "laser-cham-khong-dau-yhct",
    date: "2026-07-07",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Laser châm không đau: Phương pháp châm cứu hiện đại không dùng thuốc theo Y học cổ truyền",
    excerpt: "Laser châm sử dụng chùm tia laser năng lượng thấp kích thích huyệt vị thay cho kim châm, không đau, không xâm lấn, đặc biệt phù hợp cho trẻ em và người sợ kim, mang lại hiệu quả điều trị tương đương châm cứu truyền thống.",
    readTime: 5,
    content: `
<h2>Laser châm là gì? Cơ chế tác động theo Y học cổ truyền</h2>
<p>Laser châm (laser acupuncture) là phương pháp sử dụng chùm tia laser năng lượng thấp (low-level laser therapy — LLLT) chiếu trực tiếp vào các huyệt vị trên kinh lạc, thay thế cho kim châm truyền thống. Tia laser dùng trong châm cứu thường có công suất 5–50 mW, bước sóng 630–980 nm (ánh sáng đỏ hoặc hồng ngoại gần), thời gian chiếu 10–60 giây mỗi huyệt.</p>
<p>Theo Y học cổ truyền, huyệt vị là những điểm tập trung khí huyết trên đường kinh lạc. Tác động cơ học của kim châm được thay thế bằng năng lượng photon của tia laser, tạo ra phản ứng sinh hóa tại chỗ: giải phóng endorphin, serotonin và các chất dẫn truyền thần kinh, kích hoạt hệ miễn dịch tại chỗ, và điều hòa dẫn truyền tín hiệu thần kinh — từ đó đạt được cùng mục tiêu thông kinh hoạt lạc, điều hòa khí huyết như châm cứu truyền thống.</p>

<h2>Ưu điểm và chỉ định của laser châm</h2>
<p>So với châm cứu kim truyền thống, laser châm có những ưu điểm đặc biệt:</p>
<ul>
<li><strong>Không đau, không xâm lấn:</strong> Tuyệt đối không gây đau, không chảy máu, không có nguy cơ nhiễm trùng hay gãy kim — lý tưởng cho trẻ em, người cao tuổi, người rối loạn đông máu hoặc đang dùng thuốc chống đông.</li>
<li><strong>An toàn cao:</strong> Không có tác dụng phụ toàn thân, không gây bầm tím hay chảy máu dưới da.</li>
<li><strong>Phù hợp người sợ kim:</strong> Bệnh nhân belonephobia (sợ kim tiêm/kim châm) có thể được điều trị hiệu quả mà không lo sợ.</li>
<li><strong>Kết hợp với hồng ngoại:</strong> Tia laser hồng ngoại ngoài kích thích huyệt còn có tác dụng ôn thông kinh lạc, khu phong tán hàn tương tự cứu ngải.</li>
</ul>
<p>Các chỉ định phổ biến của laser châm tại phòng khám YHCT:</p>
<ul>
<li>Đau xương khớp mạn tính: thoái hóa cột sống, đau vai gáy, đau thần kinh tọa</li>
<li>Liệt mặt ngoại biên (Bell's palsy), liệt nhẹ sau tai biến</li>
<li>Viêm mũi dị ứng, viêm xoang mạn tính</li>
<li>Suy nhược thần kinh, mất ngủ, lo âu</li>
<li>Bại liệt, chậm phát triển ở trẻ em</li>
<li>Đau sau zona thần kinh</li>
<li>Điều trị ngoài da: sẹo lồi, nám da, kích thích mọc tóc</li>
</ul>

<h2>Quy trình thực hiện laser châm tại phòng khám</h2>
<p>Một buổi laser châm điển hình diễn ra như sau:</p>
<ul>
<li><strong>Thăm khám và biện chứng:</strong> Thầy thuốc thăm khám, biện chứng phân thể bệnh, lựa chọn phương huyệt phù hợp (thường 8–15 huyệt/buổi tùy bệnh).</li>
<li><strong>Chuẩn bị bệnh nhân:</strong> Bệnh nhân ngồi hoặc nằm thoải mái, bộc lộ vùng huyệt vị cần điều trị. Lau sạch da bằng bông cồn.</li>
<li><strong>Chiếu laser:</strong> Đầu phát laser đặt thẳng góc, cách da 1–2 mm hoặc tiếp xúc nhẹ. Mỗi huyệt chiếu 15–30 giây (tương đương 1–2 J/cm² năng lượng). Bệnh nhân chỉ cảm thấy ấm nhẹ hoặc không cảm giác gì.</li>
<li><strong>Thời gian một buổi:</strong> 15–25 phút. Liệu trình thường 10–20 buổi, 5 buổi/tuần hoặc theo chỉ định.</li>
</ul>

<h2>Laser châm cho trẻ em — Ứng dụng đặc biệt</h2>
<p>Trẻ em sợ kim châm là thách thức lớn trong nhi khoa YHCT. Laser châm giải quyết hoàn toàn vấn đề này:</p>
<ul>
<li><strong>Chậm nói, tự kỷ nhẹ:</strong> Châm các huyệt vùng đầu (Bách hội, Tứ thần thông, Thái dương) bằng laser kích thích phát triển ngôn ngữ và nhận thức.</li>
<li><strong>Đái dầm, tiêu chảy mạn:</strong> Laser châm huyệt Quan nguyên, Trung cực, Túc tam lý an toàn và hiệu quả cho trẻ.</li>
<li><strong>Viêm mũi dị ứng ở trẻ:</strong> Laser chiếu huyệt Nghinh hương, Hợp cốc, Phế du thay thế hoàn toàn kim châm.</li>
<li><strong>Trẻ bại não nhẹ, chậm vận động:</strong> Laser châm toàn thân kết hợp phục hồi chức năng cho hiệu quả cải thiện rõ sau 1–2 tháng điều trị.</li>
</ul>

<h2>Chống chỉ định và lưu ý khi sử dụng laser châm</h2>
<ul>
<li>Không chiếu laser trực tiếp vào mắt — bệnh nhân và thầy thuốc đều cần đeo kính bảo hộ.</li>
<li>Không chiếu vào vùng ung thư đang tiến triển, vùng da đang nhiễm trùng cấp tính.</li>
<li>Phụ nữ có thai: thận trọng, không chiếu laser vào vùng bụng và các huyệt có tác dụng lợi khí hạ thai (Hợp cốc, Tam âm giao).</li>
<li>Người đang dùng thuốc cảm quang (photosensitizing drugs) cần báo bác sĩ trước khi điều trị.</li>
</ul>
<div class="art-cta-box"><p>Phòng Khám <strong>YHCT Tâm Đức</strong> trang bị thiết bị laser châm hiện đại, đặc biệt phù hợp cho trẻ em và bệnh nhân sợ kim. <strong>BS. Nguyễn Đức Tâm</strong> sẽ thăm khám, biện chứng và lựa chọn phương huyệt tối ưu cho từng bệnh nhân. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
{
    id: 76,
    slug: "luc-quan-tu-thang-kien-ty-ich-khi",
    date: "2026-07-07",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Lục quân tử thang — Bài thuốc kiện tỳ ích khí, hóa đàm kinh điển của Y học cổ truyền",
    excerpt: "Lục quân tử thang là bài thuốc nền tảng trong điều trị tỳ vị hư nhược kèm đàm thấp, được xây dựng từ Tứ quân tử thang bổ sung trần bì và bán hạ, vừa bổ khí vừa lý khí hóa đàm, ứng dụng rộng rãi trong nhiều bệnh lý tiêu hóa và hô hấp.",
    readTime: 6,
    content: `
<h2>Nguồn gốc và lịch sử của Lục quân tử thang</h2>
<p>Lục quân tử thang (六君子湯, Liù Jūnzǐ Tāng) lần đầu được ghi chép trong sách <em>Y học chánh truyền</em> (Y Xue Zheng Zhuan) của Ngu Đoàn thời nhà Minh (thế kỷ 15–16). Bài thuốc được xây dựng dựa trên bài gốc <em>Tứ quân tử thang</em> (nhân sâm, bạch truật, phục linh, cam thảo — bổ khí kiện tỳ) với việc bổ sung thêm hai vị <em>trần bì</em> (lý khí táo thấp) và <em>bán hạ</em> (táo thấp hóa đàm giáng nghịch), tạo thành "lục quân" — sáu vị thuốc hoạt động phối hợp như sáu người lính tinh nhuệ.</p>
<p>Trong lịch sử Đông y, Lục quân tử thang được xem là "bài thuốc kiện tỳ hóa đàm căn bản nhất", là nền tảng để gia giảm ra hàng chục biến phương ứng dụng trong điều trị bệnh đường tiêu hóa, hô hấp, và nhiều bệnh nội khoa khác.</p>

<h2>Thành phần và vai trò từng vị thuốc</h2>
<p>Bài thuốc gồm 6 vị chính với liều chuẩn cho người trưởng thành (có thể gia giảm theo biện chứng):</p>
<ul>
<li><strong>Nhân sâm (Panax ginseng) — 9g:</strong> Quân dược — đại bổ nguyên khí, kiện tỳ ích phế. Là trụ cột bổ khí của cả bài. Có thể thay bằng đảng sâm (15–20g) hoặc thái tử sâm (15g) tùy theo mức độ hư và kinh tế bệnh nhân.</li>
<li><strong>Bạch truật (Atractylodes macrocephala) — 9g:</strong> Thần dược — kiện tỳ táo thấp, giúp tỳ vị vận hóa tốt hơn, phối hợp với nhân sâm tăng tác dụng bổ khí.</li>
<li><strong>Phục linh (Poria cocos) — 9g:</strong> Tá dược — lợi thủy thẩm thấp, kiện tỳ an thần. Giúp trừ thấp trệ, hỗ trợ bạch truật táo thấp.</li>
<li><strong>Cam thảo chích (Glycyrrhiza uralensis) — 6g:</strong> Sứ dược — ích khí hòa trung, điều hòa các vị thuốc. Làm giảm độc tính của bán hạ và phối hợp toàn bài.</li>
<li><strong>Trần bì (Citrus reticulata) — 6g:</strong> Lý khí táo thấp, kiện tỳ hóa đàm. Giúp khí vị dạ dày lưu thông, giảm đầy trướng, khai vị ăn ngon. Đây là vị thêm thứ nhất so với Tứ quân.</li>
<li><strong>Bán hạ chế (Pinellia ternata) — 9g:</strong> Táo thấp hóa đàm, giáng nghịch chỉ ẩu. Giúp tiêu đàm thấp tích tụ trong tỳ vị, giảm buồn nôn và nôn do tỳ vị hư hàn. Đây là vị thêm thứ hai so với Tứ quân.</li>
</ul>
<p><em>Cách dùng:</em> Sắc với 600ml nước, còn 200ml, uống ấm trước bữa ăn 30 phút, chia 2 lần/ngày. Hoặc dùng dạng cốm, viên theo chỉ định thầy thuốc.</p>

<h2>Cơ chế tác dụng và chỉ định lâm sàng</h2>
<p>Lục quân tử thang có tác dụng tổng hợp: <em>ích khí kiện tỳ</em> (bổ khí tỳ vị) + <em>táo thấp hóa đàm</em> (trừ đàm thấp). Chỉ định khi có đủ hai yếu tố: tỳ vị khí hư VÀ đàm thấp nội trở.</p>
<p>Biểu hiện lâm sàng phù hợp dùng Lục quân tử thang:</p>
<ul>
<li>Ăn ít, chán ăn, bụng đầy trướng sau ăn, đại tiện lỏng nát hoặc phân sệt</li>
<li>Buồn nôn hoặc nôn nhẹ, đặc biệt buổi sáng hoặc khi đói</li>
<li>Mệt mỏi, tứ chi nặng nề, hay buồn ngủ sau ăn</li>
<li>Đờm nhiều, loãng trong, dễ khạc nhổ; ho có đờm trắng trong</li>
<li>Mặt xanh vàng hoặc trắng bệch, da kém tươi sáng</li>
<li>Lưỡi nhạt bệu, có hằn răng, rêu trắng nhớt; mạch hoãn nhược</li>
</ul>
<p>Các bệnh lý ứng dụng thực tế:</p>
<ul>
<li>Viêm dạ dày mạn tính thể tỳ vị hư hàn, hội chứng ruột kích thích thể tỳ hư</li>
<li>Ho mạn tính do đàm thấp, viêm phế quản mạn thể hàn đàm</li>
<li>Thai nghén buồn nôn nặng (ốm nghén) do tỳ vị hư hàn</li>
<li>Suy nhược sau bệnh nặng, sau phẫu thuật, hóa xạ trị</li>
<li>Phụ nữ khí hư (huyết trắng) nhiều, loãng, do tỳ hư thấp trọng</li>
</ul>

<h2>Các biến phương thông dụng của Lục quân tử thang</h2>
<ul>
<li><strong>Hương sa lục quân tử thang:</strong> Thêm mộc hương + sa nhân → tăng lý khí chỉ thống, dùng khi đau bụng, đầy trướng nhiều hơn.</li>
<li><strong>Lục quân tử thang gia vị chữa ho:</strong> Thêm hạnh nhân, cát cánh, tử uyển → kiện tỳ hóa đàm chỉ ho, dùng trong viêm phế quản mạn thể đàm thấp.</li>
<li><strong>Lục quân tử thang gia hoàng kỳ:</strong> Tăng cường bổ khí cố biểu, dùng sau phẫu thuật hoặc hóa trị liệu để phục hồi sức đề kháng.</li>
</ul>

<h2>Chống chỉ định và lưu ý khi sử dụng</h2>
<ul>
<li><strong>Không dùng khi:</strong> Âm hư nội nhiệt (lưỡi đỏ, mạch sác, khô miệng, nóng trong), thực nhiệt ở tỳ vị (lưỡi đỏ rêu vàng, miệng hôi, táo bón), hoặc đàm nhiệt (đờm vàng đặc, ho có đờm hôi).</li>
<li><strong>Thận trọng:</strong> Cao huyết áp cần hỏi thầy thuốc trước khi dùng nhân sâm. Phụ nữ có thai dùng cần có chỉ định thầy thuốc (bán hạ có tính táo, cần chế đúng).</li>
<li><strong>Bán hạ chế:</strong> Chỉ dùng bán hạ đã qua chế biến (bán hạ chế khương hoặc bán hạ chế phàn) để loại bỏ độc tính, tuyệt đối không dùng bán hạ sống.</li>
<li>Liệu trình điều trị thường 2–4 tuần, cần tái khám để gia giảm phù hợp với sự thay đổi biện chứng.</li>
</ul>
<div class="art-cta-box"><p>Để được biện chứng chính xác và sử dụng Lục quân tử thang đúng thể bệnh, an toàn và hiệu quả, hãy đến thăm khám tại <strong>Phòng Khám YHCT Tâm Đức</strong>. <strong>BS. Nguyễn Đức Tâm</strong> sẽ tư vấn bài thuốc phù hợp, gia giảm theo từng cơ địa. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ: <strong>0973 710 237</strong>.</p></div>
  `
  },
{
    id: 77,
    slug: "duong-sinh-mua-xuan-yhct",
    date: "2026-07-07",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Dưỡng sinh theo mùa xuân: Bí quyết bảo vệ sức khỏe theo Y học cổ truyền",
    excerpt: "Mùa xuân là mùa khí dương sinh phát, can khí vượng — Y học cổ truyền khuyến cáo dưỡng dương, sơ can, thư giãn tinh thần và điều chỉnh chế độ ăn uống để thuận theo quy luật thiên nhiên, phòng ngừa bệnh xuân hiệu quả.",
    readTime: 5,
    content: `
<h2>Mùa xuân theo quan điểm Y học cổ truyền</h2>
<p>Trong lý thuyết thiên nhân tương ứng của Y học cổ truyền (YHCT), mùa xuân ứng với hành Mộc, tạng Can (gan-mật), màu xanh, vị chua và phương Đông. Mùa xuân là thời điểm khí dương bắt đầu sinh phát, vạn vật nảy mầm, năng lượng trời đất đang vươn lên theo chiều dọc (thăng). Con người cũng cần thuận theo xu thế đó: vươn dậy, hoạt động, mở rộng, khai thông.</p>
<p>Sách <em>Hoàng Đế Nội Kinh - Tố Vấn</em> viết: "Mùa xuân là mùa của sự sinh phát, vạn vật đều nảy nở. Người ta nên thức sớm, đi bách bộ thư thái, mặc quần áo thoải mái, để chí như vươn lên. Đây là đạo dưỡng sinh mùa xuân, thuận theo khí sinh phát." Nếu trái với quy luật này — ngủ quá nhiều, ít vận động, ăn uống chất béo nặng nề, tinh thần uất ức — sẽ làm can khí uất kết, dẫn đến các bệnh mùa hè và suy yếu dần.</p>

<h2>Các bệnh thường gặp mùa xuân và cơ chế theo YHCT</h2>
<p>Mùa xuân thường xuyên ẩm ướt, nhiệt độ dao động, gió xuân (phong tà) mạnh, tạo điều kiện cho nhiều bệnh phát sinh:</p>
<ul>
<li><strong>Cảm cúm mùa xuân (phong nhiệt cảm mạo):</strong> Gió xuân mang phong nhiệt xâm phạm phế vệ gây sốt, đau họng, ho khan, chảy mũi vàng. Khác với cảm lạnh mùa đông (phong hàn).</li>
<li><strong>Viêm mũi dị ứng bùng phát:</strong> Phấn hoa và nấm mốc mùa xuân kích thích, kết hợp với phế khí hư sẵn có làm bùng phát triệu chứng hắt hơi, chảy mũi nước.</li>
<li><strong>Bệnh da liễu (mề đay, chàm):</strong> Phong tà xâm phạm cơ biểu, can huyết hư không nuôi dưỡng được bì phu.</li>
<li><strong>Rối loạn cảm xúc (can khí uất kết):</strong> Mùa xuân can khí vượng, người có thể trạng can âm hư dễ bị cáu gắt, trầm cảm xuân, mất ngủ.</li>
<li><strong>Đau đầu và hoa mắt:</strong> Can dương vượng bốc lên đầu do can khí không được sơ tiết.</li>
</ul>

<h2>Nguyên tắc dưỡng sinh mùa xuân theo YHCT</h2>
<p>Dưỡng sinh mùa xuân tập trung vào ba nguyên tắc chính:</p>
<ul>
<li><strong>Dưỡng Can — sơ tiết can khí:</strong> Ăn vị chua vừa phải (dấm, chanh, sấu) để dưỡng can âm; tránh giận dữ vì "thịnh nộ thương can"; ngủ đủ giấc trước 23:00 khi can huyết được hồi phục; vận động nhẹ nhàng để can khí lưu thông.</li>
<li><strong>Dưỡng dương — không tiêu hao dương khí non trẻ:</strong> Mặc ấm ngực và lưng (không để hở kể cả trời ấm ban ngày vì sáng sớm và tối vẫn lạnh); không tắm nước lạnh đột ngột; tránh làm việc kiệt sức.</li>
<li><strong>Phòng phong — bảo vệ tấu lý:</strong> Tránh gió lùa trực tiếp; mặc thêm lớp ngoài khi ra đường buổi sáng sớm; không đứng gió sau khi vừa mồ hôi.</li>
</ul>

<h2>Chế độ ăn uống dưỡng sinh mùa xuân</h2>
<ul>
<li><strong>Tăng vị chua vừa phải:</strong> Chanh, dấm, me, sấu, táo chua — giúp dưỡng can âm, thư giãn can cân.</li>
<li><strong>Ăn rau xanh thêm vào (màu xanh ứng với mộc — can):</strong> Rau cải, rau muống, súp lơ xanh, lá hẹ — thanh nhiệt, lợi gan mật.</li>
<li><strong>Hạn chế vị cay nồng quá mức:</strong> Vị cay thuộc Phế (hành Kim khắc Mộc), ăn quá nhiều tiêu, ớt, tỏi sẽ làm can khí bị ức chế.</li>
<li><strong>Thực phẩm dưỡng can:</strong> Kỷ tử (câu kỷ), long nhãn, hạt dẻ, lá dâu, hoa cúc, gan lợn (dĩ tạng bổ tạng).</li>
<li><strong>Uống trà xuân:</strong> Trà hoa cúc + kỷ tử để bình can minh mục; trà hoa nhài (mạt lị) sơ can giải uất; trà gừng nhỏ lửa vào buổi sáng để ôn trung tán hàn.</li>
<li><strong>Hạn chế đồ sống lạnh, thức ăn tanh hàn:</strong> Gỏi sống, kem, nước đá — hàn thấp tổn thương tỳ vị.</li>
</ul>

<h2>Vận động và thư giãn tinh thần mùa xuân</h2>
<ul>
<li><strong>Thức sớm đi bách bộ:</strong> Sáng dậy sớm (6:00–7:00), đi bộ 20–30 phút trong công viên, hít thở khí xuân trong lành — đây là lời khuyên trong Nội Kinh cho mùa xuân.</li>
<li><strong>Khí công — Bát đoạn cẩm hoặc Thái cực quyền:</strong> Những bài tập chậm nhẹ, hô hấp sâu giúp khí dương sinh phát thuận chiều.</li>
<li><strong>Tâm trạng dương quan, tích cực:</strong> "Chí phải như mầm cây vươn lên" — lập kế hoạch, đặt mục tiêu mới, tiếp xúc thiên nhiên, tránh buồn rầu chán nản.</li>
<li><strong>Châm cứu phòng bệnh xuân:</strong> Cứu huyệt Túc tam lý (ST36) mỗi ngày hoặc 3 lần/tuần để tăng cường khí tỳ vị, nâng cao miễn dịch.</li>
</ul>
<div class="art-cta-box"><p>Để được tư vấn cá nhân hóa về dưỡng sinh mùa xuân phù hợp với thể trạng, hoặc điều trị các bệnh mùa xuân như cảm cúm, viêm mũi dị ứng, can khí uất kết, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong>. <strong>BS. Nguyễn Đức Tâm</strong> khám và tư vấn chi tiết từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
{
    id: 78,
    slug: "phuong-huyet-dieu-tri-gout-cap",
    date: "2026-07-07",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị Gout cấp theo Y học cổ truyền",
    excerpt: "Châm cứu điều trị cơn gout cấp theo Y học cổ truyền tập trung vào thanh nhiệt trừ thấp, thông lạc chỉ thống qua các huyệt tại chỗ và xa huyệt, giúp giảm đau nhanh và rút ngắn thời gian cơn viêm khớp cấp.",
    readTime: 6,
    content: `
<h2>Gout cấp dưới góc nhìn Y học cổ truyền</h2>
<p>Bệnh Gout (thống phong) trong Y học cổ truyền được xếp vào phạm trù <em>Thống phong</em> hoặc <em>Lịch tiết phong</em> — chứng đau khớp do phong hàn thấp nhiệt xâm phạm kinh lạc. Cơn gout cấp tương ứng với thể <em>phong thấp nhiệt tý</em>: khớp đột ngột sưng đỏ, nóng, đau dữ dội, thường xảy ra vào ban đêm hoặc rạng sáng.</p>
<p>Cơ chế bệnh sinh theo YHCT: Ăn uống nhiều đồ béo ngọt, rượu bia (cao lương mỹ vị) làm tỳ vị vận hóa kém, sinh đàm trọc nội ứ. Trọc âm tích tụ tại khớp (thường là ngón chân cái, cổ chân, gối), kết hợp với phong nhiệt thấp tà xâm phạm tạo thành thấp nhiệt tý — biểu hiện là sưng đỏ nóng đau dữ dội. Acid uric máu tăng cao trong Tây y tương ứng với "trọc âm" trong YHCT.</p>

<h2>Nguyên tắc lựa chọn huyệt vị trong cơn gout cấp</h2>
<p>Nguyên tắc: <strong>Thanh nhiệt trừ thấp — thông lạc chỉ thống</strong>. Kết hợp:</p>
<ul>
<li><strong>Huyệt tại chỗ (a thị huyệt và huyệt cục bộ):</strong> Tác động trực tiếp vào vùng khớp viêm để giảm sưng, thoát nhiệt.</li>
<li><strong>Huyệt xa (thủ túc kinh huyệt):</strong> Thanh nhiệt toàn thân, trừ thấp, thông kinh lạc qua tứ chi.</li>
<li><strong>Phép châm:</strong> Châm tả hoặc phép bình bổ bình tả trong cơn cấp; không cứu ngải trong giai đoạn cấp vì "hỏa bổ hỏa" sẽ làm thêm nóng khớp.</li>
</ul>

<h2>Phương huyệt điều trị Gout cấp — vùng ngón chân và bàn chân</h2>
<p>Đây là vị trí gout tấn công phổ biến nhất (ngón chân cái, khớp MTP). Phương huyệt chính:</p>
<ul>
<li><strong>Thái xung (LV3 — Can 3):</strong> Vị trí: chỗ lõm phía sau kẽ ngón chân 1–2, trên mu bàn chân. Tác dụng: sơ can lý khí, thanh can nhiệt, thông lạc chỉ thống vùng ngón chân cái — huyệt nguyên của kinh Can, kinh Can đi qua ngón chân cái.</li>
<li><strong>Nội đình (ST44 — Vị 44):</strong> Vị trí: kẽ ngón chân 2–3, phía mu bàn chân. Tác dụng: thanh nhiệt tả hỏa mạnh nhất của kinh Vị — huyệt vinh thuộc hỏa, dùng để thanh nhiệt trừ thấp ở các khớp bàn-ngón chân.</li>
<li><strong>Hành gian (LV2 — Can 2):</strong> Vị trí: kẽ ngón chân 1–2, phía mu bàn chân, gần mép ngón. Tác dụng: thanh can hỏa, lương huyết, phối hợp với Thái xung tăng tác dụng thanh nhiệt vùng ngón chân cái.</li>
<li><strong>Công tôn (SP4 — Tỳ 4):</strong> Vị trí: bờ trong bàn chân, chỗ lõm phía sau đầu đốt bàn ngón 1. Tác dụng: kiện tỳ trừ thấp, thông lạc — huyệt lạc của kinh Tỳ, ảnh hưởng tốt lên chức năng vận hóa của tỳ, giúp trừ trọc âm.</li>
</ul>

<h2>Phương huyệt điều trị Gout cấp vùng cổ chân và gối</h2>
<ul>
<li><strong>Côn lôn (BL60 — Bàng quang 60):</strong> Vị trí: chỗ lõm giữa mắt cá ngoài và gân Achilles. Tác dụng: thông lạc chỉ thống vùng cổ chân, khu phong tán hàn — dùng khi gout ảnh hưởng khớp cổ chân ngoài.</li>
<li><strong>Khâu khư (GB40 — Đởm 40):</strong> Vị trí: chỗ lõm trước và dưới mắt cá ngoài. Tác dụng: sơ lợi đởm, thông lạc vùng cổ chân ngoài và bàn chân.</li>
<li><strong>Dương lăng tuyền (GB34 — Đởm 34):</strong> Vị trí: chỗ lõm trước và dưới chỏm xương mác. Tác dụng: lợi đởm thấp, thư cân hoạt lạc — huyệt hội của cân, dùng khi gout ảnh hưởng khớp gối; tăng tác dụng thanh nhiệt trừ thấp toàn thân.</li>
<li><strong>Huyết hải (SP10 — Tỳ 10):</strong> Vị trí: mặt trong đùi, 2 thốn trên bờ trên xương bánh chè. Tác dụng: lương huyết hoạt huyết, trừ thấp nhiệt — giúp giảm viêm và giảm ứ trọc tại khớp.</li>
</ul>

<h2>Huyệt xa toàn thân hỗ trợ thanh nhiệt và trừ thấp</h2>
<ul>
<li><strong>Hợp cốc (LI4 — Đại tràng 4):</strong> Vị trí: mu bàn tay, điểm giữa xương đốt bàn 1–2. Tác dụng: thanh nhiệt giải biểu, hành khí hoạt huyết — "diện khẩu Hợp cốc thâu" — giảm đau toàn thân và thanh nhiệt.</li>
<li><strong>Âm lăng tuyền (SP9 — Tỳ 9):</strong> Vị trí: chỗ lõm dưới lồi cầu trong xương chày, mặt trong cẳng chân. Tác dụng: kiện tỳ trừ thấp mạnh nhất — huyệt hội thủy của kinh Tỳ. Dùng để trừ thấp trọc toàn thân, hỗ trợ bài tiết acid uric qua thận.</li>
<li><strong>Tam âm giao (SP6 — Tỳ 6):</strong> Vị trí: mặt trong cẳng chân, 3 thốn trên mắt cá trong. Tác dụng: điều hòa tỳ-can-thận, hoạt huyết thông lạc — huyệt giao hội ba kinh âm ở chân.</li>
</ul>

<h2>Liệu trình và kết hợp với điều trị Tây y trong cơn cấp</h2>
<p>Trong cơn gout cấp dữ dội, nên kết hợp YHCT với Tây y:</p>
<ul>
<li>Giai đoạn cấp (ngày 1–3): Tây y kiểm soát đau bằng colchicine hoặc NSAIDs; châm cứu YHCT 1 lần/ngày hỗ trợ giảm đau nhanh hơn, rút ngắn thời gian viêm.</li>
<li>Sau cơn cấp (ngày 4 trở đi): Giảm dần thuốc Tây, tăng cường YHCT — châm cứu 3–5 lần/tuần + thuốc YHCT thể thấp nhiệt (Long đởm tả can thang, Tứ diệu thang) để phòng tái phát.</li>
<li>Giữa các cơn: Châm cứu 2 lần/tuần phòng ngừa, uống thuốc kiện tỳ trừ thấp (Bình vị tán, Nhị trần thang) để giảm sản sinh trọc âm.</li>
<li>Điều chỉnh chế độ ăn: Kiêng hải sản, nội tạng, rượu bia, đậu hà lan, nấm — đây là "cao lương mỹ vị sinh thấp nhiệt" trong YHCT.</li>
</ul>
<div class="art-cta-box"><p>Nếu bạn đang bị gout tái phát thường xuyên hoặc muốn điều trị phòng ngừa gout bằng châm cứu và thuốc YHCT, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám và xây dựng phác đồ điều trị phù hợp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
{
    id: 79,
    slug: "cham-soc-da-nhay-cam-yhct",
    date: "2026-07-07",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Chăm sóc da nhạy cảm theo Y học cổ truyền: Dưỡng từ Phế và Tỳ vị",
    excerpt: "Da nhạy cảm theo YHCT là hệ quả của Phế khí hư, tỳ hư thấp nhiệt, hoặc can huyết hư không nuôi dưỡng bì phu — cần điều trị từ bên trong qua bài thuốc, châm cứu và chế độ dưỡng sinh, song song với chăm sóc da bằng thảo dược lành tính.",
    readTime: 5,
    content: `
<h2>Da nhạy cảm dưới góc nhìn Y học cổ truyền</h2>
<p>Da nhạy cảm là trạng thái da dễ bị kích ứng bởi các tác nhân bên ngoài (mỹ phẩm, thời tiết, thức ăn, căng thẳng) hoặc bên trong (rối loạn nội tiết, miễn dịch), biểu hiện qua đỏ, nóng rát, ngứa, bong tróc hoặc nổi sần nhỏ. Trong Y học cổ truyền (YHCT), da nhạy cảm không được coi là "loại da" mà là biểu hiện của sự mất cân bằng nội tạng cần được điều chỉnh từ gốc.</p>
<p>Theo nguyên lý <em>Phế chủ bì mao</em> (Phế cai quản da lông), <em>Tỳ chủ cơ nhục</em> (Tỳ nuôi dưỡng cơ bắp và da thịt), tình trạng da phụ thuộc chặt chẽ vào hai tạng Phế và Tỳ. Khi Phế khí hư, hàng rào bảo vệ da (vệ khí) yếu, da không chống được ngoại tà. Khi Tỳ hư thấp nhiệt, chất dinh dưỡng không đến nuôi da được, thấp nhiệt lại bốc ra ngoài gây kích ứng. Ngoài ra, Can huyết hư hoặc can khí uất kết cũng làm da mất đi sự nuôi dưỡng và dễ phản ứng.</p>

<h2>Phân thể da nhạy cảm theo Y học cổ truyền</h2>
<ul>
<li><strong>Thể Phế khí hư (phổ biến nhất):</strong> Da mỏng, trắng xanh, lỗ chân lông to, dễ đỏ khi nhiệt độ thay đổi. Kèm theo dễ cảm lạnh, ra mồ hôi tự nhiên, giọng nói yếu, mệt mỏi. Lưỡi nhạt, mạch nhược. Điều trị: bổ phế ích khí, củng cố vệ khí.</li>
<li><strong>Thể Tỳ hư thấp nhiệt:</strong> Da đỏ rát, dễ nổi mẩn sau khi ăn đồ cay nóng hoặc hải sản. Kèm ăn kém, bụng đầy, đại tiện không đều, rêu lưỡi vàng nhớt. Điều trị: kiện tỳ trừ thấp, thanh nhiệt lương huyết.</li>
<li><strong>Thể Can huyết hư:</strong> Da khô, ngứa từng mảng, dễ bong tróc và kích ứng khi thời tiết hanh khô. Kèm mắt mờ, móng giòn dễ gãy, phụ nữ kinh nguyệt ít màu nhạt. Lưỡi nhạt, mạch tế. Điều trị: dưỡng huyết nhu can, nhuận táo chỉ ngứa.</li>
<li><strong>Thể âm hư nội nhiệt:</strong> Da đỏ bừng từng cơn, nóng rát cục bộ, đặc biệt khi căng thẳng hoặc thức khuya. Kèm lòng bàn tay chân nóng, mất ngủ, miệng khô. Lưỡi đỏ ít rêu, mạch tế sác. Điều trị: tư âm giáng hỏa, thanh nhiệt lương huyết.</li>
</ul>

<h2>Điều trị nội — Thuốc YHCT dưỡng da từ bên trong</h2>
<p>Tùy thể bệnh, thầy thuốc YHCT sẽ kê bài thuốc phù hợp:</p>
<ul>
<li><strong>Thể Phế khí hư:</strong> Ngọc bình phong tán (hoàng kỳ, bạch truật, phòng phong) gia thêm bạch linh, ý dĩ — bổ phế ích khí, cố biểu chỉ mồ hôi, củng cố hàng rào da.</li>
<li><strong>Thể Tỳ hư thấp nhiệt:</strong> Tham linh bạch truật tán gia hoàng bá, thổ phục linh — kiện tỳ trừ thấp, thanh nhiệt giải độc.</li>
<li><strong>Thể Can huyết hư:</strong> Tứ vật thang gia thêm hà thủ ô, bạch thược, sinh địa — dưỡng huyết nhu can, nhuận da trừ ngứa.</li>
<li><strong>Thể âm hư nội nhiệt:</strong> Lục vị địa hoàng hoàn gia tri mẫu, hoàng bá (Tri bá địa hoàng hoàn) — tư âm giáng hỏa, làm mát da từ bên trong.</li>
</ul>
<p>Ngoài thuốc sắc, có thể dùng các thực phẩm dưỡng da hàng ngày: ngân nhĩ (mộc nhĩ trắng) nấu với táo đỏ và ý dĩ, uống nước hoa cúc + kỷ tử, ăn các loại hạt (hạt sen, lạc, hạt dẻ) để nuôi dưỡng da từ bên trong.</p>

<h2>Điều trị ngoại — Châm cứu và chăm sóc da bằng thảo dược</h2>
<p>Điều trị từ bên ngoài kết hợp bên trong cho hiệu quả tốt nhất:</p>
<ul>
<li><strong>Châm cứu:</strong> Hợp cốc (LI4) + Khúc trì (LI11) để thanh nhiệt giải biểu; Túc tam lý (ST36) + Tam âm giao (SP6) để bổ khí huyết dưỡng da; Phế du (BL13) + Tỳ du (BL20) để bổ phế kiện tỳ từ gốc. Liệu trình 10–15 buổi.</li>
<li><strong>Nước rửa mặt thảo dược:</strong> Nấu nước hoa cúc trắng hoặc trà xanh, để nguội, dùng rửa mặt hoặc đắp bông thấm lên da 10 phút — kháng viêm, dịu da tức thì.</li>
<li><strong>Mặt nạ yến mạch + mật ong:</strong> Yến mạch táo thấp hấp thụ bã nhờn; mật ong dưỡng âm nhuận da — thích hợp mọi thể da nhạy cảm.</li>
<li><strong>Tránh thành phần mỹ phẩm kích ứng:</strong> Cồn, hương liệu tổng hợp, paraben — những thứ này làm hao tổn vệ khí và âm tân của da theo YHCT.</li>
</ul>

<h2>Lối sống và chế độ dưỡng sinh bảo vệ da nhạy cảm</h2>
<ul>
<li>Ngủ trước 23:00 đều đặn: Giờ Tý (23:00–01:00) Can huyết hồi phục nuôi dưỡng toàn thân kể cả da.</li>
<li>Hạn chế tuyệt đối: rượu bia, đồ cay nóng, hải sản có vỏ, sôcôla, cà phê — những thứ kích thích thấp nhiệt bốc ra bì phu.</li>
<li>Quản lý căng thẳng: Can khí uất kết làm Phế kim suy, da mất vệ khí bảo vệ. Thiền, yoga, đi bộ giúp sơ can lý khí.</li>
<li>Dùng kem chống nắng nhẹ (SPF 30–50, không hương liệu) hàng ngày: nắng là "nhiệt tà" tấn công bì phu gây tổn thương dài hạn.</li>
<li>Uống đủ nước (1,5–2 lít/ngày) để nuôi dưỡng tân dịch, bảo vệ âm phận của da.</li>
</ul>
<div class="art-cta-box"><p>Da nhạy cảm dai dẳng cần được biện chứng phân thể để điều trị đúng gốc. Hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> tư vấn bài thuốc dưỡng da từ bên trong kết hợp châm cứu và hướng dẫn chăm sóc da bằng thảo dược. Phòng khám mở cửa từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 68,
    slug: "viem-gan-man-tinh-theo-yhct",
    date: "2026-07-03",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Viêm gan mạn tính theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Y học cổ truyền tiếp cận viêm gan mạn tính qua biện chứng can khí uất kết, huyết ứ, tỳ hư thấp nhiệt, từ đó xây dựng phác đồ châm cứu và dùng thuốc hỗ trợ bảo vệ tế bào gan, cải thiện chức năng gan lâu dài.",
    readTime: 7,
    content: `
<h2>Tổng quan về viêm gan mạn tính theo Y học cổ truyền</h2>
<p>Viêm gan mạn tính là tình trạng tổn thương tế bào gan kéo dài trên 6 tháng, do nhiều nguyên nhân như virus viêm gan B, C, rượu bia, thuốc độc gan, hoặc rối loạn miễn dịch. Trong Y học cổ truyền (YHCT), bệnh này không có tên gọi riêng biệt mà được quy vào các chứng <em>Hiếp thống</em> (đau vùng mạn sườn), <em>Hoàng đản</em> (vàng da), <em>Tích tụ</em> (gan lách to), <em>Cổ trướng</em> (báng bụng giai đoạn nặng) tùy theo giai đoạn và biểu hiện lâm sàng.</p>
<p>Theo lý luận Đông y, Can tàng huyết và chủ sơ tiết — điều phối sự lưu thông khí huyết toàn thân. Khi Can bị tổn thương do ngoại tà, ẩm thực thất điều, cảm xúc uất ức kéo dài, khí can không sơ tiết được sẽ dẫn đến khí trệ, huyết ứ, thấp nhiệt nội kết, dần làm suy giảm chức năng cả tỳ vị và thận.</p>

<h2>Phân thể bệnh viêm gan mạn tính theo Y học cổ truyền</h2>
<p>Biện chứng luận trị viêm gan mạn tính thường được phân thành các thể chính sau:</p>
<ul>
<li><strong>Thể can khí uất kết:</strong> Biểu hiện bằng tức ngực, đau tức mạn sườn phải, dễ cáu gắt, thở dài, ăn kém, bụng đầy. Lưỡi nhạt hoặc hơi đỏ, rêu mỏng, mạch huyền. Đây là thể hay gặp nhất ở giai đoạn sớm, khi chức năng gan còn khá, men gan chỉ tăng nhẹ.</li>
<li><strong>Thể can uất tỳ hư:</strong> Ngoài đau mạn sườn còn có mệt mỏi nhiều, ăn ít, bụng đầy sau ăn, đại tiện lỏng nát. Lưỡi nhạt bệu, rêu trắng, mạch huyền hoãn. Gặp khi bệnh đã ảnh hưởng đến chức năng tỳ vị, bệnh nhân sụt cân, albumin máu giảm.</li>
<li><strong>Thể thấp nhiệt uẩn kết:</strong> Sốt nhẹ về chiều, mệt mỏi, đau mạn sườn, vàng da nhẹ hoặc không vàng, nước tiểu vàng, miệng đắng, đại tiện phân vàng. Lưỡi đỏ, rêu vàng nhớt, mạch huyền sác. Gặp trong đợt bùng phát viêm, men gan tăng cao.</li>
<li><strong>Thể can thận âm hư:</strong> Giai đoạn bệnh kéo dài, can âm thận âm đều bị tổn hao. Biểu hiện: đau âm ỉ mạn sườn, mắt mờ, hoa mắt chóng mặt, họng khô, mất ngủ, lòng bàn tay chân nóng. Lưỡi đỏ ít rêu hoặc không rêu, mạch tế sác. Tương ứng với giai đoạn xơ hóa gan.</li>
<li><strong>Thể khí trệ huyết ứ:</strong> Bệnh lâu ngày, có u cục vùng mạn sườn (gan lách to), da và môi tối sạm, mạch lạc bụng nổi, lưỡi tím sẫm có điểm ứ huyết, mạch huyền sáp. Gặp ở giai đoạn xơ gan còn bù.</li>
</ul>

<h2>Phương pháp điều trị bằng châm cứu và thuốc YHCT</h2>
<p>Nguyên tắc điều trị theo từng thể:</p>
<ul>
<li><strong>Thể can khí uất kết:</strong> Sơ can lý khí — dùng Tiêu dao tán gia giảm (sài hồ, bạch thược, đương quy, bạch truật, phục linh, cam thảo, bạc hà, sinh khương). Châm các huyệt Kỳ môn (Can 14), Thái xung (Can 3), Nội quan (Tâm bào 6), Dương lăng tuyền (Đởm 34).</li>
<li><strong>Thể can uất tỳ hư:</strong> Sơ can kiện tỳ — dùng Tiêu dao tán kết hợp Tứ quân tử thang. Thêm huyệt Tỳ du (Bàng quang 20), Túc tam lý (Vị 36), Chương môn (Can 13).</li>
<li><strong>Thể thấp nhiệt uẩn kết:</strong> Thanh nhiệt lợi thấp, sơ can lợi đởm — dùng Long đởm tả can thang gia giảm (long đởm thảo, hoàng cầm, chi tử, trạch tả, xa tiền tử, sinh địa). Châm tả huyệt Dương lăng tuyền, Âm lăng tuyền (Tỳ 9), Nội đình (Vị 44).</li>
<li><strong>Thể can thận âm hư:</strong> Tư bổ can thận, dưỡng huyết nhu can — dùng Nhất quán tiễn (sinh địa, câu kỷ tử, đương quy, mạch đông, xuyên luyện tử) hoặc Lục vị địa hoàng hoàn gia bạch thược, mộc qua. Châm bổ huyệt Can du (Bàng quang 18), Thận du (Bàng quang 23), Tam âm giao (Tỳ 6), Thái khê (Thận 3).</li>
<li><strong>Thể khí trệ huyết ứ:</strong> Hoạt huyết hóa ứ, lý khí tiêu trưng — dùng Cách hạ trục ứ thang gia giảm. Phối huyệt Huyết hải (Tỳ 10), Cách du (Bàng quang 17), Kỳ môn (Can 14), Tam âm giao (Tỳ 6).</li>
</ul>

<h2>Một số dược liệu YHCT có tác dụng bảo vệ gan</h2>
<p>Nhiều nghiên cứu hiện đại đã xác nhận tác dụng bảo vệ tế bào gan và chống xơ hóa của các dược liệu YHCT truyền thống:</p>
<ul>
<li><strong>Nhân trần (Artemisia scoparia):</strong> Thanh nhiệt lợi thấp, lợi mật, giảm men gan ALT/AST — là dược liệu chủ đạo trong điều trị thể thấp nhiệt.</li>
<li><strong>Uất kim (Curcuma aromatica):</strong> Sơ can hành khí, lương huyết giải uất, có tác dụng chống viêm và bảo vệ tế bào gan.</li>
<li><strong>Ngũ vị tử (Schisandra chinensis):</strong> Tư âm liễm phế bổ thận, giúp hạ men gan, thường dùng trong thể can thận âm hư.</li>
<li><strong>Đan sâm (Salvia miltiorrhiza):</strong> Hoạt huyết hóa ứ, chống xơ hóa, được ứng dụng trong thể khí trệ huyết ứ.</li>
<li><strong>Bạch truật, phục linh:</strong> Kiện tỳ trừ thấp, tăng cường chức năng hấp thu, hỗ trợ albumin máu.</li>
</ul>

<h2>Kết hợp điều trị Tây y và YHCT</h2>
<p>YHCT đóng vai trò hỗ trợ song song với điều trị Tây y (thuốc kháng virus đối với viêm gan B, C; thuốc bảo vệ tế bào gan). Bệnh nhân cần xét nghiệm định kỳ HBsAg, HBeAg, HBV-DNA, men gan, siêu âm bụng theo hướng dẫn của bác sĩ chuyên khoa truyền nhiễm hoặc tiêu hóa. YHCT giúp cải thiện chất lượng sống, giảm mệt mỏi, cải thiện tiêu hóa và hỗ trợ bảo vệ chức năng gan trong quá trình điều trị lâu dài.</p>
<p>Tuyệt đối không tự ý dùng thuốc nam, thuốc đông y không rõ nguồn gốc vì nhiều dược liệu có thể gây độc gan nghiêm trọng, đặc biệt các bài thuốc chứa pyrrolizidine alkaloid.</p>

<h2>Lưu ý sinh hoạt và chế độ dưỡng sinh</h2>
<ul>
<li>Tuyệt đối không uống rượu bia — ngay cả lượng nhỏ cũng có thể đẩy nhanh xơ hóa gan.</li>
<li>Ăn đủ đạm, ưu tiên đạm thực vật và cá; hạn chế mỡ động vật, thức ăn chiên xào nhiều dầu.</li>
<li>Ngủ đủ giấc trước 23:00 — giờ Tý (23:00–01:00) là giờ can khí vận hành mạnh nhất, ngủ sâu giúp tái tạo tế bào gan.</li>
<li>Quản lý cảm xúc, tránh giận dữ và căng thẳng kéo dài vì "Thịnh nộ thương can".</li>
<li>Vận động nhẹ nhàng: đi bộ, khí công, thái cực quyền; tránh luyện tập cường độ cao gây mệt gan.</li>
</ul>
<div class="art-cta-box"><p>Nếu bạn đang mang virus viêm gan B hoặc C, hoặc được chẩn đoán viêm gan mạn tính và muốn hỗ trợ điều trị bằng Y học cổ truyền, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám, biện chứng phân thể và tư vấn phác đồ phù hợp, an toàn, kết hợp hài hòa với phác đồ Tây y. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 69,
    slug: "tam-thao-duoc-chua-dau-xuong-khop",
    date: "2026-07-03",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Tắm thảo dược chữa đau xương khớp: Phương pháp dưỡng sinh không dùng thuốc theo Y học cổ truyền",
    excerpt: "Tắm ngâm thảo dược là liệu pháp không dùng thuốc lâu đời trong Y học cổ truyền, giúp khu phong tán hàn, thông kinh hoạt lạc, giảm đau xương khớp và cải thiện tuần hoàn máu hiệu quả từ bên ngoài.",
    readTime: 5,
    content: `
<h2>Cơ sở lý luận của liệu pháp tắm thảo dược trong Y học cổ truyền</h2>
<p>Tắm thảo dược (dược tắm) là phương pháp trị liệu bên ngoài (ngoại trị pháp) có lịch sử hàng ngàn năm trong Y học cổ truyền Á Đông. Phương pháp này dựa trên nguyên lý: nhiệt độ nước ấm kết hợp với tinh chất hoạt tính của dược liệu được hấp thu qua da, niêm mạc và lỗ chân lông mở rộng, từ đó tác động trực tiếp vào kinh lạc, giúp khu phong tán hàn (đuổi phong và hàn khí), trừ thấp, thông kinh hoạt lạc, giảm đau và cải thiện tuần hoàn.</p>
<p>Theo YHCT, đau xương khớp thường do phong hàn thấp tà xâm nhập vào cân cơ, khớp, làm khí huyết ứ trệ tại chỗ. Nước tắm thảo dược ấm giúp mở lỗ tấu lý (lỗ chân lông), tạo điều kiện cho dược liệu thấm sâu vào kinh mạch, vừa tán tà vừa bổ chính, mà không phải qua đường tiêu hóa nên phù hợp cho người dạ dày yếu hoặc khó uống thuốc.</p>

<h2>Các bài thuốc tắm phổ biến cho đau xương khớp</h2>
<p>Tùy theo thể bệnh và triệu chứng, thầy thuốc sẽ gia giảm bài thuốc tắm phù hợp:</p>
<ul>
<li><strong>Bài tắm khu phong tán hàn (cho đau khớp do lạnh):</strong> Ngải cứu 100g, lá lốt 80g, quế chi 30g, gừng tươi 50g, kinh giới 50g, tía tô 50g. Đun sôi với 5–6 lít nước, để nguội đến 38–42°C rồi ngâm 20–30 phút. Thích hợp cho đau khớp nặng hơn khi trời lạnh, ẩm, được chườm ấm thì đỡ.</li>
<li><strong>Bài tắm trừ thấp giảm sưng (cho khớp sưng tấy):</strong> Hy thiêm 100g, ké đầu ngựa 80g, hoàng bá 30g, mộc thông 30g, đại bi 50g, cành dâu 50g. Dùng khi khớp sưng đau, nóng đỏ nhẹ, kèm cảm giác nặng nề.</li>
<li><strong>Bài tắm hoạt huyết thông lạc (cho đau khớp mạn, teo cơ):</strong> Đan sâm 50g, hồng hoa 30g, ngưu tất 50g, tô mộc 50g, địa long 30g, mộc qua 50g. Dùng cho người bệnh mạn tính, khớp cứng, vận động khó, không sưng nhiều.</li>
<li><strong>Bài tắm đơn giản tại nhà:</strong> Ngải cứu tươi 200g + lá lốt tươi 100g + muối hạt 1 thìa canh — đun sôi 20 phút, để ấm rồi ngâm chân hoặc tắm toàn thân. Đây là bài dân gian đơn giản nhất, dễ kiếm nguyên liệu, phù hợp dùng thường xuyên tại nhà.</li>
</ul>

<h2>Hướng dẫn thực hiện tắm thảo dược đúng cách</h2>
<p>Để đạt hiệu quả tốt nhất và đảm bảo an toàn, cần thực hiện đúng quy trình:</p>
<ul>
<li><strong>Chuẩn bị:</strong> Đun dược liệu với 5–6 lít nước trong 30–45 phút, để nguội đến nhiệt độ 38–42°C (ấm vừa, không bỏng da). Có thể thêm nước nguội cho đúng nhiệt độ.</li>
<li><strong>Thực hiện:</strong> Ngâm toàn thân hoặc ngâm vùng bị đau (chân, tay) trong 20–30 phút. Giữ nhiệt độ nước bằng cách thêm nước nóng từ từ. Có thể kết hợp xoa bóp nhẹ nhàng vùng đau khi đang ngâm.</li>
<li><strong>Sau tắm:</strong> Lau khô nhanh bằng khăn bông, mặc quần áo ấm, tránh gió lạnh trong 30 phút sau khi tắm. Uống một ly nước ấm để bù nước.</li>
<li><strong>Tần suất:</strong> 3–5 lần/tuần trong giai đoạn điều trị tích cực, duy trì 1–2 lần/tuần sau khi triệu chứng thuyên giảm.</li>
</ul>

<h2>Chống chỉ định và lưu ý an toàn</h2>
<p>Liệu pháp tắm thảo dược tuy tự nhiên nhưng cần lưu ý các trường hợp chống chỉ định:</p>
<ul>
<li>Không tắm ngay sau bữa ăn hoặc khi đói; nên tắm trước ăn 1 giờ hoặc sau ăn 2 giờ.</li>
<li>Phụ nữ mang thai không tắm ngâm toàn thân với thảo dược; một số dược liệu có thể kích thích co tử cung.</li>
<li>Người bị huyết áp cao không ổn định, bệnh tim mạch nặng, đái tháo đường có biến chứng mạch máu nên hỏi ý kiến bác sĩ trước.</li>
<li>Không dùng khi da đang bị tổn thương, vết thương hở, viêm da, dị ứng nặng.</li>
<li>Người cao tuổi và trẻ em nên ngắn thời gian ngâm (10–15 phút) và kiểm tra nhiệt độ nước cẩn thận.</li>
<li>Nếu thấy chóng mặt, mệt hoặc khó thở trong khi tắm, ngừng ngay và ra nơi thoáng mát, nằm nghỉ.</li>
</ul>

<h2>Kết hợp tắm thảo dược với các liệu pháp YHCT khác</h2>
<p>Hiệu quả điều trị đau xương khớp được tăng cường đáng kể khi tắm thảo dược được phối hợp với:</p>
<ul>
<li><strong>Châm cứu và xoa bóp bấm huyệt:</strong> Thực hiện sau khi tắm — lúc này kinh mạch đã thông, cơ bắp giãn mềm, tác dụng của kim châm và bấm huyệt đạt hiệu quả cao hơn.</li>
<li><strong>Cứu ngải:</strong> Kết hợp cứu hộp ngải tại các huyệt Thận du, Mệnh môn, Quan nguyên sau khi tắm để ôn dương tán hàn.</li>
<li><strong>Dưỡng sinh khí công:</strong> 15–20 phút khí công nhẹ nhàng trước khi tắm giúp khí huyết lưu thông, tăng hiệu quả hấp thu dược liệu.</li>
</ul>
<div class="art-cta-box"><p>Bạn đang bị đau xương khớp mạn tính, viêm khớp dạng thấp, hoặc đau lưng do phong hàn thấp và muốn áp dụng liệu pháp tắm thảo dược đúng bài bản? Hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> tư vấn bài thuốc tắm phù hợp với thể trạng, kết hợp châm cứu và xoa bóp bấm huyệt điều trị toàn diện. Phòng khám mở cửa từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 70,
    slug: "thien-vuong-bo-tam-dan",
    date: "2026-07-03",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Thiên vương bổ tâm đan — Bài thuốc dưỡng tâm, an thần, tư âm kinh điển của Y học cổ truyền",
    excerpt: "Thiên vương bổ tâm đan là bài thuốc cổ truyền nổi tiếng trị mất ngủ, hồi hộp, lo âu và suy nhược thần kinh do tâm thận âm hư, được sử dụng rộng rãi trong hơn 400 năm lịch sử y học phương Đông.",
    readTime: 6,
    content: `
<h2>Nguồn gốc và lịch sử bài thuốc</h2>
<p>Thiên vương bổ tâm đan (天王補心丹) là bài thuốc kinh điển xuất xứ từ sách <em>Nhiếp sinh bí phẫu</em> (攝生秘剖) của danh y Hồng Cơ — Trung Quốc thời nhà Minh (thế kỷ 16–17). Tên "Thiên vương" mang hàm ý bài thuốc có tác dụng mạnh mẽ như ý chí của thiên vương (trời), đủ sức dưỡng tâm, bổ thận và an thần trong các trường hợp suy nhược thần kinh nặng. Bài thuốc đã được ghi chép, sử dụng và gia giảm qua nhiều thế kỷ, là một trong những bài thuốc an thần hàng đầu của Y học cổ truyền phương Đông.</p>
<p>Theo lý luận YHCT, tâm tàng thần — chủ về tinh thần, ý thức và cảm xúc. Thận tàng tinh, tinh sinh tủy, não vi tủy chi hải (não là biển của tủy). Khi tâm thận âm hư, thủy hỏa không tương tế, hỏa nhiệt bốc lên quấy nhiễu tâm thần, gây ra chứng mất ngủ, hồi hộp, lo âu, hay quên, miệng lưỡi loét — đây chính là chứng trạng mà Thiên vương bổ tâm đan được chỉ định.</p>

<h2>Thành phần bài thuốc và vai trò của từng vị</h2>
<p>Thành phần kinh điển của Thiên vương bổ tâm đan gồm 14–15 vị dược liệu, chia theo vai trò:</p>
<ul>
<li><strong>Sinh địa hoàng (quân dược):</strong> Tư âm dưỡng huyết, thanh tâm nhiệt — vị chủ dược, chiếm liều lớn nhất (120–160g dạng hoàn). Bổ thận âm, làm mát huyết, giúp "tư thủy để hàm hỏa" (dùng nước thận để chế ngự hỏa tâm).</li>
<li><strong>Thiên môn đông và Mạch môn đông (thần dược):</strong> Tư âm nhuận phế, thanh tâm — hai vị phối hợp tăng cường tác dụng bổ âm của sinh địa, đặc biệt cho phế âm và tâm âm.</li>
<li><strong>Huyền sâm:</strong> Tư âm giáng hỏa, giải độc lợi hầu — giúp thanh tư thận âm, chữa miệng lưỡi loét, cổ họng khô.</li>
<li><strong>Đương quy:</strong> Bổ huyết hoạt huyết, nhuận trường — dưỡng huyết tâm, phối hợp sinh địa tạo nền bổ âm huyết.</li>
<li><strong>Nhân sâm (hoặc Đảng sâm):</strong> Đại bổ nguyên khí, ích trí an thần — tăng cường khí để hỗ trợ âm, đồng thời an thần ích trí.</li>
<li><strong>Phục linh (Phục thần):</strong> Kiện tỳ, ninh tâm an thần — đặc biệt dùng Phục thần (phần phục linh bao quanh rễ thông) để tăng tác dụng an thần.</li>
<li><strong>Toan táo nhân:</strong> Dưỡng can an thần, liễm mồ hôi — vị thuốc an thần kinh điển, giúp vào giấc và duy trì giấc ngủ sâu.</li>
<li><strong>Bá tử nhân:</strong> Dưỡng tâm an thần, nhuận trường — phối hợp với toan táo nhân tăng tác dụng an thần, đồng thời nhuận tràng cho người táo bón do âm hư.</li>
<li><strong>Viễn chí:</strong> An thần ích trí, thông khiếu hóa đàm — giúp an thần và cải thiện trí nhớ, hay dùng cho người hay quên, tinh thần phân tán.</li>
<li><strong>Ngũ vị tử:</strong> Liễm phế tư thận, sinh tân liễm hãn, an thần — giữ tinh khí không thoát, giảm mồ hôi trộm.</li>
<li><strong>Đan sâm:</strong> Hoạt huyết dưỡng tâm, thanh tâm trừ phiền — thông huyết mạch tâm, giảm hồi hộp trống ngực.</li>
<li><strong>Cát cánh:</strong> Khai phế, dẫn thuốc lên thượng tiêu (vai trò sứ dược).</li>
<li><strong>Chu sa (thần sa):</strong> An thần trọng trấn — vị dẫn thuốc vào tâm kinh, trấn an tâm thần (hiện nay nhiều cơ sở thay bằng hổ phách hoặc từ thạch do lo ngại độc tính của thủy ngân).</li>
</ul>

<h2>Chỉ định lâm sàng</h2>
<p>Thiên vương bổ tâm đan được chỉ định trong các trường hợp sau:</p>
<ul>
<li>Mất ngủ kéo dài, khó vào giấc hoặc ngủ không sâu, hay mơ nhiều.</li>
<li>Hồi hộp, tim đập mạnh, lo âu vô cớ, dễ giật mình.</li>
<li>Suy nhược thần kinh: hay quên, tinh thần mệt mỏi, khó tập trung.</li>
<li>Miệng lưỡi loét tái phát, họng khô, lòng bàn tay chân nóng (ngũ tâm phiền nhiệt).</li>
<li>Mồ hôi trộm về đêm kèm mộng tinh ở nam giới.</li>
<li>Người lao tâm lao lực quá độ, học sinh sinh viên ôn thi căng thẳng kéo dài.</li>
<li>Phụ nữ tiền mãn kinh với biểu hiện bốc hỏa, mất ngủ, hồi hộp.</li>
</ul>

<h2>Chống chỉ định và thận trọng</h2>
<ul>
<li><strong>Không dùng cho thể đàm thấp:</strong> Người bụng đầy, ăn kém, ợ hơi, người béo tích đàm; các vị tư âm nê trệ trong bài sẽ làm nặng thêm.</li>
<li><strong>Không dùng khi tỳ vị hư hàn:</strong> Đại tiện lỏng, chân tay lạnh; sinh địa, thiên mạch đông có tính hàn ẩm sẽ làm tỳ vị thêm hư.</li>
<li><strong>Thận trọng với chu sa:</strong> Không dùng liều cao hoặc kéo dài trong dạng chứa chu sa do nguy cơ nhiễm độc thủy ngân; hiện nay nhiều bào chế thay bằng hổ phách.</li>
<li><strong>Phụ nữ mang thai:</strong> Cần thận trọng, hỏi ý kiến thầy thuốc do trong bài có đương quy, đan sâm (hoạt huyết) và viễn chí.</li>
<li>Không tự ý tăng liều hoặc dùng kéo dài hơn 3 tháng liên tục mà không tái khám.</li>
</ul>

<h2>Cách dùng và bào chế</h2>
<p>Thiên vương bổ tâm đan thường được bào chế dưới dạng hoàn mật (mật ong hoặc nước sắc phục linh) để uống dần, mỗi lần 6–9g, ngày 2–3 lần sau bữa ăn. Cũng có thể sắc thang nếu điều trị cấp cứu hoặc cần gia giảm theo biện chứng cụ thể. Nước chiếu thang nên uống ấm vào buổi trưa và tối trước khi đi ngủ.</p>
<p>Khi uống Thiên vương bổ tâm đan, nên kiêng: rượu bia, thức ăn cay nóng, thức khuya — những yếu tố làm hao âm, bốc hỏa, làm giảm tác dụng bài thuốc.</p>
<div class="art-cta-box"><p>Bạn đang gặp phải tình trạng mất ngủ kéo dài, hồi hộp, lo âu hoặc suy nhược thần kinh và muốn được điều trị bằng Y học cổ truyền? <strong>Phòng Khám YHCT Tâm Đức</strong> với <strong>BS. Nguyễn Đức Tâm</strong> sẽ thăm khám, biện chứng chính xác và gia giảm Thiên vương bổ tâm đan hoặc lựa chọn bài thuốc phù hợp nhất với thể trạng của bạn. Phòng khám hoạt động từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 71,
    slug: "phong-ngua-beo-phi-theo-yhct",
    date: "2026-07-03",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Phòng ngừa béo phì theo Y học cổ truyền: Chế độ ăn uống, vận động và bài thuốc hỗ trợ",
    excerpt: "Y học cổ truyền xem béo phì là hệ quả của tỳ hư sinh đàm thấp, can khí uất kết và thận dương suy yếu — từ đó đề ra chiến lược phòng ngừa toàn diện qua ăn uống, dưỡng sinh vận động và hỗ trợ bằng dược liệu.",
    readTime: 5,
    content: `
<h2>Quan điểm của Y học cổ truyền về béo phì</h2>
<p>Béo phì (肥胖 — phì bàng) trong Y học cổ truyền không đơn giản là vấn đề thẩm mỹ mà là biểu hiện của sự mất cân bằng chức năng nội tạng, đặc biệt là tỳ vị, can và thận. Sách <em>Nội kinh</em> viết: "Người béo nhiều phần là do đàm thấp nội thịnh" — nghĩa là những người có cơ thể béo, đặc biệt béo bụng, thường có thể tạng thiên về đàm thấp do tỳ vị vận hóa kém.</p>
<p>Ba cơ chế chính gây béo phì theo YHCT:</p>
<ul>
<li><strong>Tỳ hư đàm thấp:</strong> Tỳ chủ vận hóa thức ăn và thủy thấp. Khi tỳ hư, thủy cốc không vận hóa hết sẽ tích lại thành đàm thấp, tích tụ dưới da và nội tạng tạo nên mỡ thừa. Người thuộc thể này thường béo mềm, da nhão, mệt mỏi, ăn vào đầy bụng.</li>
<li><strong>Can khí uất kết:</strong> Stress, căng thẳng kéo dài làm can khí không sơ tiết, khí cơ trở trệ, ảnh hưởng tỳ vị vận hóa, dẫn đến ăn nhiều do cảm giác thèm đồ ngọt, béo. Người thuộc thể này hay béo do ăn bù cảm xúc.</li>
<li><strong>Thận dương hư:</strong> Thận dương là gốc dương của toàn thân, chủ hóa khí thủy thấp. Thận dương suy yếu (thường gặp ở người trung niên và lớn tuổi) làm giảm tốc độ chuyển hóa cơ sở, dễ tích mỡ dù ăn ít, kèm lạnh người, mệt mỏi.</li>
</ul>

<h2>Chế độ ăn uống phòng ngừa béo phì theo YHCT</h2>
<p>YHCT không đơn giản là "ăn ít lại" mà hướng đến ăn đúng theo thể trạng và quy luật ngũ tạng:</p>
<ul>
<li><strong>Ưu tiên thực phẩm kiện tỳ trừ thấp:</strong> Ý dĩ nhân (bo bo), khoai mỡ, đậu đỏ, củ sen, bí đao, dưa leo, rau cần — đây là các thực phẩm có tính bình hoặc hàn nhẹ, giúp tỳ vận hóa tốt hơn, trừ đàm thấp.</li>
<li><strong>Hạn chế đồ ngọt, béo ngậy, đồ lạnh:</strong> Đường, kem, đồ chiên rán làm đàm thấp gia tăng; đồ lạnh tổn hao dương khí tỳ vị làm suy yếu chức năng vận hóa.</li>
<li><strong>Ăn đúng giờ:</strong> Bữa sáng đầy đủ (giờ Thìn 7–9h, giờ Tỳ hoạt động mạnh), bữa trưa vừa phải, bữa tối nhẹ và không ăn sau 19:00 để tỳ vị nghỉ ngơi, tránh đàm thấp tích tụ ban đêm.</li>
<li><strong>Dùng các gia vị hỗ trợ tiêu hóa:</strong> Gừng, hành, tỏi, trần bì (vỏ quýt khô) khi nấu ăn giúp lý khí kiện tỳ, tăng vận hóa thức ăn.</li>
<li><strong>Uống trà hỗ trợ:</strong> Trà sen, trà ý dĩ nhân, trà lá sen xanh (hà diệp) — có tác dụng lợi thủy, trừ đàm, hỗ trợ giảm mỡ máu.</li>
</ul>

<h2>Dưỡng sinh vận động phòng béo phì</h2>
<p>YHCT nhấn mạnh "động tĩnh kết hợp" — vận động vừa sức để vận hành khí huyết, không vận động quá sức gây tổn hao chính khí:</p>
<ul>
<li><strong>Khí công và thái cực quyền:</strong> 30–45 phút mỗi ngày giúp lưu thông khí huyết, kích thích tỳ vị vận hóa, đồng thời giảm stress giải can uất. Phù hợp cho mọi lứa tuổi, kể cả người thừa cân nhiều.</li>
<li><strong>Bát đoạn cẩm:</strong> Đặc biệt các thế "Điều lý tỳ vị tu đơn cử" (thế 3) và "Lưỡng thủ bàn túc cố thận yêu" (thế 6) có tác dụng kiện tỳ và bổ thận, hỗ trợ chuyển hóa cơ sở.</li>
<li><strong>Đi bộ nhanh sau bữa ăn:</strong> 15–20 phút đi bộ nhẹ nhàng sau bữa trưa giúp khí vị vận hành tốt, tránh tích trệ; đi bộ 30–45 phút sau bữa tối giúp tiêu thức ăn và ổn định đường huyết.</li>
<li><strong>Xoa bụng:</strong> Mỗi sáng sau khi thức dậy, xoa bụng theo chiều kim đồng hồ 200 lần (theo chiều vận hành của đại tràng) giúp kích thích tỳ vị vận hóa, cải thiện tiêu hóa và hỗ trợ giảm mỡ bụng.</li>
</ul>

<h2>Dược liệu và bài thuốc hỗ trợ phòng ngừa béo phì</h2>
<p>Một số dược liệu và bài thuốc YHCT được dùng hỗ trợ (không thay thế chế độ ăn và vận động):</p>
<ul>
<li><strong>Phòng phong thông thánh tán:</strong> Bài thuốc kinh điển trị béo phì kèm táo bón, thực nhiệt; sơ phong tán nhiệt, thông phủ tiết trọc. Dùng cho người béo phì kèm táo bón, mặt đỏ, huyết áp cao.</li>
<li><strong>Nhị trần thang gia giảm:</strong> Bán hạ, trần bì, phục linh, cam thảo — kiện tỳ trừ đàm thấp, phù hợp thể tỳ hư đàm thấp.</li>
<li><strong>Trà hà diệp (lá sen):</strong> Lá sen tươi hoặc khô 10–15g, sắc uống thay nước — hóa thấp, trừ đàm, lợi thủy, được nghiên cứu có tác dụng giảm hấp thu mỡ.</li>
<li><strong>Sơn tra:</strong> Tiêu thực hóa tích, hoạt huyết — hỗ trợ tiêu mỡ, giảm mỡ máu, đặc biệt tốt cho người béo phì do ăn nhiều thịt mỡ.</li>
</ul>

<h2>Duy trì lối sống lành mạnh theo quan điểm YHCT</h2>
<p>Phòng ngừa béo phì bền vững theo YHCT không chỉ là chuyện ăn kiêng hay tập thể dục mà cần thay đổi lối sống toàn diện:</p>
<ul>
<li>Ngủ đủ giấc và đúng giờ — thiếu ngủ làm tỳ thận hư, tăng cảm giác thèm đồ ngọt.</li>
<li>Quản lý căng thẳng — stress mạn tính làm can khí uất, tăng cortisol, thúc đẩy tích mỡ bụng.</li>
<li>Nhai chậm, ăn có ý thức — giúp não nhận tín hiệu no đúng lúc, tránh ăn quá mức.</li>
<li>Kiểm tra sức khỏe định kỳ: theo dõi BMI, vòng bụng, mỡ máu và đường huyết hàng năm để phát hiện sớm và can thiệp kịp thời.</li>
</ul>
<div class="art-cta-box"><p>Nếu bạn đang tìm kiếm giải pháp phòng ngừa và hỗ trợ điều trị béo phì theo Y học cổ truyền một cách bài bản và an toàn, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám, xác định thể tạng và xây dựng kế hoạch toàn diện phù hợp với cơ địa của bạn. Phòng khám mở cửa từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 72,
    slug: "phuong-huyet-dau-than-kinh-lien-suon",
    date: "2026-07-03",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị đau thần kinh liên sườn theo Y học cổ truyền",
    excerpt: "Đau thần kinh liên sườn với biểu hiện đau dọc các kẽ xương sườn có thể được điều trị hiệu quả bằng châm cứu qua các phương huyệt đặc hiệu, giúp giải phóng chèn ép, thông kinh hoạt lạc và giảm đau nhanh chóng.",
    readTime: 6,
    content: `
<h2>Tổng quan về đau thần kinh liên sườn theo Y học cổ truyền</h2>
<p>Đau thần kinh liên sườn (intercostal neuralgia) là tình trạng đau dọc theo đường đi của các dây thần kinh liên sườn, thường biểu hiện bằng cơn đau nhói, rát, hoặc tê bì dọc các kẽ xương sườn, có thể lan ra sau lưng hoặc ra trước ngực, đôi khi bị nhầm với đau tim hay đau màng phổi.</p>
<p>Trong Y học cổ truyền, chứng này được gọi là <em>Hiếp thống</em> (胁痛) — đau vùng mạn sườn, thuộc phạm vi kinh can và kinh đởm chủ quản. Nguyên nhân thường gặp:</p>
<ul>
<li><strong>Can khí uất kết:</strong> Tình chí thất điều, uất ức lâu ngày làm can khí không sơ tiết, kinh khí tắc nghẽn gây đau.</li>
<li><strong>Huyết ứ lạc trở:</strong> Chấn thương, va đập hoặc sau viêm nhiễm (zona thần kinh) làm huyết ứ tại kinh lạc.</li>
<li><strong>Thấp nhiệt uẩn kết:</strong> Thấp nhiệt tích tụ ở can đởm, kinh lạc vùng mạn sườn bị tắc nghẽn.</li>
<li><strong>Can thận âm hư:</strong> Âm hư sinh nội nhiệt, kinh mạch thiếu dưỡng dẫn đến đau âm ỉ mạn tính.</li>
</ul>

<h2>Phương huyệt chính điều trị đau thần kinh liên sườn</h2>
<p>Phác đồ châm cứu cơ bản gồm các huyệt sau, được lựa chọn và phối hợp tùy theo thể bệnh:</p>
<ul>
<li><strong>Kỳ môn (Kỳ Môn — Can 14):</strong> Vị trí: dưới núm vú 4 thốn, trong kẽ liên sườn 6, trên đường vú. Là huyệt mộ của kinh Can. Tác dụng: sơ can lý khí, hòa vị giảm đau — huyệt chủ trị trực tiếp của đau mạn sườn do can khí uất. Châm thẳng hoặc xiên 0.5–0.8 thốn.</li>
<li><strong>Dương lăng tuyền (Đởm 34):</strong> Vị trí: mặt ngoài cẳng chân, trước và dưới chỏm xương mác (đầu trên xương mác) 1 thốn. Là huyệt hội của cân (筋). Tác dụng: sơ can lợi đởm, thư cân hoạt lạc, giảm đau mạn sườn và co cứng cơ — huyệt thiết yếu trong mọi thể bệnh đau mạn sườn. Châm thẳng 1–1.5 thốn.</li>
<li><strong>Thái xung (Can 3):</strong> Vị trí: mu bàn chân, trong khe giữa xương đốt bàn chân 1 và 2, cách bờ sau góc móng ngón chân cái 2 thốn. Là huyệt nguyên và huyệt du thổ của kinh Can. Tác dụng: sơ can giải uất, hành khí chỉ thống — huyệt đặc hiệu nhất để giải can uất. Phối hợp với Hợp cốc (LI4) tạo thành "Tứ quan" — cặp huyệt mạnh nhất điều hòa khí huyết toàn thân. Châm thẳng 0.5–0.8 thốn.</li>
<li><strong>Nội quan (Tâm bào 6):</strong> Vị trí: mặt trước cẳng tay, trên nếp gấp cổ tay 2 thốn, giữa hai gân cơ gấp cổ tay. Tác dụng: lý khí hòa vị, thư hung giảm đau — đặc biệt hiệu quả khi đau lan ra trước ngực, kèm hồi hộp hoặc khó thở. Châm thẳng 0.5–1 thốn.</li>
<li><strong>Chi câu (Tam tiêu 6):</strong> Vị trí: mặt ngoài cẳng tay, trên nếp gấp cổ tay 3 thốn, giữa hai xương quay và trụ. Tác dụng: thông lợi tam tiêu, lý khí giải uất — huyệt đặc hiệu trị hiếp thống được ghi trong <em>Linh khu</em>: "hiếp thống thủ chi câu" (đau mạn sườn chọn huyệt Chi câu). Châm thẳng 1–1.5 thốn.</li>
<li><strong>Hiếp cùng (kinh ngoại kỳ huyệt):</strong> Vị trí: đầu xương sườn 11 và 12 (hai bên), tại điểm cuối của xương sườn tự do. Tác dụng: giảm đau trực tiếp vùng mạn sườn và hạ sườn — huyệt kinh nghiệm đặc hiệu trị hiếp thống. Châm xiên về phía trong 0.5–0.8 thốn, không châm sâu.</li>
<li><strong>Hành gian (Can 2):</strong> Vị trí: mu bàn chân, giữa kẽ ngón 1 và 2, cách bờ sau góc móng 0.5 thốn. Là huyệt kinh hỏa của kinh Can. Tác dụng: thanh can hỏa, lợi hiếp — dùng khi thể can hỏa vượng, đau nhiều, kèm đắng miệng, mặt đỏ. Châm thẳng 0.5 thốn.</li>
</ul>

<h2>Gia giảm theo thể bệnh</h2>
<ul>
<li><strong>Thể can khí uất kết:</strong> Huyệt chính: Kỳ môn, Thái xung, Chi câu, Dương lăng tuyền. Gia thêm: Kỳ môn đối bên, Đản trung (Nhâm 17). Thủ thuật tả pháp để sơ can giải uất.</li>
<li><strong>Thể huyết ứ lạc trở:</strong> Huyệt chính: Kỳ môn, Chi câu, Huyết hải (Tỳ 10), Cách du (Bàng quang 17). Gia thêm: Hành gian. Có thể phối hợp giác hơi dọc theo đường kinh Bàng quang lưng để hoạt huyết.</li>
<li><strong>Thể thấp nhiệt:</strong> Huyệt chính: Kỳ môn, Dương lăng tuyền, Âm lăng tuyền (Tỳ 9), Chi câu. Gia thêm: Nội đình (Vị 44), Hành gian. Tả pháp mạnh.</li>
<li><strong>Thể can thận âm hư:</strong> Huyệt chính: Kỳ môn, Thái xung, Thái khê (Thận 3), Tam âm giao (Tỳ 6), Can du (Bàng quang 18). Bổ pháp nhẹ nhàng, kết hợp cứu ngải ôn bổ.</li>
</ul>

<h2>Châm huyệt tại chỗ theo đường liên sườn</h2>
<p>Bên cạnh các huyệt xa trị (huyệt ở xa vùng bệnh), thầy thuốc thường châm thêm các huyệt tại chỗ dọc theo đường đi của dây thần kinh bị tổn thương:</p>
<ul>
<li>Chọn 2–3 điểm Giáp tích (Hua-tuo-jia-ji) tương ứng với đốt sống ngực nơi xuất phát dây thần kinh bị đau (ví dụ: D5, D6, D7 cho đau liên sườn giữa ngực).</li>
<li>Châm dọc theo kẽ liên sườn đau, mỗi cách 1.5–2 thốn một điểm, châm xiên 30° về phía cột sống, sâu 0.5–1 thốn; tránh châm vuông góc sâu vào khoang ngực.</li>
<li>Mỗi liệu trình: 10–15 buổi, mỗi buổi cách nhau 1 ngày; sau đó nghỉ 1–2 tuần rồi đánh giá lại.</li>
</ul>

<h2>Kết hợp điều trị và chăm sóc tại nhà</h2>
<p>Bên cạnh châm cứu tại phòng khám, bệnh nhân có thể hỗ trợ điều trị tại nhà:</p>
<ul>
<li>Bấm huyệt Thái xung và Chi câu mỗi ngày 2 lần, mỗi huyệt 2–3 phút, dùng đầu ngón tay cái ấn và xoay tròn.</li>
<li>Chườm ấm nhẹ vùng đau (với thể hàn ngưng huyết ứ) hoặc chườm mát nhẹ (với thể nhiệt) trong 15–20 phút.</li>
<li>Tập thở bụng sâu và xoa nhẹ mạn sườn đau theo chiều từ sau ra trước để thư giãn cơ liên sườn.</li>
<li>Tránh các tư thế gây tăng đau: ngồi còng lưng, xoay người đột ngột, cúi gập người.</li>
</ul>
<div class="art-cta-box"><p>Đau thần kinh liên sườn kéo dài ảnh hưởng nghiêm trọng đến sinh hoạt và công việc hàng ngày. Hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám, biện chứng và áp dụng phác đồ châm cứu đặc hiệu giúp giảm đau nhanh chóng và điều trị dứt điểm nguyên nhân. Phòng khám hoạt động từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch tư vấn: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 73,
    slug: "phong-ngua-rung-toc-sau-sinh-yhct",
    date: "2026-07-03",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Phòng ngừa rụng tóc sau sinh theo Y học cổ truyền: Bổ huyết dưỡng thận để giữ mái tóc dày",
    excerpt: "Rụng tóc sau sinh là hệ quả tất yếu của quá trình tiêu hao khí huyết và thận tinh trong thai kỳ và sinh đẻ. Y học cổ truyền có nhiều giải pháp từ bên trong (bổ huyết dưỡng thận) và bên ngoài (chăm sóc da đầu) giúp tóc hồi phục nhanh và dày khỏe.",
    readTime: 5,
    content: `
<h2>Rụng tóc sau sinh dưới góc nhìn Y học cổ truyền</h2>
<p>Trong Y học cổ truyền, tóc được gọi là "huyết chi dư" (血之餘) — phần thừa của huyết. Câu này có ý nghĩa sâu sắc: tóc mọc khỏe hay rụng phản ánh trực tiếp tình trạng huyết dịch trong cơ thể. Bên cạnh đó, <em>Thận kỳ hoa tại phát</em> (thận biểu hiện ra bên ngoài qua tóc) — chức năng thận khỏe mạnh nuôi dưỡng tóc bóng đen, thận suy yếu tóc bạc sớm và rụng.</p>
<p>Trong 9 tháng mang thai, cơ thể người mẹ dồn toàn bộ tinh huyết để nuôi dưỡng thai nhi. Quá trình sinh nở (đặc biệt sinh thường mất nhiều máu) và cho con bú sau sinh tiếp tục tiêu hao huyết dịch và thận tinh. Khi khí huyết không đủ nuôi dưỡng chân tóc, nang tóc suy yếu và tóc rụng — đây là chứng <em>Sản hậu thoát phát</em> (rụng tóc sau sinh) trong YHCT.</p>
<p>Ngoài ra, stress, mất ngủ chăm con, ăn uống kiêng khem quá mức sau sinh đều làm trầm trọng thêm tình trạng khí huyết hư và thận tinh bất túc.</p>

<h2>Phân thể và nhận biết tình trạng rụng tóc sau sinh</h2>
<ul>
<li><strong>Thể khí huyết đôi hư (phổ biến nhất):</strong> Tóc rụng nhiều, tóc mảnh và dễ gãy, kèm mệt mỏi, hoa mắt chóng mặt, tim đập hồi hộp, da nhợt, móng tay nhợt hoặc giòn, kinh nguyệt ít khi có lại. Lưỡi nhạt, mạch tế vô lực.</li>
<li><strong>Thể thận tinh hư suy:</strong> Tóc rụng kèm tóc bạc sớm, lưng gối đau mỏi, ù tai, tiểu nhiều về đêm, giảm ham muốn tình dục, hay quên. Lưỡi nhạt hoặc đỏ nhạt, mạch trầm tế.</li>
<li><strong>Thể can khí uất kết (stress hậu sản):</strong> Rụng tóc kèm căng thẳng, lo âu, dễ cáu gắt, ngực tức, ngủ kém. Lưỡi hơi đỏ, rêu mỏng, mạch huyền tế.</li>
</ul>

<h2>Bổ huyết dưỡng thận từ bên trong — Dược liệu và bài thuốc</h2>
<p>Điều trị từ bên trong là trọng tâm của YHCT trong phòng ngừa và điều trị rụng tóc sau sinh:</p>
<ul>
<li><strong>Thất bảo mỹ nhiêm đan (kinh điển trị rụng tóc):</strong> Gồm hà thủ ô (vị chủ dược — bổ can thận, dưỡng huyết, làm đen tóc), phục linh, ngưu tất, đương quy, câu kỷ tử, thỏ ti tử, bổ cốt chỉ. Bài thuốc bổ can thận đồng thời, dưỡng huyết mạnh — dùng cho cả hai thể khí huyết hư và thận tinh hư.</li>
<li><strong>Bát trân thang (cho thể khí huyết đôi hư):</strong> Tứ quân tử (đảng sâm, bạch truật, phục linh, cam thảo) + Tứ vật (thục địa, đương quy, bạch thược, xuyên khung) — bổ khí bổ huyết toàn diện, nuôi dưỡng nang tóc từ gốc.</li>
<li><strong>Dưỡng huyết sinh phát ẩm (gia giảm):</strong> Thục địa 20g, đương quy 12g, bạch thược 12g, hà thủ ô 15g, xuyên khung 8g, hoàng kỳ 15g, câu kỷ tử 12g, hắc chi ma (vừng đen) 15g. Sắc uống ngày 1 thang, trong 3–4 tuần.</li>
<li><strong>Thực phẩm dưỡng tóc trong bữa ăn:</strong> Vừng đen (hắc chi ma), óc heo (hổ tiềm — dân gian, thận trọng liều lượng), đậu đen, gạo lứt, cá hồi, trứng, thịt nạc đỏ, củ sen — đây là các thực phẩm bổ huyết dưỡng thận, cung cấp sắt, protein, omega-3 và biotin.</li>
</ul>

<h2>Chăm sóc da đầu từ bên ngoài theo YHCT</h2>
<p>Liệu pháp ngoại trị bổ sung cho điều trị bên trong:</p>
<ul>
<li><strong>Gội đầu bằng nước thảo dược:</strong> Hà thủ ô 30g + bồ kết 2 quả + lá hương nhu 50g — đun sôi để nguội, dùng gội đầu 2–3 lần/tuần. Giúp nuôi dưỡng nang tóc, làm sạch da đầu và giảm rụng tóc. Bồ kết tạo bọt tự nhiên, không làm khô da đầu.</li>
<li><strong>Ủ tóc bằng tinh dầu vừng đen (mè đen):</strong> Xoa nhẹ dầu vừng đen ấm lên da đầu, massage 10–15 phút rồi ủ trong 30 phút hoặc qua đêm. Dầu vừng đen giàu vitamin E và axit béo, nuôi dưỡng và tái tạo nang tóc.</li>
<li><strong>Bấm huyệt da đầu kích thích mọc tóc:</strong> Bách hội (Đốc 20), Thông thiên (Bàng quang 7), Tứ thần thông (kinh ngoại kỳ huyệt) — dùng đầu ngón tay gõ nhẹ hoặc massage vùng da đầu 5–10 phút mỗi ngày giúp tăng lưu thông máu đến nang tóc. Thầy thuốc có thể châm cứu trực tiếp vào các huyệt này.</li>
<li><strong>Tránh các thói quen gây hại:</strong> Không buộc tóc quá chặt sau sinh; hạn chế sấy tóc nhiệt cao; tránh gội đầu bằng nước quá nóng; không chải tóc khi còn ướt; tránh dùng hóa chất nhuộm ép uốn trong thời gian đang rụng tóc nhiều.</li>
</ul>

<h2>Châm cứu và thủy châm hỗ trợ phục hồi tóc</h2>
<p>Châm cứu vùng đầu kết hợp với bổ huyết toàn thân là liệu pháp hiệu quả cao:</p>
<ul>
<li>Châm cứu vùng đầu (đầu châm — scalp acupuncture): vùng vận động cảm giác đầu, vùng tạo máu — kích thích vi tuần hoàn da đầu.</li>
<li>Thủy châm: tiêm vitamin B12, B1 hoặc các dịch chiết từ nhau thai (placenta extract) vào huyệt Bách hội, Phong trì (Đởm 20), Thận du (Bàng quang 23) — kết hợp tác dụng dược lý và châm cứu.</li>
<li>Liệu trình: 15–20 buổi châm cứu, kết hợp uống thuốc YHCT 4–8 tuần — hiệu quả thường rõ rệt sau 6–12 tuần điều trị.</li>
</ul>

<h2>Lối sống và dưỡng sinh hỗ trợ</h2>
<ul>
<li>Ngủ đủ giấc là ưu tiên số một — tranh thủ ngủ cùng con để bù lại giờ thức đêm cho con bú.</li>
<li>Ăn đủ dinh dưỡng sau sinh: không kiêng khem thái quá, đặc biệt bổ sung đủ đạm, sắt và các vitamin nhóm B.</li>
<li>Tập thở sâu và các bài khí công nhẹ nhàng giúp giảm stress, ổn định tâm lý sau sinh.</li>
<li>Kiên nhẫn — chu kỳ sinh trưởng của tóc là 3–6 tháng; kết quả điều trị cần ít nhất 2–3 tháng để thấy rõ sự khác biệt.</li>
</ul>
<div class="art-cta-box"><p>Rụng tóc sau sinh không chỉ ảnh hưởng đến ngoại hình mà còn là tín hiệu cơ thể cần được bổ sung khí huyết và thận tinh. Hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám, biện chứng phân thể và tư vấn phác đồ điều trị toàn diện — kết hợp thuốc YHCT uống, châm cứu và chăm sóc da đầu đúng cách để tóc hồi phục dày khỏe nhanh nhất. Phòng khám hoạt động từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 62,
    slug: "tri-noi-ngoai-theo-yhct",
    date: "2026-06-23",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Trĩ nội, trĩ ngoại theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Bệnh trĩ theo Y học cổ truyền được biện chứng thành nhiều thể khác nhau, từ đó có phác đồ châm cứu, dùng thuốc và chăm sóc phù hợp giúp giảm đau, cầm máu và ngăn tái phát.",
    readTime: 6,
    content: `
<h2>Tổng quan về bệnh trĩ theo Y học cổ truyền</h2>
<p>Trong Y học cổ truyền (YHCT), bệnh trĩ được gọi là "trĩ sang" hoặc "trĩ tật", xếp vào nhóm bệnh của trực tràng – hậu môn. Nguyên nhân được cho là do khí huyết hư yếu, mạch lạc ở vùng hậu môn bị ứ trệ lâu ngày kết hợp với thấp nhiệt nội sinh từ ăn uống cay nóng, rượu bia, ngồi lâu, táo bón mạn tính hoặc phụ nữ mang thai, sinh đẻ nhiều lần khiến khí huyết dồn xuống hạ tiêu, tĩnh mạch hậu môn giãn lớn tạo thành búi trĩ.</p>
<p>YHCT không chỉ nhìn bệnh trĩ ở tổn thương tại chỗ mà còn xem xét tổng trạng cơ thể, từ đó phân thể bệnh để điều trị tận gốc, hạn chế tái phát chứ không chỉ giảm triệu chứng tạm thời.</p>
<h2>Phân thể bệnh trĩ theo Y học cổ truyền</h2>
<p>Tùy theo biểu hiện lâm sàng, bệnh trĩ thường được phân thành các thể sau:</p>
<ul>
<li><strong>Thể thấp nhiệt hạ trú:</strong> búi trĩ sưng đỏ, đau rát, có thể chảy dịch, kèm táo bón, nước tiểu vàng, lưỡi đỏ rêu vàng nhớt. Đây là thể thường gặp ở giai đoạn cấp, viêm tắc trĩ.</li>
<li><strong>Thể khí trệ huyết ứ:</strong> búi trĩ tím sẫm, đau nhiều, có thể sa nghẹt không tự co lên được, đại tiện khó khăn do khí huyết lưu thông kém tại chỗ.</li>
<li><strong>Thể huyết nhiệt vong hành:</strong> đại tiện ra máu tươi nhiều, máu chảy thành tia hoặc nhỏ giọt, người có thể kèm hồi hộp, hoa mắt do mất máu, lưỡi đỏ.</li>
<li><strong>Thể tỳ khí hư hạ hãm:</strong> búi trĩ sa ra ngoài sau đại tiện, lâu ngày khó co lên, kèm mệt mỏi, ăn kém, sắc mặt nhợt, hay gặp ở người lớn tuổi, sau sinh hoặc làm việc nặng lâu năm.</li>
</ul>
<h2>Phương pháp điều trị bằng châm cứu và huyệt vị</h2>
<p>Tùy thể bệnh, thầy thuốc lựa chọn các huyệt và phương pháp tác động phù hợp:</p>
<ul>
<li><strong>Trường cường (Đốc mạch 1):</strong> huyệt chủ trị tại chỗ, có tác dụng điều khí huyết vùng hậu môn, giảm đau, giảm sa búi trĩ.</li>
<li><strong>Bách hội (Đốc mạch 20):</strong> nâng đỡ khí, hỗ trợ điều trị sa trĩ do khí hư hạ hãm.</li>
<li><strong>Thừa sơn (Bàng quang 57):</strong> giảm đau, chống co thắt vùng hậu môn – trực tràng.</li>
<li><strong>Túc tam lý (Vị 36) và Tam âm giao (Tỳ 6):</strong> kiện tỳ, bổ khí huyết, hỗ trợ thể tỳ khí hư.</li>
<li><strong>Huyết hải (Tỳ 10):</strong> phối hợp khi có huyết ứ hoặc chảy máu.</li>
</ul>
<p>Bên cạnh châm cứu, có thể kết hợp cứu ngải tại huyệt Bách hội với thể sa trĩ do khí hư, xông hơi thuốc thảo dược (hoàng bá, kinh giới, hòe hoa, ngải diệp) để giảm sưng đau tại chỗ, và ngâm rửa nước ấm pha thuốc sau đại tiện.</p>
<h2>Dùng thuốc Y học cổ truyền phối hợp</h2>
<p>Với thể thấp nhiệt, thường dùng các vị thanh nhiệt lợi thấp như hoàng bá, hoàng liên, hòe hoa, chỉ xác. Thể huyết ứ dùng hoạt huyết như đan sâm, xích thược, đào nhân. Thể chảy máu dùng các vị chỉ huyết như tông lư bì, trắc bách diệp, địa du. Thể khí hư hạ hãm thường phối các vị bổ khí thăng đề như hoàng kỳ, đảng sâm, thăng ma, sài hồ để nâng búi trĩ lên.</p>
<h2>Lưu ý sinh hoạt và phòng ngừa tái phát</h2>
<ul>
<li>Uống đủ nước, tăng cường chất xơ từ rau củ để tránh táo bón.</li>
<li>Tránh ngồi lâu một chỗ, nên đứng lên đi lại sau mỗi 45–60 phút làm việc.</li>
<li>Vệ sinh hậu môn sạch sẽ, tránh rặn mạnh khi đại tiện.</li>
<li>Tập các bài khí công nhẹ nhàng như co thắt hậu môn (đề cốc) hằng ngày để tăng trương lực cơ vùng đáy chậu.</li>
</ul>
<div class="art-cta-box"><p>Quý khách đang gặp các triệu chứng trĩ nội, trĩ ngoại như đau rát, chảy máu, sa búi trĩ kéo dài, hãy đến trực tiếp <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> trực tiếp khám, biện chứng phân thể và xây dựng phác đồ điều trị phù hợp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch qua số <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 63,
    slug: "thien-dinh-theo-yhct-duong-sinh-tam-than",
    date: "2026-06-23",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Thiền định theo Y học cổ truyền: Phương pháp dưỡng sinh tâm thần không dùng thuốc",
    excerpt: "Thiền định là phương pháp dưỡng sinh điều tâm, an thần được Y học cổ truyền coi trọng từ ngàn xưa, giúp cân bằng khí huyết, giảm stress và hỗ trợ điều trị nhiều bệnh mạn tính.",
    readTime: 5,
    content: `
<h2>Vị trí của thiền định trong dưỡng sinh Y học cổ truyền</h2>
<p>Y học cổ truyền (YHCT) luôn coi "điều tâm" là gốc của dưỡng sinh, bởi tâm là nơi chủ thần minh, tâm an thì khí huyết điều hòa, tạng phủ hoạt động nhịp nhàng. Sách Hoàng đế Nội kinh viết: "Tâm bất an tắc bách bệnh sinh", nghĩa là tâm không yên thì trăm bệnh dễ nảy sinh. Thiền định chính là phương pháp giúp con người tĩnh tâm, điều khí, an thần, từ đó hỗ trợ phòng và trị bệnh mà không cần dùng đến thuốc.</p>
<h2>Cơ chế tác động của thiền định theo quan điểm Y học cổ truyền</h2>
<ul>
<li><strong>An thần định trí:</strong> khi tâm tĩnh, Tâm hỏa không bốc lên gây mất ngủ, hồi hộp, lo âu.</li>
<li><strong>Điều hòa khí cơ:</strong> hơi thở chậm sâu trong thiền giúp khí vận hành thông suốt theo các kinh mạch, đặc biệt là Nhâm mạch và Đốc mạch.</li>
<li><strong>Bổ dưỡng Tâm – Thận:</strong> thiền định lâu ngày giúp Thận thủy tư nhuận Tâm hỏa, làm dịu các trạng thái căng thẳng, bốc nóng do hư hỏa.</li>
<li><strong>Cân bằng âm dương:</strong> trạng thái tĩnh lặng giúp dưỡng âm, bù đắp phần âm hao tổn do lao tâm, mất ngủ kéo dài.</li>
</ul>
<h2>Hướng dẫn thực hành thiền định cơ bản</h2>
<p>Người mới bắt đầu có thể thực hành theo các bước đơn giản sau:</p>
<ul>
<li>Chọn nơi yên tĩnh, ngồi tư thế thoải mái, lưng thẳng, hai tay đặt nhẹ trên đùi hoặc kết ấn tam muội.</li>
<li>Nhắm mắt hoặc nhìn nhẹ xuống, tập trung vào hơi thở vào – ra qua mũi, hít sâu xuống bụng dưới (đan điền).</li>
<li>Khi tâm trí xuất hiện suy nghĩ, không cưỡng ép loại bỏ mà nhẹ nhàng đưa sự chú ý trở lại hơi thở.</li>
<li>Bắt đầu với 10–15 phút mỗi ngày, tăng dần lên 20–30 phút khi đã quen.</li>
<li>Thời điểm tốt nhất là sáng sớm sau khi ngủ dậy hoặc tối trước khi đi ngủ.</li>
</ul>
<h2>Chỉ định và lợi ích lâm sàng</h2>
<p>Thiền định đặc biệt phù hợp với người mất ngủ, rối loạn lo âu, suy nhược thần kinh, tăng huyết áp do căng thẳng, hội chứng ruột kích thích liên quan đến stress, và người đang trong quá trình phục hồi sau bệnh nặng cần ổn định tâm lý. Thực hành đều đặn giúp giảm nhịp tim, hạ huyết áp nhẹ, cải thiện chất lượng giấc ngủ và tăng khả năng tập trung.</p>
<h2>Một số lưu ý khi thực hành</h2>
<ul>
<li>Không nên thiền ngay sau khi ăn no hoặc khi quá đói, quá mệt.</li>
<li>Người có bệnh tâm thần nặng cần tham khảo ý kiến chuyên gia trước khi tự tập luyện kéo dài.</li>
<li>Kết hợp thiền với các phương pháp khác như châm cứu, xoa bóp bấm huyệt sẽ tăng hiệu quả an thần, dưỡng sinh toàn diện.</li>
</ul>
<div class="art-cta-box"><p>Để được hướng dẫn phương pháp dưỡng sinh, thiền định kết hợp châm cứu an thần phù hợp với thể trạng riêng, quý khách hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> gặp <strong>BS. Nguyễn Đức Tâm</strong>. Phòng khám đón tiếp từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Hotline tư vấn: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 64,
    slug: "thap-toan-dai-bo-thang",
    date: "2026-06-23",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Thập toàn đại bổ thang — Bài thuốc bổ khí huyết toàn diện kinh điển của Y học cổ truyền",
    excerpt: "Thập toàn đại bổ thang là bài thuốc cổ phương nổi tiếng dùng để bồi bổ khí huyết toàn diện, thích hợp cho người suy nhược, sau bệnh nặng, sau phẫu thuật hoặc người cao tuổi.",
    readTime: 6,
    content: `
<h2>Nguồn gốc bài thuốc</h2>
<p>Thập toàn đại bổ thang là bài thuốc cổ phương được ghi trong "Thái Bình Huệ Dân Hòa Tễ Cục Phương" thời Tống, Trung Quốc. Bài thuốc được phát triển từ "Bát trân thang" (8 vị bổ khí huyết cơ bản) bằng cách thêm hai vị Hoàng kỳ và Nhục quế, tạo thành "mười vị thuốc quý" (Thập toàn), có tác dụng bổ cả khí và huyết, ôn dương, dùng rộng rãi cho người suy nhược toàn thân.</p>
<h2>Thành phần và vai trò các vị thuốc</h2>
<ul>
<li><strong>Nhân sâm (hoặc Đảng sâm):</strong> quân dược, đại bổ nguyên khí, ích Tỳ Phế.</li>
<li><strong>Hoàng kỳ:</strong> bổ khí, thăng dương, tăng cường sức đề kháng, hỗ trợ Nhân sâm bổ khí mạnh hơn.</li>
<li><strong>Bạch truật:</strong> kiện Tỳ, táo thấp, hỗ trợ tiêu hóa, tăng hấp thu dưỡng chất.</li>
<li><strong>Bạch linh (Phục linh):</strong> kiện Tỳ, lợi thủy, an thần nhẹ.</li>
<li><strong>Cam thảo:</strong> điều hòa các vị thuốc, ích khí, hòa vị.</li>
<li><strong>Đương quy:</strong> bổ huyết, hoạt huyết, dưỡng huyết điều kinh.</li>
<li><strong>Thục địa:</strong> tư âm bổ huyết, ích tinh.</li>
<li><strong>Bạch thược:</strong> dưỡng huyết, liễm âm, hòa hoãn cân mạch.</li>
<li><strong>Xuyên khung:</strong> hoạt huyết, hành khí, hỗ trợ lưu thông huyết mạch.</li>
<li><strong>Nhục quế:</strong> ôn thận dương, ôn trung, dẫn các vị thuốc bổ vào sâu, tăng cường khả năng hấp thu.</li>
</ul>
<h2>Cơ chế tác dụng theo lý luận Y học cổ truyền</h2>
<p>Bài thuốc kết hợp nhóm bổ khí (Nhân sâm, Hoàng kỳ, Bạch truật, Cam thảo, Phục linh) với nhóm bổ huyết (Đương quy, Thục địa, Bạch thược, Xuyên khung), cộng thêm Nhục quế ôn dương dẫn thuốc, tạo nên công thức "khí huyết song bổ, âm dương đều điều". Nhờ vậy bài thuốc không chỉ bổ huyết đơn thuần mà còn hỗ trợ vận hóa khí huyết, tránh tình trạng "bổ mà ứ trệ" thường gặp khi dùng các vị bổ huyết tư nhuận một mình.</p>
<h2>Chỉ định lâm sàng</h2>
<ul>
<li>Người suy nhược cơ thể sau bệnh nặng, sau phẫu thuật, sau sinh mất nhiều máu.</li>
<li>Người cao tuổi khí huyết hư suy, sắc mặt nhợt nhạt, mệt mỏi, chán ăn, hay choáng váng.</li>
<li>Phụ nữ thiếu máu, rối loạn kinh nguyệt do khí huyết hư.</li>
<li>Người đang hóa – xạ trị cần hỗ trợ phục hồi thể trạng (cần phối hợp theo dõi của bác sĩ chuyên khoa).</li>
<li>Trẻ em chậm phát triển thể chất do khí huyết bất túc (gia giảm liều phù hợp).</li>
</ul>
<h2>Chống chỉ định và lưu ý khi sử dụng</h2>
<ul>
<li>Không dùng cho người đang sốt cao, cảm mạo phong nhiệt, viêm nhiễm cấp tính có thực nhiệt.</li>
<li>Không dùng cho người thể chất thực nhiệt, táo bón, đại tiện táo kết do bài thuốc có tính ôn bổ.</li>
<li>Phụ nữ mang thai cần thận trọng, chỉ sử dụng khi có chỉ định và theo dõi của thầy thuốc có chuyên môn.</li>
<li>Người tỳ vị thấp nhiệt, đầy bụng, khó tiêu nên gia giảm bớt các vị tư nhuận để tránh trệ khí.</li>
</ul>
<div class="art-cta-box"><p>Bài thuốc Thập toàn đại bổ thang cần được gia giảm phù hợp theo từng thể trạng cụ thể. Quý khách có nhu cầu bồi bổ khí huyết, phục hồi sức khỏe sau bệnh, sau sinh, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> trực tiếp khám và kê đơn phù hợp. Thời gian khám: <strong>18:00–22:00 hàng ngày</strong>, tại <strong>Hà Đông, Hà Nội</strong>. Hotline: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 65,
    slug: "duong-sinh-theo-mua-dong",
    date: "2026-06-23",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Dưỡng sinh theo mùa đông: Bí quyết bảo vệ sức khỏe theo Y học cổ truyền",
    excerpt: "Mùa đông là thời điểm dương khí thu lại, âm khí thịnh, theo Y học cổ truyền cần điều chỉnh ăn uống, sinh hoạt và vận động phù hợp để dưỡng thận, giữ ấm và phòng bệnh hiệu quả.",
    readTime: 5,
    content: `
<h2>Nguyên lý dưỡng sinh mùa đông theo Y học cổ truyền</h2>
<p>Theo lý luận "Tứ thời dưỡng sinh" của Y học cổ truyền (YHCT), mùa đông ứng với hành Thủy, tạng Thận, đặc trưng bởi khí hậu lạnh, dương khí trong tự nhiên thu liễm, âm khí thịnh. Nguyên tắc dưỡng sinh mùa đông được gói trong hai chữ "tàng dưỡng" – nghĩa là giữ gìn, tích trữ năng lượng, tránh hao tổn dương khí, để cơ thể "ngủ đông" tích lũy sức cho mùa xuân sinh trưởng. Người không biết dưỡng sinh đúng mùa đông dễ mắc các bệnh về hô hấp, xương khớp, tim mạch và suy giảm chức năng Thận.</p>
<h2>Nguyên tắc ăn uống mùa đông</h2>
<ul>
<li>Ưu tiên thực phẩm có tính ôn, bổ dương như gừng, hành, tỏi, thịt dê, thịt bò, hạt dẻ, vừng đen, long nhãn.</li>
<li>Tăng cường món hầm, súp nóng để giữ ấm tỳ vị, tránh đồ ăn sống lạnh, nước đá.</li>
<li>Bổ sung các vị thuốc bổ thận như câu kỷ tử, đỗ trọng, ba kích (nên có chỉ định của thầy thuốc) để hỗ trợ dương khí.</li>
<li>Hạn chế đồ ăn quá mặn vì vị mặn vào Thận có thể làm hao tổn Thận khí nếu dùng quá nhiều.</li>
</ul>
<h2>Sinh hoạt và vận động phù hợp</h2>
<ul>
<li>Giữ ấm cơ thể, đặc biệt vùng đầu, cổ, bàn chân và vùng thắt lưng (nơi trú của Thận).</li>
<li>Ngủ sớm, dậy hơi muộn hơn mùa khác để tránh ra ngoài lúc khí lạnh còn nặng vào sáng sớm.</li>
<li>Tập luyện nhẹ nhàng như đi bộ, dưỡng sinh khí công, tránh vận động gắng sức ra nhiều mồ hôi làm hao tổn dương khí.</li>
<li>Tắm nước ấm, tránh tắm khuya hoặc tắm ngay sau khi vận động ra mồ hôi nhiều.</li>
</ul>
<h2>Phòng ngừa các bệnh thường gặp mùa đông</h2>
<ul>
<li><strong>Cảm lạnh, viêm hô hấp:</strong> giữ ấm vùng cổ ngực, có thể xông hơi gừng, sả khi mới chớm có dấu hiệu nhiễm lạnh.</li>
<li><strong>Đau nhức xương khớp:</strong> giữ ấm khớp, có thể chườm ngải cứu hoặc ngâm chân nước ấm thảo dược trước khi ngủ.</li>
<li><strong>Tăng huyết áp, bệnh tim mạch:</strong> tránh thay đổi nhiệt độ đột ngột, hạn chế ra ngoài sớm khi nhiệt độ xuống thấp.</li>
<li><strong>Da khô nứt nẻ:</strong> dưỡng ẩm da, uống đủ nước, bổ sung thực phẩm dưỡng âm như mật ong, vừng đen.</li>
</ul>
<h2>Châm cứu, cứu ngải hỗ trợ dưỡng sinh mùa đông</h2>
<p>Có thể cứu ngải tại huyệt Quan nguyên, Khí hải, Túc tam lý, Thận du định kỳ trong mùa đông để ôn bổ dương khí, tăng cường chính khí, phòng bệnh hô hấp và xương khớp tái phát.</p>
<div class="art-cta-box"><p>Để được tư vấn chế độ dưỡng sinh, cứu ngải ôn bổ phù hợp trong mùa lạnh, quý khách hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> gặp <strong>BS. Nguyễn Đức Tâm</strong>. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 66,
    slug: "phuong-huyet-dieu-tri-mat-ngu",
    date: "2026-06-23",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị mất ngủ theo Y học cổ truyền",
    excerpt: "Châm cứu, bấm huyệt vào các huyệt vị an thần, dưỡng tâm là phương pháp hiệu quả giúp cải thiện chất lượng giấc ngủ mà không cần phụ thuộc vào thuốc an thần tổng hợp.",
    readTime: 6,
    content: `
<h2>Cơ sở lý luận chọn huyệt điều trị mất ngủ</h2>
<p>Theo Y học cổ truyền (YHCT), mất ngủ (thất miên) liên quan chủ yếu đến mất cân bằng Tâm – Thận, Can khí uất kết hoặc Tỳ vị bất hòa. Khi Tâm thần không yên, dương khí không thể quy về âm vào ban đêm sẽ gây ra trạng thái khó ngủ, ngủ không sâu, hay thức giấc giữa đêm. Việc lựa chọn huyệt điều trị do đó tập trung vào nhóm huyệt an thần, dưỡng tâm, điều hòa Can – Thận và kiện Tỳ.</p>
<h2>Các huyệt vị chính trong điều trị mất ngủ</h2>
<ul>
<li><strong>Bách hội (Đốc mạch 20):</strong> nằm ở giao điểm đường nối hai đỉnh vành tai với đường giữa đỉnh đầu. Huyệt có tác dụng an thần định trí, điều hòa khí ở não, thường dùng đầu tiên trong các chứng mất ngủ, đau đầu do căng thẳng.</li>
<li><strong>Thần môn (Tâm 7):</strong> nằm ở lằn chỉ cổ tay, phía xương trụ, ngay bờ ngoài gân gấp cổ tay trụ. Huyệt có tác dụng dưỡng tâm an thần, là huyệt nguyên của kinh Tâm, rất hiệu quả với mất ngủ do tâm hư.</li>
<li><strong>Nội quan (Tâm bào 6):</strong> nằm trên lằn chỉ cổ tay 2 thốn, giữa hai gân gan tay lớn và bé. Huyệt giúp an thần, định tâm, giảm hồi hộp, lo âu kèm mất ngủ.</li>
<li><strong>Tam âm giao (Tỳ 6):</strong> nằm trên mắt cá chân trong 3 thốn, sát bờ sau xương chày. Huyệt giao hội của ba kinh âm (Tỳ, Can, Thận), có tác dụng dưỡng âm, điều hòa khí huyết, hỗ trợ giấc ngủ sâu hơn.</li>
<li><strong>An miên (huyệt ngoài kinh):</strong> nằm phía sau tai, giữa khoảng từ ụ chũm đến góc hàm dưới. Đây là huyệt kinh nghiệm chuyên biệt cho chứng mất ngủ, giúp thư giãn thần kinh.</li>
<li><strong>Thái xung (Can 3):</strong> nằm ở mu bàn chân, khe giữa xương bàn chân 1 và 2. Huyệt giúp bình Can, giải uất, dùng khi mất ngủ kèm dễ cáu gắt, căng thẳng do Can khí uất.</li>
<li><strong>Thái khê (Thận 3):</strong> nằm ở chỗ lõm giữa mắt cá trong và gân gót. Huyệt bổ Thận âm, dùng khi mất ngủ kèm đau lưng, ù tai, ngũ tâm phiền nhiệt về đêm.</li>
</ul>
<h2>Nguyên tắc phối huyệt theo thể bệnh</h2>
<ul>
<li>Mất ngủ do Tâm Thận bất giao: phối Thần môn, Tam âm giao, Thái khê.</li>
<li>Mất ngủ do Can khí uất kết: phối Thái xung, Nội quan, Bách hội.</li>
<li>Mất ngủ do Tỳ vị bất hòa, ăn không tiêu: phối thêm Túc tam lý, Trung quản.</li>
</ul>
<h2>Kỹ thuật châm cứu và lưu ý</h2>
<p>Châm cứu thường thực hiện vào buổi tối hoặc đầu giờ tối để hỗ trợ giấc ngủ đêm, lưu kim 20–30 phút, có thể kết hợp nhĩ châm tại các điểm Tâm, Thần môn ở vành tai. Nên thực hiện liệu trình liên tục 10–15 lần kết hợp xoa bóp bấm huyệt và điều chỉnh sinh hoạt để đạt hiệu quả bền vững.</p>
<div class="art-cta-box"><p>Quý khách bị mất ngủ kéo dài, khó vào giấc hoặc hay thức giấc giữa đêm, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> châm cứu, bấm huyệt theo đúng thể bệnh. Phòng khám hoạt động từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Đặt lịch qua hotline <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 67,
    slug: "tri-me-day-man-tinh-theo-yhct",
    date: "2026-06-23",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Trị mề đay mạn tính theo Y học cổ truyền: Dưỡng từ Can – Tỳ để an da, hết ngứa",
    excerpt: "Mề đay mạn tính không chỉ là vấn đề ngoài da mà còn phản ánh sự mất cân bằng Can, Tỳ, Vệ khí bên trong; Y học cổ truyền chú trọng điều trị từ gốc kết hợp chăm sóc da bên ngoài.",
    readTime: 6,
    content: `
<h2>Mối liên hệ giữa mề đay và tạng phủ theo Y học cổ truyền</h2>
<p>Mề đay (phong chẩn khối) trong Y học cổ truyền (YHCT) được xem là biểu hiện của phong tà xâm nhập kết hợp với cơ thể có sẵn yếu tố nội sinh như huyết nhiệt, thấp trệ hoặc Vệ khí không cố. Da là nơi phản chiếu của Phế (chủ bì mao) và liên quan chặt chẽ đến Can (chủ về phong, huyết) và Tỳ (chủ vận hóa thấp). Khi Can huyết không điều hòa, Tỳ vị thấp trệ sinh độc, kết hợp phong tà bên ngoài (gió, lạnh, dị nguyên) sẽ phát thành các nốt sẩn ngứa, nổi cục từng đợt – đặc biệt khi mề đay kéo dài trên 6 tuần (mạn tính), YHCT cho rằng cơ thể đã suy yếu Vệ khí, khí huyết hư nhược khiến phong tà dễ tái phát.</p>
<h2>Phân thể mề đay mạn tính thường gặp</h2>
<ul>
<li><strong>Thể phong nhiệt:</strong> sẩn ngứa đỏ, nóng rát, tăng khi gặp nóng, lưỡi đỏ, thường gặp ở người ăn nhiều đồ cay nóng, hải sản.</li>
<li><strong>Thể phong hàn:</strong> sẩn ngứa trắng nhạt, tăng khi gặp lạnh hoặc gió, da lạnh, kèm sợ lạnh.</li>
<li><strong>Thể thấp nhiệt (Tỳ vị thấp trệ):</strong> sẩn kèm cảm giác nặng nề, đầy bụng, có thể kèm rối loạn tiêu hóa, ăn uống khó tiêu.</li>
<li><strong>Thể Can uất Tỳ hư huyết hư:</strong> mề đay tái phát liên quan đến căng thẳng, stress, kèm mệt mỏi, da khô, dễ tái phát về đêm.</li>
</ul>
<h2>Điều trị nội – dùng thuốc Y học cổ truyền</h2>
<p>Tùy thể bệnh, thầy thuốc sẽ gia giảm các vị thuốc: thể phong nhiệt dùng các vị thanh nhiệt khu phong như kim ngân hoa, liên kiều, ngưu bàng tử; thể phong hàn dùng quế chi, kinh giới, phòng phong để ôn tán phong hàn; thể thấp nhiệt phối các vị lợi thấp như hoàng bá, xa tiền tử kết hợp kiện tỳ; thể Can uất Tỳ hư cần bổ huyết, dưỡng Can, kiện Tỳ với đương quy, bạch thược, hoàng kỳ, kết hợp sài hồ để giải uất.</p>
<h2>Điều trị ngoại – châm cứu và chăm sóc da</h2>
<ul>
<li><strong>Châm cứu các huyệt:</strong> Khúc trì, Huyết hải, Tam âm giao giúp thanh nhiệt lương huyết, giảm ngứa; Túc tam lý, Tỳ du hỗ trợ kiện tỳ trừ thấp.</li>
<li><strong>Xoa bóp nhẹ vùng da nổi mề đay</strong> bằng các loại dầu thảo dược có tính mát để giảm ngứa, tránh gãi mạnh gây trầy xước, bội nhiễm.</li>
<li><strong>Tắm hoặc đắp thảo dược</strong> như lá khế, kinh giới, ngải cứu đun nước ấm để làm dịu da khi mề đay bùng phát cấp.</li>
</ul>
<h2>Chế độ ăn uống và sinh hoạt hỗ trợ</h2>
<ul>
<li>Hạn chế hải sản, đồ cay nóng, rượu bia – các yếu tố dễ gây phong nhiệt huyết nhiệt.</li>
<li>Giữ ấm cơ thể với thể phong hàn, tránh tiếp xúc gió lạnh đột ngột.</li>
<li>Ngủ đủ giấc, giảm stress vì căng thẳng tâm lý là yếu tố thúc đẩy mề đay mạn tính do Can uất.</li>
<li>Uống nhiều nước, bổ sung rau xanh để hỗ trợ Tỳ vị vận hóa thấp tốt hơn.</li>
</ul>
<div class="art-cta-box"><p>Mề đay mạn tính tái phát nhiều lần cần được biện chứng đúng thể để điều trị tận gốc, không chỉ giảm ngứa tạm thời. Quý khách hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> trực tiếp khám và tư vấn. Phòng khám đón khách từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Hotline: <strong>0973 710 237</strong>.</p></div>
  `
  },
{
  id: 61,
  slug: "bam-huyet-dieu-tri-dau-dau-tai-nha-theo-yhct",
  date: "2026-06-23",
  category: "khong-thuoc",
  categoryLabel: "Không dùng thuốc",
  icon: "🧘",
  gradient: "g-herb",
  title: "Bấm huyệt điều trị đau đầu tại nhà: Phương pháp không dùng thuốc theo Y học cổ truyền",
  excerpt: "Bấm huyệt là phương pháp không dùng thuốc giúp giảm đau đầu nhanh, an toàn. Bài viết hướng dẫn các huyệt vị cốt lõi và cách tự thực hành đúng kỹ thuật tại nhà.",
  readTime: 6,
  content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Đau đầu là triệu chứng rất phổ biến, có thể do căng thẳng, thiếu ngủ, thay đổi thời tiết hoặc các rối loạn nội tại của cơ thể. Trong Y học cổ truyền (YHCT), đau đầu được gọi là "đầu thống", xảy ra khi khí huyết vận hành trong các kinh lạc vùng đầu bị tắc trở, hoặc do tạng phủ (can, tỳ, thận) suy yếu khiến đầu không được nuôi dưỡng đầy đủ. Bấm huyệt là phương pháp dùng lực của ngón tay tác động lên các huyệt vị trên kinh lạc để khai thông khí huyết, không cần dùng thuốc, có thể tự thực hiện tại nhà một cách an toàn nếu đúng kỹ thuật và đúng huyệt vị.</p>

<h2>Phân thể nguyên nhân đau đầu theo YHCT</h2>
<ul>
<li><strong>Thể can dương thượng cang:</strong> Đau đầu hai bên thái dương hoặc đỉnh đầu, đau căng tức, dễ kèm chóng mặt, hoa mắt, bực dọc, hay xảy ra khi căng thẳng, mất ngủ.</li>
<li><strong>Thể đàm thấp:</strong> Đau đầu có cảm giác nặng nề, âm ỉ, kèm chóng mặt, buồn nôn, người nặng nề, hay gặp ở người béo, ăn nhiều đồ dầu mỡ.</li>
<li><strong>Thể khí huyết hư:</strong> Đau đầu âm ỉ, kéo dài, tăng khi mệt mỏi, làm việc quá sức, kèm mệt mỏi, sắc mặt nhợt, hay quên.</li>
<li><strong>Thể ngoại cảm phong hàn:</strong> Đau đầu xuất hiện đột ngột sau khi gặp lạnh, gió, kèm sợ lạnh, ngạt mũi, đau mỏi vai gáy.</li>
</ul>

<h2>Phương pháp điều trị và huyệt vị cốt lõi</h2>
<p>Nguyên tắc bấm huyệt là sơ thông kinh lạc vùng đầu, bình can tức phong, kiện tỳ trừ đàm hoặc bổ khí huyết tùy theo thể bệnh. Một số huyệt thường dùng:</p>
<ul>
<li><strong>Bách hội (GV20):</strong> Ở đỉnh đầu, giao điểm đường nối hai đỉnh vành tai với đường giữa đầu, giúp thanh thần, giảm đau đỉnh đầu, chóng mặt.</li>
<li><strong>Phong trì (GB20):</strong> Ở chỗ lõm sau gáy, hai bên cơ thang, giúp khu phong, giảm đau đầu vùng sau gáy do căng cơ hoặc cảm lạnh.</li>
<li><strong>Thái dương (huyệt ngoài kinh):</strong> Ở hõm thái dương, cách đuôi mắt khoảng 1 đốt ngón tay, giảm đau đầu vùng thái dương rất hiệu quả.</li>
<li><strong>Ấn đường (EX-HN3):</strong> Ở điểm giữa hai đầu lông mày, giúp giảm đau đầu vùng trán, an thần.</li>
<li><strong>Hợp cốc (LI4):</strong> Ở mu bàn tay, giữa ngón cái và ngón trỏ, có tác dụng giảm đau toàn thân, đặc biệt đau đầu vùng trán và thái dương.</li>
<li><strong>Thái xung (LR3):</strong> Ở mu bàn chân, giữa ngón chân 1 và 2, giúp bình can, giảm đau đầu do căng thẳng, bực dọc (thể can dương thượng cang).</li>
</ul>
<p>Mỗi huyệt nên bấm day theo chiều kim đồng hồ với lực vừa phải trong 1-2 phút, kết hợp hít thở sâu, có thể thực hiện 2-3 lần mỗi ngày khi cơn đau đầu xuất hiện.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
<li>Rửa sạch tay, ngồi hoặc nằm ở tư thế thoải mái, thư giãn cơ vùng đầu cổ trước khi bấm huyệt.</li>
<li>Dùng đầu ngón tay cái hoặc ngón giữa ấn vào huyệt với lực tăng dần, day nhẹ theo vòng tròn, tránh ấn quá mạnh gây bầm tím.</li>
<li>Kết hợp xoa nóng hai lòng bàn tay rồi vuốt nhẹ từ trán ra hai bên thái dương và xuống sau gáy để tăng lưu thông khí huyết.</li>
<li>Uống đủ nước, ngủ đủ giấc, hạn chế dùng thiết bị điện tử liên tục để giảm nguy cơ tái phát đau đầu do căng thẳng.</li>
<li>Nếu đau đầu kèm sốt cao, nôn nhiều, yếu liệt tay chân hoặc đau dữ dội bất thường, cần đến cơ sở y tế ngay, không chỉ bấm huyệt tại nhà.</li>
</ul>

<div class="art-cta-box"><p>Bấm huyệt đúng kỹ thuật giúp giảm đau đầu an toàn, không cần dùng thuốc, nhưng cần xác định đúng thể bệnh để đạt hiệu quả tốt nhất. Hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> trực tiếp thăm khám, biện chứng phân thể và hướng dẫn phác đồ châm cứu, bấm huyệt phù hợp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
},
{
  id: 55,
  slug: "viem-khop-vai-dong-cung-ngu-thap-kien-theo-yhct",
  date: "2026-06-22",
  category: "mat-benh",
  categoryLabel: "Mặt bệnh",
  icon: "🩺",
  gradient: "g-navy",
  title: "Viêm khớp vai đông cứng (Ngũ thập kiên) theo Y học cổ truyền: Phân thể và phác đồ điều trị",
  excerpt: "Viêm khớp vai đông cứng, dân gian còn gọi là \"ngũ thập kiên\", gây đau và hạn chế vận động khớp vai kéo dài. Y học cổ truyền phân thể bệnh rõ ràng để có phác đồ châm cứu, xoa bóp và dùng thuốc phù hợp.",
  readTime: 6,
  content: `
<h2>Tổng quan về viêm khớp vai đông cứng</h2>
<p>Viêm khớp vai đông cứng (frozen shoulder) là tình trạng viêm dính bao khớp vai khiến khớp vai đau nhức và bị hạn chế vận động nặng, thường gặp ở người 40-60 tuổi nên dân gian gọi là "ngũ thập kiên". Bệnh diễn tiến qua ba giai đoạn: giai đoạn đau (đau tăng dần, vận động khó), giai đoạn cứng (đau giảm nhưng vận động rất hạn chế) và giai đoạn hồi phục (vận động cải thiện dần). Trong Y học cổ truyền (YHCT), bệnh được quy vào chứng "kiên tý" hay "lậu kiên phong", do kinh lạc vùng vai bị tà khí phong hàn thấp xâm nhập, khí huyết vận hành kém, lâu ngày dẫn đến khí huyết ứ trệ tại khớp vai.</p>

<h2>Nguyên nhân và cơ chế bệnh sinh theo Y học cổ truyền</h2>
<p>YHCT cho rằng nguyên nhân gây bệnh gồm hai nhóm chính: ngoại nhân và nội nhân. Ngoại nhân là phong, hàn, thấp xâm nhập qua da, kinh lạc vùng vai gáy khi cơ thể suy yếu, ra mồ hôi gặp lạnh hoặc nằm ngủ nơi có gió lùa. Nội nhân là do tạng phủ suy yếu, đặc biệt là can thận hư, khí huyết bất túc ở người trung niên, khiến cân cơ vùng vai không được nuôi dưỡng đầy đủ, dễ bị tà khí thừa cơ xâm nhập gây tắc trở kinh lạc, sinh đau và co cứng khớp vai.</p>

<h2>Phân thể bệnh</h2>
<p>Tùy theo biểu hiện lâm sàng, viêm khớp vai đông cứng được chia thành các thể sau:</p>
<ul>
<li><strong>Thể phong hàn thấp tý (giai đoạn cấp):</strong> Đau vai dữ dội, đau tăng khi gặp lạnh hoặc mưa ẩm, sợ lạnh, vận động khớp vai rất hạn chế, rêu lưỡi trắng nhớt.</li>
<li><strong>Thể khí huyết ứ trệ:</strong> Đau nhói cố định một vị trí, đau tăng về đêm, vận động khớp vai bị cản trở rõ, có thể sờ thấy điểm đau chói (a thị huyệt), lưỡi có điểm ứ huyết.</li>
<li><strong>Thể can thận âm hư:</strong> Thường gặp ở người trung niên, cao tuổi, đau vai âm ỉ kéo dài kèm mỏi lưng, gối, ù tai, ngủ kém, lưỡi đỏ ít rêu.</li>
<li><strong>Thể đàm thấp ứ trệ:</strong> Gặp ở người thể trạng béo, nặng nề, vai tê bì nhiều hơn đau, kèm cảm giác nặng nề toàn thân, rêu lưỡi dày nhớt.</li>
</ul>

<h2>Phương pháp điều trị</h2>
<p>Nguyên tắc điều trị chung là khu phong, tán hàn, trừ thấp, hoạt huyết thông kinh lạc, kết hợp bổ khí huyết và bổ can thận tùy thể bệnh.</p>
<ul>
<li><strong>Châm cứu:</strong> Sử dụng các huyệt vùng vai như Kiên ngung, Kiên liêu, Kiên trinh, Tý nhu phối hợp với Khúc trì, Hợp cốc, Ngoại quan để thông kinh hoạt lạc, giảm đau, tăng tầm vận động khớp vai.</li>
<li><strong>Cứu ngải (ôn châm):</strong> Áp dụng cho thể phong hàn thấp tý, giúp ôn thông kinh lạc, giảm đau nhanh.</li>
<li><strong>Xoa bóp bấm huyệt:</strong> Kết hợp các thủ pháp xoa, day, bấm, vận động khớp vai nhẹ nhàng để giảm dính khớp, tăng tầm vận động.</li>
<li><strong>Bài thuốc YHCT:</strong> Thể phong hàn thấp dùng các bài khu phong tán hàn trừ thấp; thể khí huyết ứ trệ dùng bài hoạt huyết hóa ứ; thể can thận âm hư dùng các bài bổ can thận, dưỡng cân.</li>
</ul>

<h2>Lời khuyên phòng ngừa và tập luyện</h2>
<p>Người bệnh cần giữ ấm vùng vai gáy, tránh để quạt, điều hòa thổi trực tiếp vào vai khi ngủ. Nên tập các bài vận động khớp vai nhẹ nhàng hàng ngày như đưa tay lên cao, xoay vai, kéo dây qua ròng rọc để duy trì tầm vận động, tránh để khớp vai bị dính cứng hoàn toàn. Việc điều trị kết hợp châm cứu, xoa bóp và bài thuốc phù hợp thể bệnh ngay từ giai đoạn đầu sẽ giúp rút ngắn thời gian hồi phục đáng kể.</p>

<div class="art-cta-box"><p>Nếu bạn đang bị đau cứng khớp vai, hạn chế vận động kéo dài, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> trực tiếp thăm khám, biện chứng phân thể và xây dựng phác đồ châm cứu, xoa bóp, dùng thuốc phù hợp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
},
{
  id: 56,
  slug: "tho-bung-phuc-thuc-ho-hap-duong-sinh-khong-dung-thuoc",
  date: "2026-06-22",
  category: "khong-thuoc",
  categoryLabel: "Không dùng thuốc",
  icon: "🧘",
  gradient: "g-herb",
  title: "Thở bụng (Phúc thức hô hấp): Phương pháp dưỡng sinh không dùng thuốc theo Y học cổ truyền",
  excerpt: "Thở bụng là kỹ thuật hô hấp cổ truyền giúp điều khí, an thần, kiện tỳ vị mà không cần dùng thuốc. Đây là phương pháp dưỡng sinh đơn giản, có thể luyện tập mỗi ngày để cải thiện sức khỏe toàn diện.",
  readTime: 5,
  content: `
<h2>Thở bụng là gì theo quan điểm Y học cổ truyền</h2>
<p>Thở bụng, còn gọi là phúc thức hô hấp hay thở đan điền, là kỹ thuật hít thở sâu bằng cơ hoành, đưa khí xuống vùng bụng dưới (vùng đan điền) thay vì chỉ thở ngắn ở lồng ngực như thông thường. Theo Y học cổ truyền, "khí" là nguồn năng lượng sống vận hành trong toàn thân, và đan điền được xem là "bể chứa khí" quan trọng của cơ thể. Luyện thở bụng đúng cách giúp dẫn khí về đan điền, làm cho khí huyết lưu thông điều hòa, từ đó nuôi dưỡng ngũ tạng, đặc biệt là tỳ, phế và thận.</p>

<h2>Cơ chế tác dụng</h2>
<p>Khi thở bụng, cơ hoành hạ xuống sâu hơn, tạo áp lực nhẹ xoa bóp các tạng phủ vùng bụng như tỳ, vị, gan, thận, hỗ trợ tiêu hóa và tuần hoàn khí huyết tại chỗ. Đồng thời, nhịp thở chậm và sâu giúp tâm thần an định, giảm trạng thái căng thẳng, lo âu – điều mà YHCT gọi là "điều tâm, dưỡng thần". Về lâu dài, luyện tập thường xuyên giúp kiện tỳ vị, bổ phế khí, cố thận tinh, là một phương pháp dưỡng sinh toàn diện không cần dùng đến thuốc.</p>

<h2>Hướng dẫn kỹ thuật thực hành</h2>
<ul>
<li><strong>Bước 1:</strong> Ngồi hoặc nằm ở tư thế thoải mái, thả lỏng toàn thân, một tay đặt lên ngực, một tay đặt lên bụng dưới rốn.</li>
<li><strong>Bước 2:</strong> Hít vào chậm bằng mũi, cảm nhận bụng dưới phình lên (tay đặt trên bụng nhô lên), tay trên ngực gần như không di chuyển.</li>
<li><strong>Bước 3:</strong> Giữ hơi nhẹ trong 1-2 giây, sau đó thở ra chậm bằng mũi hoặc miệng, bụng dưới hạ xuống tự nhiên.</li>
<li><strong>Bước 4:</strong> Lặp lại đều đặn 10-15 phút mỗi lần, 1-2 lần mỗi ngày, tốt nhất vào sáng sớm và trước khi ngủ.</li>
</ul>

<h2>Lợi ích với các nhóm bệnh thường gặp</h2>
<p>Thở bụng được khuyến khích áp dụng hỗ trợ cho nhiều tình trạng: người mất ngủ, hay lo âu căng thẳng nhờ tác dụng an thần định tâm; người rối loạn tiêu hóa, đầy bụng do tỳ vị khí trệ nhờ tác dụng kiện tỳ; người có bệnh hô hấp mạn tính như hen, viêm phế quản nhờ tăng dung tích phổi và điều hòa phế khí; người cao tuổi suy nhược cũng có thể luyện tập nhẹ nhàng để bồi bổ nguyên khí.</p>

<h2>Lưu ý khi luyện tập</h2>
<p>Nên luyện tập ở nơi thoáng khí, yên tĩnh, tránh tập ngay sau khi ăn no. Người mới bắt đầu nên tập với nhịp thở tự nhiên, không gắng sức nín thở quá lâu để tránh chóng mặt. Người có bệnh tim mạch, hô hấp nặng nên tham khảo ý kiến thầy thuốc trước khi luyện tập với cường độ cao.</p>

<div class="art-cta-box"><p>Nếu bạn muốn được hướng dẫn luyện thở bụng đúng cách kết hợp với các phương pháp dưỡng sinh khác phù hợp thể trạng, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> tư vấn trực tiếp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
},
{
  id: 57,
  slug: "que-chi-phuc-linh-hoan-bai-thuoc-hoat-huyet-tieu-trung",
  date: "2026-06-22",
  category: "thuoc-yhct",
  categoryLabel: "Thuốc YHCT",
  icon: "🌿",
  gradient: "g-fire",
  title: "Quế chi phục linh hoàn — Bài thuốc hoạt huyết tiêu trưng kinh điển của Y học cổ truyền",
  excerpt: "Quế chi phục linh hoàn là bài thuốc cổ phương nổi tiếng trong điều trị huyết ứ, trưng hà (u cục vùng bụng dưới), rong huyết và thống kinh ở phụ nữ. Bài thuốc thể hiện rõ nguyên tắc hoạt huyết hóa ứ của Y học cổ truyền.",
  readTime: 5,
  content: `
<h2>Nguồn gốc xuất xứ</h2>
<p>Quế chi phục linh hoàn (còn gọi là Quế chi phục linh thang) là bài thuốc cổ phương được ghi chép trong sách "Kim quỹ yếu lược" của danh y Trương Trọng Cảnh thời Đông Hán. Đây là một trong những bài thuốc kinh điển về hoạt huyết hóa ứ, tiêu trưng (làm tan các khối u cục), được sử dụng phổ biến trong các bệnh lý phụ khoa liên quan đến huyết ứ ở phụ nữ.</p>

<h2>Thành phần và vai trò từng vị thuốc</h2>
<p>Bài thuốc gốc gồm năm vị dược liệu với liều lượng bằng nhau, mỗi vị giữ một vai trò riêng trong cấu trúc bài thuốc:</p>
<ul>
<li><strong>Quế chi:</strong> Vị quân dược, có tác dụng ôn thông kinh mạch, hành huyết, giúp dẫn các vị thuốc khác đi vào vùng huyết ứ.</li>
<li><strong>Phục linh:</strong> Kiện tỳ, lợi thủy, trừ thấp, hỗ trợ tiêu trừ phần thấp trệ phối hợp với huyết ứ tạo thành trưng hà.</li>
<li><strong>Đào nhân:</strong> Hoạt huyết, hóa ứ, nhuận tràng, là vị thuốc chủ lực phá vỡ huyết ứ kết tụ.</li>
<li><strong>Xích thược (hoặc Bạch thược):</strong> Hoạt huyết, chỉ thống, điều hòa kinh nguyệt, giảm đau do huyết ứ.</li>
<li><strong>Đan bì (mẫu đơn bì):</strong> Thanh huyết nhiệt, hoạt huyết, hóa ứ, hỗ trợ tiêu tan kết tụ huyết ứ kèm nhiệt.</li>
</ul>
<p>Sự phối hợp giữa vị ôn (Quế chi) và các vị hoạt huyết, thanh nhiệt khác tạo nên tác dụng "ôn thông nhưng không quá nhiệt, hoạt huyết nhưng không hại chính khí", phù hợp điều trị huyết ứ kèm thấp trệ kéo dài.</p>

<h2>Công năng chủ trị</h2>
<p>Bài thuốc có công năng hoạt huyết hóa ứ, tiêu trưng tán kết, thường được chỉ định trong các trường hợp huyết ứ ở tử cung và vùng bụng dưới gây ra các triệu chứng như đau bụng dưới, rong huyết, kinh nguyệt không đều, có khối u cục vùng bụng dưới.</p>

<h2>Chỉ định lâm sàng</h2>
<ul>
<li>U xơ tử cung kèm rong huyết, đau bụng dưới do huyết ứ.</li>
<li>Thống kinh (đau bụng kinh) do huyết ứ trệ, đau cố định, máu kinh có cục.</li>
<li>Lạc nội mạc tử cung, u nang buồng trứng có biểu hiện huyết ứ.</li>
<li>Sót thai lưu, huyết ứ sau sảy thai, sau sinh gây đau bụng dưới kéo dài.</li>
</ul>

<h2>Chống chỉ định và lưu ý</h2>
<p>Bài thuốc có tính hoạt huyết mạnh nên tuyệt đối không dùng cho phụ nữ đang mang thai vì có thể gây sảy thai. Người có thể trạng hư hàn, khí huyết hư nhiều, hoặc đang có xuất huyết cấp nặng cần được thầy thuốc đánh giá kỹ và gia giảm phù hợp trước khi sử dụng. Việc dùng bài thuốc cần có sự thăm khám, biện chứng cụ thể của thầy thuốc YHCT, không tự ý sử dụng để tránh ảnh hưởng đến sức khỏe sinh sản.</p>

<div class="art-cta-box"><p>Nếu bạn đang gặp các vấn đề về huyết ứ, rong huyết, thống kinh hoặc u xơ tử cung, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám, biện chứng và tư vấn sử dụng bài thuốc phù hợp, an toàn. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
},
{
  id: 58,
  slug: "cham-soc-suc-khoe-sau-50-tuoi-theo-yhct",
  date: "2026-06-22",
  category: "phong-benh",
  categoryLabel: "Phòng bệnh",
  icon: "🛡️",
  gradient: "g-amber",
  title: "Chăm sóc sức khỏe sau 50 tuổi theo Y học cổ truyền: Dưỡng sinh để sống thọ, sống khỏe",
  excerpt: "Sau tuổi 50, cơ thể trải qua nhiều thay đổi sinh lý theo quan điểm Y học cổ truyền. Dưỡng sinh đúng cách ở giai đoạn này giúp phòng bệnh, kéo dài tuổi thọ và nâng cao chất lượng sống.",
  readTime: 6,
  content: `
<h2>Đặc điểm sinh lý cơ thể sau 50 tuổi theo Y học cổ truyền</h2>
<p>Theo Y học cổ truyền (YHCT), con người trải qua các giai đoạn sinh, trưởng, thịnh, suy theo quy luật của thận khí và tiên thiên chi khí. Sau tuổi 50, thận khí bắt đầu suy giảm rõ rệt, kéo theo sự suy yếu của các tạng phủ khác do thận được xem là "gốc của tiên thiên". Đồng thời, tỳ vị (hệ tiêu hóa) cũng hoạt động kém hiệu quả hơn, khí huyết sinh ra không còn dồi dào như tuổi trẻ, dẫn đến các biểu hiện như mỏi lưng, mỏi gối, tóc bạc, da khô, ngủ kém, trí nhớ giảm.</p>

<h2>Nguyên tắc dưỡng sinh ở tuổi trung niên và cao niên</h2>
<p>Nguyên tắc dưỡng sinh cốt lõi sau 50 tuổi là "bổ thận, kiện tỳ, dưỡng tâm, điều khí huyết". Cần chú trọng bồi bổ từ từ, tránh dùng các phương pháp quá mạnh gây hao tổn chính khí. Việc dưỡng sinh cần kết hợp đồng thời cả ăn uống, vận động, sinh hoạt và điều chỉnh tinh thần, không chỉ dựa vào một phương pháp đơn lẻ.</p>

<h2>Chế độ ăn uống phù hợp</h2>
<ul>
<li>Ăn uống điều độ, ưu tiên thực phẩm dễ tiêu, ấm nóng, hạn chế đồ lạnh, đồ dầu mỡ gây hại tỳ vị.</li>
<li>Bổ sung các thực phẩm bổ thận như hạt sen, kỷ tử, hà thủ ô, mè đen, các loại đậu.</li>
<li>Ăn nhiều rau xanh, trái cây tươi để bổ sung tân dịch, hỗ trợ nhuận tràng, phòng táo bón thường gặp ở người cao tuổi.</li>
<li>Hạn chế rượu bia, đồ ăn quá mặn, quá cay nóng vì dễ gây tổn hại can thận.</li>
</ul>

<h2>Vận động và rèn luyện thân thể</h2>
<p>Người sau 50 tuổi nên duy trì vận động nhẹ nhàng, đều đặn mỗi ngày như đi bộ, dưỡng sinh, bát đoạn cẩm, thái cực quyền, tránh các bài tập gắng sức quá mức gây hao tổn nguyên khí. Vận động đều đặn giúp khí huyết lưu thông, xương khớp linh hoạt, phòng ngừa thoái hóa khớp và loãng xương.</p>

<h2>Điều chỉnh sinh hoạt và tinh thần</h2>
<p>YHCT rất coi trọng yếu tố tinh thần trong dưỡng sinh, gọi là "dưỡng tâm an thần". Cần giữ tâm trạng an định, tránh lo âu, tức giận quá mức vì dễ làm tổn hại can khí. Nên ngủ đủ giấc, đi ngủ và thức dậy đúng giờ, tránh thức khuya làm hao tổn âm huyết.</p>

<h2>Hỗ trợ bằng các phương pháp Y học cổ truyền</h2>
<p>Có thể áp dụng thêm các phương pháp như ngâm chân thảo dược ấm trước khi ngủ để dẫn khí huyết về dưới, bấm huyệt dưỡng sinh tại các huyệt Túc tam lý, Thái khê, Quan nguyên, Khí hải để bồi bổ nguyên khí. Việc thăm khám định kỳ với thầy thuốc YHCT để được biện chứng thể trạng và bồi bổ bằng bài thuốc phù hợp cũng rất cần thiết để phòng bệnh từ sớm.</p>

<div class="art-cta-box"><p>Nếu bạn đã ngoài 50 tuổi và muốn được tư vấn dưỡng sinh, bồi bổ sức khỏe phù hợp với thể trạng, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám trực tiếp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
},
{
  id: 59,
  slug: "phuong-huyet-dieu-tri-viem-mui-di-ung",
  date: "2026-06-22",
  category: "phuong-huyet",
  categoryLabel: "Phương huyệt",
  icon: "📍",
  gradient: "g-huyet",
  title: "Phương huyệt điều trị viêm mũi dị ứng theo Y học cổ truyền",
  excerpt: "Châm cứu các huyệt vị vùng mặt, tay, chân kết hợp bổ phế, kiện tỳ giúp giảm nhanh các triệu chứng hắt hơi, ngạt mũi, chảy nước mũi do viêm mũi dị ứng, đồng thời hỗ trợ phòng ngừa tái phát lâu dài.",
  readTime: 5,
  content: `
<h2>Tổng quan viêm mũi dị ứng theo Y học cổ truyền</h2>
<p>Viêm mũi dị ứng trong Y học cổ truyền (YHCT) thuộc chứng "tỵ cừu" hay "thấu phong", biểu hiện bằng hắt hơi liên tục, ngạt mũi, chảy nước mũi trong, ngứa mũi, thường tái phát khi gặp lạnh hoặc thay đổi thời tiết. Nguyên nhân chủ yếu do phế khí hư, vệ khí không cố nên dễ bị phong hàn xâm nhập qua mũi; đồng thời tỳ thận khí hư cũng làm giảm khả năng cố nhiếp tân dịch, khiến nước mũi chảy nhiều, bệnh dễ tái diễn mạn tính.</p>

<h2>Nguyên tắc điều trị bằng châm cứu</h2>
<p>Nguyên tắc điều trị là khu phong, thông khiếu, kết hợp bổ phế khí, kiện tỳ và ích thận để củng cố chính khí, giảm tần suất tái phát. Châm cứu tác động trực tiếp lên các huyệt vùng mũi mặt giúp giảm nhanh triệu chứng, đồng thời phối hợp các huyệt toàn thân để điều chỉnh căn nguyên.</p>

<h2>Các huyệt vị chính trong điều trị</h2>
<ul>
<li><strong>Nghinh hương (LI20):</strong> Nằm ở rãnh mũi má, ngang cánh mũi. Tác dụng thông mũi, khu phong, giảm ngạt mũi nhanh.</li>
<li><strong>Ấn đường (EX-HN3):</strong> Điểm giữa hai đầu lông mày. Tác dụng thông khiếu, an thần, hỗ trợ giảm ngứa mũi, hắt hơi.</li>
<li><strong>Hợp cốc (LI4):</strong> Nằm ở mu bàn tay, giữa khe xương bàn tay ngón 1 và ngón 2. Tác dụng giải biểu, khu phong, tăng cường vệ khí.</li>
<li><strong>Phong trì (GB20):</strong> Ở chỗ lõm sau gáy, dưới đáy sọ, giữa cơ ức đòn chũm và cơ thang. Tác dụng khu phong giải biểu, trị các chứng do phong tà gây ra.</li>
<li><strong>Phế du (BL13):</strong> Nằm ở lưng trên, cạnh đốt sống ngực D3. Tác dụng bổ phế khí, là huyệt quan trọng để củng cố tạng phế.</li>
<li><strong>Túc tam lý (ST36):</strong> Dưới hõm ngoài xương bánh chè khoảng 3 thốn. Tác dụng bổ tỳ vị, ích khí, tăng cường chính khí toàn thân.</li>
<li><strong>Thận du (BL23):</strong> Cạnh đốt sống thắt lưng L2. Tác dụng bổ thận khí, dùng trong thể bệnh mạn tính, tái phát nhiều lần.</li>
</ul>

<h2>Phối hợp cứu ngải và xoa bóp</h2>
<p>Trong giai đoạn cấp hoặc thể hàn rõ, có thể phối hợp cứu ngải ấm tại các huyệt Nghinh hương, Phế du để tăng hiệu quả khu phong tán hàn. Xoa bóp nhẹ vùng cánh mũi, ấn đường hàng ngày cũng giúp giảm triệu chứng ngạt mũi, hỗ trợ điều trị duy trì tại nhà.</p>

<h2>Lưu ý khi điều trị</h2>
<p>Người bệnh cần tránh tiếp xúc với các yếu tố dị nguyên đã biết, giữ ấm vùng mũi họng khi thời tiết lạnh, hạn chế ăn đồ lạnh, đồ sống. Quá trình châm cứu cần thực hiện liên tục theo liệu trình của thầy thuốc để đạt hiệu quả bền vững, kết hợp bồi bổ phế tỳ thận nhằm hạn chế tái phát lâu dài.</p>

<div class="art-cta-box"><p>Nếu bạn thường xuyên bị hắt hơi, ngạt mũi, chảy nước mũi do viêm mũi dị ứng, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám và xây dựng phác đồ châm cứu phù hợp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
},
{
  id: 60,
  slug: "tri-tham-quang-mat-theo-yhct",
  date: "2026-06-22",
  category: "lam-dep",
  categoryLabel: "Làm đẹp",
  icon: "🌸",
  gradient: "g-rose",
  title: "Trị thâm quầng mắt theo Y học cổ truyền: Dưỡng từ Thận - Can để sáng mắt, đẹp da",
  excerpt: "Thâm quầng mắt không chỉ là vấn đề thẩm mỹ ngoài da mà theo Y học cổ truyền còn phản ánh tình trạng tạng phủ bên trong, đặc biệt là thận và can. Điều trị từ gốc kết hợp trong ngoài giúp cải thiện bền vững.",
  readTime: 5,
  content: `
<h2>Quan điểm Y học cổ truyền về thâm quầng mắt</h2>
<p>Theo Y học cổ truyền (YHCT), vùng da quanh mắt là nơi mỏng nhất trên cơ thể và có liên hệ mật thiết với các đường kinh của tạng thận, can và bàng quang. Thận chủ về tinh, khai khiếu ra tai nhưng có liên quan đến sắc tối vùng mắt; can chủ về huyết, khai khiếu ra mắt. Khi thận khí hư hoặc can huyết bất túc, khí huyết không đủ nuôi dưỡng vùng da quanh mắt, hoặc khí huyết ứ trệ tại chỗ, sẽ dẫn đến thâm quầng mắt, da vùng này trở nên sạm tối, kém sức sống.</p>

<h2>Phân loại theo biện chứng</h2>
<ul>
<li><strong>Thể thận hư:</strong> Quầng mắt thâm xanh đen, kèm mỏi lưng gối, ù tai, ngủ kém, da nhợt nhạt. Thường gặp ở người làm việc quá sức, thiếu ngủ kéo dài.</li>
<li><strong>Thể huyết ứ:</strong> Quầng mắt thâm tím, có thể kèm các đường tĩnh mạch nổi rõ dưới da, lưỡi có điểm ứ huyết, thường liên quan đến tuần hoàn máu kém tại chỗ.</li>
<li><strong>Thể khí huyết hư:</strong> Quầng mắt thâm nhạt, da xung quanh mắt nhão, kém đàn hồi, kèm mệt mỏi, sắc mặt nhợt, hay gặp ở người mới sinh, mới ốm dậy hoặc ăn uống kém.</li>
</ul>

<h2>Phương pháp điều trị bên trong</h2>
<p>Tùy theo thể bệnh, thầy thuốc YHCT sẽ gia giảm các bài thuốc phù hợp: thể thận hư dùng các bài bổ thận như Lục vị địa hoàng hoàn gia giảm; thể huyết ứ dùng các bài hoạt huyết hóa ứ; thể khí huyết hư dùng các bài bổ khí huyết như Tứ quân tử thang, Quy tỳ thang gia giảm. Việc bồi bổ tạng phủ từ bên trong là nền tảng quan trọng để cải thiện thâm quầng mắt bền vững, không chỉ che lấp tạm thời bên ngoài.</p>

<h2>Phương pháp điều trị bên ngoài</h2>
<ul>
<li><strong>Châm cứu, bấm huyệt quanh mắt:</strong> Tác động vào các huyệt Tình minh, Toản trúc, Ty trúc không, Thái dương giúp tăng tuần hoàn máu vùng mắt, giảm sạm thâm.</li>
<li><strong>Xoa mặt dưỡng nhan:</strong> Thực hiện các động tác xoa, ấn nhẹ vùng quanh mắt theo chiều từ trong ra ngoài mỗi sáng tối giúp khí huyết lưu thông tại chỗ.</li>
<li><strong>Chườm ấm thảo dược:</strong> Dùng túi thảo dược ấm chườm nhẹ quanh mắt giúp giảm ứ trệ, làm sáng vùng da thâm.</li>
</ul>

<h2>Chế độ sinh hoạt hỗ trợ</h2>
<p>Cần ngủ đủ giấc, đi ngủ trước 23 giờ để dưỡng thận âm, hạn chế thức khuya làm hao tổn tinh huyết. Bổ sung thực phẩm bổ thận, dưỡng huyết như kỷ tử, hạt sen, mè đen, các loại rau xanh đậm màu. Hạn chế dùng mắt quá nhiều liên tục (xem điện thoại, máy tính kéo dài) vì dễ làm hao tổn can huyết, khiến quầng mắt thâm nặng hơn.</p>

<div class="art-cta-box"><p>Nếu bạn đang gặp tình trạng thâm quầng mắt kéo dài kèm các dấu hiệu mệt mỏi, mất ngủ, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> thăm khám, biện chứng và tư vấn phương pháp điều trị trong ngoài phù hợp. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch: <strong>0973 710 237</strong>.</p></div>
  `
},
  {
    id: 54,
    slug: "cao-gio-chua-cam-cum-dau-moi-khong-dung-thuoc",
    date: "2026-06-22",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Cạo gió chữa cảm cúm, đau mỏi: Phương pháp không dùng thuốc theo Y học cổ truyền",
    excerpt: "Cạo gió là liệu pháp dân gian lâu đời giúp giải cảm, giảm đau mỏi nhanh chóng mà không cần thuốc. Tìm hiểu cơ chế, kỹ thuật đúng và những lưu ý quan trọng theo Y học cổ truyền.",
    readTime: 5,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Cạo gió (còn gọi là sát phong, Trung Quốc gọi là "guasha") là phương pháp dùng vật có cạnh tròn nhẵn (đồng bạc, sừng trâu, thìa inox) cạo trên da theo một chiều nhất định, kết hợp với dầu gió hoặc dầu khuynh diệp, nhằm đẩy ngoại tà ra khỏi cơ thể. Theo lý luận YHCT, các bệnh cảm mạo, đau mỏi cơ thể thường do <strong>phong, hàn, thấp tà</strong> xâm nhập qua bì phu (da) và tấu lý (khoảng giữa da và cơ), làm tắc nghẽn kinh lạc, khí huyết lưu thông kém. Cạo gió tác động trực tiếp lên bì phu và lạc mạch ở bề mặt, giúp khai thông tấu lý, đẩy tà khí ra ngoài, từ đó kinh lạc thông suốt, khí huyết điều hòa, các triệu chứng đau mỏi, sợ lạnh, nhức đầu nhanh chóng giảm.</p>
<p>Quan sát vết cạo gió (xuất hiện các vết đỏ tím gọi là "sa") cũng là một hình thức chẩn đoán: vết sa đậm, tím sẫm cho thấy tà khí ứ trệ nhiều; vết sa nhạt, hồng cho thấy khí huyết còn lưu thông tốt. Đây là phương pháp đơn giản, rẻ tiền, hiệu quả nhanh đối với các chứng cảm mạo phong hàn mới phát và đau mỏi cơ do nhiễm lạnh.</p>

<h2>Phân thể / Chỉ định và chống chỉ định</h2>
<ul>
  <li><strong>Thể cảm mạo phong hàn:</strong> Sợ lạnh, gai rét, nhức đầu, ngạt mũi, hắt hơi, đau mỏi toàn thân, chưa sốt cao. Đây là chỉ định tốt nhất cho cạo gió.</li>
  <li><strong>Thể đau mỏi cơ do nhiễm lạnh, ngồi sai tư thế:</strong> Đau cứng vùng cổ, vai, lưng do hàn thấp tích tụ tại cơ, lạc mạch bị tắc nghẽn cục bộ.</li>
  <li><strong>Thể cảm mạo phong nhiệt (cần cân nhắc):</strong> Sốt cao, họng đỏ rát, người nóng bừng — nên cạo nhẹ và phối hợp thanh nhiệt, không cạo mạnh gây kích thích thêm dương nhiệt.</li>
  <li><strong>Chống chỉ định:</strong> Phụ nữ có thai, người có rối loạn đông máu, da có vết thương hở, viêm nhiễm da, người quá suy nhược, trẻ nhỏ dưới 3 tuổi, người vừa ăn no hoặc đang say rượu.</li>
</ul>

<h2>Kỹ thuật cạo gió đúng cách và các vùng huyệt thường dùng</h2>
<p>Trước khi cạo, nên thoa một lớp dầu gió hoặc dầu khuynh diệp lên da để giảm ma sát. Dùng vật cạo có cạnh tròn, giữ góc nghiêng khoảng 45 độ so với da, cạo theo một chiều từ trên xuống dưới hoặc từ trong ra ngoài, lực vừa phải, mỗi vùng cạo 15–20 lần đến khi da đỏ hồng hoặc xuất hiện vết sa nhẹ thì dừng.</p>
<p>Các vùng và huyệt thường được cạo gió để giải cảm, giảm đau mỏi:</p>
<ul>
  <li><strong>Vùng sống lưng dọc hai bên cột sống (giáp tích):</strong> Cạo từ huyệt Đại trữ (BL11) xuống đến Thận du (BL23) — vùng tập trung các du huyệt của tạng phủ, giúp giải cảm toàn thân.</li>
  <li><strong>Phong trì (GB20):</strong> Sau gáy, dưới chỗ lõm xương chẩm — chủ trị nhức đầu, cứng cổ do phong hàn.</li>
  <li><strong>Đại chùy (GV14):</strong> Dưới đốt sống cổ 7, là huyệt giải biểu hàn quan trọng, cạo tại đây giúp hạ sốt nhẹ và giải cảm nhanh.</li>
  <li><strong>Kiên tỉnh (GB21):</strong> Đỉnh vai, chủ trị đau mỏi cổ vai gáy do nhiễm lạnh.</li>
  <li><strong>Khúc trì (LI11):</strong> Mặt ngoài khuỷu tay khi gập, hỗ trợ thanh nhiệt khi có sốt kèm theo.</li>
</ul>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li>Chuẩn bị thìa inox bo tròn cạnh hoặc đồng bạc, dầu gió/dầu khuynh diệp, khăn mềm lau sạch da trước khi cạo.</li>
  <li>Cạo ở nơi kín gió, sau khi cạo nên giữ ấm cơ thể, tránh ra gió lạnh hoặc tắm ngay trong 2–3 giờ.</li>
  <li>Uống một cốc nước ấm hoặc trà gừng sau khi cạo gió để hỗ trợ giải cảm và bù nước.</li>
  <li>Vết sa thường mờ dần sau 3–5 ngày; nếu sau 1–2 lần cạo gió mà triệu chứng không giảm hoặc sốt cao kéo dài, cần đi khám để loại trừ các bệnh lý khác.</li>
  <li>Không cạo gió quá thường xuyên (không quá 1 lần/3–5 ngày tại cùng một vị trí) để tránh tổn thương da và lạc mạch.</li>
</ul>

<div class="art-cta-box">
  <p>Cạo gió là phương pháp hỗ trợ tốt cho cảm mạo phong hàn nhẹ, nhưng cần biện chứng đúng thể bệnh để áp dụng an toàn và hiệu quả. Nếu bạn thường xuyên cảm mạo, đau mỏi tái phát hoặc muốn được hướng dẫn cạo gió, bấm huyệt đúng kỹ thuật, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> trực tiếp khám và tư vấn. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch qua hotline <strong>0973 710 237</strong>.</p>
</div>
    `
  },
  {
    id: 48,
    slug: "viem-dai-trang-man-tinh-yhct-phan-the-dieu-tri",
    date: "2026-06-21",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Viêm đại tràng mạn tính theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Viêm đại tràng mạn tính gây đau bụng, rối loạn tiêu hóa kéo dài, ảnh hưởng nặng đến chất lượng sống. Y học cổ truyền tiếp cận bệnh theo từng thể trạng cụ thể để điều trị triệt để từ gốc.",
    readTime: 6,
    content: `
<h2>Tổng quan về viêm đại tràng mạn tính theo Y học cổ truyền</h2>
<p>Viêm đại tràng mạn tính là tình trạng viêm nhiễm, tổn thương niêm mạc đại tràng kéo dài, tái phát nhiều lần, biểu hiện bằng đau bụng âm ỉ hoặc quặn từng cơn, đại tiện phân lúc lỏng lúc táo, có thể lẫn nhầy hoặc máu, kèm chướng bụng, mệt mỏi, ăn kém. Trong Y học cổ truyền (YHCT), bệnh được xếp vào phạm vi chứng "Tiết tả", "Phục thống", "Trường tích" — chỉ tình trạng tỳ vị và đại tràng mất chức năng vận hóa, thăng giáng thất thường, dẫn đến thấp trệ, khí trệ huyết ứ tích tụ tại đại tràng.</p>
<p>Khác với y học hiện đại chủ yếu dùng kháng viêm và điều chỉnh hệ vi sinh đường ruột, YHCT chú trọng điều hòa tỳ vị — cơ quan chủ vận hóa thủy cốc, đồng thời xét đến vai trò của can (gan) trong điều khí và thận trong việc ôn ấm trường vị. Việc xác định đúng thể bệnh là yếu tố quyết định hiệu quả điều trị lâu dài.</p>
<h2>Nguyên nhân và cơ chế bệnh sinh</h2>
<p>Theo YHCT, viêm đại tràng mạn tính hình thành do nhiều yếu tố phối hợp:</p>
<ul>
<li>Ăn uống không điều độ, ăn nhiều đồ sống lạnh, cay nóng, rượu bia làm tổn thương tỳ vị.</li>
<li>Tình chí uất ức, stress kéo dài khiến can khí uất kết, ảnh hưởng đến vận hóa của tỳ ("can khắc tỳ").</li>
<li>Ngoại tà thấp nhiệt hoặc hàn thấp xâm nhập qua đường ăn uống, tích tụ tại đại tràng.</li>
<li>Tỳ vị vốn hư nhược, vận hóa kém, lâu ngày sinh thấp trệ, khí huyết ứ trệ tại trường vị.</li>
<li>Thận dương hư suy ở người cao tuổi hoặc bệnh lâu năm, không đủ ôn ấm cho tỳ thổ.</li>
</ul>
<h2>Phân thể bệnh và biểu hiện lâm sàng</h2>
<p>Viêm đại tràng mạn tính theo YHCT được chia thành các thể chính sau:</p>
<ul>
<li><strong>Thể tỳ vị hư nhược:</strong> Đau bụng âm ỉ, đại tiện phân lỏng, sống phân, ăn vào dễ đi ngoài, mệt mỏi, sắc mặt vàng nhợt, lưỡi nhợt bệu, rêu trắng mỏng.</li>
<li><strong>Thể thấp nhiệt uất kết:</strong> Đau bụng quặn, đại tiện phân nhầy lẫn máu, mùi hôi khó chịu, hậu môn nóng rát, miệng khô đắng, lưỡi đỏ rêu vàng nhớt.</li>
<li><strong>Thể can khí uất kết (can tỳ bất hòa):</strong> Đau bụng liên quan rõ đến cảm xúc, đầy chướng hai bên sườn, đại tiện lúc táo lúc lỏng, ợ hơi, dễ cáu giận.</li>
<li><strong>Thể tỳ thận dương hư:</strong> Đau bụng âm ỉ thích chườm ấm, sợ lạnh, chân tay lạnh, đại tiện lỏng kéo dài về sáng sớm (kê minh tả), lưng gối yếu mỏi.</li>
<li><strong>Thể huyết ứ ở đại tràng:</strong> Đau bụng cố định một vị trí, đau như châm chích, đại tiện có thể lẫn máu tối, bụng sờ thấy cứng nhẹ.</li>
</ul>
<h2>Phương pháp điều trị theo từng thể</h2>
<p>Nguyên tắc điều trị chung là kiện tỳ hòa vị, lý khí trừ thấp, kết hợp châm cứu và dùng thuốc theo thể bệnh:</p>
<ul>
<li>Thể tỳ vị hư nhược: dùng bài Sâm linh bạch truật tán gia giảm để kiện tỳ ích khí; châm cứu các huyệt Túc tam lý, Tỳ du, Vị du, Trung quản nhằm bồi bổ tỳ vị.</li>
<li>Thể thấp nhiệt: dùng bài Bạch đầu ông thang hoặc Cát căn cầm liên thang để thanh nhiệt táo thấp; châm tả huyệt Thiên khu, Đại trường du, Hợp cốc.</li>
<li>Thể can tỳ bất hòa: dùng bài Thống tả yếu phương gia giảm sơ can lý khí; châm huyệt Thái xung, Kỳ môn kết hợp Túc tam lý.</li>
<li>Thể tỳ thận dương hư: dùng bài Phụ tử lý trung thang ôn bổ tỳ thận; cứu ngải các huyệt Thần khuyết, Quan nguyên, Mệnh môn.</li>
<li>Thể huyết ứ: phối hợp hoạt huyết hóa ứ với Thiên khu, Tam âm giao, Huyết hải.</li>
</ul>
<h2>Chế độ ăn uống và sinh hoạt hỗ trợ điều trị</h2>
<p>Người bệnh nên ăn chín uống sôi, chia nhỏ bữa ăn, hạn chế đồ sống lạnh, cay nóng, rượu bia và các chất kích thích. Nên bổ sung thực phẩm kiện tỳ như gạo, khoai, bí đỏ, hạt sen; giữ ấm vùng bụng, tránh căng thẳng tâm lý và duy trì vận động nhẹ nhàng như đi bộ, dưỡng sinh để hỗ trợ vận hóa của tỳ vị.</p>
<div class="art-cta-box"><p>Nếu bạn đang gặp các triệu chứng đau bụng, rối loạn đại tiện kéo dài, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> trực tiếp khám, biện chứng luận trị và xây dựng phác đồ điều trị phù hợp với thể trạng của bạn. Phòng khám làm việc từ <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ đặt lịch qua hotline <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 49,
    slug: "thuy-cham-ho-tro-dieu-tri-yhct",
    date: "2026-06-21",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Thủy châm hỗ trợ điều trị: Phương pháp kết hợp Đông – Tây y hiệu quả không dùng thuốc uống",
    excerpt: "Thủy châm là phương pháp đưa thuốc trực tiếp vào huyệt vị, kết hợp tác dụng kích thích huyệt của châm cứu với dược lý của thuốc, giúp giảm đau, phục hồi thần kinh nhanh và bền vững.",
    readTime: 5,
    content: `
<h2>Thủy châm là gì?</h2>
<p>Thủy châm (còn gọi là tiêm thuốc vào huyệt) là phương pháp điều trị kết hợp giữa lý luận huyệt vị của Y học cổ truyền và kỹ thuật tiêm của y học hiện đại. Thay vì châm kim khô đơn thuần, thầy thuốc sẽ tiêm một lượng nhỏ dung dịch thuốc (thường là vitamin nhóm B, thuốc giảm đau chống viêm phù hợp hoặc dung dịch sinh lý) trực tiếp vào các huyệt vị đã được lựa chọn theo bệnh lý cụ thể.</p>
<p>Phương pháp này được xem là sự giao thoa giữa châm cứu cổ truyền và liệu pháp dùng thuốc, mang lại hiệu quả kép: vừa kích thích huyệt vị để điều khí huyết, vừa đưa dược chất tác dụng trực tiếp tại vị trí cần điều trị.</p>
<h2>Cơ chế tác dụng theo Y học cổ truyền và y học hiện đại</h2>
<p>Theo YHCT, huyệt vị là nơi khí huyết của kinh lạc tụ hội với tạng phủ bên trong. Khi đưa thuốc vào huyệt, tác dụng kích thích cơ học của kim kết hợp với dược lực của thuốc sẽ khuếch đại hiệu quả thông kinh hoạt lạc, giảm đau, hành khí hoạt huyết tại chỗ.</p>
<p>Theo y học hiện đại, huyệt vị thường nằm tại các điểm có mật độ thụ thể thần kinh, mạch máu cao; tiêm thuốc tại đây giúp thuốc được hấp thu nhanh và tập trung tác dụng dược lý đúng vùng tổn thương, đồng thời giảm liều thuốc toàn thân cần dùng so với đường uống hoặc tiêm tĩnh mạch.</p>
<h2>Chỉ định và chống chỉ định</h2>
<p>Thủy châm thường được chỉ định trong các trường hợp:</p>
<ul>
<li>Đau thần kinh tọa, đau vai gáy, đau thắt lưng mạn tính.</li>
<li>Di chứng liệt do tai biến mạch máu não, liệt mặt ngoại biên.</li>
<li>Đau dây thần kinh ngoại biên, tê bì chân tay do thiếu vitamin nhóm B.</li>
<li>Đau khớp do thoái hóa, viêm quanh khớp vai.</li>
</ul>
<p>Chống chỉ định với người có rối loạn đông máu, dị ứng với thành phần thuốc sử dụng, vùng da tại huyệt đang viêm nhiễm, nhiễm trùng cấp, phụ nữ có thai cần cân nhắc kỹ và chỉ thực hiện khi có chỉ định của bác sĩ chuyên khoa.</p>
<h2>Quy trình thực hiện</h2>
<p>Bác sĩ khám và biện chứng để xác định huyệt vị phù hợp, lựa chọn loại thuốc và liều lượng thích hợp với tình trạng bệnh. Vùng da tại huyệt được sát khuẩn kỹ, sau đó tiêm một lượng nhỏ thuốc vào đúng vị trí huyệt với kỹ thuật vô khuẩn nghiêm ngặt. Mỗi liệu trình thường kéo dài 10–15 lần, cách ngày hoặc theo chỉ định cụ thể của bác sĩ.</p>
<h2>Ưu điểm và lưu ý khi thực hiện</h2>
<p>So với châm cứu khô, thủy châm có ưu điểm tác dụng nhanh hơn nhờ kết hợp dược lý, đặc biệt hiệu quả trong các trường hợp đau do tổn thương thần kinh. Tuy nhiên, đây là kỹ thuật y khoa cần được thực hiện bởi bác sĩ hoặc kỹ thuật viên có chuyên môn, tại cơ sở y tế đảm bảo vô khuẩn để tránh nguy cơ nhiễm trùng hoặc phản ứng với thuốc.</p>
<div class="art-cta-box"><p>Để được tư vấn và thực hiện thủy châm an toàn, đúng chỉ định, mời bạn đến <strong>Phòng Khám YHCT Tâm Đức</strong> — nơi <strong>BS. Nguyễn Đức Tâm</strong> trực tiếp khám và điều trị theo từng tình trạng cụ thể. Phòng khám mở cửa <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Hotline tư vấn: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 50,
    slug: "bo-duong-hoan-ngu-thang-bai-thuoc-hoat-huyet",
    date: "2026-06-21",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Bổ dương hoàn ngũ thang — Bài thuốc hoạt huyết bổ khí trị di chứng tai biến kinh điển",
    excerpt: "Bổ dương hoàn ngũ thang là bài thuốc nổi tiếng của Vương Thanh Nhiệm, chuyên trị khí huyết hư kèm huyết ứ gây liệt nửa người, tê yếu chi sau tai biến mạch máu não.",
    readTime: 5,
    content: `
<h2>Nguồn gốc bài thuốc</h2>
<p>Bổ dương hoàn ngũ thang là bài thuốc cổ phương xuất xứ từ sách "Y Lâm Cải Thác" của danh y Vương Thanh Nhiệm thời nhà Thanh — một trong những thầy thuốc có nhiều đóng góp quan trọng cho lý luận hoạt huyết hóa ứ trong Y học cổ truyền. Tên bài thuốc mang ý nghĩa "bổ lại một phần dương khí đã mất", thể hiện rõ mục đích điều trị: phục hồi khí huyết và lưu thông huyết mạch ở những bệnh nhân bị tổn thương sau trúng phong (tai biến mạch máu não).</p>
<h2>Thành phần và vai trò các vị thuốc</h2>
<p>Bài thuốc gồm các vị thuốc chính sau, phối hợp theo nguyên tắc quân – thần – tá – sứ:</p>
<ul>
<li><strong>Hoàng kỳ (quân dược):</strong> Vị thuốc chủ lực với liều lượng lớn, có tác dụng đại bổ nguyên khí, ích khí để thống huyết, là nền tảng giúp khí vượng thì huyết mới lưu thông được.</li>
<li><strong>Quy vĩ (thần dược):</strong> Hoạt huyết, dưỡng huyết, hỗ trợ Hoàng kỳ trong việc bổ khí hoạt huyết song hành.</li>
<li><strong>Xích thược:</strong> Hoạt huyết, hành ứ, giảm tình trạng huyết trệ tại các kinh mạch bị tổn thương.</li>
<li><strong>Xuyên khung:</strong> Hành khí hoạt huyết, dẫn thuốc đi khắp toàn thân, đặc biệt mạnh ở phần trên cơ thể.</li>
<li><strong>Đào nhân, Hồng hoa:</strong> Phá huyết ứ, hoạt huyết mạnh, hỗ trợ thông kinh lạc bị tắc nghẽn.</li>
<li><strong>Địa long (sứ dược):</strong> Thông kinh hoạt lạc, dẫn thuốc đến tận các khớp và đầu chi, đặc biệt hữu ích trong chứng tê liệt chi.</li>
</ul>
<h2>Chỉ định lâm sàng</h2>
<p>Bài thuốc được chỉ định cho các trường hợp:</p>
<ul>
<li>Di chứng sau tai biến mạch máu não (trúng phong) với biểu hiện liệt nửa người, tê yếu chi, miệng méo, nói khó.</li>
<li>Thể khí huyết hư kèm huyết ứ: người mệt mỏi, sắc mặt nhợt nhạt, chi thể yếu liệt, lưỡi nhợt có điểm ứ huyết.</li>
<li>Hỗ trợ phục hồi vận động sau chấn thương thần kinh, liệt do các nguyên nhân mạch máu khác.</li>
</ul>
<h2>Chống chỉ định và lưu ý khi sử dụng</h2>
<p>Bài thuốc chống chỉ định trong giai đoạn xuất huyết não cấp tính chưa ổn định, người có huyết áp cao chưa kiểm soát tốt, phụ nữ có thai, và người có cơ địa dễ chảy máu, rối loạn đông máu. Bài thuốc chỉ phù hợp khi bệnh đã qua giai đoạn cấp, cần được bác sĩ YHCT biện chứng kỹ trước khi kê đơn, không tự ý sử dụng để tránh tương tác với thuốc tây đang điều trị.</p>
<h2>Gia giảm theo thể trạng</h2>
<p>Tùy theo mức độ khí hư hay huyết ứ chiếm ưu thế, thầy thuốc có thể gia giảm liều Hoàng kỳ, thêm các vị bổ thận như Đỗ trọng, Ngưu tất nếu kèm yếu lưng gối, hoặc thêm Thiên ma, Câu đằng nếu kèm run giật, co cứng chi.</p>
<div class="art-cta-box"><p>Việc sử dụng bài thuốc Bổ dương hoàn ngũ thang cần được bác sĩ YHCT khám và gia giảm phù hợp với từng thể trạng. Hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> tư vấn trực tiếp, khám và kê đơn an toàn, hiệu quả. Phòng khám hoạt động <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Hotline: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 51,
    slug: "duong-sinh-theo-mua-thu-yhct",
    date: "2026-06-21",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Dưỡng sinh theo mùa thu: Bí quyết bảo vệ sức khỏe theo Y học cổ truyền",
    excerpt: "Mùa thu với khí hậu khô se là thời điểm Phế dễ bị tổn thương theo quan niệm YHCT. Hiểu đúng nguyên tắc dưỡng sinh mùa thu giúp phòng ngừa ho, viêm họng và các bệnh hô hấp hiệu quả.",
    readTime: 5,
    content: `
<h2>Đặc điểm khí hậu mùa thu và ảnh hưởng tới sức khỏe</h2>
<p>Theo Y học cổ truyền, mùa thu là giai đoạn chuyển tiếp giữa dương khí thịnh của mùa hè sang âm khí thịnh của mùa đông, đặc trưng bởi khí "táo" (khô hanh). Tạng Phế trong ngũ hành thuộc Kim, tương ứng với mùa thu, có đặc tính "ưa nhuận, ghét táo" — nghĩa là Phế dễ bị tổn thương nhất khi thời tiết khô hanh kéo dài. Khí táo xâm nhập qua đường hô hấp và da gây nên các chứng ho khan, đau rát họng, khô mũi, khô da, dễ mắc các bệnh viêm đường hô hấp trên.</p>
<h2>Nguyên tắc dưỡng sinh mùa thu: Dưỡng Phế, nhuận táo</h2>
<p>Nguyên tắc dưỡng sinh cốt lõi của mùa thu là "thu thu đông tàng" — thu khí, giữ gìn tinh thần và cơ thể trầm tĩnh, tránh để dương khí phát tán quá mức như mùa hè. Cần đặc biệt chú trọng bổ dưỡng và bảo vệ tạng Phế, đồng thời tư âm nhuận táo để cân bằng lại sự khô hanh của thời tiết.</p>
<h2>Chế độ ăn uống mùa thu</h2>
<p>Về ăn uống, nên ưu tiên các thực phẩm có tính nhuận, bổ Phế như:</p>
<ul>
<li>Lê, mật ong, ngân nhĩ (mộc nhĩ trắng), bách hợp — có tác dụng nhuận Phế, sinh tân dịch.</li>
<li>Vừng đen, hạt sen, củ sen — bổ âm nhuận táo.</li>
<li>Hạn chế đồ ăn cay nóng, chiên xào nhiều dầu mỡ vì dễ làm tổn thương âm dịch, gia tăng tình trạng khô táo trong người.</li>
<li>Uống đủ nước, có thể dùng các loại trà thảo dược như trà hoa cúc, trà atiso để thanh nhiệt nhuận táo nhẹ nhàng.</li>
</ul>
<h2>Luyện tập và sinh hoạt</h2>
<p>Mùa thu nên duy trì các bài tập nhẹ nhàng như đi bộ, dưỡng sinh, hít thở sâu vào buổi sáng để tăng cường chức năng Phế. Cần giữ ấm vùng cổ, ngực khi thời tiết chuyển lạnh về đêm, tránh để cơ thể bị nhiễm lạnh đột ngột. Giữ tinh thần thư thái, tránh lo âu phiền muộn vì theo YHCT, Phế cũng liên quan mật thiết đến cảm xúc buồn bã, ưu sầu.</p>
<h2>Phòng ngừa các bệnh thường gặp mùa thu</h2>
<p>Để phòng ngừa ho, viêm họng, viêm mũi dị ứng và các bệnh hô hấp thường gia tăng vào mùa thu, nên giữ ẩm không khí trong nhà, vệ sinh mũi họng hàng ngày, hạn chế tiếp xúc với khói bụi, phấn hoa. Người có cơ địa dị ứng, hen suyễn cần chủ động thăm khám sớm khi có dấu hiệu bất thường để được điều trị và dự phòng kịp thời.</p>
<div class="art-cta-box"><p>Để được tư vấn chế độ dưỡng sinh phù hợp theo mùa và thể trạng riêng, mời bạn đến <strong>Phòng Khám YHCT Tâm Đức</strong> gặp <strong>BS. Nguyễn Đức Tâm</strong>. Phòng khám làm việc <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Liên hệ hotline <strong>0973 710 237</strong> để đặt lịch khám.</p></div>
  `
  },
  {
    id: 52,
    slug: "phuong-huyet-dieu-tri-hen-phe-quan",
    date: "2026-06-21",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị Hen phế quản theo Y học cổ truyền",
    excerpt: "Châm cứu các huyệt vị đặc hiệu giúp cắt cơn khó thở, giảm tần suất tái phát và nâng cao chức năng hô hấp cho người bệnh hen phế quản theo nguyên tắc của Y học cổ truyền.",
    readTime: 6,
    content: `
<h2>Tổng quan về hen phế quản theo Y học cổ truyền</h2>
<p>Hen phế quản thuộc phạm vi chứng "Háo suyễn" trong YHCT, đặc trưng bởi các cơn khó thở, thở khò khè, ho, tức ngực tái phát, liên quan đến rối loạn chức năng của ba tạng Phế, Tỳ, Thận — trong đó Phế chủ khí và là cơ quan trực tiếp bị ảnh hưởng. Khi cơn hen tái phát nhiều lần, đờm thấp tích tụ lâu ngày tại Phế gây nên tình trạng tắc nghẽn đường thở. Châm cứu các huyệt vị phù hợp giúp tuyên thông Phế khí, hóa đờm, bình suyễn, đồng thời bồi bổ căn nguyên ở Tỳ và Thận để giảm tái phát.</p>
<h2>Nguyên tắc lựa chọn huyệt</h2>
<p>Nguyên tắc châm cứu trong hen phế quản là kết hợp huyệt tại chỗ vùng ngực — lưng để tuyên Phế, giáng khí, cắt cơn cấp, đồng thời phối hợp các huyệt toàn thân để bổ Tỳ Thận, củng cố căn bản phòng tái phát.</p>
<h2>Các huyệt vị chính trong điều trị hen phế quản</h2>
<ul>
<li><strong>Phế du (BL13):</strong> Nằm ở vùng lưng trên, cách đốt sống ngực 3 (D3) khoảng 1,5 thốn ra hai bên. Đây là huyệt du của tạng Phế, có tác dụng tuyên Phế, hóa đờm, là huyệt chủ lực trong mọi bệnh lý hô hấp.</li>
<li><strong>Định suyễn (huyệt ngoài kinh):</strong> Nằm cách đốt sống cổ 7 (C7) khoảng 0,5 thốn ra hai bên. Huyệt có tác dụng đặc hiệu cắt cơn khó thở, bình suyễn nhanh.</li>
<li><strong>Thiên đột (CV22):</strong> Nằm tại chính giữa hõm trên xương ức, ngay dưới yết hầu. Có tác dụng tuyên thông Phế khí, giảm ho, giảm cảm giác tức nghẹn ở cổ họng.</li>
<li><strong>Đản trung (CV17):</strong> Nằm tại điểm giữa hai núm vú, trên đường giữa ngực. Huyệt hội của khí, có tác dụng khoan khoái lồng ngực, giáng khí, giảm tức ngực khi khó thở.</li>
<li><strong>Khổng tối (LU6):</strong> Nằm trên đường nối từ huyệt Xích trạch đến Thái uyên, cách cổ tay khoảng 7 thốn ở mặt trước cẳng tay. Huyệt khích của kinh Phế, có tác dụng đặc hiệu cắt cơn ho, cơn hen cấp.</li>
<li><strong>Túc tam lý (ST36):</strong> Nằm dưới hõm ngoài đầu gối khoảng 3 thốn, cách mào xương chày một khoát ngón tay. Có tác dụng kiện Tỳ ích khí, nâng cao thể trạng, hỗ trợ phòng tái phát.</li>
<li><strong>Thái uyên (LU9):</strong> Nằm tại lằn chỉ cổ tay phía ngón cái, chỗ lõm động mạch quay. Là huyệt nguyên của kinh Phế, có tác dụng bổ Phế khí, tăng cường chính khí đường hô hấp.</li>
</ul>
<h2>Phối hợp điều trị theo giai đoạn bệnh</h2>
<p>Trong cơn hen cấp, ưu tiên châm tả các huyệt Định suyễn, Thiên đột, Khổng tối để cắt cơn nhanh. Ở giai đoạn ổn định ngoài cơn, nên phối hợp châm bổ và cứu ấm các huyệt Phế du, Túc tam lý, Thái uyên, kết hợp dùng thuốc bổ Tỳ Thận để củng cố căn bản, giảm tần suất và mức độ các cơn hen trong tương lai.</p>
<h2>Lưu ý khi điều trị</h2>
<p>Châm cứu hỗ trợ điều trị hen phế quản cần được thực hiện bởi thầy thuốc có chuyên môn, kết hợp theo dõi sát tình trạng hô hấp. Trường hợp cơn hen nặng, khó thở dữ dội cần xử trí cấp cứu y tế hiện đại trước, sau đó mới phối hợp châm cứu và YHCT để điều trị củng cố lâu dài.</p>
<div class="art-cta-box"><p>Nếu bạn hoặc người thân đang gặp tình trạng hen phế quản tái phát nhiều lần, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> để được <strong>BS. Nguyễn Đức Tâm</strong> khám, châm cứu và xây dựng phác đồ điều trị phù hợp. Phòng khám làm việc <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Hotline: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 53,
    slug: "tri-mun-trung-ca-the-thap-nhiet-yhct",
    date: "2026-06-21",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Trị mụn trứng cá thể thấp nhiệt theo Y học cổ truyền",
    excerpt: "Mụn trứng cá sưng đỏ, có mủ, da nhờn dầu thường liên quan đến thể thấp nhiệt ở Phế và Vị theo YHCT. Điều trị đúng thể giúp giải quyết mụn từ gốc, hạn chế tái phát.",
    readTime: 5,
    content: `
<h2>Mối liên hệ giữa mụn trứng cá và tạng phủ theo Y học cổ truyền</h2>
<p>Theo quan niệm YHCT, da mặt là nơi phản ánh trực tiếp tình trạng khí huyết và chức năng của các tạng phủ bên trong, đặc biệt là Phế, Vị và Can. Mụn trứng cá được xếp vào chứng "Phấn thứ" hay "Tửu thứ", phần lớn xuất phát từ tình trạng thấp nhiệt uất kết tại Phế và Vị. Khi ăn uống nhiều đồ cay nóng, dầu mỡ, đồ ngọt, hoặc cơ thể có cơ địa thấp nhiệt, nhiệt độc tích tụ sẽ bốc lên vùng mặt theo đường kinh của Phế và Vị, gây nên mụn sưng đỏ, có mủ, da nhờn dầu, lỗ chân lông to.</p>
<h2>Đặc điểm nhận biết mụn trứng cá thể thấp nhiệt</h2>
<p>Mụn thể thấp nhiệt thường có các đặc điểm: nốt mụn sưng to, đỏ, có đầu mủ trắng hoặc vàng, da mặt nhờn dầu rõ rệt, lỗ chân lông giãn to, có thể kèm ngứa rát nhẹ. Người bệnh thường kèm các biểu hiện toàn thân như miệng khô đắng, hơi thở hôi, đại tiện táo hoặc phân nát, rêu lưỡi vàng nhớt — đây là các dấu hiệu giúp phân biệt với các thể mụn khác như thể huyết ứ (mụn thâm, sẹo lồi) hay thể âm hư (mụn nhỏ, da khô, dễ tái phát khi stress).</p>
<h2>Điều trị từ bên trong bằng bài thuốc thanh nhiệt giải độc</h2>
<p>Nguyên tắc điều trị thể thấp nhiệt là thanh nhiệt, giải độc, trừ thấp, lương huyết. Các bài thuốc thường được sử dụng gồm Tỳ bà thanh phế ẩm gia giảm để thanh Phế nhiệt, hoặc Hoàng liên giải độc thang gia giảm để thanh nhiệt giải độc toàn thân, kết hợp các vị thuốc lương huyết tiêu viêm như Kim ngân hoa, Bồ công anh, Sinh địa, Đan sâm tùy theo mức độ viêm của mụn. Việc gia giảm cần do bác sĩ YHCT biện chứng cụ thể trên từng người bệnh.</p>
<h2>Điều trị từ bên ngoài: Châm cứu và chăm sóc da</h2>
<p>Bên cạnh dùng thuốc, có thể phối hợp châm cứu các huyệt Hợp cốc, Khúc trì, Nội đình để thanh nhiệt tả hỏa theo đường kinh Dương minh — kinh đi qua vùng mặt nhiều nhất, giúp giảm viêm và hỗ trợ đào thải độc tố. Về chăm sóc ngoài da, có thể đắp mặt bằng các thảo dược có tính thanh nhiệt như Trà xanh, Diếp cá, Nha đam giúp làm dịu da, giảm sưng viêm, tuy nhiên cần thử phản ứng trên vùng da nhỏ trước khi áp dụng toàn mặt để tránh kích ứng.</p>
<h2>Chế độ ăn uống và sinh hoạt phòng ngừa tái phát</h2>
<p>Người có cơ địa thấp nhiệt cần hạn chế tối đa đồ cay nóng, nhiều dầu mỡ, đồ ngọt, rượu bia — đây là các yếu tố làm gia tăng nhiệt độc trong cơ thể. Nên tăng cường rau xanh, trái cây có tính thanh nhiệt như rau diếp cá, mướp đắng, bí đao; uống đủ nước, ngủ đủ giấc và giữ vệ sinh da mặt sạch sẽ hàng ngày để hỗ trợ quá trình điều trị mụn đạt hiệu quả bền vững.</p>
<div class="art-cta-box"><p>Để được khám và xác định đúng thể bệnh, xây dựng phác đồ điều trị mụn trứng cá phù hợp với cơ địa, hãy đến <strong>Phòng Khám YHCT Tâm Đức</strong> gặp <strong>BS. Nguyễn Đức Tâm</strong>. Phòng khám làm việc <strong>18:00–22:00 hàng ngày</strong> tại <strong>Hà Đông, Hà Nội</strong>. Hotline tư vấn: <strong>0973 710 237</strong>.</p></div>
  `
  },
  {
    id: 47,
    slug: "xoa-bop-bam-huyet-chua-dau-co-vai-gay",
    date: "2026-06-21",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Xoa bóp bấm huyệt chữa đau cổ vai gáy: Phương pháp không dùng thuốc theo Y học cổ truyền",
    excerpt: "Đau cổ vai gáy là tình trạng phổ biến do ngồi sai tư thế, nhiễm lạnh hoặc căng thẳng kéo dài. Xoa bóp bấm huyệt đúng cách giúp thông kinh hoạt lạc, giảm đau hiệu quả mà không cần dùng thuốc.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Đau cổ vai gáy là tình trạng đau mỏi, cứng vùng cổ, lan xuống vai và bả vai, đôi khi kèm hạn chế xoay cổ, gặp rất phổ biến ở người làm việc văn phòng, lái xe đường dài hoặc người lớn tuổi. Theo Y học cổ truyền (YHCT), chứng này thuộc phạm vi "Kiên tý" hoặc "Lạc chẩm", nguyên nhân chủ yếu do phong hàn thấp xâm nhập vùng kinh Đởm, kinh Bàng quang và kinh Tiểu trường đi qua vùng cổ vai gáy, làm khí huyết tại đây bị tắc trệ. Ngoài ra, ngồi sai tư thế lâu ngày, ít vận động hoặc căng thẳng tâm lý kéo dài cũng khiến khí huyết ứ trệ tại chỗ, gây đau mỏi dai dẳng. Xoa bóp bấm huyệt là phương pháp không dùng thuốc, tác động trực tiếp lên kinh lạc và huyệt vị vùng cổ vai gáy, giúp khu phong tán hàn, hành khí hoạt huyết, thư cân hoạt lạc, từ đó giảm đau và phục hồi tầm vận động cổ.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể phong hàn thấp:</strong> Đau mỏi cổ vai gáy tăng khi gặp lạnh, trời ẩm, gió lùa (thường sau khi nằm điều hòa hoặc tắm gội xong ra ngoài lạnh), cứng cổ buổi sáng, sợ lạnh, rêu lưỡi trắng mỏng. Hướng điều trị: khu phong, tán hàn, ôn thông kinh lạc.</li>
  <li><strong>Thể khí trệ huyết ứ:</strong> Đau cố định một điểm, đau nhiều khi ấn vào, có thể sờ thấy cơ co cứng thành dải, thường gặp sau ngồi lâu sai tư thế, làm việc máy tính kéo dài. Hướng điều trị: hành khí hoạt huyết, thông kinh chỉ thống.</li>
  <li><strong>Thể can khí uất kết:</strong> Đau mỏi vai gáy kèm căng thẳng, dễ cáu giận, mất ngủ, hay thở dài, đau tăng khi stress. Hướng điều trị: sơ can giải uất, kết hợp thư giãn cân cơ.</li>
  <li><strong>Thể khí huyết hư:</strong> Đau mỏi âm ỉ kéo dài, mệt mỏi, sắc mặt nhợt, đau tăng khi vận động gắng sức, giảm khi nghỉ ngơi. Hướng điều trị: bổ khí huyết, kết hợp xoa bóp nhẹ nhàng dưỡng cân.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị / Bài thuốc</h2>
<p>Xoa bóp bấm huyệt vùng cổ vai gáy thường kết hợp các thủ pháp xát, xoa, bóp, lăn, ấn, day tại các huyệt vị sau để khu phong tán hàn, hành khí hoạt huyết:</p>
<ul>
  <li><strong>Phong trì (GB20):</strong> Hõm sau gáy, giữa cơ ức đòn chũm và cơ thang, ngang dái tai. Khu phong, thông kinh lạc đầu cổ, giảm đau cứng gáy.</li>
  <li><strong>Kiên tỉnh (GB21):</strong> Điểm cao nhất của vai, giữa đường nối huyệt Đại chùy và mỏm cùng vai. Thông kinh Đởm, giảm đau mỏi vai gáy lan xuống cánh tay.</li>
  <li><strong>Đại chùy (GV14):</strong> Dưới mỏm gai đốt sống cổ 7 (chỗ gồ cao nhất khi cúi đầu). Khu phong tán hàn toàn vùng cổ vai, tăng dương khí.</li>
  <li><strong>Kiên ngoại du (SI14):</strong> Cách đường giữa cột sống 3 thốn, ngang đốt sống lưng 1. Hỗ trợ giảm đau lan vùng bả vai.</li>
  <li><strong>Hợp cốc (LI4):</strong> Mu bàn tay, giữa xương bàn tay 1 và 2. Thông kinh lạc toàn thân, hỗ trợ giảm đau vùng đầu cổ.</li>
  <li><strong>A thị huyệt:</strong> Chính là điểm đau nhất khi sờ ấn (thường là vùng cơ thang co cứng), day ấn trực tiếp giúp giải phóng điểm co cứng tại chỗ.</li>
</ul>
<p>Thủ pháp xoa bóp nên bắt đầu bằng xát nóng làm ấm vùng da, sau đó bóp nhẹ cơ vai gáy, lăn cán tay dọc theo cơ thang, cuối cùng day ấn từng huyệt 30–60 giây mỗi huyệt với lực vừa phải, không ấn quá mạnh gây bầm tím.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li>Xoa ấm hai bàn tay rồi xoa nhẹ vùng gáy và vai từ trên xuống dưới 1–2 phút trước khi bấm huyệt.</li>
  <li>Dùng ngón tay cái day ấn huyệt Phong trì và Kiên tỉnh mỗi bên 1 phút, lực tăng dần rồi giảm dần, lặp lại 2–3 lần mỗi buổi.</li>
  <li>Xoay cổ nhẹ nhàng theo 4 hướng (gập, ngửa, nghiêng, xoay) mỗi hướng 5–10 lần, tránh xoay mạnh đột ngột khi đang đau cấp.</li>
  <li>Tránh ngồi một tư thế quá lâu, nên đứng dậy vận động cổ vai mỗi 45–60 phút khi làm việc văn phòng.</li>
  <li>Giữ ấm vùng cổ gáy khi ra ngoài lạnh hoặc khi nằm điều hòa, tránh để gió lùa trực tiếp vào sau gáy.</li>
</ul>

<div class="art-cta-box">
  <p>Xoa bóp bấm huyệt mang lại hiệu quả tốt với đau cổ vai gáy thể nhẹ và mới khởi phát, nhưng cần biện chứng đúng thể bệnh để phối hợp phương pháp phù hợp, tránh chuyển thành mạn tính. Quý khách nên đến thăm khám trực tiếp tại <strong>Phòng Khám YHCT Tâm Đức</strong> — BS. Nguyễn Đức Tâm để được chẩn đoán và xoa bóp bấm huyệt đúng kỹ thuật. Liên hệ hotline <strong>0973 710 237</strong>, làm việc <strong>18:00–22:00 hàng ngày</strong> tại Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 41,
    slug: "viem-khop-dang-thap-theo-yhct",
    date: "2026-06-20",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Viêm khớp dạng thấp theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Viêm khớp dạng thấp là bệnh tự miễn gây sưng đau, biến dạng nhiều khớp nhỏ. Y học cổ truyền xếp vào chứng Tý, phân thể rõ ràng để phối hợp châm cứu và bài thuốc điều trị căn nguyên, hạn chế tái phát.",
    readTime: 7,
    content: `
<h2>Tổng quan về Viêm khớp dạng thấp theo Y học cổ truyền</h2>
<p>Viêm khớp dạng thấp (VKDT) là bệnh lý tự miễn mạn tính, đặc trưng bởi viêm màng hoạt dịch nhiều khớp, thường đối xứng hai bên, hay gặp ở các khớp nhỏ bàn tay, bàn chân, cổ tay, gối. Bệnh tiến triển kéo dài có thể gây biến dạng khớp, teo cơ, giảm vận động nếu không điều trị đúng cách. Theo Y học cổ truyền (YHCT), VKDT thuộc phạm vi chứng "Tý" (tý chứng), cụ thể là "Lịch tiết phong" hay "Nhiệt tý" khi có biểu hiện viêm sưng nóng đỏ rõ. Nguyên nhân cốt lõi là chính khí suy yếu (vệ khí không bền), tạo điều kiện cho phong, hàn, thấp, nhiệt xâm nhập vào kinh lạc, ứ trệ ở khớp xương gây đau nhức, sưng nề; lâu ngày khí huyết ứ trệ, đàm thấp ngưng tụ làm khớp biến dạng, co rút gân cơ.</p>

<h2>Phân thể bệnh và đặc điểm nhận biết</h2>
<h3>1. Thể Phong hàn thấp tý</h3>
<p><strong>Nhận biết:</strong> Đau nhức nhiều khớp, đau tăng khi gặp lạnh hoặc trời ẩm, giảm khi giữ ấm, khớp không nóng đỏ nhiều, cứng khớp buổi sáng, sợ lạnh, rêu lưỡi trắng mỏng.</p>
<p><strong>Pháp điều trị:</strong> Khu phong, tán hàn, trừ thấp, thông kinh lạc.</p>
<h3>2. Thể Phong thấp nhiệt tý (giai đoạn cấp)</h3>
<p><strong>Nhận biết:</strong> Khớp sưng nóng đỏ đau rõ, đau dữ dội, sợ chườm nóng, có thể kèm sốt nhẹ, miệng khát, tiểu vàng, rêu lưỡi vàng nhớt.</p>
<p><strong>Pháp điều trị:</strong> Thanh nhiệt, trừ thấp, khu phong thông lạc, giảm viêm cấp.</p>
<h3>3. Thể Đàm ứ tý (giai đoạn mạn, biến dạng khớp)</h3>
<p><strong>Nhận biết:</strong> Bệnh kéo dài, khớp sưng to, cứng, biến dạng, có thể nổi hạt dưới da, đau âm ỉ kéo dài, cử động hạn chế rõ, lưỡi tím sạm có điểm ứ huyết.</p>
<p><strong>Pháp điều trị:</strong> Hoạt huyết hóa ứ, hóa đàm, thông lạc, nhuyễn kiên (làm mềm chỗ cứng).</p>
<h3>4. Thể Khí huyết hư kèm tý (giai đoạn ổn định, suy yếu toàn thân)</h3>
<p><strong>Nhận biết:</strong> Bệnh lâu năm, cơ thể suy nhược, teo cơ vùng khớp bệnh, mệt mỏi, sắc mặt nhợt, đau ê ẩm, dễ tái phát khi gắng sức hoặc thay đổi thời tiết.</p>
<p><strong>Pháp điều trị:</strong> Bổ khí huyết, bổ can thận, kết hợp khu phong trừ thấp để củng cố chính khí, ngừa tái phát.</p>

<h2>Phương pháp điều trị bằng châm cứu và huyệt vị</h2>
<ul>
  <li><strong>Hợp cốc, Khúc trì:</strong> Giảm viêm sưng đau khớp tay, thông kinh lạc Đại trường.</li>
  <li><strong>Túc tam lý, Dương lăng tuyền:</strong> Trừ thấp, bổ khí, hỗ trợ khớp gối, khớp cổ chân.</li>
  <li><strong>Huyết hải, Tam âm giao:</strong> Hoạt huyết, dưỡng huyết, hỗ trợ thể đàm ứ và khí huyết hư.</li>
  <li><strong>Đại chùy, Phong môn:</strong> Khu phong tán hàn toàn thân trong thể phong hàn thấp.</li>
  <li>Kết hợp ôn châm hoặc cứu ngải tại các khớp đau khi không có dấu hiệu viêm nhiệt cấp, giúp tăng tuần hoàn và giảm cứng khớp.</li>
</ul>

<h2>Kết hợp dùng thuốc và chăm sóc tại nhà</h2>
<p>Tùy thể bệnh, thầy thuốc YHCT sẽ gia giảm các bài thuốc cổ phương như Quyên tý thang, Độc hoạt ký sinh thang hoặc Đào hồng tứ vật thang để khu phong trừ thấp, hoạt huyết hóa ứ. Người bệnh cần giữ ấm các khớp, tránh ẩm lạnh kéo dài, tập vận động khớp nhẹ nhàng đều đặn (xoay cổ tay, cổ chân, nắm mở bàn tay) để duy trì tầm vận động, hạn chế teo cứng cơ khớp. Chế độ ăn nên hạn chế đồ lạnh, dầu mỡ, tăng cường thực phẩm bổ khí huyết như hầm xương, đậu đen, gừng ấm.</p>

<div class="art-cta-box">
  <p>Viêm khớp dạng thấp cần điều trị kiên trì, đúng thể bệnh để kiểm soát viêm và ngăn biến dạng khớp. Phòng Khám YHCT Tâm Đức do BS. Nguyễn Đức Tâm trực tiếp khám và điều trị, nhận tư vấn qua hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày tại Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 42,
    slug: "ngu-cam-hi-bai-tap-khi-cong-duong-sinh",
    date: "2026-06-20",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Ngũ cầm hí — Bài tập khí công dưỡng sinh ngũ tạng không dùng thuốc",
    excerpt: "Ngũ cầm hí là bài khí công cổ truyền mô phỏng động tác của 5 loài vật, giúp điều hòa khí huyết, tăng cường chức năng ngũ tạng mà không cần dùng thuốc. Phù hợp tập luyện hàng ngày cho mọi lứa tuổi.",
    readTime: 6,
    content: `
<h2>Ngũ cầm hí là gì?</h2>
<p>Ngũ cầm hí (五禽戏) là bài tập khí công dưỡng sinh cổ truyền, được cho là do danh y Hoa Đà thời Đông Hán sáng tạo, mô phỏng động tác của năm loài vật: Hổ, Hươu, Gấu, Vượn và Chim (hạc). Mỗi động tác không chỉ rèn luyện gân cốt, cơ bắp mà còn tương ứng với một tạng trong ngũ tạng theo lý luận YHCT, giúp điều hòa khí huyết, tăng cường chính khí, phòng và hỗ trợ điều trị bệnh mà hoàn toàn không cần dùng thuốc.</p>

<h2>Nguyên lý dưỡng sinh của Ngũ cầm hí</h2>
<p>Theo YHCT, ngũ tạng (tâm, can, tỳ, phế, thận) liên hệ chặt chẽ với trạng thái vận động của cơ thể. Khi tập luyện đúng cách, các động tác mô phỏng linh hoạt của loài vật giúp khai thông kinh lạc, dẫn khí huyết lưu thông đến từng tạng phủ, từ đó bồi bổ chính khí, cải thiện chức năng tiêu hóa, hô hấp, tuần hoàn và an định tâm thần.</p>

<h2>Năm động tác cơ bản và tác dụng tương ứng</h2>
<ul>
  <li><strong>Hổ hí (động tác Hổ):</strong> Mô phỏng hổ vờn, rướn thân, vươn móng. Tác dụng kiện cốt, mạnh lưng gối, bổ thận, tăng sức mạnh cơ bắp toàn thân.</li>
  <li><strong>Lộc hí (động tác Hươu):</strong> Mô phỏng hươu quay đầu, xoay eo nhẹ nhàng. Tác dụng thư giãn gân cốt, hoạt huyết, hỗ trợ chức năng can (gan), tăng sự dẻo dai cột sống.</li>
  <li><strong>Hùng hí (động tác Gấu):</strong> Mô phỏng gấu lắc lư, dồn trọng tâm hai chân. Tác dụng kiện tỳ vị, tăng cường tiêu hóa, ôn ấm trung tiêu.</li>
  <li><strong>Viên hí (động tác Vượn):</strong> Mô phỏng vượn leo trèo, linh hoạt tay chân. Tác dụng dưỡng tâm an thần, tăng phản xạ, linh hoạt khớp tay.</li>
  <li><strong>Hạc hí (động tác Chim hạc):</strong> Mô phỏng hạc vươn cánh, đứng một chân. Tác dụng bổ phế, điều hòa hô hấp, tăng cường thăng bằng và sự dẻo dai.</li>
</ul>

<h2>Hướng dẫn tập luyện đúng cách</h2>
<p>Nên tập Ngũ cầm hí vào buổi sáng sớm, nơi thoáng khí, mặc trang phục rộng rãi. Mỗi động tác lặp lại 8–16 lần, kết hợp hít thở sâu đều theo nhịp động tác: hít vào khi mở rộng tư thế, thở ra khi thu về. Người mới tập nên tập chậm, chú trọng cảm nhận luồng khí lưu chuyển hơn là tốc độ. Toàn bài có thể tập trong 15–20 phút mỗi ngày.</p>

<h2>Lưu ý khi tập luyện</h2>
<ul>
  <li>Người có bệnh khớp nặng, huyết áp không ổn định nên tập động tác nhẹ, tránh xoay vặn mạnh đột ngột.</li>
  <li>Không tập khi quá no hoặc quá đói, nên tập sau ăn tối thiểu 1 giờ.</li>
  <li>Kiên trì tập đều đặn hàng ngày mới phát huy hiệu quả dưỡng sinh rõ rệt, không nên tập ngắt quãng.</li>
</ul>

<div class="art-cta-box">
  <p>Ngũ cầm hí là phương pháp dưỡng sinh an toàn, phù hợp mọi lứa tuổi khi tập đúng kỹ thuật. Để được hướng dẫn bài tập phù hợp với tình trạng sức khỏe cụ thể, liên hệ Phòng Khám YHCT Tâm Đức — BS. Nguyễn Đức Tâm, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày tại Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 43,
    slug: "doc-hoat-ky-sinh-thang-bai-thuoc-tri-phong-thap",
    date: "2026-06-20",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Độc hoạt ký sinh thang — Bài thuốc trị phong thấp, đau nhức xương khớp kinh điển",
    excerpt: "Độc hoạt ký sinh thang là bài thuốc cổ phương nổi tiếng trong điều trị phong thấp, đau nhức xương khớp do chính khí suy yếu kết hợp ngoại tà xâm nhập, thường dùng cho các bệnh khớp mạn tính.",
    readTime: 6,
    content: `
<h2>Nguồn gốc bài thuốc Độc hoạt ký sinh thang</h2>
<p>Độc hoạt ký sinh thang (còn gọi là Độc hoạt tang ký sinh thang) là bài thuốc cổ phương được ghi trong "Bị cấp thiên kim yếu phương" của danh y Tôn Tư Mạc thời Đường. Bài thuốc ra đời nhằm điều trị các chứng đau nhức xương khớp mạn tính do phong, hàn, thấp xâm nhập kết hợp với cơ thể suy yếu khí huyết, can thận bất túc — tình trạng thường gặp ở người lớn tuổi hoặc bệnh khớp lâu năm.</p>

<h2>Thành phần và vai trò các vị thuốc</h2>
<ul>
  <li><strong>Độc hoạt, Phòng phong:</strong> Khu phong, trừ thấp, là quân dược chủ trị phong thấp tý thống.</li>
  <li><strong>Tang ký sinh, Đỗ trọng, Ngưu tất:</strong> Bổ can thận, mạnh gân cốt, hỗ trợ phục hồi vùng lưng gối yếu mỏi.</li>
  <li><strong>Tế tân, Quế chi:</strong> Tán hàn, thông kinh lạc, giảm đau do lạnh.</li>
  <li><strong>Đương quy, Xuyên khung, Thục địa, Bạch thược:</strong> Bổ huyết, hoạt huyết, dưỡng âm, hỗ trợ nuôi dưỡng gân cơ khớp xương.</li>
  <li><strong>Đảng sâm, Phục linh, Bạch truật, Cam thảo:</strong> Bổ khí kiện tỳ, làm nền tảng nâng cao chính khí để chống lại ngoại tà.</li>
  <li><strong>Ngưu tất, Tần giao:</strong> Thông lợi kinh lạc, hỗ trợ giảm đau khớp dưới.</li>
</ul>
<p>Các vị thuốc phối hợp theo nguyên tắc vừa khu tà (trừ phong thấp) vừa phù chính (bổ khí huyết, can thận), phù hợp với bệnh cảnh lâu năm chính khí đã suy.</p>

<h2>Chỉ định lâm sàng</h2>
<ul>
  <li>Đau nhức xương khớp mạn tính do phong hàn thấp tý, đau tăng khi gặp lạnh hoặc vận động.</li>
  <li>Thoái hóa khớp, thoái hóa cột sống ở người lớn tuổi kèm biểu hiện can thận hư (mỏi lưng, yếu gối).</li>
  <li>Viêm khớp dạng thấp giai đoạn mạn, khớp đau ê ẩm kéo dài kèm cơ thể suy nhược.</li>
  <li>Đau thần kinh tọa, đau thắt lưng mạn tính do hàn thấp kết hợp khí huyết hư.</li>
</ul>

<h2>Chống chỉ định và lưu ý khi dùng</h2>
<ul>
  <li>Không dùng cho người đang sốt cao, viêm khớp cấp có sưng nóng đỏ rõ (thể thấp nhiệt) vì bài thuốc có tính ôn, dễ làm tăng nhiệt.</li>
  <li>Phụ nữ có thai cần thận trọng, chỉ sử dụng khi có chỉ định và theo dõi của thầy thuốc chuyên môn.</li>
  <li>Người tỳ vị hư hàn dễ đầy bụng nên dùng kèm vị kiện tỳ hoặc uống sau ăn để giảm kích ứng tiêu hóa.</li>
  <li>Cần gia giảm liều lượng tùy thể trạng và mức độ bệnh, không tự ý sử dụng kéo dài khi chưa được bắt mạch, biện chứng cụ thể.</li>
</ul>

<h2>Kết hợp điều trị toàn diện</h2>
<p>Để đạt hiệu quả tối ưu, Độc hoạt ký sinh thang thường được phối hợp với châm cứu, xoa bóp bấm huyệt và các bài tập vận động nhẹ nhàng nhằm tăng cường lưu thông khí huyết tại khớp, đồng thời cải thiện chế độ ăn uống, giữ ấm cơ thể để hỗ trợ quá trình hồi phục lâu dài.</p>

<div class="art-cta-box">
  <p>Việc sử dụng Độc hoạt ký sinh thang cần được biện chứng đúng thể bệnh để đạt hiệu quả và an toàn. Liên hệ Phòng Khám YHCT Tâm Đức — BS. Nguyễn Đức Tâm để được tư vấn, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày tại Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 44,
    slug: "phong-ngua-loang-xuong-theo-yhct",
    date: "2026-06-20",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Phòng ngừa loãng xương theo Y học cổ truyền",
    excerpt: "Loãng xương liên quan chặt chẽ đến chức năng thận theo YHCT. Hiểu đúng nguyên lý dưỡng thận, bổ tinh kết hợp dinh dưỡng và vận động hợp lý giúp phòng ngừa loãng xương hiệu quả, đặc biệt ở người trung niên và cao tuổi.",
    readTime: 5,
    content: `
<h2>Mối liên hệ giữa Thận và xương theo Y học cổ truyền</h2>
<p>Theo YHCT, "Thận chủ cốt" — thận tàng tinh, tinh sinh tủy, tủy nuôi dưỡng xương. Khi thận khí, thận tinh đầy đủ, xương cốt chắc khỏe, vận động linh hoạt. Ngược lại, khi tuổi cao hoặc cơ thể suy nhược, thận tinh hao tổn dần, xương trở nên giòn, xốp, dễ gãy — đây chính là cơ chế cốt lõi của chứng loãng xương trong YHCT, thường gọi là "cốt nuy" hoặc nằm trong phạm vi chứng "tý" mạn tính. Ngoài thận, tỳ vị (chủ vận hóa, hấp thu dưỡng chất) và can (chủ cân, tàng huyết) cũng ảnh hưởng gián tiếp đến sức khỏe xương khớp.</p>

<h2>Đối tượng cần chú trọng phòng ngừa</h2>
<ul>
  <li>Phụ nữ sau mãn kinh — giai đoạn thiên quý suy giảm mạnh, thận âm hư rõ rệt.</li>
  <li>Người trên 50 tuổi, đặc biệt có tiền sử gia đình loãng xương.</li>
  <li>Người ít vận động, ít tiếp xúc ánh nắng, ăn uống thiếu canxi và đạm trong thời gian dài.</li>
  <li>Người dùng corticoid kéo dài hoặc có bệnh lý tuyến giáp, tuyến cận giáp.</li>
</ul>

<h2>Nguyên tắc dưỡng sinh phòng ngừa loãng xương</h2>
<h3>1. Bổ thận, dưỡng tinh</h3>
<p>Ưu tiên thực phẩm bổ thận như hạt óc chó, mè đen, đậu đen, hải sâm, tôm, cua nhỏ ăn cả vỏ, xương ống hầm. Hạn chế thức khuya, lao lực quá mức làm hao tổn thận tinh.</p>
<h3>2. Kiện tỳ vị để tăng hấp thu dưỡng chất</h3>
<p>Tỳ vị khỏe mới hấp thu tốt canxi và dưỡng chất từ thức ăn. Nên ăn chín, ăn ấm, tránh đồ lạnh, đồ sống nhiều, ăn đúng giờ, không bỏ bữa sáng.</p>
<h3>3. Vận động phù hợp dưỡng cân cốt</h3>
<p>Tập các bài dưỡng sinh nhẹ nhàng như đi bộ, Bát đoạn cẩm, Thái cực quyền giúp khí huyết lưu thông đến xương khớp, kích thích tạo xương tự nhiên, đồng thời tăng cường thăng bằng, giảm nguy cơ té ngã gãy xương ở người cao tuổi.</p>

<h2>Huyệt vị hỗ trợ dưỡng cốt phòng loãng xương</h2>
<ul>
  <li><strong>Thận du:</strong> Hai bên cột sống thắt lưng, ngang đốt sống L2. Xoa ấm hoặc cứu ngải hàng ngày giúp bổ thận khí.</li>
  <li><strong>Thái khê:</strong> Mắt cá trong, giữa đỉnh mắt cá và gân gót. Bấm xoa giúp tư bổ thận âm.</li>
  <li><strong>Túc tam lý:</strong> Dưới đầu gối 3 thốn. Kiện tỳ vị, tăng hấp thu dưỡng chất toàn thân.</li>
</ul>

<h2>Lưu ý quan trọng</h2>
<p>Người có nguy cơ cao nên kiểm tra mật độ xương định kỳ, kết hợp YHCT với theo dõi y khoa hiện đại để phát hiện sớm và can thiệp kịp thời, không nên chỉ dựa vào một phương pháp duy nhất khi đã có dấu hiệu loãng xương rõ rệt.</p>

<div class="art-cta-box">
  <p>Phòng ngừa loãng xương cần thực hiện sớm và kiên trì, đặc biệt từ tuổi trung niên. Phòng Khám YHCT Tâm Đức — BS. Nguyễn Đức Tâm tư vấn dưỡng sinh bổ thận phù hợp từng thể trạng, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày tại Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 45,
    slug: "phuong-huyet-dieu-tri-roi-loan-tien-dinh",
    date: "2026-06-20",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị Rối loạn tiền đình theo Y học cổ truyền",
    excerpt: "Rối loạn tiền đình gây chóng mặt, mất thăng bằng, buồn nôn. Y học cổ truyền sử dụng phối hợp huyệt vị vùng đầu và toàn thân để điều hòa khí huyết, an định thanh khiếu, cải thiện triệu chứng hiệu quả.",
    readTime: 6,
    content: `
<h2>Rối loạn tiền đình theo quan điểm Y học cổ truyền</h2>
<p>Rối loạn tiền đình gây các triệu chứng chóng mặt, hoa mắt, mất thăng bằng, đôi khi kèm buồn nôn, ù tai. Theo YHCT, bệnh thuộc phạm vi chứng "Huyễn vựng", nguyên nhân chủ yếu do can dương vượng (can hỏa nghịch lên đầu), đàm thấp che lấp thanh khiếu, khí huyết hư không nuôi dưỡng được não, hoặc thận âm hư không tiềm dương khiến dương khí bốc lên gây chóng mặt. Châm cứu vào các huyệt vị phù hợp giúp bình can tức phong, hóa đàm trừ thấp, bổ khí huyết, từ đó cải thiện rõ rệt triệu chứng chóng mặt và mất thăng bằng.</p>

<h2>Các huyệt vị chính trong điều trị</h2>
<ul>
  <li><strong>Bách hội:</strong> Đỉnh đầu, giao điểm đường nối hai đỉnh tai và đường giữa đầu. Tác dụng an thần, bình can tức phong, giảm chóng mặt, hoa mắt.</li>
  <li><strong>Phong trì:</strong> Sau gáy, hõm giữa cơ ức đòn chũm và cơ thang, ngang dái tai. Tác dụng khu phong, thông kinh lạc vùng đầu cổ, giảm chóng mặt do can dương vượng.</li>
  <li><strong>Ấn đường:</strong> Giữa hai đầu lông mày. Tác dụng an thần, định tâm, hỗ trợ giảm cảm giác lâng lâng, hoa mắt.</li>
  <li><strong>Nội quan:</strong> Mặt trong cổ tay, trên lằn chỉ cổ tay 2 thốn, giữa hai gân. Tác dụng giảm buồn nôn, an thần, hòa vị — rất hiệu quả khi rối loạn tiền đình kèm nôn ói.</li>
  <li><strong>Túc tam lý:</strong> Dưới đầu gối ngoài 3 thốn. Tác dụng bổ khí huyết, kiện tỳ vị, hỗ trợ thể khí huyết hư gây huyễn vựng.</li>
  <li><strong>Thái xung:</strong> Mu bàn chân, giữa xương ngón chân 1 và 2. Tác dụng bình can, tức phong, hạ can hỏa.</li>
  <li><strong>Thái khê:</strong> Mắt cá trong, giữa đỉnh mắt cá và gân gót. Tác dụng tư bổ thận âm, tiềm dương, hỗ trợ thể thận âm hư.</li>
</ul>

<h2>Phối huyệt theo thể bệnh</h2>
<p>Với thể can dương vượng, phối Bách hội, Phong trì, Thái xung để bình can tức phong. Với thể đàm thấp, thêm Phong long, Trung quản để hóa đàm trừ thấp. Với thể khí huyết hư, phối Túc tam lý, Tam âm giao để bổ khí dưỡng huyết. Với thể thận âm hư, phối Thái khê, Tam âm giao để tư âm tiềm dương.</p>

<h2>Kết hợp bấm huyệt tại nhà hỗ trợ giảm chóng mặt</h2>
<ul>
  <li>Bấm Ấn đường và Phong trì mỗi khi có cảm giác chóng mặt khởi phát, xoa nhẹ 1–2 phút mỗi huyệt.</li>
  <li>Tránh thay đổi tư thế đột ngột (đứng lên ngồi xuống nhanh, quay đầu nhanh) trong giai đoạn đang có triệu chứng.</li>
  <li>Nghỉ ngơi nơi yên tĩnh, tránh ánh sáng mạnh khi cơn chóng mặt xuất hiện.</li>
</ul>

<div class="art-cta-box">
  <p>Rối loạn tiền đình cần được biện chứng đúng thể để châm cứu đạt hiệu quả tối ưu và an toàn. Phòng Khám YHCT Tâm Đức — BS. Nguyễn Đức Tâm trực tiếp thăm khám, châm cứu điều trị, liên hệ hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày tại Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 46,
    slug: "dieu-tri-rung-toc-tung-mang-theo-yhct",
    date: "2026-06-20",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Điều trị rụng tóc từng mảng (Alopecia Areata) theo Y học cổ truyền",
    excerpt: "Rụng tóc từng mảng khiến tóc rụng thành đốm tròn bất thường, ảnh hưởng lớn đến thẩm mỹ và tâm lý. Y học cổ truyền nhìn nhận đây là biểu hiện của can thận huyết hư, có thể cải thiện bằng bài thuốc bổ huyết kết hợp châm cứu kích thích mọc tóc.",
    readTime: 6,
    content: `
<h2>Rụng tóc từng mảng và mối liên hệ tạng phủ theo YHCT</h2>
<p>Rụng tóc từng mảng (Alopecia Areata) là tình trạng tóc rụng thành từng đốm tròn hoặc bầu dục, ranh giới rõ, có thể xuất hiện đột ngột không kèm ngứa hay viêm da rõ rệt. Theo YHCT, "Phát vi thận chi hoa, huyết dư chi biểu" — tóc là biểu hiện của thận tinh và là phần dư của huyết. Tóc mọc tốt, đen bóng nhờ thận tinh đầy đủ và can huyết dồi dào nuôi dưỡng. Khi can thận âm huyết bất túc, hoặc cơ thể trải qua stress, lo âu kéo dài làm can khí uất kết, huyết không thông để nuôi dưỡng nang tóc, dẫn đến rụng tóc thành từng mảng. Một số trường hợp liên quan đến huyết ứ tại da đầu cản trở khí huyết lưu thông đến nang tóc.</p>

<h2>Các thể bệnh thường gặp</h2>
<h3>1. Thể Can thận âm hư</h3>
<p>Tóc rụng từng mảng kèm tóc bạc sớm, hoa mắt chóng mặt, lưng gối mỏi yếu, ngủ kém, lưỡi đỏ ít rêu. Thường gặp ở người làm việc trí óc căng thẳng, mất ngủ kéo dài.</p>
<h3>2. Thể Khí huyết hư</h3>
<p>Tóc rụng kèm sắc mặt nhợt nhạt, mệt mỏi, hồi hộp, móng tay nhợt giòn dễ gãy, ăn uống kém. Thường gặp sau sinh, sau bệnh nặng hoặc thiếu dinh dưỡng kéo dài.</p>
<h3>3. Thể Can khí uất kết (liên quan stress)</h3>
<p>Rụng tóc xuất hiện hoặc nặng hơn sau giai đoạn căng thẳng tâm lý, lo âu, mất ngủ, kèm dễ cáu giận, tức ngực, đau mạng sườn.</p>
<h3>4. Thể Huyết ứ tại da đầu</h3>
<p>Vùng rụng tóc da đầu hơi tím sạm, sờ có thể thấy hơi cứng, mảng rụng tóc dai dẳng lâu hồi phục dù đã điều trị bổ huyết.</p>

<h2>Điều trị bên trong bằng bài thuốc bổ huyết, dưỡng can thận</h2>
<p>Tùy thể bệnh, thầy thuốc gia giảm các bài thuốc nền như Thất bảo mỹ nhiệm đan (bổ can thận, đen tóc), Tứ vật thang gia giảm (dưỡng huyết), hoặc Sài hồ sơ can tán khi có yếu tố can khí uất kết do stress. Các vị thuốc thường dùng gồm Hà thủ ô đỏ, Thục địa, Đương quy, Bạch thược, Kỷ tử, Đan sâm — vừa bổ huyết dưỡng tóc, vừa hoạt huyết thông kinh lạc da đầu.</p>

<h2>Điều trị bên ngoài bằng châm cứu và xoa bóp da đầu</h2>
<ul>
  <li><strong>Bách hội, Tứ thần thông:</strong> Các huyệt vùng đỉnh đầu, kích thích tuần hoàn máu tại chỗ, thúc đẩy mọc tóc trở lại.</li>
  <li><strong>Phong trì, Thái dương:</strong> Hỗ trợ giảm căng thẳng, cải thiện tuần hoàn vùng đầu.</li>
  <li><strong>Mai hoa châm (châm bì phu):</strong> Gõ nhẹ vùng da đầu bị rụng tóc để kích thích tại chỗ, tăng lưu thông khí huyết đến nang tóc.</li>
  <li>Xoa bóp da đầu nhẹ nhàng 5–10 phút mỗi ngày bằng dầu dưỡng thảo dược (dầu mè đen ấm) giúp thư giãn, tăng tuần hoàn cục bộ.</li>
</ul>

<h2>Chăm sóc và phòng ngừa tái phát</h2>
<p>Người bệnh cần giữ tâm lý ổn định, hạn chế stress, ngủ đủ giấc trước 23h để dưỡng can huyết. Bổ sung thực phẩm đen như mè đen, đậu đen, gạo lứt — theo YHCT các thực phẩm màu đen có tác dụng bổ thận, ích tóc. Tránh gội đầu nước quá nóng hoặc dùng hóa chất mạnh trong giai đoạn tóc đang phục hồi.</p>

<div class="art-cta-box">
  <p>Rụng tóc từng mảng cần điều trị kiên trì cả bên trong và bên ngoài để đạt hiệu quả bền vững. Phòng Khám YHCT Tâm Đức — BS. Nguyễn Đức Tâm tư vấn phác đồ phù hợp từng thể trạng, liên hệ hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày tại Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 40,
    slug: "khi-cong-duong-sinh-buoi-sang-yhct",
    date: "2026-06-20",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Khí công dưỡng sinh buổi sáng theo Y học cổ truyền: Phương pháp không dùng thuốc",
    excerpt: "Luyện khí công vào buổi sáng giúp điều hòa khí huyết, bồi bổ chính khí ngay từ đầu ngày. Tìm hiểu nguyên lý, huyệt vị và cách thực hành đúng theo từng thể trạng.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Khí công dưỡng sinh là phương pháp luyện tập kết hợp điều thân (tư thế, động tác), điều khí (hít thở) và điều tâm (tĩnh tâm, tập trung ý niệm), nhằm bồi bổ chính khí, điều hòa âm dương, thông kinh hoạt lạc. Theo Y học cổ truyền (YHCT), khoảng thời gian từ 5–7 giờ sáng (giờ Mão) là lúc dương khí trong tự nhiên đang thăng lên mạnh nhất, đại trường và phế kinh đang vượng khí — luyện khí công vào thời điểm này giúp cơ thể hấp thu dương khí tự nhiên, tăng cường chính khí, phòng chống tà khí xâm nhập trong suốt cả ngày.</p>
<p>Khác với các bài tập thể lực thông thường, khí công dưỡng sinh chú trọng sự thư thái, nhịp thở sâu và chậm, vận động nhẹ nhàng liên tục, giúp khí huyết lưu thông toàn thân mà không gây hao tổn nguyên khí — phù hợp với mọi lứa tuổi, đặc biệt là người trung niên, cao tuổi hoặc người có thể trạng suy yếu.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
<li><strong>Thể khí hư:</strong> Người hay mệt mỏi, hụt hơi, nói nhỏ, dễ ốm vặt, ra mồ hôi tự nhiên. Nên ưu tiên các động tác hít thở bụng sâu, vận động chậm để bổ khí, tránh tập gắng sức gây hao khí thêm.</li>
<li><strong>Thể dương hư:</strong> Sợ lạnh, chân tay lạnh, tiểu nhiều lần, tinh thần uể oải. Nên tập vào lúc có ánh nắng sớm, kết hợp xoa ấm vùng đan điền (dưới rốn) trước và sau khi tập để ôn bổ thận dương.</li>
<li><strong>Thể can khí uất:</strong> Hay căng thẳng, tức ngực, thở dài, dễ cáu giận. Nên kết hợp các động tác giãn cơ vùng ngực sườn, thở sâu chậm để sơ can giải uất, thư giãn tinh thần.</li>
<li><strong>Thể đàm thấp:</strong> Người nặng nề, béo bụng, ngủ nhiều vẫn mệt, rêu lưỡi dày nhớt. Nên tập các động tác vận động toàn thân với cường độ nhẹ tăng dần để hành khí, hóa thấp, tránh ứ trệ.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị / Bài thuốc</h2>
<p>Trước khi luyện khí công, nên xoa ấm và tác động vào một số huyệt vị quan trọng để dẫn khí, tăng hiệu quả luyện tập:</p>
<ul>
<li><strong>Bách hội (GV20):</strong> Đỉnh đầu, giao điểm đường nối hai đỉnh vành tai với đường giữa đầu. Xoa nhẹ giúp thăng dương khí, tỉnh thần, minh mục.</li>
<li><strong>Khí hải (CV6):</strong> Dưới rốn 1,5 thốn. Là bể chứa khí của toàn thân, xoa ấm huyệt này trước khi tập giúp tập trung và dẫn khí xuống đan điền.</li>
<li><strong>Mệnh môn (GV4):</strong> Ngay dưới mỏm gai đốt sống thắt lưng L2, đối diện rốn qua lưng. Ôn bổ thận dương, là gốc của nguyên khí toàn thân.</li>
<li><strong>Túc tam lý (ST36):</strong> Dưới lồi củ ngoài xương chày 3 thốn. Kiện tỳ ích khí, hỗ trợ tăng cường nguyên khí khi tập luyện đều đặn.</li>
<li><strong>Dũng tuyền (KI1):</strong> Lòng bàn chân, 1/3 trước gan chân. Xoa ấm huyệt này cuối buổi tập giúp dẫn khí hỏa xuống dưới, an định tâm thần.</li>
</ul>
<p>Trình tự luyện tập cơ bản: đứng thẳng tự nhiên (trạm trang), hai chân rộng bằng vai, đầu lưỡi chạm nhẹ vòm miệng trên, hít vào bằng mũi cho bụng phình ra, thở ra từ từ bằng miệng cho bụng hóp lại, kết hợp tay đưa lên xuống nhẹ nhàng theo nhịp thở trong 10–15 phút.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
<li><strong>Chọn không gian thoáng, sạch:</strong> Tập ở nơi có không khí trong lành, tránh gió lùa trực tiếp, có thể tập trong nhà gần cửa sổ mở nếu trời lạnh.</li>
<li><strong>Khởi động nhẹ trước khi tập:</strong> Xoay cổ, xoay khớp vai, gối nhẹ nhàng 2–3 phút để khí huyết lưu thông trước khi vào bài tập chính.</li>
<li><strong>Duy trì hơi thở đều, sâu, chậm:</strong> Đây là yếu tố quan trọng nhất — tránh nín thở hoặc thở gấp, luôn giữ tâm thái thư thái trong suốt quá trình tập.</li>
<li><strong>Tập đều đặn mỗi ngày 15–20 phút:</strong> Hiệu quả khí công đến từ sự kiên trì lâu dài hơn là cường độ một lần tập, nên duy trì vào cùng một thời điểm mỗi sáng.</li>
<li><strong>Không tập khi đang đói quá hoặc vừa ăn no:</strong> Nên tập trước ăn sáng hoặc sau khi ăn nhẹ ít nhất 30 phút để tránh ảnh hưởng đến tỳ vị.</li>
</ul>

<div class="art-cta-box">
  <p>Khí công dưỡng sinh buổi sáng là phương pháp an toàn, phù hợp mọi thể trạng nếu luyện tập đúng cách và đều đặn. Nếu bạn chưa rõ thể trạng của mình thuộc nhóm nào hoặc muốn được hướng dẫn bài tập phù hợp, hãy đến thăm khám tại <strong>Phòng Khám YHCT Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ tứ chẩn xác định thể trạng và tư vấn phương pháp dưỡng sinh phù hợp riêng cho bạn. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 34,
    slug: "benh-gout-thong-phong-theo-yhct",
    date: "2026-06-19",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Bệnh Gout (Thống phong) theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Gout (thống phong) là bệnh lý do rối loạn chuyển hóa purin gây ứ đọng acid uric tại khớp. Y học cổ truyền phân thể bệnh để điều trị tận gốc, kết hợp châm cứu và bài thuốc phù hợp từng giai đoạn.",
    readTime: 6,
    content: `
<h2>Tổng quan về bệnh Gout theo Y học cổ truyền</h2>
<p>Gout, còn gọi là thống phong, là bệnh lý viêm khớp do lắng đọng tinh thể urat tại các khớp, gây sưng nóng đỏ đau dữ dội, thường khởi phát đột ngột vào ban đêm. Theo Y học cổ truyền (YHCT), thống phong thuộc phạm vi chứng "Tý" và "Thống phong", nguyên nhân cốt lõi là do tỳ thận hư yếu không vận hóa được thấp trọc, kết hợp với phong hàn thấp nhiệt xâm nhập gây ứ trệ ở kinh lạc, khớp xương, lâu ngày sinh đàm thấp, huyết ứ làm khớp biến dạng, nổi hạt tophi.</p>
<p>Bệnh thường gặp ở nam giới trung niên, người béo phì, uống nhiều rượu bia, ăn nhiều đạm động vật. Nếu không điều trị đúng cách, gout có thể tiến triển thành mạn tính, gây tổn thương khớp vĩnh viễn và ảnh hưởng đến thận.</p>
<h2>Phân thể bệnh Gout theo Y học cổ truyền</h2>
<p>Việc biện chứng phân thể chính xác là nền tảng để xây dựng phác đồ điều trị hiệu quả:</p>
<ul>
<li><strong>Thể thấp nhiệt uẩn kết (giai đoạn gout cấp):</strong> Khớp sưng to, nóng đỏ, đau dữ dội, chạm vào càng đau, kèm sốt, miệng khát, tiểu vàng, lưỡi đỏ rêu vàng nhớt. Đây là giai đoạn viêm cấp tính điển hình.</li>
<li><strong>Thể đàm thấp ứ trệ:</strong> Khớp sưng nhưng không nóng đỏ rõ, đau âm ỉ kéo dài, người nặng nề, chán ăn, rêu lưỡi trắng dày nhớt. Thường gặp ở người béo, ít vận động.</li>
<li><strong>Thể thấp trọc lưu chú (gout mạn có hạt tophi):</strong> Bệnh kéo dài nhiều năm, xuất hiện hạt tophi quanh khớp, khớp biến dạng cứng, vận động hạn chế, có thể kèm sỏi thận.</li>
<li><strong>Thể can thận âm hư:</strong> Khớp đau âm ỉ về đêm, kèm đau lưng mỏi gối, ù tai, hoa mắt, ngũ tâm phiền nhiệt, lưỡi đỏ ít rêu. Gặp ở bệnh nhân gout mạn tính lâu năm.</li>
<li><strong>Thể khí trệ huyết ứ:</strong> Khớp đau nhức cố định một vị trí, sắc da tím sạm, sờ thấy cục cứng dưới da, lưỡi tím có điểm ứ huyết.</li>
</ul>
<h2>Nguyên tắc và phương pháp điều trị</h2>
<p>YHCT điều trị gout theo nguyên tắc "trị tiêu" (giảm đau, kháng viêm cấp) kết hợp "trị bản" (bổ tỳ thận, kiện tỳ trừ thấp, hóa đàm tán kết) tùy giai đoạn bệnh:</p>
<ul>
<li>Giai đoạn cấp (thấp nhiệt): Pháp thanh nhiệt, lợi thấp, giải độc, tiêu thũng — dùng huyệt Hợp cốc, Khúc trì, Túc tam lý, Tam âm giao, Nội đình, A thị huyệt tại khớp viêm bằng thủ pháp tả.</li>
<li>Giai đoạn mạn (đàm thấp, thận hư): Pháp kiện tỳ hóa đàm, bổ thận — châm cứu kết hợp cứu ngải tại Túc tam lý, Tam âm giao, Thái xung, Thái khê, Thận du.</li>
<li>Kết hợp xoa bóp bấm huyệt giảm đau, chế độ ăn hạn chế đạm động vật, nội tạng, hải sản, rượu bia, tăng cường uống nước.</li>
</ul>
<div class="art-cta-box"><p>Quý khách có dấu hiệu đau khớp nghi gout hoặc đã được chẩn đoán gout mạn tính cần được biện chứng đúng thể bệnh để điều trị hiệu quả, vui lòng liên hệ Phòng Khám YHCT Tâm Đức - BS. Nguyễn Đức Tâm, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày, địa chỉ tại Hà Đông, Hà Nội.</p></div>
  `
  },
  {
    id: 35,
    slug: "giac-hoi-va-chi-dinh-dung-theo-yhct",
    date: "2026-06-19",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Giác hơi (Bạt hoán) và chỉ định đúng trong Y học cổ truyền",
    excerpt: "Giác hơi là phương pháp trị liệu không dùng thuốc lâu đời, giúp khu phong tán hàn, hành khí hoạt huyết. Hiểu đúng chỉ định và chống chỉ định giúp giác hơi phát huy hiệu quả an toàn.",
    readTime: 5,
    content: `
<h2>Giác hơi là gì?</h2>
<p>Giác hơi (bạt hoán liệu pháp) là phương pháp dùng ống giác (bằng tre, thủy tinh hoặc nhựa) tạo áp lực âm hút lên vùng da nhất định, nhằm khu phong tán hàn, thông kinh hoạt lạc, hành khí hoạt huyết, bài trừ thấp độc ra ngoài cơ thể. Đây là một trong những phương pháp không dùng thuốc được sử dụng phổ biến trong Y học cổ truyền (YHCT) suốt hàng nghìn năm.</p>
<h2>Cơ chế tác dụng theo Y học cổ truyền</h2>
<p>Theo lý luận YHCT, khi phong hàn thấp tà xâm nhập cơ thể gây tắc nghẽn kinh lạc, khí huyết không thông sẽ sinh đau nhức, tê mỏi. Lực hút âm áp của giác hơi tác động lên da, cơ, kinh lạc giúp khai thông tắc nghẽn, đẩy tà khí (phong, hàn, thấp, ứ huyết) ra ngoài qua bề mặt da, đồng thời kích thích tuần hoàn khí huyết tại chỗ, giảm đau và thư giãn cơ.</p>
<h2>Chỉ định của giác hơi</h2>
<ul>
<li>Đau mỏi cơ vùng vai gáy, lưng, do nhiễm lạnh hoặc ngồi sai tư thế lâu ngày.</li>
<li>Cảm mạo phong hàn giai đoạn đầu (ho, sổ mũi, đau đầu, gai rét).</li>
<li>Đau thắt lưng, đau thần kinh tọa thể hàn thấp.</li>
<li>Hỗ trợ giảm căng cơ, mệt mỏi sau vận động hoặc lao động nặng.</li>
<li>Hỗ trợ điều trị một số bệnh lý hô hấp mạn tính như viêm phế quản (khi không có sốt cao).</li>
</ul>
<h2>Chống chỉ định cần lưu ý</h2>
<ul>
<li>Người có rối loạn đông máu, đang dùng thuốc chống đông, dễ chảy máu, bầm tím.</li>
<li>Vùng da có vết thương hở, viêm nhiễm, lở loét, hoặc vùng da quá mỏng, nhạy cảm.</li>
<li>Phụ nữ mang thai, đặc biệt vùng bụng và thắt lưng.</li>
<li>Người đang sốt cao, mất nước nặng, suy nhược nặng.</li>
<li>Trẻ nhỏ dưới 4 tuổi, người cao tuổi da quá mỏng yếu cần cân nhắc kỹ.</li>
</ul>
<h2>Quy trình thực hiện và lưu ý an toàn</h2>
<p>Giác hơi cần được thực hiện bởi thầy thuốc có chuyên môn, xác định đúng vùng huyệt, thời gian giác phù hợp (thường 5-10 phút), lực hút vừa phải tránh gây bỏng rộp da. Sau giác hơi, vùng da sẽ có vết tím đỏ tự nhiên, người bệnh cần giữ ấm, tránh gió lạnh, không tắm nước lạnh ngay sau khi giác, kiêng ăn đồ tanh lạnh trong 24 giờ đầu để đạt hiệu quả tối ưu.</p>
<div class="art-cta-box"><p>Để được tư vấn và thực hiện giác hơi đúng kỹ thuật, an toàn, phù hợp thể trạng, quý khách vui lòng đến Phòng Khám YHCT Tâm Đức - BS. Nguyễn Đức Tâm, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày, địa chỉ tại Hà Đông, Hà Nội.</p></div>
  `
  },
  {
    id: 36,
    slug: "tieu-dao-tan-bai-thuoc-kinh-dien",
    date: "2026-06-19",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Tiêu dao tán — Bài thuốc sơ can giải uất kinh điển của Y học cổ truyền",
    excerpt: "Tiêu dao tán là bài thuốc cổ phương nổi tiếng giúp sơ can giải uất, dưỡng huyết, kiện tỳ, thường dùng cho các chứng can khí uất kết, rối loạn kinh nguyệt, căng thẳng kéo dài.",
    readTime: 6,
    content: `
<h2>Nguồn gốc bài thuốc Tiêu dao tán</h2>
<p>Tiêu dao tán là bài thuốc cổ phương xuất xứ từ sách "Hòa tễ cục phương" thời nhà Tống, được sử dụng rộng rãi trong Y học cổ truyền (YHCT) cho đến ngày nay. Tên gọi "Tiêu dao" mang ý nghĩa giúp người bệnh trở nên thư thái, nhẹ nhàng, giải tỏa được uất ức trong lòng — phản ánh đúng công năng cốt lõi của bài thuốc là sơ can giải uất.</p>
<h2>Thành phần và vai trò các vị thuốc</h2>
<ul>
<li><strong>Sài hồ:</strong> Quân dược, sơ can giải uất, thăng dương khí, là vị thuốc chủ đạo điều hòa chức năng tạng can.</li>
<li><strong>Bạch thược:</strong> Dưỡng huyết liễm âm, nhu can hòa lý, phối hợp Sài hồ để vừa sơ vừa dưỡng, tránh sơ tán quá mức làm hao tổn âm huyết.</li>
<li><strong>Đương quy:</strong> Bổ huyết hoạt huyết, dưỡng can điều kinh, hỗ trợ Bạch thược dưỡng huyết.</li>
<li><strong>Bạch truật:</strong> Kiện tỳ táo thấp, tăng cường vận hóa, hỗ trợ tỳ vị không bị can khí lấn áp.</li>
<li><strong>Phục linh (Bạch linh):</strong> Lợi thủy thấm thấp, kiện tỳ an thần, phối hợp Bạch truật kiện tỳ trừ thấp.</li>
<li><strong>Cam thảo:</strong> Điều hòa các vị thuốc, ích khí hòa trung.</li>
<li><strong>Bạc hà:</strong> Tá dược dẫn thuốc, hỗ trợ Sài hồ sơ can thấu nhiệt, làm thư thái tinh thần.</li>
<li><strong>Sinh khương:</strong> Ôn trung hòa vị, hỗ trợ tiêu hóa, giảm tác dụng phụ của các vị thuốc khác lên tỳ vị.</li>
</ul>
<h2>Chỉ định lâm sàng</h2>
<ul>
<li>Chứng can khí uất kết: ngực sườn đầy tức, hay thở dài, dễ cáu giận, tính khí thay đổi bất thường.</li>
<li>Rối loạn kinh nguyệt do can uất: kinh nguyệt không đều, đau bụng kinh, căng tức vùng ngực trước kỳ kinh.</li>
<li>Suy nhược thần kinh, mất ngủ, lo âu kéo dài liên quan căng thẳng tâm lý, áp lực công việc.</li>
<li>Rối loạn tiêu hóa do căng thẳng: ăn kém, đầy bụng, người mệt mỏi, sắc mặt kém tươi.</li>
<li>Hỗ trợ điều trị hội chứng tiền kinh nguyệt, rối loạn nội tiết nhẹ ở phụ nữ.</li>
</ul>
<h2>Chống chỉ định và lưu ý khi sử dụng</h2>
<ul>
<li>Không dùng cho người âm hư hỏa vượng nặng, sốt cao, mất nước.</li>
<li>Phụ nữ có thai cần thận trọng, chỉ sử dụng khi có chỉ định và theo dõi của thầy thuốc.</li>
<li>Người đang chảy máu, rong huyết cần cân nhắc kỹ trước khi dùng do có vị hoạt huyết.</li>
<li>Cần gia giảm liều lượng và thành phần phù hợp theo thể trạng từng người, không tự ý sử dụng kéo dài.</li>
</ul>
<div class="art-cta-box"><p>Để được bốc thuốc Tiêu dao tán gia giảm phù hợp với thể trạng và biện chứng chính xác, quý khách vui lòng liên hệ Phòng Khám YHCT Tâm Đức - BS. Nguyễn Đức Tâm, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày, địa chỉ tại Hà Đông, Hà Nội.</p></div>
  `
  },
  {
    id: 37,
    slug: "phong-ngua-soi-than-theo-yhct",
    date: "2026-06-19",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Phòng ngừa sỏi thận - tiết niệu theo Y học cổ truyền",
    excerpt: "Sỏi thận tiết niệu liên quan đến thấp nhiệt uẩn kết tại bàng quang, thận khí hư yếu. Áp dụng các nguyên tắc dưỡng sinh, ăn uống, sinh hoạt theo YHCT giúp phòng ngừa sỏi hình thành và tái phát.",
    readTime: 5,
    content: `
<h2>Quan điểm Y học cổ truyền về sỏi thận - tiết niệu</h2>
<p>Sỏi thận, sỏi tiết niệu thuộc phạm vi chứng "Thạch lâm" trong Y học cổ truyền (YHCT). Nguyên nhân chủ yếu do thấp nhiệt uẩn kết tại hạ tiêu (thận, bàng quang) lâu ngày ngưng kết thành sỏi, kết hợp với thận khí hư yếu không khí hóa được thủy dịch, khiến cặn lắng đọng. Người có thói quen ăn nhiều đồ cay nóng, dầu mỡ, uống ít nước, nhịn tiểu thường xuyên là đối tượng dễ mắc bệnh.</p>
<h2>Nguyên tắc phòng bệnh theo Y học cổ truyền</h2>
<p>Phòng bệnh hơn chữa bệnh — YHCT chú trọng điều chỉnh từ gốc bằng cách thanh thấp nhiệt, bổ thận khí, lợi tiểu thông lâm, kết hợp điều chỉnh ăn uống và sinh hoạt hàng ngày để cơ thể luôn ở trạng thái cân bằng âm dương, khí huyết thông sướng, hạn chế hình thành sỏi.</p>
<h2>Chế độ ăn uống phòng ngừa sỏi</h2>
<ul>
<li>Uống đủ nước (khoảng 2-2,5 lít/ngày), nên uống nước ấm, có thể dùng nước sắc kim tiền thảo, râu ngô, mã đề để hỗ trợ lợi tiểu.</li>
<li>Hạn chế thực phẩm giàu oxalat như rau muống, cải bó xôi, trà đặc; hạn chế đồ ăn nhiều dầu mỡ, cay nóng, nội tạng động vật.</li>
<li>Giảm lượng muối và đạm động vật trong khẩu phần ăn hàng ngày.</li>
<li>Tăng cường rau xanh, trái cây tươi có tính thanh nhiệt như dưa hấu, bí đao, rau má.</li>
</ul>
<h2>Sinh hoạt và dưỡng sinh hàng ngày</h2>
<ul>
<li>Không nhịn tiểu, đi tiểu ngay khi có nhu cầu để tránh ứ đọng nước tiểu.</li>
<li>Vận động thể dục đều đặn, tránh ngồi lâu một chỗ giúp khí huyết lưu thông, hỗ trợ bài tiết.</li>
<li>Tránh thức khuya, giữ tinh thần thoải mái, hạn chế căng thẳng kéo dài làm tổn hại thận khí.</li>
<li>Có thể xoa bóp vùng thắt lưng, bấm huyệt Thận du, Tam âm giao, Thái khê hàng ngày để hỗ trợ bổ thận, lợi niệu.</li>
</ul>
<h2>Theo dõi và tái khám định kỳ</h2>
<p>Người có tiền sử sỏi thận, sỏi tiết niệu hoặc gia đình có người mắc bệnh nên kiểm tra sức khỏe định kỳ 6 tháng/lần để phát hiện sớm sỏi mới hình thành, kết hợp điều trị bằng các bài thuốc lợi thấp thông lâm khi có dấu hiệu bất thường, tránh để bệnh tiến triển gây biến chứng tắc nghẽn đường tiết niệu.</p>
<div class="art-cta-box"><p>Để được tư vấn chế độ dưỡng sinh phòng ngừa sỏi thận - tiết niệu phù hợp thể trạng, quý khách vui lòng liên hệ Phòng Khám YHCT Tâm Đức - BS. Nguyễn Đức Tâm, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày, địa chỉ tại Hà Đông, Hà Nội.</p></div>
  `
  },
  {
    id: 38,
    slug: "phuong-huyet-dieu-tri-zona-than-kinh",
    date: "2026-06-19",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị Zona thần kinh theo Y học cổ truyền",
    excerpt: "Zona thần kinh gây đau rát dữ dội dọc theo đường dây thần kinh. Châm cứu các huyệt vị phù hợp giúp giảm đau, kháng viêm, rút ngắn thời gian bệnh và hạn chế đau thần kinh sau zona.",
    readTime: 6,
    content: `
<h2>Tổng quan về Zona thần kinh theo Y học cổ truyền</h2>
<p>Zona thần kinh (xà xoa sang) trong Y học cổ truyền (YHCT) thuộc chứng do can đởm thấp nhiệt hoặc hỏa độc nung nấu kết hợp khí huyết ứ trệ tại kinh lạc, gây nổi mụn nước thành chùm dọc theo đường đi của thần kinh kèm đau rát dữ dội. Châm cứu kết hợp các phương huyệt phù hợp giúp thanh nhiệt giải độc, hành khí hoạt huyết, giảm đau nhanh và hạn chế di chứng đau thần kinh sau zona.</p>
<h2>Các huyệt vị chính trong điều trị</h2>
<ul>
<li><strong>Giáp tích huyệt (đoạn tương ứng với vùng tổn thương):</strong> Nằm cách đường giữa cột sống khoảng 0,5 thốn, tại đoạn cột sống tương ứng với khoanh da bị zona. Có tác dụng điều hòa thần kinh tại chỗ, giảm đau dọc theo dây thần kinh liên sườn.</li>
<li><strong>Hợp cốc:</strong> Nằm ở giữa xương bàn tay 1 và 2, mu bàn tay. Có tác dụng thanh nhiệt giải độc, giảm đau toàn thân, thường dùng phối hợp trong các bệnh lý viêm nhiễm da.</li>
<li><strong>Khúc trì:</strong> Nằm ở đầu ngoài nếp gấp khuỷu tay khi gấp cẳng tay vào cánh tay. Có tác dụng thanh nhiệt, lương huyết, giải độc, hỗ trợ giảm viêm tại vùng tổn thương.</li>
<li><strong>Huyết hải:</strong> Nằm ở mặt trong đùi, trên bờ trong xương bánh chè khoảng 2 thốn. Có tác dụng hoạt huyết, lương huyết, hỗ trợ làm lành tổn thương da nhanh hơn.</li>
<li><strong>Tam âm giao:</strong> Nằm trên mắt cá chân trong khoảng 3 thốn, sát bờ sau xương chày. Có tác dụng điều hòa can thận, dưỡng âm, hỗ trợ giảm đau và tăng sức đề kháng.</li>
<li><strong>Dương lăng tuyền:</strong> Nằm ở chỗ lõm phía trước dưới đầu nhỏ xương mác. Có tác dụng thanh can đởm hỏa, giảm đau vùng sườn, mạng sườn — đặc biệt hiệu quả với zona vùng liên sườn.</li>
<li><strong>A thị huyệt (huyệt cục bộ):</strong> Là các điểm đau nhất tại vùng tổn thương zona, châm tại chỗ giúp giảm đau trực tiếp và thúc đẩy lưu thông khí huyết tại vùng da bệnh.</li>
</ul>
<h2>Nguyên tắc phối huyệt theo từng giai đoạn</h2>
<p>Giai đoạn cấp (mụn nước, đau rát nhiều): ưu tiên thanh nhiệt giải độc với Hợp cốc, Khúc trì, Dương lăng tuyền, kết hợp A thị huyệt tả pháp. Giai đoạn sau khi mụn nước đã khô, còn đau thần kinh: chuyển sang dưỡng âm, hoạt huyết với Tam âm giao, Huyết hải, Giáp tích huyệt, kết hợp cứu ngải ấm để hành khí hoạt huyết, giảm đau dây thần kinh kéo dài.</p>
<h2>Lưu ý khi điều trị</h2>
<p>Cần điều trị càng sớm càng tốt ngay khi phát hiện zona để giảm thiểu nguy cơ đau thần kinh sau zona — một di chứng khó điều trị nếu để muộn. Người bệnh cần giữ vệ sinh vùng da tổn thương, tránh gãi hoặc làm vỡ mụn nước, kết hợp nghỉ ngơi và ăn uống thanh đạm trong thời gian điều trị.</p>
<div class="art-cta-box"><p>Để được châm cứu điều trị zona thần kinh đúng huyệt vị, giảm đau nhanh và hạn chế di chứng, quý khách vui lòng liên hệ Phòng Khám YHCT Tâm Đức - BS. Nguyễn Đức Tâm, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày, địa chỉ tại Hà Đông, Hà Nội.</p></div>
  `
  },
  {
    id: 39,
    slug: "cham-cuu-tre-hoa-da-mat-theo-yhct",
    date: "2026-06-19",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Châm cứu trẻ hóa da mặt (Facial Acupuncture) theo Y học cổ truyền",
    excerpt: "Châm cứu trẻ hóa da mặt là phương pháp làm đẹp tự nhiên, tác động vào kinh lạc vùng mặt để cải thiện sắc diện, làm chậm lão hóa thông qua điều hòa khí huyết và tạng phủ bên trong.",
    readTime: 6,
    content: `
<h2>Cơ sở lý luận của châm cứu trẻ hóa da mặt</h2>
<p>Theo Y học cổ truyền (YHCT), dung nhan và làn da phản ánh trực tiếp tình trạng khí huyết, tạng phủ bên trong. Da mặt sạm, kém sắc, chảy xệ, nhiều nếp nhăn thường liên quan đến tỳ khí hư (khí huyết không đủ nuôi dưỡng da), thận âm hư (thận chủ tinh, tinh suy thì da khô sạm, lão hóa nhanh), can huyết hư (can chủ huyết, huyết không đủ thì da nhợt nhạt thiếu sức sống), và phế khí hư (phế chủ bì mao, phế hư thì da kém đàn hồi, dễ lão hóa). Châm cứu trẻ hóa da mặt (facial acupuncture) không chỉ tác động tại chỗ mà còn điều hòa các tạng phủ này để cải thiện sắc diện từ gốc.</p>
<h2>Cơ chế tác động của châm cứu lên da mặt</h2>
<p>Khi châm các huyệt vị vùng mặt và toàn thân, kim châm kích thích tuần hoàn khí huyết tại chỗ, tăng cường nuôi dưỡng tế bào da, kích thích sản sinh collagen tự nhiên, đồng thời điều hòa chức năng tạng phủ giúp cải thiện sắc diện từ bên trong. Đây là phương pháp làm đẹp không xâm lấn sâu, an toàn và bền vững hơn so với các can thiệp thẩm mỹ hóa học.</p>
<h2>Phương pháp châm cứu kết hợp ngoại trị</h2>
<ul>
<li>Châm các huyệt vùng mặt: Toàn trúc, Tứ bạch, Nghênh hương, Địa thương, Giáp xa, Hạ quan giúp tăng tuần hoàn máu tại chỗ, làm da hồng hào, giảm nếp nhăn.</li>
<li>Châm các huyệt toàn thân hỗ trợ: Túc tam lý, Tam âm giao, Thái khê, Huyết hải để bổ khí huyết, dưỡng thận âm, nuôi dưỡng da từ bên trong.</li>
<li>Kết hợp xoa bóp bấm huyệt mặt hàng ngày tại nhà với các động tác nhẹ nhàng theo chiều kinh lạc để duy trì hiệu quả giữa các liệu trình.</li>
<li>Sử dụng thêm cứu ngải ấm nhẹ vùng huyệt Quan nguyên, Khí hải để bổ nguyên khí, hỗ trợ làn da từ gốc.</li>
</ul>
<h2>Hỗ trợ từ bên trong bằng dưỡng sinh và thảo dược</h2>
<ul>
<li>Bổ huyết dưỡng nhan bằng các vị thuốc như Đương quy, Hà thủ ô, Kỷ tử, Đại táo dùng dưới dạng trà hoặc bài thuốc sắc theo chỉ định thầy thuốc.</li>
<li>Ngủ đủ giấc, đi ngủ trước 23 giờ để dưỡng can huyết, vì khoảng thời gian này can đởm hoạt động mạnh, ảnh hưởng trực tiếp đến sắc diện.</li>
<li>Uống đủ nước, ăn nhiều rau củ quả tươi, hạn chế đồ cay nóng, nhiều dầu mỡ gây thấp nhiệt nổi mụn, sạm da.</li>
<li>Giữ tinh thần thư thái, hạn chế căng thẳng vì can khí uất kết lâu ngày khiến da xám sạm, kém tươi.</li>
</ul>
<h2>Lưu ý khi thực hiện</h2>
<p>Châm cứu trẻ hóa da mặt cần được thực hiện bởi thầy thuốc có chuyên môn, biện chứng đúng thể trạng từng người để phối huyệt phù hợp. Hiệu quả thường rõ rệt sau một liệu trình từ 8-10 lần châm, kết hợp duy trì đều đặn để giữ kết quả lâu dài. Phương pháp này phù hợp với người muốn làm đẹp tự nhiên, an toàn, không xâm lấn mạnh.</p>
<div class="art-cta-box"><p>Để được tư vấn và thực hiện châm cứu trẻ hóa da mặt phù hợp với thể trạng, quý khách vui lòng liên hệ Phòng Khám YHCT Tâm Đức - BS. Nguyễn Đức Tâm, hotline 0973 710 237, làm việc 18:00–22:00 hàng ngày, địa chỉ tại Hà Đông, Hà Nội.</p></div>
  `
  },
  {
    id: 33,
    slug: "hoi-chung-ruot-kich-thich-theo-yhct",
    date: "2026-06-19",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Hội chứng ruột kích thích theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Hội chứng ruột kích thích gây đau bụng, đầy hơi, rối loạn đại tiện kéo dài. YHCT phân thể theo can tỳ, thấp nhiệt, dương hư để điều trị tận gốc bằng châm cứu và thuốc.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Hội chứng ruột kích thích (HCRKT) trong Y học cổ truyền thuộc phạm trù <strong>tiết tả</strong>, <strong>phúc thống</strong> và <strong>tiện bí</strong> — biểu hiện bằng đau bụng tái diễn kèm thay đổi tính chất và số lần đại tiện (lỏng, táo hoặc xen kẽ cả hai) mà không có tổn thương thực thể rõ ràng trên nội soi. YHCT quy nguyên nhân chính về sự mất điều hòa giữa <strong>Can</strong> và <strong>Tỳ Vị</strong>: Can chủ sơ tiết, khi tình chí uất ức, căng thẳng kéo dài sẽ làm Can khí uất kết, mất khả năng sơ tiết, từ đó "Can khắc Tỳ" — Tỳ Vị mất kiện vận, thủy thấp không hóa, sinh ra các triệu chứng tiêu hóa.</p>
<p>Bên cạnh đó, Tỳ Vị bản thân hư nhược (do ăn uống không điều độ, lo nghĩ quá mức) hoặc Thận dương suy yếu không ôn ấm được Tỳ cũng là nguyên nhân quan trọng gây tiết tả mạn tính. Nguyên tắc điều trị chung: <em>"Điều hòa Can Tỳ, kiện Tỳ hòa Vị, ôn bổ khi cần"</em> — kết hợp giải tỏa stress tâm lý với phục hồi chức năng tiêu hóa, khác với Tây y chủ yếu điều trị triệu chứng.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể Can khí uất kết, Tỳ Vị bất hòa:</strong> Đau bụng quặn liên quan rõ đến cảm xúc, căng thẳng, stress; đầy hơi, sôi bụng, đại tiện không đều lúc lỏng lúc táo, hay kèm ợ hơi, ngực sườn đầy tức. Lưỡi hồng rêu mỏng, mạch huyền. Hướng điều trị: sơ can lý khí, hòa Vị kiện Tỳ.</li>
  <li><strong>Thể Tỳ Vị hư nhược:</strong> Đại tiện lỏng kéo dài, phân nát không thành khuôn, ăn kém, ăn đồ dầu mỡ hoặc lạnh dễ đau bụng đi ngoài ngay, người mệt mỏi, sắc mặt vàng nhợt. Lưỡi nhạt bệu, rêu trắng mỏng, mạch nhược. Hướng điều trị: kiện Tỳ ích khí, táo thấp chỉ tả.</li>
  <li><strong>Thể thấp nhiệt uẩn kết đại trường:</strong> Đại tiện lỏng nhớt mùi hôi, hậu môn nóng rát, bụng đầy đau âm ỉ, có thể kèm mót rặn, miệng khô đắng. Lưỡi đỏ rêu vàng nhớt, mạch hoạt sác. Hướng điều trị: thanh nhiệt hóa thấp, điều hòa khí trệ.</li>
  <li><strong>Thể Tỳ Thận dương hư:</strong> Đại tiện lỏng vào sáng sớm (ngũ canh tả), đau bụng âm ỉ giảm khi chườm ấm, sợ lạnh, chân tay lạnh, lưng gối mỏi yếu. Lưỡi nhạt bệu có vết răng, mạch trầm trì. Hướng điều trị: ôn bổ Tỳ Thận, cố sáp chỉ tả.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị</h2>
<p>Phác đồ huyệt nền tảng điều trị HCRKT, gia giảm tùy thể bệnh:</p>
<ul>
  <li><strong>Túc tam lý (ST36):</strong> Dưới lồi củ xương chày 3 thốn — kiện Tỳ ích khí, hòa Vị, là huyệt chủ lực trong mọi thể bệnh tiêu hóa.</li>
  <li><strong>Thiên khu (ST25):</strong> Cạnh rốn 2 thốn — huyệt mộ của Đại trường, điều hòa khí cơ ruột, giảm đau bụng, điều chỉnh đại tiện bất thường rất hiệu quả.</li>
  <li><strong>Trung quản (CV12):</strong> Trên rốn 4 thốn — hòa Vị giáng nghịch, kiện Tỳ tiêu trệ, dùng cho đầy hơi, khó tiêu.</li>
  <li><strong>Thái xung (LR3):</strong> Mu bàn chân, giữa xương bàn 1 và 2 — bình Can giải uất, dùng riêng cho thể Can khí uất kết liên quan stress.</li>
  <li><strong>Tỳ du (BL20) và Đại trường du (BL25):</strong> Cạnh cột sống lưng ngang T11 và L4 — kiện Tỳ, điều khí đại trường, phối hợp tăng hiệu quả điều hòa tiêu hóa.</li>
  <li><strong>Quan nguyên (CV4) và Khí hải (CV6):</strong> Dưới rốn 3 thốn và 1,5 thốn — ôn bổ nguyên khí, dùng cứu ngải cho thể Tỳ Thận dương hư, đại tiện lỏng sáng sớm.</li>
</ul>
<p>Thể Can khí uất kết nên phối hợp châm Thái xung (LR3) và Kỳ môn (LR14); thể thấp nhiệt thêm Âm lăng tuyền (SP9) để thanh thấp; thể dương hư bắt buộc cứu ngải Quan nguyên (CV4) và Mệnh môn (GV4) 15–20 phút mỗi lần.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Xoa bụng theo chiều kim đồng hồ:</strong> Dùng lòng bàn tay xoa quanh rốn 50–100 vòng mỗi sáng trước khi ăn — thúc đẩy nhu động ruột, giảm đầy hơi và táo bón nhẹ.</li>
  <li><strong>Ấn huyệt Túc tam lý (ST36) và Thiên khu (ST25):</strong> Ấn giữ mỗi huyệt 1–2 phút, 2 lần mỗi ngày — hỗ trợ điều hòa tiêu hóa, giảm đau bụng tái diễn.</li>
  <li><strong>Chườm ấm vùng bụng:</strong> Dùng túi muối rang hoặc ngải cứu nướng chườm bụng dưới 15 phút trước khi ngủ — đặc biệt hữu ích với thể dương hư, đại tiện lỏng sáng sớm. Không chườm khi có thấp nhiệt, hậu môn nóng rát.</li>
  <li><strong>Điều chỉnh tâm lý:</strong> Tập thở sâu, đi bộ nhẹ 20–30 phút mỗi ngày, hạn chế lo nghĩ căng thẳng — yếu tố cốt lõi vì Can khí uất kết là nguyên nhân phổ biến nhất của HCRKT.</li>
  <li><strong>Ăn uống điều độ:</strong> Ăn đúng giờ, tránh đồ sống lạnh, cay nóng, nhiều dầu mỡ; ưu tiên cháo, súp ấm dễ tiêu, nhai kỹ nuốt chậm.</li>
</ul>

<div class="art-cta-box">
  <p>Hội chứng ruột kích thích là bệnh mạn tính dễ tái phát do liên quan mật thiết đến tâm lý và chức năng tạng phủ, cần điều trị kiên trì và đúng thể bệnh. Nếu bạn thường xuyên đau bụng, đầy hơi, rối loạn đại tiện kéo dài, hãy đến thăm khám tại <strong>Phòng Khám YHCT Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ tứ chẩn xác định thể bệnh và xây dựng phác đồ châm cứu, thuốc YHCT phù hợp riêng cho bạn. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 32,
    slug: "bien-chung-yhct-trong-lam-dep",
    date: "2026-06-18",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Biện chứng YHCT trong làm đẹp: Phân biệt hàn – nhiệt – hư – thực để chăm sóc da đúng cách",
    excerpt: "Cùng một vấn đề da nhưng thể hàn hay nhiệt, hư hay thực lại cần cách xử lý hoàn toàn khác nhau — đây là nền tảng để Y học cổ truyền cá nhân hóa việc chăm sóc làn da.",
    readTime: 6,
    content: `
<h2>Vì sao phải biện chứng trước khi chăm sóc da?</h2>
<p>Trung Y Mỹ Dung không có một công thức làm đẹp chung cho tất cả mọi người. Cùng triệu chứng mụn trứng cá, da khô hay nám, nhưng nguyên nhân và cơ chế bệnh sinh có thể hoàn toàn khác nhau giữa từng người — do đó cách điều trị và chăm sóc cũng phải khác nhau. Bước đầu tiên luôn là <strong>biện chứng</strong>: phân tích toàn diện các triệu chứng, thể trạng để xác định "chứng" thuộc loại nào, rồi mới "luận trị" — chọn phương pháp phù hợp.</p>

<h2>Bát cương biện chứng ứng dụng trong mỹ dung</h2>
<p>Tám tiêu chí cơ bản (bát cương) là khung phân tích nền tảng nhất trong YHCT, áp dụng trực tiếp vào các vấn đề dung nhan:</p>
<ul>
  <li><strong>Biểu – Lý:</strong> Biểu chứng — bệnh ở tầng da bề mặt, phát nhanh, bệnh trình ngắn (ví dụ: dị ứng da cấp, nổi mề đay đột ngột). Lý chứng — bệnh sâu từ tạng phủ bên trong, thường mạn tính và phức tạp hơn (ví dụ: nám do rối loạn nội tiết, mụn nang do tỳ vị nhiệt mạn).</li>
  <li><strong>Hàn – Nhiệt:</strong> Da khô trắng lạnh, mặt xanh nhợt, sợ lạnh — thiên về hàn chứng, không nên dùng sản phẩm lạnh mát. Da đỏ bốc nhiệt, mụn mủ, miệng khô táo bón — thiên về nhiệt chứng, cần thanh nhiệt giải độc, tránh thức ăn cay nóng.</li>
  <li><strong>Hư – Thực:</strong> Hư chứng (khí huyết âm dương thiếu hụt) — da nhợt, nhão, kém sắc sống, mệt mỏi; cần bổ. Thực chứng (tà khí vượng — thấp nhiệt, đờm ứ, khí trệ) — da dầu, mụn viêm đỏ, lỗ chân lông to; cần tả/thông.</li>
  <li><strong>Âm – Dương:</strong> Tổng hợp của các tiêu chí trên — giúp phân loại tổng quát và định hướng phương pháp: âm chứng cần ôn bổ dương khí, dương chứng cần thanh nhiệt tư âm.</li>
</ul>

<h2>Biện chứng khí huyết tân dịch trong mỹ dung</h2>
<ul>
  <li><strong>Khí hư:</strong> Mặt vàng nhợt, da lỏng lẻo kém đàn tính, mệt mỏi ít hơi. Cần bổ khí kiện tỳ — ưu tiên Bổ trung ích khí thang, bấm huyệt Túc tam lý.</li>
  <li><strong>Khí trệ:</strong> Da xỉn, nám lan tỏa, hay thở dài, tức sườn. Cần sơ can lý khí — dùng Sài hồ sơ can tán, bấm huyệt Thái xung.</li>
  <li><strong>Huyết hư:</strong> Mặt trắng xanh, môi nhợt, tóc khô dễ rụng, móng mỏng. Cần dưỡng huyết — Tứ vật thang, bổ sung thực phẩm bổ huyết.</li>
  <li><strong>Huyết nhiệt:</strong> Mụn viêm đỏ, nám sậm màu đột ngột, da bốc nóng. Cần lương huyết giải độc — tránh đồ cay nóng, rượu bia.</li>
  <li><strong>Huyết ứ:</strong> Nám cố định, đau như châm chích, da sạm tím. Cần hoạt huyết hóa ứ — Đào nhân, Hồng hoa phối hợp.</li>
  <li><strong>Tân dịch bất túc:</strong> Da khô nứt, môi khô, mắt khô, tiểu ít. Cần dưỡng âm sinh tân — uống đủ nước, ăn thực phẩm nhuận táo.</li>
</ul>

<h2>Ứng dụng thực tế: Chăm sóc da theo biện chứng</h2>
<ul>
  <li>Da dầu, mụn viêm, lỗ chân lông to (thấp nhiệt): hạn chế thức ăn ngọt béo, dùng mặt nạ đất sét, uống trà bồ công anh.</li>
  <li>Da khô nhăn, kém sắc (âm hư huyết hư): tăng thực phẩm dưỡng âm (mè đen, ngân nhĩ, kỷ tử), dùng kem dưỡng ẩm giàu dinh dưỡng, ngủ trước 23h.</li>
  <li>Nám do stress (can uất khí trệ): ưu tiên giải toả căng thẳng, tập thở, đi bộ, uống trà hoa hồng.</li>
  <li>Mụn lạnh (dương hư): tránh ăn đồ lạnh, sống, chườm ấm, tập dưỡng sinh buổi sáng.</li>
</ul>

<div class="art-cta-box">
  <p>Biện chứng đúng là chìa khoá để chăm sóc da hiệu quả và lâu dài. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tứ chẩn toàn diện để xác định thể chứng và lập phác đồ làm đẹp cá nhân hóa. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 31,
    slug: "phuong-huyet-liet-mat-bell-palsy",
    date: "2026-06-18",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị liệt mặt (Bell's palsy) theo Y học cổ truyền",
    excerpt: "Châm cứu huyệt vùng mặt kết hợp huyệt toàn thân là phương pháp hiệu quả cao trong điều trị liệt mặt ngoại biên — cần can thiệp sớm để phục hồi tốt nhất.",
    readTime: 5,
    content: `
<h2>Liệt mặt theo Y học cổ truyền</h2>
<p>Liệt mặt ngoại biên (Bell's palsy) trong YHCT thuộc phạm trù <strong>khẩu nhãn oa tà</strong> — miệng mắt méo xệch do tà khí xâm phạm. Nguyên nhân chủ yếu là <em>phong hàn hoặc phong nhiệt</em> thừa cơ chính khí hư xâm nhập kinh lạc vùng mặt, gây khí huyết ứ trệ tại kinh túc dương minh Vị và kinh thủ dương minh Đại trường — hai kinh lạc chính phân bố ở mặt.</p>
<p>Điều trị sớm (trong 7–14 ngày đầu) bằng châm cứu giúp rút ngắn thời gian hồi phục đáng kể. YHCT kết hợp châm cứu tại chỗ vùng mặt, điện châm và cứu ngải để thúc đẩy khí huyết lưu thông, phục hồi chức năng thần kinh ngoại biên.</p>

<h2>Phác đồ huyệt cốt lõi</h2>
<ul>
  <li><strong>Địa thương (ST4):</strong> Cạnh khoé miệng 1cm. Huyệt tại chỗ quan trọng nhất — thông khí huyết vùng miệng, hỗ trợ phục hồi cơ vòng miệng bị liệt.</li>
  <li><strong>Giáp xa (ST6):</strong> Cơ cắn (chỗ phình lên khi nghiến răng). Hành khí thông lạc vùng hàm và má, đặc biệt hiệu quả khi có méo miệng rõ.</li>
  <li><strong>Nghinh hương (LI20):</strong> Cạnh cánh mũi. Thông khí huyết vùng má và cánh mũi, hỗ trợ phục hồi cơ mũi.</li>
  <li><strong>Toản trúc (BL2):</strong> Đầu trong lông mày. Giúp phục hồi chức năng nhắm mắt — cơ vòng mắt thường bị ảnh hưởng nặng nhất trong Bell's palsy.</li>
  <li><strong>Dương bạch (GB14):</strong> Trên lông mày 1 thốn, thẳng đồng tử. Thông kinh hoạt lạc vùng trán và mắt.</li>
  <li><strong>Hợp cốc (LI4):</strong> Hổ khẩu bàn tay, châm bên đối diện với mặt bị liệt. Huyệt xa rất quan trọng — "mặt miệng Hợp cốc thu" — hành khí thông lạc toàn bộ vùng mặt và đầu.</li>
  <li><strong>Phong trì (GB20):</strong> Sau gáy. Khu phong giải biểu — đặc biệt quan trọng trong giai đoạn cấp (7–14 ngày đầu) để loại trừ phong tà.</li>
</ul>
<p>Giai đoạn cấp: châm nhẹ hoặc tả pháp, không kích thích mạnh. Sau 2 tuần chuyển điện châm tần số thấp để kích thích phục hồi cơ. Cứu ngải Hợp cốc và Phong trì nếu thể phong hàn. Liệu trình 20–30 buổi, mỗi ngày hoặc cách ngày.</p>

<div class="art-cta-box">
  <p>Liệt mặt cần điều trị sớm và kiên trì để phục hồi hoàn toàn. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm áp dụng điện châm kết hợp xoa bóp vùng mặt cho các trường hợp liệt mặt ngoại biên. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 30,
    slug: "phong-thoai-hoa-cot-song-yhct",
    date: "2026-06-18",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Phòng ngừa thoái hóa cột sống theo Y học cổ truyền",
    excerpt: "Thoái hóa cột sống liên quan đến can thận suy và khí huyết ứ trệ — YHCT phòng bệnh bằng vận động dưỡng sinh, ăn uống bổ thận và tránh các thói quen hao tổn gân cốt.",
    readTime: 5,
    content: `
<h2>Nguyên nhân theo Y học cổ truyền</h2>
<p>Thoái hóa cột sống (cổ, lưng, thắt lưng) trong YHCT chủ yếu do <strong>can thận dần suy</strong> theo tuổi tác — thận chủ cốt, can chủ gân, hai tạng này suy yếu thì xương khớp mất dưỡng, gân cơ kém đàn hồi, tạo điều kiện cho <em>phong hàn thấp</em> xâm nhập và khí huyết ứ trệ tại cột sống.</p>

<h2>Các biện pháp phòng ngừa hiệu quả</h2>
<ul>
  <li><strong>Vận động dưỡng sinh đúng cách:</strong> Tập Bát đoạn cẩm, dưỡng sinh thái cực quyền đều đặn mỗi sáng giúp lưu thông khí huyết, nuôi dưỡng gân cốt. Chỉ cần 15–20 phút/ngày, tốt hơn nhiều so với không tập hoặc tập gắng sức.</li>
  <li><strong>Không ngồi liên tục quá 45 phút:</strong> Đứng dậy đi bộ nhẹ và xoay cổ nhẹ nhàng giữa các giờ làm việc — phòng khí huyết ứ trệ vùng cột sống do ngồi một tư thế kéo dài.</li>
  <li><strong>Giữ ấm vùng cổ và lưng:</strong> Phong hàn thấp là tà khí dễ xâm nhập khi cơ thể tiếp xúc lạnh đột ngột — đặc biệt tránh để cổ và lưng hứng gió điều hoà trực tiếp.</li>
  <li><strong>Thực phẩm bổ thận mạnh gân cốt:</strong> Mè đen, đậu đen, óc chó, thịt bò gân — bổ thận ích tinh, mạnh gân xương. Cháo đậu đen hạt sen ăn thường xuyên có lợi lâu dài.</li>
  <li><strong>Tránh phòng lao thái quá:</strong> Sinh hoạt vợ chồng không điều độ tổn thương thận tinh — gân cốt mất nguồn nuôi dưỡng, dễ thoái hóa sớm.</li>
</ul>

<h2>Huyệt vị bổ can thận hỗ trợ phòng bệnh</h2>
<ul>
  <li><strong>Thận du (BL23) + Mệnh môn (GV4):</strong> Vùng lưng ngang L2-L3. Cứu ngải 15 phút mỗi tối giúp bổ thận dương, ôn ấm và nuôi dưỡng xương cột sống.</li>
  <li><strong>Huyền chung (GB39):</strong> Trên mắt cá ngoài 3 thốn. Hội huyệt của tủy — bấm huyệt hỗ trợ bổ thận sinh tủy, mạnh xương khớp.</li>
  <li><strong>Túc tam lý (ST36):</strong> Bổ khí kiện tỳ, hỗ trợ hấp thu dinh dưỡng nuôi dưỡng cân cốt toàn thân.</li>
</ul>

<div class="art-cta-box">
  <p>Phòng thoái hóa cột sống hiệu quả nhất là từ khi chưa có triệu chứng rõ ràng. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn lộ trình phòng bệnh và điều trị sớm các vấn đề cột sống bằng châm cứu kết hợp thuốc YHCT. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 29,
    slug: "than-khi-hoan-bo-than-duong",
    date: "2026-06-18",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Thận khí hoàn — Bài thuốc bổ thận dương kinh điển của Y học cổ truyền",
    excerpt: "Thận khí hoàn (Kim quỹ thận khí hoàn) là bài cổ phương hàng đầu bổ thận dương, kiện lưng gối, chuyên trị các chứng thận dương hư do danh y Trương Trọng Cảnh sáng lập.",
    readTime: 5,
    content: `
<h2>Nguồn gốc và công dụng</h2>
<p><strong>Thận khí hoàn</strong> (còn gọi Kim quỹ thận khí hoàn) xuất phát từ <em>Kim Quỹ Yếu Lược</em> của danh y Trương Trọng Cảnh (đời Đông Hán). Đây là bài thuốc bổ thận dương cổ điển nền tảng nhất trong YHCT, chuyên dùng cho người <strong>thận dương hư</strong> — thận khí không đủ ấm dẫn đến tình trạng sợ lạnh, tiểu nhiều về đêm, lưng gối lạnh mỏi, phù nhẹ chi dưới.</p>

<h2>Thành phần bài thuốc</h2>
<ul>
  <li><strong>Thục địa (8 phần):</strong> Vị thuốc chủ — bổ thận âm, dưỡng tinh huyết — nền tảng để bổ thận dương (âm trung cầu dương).</li>
  <li><strong>Sơn thù du (4 phần):</strong> Bổ thận ích tinh, liễm âm chỉ hãn.</li>
  <li><strong>Hoài sơn (4 phần):</strong> Kiện tỳ bổ thận, cố tinh.</li>
  <li><strong>Trạch tả + Phục linh + Đơn bì (mỗi vị 3 phần):</strong> Tam tả — thấm thấp lợi niệu, thanh hư nhiệt, tránh bổ mà bị trệ.</li>
  <li><strong>Phụ tử và Quế chi (mỗi vị 1 phần):</strong> Vị ôn dương cốt lõi — ôn bổ thận dương, dẫn hỏa quy nguyên. Liều nhỏ theo nguyên tắc "thiếu hỏa sinh khí".</li>
</ul>
<p>Cấu trúc bài thuốc tinh tế — 6 vị Lục vị địa hoàng hoàn (bổ thận âm) làm nền, thêm Phụ tử và Quế chi ôn dương với liều nhỏ, thể hiện triết lý <em>"âm trung cầu dương, dương được âm trợ thì sinh hóa vô cùng"</em>.</p>

<h2>Chỉ định lâm sàng</h2>
<ul>
  <li>Đau lưng mỏi gối kéo dài, nặng hơn vào mùa đông và ban đêm.</li>
  <li>Tiểu đêm nhiều (trên 2–3 lần), tiểu trong dài, hoặc tiểu không kiểm soát ở người cao tuổi.</li>
  <li>Sợ lạnh, tay chân lạnh, tinh thần uể oải thiếu sức (thận dương không ôn ấm tứ chi).</li>
  <li>Phù nhẹ chi dưới buổi chiều tối (thận dương hư không khí hóa được thủy thấp).</li>
  <li>Rối loạn tình dục do thận dương hư ở nam giới.</li>
</ul>

<h2>Lưu ý</h2>
<p>Phụ tử (Aconite) trong bài có tính độc nếu dùng sai liều — cần thầy thuốc YHCT kê đơn đúng liều, đúng cách bào chế. Không dùng khi có âm hư hỏa vượng, phụ nữ mang thai. Hiện có dạng thành phẩm viên hoàn tiêu chuẩn hóa và an toàn hơn.</p>

<div class="art-cta-box">
  <p>Thận khí hoàn là bài thuốc bổ thận dương quan trọng nhưng cần dùng đúng thể bệnh và có sự giám sát của thầy thuốc. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tứ chẩn kỹ trước khi kê đơn, đảm bảo an toàn hiệu quả. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 28,
    slug: "tieu-duong-type-2-tieu-khat-yhct",
    date: "2026-06-18",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Đái tháo đường type 2 (tiêu khát) theo Y học cổ truyền: Phân thể và điều trị",
    excerpt: "YHCT gọi đái tháo đường là 'tiêu khát' — bệnh do âm hư táo nhiệt làm hao tổn tân dịch. Điều trị kết hợp thuốc YHCT, châm cứu và điều chỉnh lối sống giúp kiểm soát đường huyết hiệu quả.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Đái tháo đường type 2 trong YHCT thuộc phạm trù <strong>tiêu khát</strong> — "tiêu" là tiêu hao (ăn nhiều, gầy, tiểu nhiều), "khát" là khát nước không dứt. Bệnh được YHCT ghi chép từ hàng nghìn năm trước trong Nội Kinh. Cơ chế chủ yếu là <em>âm hư táo nhiệt</em> — tân dịch bị hao tổn do nhiệt từ phế, vị, thận gây ra, biểu hiện qua "tam nhiều một ít": ăn nhiều, uống nhiều, tiểu nhiều và gầy ít.</p>

<h2>Phân thể theo YHCT</h2>
<ul>
  <li><strong>Thể thượng tiêu (phế nhiệt tổn thương tân):</strong> Khát nhiều uống nhiều là chính, miệng khô họng khô, tiểu nhiều, lưỡi đỏ ít tân, mạch sác. Hướng điều trị: thanh phế nhuận táo, sinh tân chỉ khát.</li>
  <li><strong>Thể trung tiêu (vị nhiệt táo thịnh):</strong> Ăn nhiều mau đói, thân thể gầy, đại tiện táo, lưỡi vàng khô, mạch hoạt sác. Hướng điều trị: thanh vị tả hỏa, dưỡng âm nhuận táo.</li>
  <li><strong>Thể hạ tiêu (thận âm hư):</strong> Tiểu nhiều như nước vo gạo, lượng nhiều, kèm đau lưng mỏi gối, hoa mắt ù tai, lưỡi đỏ ít rêu, mạch tế sác. Hướng điều trị: tư âm bổ thận, nhuận táo.</li>
  <li><strong>Thể khí âm lưỡng hư (giai đoạn muộn):</strong> Mệt mỏi nhiều, khí ngắn, kết hợp các triệu chứng âm hư. Hướng điều trị: ích khí dưỡng âm.</li>
</ul>

<h2>Huyệt vị và phương pháp YHCT</h2>
<ul>
  <li><strong>Tỳ du (BL20) + Vị du (BL21):</strong> Du huyệt tương ứng — điều hòa chức năng tỳ vị, hỗ trợ vận hóa đường.</li>
  <li><strong>Thận du (BL23):</strong> Bổ thận âm — đặc biệt quan trọng ở thể hạ tiêu thận âm hư.</li>
  <li><strong>Tam âm giao (SP6) + Túc tam lý (ST36):</strong> Điều hòa tỳ thận, bổ khí âm, hỗ trợ kiểm soát đường huyết.</li>
  <li><strong>Nhiên cốc (KI2):</strong> Thanh thận nhiệt, dưỡng thận âm — giảm triệu chứng khát và tiểu nhiều.</li>
</ul>

<h2>Chế độ ăn uống và sinh hoạt</h2>
<ul>
  <li><strong>Hạn chế ngũ vị ngọt:</strong> Tỳ ưa ngọt nhưng ngọt thái quá làm thấp nhiệt ứ tỳ, nặng thêm tiêu khát — giảm đường tinh luyện, cơm trắng, trái cây ngọt nhiều.</li>
  <li><strong>Thực phẩm hỗ trợ:</strong> Khổ qua (mướp đắng), khoai lang tím, lá dâu tằm, đậu đen — có tác dụng hỗ trợ hạ đường huyết trong kinh nghiệm dân gian YHCT.</li>
  <li><strong>Vận động điều độ:</strong> Đi bộ 30 phút mỗi ngày sau bữa ăn — giúp tỳ khí vận hóa tốt hơn, cải thiện chuyển hóa đường.</li>
  <li><strong>Kiêng rượu, bia, hút thuốc:</strong> Gây thấp nhiệt và hỏa nhiệt, làm nặng thêm âm hư táo nhiệt.</li>
</ul>

<div class="art-cta-box">
  <p>Tiêu khát (đái tháo đường) cần điều trị phối hợp y học hiện đại và YHCT, không tự ý ngừng thuốc tây y. YHCT hỗ trợ kiểm soát triệu chứng, giảm biến chứng và cải thiện chất lượng cuộc sống. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn phác đồ điều trị hỗ trợ phù hợp. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 27,
    slug: "tu-chan-danh-gia-lan-da-yhct",
    date: "2026-06-17",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Tứ chẩn đánh giá làn da và dung nhan: Cách thầy thuốc YHCT 'đọc' vẻ đẹp sức khỏe",
    excerpt: "Vọng, văn, vấn, thiết — bốn phương pháp chẩn đoán YHCT ứng dụng vào mỹ dung giúp xác định chính xác nguyên nhân gây mụn, nám, rụng tóc và lão hóa sớm.",
    readTime: 6,
    content: `
<h2>Tứ chẩn trong mỹ dung là gì?</h2>
<p>Trước khi đưa ra bất kỳ phương pháp làm đẹp nào, thầy thuốc YHCT luôn tiến hành <strong>tứ chẩn</strong> (vọng – văn – vấn – thiết) để có bức tranh toàn diện về tình trạng sức khoẻ và nguyên nhân gốc rễ của các vấn đề thẩm mỹ. Đây là điểm khác biệt cốt lõi giữa YHCT và các phương pháp làm đẹp thông thường.</p>

<h2>Vọng chẩn — Quan sát da, mắt, tóc, lưỡi</h2>
<p>Vọng chẩn (quan sát bằng mắt) chiếm vị trí đặc biệt quan trọng trong mỹ dung vì hầu hết biểu hiện của bệnh tổn thương dung nhan đều lộ ra bên ngoài. Thầy thuốc quan sát có hệ thống:</p>
<ul>
  <li><strong>Quan sát thần sắc:</strong> Mặt hồng nhuận sáng là khí huyết điều hòa; vàng sạm là tỳ hư thấp trệ; trắng nhợt là huyết hư hoặc hàn; đỏ bốc là nhiệt thịnh hoặc âm hư hỏa vượng; tím xỉn là khí trệ huyết ứ.</li>
  <li><strong>Phân loại da:</strong> Da trung tính (khí huyết điều hòa), da dầu (thấp nhiệt), da khô (âm hư hoặc huyết hư phong táo), da hỗn hợp, da nhạy cảm (vệ khí hư).</li>
  <li><strong>Quan sát mụn và ban:</strong> Mụn viêm đỏ mủ là phế vị nhiệt; mụn lạnh cứng là hàn ngưng đờm trệ; nám nâu quanh mắt má là can khí uất hoặc thấp nhiệt nội uẩn; ban đỏ đối xứng là âm hư hỏa vượng.</li>
  <li><strong>Quan sát tóc:</strong> Tóc bạc sớm kèm đau lưng ù tai là thận hư; bạc sớm ở người trẻ không có triệu chứng khác thường là huyết nhiệt; rụng tóc từng mảng tròn là huyết hư phong táo; tóc dầu nhiều gàu là thấp nhiệt.</li>
  <li><strong>Quan sát lưỡi:</strong> Lưỡi nhạt rêu trắng là hàn hư; đỏ rêu vàng là nhiệt; tím là huyết ứ; đỏ ít rêu là âm hư — lưỡi phản chiếu trạng thái tạng phủ nội tạng một cách trực tiếp và đáng tin cậy.</li>
  <li><strong>Quan sát mắt và môi:</strong> Mắt quầng thâm là thận hư hoặc huyết ứ; môi nhợt là huyết hư; môi tím là huyết ứ; môi đỏ khô là nhiệt thịnh.</li>
</ul>

<h2>Văn chẩn — Nghe và ngửi</h2>
<ul>
  <li>Miệng hôi, mùi chua là vị tích thực thấp nhiệt — thường kèm da dầu, mụn.</li>
  <li>Hôi nách nhiều là thấp nhiệt uẩn trong tấu lý — cần thanh nhiệt trừ thấp.</li>
  <li>Giọng nói nhỏ yếu, biếng nói là khí hư — da thường kém sắc, nhão.</li>
</ul>

<h2>Vấn chẩn — Hỏi khai thác</h2>
<p>Thầy thuốc hỏi về thói quen sinh hoạt, ngủ nghỉ, kinh nguyệt (phụ nữ), chế độ ăn uống, công việc, căng thẳng và lịch sử chăm sóc da. Ở phụ nữ, kinh nguyệt bất điều thường liên quan trực tiếp đến tình trạng da: kinh chậm màu tím có cục kèm mụn trứng cá thường là huyết ứ, khí trệ; kinh sớm màu đỏ sẫm là huyết nhiệt...</p>

<h2>Thiết chẩn — Bắt mạch và sờ</h2>
<p>Bắt mạch cung cấp thông tin quan trọng: mạch tế sác là âm hư; mạch hoạt là thấp đờm; mạch huyền là can khí uất; mạch trầm trì là hàn hư. Sờ da kiểm tra nhiệt độ và độ ẩm: da ấm bóng là nhiệt, da lạnh khô là hàn hư.</p>

<div class="art-cta-box">
  <p>Tứ chẩn đầy đủ giúp xác định đúng nguyên nhân gốc rễ của mọi vấn đề dung nhan — đó là bước không thể thiếu để có phác đồ làm đẹp hiệu quả thực sự. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm thực hiện tứ chẩn toàn diện trước khi tư vấn phác đồ. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 26,
    slug: "phuong-huyet-viem-loet-da-day",
    date: "2026-06-17",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị viêm loét dạ dày theo Y học cổ truyền",
    excerpt: "Phác đồ huyệt cốt lõi giảm đau, giảm acid và hỗ trợ lành niêm mạc dạ dày — kết hợp châm cứu tại chỗ và huyệt toàn thân theo từng thể bệnh.",
    readTime: 5,
    content: `
<h2>Viêm loét dạ dày theo Y học cổ truyền</h2>
<p>Viêm loét dạ dày thuộc phạm trù <strong>vị quản thống</strong> (đau vùng thượng vị) trong YHCT. Nguyên nhân chủ yếu: <em>can khí phạm vị</em> (stress khiến can khí xâm phạm vị), <em>tỳ vị hư hàn</em> (ăn uống không điều độ, sợ lạnh), hoặc <em>vị âm bất túc</em> (viêm mạn tính lâu ngày). Mỗi thể bệnh có phác đồ huyệt khác nhau.</p>

<h2>Phác đồ huyệt cốt lõi</h2>
<ul>
  <li><strong>Trung quản (CV12):</strong> Giữa rốn và mỏm ức. Mộ huyệt của Vị — huyệt chủ lực điều hòa chức năng dạ dày, giảm đau thượng vị, giảm acid. Châm thẳng 1–1,5 thốn hoặc cứu ngải 15 phút với thể hàn.</li>
  <li><strong>Túc tam lý (ST36):</strong> Hạ hợp huyệt của Vị — huyệt quan trọng nhất của kinh Vị, kiện vị hòa trung, giảm đau và hỗ trợ lành niêm mạc.</li>
  <li><strong>Nội quan (PC6):</strong> Trên cổ tay trong 2 thốn. Giải uất an thần, hòa vị giáng nghịch — đặc biệt hiệu quả khi đau dạ dày kèm buồn nôn, ợ chua, căng thẳng.</li>
  <li><strong>Công tôn (SP4):</strong> Hội huyệt của Xung mạch, kết huyệt với Nội quan — phối hợp hai huyệt này (mở Xung mạch) rất hiệu quả với mọi bệnh lý vùng dạ dày và thực quản.</li>
  <li><strong>Vị du (BL21):</strong> Du huyệt của Vị, cạnh cột sống ngang T12. Điều hòa chức năng Vị từ phía sau — thường phối hợp với Trung quản (bối du đẹp huyệt phối).</li>
</ul>

<h2>Gia giảm theo thể bệnh</h2>
<ul>
  <li><strong>Thể can vị bất hòa (đau kèm stress):</strong> Thêm Thái xung (LR3) — sơ can lý khí.</li>
  <li><strong>Thể tỳ vị hư hàn (đau giảm khi ấm):</strong> Cứu ngải Trung quản + Tỳ du (BL20) 15–20 phút.</li>
  <li><strong>Thể vị âm hư (đau âm ỉ, miệng khô):</strong> Thêm Tam âm giao (SP6) + Thái khê (KI3), không cứu ngải.</li>
</ul>

<div class="art-cta-box">
  <p>Châm cứu kết hợp thuốc YHCT và điều chỉnh ăn uống giúp kiểm soát viêm loét dạ dày hiệu quả và giảm tái phát. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm lập phác đồ điều trị cá nhân hóa theo từng thể bệnh. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 25,
    slug: "phong-tai-bien-mach-mau-nao-yhct",
    date: "2026-06-17",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Phòng ngừa tai biến mạch máu não theo Y học cổ truyền",
    excerpt: "YHCT gọi tai biến là 'trúng phong' — phòng ngừa bằng kiểm soát can dương vượng, dưỡng sinh tinh thần và phát hiện sớm các dấu hiệu cảnh báo trước tai biến.",
    readTime: 5,
    content: `
<h2>Tai biến mạch máu não theo Y học cổ truyền</h2>
<p>YHCT gọi tai biến là <strong>trúng phong</strong> — phong (nội phong hoặc ngoại phong) đột ngột xâm phạm não phủ, gây liệt một bên người, nói khó, méo miệng, rối loạn ý thức. Nguyên nhân chủ yếu là <em>can dương vượng</em> lâu ngày làm can hỏa khuếch tán thành phong, kết hợp đờm thấp và khí huyết ứ trệ.</p>

<h2>Dấu hiệu cảnh báo sớm cần lưu ý</h2>
<p>YHCT nhận biết các biểu hiện sớm trước tai biến ("tiểu trúng phong"): đột ngột tê bì một bên mặt/tay/chân thoáng qua, nói ngắc thoáng qua, hoa mắt chóng mặt đứng không vững, đau đầu dữ dội bất thường. Đây là tín hiệu cần đi khám cấp cứu ngay.</p>

<h2>Phòng ngừa theo YHCT</h2>
<ul>
  <li><strong>Kiểm soát can dương vượng:</strong> Tránh tức giận, stress kéo dài — giận hại can, can hỏa bốc thành phong. Uống trà hoa cúc + câu đằng (Uncaria) giúp bình can tiềm dương trong thể can dương vượng.</li>
  <li><strong>Kiểm soát huyết áp:</strong> Can dương vượng thường biểu hiện bằng huyết áp cao — đây là yếu tố nguy cơ số 1. Bấm huyệt Thái xung (LR3) và Khúc trì (LI11) hàng ngày hỗ trợ hạ áp nhẹ theo YHCT.</li>
  <li><strong>Hóa đờm thấp, trừ nguy cơ ứ huyết:</strong> Béo phì, ăn nhiều chất béo sinh đờm thấp làm trở ngại huyết mạch — giảm thức ăn ngọt béo, tăng vận động, uống nước đủ.</li>
  <li><strong>Không thức khuya, kiêng rượu:</strong> Thức khuya hao thận âm, thận âm không kiềm chế được can dương — nguy cơ tăng. Rượu sinh thấp nhiệt kích động can hỏa.</li>
  <li><strong>Tập dưỡng sinh nhẹ nhàng:</strong> Đi bộ, bát đoạn cẩm, thái cực quyền điều hòa khí huyết, tránh vận động quá gắng sức đột ngột (dễ kích động can dương bốc lên).</li>
</ul>

<h2>Huyệt vị phòng ngừa định kỳ</h2>
<ul>
  <li><strong>Túc tam lý (ST36):</strong> Cứu ngải định kỳ (mỗi tuần 2–3 lần) — bổ khí, kiện tỳ, hỗ trợ phòng ngừa đột quỵ theo kinh nghiệm YHCT cổ truyền ("Tứ thập dĩ hậu túc tam lý bất ly hỏa").</li>
  <li><strong>Nội quan (PC6) + Thái xung (LR3):</strong> Bình can an thần — dùng cho người có xu hướng căng thẳng, dễ tức giận, huyết áp hay dao động.</li>
</ul>

<div class="art-cta-box">
  <p>Phòng trúng phong hiệu quả nhất là kiểm soát yếu tố nguy cơ từ sớm và duy trì lối sống điều độ. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn phòng ngừa và phục hồi sau tai biến bằng châm cứu kết hợp YHCT. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 24,
    slug: "quy-ty-thang-duong-tam-an-than",
    date: "2026-06-17",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Quy tỳ thang — Bài thuốc dưỡng tâm an thần, bổ khí huyết kinh điển",
    excerpt: "Bài thuốc kinh điển trị mất ngủ, hồi hộp, hay quên do tâm tỳ lưỡng hư — kết hợp bổ khí kiện tỳ và dưỡng huyết an thần trong một phác đồ toàn diện.",
    readTime: 5,
    content: `
<h2>Nguồn gốc và chỉ định</h2>
<p><strong>Quy tỳ thang</strong> xuất phát từ sách <em>Tế Sinh Phương</em> (thời Tống), sau được bổ sung và hoàn thiện trong <em>Cảnh Nhạc Toàn Thư</em>. Bài thuốc chuyên trị <strong>tâm tỳ lưỡng hư</strong> — tỳ vị suy yếu không sinh hóa đủ khí huyết để nuôi tâm, dẫn đến mất ngủ, hồi hộp, hay quên, lo âu và mệt mỏi kéo dài. Đây là thể bệnh rất phổ biến ở người làm việc trí óc căng thẳng hoặc phụ nữ sau sinh.</p>

<h2>Thành phần bài thuốc</h2>
<ul>
  <li><strong>Đảng sâm + Hoàng kỳ:</strong> Đại bổ tỳ khí, kiện tỳ sinh huyết — hai vị chủ dược bổ khí.</li>
  <li><strong>Bạch truật + Phục thần:</strong> Kiện tỳ táo thấp, an thần định trí.</li>
  <li><strong>Đương quy + Long nhãn nhục:</strong> Dưỡng huyết, bổ tâm an thần — nuôi dưỡng tâm huyết để ổn định thần chí.</li>
  <li><strong>Toan táo nhân + Viễn chí:</strong> An thần định trí, giao thông tâm thận — hỗ trợ ngủ sâu và giảm hồi hộp lo âu.</li>
  <li><strong>Mộc hương:</strong> Lý khí, tránh các vị bổ gây đầy trướng.</li>
  <li><strong>Cam thảo + Sinh khương + Đại táo:</strong> Điều hòa bài thuốc, kiện tỳ hòa vị.</li>
</ul>

<h2>Chỉ định lâm sàng</h2>
<ul>
  <li>Mất ngủ khó vào giấc, ngủ mơ nhiều, thức dậy mệt mỏi không sảng khoái.</li>
  <li>Hồi hộp trống ngực, lo âu vô cớ, dễ giật mình.</li>
  <li>Hay quên, khó tập trung, suy giảm trí nhớ do căng thẳng kéo dài.</li>
  <li>Ăn kém, mệt mỏi, sắc mặt vàng nhợt, chóng mặt nhẹ sau lao động.</li>
  <li>Phụ nữ kinh nguyệt ít, màu nhạt, hoặc băng huyết chức năng do khí hư không nhiếp huyết.</li>
</ul>

<h2>Lưu ý</h2>
<p>Không dùng khi mất ngủ do âm hư hỏa vượng (người bứt rứt, nóng nảy, lưỡi đỏ), hoặc có đờm nhiệt (lưỡi rêu vàng nhớt). Cần thầy thuốc gia giảm theo thể bệnh cụ thể.</p>

<div class="art-cta-box">
  <p>Quy tỳ thang là bài thuốc quý cho các vấn đề mất ngủ, lo âu do căng thẳng kéo dài — đặc biệt phổ biến trong cuộc sống hiện đại. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tứ chẩn kỹ để kê đơn đúng thể bệnh. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 23,
    slug: "xoa-bop-mat-duong-nhan-yhct",
    date: "2026-06-17",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Xoa bóp mặt dưỡng nhan theo Y học cổ truyền: Kỹ thuật tại nhà mỗi ngày",
    excerpt: "Xoa bóp mặt đúng huyệt và đúng kỹ thuật giúp tăng tuần hoàn khí huyết vùng mặt, giảm nếp nhăn, sáng da và thư giãn — liệu pháp không dùng thuốc từ YHCT.",
    readTime: 5,
    content: `
<h2>Cơ sở lý luận YHCT</h2>
<p>Vùng mặt là nơi hội tụ của nhiều kinh lạc quan trọng — kinh Dương minh (Đại trường và Vị), kinh Thiếu dương (Tam tiêu và Đởm), kinh Thái dương (Tiểu trường và Bàng quang) — cùng Nhâm mạch và Đốc mạch. Xoa bóp mặt theo kinh lạc và huyệt vị giúp khí huyết lưu thông đều đặn đến từng tế bào da, tăng cường nuôi dưỡng và thải độc tại chỗ — kết quả là da sáng, hồng hào và trì hoãn lão hóa.</p>

<h2>Quy trình xoa bóp mặt cơ bản (10–15 phút)</h2>
<ul>
  <li><strong>Bước 1 — Làm ấm tay:</strong> Xoa hai lòng bàn tay vào nhau cho ấm, áp nhẹ lên mặt 30 giây để dẫn nhiệt vào da, mở lỗ chân lông và thư giãn cơ mặt.</li>
  <li><strong>Bước 2 — Xoa vùng trán:</strong> Dùng 3 ngón giữa miết nhẹ từ giữa trán ra hai bên thái dương, từ dưới lên trên — đi qua huyệt Ấn đường (EX-HN3) ở giữa trán, lặp lại 10–15 lần. Giảm nếp nhăn ngang trán, thanh tâm an thần.</li>
  <li><strong>Bước 3 — Bấm huyệt vùng mắt:</strong> Ngón cái và trỏ nhẹ nhàng ấn theo vòng quanh hốc mắt từ trong ra ngoài — bấm Toản trúc (BL2), Ngư yêu (EX-HN4), Ty trúc không (TE23), Đồng tử liêu (GB1), Thừa khấp (ST1), Tứ bạch (ST2). Mỗi huyệt 5–10 giây, giảm quầng thâm và nhăn đuôi mắt.</li>
  <li><strong>Bước 4 — Xoa gò má và mũi:</strong> Hai ngón cái xoa từ cạnh mũi (huyệt Nghênh hương LI20) ra theo gò má lên thái dương — 10 lần. Thông khí huyết vùng má, hỗ trợ giảm nám và làm sáng da.</li>
  <li><strong>Bước 5 — Xoa vùng miệng và cằm:</strong> Hai ngón cái xoa từ giữa môi trên (Nhân trung) và dưới (Thừa tương) ra hai bên — 10 lần. Bổ tỳ khí, giảm nhăn vùng quanh miệng.</li>
  <li><strong>Bước 6 — Vỗ nhẹ toàn mặt:</strong> Dùng các đầu ngón tay vỗ nhẹ nhanh khắp mặt 30–60 giây — kích thích tuần hoàn, tăng đàn hồi da.</li>
</ul>

<h2>Lưu ý khi thực hiện</h2>
<ul>
  <li>Nên rửa mặt sạch trước, có thể dùng một ít dầu dưỡng hoặc kem dưỡng để tay trượt nhẹ hơn.</li>
  <li>Lực xoa nhẹ nhàng, không kéo căng da — da mặt mỏng hơn nhiều so với các vùng cơ thể khác.</li>
  <li>Tập đều đặn mỗi tối trước khi ngủ, kết hợp hít thở sâu và chậm trong lúc xoa bóp để tăng tác dụng thư giãn.</li>
  <li>Không xoa bóp trực tiếp lên vùng mụn đang viêm hoặc da bị tổn thương.</li>
</ul>

<div class="art-cta-box">
  <p>Xoa bóp mặt đúng kỹ thuật là liệu pháp dưỡng nhan an toàn, không tốn kém và có thể thực hiện hàng ngày tại nhà. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm hướng dẫn kỹ thuật xoa bóp mặt và châm cứu dưỡng nhan phù hợp từng người. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 22,
    slug: "cuu-ngai-dieu-tri-lanh-bung",
    date: "2026-06-18",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Cứu ngải điều trị lạnh bụng: Phương pháp ôn ấm tỳ vị không dùng thuốc",
    excerpt: "Lạnh bụng, đau bụng âm ỉ khi gặp lạnh hoặc ăn đồ mát thường do hư hàn tỳ vị — cứu ngải tại các huyệt vùng bụng giúp ôn ấm, hành khí và cải thiện tiêu hóa hiệu quả.",
    readTime: 5,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Lạnh bụng (vị hàn, tỳ hư hàn) là tình trạng rất phổ biến trong YHCT, đặc trưng bởi cảm giác đau âm ỉ hoặc lạnh trong bụng, thích chườm ấm, sợ ăn đồ lạnh và thường đi kèm tiêu hóa kém. Nguyên nhân cốt lõi là <strong>dương khí của Tỳ vị suy yếu</strong>, không đủ sức ôn ấm và vận hóa thủy cốc, khiến hàn tà dễ tích tụ ở trung tiêu. Cứu ngải (đốt ngải cứu hun ấm huyệt vị) là phương pháp không dùng thuốc rất phù hợp với tình trạng này, vì hơi ấm và dược tính của ngải cứu giúp <em>ôn trung tán hàn, kiện tỳ ích vị</em> trực tiếp tại gốc bệnh mà không cần uống thuốc.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể tỳ vị hư hàn:</strong> Đau bụng âm ỉ kéo dài, thích chườm ấm và xoa bụng, ăn đồ lạnh dễ đau hoặc tiêu chảy, người mệt mỏi, sắc mặt nhợt, chân tay lạnh. Lưỡi nhạt bệu, rêu trắng. Hướng điều trị: ôn trung kiện tỳ, tán hàn chỉ thống.</li>
  <li><strong>Thể hàn thấp ngưng trệ:</strong> Bụng đầy trướng, lạnh, nặng nề, đại tiện lỏng nát, không muốn ăn uống, hay gặp sau dầm mưa hoặc ở phòng điều hòa lạnh lâu. Hướng điều trị: ôn hóa hàn thấp, lý khí hòa trung.</li>
  <li><strong>Thể thận dương hư kèm tỳ hàn:</strong> Lạnh bụng kèm lạnh lưng, sợ lạnh toàn thân, tiểu đêm nhiều, đại tiện lỏng vào buổi sáng sớm. Hướng điều trị: ôn bổ thận dương, kiêm kiện tỳ.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị cứu ngải</h2>
<ul>
  <li><strong>Trung quản (CV12):</strong> Đường giữa bụng, giữa rốn và mũi ức (4 thốn trên rốn). Mộ huyệt của Vị — cứu ngải tại đây giúp ôn ấm trực tiếp vùng dạ dày, giảm đau và đầy trướng nhanh.</li>
  <li><strong>Khí hải (CV6):</strong> Dưới rốn 1,5 thốn. Bổ nguyên khí, ôn ấm hạ tiêu — huyệt nền tảng cho mọi chứng hư hàn vùng bụng dưới.</li>
  <li><strong>Quan nguyên (CV4):</strong> Dưới rốn 3 thốn. Cứu ngải huyệt này đặc biệt hiệu quả với thể thận dương hư, giúp ôn bổ thận dương và tán hàn toàn thân.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới đầu gối ngoài 3 thốn. Kiện tỳ vị, tăng dương khí — cứu ngải huyệt này hỗ trợ tiêu hóa và nâng cao chính khí lâu dài.</li>
  <li><strong>Thần khuyết (CV8):</strong> Chính giữa rốn (chỉ cứu cách ngải bằng lát gừng, không châm). Ôn ấm trung tiêu rất mạnh, hay dùng trong cứu ngải điều trị lạnh bụng mạn tính ở người cao tuổi và trẻ em.</li>
</ul>
<p>Cách thực hiện: dùng điều ngải cứu (que ngải) đốt cháy đầu, hun cách da khoảng 2–3cm tại từng huyệt 10–15 phút đến khi vùng da ấm hồng, không để bỏng. Có thể cứu cách gừng (đặt lát gừng mỏng lên huyệt rồi đặt mồi ngải lên trên) để tăng hiệu quả ôn ấm và giảm nguy cơ bỏng. Thực hiện 1 lần/ngày, liên tục 7–10 ngày, hoặc duy trì 2–3 lần/tuần với người hay lạnh bụng mạn tính.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Cứu ngải vùng rốn và Trung quản (CV12):</strong> Thực hiện vào buổi tối trước khi ngủ, ở nơi kín gió, sau khi cứu nên giữ ấm bụng, tránh ra ngoài ngay.</li>
  <li><strong>Chườm ấm kết hợp xoa bụng:</strong> Dùng túi muối rang hoặc chai nước ấm chườm bụng 15 phút, sau đó xoa tròn theo chiều kim đồng hồ quanh rốn 5–10 phút để tăng tuần hoàn.</li>
  <li><strong>Uống nước gừng ấm hoặc trà quế:</strong> Hỗ trợ ôn trung tán hàn từ bên trong, đặc biệt hữu ích vào buổi sáng sớm hoặc khi bụng lạnh đột ngột.</li>
  <li><strong>Tránh đồ lạnh, sống và uống nước đá:</strong> Hạn chế tối đa thực phẩm tính hàn để không làm nặng thêm tỳ vị hư hàn.</li>
  <li><strong>Giữ ấm vùng bụng và lưng:</strong> Mặc áo che kín bụng, tránh để hở rốn khi ngủ hoặc ngồi điều hòa lạnh kéo dài.</li>
</ul>

<div class="art-cta-box">
  <p>Cứu ngải là phương pháp an toàn, dễ thực hiện nhưng cần đúng huyệt và đúng liều lượng để đạt hiệu quả, đặc biệt với người có bệnh nền hoặc da nhạy cảm nên được thầy thuốc hướng dẫn trực tiếp. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn và thực hiện cứu ngải, châm cứu phù hợp từng thể bệnh hư hàn. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 21,
    slug: "cao-huyet-ap-theo-yhct",
    date: "2026-06-17",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Cao huyết áp theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Cao huyết áp (huyễn vựng) trong YHCT chia thành nhiều thể bệnh khác nhau — điều trị bằng châm cứu, bấm huyệt và dưỡng sinh giúp ổn định huyết áp bền vững, giảm phụ thuộc thuốc.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Cao huyết áp trong YHCT thuộc phạm trù <strong>huyễn vựng</strong> (chóng mặt, hoa mắt) và <strong>đầu thống</strong> (đau đầu) — nguyên nhân cốt lõi thường do <strong>can dương thượng cang</strong> (can hỏa bốc lên đầu) phối hợp với <strong>can thận âm hư</strong> không tiềm được dương, hoặc do <strong>đàm thấp trở trệ</strong> làm khí huyết vận hành kém. Khác với Tây y chỉ tập trung hạ số đo huyết áp, YHCT điều trị theo hướng <em>"bình can tiềm dương, tư âm bổ thận"</em> — vừa hạ áp vừa điều hòa căn nguyên tạng phủ, giúp ổn định lâu dài và giảm các triệu chứng kèm theo như đau đầu, mất ngủ, hồi hộp.</p>

<h2>Phân thể theo YHCT</h2>
<ul>
  <li><strong>Thể can dương thượng cang:</strong> Đau đầu căng, chóng mặt, mặt đỏ bừng, dễ cáu gắt, miệng khô đắng, huyết áp dao động mạnh khi căng thẳng. Lưỡi đỏ rêu vàng, mạch huyền. Hướng điều trị: bình can tiềm dương, thanh can tả hỏa.</li>
  <li><strong>Thể đàm thấp trở trệ:</strong> Đầu nặng như đội mũ chì, người béo bệu, ngực tức bụng đầy, đờm nhiều, dễ buồn nôn, mệt mỏi uể oải. Lưỡi bệu rêu trắng dày, mạch hoạt. Hướng điều trị: hóa đàm trừ thấp, kiện tỳ thông lạc.</li>
  <li><strong>Thể can thận âm hư:</strong> Chóng mặt ù tai, hoa mắt khi đứng dậy, mỏi lưng gối, miệng khô, mất ngủ, ngũ tâm phiền nhiệt (lòng bàn tay chân nóng). Lưỡi đỏ ít rêu, mạch tế sác. Hướng điều trị: tư bổ can thận, dưỡng âm tiềm dương.</li>
  <li><strong>Thể khí huyết hư (tâm tỳ lưỡng hư):</strong> Mệt mỏi, hồi hộp đánh trống ngực, sắc mặt nhợt, hoa mắt chóng mặt khi thay đổi tư thế, kém ăn. Lưỡi nhạt, mạch tế nhược. Hướng điều trị: bổ khí dưỡng huyết, kiện tỳ ích tâm.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị</h2>
<ul>
  <li><strong>Thái xung (LR3):</strong> Mu bàn chân, giữa khe ngón 1-2. Nguyên huyệt kinh Can — bình can tiềm dương, huyệt chủ lực cho thể can dương thượng cang.</li>
  <li><strong>Phong trì (GB20):</strong> Sau gáy, dưới đáy hộp sọ. Thanh can hỏa, giảm đau đầu chóng mặt — phối hợp Thái xung (LR3) tạo phác đồ "tứ quan" cổ truyền trị huyễn vựng.</li>
  <li><strong>Bách hội (GV20):</strong> Đỉnh đầu, giao điểm đường nối hai vành tai và đường giữa đầu. Bình can tức phong, an thần — hỗ trợ giảm chóng mặt và ổn định thần kinh.</li>
  <li><strong>Thái khê (KI3):</strong> Giữa đỉnh mắt cá trong và gân gót. Nguyên huyệt kinh Thận — tư âm bổ thận, dùng cho thể can thận âm hư.</li>
  <li><strong>Tam âm giao (SP6):</strong> Trên mắt cá trong 3 thốn. Điều hòa can thận tỳ, hỗ trợ hạ áp và an thần, dùng được cho nhiều thể bệnh.</li>
  <li><strong>Nội quan (PC6):</strong> Giữa mặt trong cổ tay, trên lằn chỉ cổ tay 2 thốn. An thần định chí, giảm hồi hộp đánh trống ngực — đặc biệt hữu ích thể khí huyết hư và khi huyết áp dao động do lo âu.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới đầu gối ngoài 3 thốn. Kiện tỳ hóa đàm, bổ khí huyết — dùng cho thể đàm thấp và thể khí huyết hư.</li>
</ul>
<p>Thể can dương thượng cang: châm tả Thái xung (LR3), Phong trì (GB20), không cứu ngải. Thể âm hư: châm bổ Thái khê (KI3), Tam âm giao (SP6), có thể thêm nhu châm lưu kim kéo dài. Thể đàm thấp và khí huyết hư: châm bổ kết hợp cứu ngải nhẹ Túc tam lý (ST36). Liệu trình 10–15 buổi, 2–3 buổi/tuần, theo dõi huyết áp trước và sau mỗi lần châm.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Bấm huyệt Thái xung (LR3) và Phong trì (GB20):</strong> Ấn giữ mỗi huyệt 1–2 phút khi thấy đau đầu, căng thẳng hoặc huyết áp có dấu hiệu tăng — thực hiện đều đặn buổi sáng và tối.</li>
  <li><strong>Ngâm chân nước ấm trước khi ngủ:</strong> 15 phút mỗi tối giúp dẫn hỏa từ trên đầu xuống, hỗ trợ an thần và ổn định huyết áp, đặc biệt tốt cho thể can dương thượng cang.</li>
  <li><strong>Hạn chế muối, đồ cay nóng, rượu bia:</strong> Các vị này dễ sinh đàm hỏa, làm nặng thêm các thể can dương và đàm thấp.</li>
  <li><strong>Tập thở sâu và đi bộ nhẹ mỗi ngày 20–30 phút:</strong> Giúp khí huyết lưu thông, giảm stress — yếu tố trực tiếp làm can khí uất, dương khí bốc lên gây tăng huyết áp.</li>
  <li><strong>Trà hoa cúc, trà hoa hòe:</strong> Có tác dụng thanh can hỏa, hỗ trợ ổn định huyết áp khi dùng đều đặn — chỉ nên dùng khi không có biểu hiện hàn (tay chân lạnh, sợ lạnh).</li>
</ul>

<div class="art-cta-box">
  <p>Cao huyết áp cần theo dõi và điều trị kiên trì, không tự ý ngưng thuốc Tây y khi đang điều trị kết hợp YHCT. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn phác đồ châm cứu, bấm huyệt kết hợp dưỡng sinh phù hợp từng thể bệnh để hỗ trợ ổn định huyết áp bền vững. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 20,
    slug: "co-so-ly-luan-trung-y-my-dung",
    date: "2026-06-16",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Cơ sở lý luận Trung Y Mỹ Dung: Vì sao tạng phủ quyết định vẻ đẹp dung nhan",
    excerpt: "Trung Y Mỹ Dung học xây dựng trên nền tảng lý luận chỉnh thể, âm dương ngũ hành và tạng tượng — giải thích vì sao sắc mặt, da, tóc, móng đều là tấm gương phản chiếu sức khỏe tạng phủ bên trong.",
    readTime: 7,
    content: `
<h2>Quan niệm chỉnh thể: vẻ đẹp bắt đầu từ bên trong</h2>
<p>Trung Y Mỹ Dung học (làm đẹp bằng Y học cổ truyền) không xem da, tóc, móng là những bộ phận tách biệt cần "sửa chữa" riêng lẻ, mà đặt chúng trong mối liên hệ chỉnh thể với toàn bộ tạng phủ, khí huyết và môi trường sống. Theo quan niệm này, cơ thể là một thể thống nhất hữu cơ — biến đổi bệnh lý ở tạng phủ bên trong tất yếu phản ánh ra dung nhan bên ngoài, và ngược lại, các vấn đề về da hay tóc thường bắt nguồn từ sự mất cân bằng tạng phủ, khí huyết ở một mức độ nào đó.</p>
<p>Đây là lý do vì sao YHCT tiếp cận làm đẹp theo hướng <em>"trị từ gốc"</em>: thay vì chỉ can thiệp tại chỗ, thầy thuốc luôn xem xét tổng thể thể trạng, sinh hoạt và cảm xúc của người bệnh trước khi đưa ra phương pháp chăm sóc phù hợp.</p>
<p>Quan niệm chỉnh thể còn mở rộng ra mối quan hệ giữa con người và tự nhiên. Cơ thể thích ứng theo quy luật bốn mùa — da tiết nhiều dầu và mồ hôi hơn vào mùa xuân hè khi dương khí phát tán ra ngoài, trở nên khô và cần dưỡng ẩm nhiều hơn vào mùa thu đông khi dương khí thu về bên trong. Nhiều vấn đề da liễu cũng mang tính mùa rõ rệt: cháy nắng và nám thường nặng hơn vào xuân hè, nứt nẻ da và cước lạnh xuất hiện nhiều vào mùa đông.</p>

<h2>Âm dương ngũ hành — nền tảng đánh giá vẻ đẹp khỏe mạnh</h2>
<p>YHCT xem cân bằng âm dương không chỉ là tiêu chuẩn sức khỏe mà còn là tiêu chuẩn thẩm mỹ. Một gương mặt hồng hào, tươi sáng, có sức sống là biểu hiện của khí huyết điều hòa, âm dương cân bằng. Khi âm dương lệch — dương thịnh sinh nóng bứt rứt, mặt đỏ; âm thịnh sinh hàn, da nhợt phù nề — dung nhan cũng mất đi vẻ hài hòa tự nhiên.</p>
<p>Học thuyết ngũ hành (Mộc, Hỏa, Thổ, Kim, Thủy) được dùng để phân loại thể trạng và xu hướng bệnh lý liên quan đến từng tạng: Can (Mộc), Tâm (Hỏa), Tỳ (Thổ), Phế (Kim), Thận (Thủy). Mỗi nhóm thể trạng có đặc điểm hình thể, sắc da và nguy cơ vấn đề thẩm mỹ khác nhau, giúp thầy thuốc định hướng chăm sóc phù hợp với từng người thay vì áp dụng một công thức chung cho tất cả.</p>

<h2>Tạng tượng học: mỗi tạng phủ "vinh nhuận" ra một bộ phận</h2>
<p>Đây là phần lý luận cốt lõi giải thích trực tiếp mối liên hệ giữa nội tạng và vẻ đẹp bên ngoài:</p>
<ul>
  <li><strong>Tâm (Tim):</strong> chủ huyết mạch, vinh nhuận ở mặt. Tâm khí đủ thì mặt hồng nhuận sáng; tâm huyết hư thì mặt vô hoa, kém sắc.</li>
  <li><strong>Phế (Phổi):</strong> chủ da và lông. Phế khí đầy đủ thì da dẻ mịn mượt, lỗ chân lông khép mở điều hòa; phế khí hư thì da lông khô héo, dễ nổi mụn.</li>
  <li><strong>Tỳ (Lá lách):</strong> chủ cơ nhục, vinh nhuận ở môi. Tỳ vị là nguồn sinh hóa khí huyết — tỳ hư khiến cơ nhục gầy yếu, môi nhợt nhạt.</li>
  <li><strong>Can (Gan):</strong> tàng huyết, vinh nhuận ở móng tay, chủ gân. Can huyết đủ giúp móng hồng chắc khỏe, tinh thần thư thái; can uất dễ sinh nếp nhăn do tâm trạng căng thẳng kéo dài.</li>
  <li><strong>Thận:</strong> tàng tinh, là gốc của khí huyết toàn thân, chủ cốt và "vinh nhuận" ở tóc và răng. Thận tinh đầy đủ thì tóc đen bóng, răng chắc khỏe; thận tinh suy thì tóc bạc sớm, rụng tóc, răng lung lay — đây là cơ sở lý luận cho rất nhiều phương pháp chống lão hóa của YHCT.</li>
</ul>
<p>Chính nhờ hệ thống tương ứng này, thầy thuốc YHCT khi nhìn vào tình trạng da, tóc, móng, môi có thể suy đoán được tạng phủ nào đang suy yếu, từ đó điều trị đúng gốc bệnh thay vì chỉ xử lý biểu hiện bên ngoài.</p>

<h2>Khí, huyết, tân dịch — vật chất nền tảng của vẻ đẹp</h2>
<p>YHCT coi khí, huyết và tân dịch là ba loại vật chất cơ bản nuôi dưỡng da, cơ nhục và tóc. Khí đủ giúp cơ thể ấm áp, da sáng bóng và đề kháng tốt với tác nhân gây bệnh từ ngoài; khí hư dễ sinh huyết ứ, biểu hiện thành nám và tàn nhang. Huyết đầy đủ giúp tinh thần minh mẫn, mắt sáng, cơ nhục săn chắc; huyết hư khiến da xanh xao, tóc dễ gãy rụng; huyết nhiệt lại dễ sinh mụn và các vấn đề viêm đỏ trên da. Tân dịch nhuận dưỡng da và tóc — thiếu tân dịch gây da khô nứt nẻ, còn tân dịch ứ trệ lại dẫn đến phù nề, béo phì.</p>

<h2>Nguyên nhân thường gặp gây tổn thương dung nhan</h2>
<ul>
  <li><strong>Lục dâm (tà khí từ ngoài):</strong> phong, hàn, thử, thấp, táo, hỏa — mỗi loại gây ra kiểu tổn thương da đặc trưng, ví dụ phong nhiệt dễ sinh tàn nhang và ban đỏ, táo tà gây da khô nứt nẻ vào mùa thu.</li>
  <li><strong>Thất tình nội thương:</strong> cảm xúc thái quá hoặc kéo dài (giận, lo, buồn, sợ, suy nghĩ nhiều) đều có thể làm tổn thương tạng phủ tương ứng và biểu hiện ra dung nhan — đây là cơ sở lý luận cho việc xem stress là một trong những "kẻ thù" hàng đầu của làn da.</li>
  <li><strong>Ăn uống không điều độ:</strong> ăn thiếu gây gầy yếu kém sắc, ăn quá nhiều hoặc lệch vị gây tích nhiệt sinh mụn hoặc béo phì.</li>
  <li><strong>Lao dật thất thường:</strong> làm việc quá độ tổn hao khí huyết; ngược lại quá nhàn rỗi cũng khiến khí huyết trì trệ, sinh đờm thấp.</li>
</ul>

<h2>Nguyên tắc điều trị làm đẹp theo Y học cổ truyền</h2>
<ul>
  <li><strong>Điều trị theo chỉnh thể:</strong> luôn xem xét tạng phủ, khí huyết toàn thân trước khi can thiệp tại chỗ.</li>
  <li><strong>Phòng bệnh trước khi mắc:</strong> dưỡng sinh, sinh hoạt điều độ và thuận theo quy luật bốn mùa được coi trọng hơn là chỉ xử lý khi vấn đề đã xuất hiện.</li>
  <li><strong>Tam nhân chế nghi:</strong> phương pháp chăm sóc cần phù hợp theo thời điểm (mùa), theo địa phương (khí hậu, môi trường sống) và theo từng người (thể trạng riêng biệt) — không áp dụng một công thức làm đẹp cứng nhắc cho mọi người.</li>
</ul>

<div class="art-cta-box">
  <p>Hiểu đúng cơ sở lý luận Trung Y Mỹ Dung giúp việc chăm sóc và điều trị các vấn đề về da, tóc đạt hiệu quả bền vững thay vì chỉ che giấu tạm thời. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn và xây dựng phác đồ làm đẹp dựa trên biện chứng tạng phủ, khí huyết phù hợp từng thể trạng. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 19,
    slug: "tri-nam-da-tan-nhang-yhct",
    date: "2026-06-16",
    category: "lam-dep",
    categoryLabel: "Làm đẹp",
    icon: "🌸",
    gradient: "g-rose",
    title: "Trị nám da, tàn nhang bằng Y học cổ truyền: Dưỡng từ gốc, đẹp từ trong",
    excerpt: "YHCT xem nám, tàn nhang là biểu hiện của khí huyết ứ trệ và can thận hư tổn trên da — điều trị bằng thuốc bổ huyết, châm cứu và chăm sóc da thảo dược giúp cải thiện bền vững.",
    readTime: 6,
    content: `
<h2>Quan niệm Y học cổ truyền về nám, tàn nhang</h2>
<p>Theo YHCT, da mặt là nơi phản chiếu tình trạng khí huyết và tạng phủ bên trong — dân gian có câu <em>"Da là gương soi của ngũ tạng"</em>. Nám má (hoàng ban) và tàn nhang thường xuất hiện khi <strong>can uất khí trệ</strong> làm khí huyết không lưu thông đều lên mặt, kết hợp với <strong>thận âm hư</strong> khiến da mất nhu dưỡng, sinh sạm màu. Ngoài ra, <strong>tỳ vị hư yếu</strong> không vận hóa được thấp trọc cũng góp phần làm da xuống sắc, không đều màu.</p>
<p>Khác với mỹ phẩm chỉ tác động bề mặt, YHCT điều trị nám tàn nhang theo hướng <em>"nội điều ngoại dưỡng"</em> — điều hòa khí huyết tạng phủ bên trong kết hợp chăm sóc da bên ngoài, giúp cải thiện sắc da bền vững và ngăn nám quay lại.</p>

<h2>Phân thể thường gặp</h2>
<ul>
  <li><strong>Thể can uất khí trệ:</strong> Nám sậm màu vùng má và trán, dễ nặng hơn khi căng thẳng, kèm dễ cáu gắt, kinh nguyệt không đều, đau tức hai bên sườn. Lưỡi có điểm tím. Hướng điều trị: sơ can lý khí, hoạt huyết tán ứ.</li>
  <li><strong>Thể thận âm hư:</strong> Nám màu nâu xám lan rộng, da khô sạm, kèm ù tai, mỏi lưng gối, mất ngủ, miệng khô. Lưỡi đỏ ít rêu, mạch tế. Hướng điều trị: tư bổ thận âm, dưỡng nhan nhuận sắc.</li>
  <li><strong>Thể tỳ hư thấp trệ:</strong> Da sạm vàng, kém tươi, nám lan tỏa không rõ viền, kèm ăn kém, đầy bụng, mệt mỏi. Lưỡi bệu rêu trắng dày. Hướng điều trị: kiện tỳ trừ thấp, dưỡng huyết nhuận da.</li>
</ul>

<h2>Châm cứu và huyệt vị hỗ trợ làm sáng da</h2>
<ul>
  <li><strong>Nghênh hương (LI20):</strong> Cạnh cánh mũi, ngang điểm giữa rãnh mũi má. Thông khí huyết vùng mặt, hỗ trợ giảm sạm da quanh mũi và má.</li>
  <li><strong>Tứ bạch (ST2):</strong> Dưới hốc mắt, thẳng đồng tử. Hoạt huyết, làm sáng vùng da dưới mắt và gò má — vùng hay bị nám nặng nhất.</li>
  <li><strong>Huyết hải (SP10):</strong> Trên đầu gối, mặt trong đùi. Bổ huyết, hoạt huyết toàn thân — huyệt nền tảng trong mọi phác đồ làm đẹp da của YHCT.</li>
  <li><strong>Tam âm giao (SP6):</strong> Trên mắt cá trong 3 thốn. Điều hòa can thận tỳ — ba tạng quyết định sắc diện làn da.</li>
  <li><strong>Thái xung (LR3):</strong> Mu bàn chân, giữa ngón 1-2. Sơ can giải uất — đặc biệt hiệu quả với thể can uất khí trệ do stress.</li>
</ul>
<p>Liệu trình thường 2–3 buổi/tuần, kết hợp cứu ngải nhẹ và xoa bóp mặt (mài mặt) để tăng tuần hoàn máu dưới da, liên tục 4–6 tuần để thấy cải thiện rõ.</p>

<h2>Thuốc YHCT và thảo dược hỗ trợ</h2>
<ul>
  <li><strong>Bài thuốc uống:</strong> Tứ vật thang gia giảm (Đương quy, Xuyên khung, Bạch thược, Thục địa) bổ huyết hoạt huyết — nền tảng cho thể can uất và thận âm hư, cần thầy thuốc gia giảm theo thể bệnh cụ thể.</li>
  <li><strong>Mặt nạ thảo dược tại nhà:</strong> Bạch chỉ + Bạch phục linh + Cam thảo nghiền mịn, trộn nước hoặc sữa chua không đường, đắp mặt 15 phút, 2–3 lần/tuần — có tác dụng làm sáng da theo kinh nghiệm dân gian.</li>
  <li><strong>Trà dưỡng nhan:</strong> Hoa hồng + Kỷ tử + Táo đỏ hãm nước uống hàng ngày, bổ huyết và an thần, hỗ trợ cải thiện sắc da từ bên trong.</li>
</ul>

<h2>Chăm sóc và phòng ngừa tại nhà</h2>
<ul>
  <li><strong>Chống nắng nghiêm ngặt:</strong> Nắng là yếu tố làm nám đậm màu nhanh nhất — che chắn kỹ và dùng kem chống nắng khi ra ngoài, dù đang điều trị bằng phương pháp nào.</li>
  <li><strong>Ngủ đủ giấc, tránh thức khuya:</strong> Thận âm hư nặng thêm khi thiếu ngủ — ngủ trước 23h giúp tạng thận phục hồi, hỗ trợ làn da sáng khỏe.</li>
  <li><strong>Giữ tâm lý thư thái:</strong> Căng thẳng kéo dài làm can khí uất trệ, nám đậm hơn — nên tập thở sâu, đi bộ nhẹ mỗi ngày để giải tỏa.</li>
  <li><strong>Ăn uống bổ huyết:</strong> Tăng cường rau lá xanh đậm, gan động vật, mè đen, các loại đậu — hỗ trợ tạo huyết, nuôi dưỡng da từ gốc.</li>
</ul>

<div class="art-cta-box">
  <p>Nám da và tàn nhang cần điều trị kiên trì từ gốc mới đạt hiệu quả lâu dài. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn phác đồ làm đẹp da kết hợp châm cứu, thuốc YHCT và chăm sóc da phù hợp từng thể bệnh. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 18,
    slug: "phuong-huyet-dieu-tri-viem-xoang",
    date: "2026-06-16",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị viêm xoang theo Y học cổ truyền",
    excerpt: "Phác đồ huyệt cốt lõi giúp thông mũi, giảm đau nhức vùng xoang và hỗ trợ điều trị viêm xoang mạn tính bằng châm cứu kết hợp YHCT.",
    readTime: 5,
    content: `
<h2>Viêm xoang theo Y học cổ truyền</h2>
<p>Viêm xoang thuộc phạm trù <strong>tỵ uyên</strong> trong YHCT — nguyên nhân chủ yếu do <em>phong nhiệt phạm phế</em> hoặc <em>thấp nhiệt uẩn kết</em> ở vùng đầu mặt làm tắc nghẽn khí huyết tại các xoang, gây đau nhức, nghẹt mũi và chảy dịch. Thể mạn tính thường liên quan đến <strong>phế khí hư</strong> và <strong>tỳ khí hư</strong> khiến cơ thể dễ tái phát khi gặp lạnh hoặc thay đổi thời tiết.</p>
<p>Nguyên tắc điều trị: thanh nhiệt thông khiếu ở thể cấp, kiện tỳ bổ phế cố biểu ở thể mạn — phối hợp châm cứu tại chỗ và toàn thân để vừa giảm triệu chứng vừa nâng cao chính khí phòng tái phát.</p>

<h2>Phác đồ huyệt cốt lõi</h2>
<ul>
  <li><strong>Nghênh hương (LI20):</strong> Cạnh cánh mũi. Huyệt tại chỗ quan trọng nhất — thông tỵ khiếu, giảm nghẹt mũi nhanh, là huyệt bắt buộc trong mọi phác đồ viêm xoang.</li>
  <li><strong>Ấn đường (EX-HN3):</strong> Giữa hai đầu lông mày. Giảm đau nhức vùng xoang trán và giữa hai mắt — vị trí thường đau nhất trong viêm xoang sàng và xoang trán.</li>
  <li><strong>Hợp cốc (LI4):</strong> Hổ khẩu bàn tay. Huyệt nguyên của kinh Đại trường — thanh nhiệt giải biểu, hỗ trợ giảm viêm toàn thân, đặc biệt hiệu quả khi viêm xoang kèm sốt nhẹ.</li>
  <li><strong>Phong trì (GB20):</strong> Sau gáy, dưới đáy hộp sọ. Khu phong giải biểu, thông khiếu lợi tỵ — hữu ích cho viêm xoang do phong nhiệt kèm đau đầu, nặng đầu.</li>
  <li><strong>Thượng tinh (GV24):</strong> Đỉnh đầu, trên đường giữa, sau chân tóc 1 thốn. Thông tỵ khiếu, giảm đau vùng xoang trán và đỉnh đầu.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới đầu gối ngoài 3 thốn. Bổ khí kiện tỳ vị — dùng trong thể mạn tính để nâng cao chính khí, giảm tái phát.</li>
</ul>
<p>Thể cấp (phong nhiệt): châm tả pháp các huyệt vùng mặt và đầu, kích thích mạnh, không cứu ngải. Thể mạn (phế tỳ khí hư): châm bổ pháp kết hợp cứu ngải Túc tam lý (ST36) và Phong trì (GB20), liệu trình 10–15 buổi, 3 buổi/tuần.</p>

<h2>Hỗ trợ tại nhà</h2>
<ul>
  <li><strong>Bấm huyệt Nghênh hương:</strong> Dùng hai ngón tay xoa nhẹ cạnh cánh mũi theo chiều lên xuống 1–2 phút, 2–3 lần/ngày khi nghẹt mũi.</li>
  <li><strong>Xông hơi thảo dược:</strong> Lá bạc hà, kinh giới, tía tô nấu nước xông mũi 5–10 phút giúp thông thoáng đường thở, giảm tiết dịch.</li>
  <li><strong>Rửa mũi nước muối ấm:</strong> Thực hiện hàng ngày để làm sạch xoang, hỗ trợ giảm viêm và ngăn tái phát.</li>
</ul>

<div class="art-cta-box">
  <p>Viêm xoang mạn tính dễ tái phát nếu chỉ điều trị triệu chứng — châm cứu kết hợp thuốc YHCT giúp xử lý cả gốc và ngọn của bệnh. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm áp dụng phác đồ điện châm kết hợp thuốc YHCT phù hợp từng thể bệnh. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 17,
    slug: "phong-ngua-dau-da-day-yhct",
    date: "2026-06-16",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Phòng ngừa đau dạ dày theo Y học cổ truyền",
    excerpt: "Đau dạ dày liên quan mật thiết đến tỳ vị hư yếu và stress kéo dài — phòng bệnh bằng ăn uống điều độ, dưỡng sinh tinh thần và thảo dược kiện tỳ.",
    readTime: 5,
    content: `
<h2>Nguyên nhân đau dạ dày theo YHCT</h2>
<p>Đau dạ dày (vị thống) theo YHCT chủ yếu do <strong>tỳ vị hư yếu</strong> kết hợp <strong>can khí uất</strong> (stress, lo âu, ăn uống không điều độ) làm khí trệ ở vị, sinh đau và đầy trướng. Tỳ vị là gốc của <em>hậu thiên</em> — nuôi dưỡng toàn thân, nên phòng bệnh dạ dày không chỉ là bảo vệ vị mà còn củng cố nền tảng sức khỏe tổng thể.</p>

<h2>Nguyên tắc phòng bệnh từ ăn uống</h2>
<ul>
  <li><strong>Ăn đúng giờ, không bỏ bữa:</strong> Vị khí cần được nuôi dưỡng đều đặn — bỏ bữa hoặc ăn giờ giấc lộn xộn làm tỳ vị suy yếu dần, dễ sinh đau và viêm loét.</li>
  <li><strong>Ăn chậm, nhai kỹ:</strong> Giúp vị khí vận hóa thức ăn dễ dàng, giảm áp lực tiêu hóa lên dạ dày.</li>
  <li><strong>Hạn chế đồ cay nóng, chua, lạnh:</strong> Các vị quá cay, quá chua dễ gây thấp nhiệt ở vị; đồ lạnh làm tỳ vị hàn, ảnh hưởng vận hóa.</li>
  <li><strong>Thực phẩm kiện tỳ nên dùng thường xuyên:</strong> Cháo gạo lứt, khoai lang, bí đỏ, gừng tươi pha trà ấm sau ăn — hỗ trợ vị khí vận hóa tốt, giảm đầy hơi.</li>
</ul>

<h2>Dưỡng sinh tinh thần phòng bệnh</h2>
<ul>
  <li><strong>Tránh ăn khi đang căng thẳng, tức giận:</strong> Theo YHCT, can khí uất trực tiếp ảnh hưởng đến vị — "can vị bất hòa" — ăn trong tâm trạng tiêu cực dễ gây đau dạ dày kéo dài.</li>
  <li><strong>Thư giãn sau ăn:</strong> Đi bộ nhẹ 10–15 phút sau bữa ăn giúp khí huyết lưu thông, hỗ trợ tiêu hóa, tránh nằm ngay sau khi ăn.</li>
  <li><strong>Xoa bụng theo chiều kim đồng hồ:</strong> Mỗi tối trước ngủ, xoa vùng bụng quanh rốn 5–10 phút giúp kiện tỳ hòa vị, hỗ trợ tiêu hóa và phòng đầy trướng.</li>
</ul>

<h2>Huyệt vị hỗ trợ phòng bệnh</h2>
<ul>
  <li><strong>Trung quản (CV12):</strong> Giữa rốn và mỏm ức. Mộ huyệt của Vị — bấm nhẹ hàng ngày giúp điều hòa chức năng dạ dày, phòng đau và đầy hơi.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới đầu gối ngoài 3 thốn. Huyệt bổ khí kiện tỳ vị hàng đầu — bấm huyệt hoặc cứu ngải định kỳ giúp tăng sức đề kháng của hệ tiêu hóa.</li>
</ul>

<div class="art-cta-box">
  <p>Phòng bệnh dạ dày hiệu quả nhất là kết hợp ăn uống điều độ, tinh thần thư thái và chăm sóc tỳ vị đều đặn. Nếu đã có triệu chứng đau, đầy hơi kéo dài, nên đi khám sớm. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn và điều trị các bệnh lý tiêu hóa bằng YHCT. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 16,
    slug: "bo-trung-ich-khi-thang",
    date: "2026-06-16",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Bổ trung ích khí thang — Bài thuốc bổ khí kinh điển của Y học cổ truyền",
    excerpt: "Bài thuốc cổ phương của danh y Lý Đông Viên, chuyên trị tỳ vị khí hư, mệt mỏi, sa nội tạng — một trong những bài bổ khí được dùng rộng rãi nhất trong YHCT.",
    readTime: 5,
    content: `
<h2>Nguồn gốc và công dụng</h2>
<p><strong>Bổ trung ích khí thang</strong> do danh y Lý Đông Viên (đời Nguyên, Trung Quốc) sáng lập, được xem là một trong những bài thuốc bổ khí kinh điển và được ứng dụng rộng rãi nhất trong YHCT cho đến nay. Bài thuốc chuyên trị <strong>tỳ vị khí hư hạ hãm</strong> — tình trạng khí của tỳ vị suy yếu không nâng giữ được các cơ quan và chức năng cơ thể, dẫn đến mệt mỏi, sa nội tạng, hay cảm cúm vặt.</p>

<h2>Thành phần bài thuốc</h2>
<ul>
  <li><strong>Hoàng kỳ:</strong> Vị thuốc chủ lực, bổ khí cố biểu, thăng dương khí — vai trò trung tâm của cả bài thuốc.</li>
  <li><strong>Nhân sâm (hoặc Đảng sâm):</strong> Đại bổ nguyên khí, kiện tỳ ích vị, kết hợp Hoàng kỳ tăng cường công năng bổ khí.</li>
  <li><strong>Bạch truật:</strong> Kiện tỳ táo thấp, hỗ trợ vận hóa, tăng cường khả năng hấp thu dinh dưỡng.</li>
  <li><strong>Đương quy:</strong> Bổ huyết hoạt huyết, phối hợp khí huyết song bổ, vì khí và huyết tương sinh.</li>
  <li><strong>Trần bì:</strong> Lý khí hóa trệ, tránh các vị bổ khí gây đầy trướng.</li>
  <li><strong>Sài hồ và Thăng ma:</strong> Thăng dương khí, dẫn thuốc đi lên — đặc trưng riêng của bài này so với các bài bổ khí khác.</li>
  <li><strong>Cam thảo:</strong> Điều hòa các vị thuốc, kiện tỳ ích khí.</li>
</ul>

<h2>Chỉ định lâm sàng</h2>
<ul>
  <li><strong>Mệt mỏi kéo dài, thiếu sức:</strong> Người làm việc quá sức, sau ốm dậy, khí huyết hư suy lâu ngày, ăn kém, sắc mặt nhợt nhạt.</li>
  <li><strong>Sa nội tạng nhẹ:</strong> Sa dạ dày, sa tử cung, trĩ do khí hư hạ hãm không giữ được vị trí các cơ quan — bài thuốc giúp thăng đề khí, hỗ trợ cải thiện.</li>
  <li><strong>Hay cảm cúm vặt:</strong> Người có vệ khí (sức đề kháng) yếu, dễ cảm lạnh, ra mồ hôi tự nhiên không do vận động — dùng dài hạn giúp cố biểu, giảm tần suất mắc bệnh.</li>
  <li><strong>Sốt nhẹ kéo dài do khí hư:</strong> Sốt âm ỉ không rõ nguyên nhân, mệt mỏi kèm theo, khác với sốt do ngoại cảm.</li>
</ul>

<h2>Lưu ý khi sử dụng</h2>
<p>Bài thuốc thuộc nhóm bổ khí thăng dương, <strong>không phù hợp</strong> với người đang sốt cao do nhiễm trùng cấp, hoặc thể âm hư hỏa vượng (nóng trong, khô miệng, mất ngủ do nhiệt). Cần được thầy thuốc YHCT bắt mạch, chẩn đoán thể bệnh và gia giảm liều lượng phù hợp, không tự ý sử dụng kéo dài.</p>

<div class="art-cta-box">
  <p>Bổ trung ích khí thang là bài thuốc quý nhưng cần dùng đúng thể bệnh để đạt hiệu quả tối ưu. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tứ chẩn kỹ lưỡng trước khi kê đơn, đảm bảo an toàn và hiệu quả điều trị. Liên hệ <strong>0973 710 237</strong> để được tư vấn — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 15,
    slug: "bat-doan-cam-khi-cong-duong-sinh",
    date: "2026-06-16",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Bát đoạn cẩm: Bài tập dưỡng sinh khí công không dùng thuốc",
    excerpt: "8 động tác khí công cổ truyền giúp lưu thông khí huyết, tăng cường sức khỏe toàn thân — phù hợp tập luyện hàng ngày, không cần dụng cụ.",
    readTime: 5,
    content: `
<h2>Bát đoạn cẩm là gì?</h2>
<p><strong>Bát đoạn cẩm</strong> (8 đoạn gấm) là bài khí công dưỡng sinh cổ truyền có lịch sử hàng nghìn năm, gồm 8 động tác nhẹ nhàng phối hợp hơi thở và vận động toàn thân. Tên gọi "gấm" ví các động tác như những đường nét tinh tế, mềm mại nhưng có giá trị quý như tấm gấm — tác động sâu đến khí huyết và tạng phủ dù chuyển động bên ngoài rất đơn giản.</p>
<p>Theo YHCT, tập luyện đều đặn giúp <em>thông kinh hoạt lạc, điều hòa khí huyết, kiện tỳ bổ thận</em> — phù hợp mọi lứa tuổi, đặc biệt tốt cho người ít vận động, dân văn phòng và người cao tuổi.</p>

<h2>Lợi ích theo Y học cổ truyền</h2>
<ul>
  <li><strong>Lưu thông khí huyết toàn thân:</strong> Các động tác kéo giãn nhẹ kết hợp hít thở sâu giúp khí huyết vận hành thông suốt qua 12 kinh lạc chính.</li>
  <li><strong>Kiện tỳ vị, hỗ trợ tiêu hóa:</strong> Nhiều động tác tác động trực tiếp vùng bụng, hỗ trợ vận hóa tỳ vị, giảm đầy trướng.</li>
  <li><strong>Bổ thận, mạnh lưng gối:</strong> Các động tác xoay eo, vươn người giúp bổ thận khí, hỗ trợ giảm đau lưng mỏi gối.</li>
  <li><strong>An thần, giảm stress:</strong> Kết hợp hít thở chậm sâu giúp điều hòa tâm thần, giảm lo âu, hỗ trợ ngủ ngon hơn.</li>
</ul>

<h2>Hướng dẫn tập luyện cơ bản</h2>
<ul>
  <li><strong>Lưỡng thủ thác thiên lý tam tiêu:</strong> Hai tay đan vào nhau, đẩy lên cao qua đầu, kéo giãn toàn thân — điều lý tam tiêu, thông khí toàn thân.</li>
  <li><strong>Triển vai khai cung tựa xạ điêu:</strong> Tư thế kéo cung bắn chim, mở rộng vai ngực — thông khí phế, giảm tức ngực.</li>
  <li><strong>Điều lý tỳ vị tu đơn cử:</strong> Một tay đưa lên, một tay hạ xuống xen kẽ — kiện tỳ vị, hỗ trợ tiêu hóa.</li>
  <li><strong>Ngũ lao thất thương vọng hậu tiều:</strong> Xoay đầu nhìn về sau xen kẽ hai bên — giảm mỏi cổ gáy, thư giãn thần kinh.</li>
  <li><strong>Dao đầu bài vĩ khứ tâm hỏa:</strong> Cúi gập người xoay nhẹ — thanh tâm hỏa, giảm bốc nóng, dễ cáu giận.</li>
  <li><strong>Lưỡng thủ phàn túc cố thận yêu:</strong> Cúi người chạm chân, ngửa người ra sau — bổ thận, mạnh lưng.</li>
  <li><strong>Toàn quyền nộ mục tăng khí lực:</strong> Đấm tay ra trước, mắt nhìn theo — tăng khí lực toàn thân.</li>
  <li><strong>Bối hậu thất điên bách bệnh tiêu:</strong> Nhón gót rung nhẹ toàn thân — thư giãn toàn bộ kinh lạc, kết thúc bài tập.</li>
</ul>
<p>Mỗi động tác lặp lại 6–8 lần, tập toàn bài khoảng 15–20 phút, nên tập vào sáng sớm hoặc trước khi ngủ, nơi thoáng khí, kết hợp hít thở đều và chậm theo từng động tác.</p>

<h2>Lưu ý khi tập</h2>
<p>Người mới tập nên thực hiện động tác nhẹ nhàng, không gắng sức quá mức, đặc biệt với người có bệnh tim mạch hoặc huyết áp cao nên tham khảo ý kiến thầy thuốc trước khi tập các động tác xoay vặn mạnh.</p>

<div class="art-cta-box">
  <p>Bát đoạn cẩm là phương pháp dưỡng sinh đơn giản, hiệu quả, không cần dụng cụ và phù hợp tập tại nhà hàng ngày. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn lộ trình dưỡng sinh kết hợp điều trị phù hợp thể trạng từng người. Liên hệ <strong>0973 710 237</strong> — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 14,
    slug: "dau-bung-kinh-thong-kinh-yhct",
    date: "2026-06-16",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Đau bụng kinh (thống kinh) theo Y học cổ truyền: Phân thể và điều trị",
    excerpt: "Đau bụng kinh được YHCT phân thành các thể hàn, ứ, hư khác nhau — điều trị bằng thuốc YHCT và châm cứu giúp giảm đau hiệu quả và điều hòa kinh nguyệt lâu dài.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Đau bụng kinh (thống kinh) trong YHCT chủ yếu do <strong>khí huyết ứ trệ</strong> hoặc <strong>hư hàn</strong> ở vùng bào cung (tử cung) làm cản trở quá trình hành kinh, sinh đau quặn bụng dưới. Nguyên tắc điều trị YHCT là <em>"thông kinh chỉ thống"</em> — không chỉ giảm đau cấp mà còn điều hòa khí huyết để kinh nguyệt đều đặn, giảm tái phát mỗi tháng.</p>

<h2>Phân thể theo YHCT</h2>
<ul>
  <li><strong>Thể khí trệ huyết ứ:</strong> Đau quặn bụng dưới trước và trong kỳ kinh, đau dữ dội, kinh ra cục máu đen, giảm đau sau khi máu cục ra hết. Hay kèm căng tức ngực, dễ cáu. Lưỡi tím có điểm ứ huyết. Hướng điều trị: hành khí hoạt huyết, hóa ứ chỉ thống.</li>
  <li><strong>Thể hàn thấp ngưng trệ:</strong> Đau bụng dưới lạnh, đau giảm khi chườm ấm, kinh ra ít, màu nhạt hoặc lẫn cục nhỏ, tay chân lạnh. Hay gặp sau dầm mưa, ăn đồ lạnh trong kỳ kinh. Hướng điều trị: ôn kinh tán hàn, hoạt huyết chỉ thống.</li>
  <li><strong>Thể khí huyết hư:</strong> Đau âm ỉ, mỏi nhiều hơn đau quặn, kinh ra ít, màu nhạt, kèm mệt mỏi, sắc mặt nhợt, chóng mặt. Đau thường giảm sau hành kinh hoặc khi nghỉ ngơi. Hướng điều trị: bổ khí dưỡng huyết, ích bào cung.</li>
  <li><strong>Thể can thận hư:</strong> Đau âm ỉ vùng bụng dưới và lưng, kéo dài cả trước và sau kỳ kinh, kèm ù tai, mỏi gối. Hướng điều trị: bổ can thận, ích tinh điều kinh.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị</h2>
<ul>
  <li><strong>Tam âm giao (SP6):</strong> Trên mắt cá trong 3 thốn. Huyệt giao hội của 3 kinh âm (Tỳ, Can, Thận) — huyệt quan trọng nhất điều trị các bệnh phụ khoa, điều hòa kinh nguyệt và giảm đau bụng kinh.</li>
  <li><strong>Quan nguyên (CV4):</strong> Dưới rốn 3 thốn. Bổ nguyên khí, ôn ấm bào cung — cứu ngải tại huyệt này rất hiệu quả với thể hàn thấp.</li>
  <li><strong>Khí hải (CV6):</strong> Dưới rốn 1,5 thốn. Bổ khí, hỗ trợ điều trị thể khí huyết hư, kết hợp cứu ngải tăng hiệu quả ôn bổ.</li>
  <li><strong>Huyết hải (SP10):</strong> Trên đầu gối, mặt trong đùi. Hoạt huyết điều kinh — phối hợp Tam âm giao trong thể khí trệ huyết ứ.</li>
  <li><strong>Địa cơ (SP8):</strong> Dưới đầu gối, mặt trong cẳng chân. Khích huyệt của kinh Tỳ — giảm đau bụng kinh cấp tính rất hiệu quả, có thể bấm mạnh khi đau.</li>
</ul>
<p>Thể hàn: cứu ngải Quan nguyên (CV4) và Khí hải (CV6) trước kỳ kinh 3–5 ngày. Thể huyết ứ: châm tả Tam âm giao và Huyết hải trong những ngày đau. Thể hư: châm bổ kết hợp cứu ngải, nên điều trị duy trì 2–3 chu kỳ liên tiếp để thấy hiệu quả rõ.</p>

<h2>Tự chăm sóc tại nhà</h2>
<ul>
  <li><strong>Chườm ấm bụng dưới:</strong> Dùng túi chườm ấm hoặc muối rang đặt vùng bụng dưới 15–20 phút khi đau, đặc biệt hiệu quả với thể hàn.</li>
  <li><strong>Bấm huyệt Tam âm giao và Địa cơ:</strong> Ấn giữ mỗi huyệt 1–2 phút khi đau, có thể lặp lại nhiều lần trong ngày.</li>
  <li><strong>Uống nước gừng ấm hoặc trà ích mẫu:</strong> Hỗ trợ ôn ấm, hoạt huyết — chỉ dùng khi không có dấu hiệu nhiệt (kinh đỏ tươi, người nóng).</li>
  <li><strong>Tránh đồ lạnh, sống trong kỳ kinh:</strong> Hạn chế đá lạnh, hải sản tính hàn để không làm nặng thêm tình trạng hàn ngưng.</li>
</ul>

<div class="art-cta-box">
  <p>Đau bụng kinh kéo dài nhiều năm không nên xem là bình thường — điều trị đúng thể bệnh giúp giảm đau và điều hòa kinh nguyệt bền vững. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm tư vấn và điều trị các vấn đề phụ khoa bằng châm cứu kết hợp thuốc YHCT. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 13,
    slug: "dau-than-kinh-toa-yhct-phan-the-dieu-tri",
    date: "2026-06-16",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Đau thần kinh tọa theo Y học cổ truyền: Phân thể và phác đồ điều trị toàn diện",
    excerpt: "Đau thần kinh tọa — đau lan từ thắt lưng xuống chân theo dọc dây thần kinh — được YHCT phân thể cụ thể và điều trị hiệu quả bằng châm cứu, xoa bóp kết hợp thuốc YHCT.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Đau thần kinh tọa (đau lan dọc dây thần kinh hông to từ thắt lưng qua mông xuống chân) trong Y học cổ truyền thuộc phạm trù <strong>tý chứng</strong> — cụ thể là <em>thống tý</em> và <em>trước tý</em>. YHCT lý giải nguyên nhân gốc rễ là <strong>can thận hư tổn</strong> làm gân xương mất nhu dưỡng, tạo điều kiện cho tà khí (phong hàn thấp hoặc thấp nhiệt) xâm nhập kinh túc thái dương Bàng quang và kinh túc thiếu dương Đởm — hai kinh lạc chạy dọc mặt sau và ngoài chân, trùng với đường đi của dây thần kinh hông to.</p>
<p>Nguyên tắc điều trị: <em>"Khu tà thông lạc, hoạt huyết chỉ thống, bổ can thận kiện cân cốt"</em>. YHCT không chỉ giảm đau triệu chứng mà còn phục hồi chức năng can thận, tăng cường khí huyết nuôi gân xương, từ đó xử lý nguyên nhân gốc rễ và phòng tái phát lâu dài.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể phong hàn thấp tý:</strong> Đau thắt lưng lan xuống mông và chân như điện giật, đau tăng khi gặp lạnh và ẩm ướt, giảm khi chườm ấm. Cơ lưng và mông co cứng, cảm giác tê nặng dọc chân. Rêu lưỡi trắng nhớt, mạch trầm hoãn. Hay gặp sau dầm mưa, ở phòng điều hòa lạnh nhiều hoặc bưng vác nặng trong trời lạnh. Hướng điều trị: khu phong tán hàn, trừ thấp thông lạc.</li>
  <li><strong>Thể thấp nhiệt trở lạc:</strong> Đau thắt lưng và chân dữ dội, vùng đau nóng rát, không chịu được chườm ấm, người sốt nhẹ hoặc nóng trong người, tiểu vàng. Rêu lưỡi vàng nhớt, mạch hoạt sác. Hay gặp trong mùa hè nóng ẩm hoặc người có thể trạng nhiệt. Hướng điều trị: thanh nhiệt trừ thấp, thông lạc chỉ thống.</li>
  <li><strong>Thể khí trệ huyết ứ:</strong> Đau cố định như kim châm, vị trí đau không di chuyển, đau tăng về đêm và khi ấn vào. Thường xuất hiện sau chấn thương, bưng vác sai tư thế hoặc ngồi lâu. Lưỡi tím hoặc có điểm ứ huyết, mạch sáp. Hướng điều trị: hành khí hoạt huyết, hóa ứ thông lạc.</li>
  <li><strong>Thể can thận âm hư:</strong> Đau mỏi âm ỉ kéo dài, tăng về chiều tối và sau lao động, kèm ù tai, hoa mắt, mỏi gối, miệng khô, mồ hôi trộm ban đêm. Lưỡi đỏ ít rêu, mạch tế sác. Hay gặp ở người cao tuổi hoặc làm việc trí óc kéo dài. Hướng điều trị: tư bổ can thận, dưỡng âm thông lạc.</li>
  <li><strong>Thể thận dương hư:</strong> Đau lưng chân lạnh, đặc biệt tệ hơn vào mùa đông, sợ lạnh toàn thân, tay chân lạnh, tiểu đêm nhiều, người uể oải thiếu sức. Lưỡi nhạt bệu rêu trắng, mạch trầm trì. Hướng điều trị: ôn thận trợ dương, cường cân kiện cốt.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị</h2>
<p>Phác đồ huyệt cốt lõi điều trị đau thần kinh tọa — thầy thuốc sẽ gia giảm và phối hợp điện châm, cứu ngải hoặc giác hơi tùy từng thể bệnh:</p>
<ul>
  <li><strong>Hoàn khiêu (GB30):</strong> Ở mông, tại điểm nối 1/3 ngoài và 2/3 trong đường nối đỉnh xương cùng với mấu chuyển lớn xương đùi. Huyệt quan trọng nhất điều trị đau thần kinh tọa — thông kinh hoạt lạc, hành khí giảm đau, trực tiếp tác động vào điểm xuất phát của dây thần kinh hông to.</li>
  <li><strong>Ủy trung (BL40):</strong> Chính giữa nếp khoeo. Huyệt lạc của kinh Bàng quang, hội huyệt của huyết — thư cân hoạt lạc, giảm co cứng cơ và đau lan dọc mặt sau chân. Cổ nhân nói: <em>"Yêu bối ủy trung cầu"</em> — bệnh lưng lưng tìm huyệt Ủy trung.</li>
  <li><strong>Dương lăng tuyền (GB34):</strong> Trước và dưới đầu xương mác, dưới đầu gối ngoài. Hội huyệt của gân — thư cân giải co thắt, thông lợi kinh Đởm chạy dọc mặt ngoài chân. Đặc biệt hiệu quả khi đau lan theo mặt ngoài đùi và bắp chân.</li>
  <li><strong>Côn lôn (BL60):</strong> Giữa đỉnh mắt cá ngoài và bờ ngoài gân gót. Thông kinh hoạt lạc, chỉ thống — huyệt vị xa cuối đường kinh Bàng quang, tăng hiệu quả điều trị toàn bộ đường đi của dây thần kinh hông to mặt sau.</li>
  <li><strong>Thận du (BL23):</strong> Cạnh cột sống, ngang đốt thắt lưng L2, cách gai sống 1,5 thốn. Du huyệt của Thận — bổ thận mạnh gân xương, điều trị gốc rễ trong thể can thận hư. Kết hợp cứu ngải 15 phút tại huyệt này với thể thận dương hư.</li>
  <li><strong>Đại trường du (BL25) và Tiểu trường du (BL27):</strong> Cạnh cột sống ngang L4 và S1 tương ứng. Thông kinh giảm đau vùng thắt lưng thấp và mông — đặc biệt hiệu quả khi có triệu chứng đau khu trú vùng L4-S1 (nguyên nhân thường gặp nhất của đau thần kinh tọa).</li>
</ul>
<p>Thể phong hàn thấp: kết hợp <em>cứu ngải</em> Hoàn khiêu (GB30) và Thận du (BL23) 15–20 phút; có thể thêm <em>giác hơi</em> vùng thắt lưng. Thể huyết ứ: điện châm tần số thấp (2Hz) trên huyệt chính tạo cảm giác tê buồn lan dọc chân. Thể thấp nhiệt: châm tả pháp, không cứu ngải.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Ấn huyệt Ủy trung (BL40):</strong> Ngồi duỗi thẳng chân hoặc nằm sấp, dùng ngón cái ấn điểm chính giữa nếp khoeo mỗi bên 1–2 phút, sáng và tối. Huyệt này rất nhạy cảm — khi ấn đúng sẽ có cảm giác tê buồn lan xuống bắp chân, đây là dấu hiệu đúng huyệt. Không ấn mạnh đột ngột khi đang trong cơn đau cấp.</li>
  <li><strong>Chườm ấm ngải cứu thắt lưng:</strong> Nướng nhẹ một nắm ngải cứu tươi hoặc dùng túi muối rang, chườm vùng thắt lưng và mông 15–20 phút trước khi ngủ — chỉ áp dụng với thể phong hàn thấp (đau giảm khi ấm). Không chườm nóng nếu vùng đau đang nóng rát (thể thấp nhiệt).</li>
  <li><strong>Bài tập kéo giãn nhẹ dây thần kinh tọa:</strong> Nằm ngửa, co gối bên đau lên ngực giữ 30 giây, thả ra, lặp lại 5–10 lần mỗi tối. Bài tập này giúp giải phóng áp lực lên rễ thần kinh và tăng tuần hoàn vùng thắt lưng. Dừng ngay nếu đau tăng.</li>
  <li><strong>Tư thế ngủ và sinh hoạt đúng:</strong> Nằm nghiêng bên lành, kẹp gối mỏng giữa hai đầu gối để giảm xoắn vặn vùng thắt lưng. Tránh ngồi bắt chân chéo và ngồi liên tục quá 45 phút — đứng dậy đi bộ nhẹ 2–3 phút giữa các giờ làm việc để tránh ứ trệ khí huyết kinh lạc vùng lưng.</li>
  <li><strong>Thực phẩm bổ can thận hỗ trợ điều trị:</strong> Mè đen, đậu đen, óc chó, thịt heo thận — bổ thận ích tinh; cháo đậu đen hạt sen ăn sáng 3–4 lần/tuần. Kiêng rượu bia, thức khuya và bưng vác nặng trong thời gian điều trị.</li>
</ul>

<div class="art-cta-box">
  <p>Đau thần kinh tọa kéo dài ảnh hưởng nghiêm trọng đến sinh hoạt và chất lượng cuộc sống — điều trị sớm và đúng thể bệnh giúp rút ngắn thời gian phục hồi và phòng tái phát hiệu quả. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm sẽ tứ chẩn hợp tham, xác định thể bệnh và áp dụng phác đồ châm cứu điện châm kết hợp xoa bóp bấm huyệt và thuốc YHCT phù hợp từng người. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 12,
    slug: "an-uong-theo-ngu-tang-yhct",
    date: "2026-06-15",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Ăn uống theo ngũ tạng Y học cổ truyền: Thực phẩm bổ đúng tạng, phòng bệnh từ gốc",
    excerpt: "YHCT chia thức ăn theo ngũ vị — ngũ sắc tương ứng ngũ tạng: chua bổ can, đắng dưỡng tâm, ngọt kiện tỳ, cay bổ phế, mặn bổ thận. Ăn đúng tạng là phòng bệnh từ gốc rễ.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Trong Y học cổ truyền, thức ăn không chỉ cung cấp dinh dưỡng mà còn là phương tiện <strong>điều hòa ngũ tạng</strong>. Theo học thuyết <strong>ngũ hành — ngũ tạng — ngũ vị</strong>, mỗi vị thực phẩm có sự tương ứng với một tạng cụ thể: vị <em>chua</em> vào Can, vị <em>đắng</em> vào Tâm, vị <em>ngọt</em> vào Tỳ, vị <em>cay</em> vào Phế, vị <em>mặn</em> vào Thận. Tương tự, ngũ sắc của thực phẩm cũng tương ứng ngũ tạng: xanh (Can), đỏ (Tâm), vàng (Tỳ), trắng (Phế), đen (Thận).</p>
<p>Nguyên tắc dưỡng sinh cốt lõi: <em>"Dĩ thực vi dược"</em> — lấy thức ăn làm thuốc. Ăn uống đúng theo ngũ tạng không chỉ bổ dưỡng từng tạng phủ mà còn phòng ngừa bệnh tật, làm chậm lão hóa và tăng cường chính khí toàn thân.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Can hư (thiếu thực phẩm xanh, ít đạm):</strong> Mắt khô mờ, móng tay giòn dễ gãy, gân cơ co rút, kinh nguyệt ít màu nhạt, dễ cáu gắt. Can khai khiếu ở mắt, chủ gân — thiếu dưỡng chất bổ Can ảnh hưởng thị lực và gân cơ. Hướng điều trị: bổ can dưỡng huyết bằng thực phẩm vị chua, màu xanh đậm.</li>
  <li><strong>Tâm hư (ít thực phẩm đỏ, thiếu sắt):</strong> Tim hồi hộp, hay quên, mất ngủ, da xanh xao. Tâm chủ huyết mạch và thần minh — nuôi dưỡng Tâm đúng cách cải thiện tuần hoàn và giấc ngủ. Hướng điều trị: dưỡng tâm an thần bằng thực phẩm vị đắng, màu đỏ.</li>
  <li><strong>Tỳ hư (ăn uống thất thường, đồ lạnh nhiều):</strong> Ăn kém chóng no, bụng đầy, người mệt mỏi, cơ nhục mềm nhão, da vàng nhợt. Tỳ chủ vận hóa và cơ nhục — ăn uống đúng tỳ là nền tảng sức khỏe toàn thân. Hướng điều trị: kiện tỳ ích khí bằng thực phẩm vị ngọt nhạt, màu vàng.</li>
  <li><strong>Phế hư (ít thực phẩm trắng, thiếu độ ẩm):</strong> Ho khan ít đờm, da khô nứt nẻ, dễ cảm lạnh, giọng yếu. Phế chủ bì mao và khí — bổ phế tăng sức đề kháng và bảo vệ đường hô hấp. Hướng điều trị: bổ phế nhuận táo bằng thực phẩm vị cay nhẹ, màu trắng.</li>
  <li><strong>Thận hư (ăn quá nhạt hoặc quá kiêng):</strong> Mỏi lưng gối, ù tai, tóc bạc sớm, tiểu nhiều đêm, sinh lực giảm sút. Thận tàng tinh và chủ cốt tủy — bổ thận là bổ gốc rễ sinh mệnh. Hướng điều trị: bổ thận ích tinh bằng thực phẩm vị mặn nhạt, màu đen.</li>
</ul>

<h2>Phương pháp điều trị / Thực phẩm theo từng tạng</h2>
<p>Bảng thực phẩm bổ ngũ tạng theo YHCT — áp dụng mỗi ngày để dưỡng sinh phòng bệnh:</p>
<ul>
  <li><strong>Bổ Can (vị chua — màu xanh):</strong> Gan lợn, rau bina, cải bó xôi, táo xanh, kỷ tử, mơ, Đương quy (bổ huyết). Mỗi tuần ăn gan 1–2 lần, rau xanh đậm 200–300g/ngày. Đặc biệt tốt vào mùa xuân khi Can khí vượng. Người mắt mờ, kinh nguyệt không đều ưu tiên tăng nhóm này.</li>
  <li><strong>Dưỡng Tâm (vị đắng — màu đỏ):</strong> Táo đỏ, long nhãn, hạt sen, khổ qua (mướp đắng), dâu tây, cà chua, đan sâm (vị thuốc). Trà long nhãn táo đỏ uống buổi chiều. Tốt nhất vào mùa hè — Tâm kinh vượng mạnh. Người mất ngủ hồi hộp ưu tiên nhóm này.</li>
  <li><strong>Kiện Tỳ (vị ngọt nhạt — màu vàng):</strong> Khoai lang vàng, bí đỏ, củ mài (hoài sơn), hạt ý dĩ, đại táo, gạo tẻ, Đảng sâm. Cháo củ mài ý dĩ ăn sáng 3–4 lần/tuần là bài thuốc dân gian kiện tỳ đơn giản nhất. Tốt nhất vào cuối hè — Tỳ thổ vượng.</li>
  <li><strong>Bổ Phế (vị cay nhẹ — màu trắng):</strong> Bạch mộc nhĩ (nấm tuyết), lê, củ năng, ngó sen, hạt hạnh nhân, Bách hợp, Sa sâm (vị thuốc). Canh bạch mộc nhĩ lê táo đỏ 2–3 lần/tuần nhuận phế hiệu quả, tốt nhất mùa thu khi khí hậu hanh khô. Người da khô ho khan ưu tiên nhóm này.</li>
  <li><strong>Bổ Thận (vị mặn nhạt — màu đen):</strong> Mè đen, đậu đen, nấm đen, hà thủ ô, óc chó, thịt heo thận, Thục địa, Sơn thù du (vị thuốc). Cháo đậu đen mè đen buổi sáng hoặc óc chó ngâm mật ong bổ thận ích tinh, tốt nhất vào mùa đông — Thận kinh vượng. Người mỏi lưng tóc bạc sớm ưu tiên nhóm này.</li>
</ul>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Áp dụng nguyên tắc "ăn theo ngũ sắc":</strong> Bữa ăn hàng ngày nên có đủ 5 màu: xanh (rau lá xanh), đỏ (cà chua / thịt đỏ ít), vàng (bí / khoai lang), trắng (cơm / đậu phụ / nấm trắng), đen (mè đen / nấm đen / đậu đen). Đây là cách đơn giản nhất để nuôi dưỡng đủ ngũ tạng mỗi ngày.</li>
  <li><strong>Ăn theo mùa — thuận thiên:</strong> Xuân — rau xanh bổ Can; Hè — thực phẩm đỏ dưỡng Tâm thanh nhiệt; Cuối hè — thực phẩm vàng nhạt kiện Tỳ; Thu — thực phẩm trắng bổ Phế nhuận táo; Đông — thực phẩm đen bổ Thận ích tinh. Nguyên tắc: <em>"Nhân thiên hợp nhất"</em> — sống thuận theo thời tiết.</li>
  <li><strong>Kiêng kị: không ăn thiên lệch một vị:</strong> Chua quá hại tỳ, đắng quá hại phế, ngọt quá hại thận, cay quá hại can, mặn quá hại tâm. YHCT nhấn mạnh <em>"ngũ vị điều hòa"</em> — cân bằng là nền tảng, không tuyệt đối kiêng hay ăn quá nhiều bất kỳ vị nào.</li>
  <li><strong>Giờ ăn theo đồng hồ sinh học YHCT:</strong> Bữa sáng 7–9h (Vị kinh vượng) — ăn đủ chất; Bữa trưa 11–13h (Tâm kinh vượng) — ăn vừa phải; Bữa tối trước 19h — ăn nhẹ. Không ăn khuya sau 21h khi tỳ vị đã vào trạng thái nghỉ ngơi.</li>
  <li><strong>Bấm huyệt Túc tam lý (ST36) trước bữa ăn:</strong> Dưới lồi củ xương chày 3 thốn, ngoài mào chày 1 thốn — xoa ấn 1 phút mỗi bên trước bữa ăn chính để kích thích tỳ vị vận hóa tốt hơn, tăng hấp thu dinh dưỡng từ thực phẩm.</li>
</ul>

<div class="art-cta-box">
  <p>Ăn uống theo ngũ tạng là nghệ thuật dưỡng sinh lâu đời nhất của YHCT — nhưng khi tạng phủ đã suy nhược rõ rệt, cần thăm khám để xác định tạng nào cần bổ ưu tiên và phối hợp thuốc YHCT phù hợp. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm sẽ tứ chẩn hợp tham, xác định thể trạng và hướng dẫn chế độ ăn uống cá nhân hóa theo YHCT kết hợp phác đồ điều trị toàn diện. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 11,
    slug: "tu-quan-tu-thang-bo-khi-yhct",
    date: "2026-06-14",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Tứ quân tử thang — Bài thuốc bổ khí nền tảng của Y học cổ truyền",
    excerpt: "Tứ quân tử thang là bài thuốc bổ khí kinh điển nhất Đông y, dùng điều trị tỳ vị khí hư: mệt mỏi, ăn kém, phân lỏng, sức đề kháng yếu — nền tảng của hàng trăm bài thuốc bổ khí khác.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p><strong>Tứ quân tử thang</strong> (四君子湯) là bài thuốc bổ khí nền tảng nhất trong kho tàng Y học cổ truyền, được ghi chép lần đầu trong "Thái bình huệ dân hòa tễ cục phương" (triều Tống). Tên gọi "tứ quân tử" ví von bốn vị dược liệu như bốn vị quân tử — đức hạnh điều độ, bổ mà không mãnh liệt, hiệu quả bền vững mà không gây tác dụng phụ. Đây là bài thuốc điều trị căn bản hội chứng <strong>tỳ vị khí hư</strong> — khi tỳ vị suy nhược, không đủ sức vận hóa thủy cốc sinh ra khí huyết nuôi dưỡng toàn thân.</p>
<p>Nguyên tắc cốt lõi: <em>"Ích khí kiện tỳ"</em> — bồi bổ trung khí, tăng cường chức năng vận hóa của tỳ vị. Hàng trăm bài thuốc danh tiếng trong lịch sử Đông y đều lấy Tứ quân tử thang làm nền tảng: <em>Lục quân tử thang</em> (thêm Trần bì, Bán hạ để hóa đàm), <em>Sâm linh bạch truật tán</em> (thêm nhiều vị kiện tỳ thấm thấp), <em>Bổ trung ích khí thang</em> (thêm Hoàng kỳ, Thăng ma, Sài hồ để thăng đề trung khí) — tất cả đều xuất phát từ bốn vị thuốc cơ bản này.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Tỳ vị khí hư điển hình:</strong> Ăn ít chóng no, bụng đầy trướng sau ăn, người mệt mỏi thiếu sức, nói nhỏ tiếng, phân lỏng nát hoặc đại tiện không thành khuôn, da xanh nhợt, lưỡi nhạt bệu rêu trắng mỏng, mạch hoãn nhược. Đây là chỉ định cốt lõi của Tứ quân tử thang. Hướng điều trị: ích khí kiện tỳ, hòa vị.</li>
  <li><strong>Khí hư vệ biểu bất cố:</strong> Tỳ khí hư không sinh được vệ khí đủ mạnh để bảo vệ cơ thể — biểu hiện hay đổ mồ hôi tự nhiên (tự hãn) dù không vận động, dễ bị cảm lạnh tái đi tái lại, sau cảm lâu khỏi. Hướng điều trị: bổ khí cố biểu (gia thêm Hoàng kỳ, Phòng phong).</li>
  <li><strong>Khí hư kèm đàm thấp:</strong> Tỳ khí hư không vận hóa được thủy thấp, sinh đàm thấp nội trở — người nặng nề, ngực tức đờm nhiều, buồn nôn, đầu nặng chóng mặt, rêu lưỡi nhờn dày. Dùng <em>Lục quân tử thang</em> (Tứ quân + Trần bì + Bán hạ chế) — phối hợp kiện tỳ với hóa đàm.</li>
  <li><strong>Trung khí hạ hãm:</strong> Tỳ khí hư nặng không còn sức thăng đề — sa dạ dày, sa trực tràng, sa tử cung, tiêu chảy kéo dài mạn tính, kiệt sức sau bệnh nặng hoặc phẫu thuật. Dùng <em>Bổ trung ích khí thang</em> (biến thể từ Tứ quân, thêm Hoàng kỳ, Sài hồ, Thăng ma) để thăng đề trung khí.</li>
  <li><strong>Khí huyết lưỡng hư:</strong> Tỳ không sinh huyết được — mệt mỏi, da xanh vàng, hoa mắt chóng mặt, tim hồi hộp, kinh nguyệt ít màu nhạt. Phối hợp với bài bổ huyết (thêm Đương quy, Bạch thược, Thục địa) thành <em>Bát trân thang</em>.</li>
</ul>

<h2>Bốn vị dược liệu và vai trò trong bài thuốc</h2>
<p>Cấu trúc bài thuốc theo nguyên tắc <em>quân — thần — tá — sứ</em>:</p>
<ul>
  <li><strong>Nhân sâm / Đảng sâm (quân dược):</strong> Nhân sâm (Panax ginseng) vị ngọt, tính ôn — đại bổ nguyên khí, kiện tỳ ích phế, sinh tân. Liều 9–15g. Trong lâm sàng thường thay bằng <em>Đảng sâm</em> (Codonopsis pilosula) liều 15–30g vì kinh tế và ít tác dụng phụ hơn — tác dụng bổ tỳ khí tương đương, nhưng không bổ tâm phế mạnh bằng Nhân sâm.</li>
  <li><strong>Bạch truật (thần dược):</strong> Atractylodes macrocephala, vị ngọt đắng, tính ôn — kiện tỳ táo thấp, ích khí cố biểu, an thai. Liều 9–15g. Hỗ trợ Nhân sâm bổ tỳ, đồng thời trừ thấp để tỳ vị không bị thấp khốn trở nên trệ trệ.</li>
  <li><strong>Phục linh (tá dược):</strong> Poria cocos, vị ngọt nhạt, tính bình — kiện tỳ lợi thấp, thẩm thấp hóa đàm, an thần. Liều 9–15g. Phối hợp với Bạch truật thấm thấp, phòng Nhân sâm và Bạch truật bổ mà gây trệ thấp.</li>
  <li><strong>Cam thảo chích (sứ dược):</strong> Glycyrrhiza uralensis sao mật, vị ngọt, tính ôn — bổ trung khí, hòa vị, điều hòa các vị dược liệu, giảm độc tính. Liều 6g. Cam thảo chích (sao với mật ong) tăng tác dụng bổ khí so với Cam thảo sống.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị phối hợp</h2>
<p>Tứ quân tử thang đạt hiệu quả tối ưu khi kết hợp châm cứu vào các huyệt kiện tỳ bổ khí sau đây — thầy thuốc sẽ gia giảm theo từng thể bệnh:</p>
<ul>
  <li><strong>Túc tam lý (ST36):</strong> Dưới lồi củ xương chày 3 thốn, ngoài mào chày 1 thốn. Huyệt bổ khí toàn thân quan trọng nhất — kiện tỳ vị, tăng hấp thu, tăng miễn dịch. Điện châm bổ pháp hoặc cứu ngải 15 phút tại huyệt này hiệp đồng mạnh với thuốc bổ khí.</li>
  <li><strong>Tỳ du (BL20):</strong> Cạnh cột sống lưng ngang đốt T11, cách gai sống 1,5 thốn. Du huyệt của Tỳ — bổ tỳ khí trực tiếp, cải thiện chức năng vận hóa. Kết hợp cứu ngải 10–15 phút tại huyệt này với thuốc uống sẽ rút ngắn thời gian điều trị.</li>
  <li><strong>Vị du (BL21):</strong> Cạnh cột sống lưng ngang đốt T12, cách gai sống 1,5 thốn. Du huyệt của Vị — điều hòa vị khí, giảm đầy bụng, cải thiện tiêu hóa.</li>
  <li><strong>Trung quản (CV12):</strong> Đường giữa bụng, giữa rốn và mũi ức (4 thốn trên rốn). Mộ huyệt của Vị, hội huyệt của phủ — điều hòa trung tiêu, kiện tỳ hòa vị. Cứu ngải hoặc điện châm bổ pháp.</li>
  <li><strong>Khí hải (CV6):</strong> Đường giữa bụng, dưới rốn 1,5 thốn. Bổ nguyên khí, tăng cường chính khí toàn thân — đặc biệt hiệu quả với thể trung khí hạ hãm và khí hư mạn tính. Cứu ngải 15–20 phút.</li>
</ul>
<p>Thể khí hư vệ biểu bất cố: gia châm thêm <em>Phế du (BL13), Phong môn (BL12)</em>. Thể trung khí hạ hãm: gia thêm <em>Bách hội (GV20)</em> — điện châm bổ pháp để thăng đề khí.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Cứu ngải huyệt Túc tam lý (ST36) và Khí hải (CV6):</strong> Dùng điếu ngải cứu cách mặt da 2–3cm, cứu ấm mỗi huyệt 10–15 phút, ngày 1 lần vào buổi sáng. Đây là phương pháp dân gian bổ khí lâu đời nhất trong YHCT — người xưa nói <em>"ba ngày cứu một lần Túc tam lý, thọ hơn thái sơn"</em>. Liệu trình 1–2 tháng.</li>
  <li><strong>Thực phẩm kiện tỳ bổ khí hàng ngày:</strong> Củ mài (hoài sơn) 30g + hạt sen 20g + ý dĩ 20g nấu cháo ăn sáng — bổ tỳ thận, trừ thấp, phù hợp dùng song song với thuốc. Đại táo 5–7 quả thêm vào trà hoặc cháo hàng ngày.</li>
  <li><strong>Kiêng kị khi dùng thuốc:</strong> Hạn chế đồ lạnh, sống, đồ ngọt béo nhiều — tỳ vị ưa ấm ghét hàn ẩm; những thứ này làm tỳ vị khó vận hóa, giảm tác dụng thuốc bổ. Không dùng chung với trà xanh đặc hoặc cà phê trong vòng 1 giờ sau khi uống thuốc.</li>
  <li><strong>Ăn uống đúng giờ và nhai kỹ:</strong> Tỳ vị hoạt động tốt nhất từ 7–9h (giờ Thìn — Vị kinh vượng) và 9–11h (Tỳ kinh vượng). Ăn sáng đúng giờ, nhai kỹ 20–30 lần mỗi miếng — hỗ trợ tỳ vị vận hóa, tăng hấp thu thuốc.</li>
  <li><strong>Liệu trình và theo dõi:</strong> Dùng 4–6 tuần mới thấy hiệu quả rõ rệt. Dấu hiệu thuốc có tác dụng: ăn ngon hơn, bụng không còn đầy sau ăn, phân thành khuôn, bớt mệt mỏi. Nếu sau 2 tuần bụng đầy hơn hoặc phân lỏng tăng, cần thăm khám lại để điều chỉnh.</li>
</ul>

<div class="art-cta-box">
  <p>Tứ quân tử thang dù là bài thuốc bổ kinh điển vẫn cần được thầy thuốc xác định đúng thể khí hư và gia giảm phù hợp — dùng sai thể hoặc khi đang có cảm mạo, thấp nhiệt có thể làm bệnh nặng thêm. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm sẽ tứ chẩn hợp tham, phân thể khí hư và bào chế bài thuốc gia giảm phù hợp với từng bệnh nhân — kết hợp châm cứu bổ pháp và cứu ngải để tăng tốc phục hồi. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 10,
    slug: "nhi-cham-giam-stress-lo-au-yhct",
    date: "2026-06-13",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Nhĩ châm giảm stress và lo âu: Liệu pháp không dùng thuốc từ Y học cổ truyền",
    excerpt: "Nhĩ châm — châm cứu vào huyệt vị tai — là liệu pháp YHCT không dùng thuốc, giúp giảm stress, lo âu, mất ngủ bằng cách điều hòa thần kinh thực vật và cân bằng tạng phủ.",
    readTime: 5,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Nhĩ châm (耳針 — châm cứu vào tai) là liệu pháp đặc biệt trong Y học cổ truyền, dựa trên quan điểm tai là nơi hội tụ của tất cả các kinh lạc và phản ánh toàn bộ cơ thể theo bản đồ huyệt nhĩ. Theo YHCT, tai liên hệ mật thiết với tạng <strong>Thận</strong> ("thận khai khiếu ở tai"), đồng thời thông qua kinh lạc kết nối với Can, Tâm và các tạng phủ khác. Khi stress và lo âu kéo dài, Can khí uất kết, Tâm thần thất dưỡng — nhĩ châm giải uất, an thần, phục hồi cân bằng thần kinh thực vật mà không cần dùng thuốc.</p>
<p>Nguyên tắc điều trị: <em>"Thông kinh lạc, điều khí cơ, bình can giải uất, an tâm định thần"</em>. Y học hiện đại xác nhận nhĩ châm có tác dụng điều tiết trục hạ đồi–tuyến yên–thượng thận, giảm cortisol (hormone stress), tăng endorphin — phù hợp với nguyên lý an thần của YHCT.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể can khí uất kết:</strong> Stress kéo dài do áp lực công việc, lo lắng không giải tỏa được. Biểu hiện: tức ngực thở dài, cáu gắt, đau đầu vùng thái dương, khó vào giấc, miệng đắng. Rêu lưỡi trắng hoặc vàng nhẹ, mạch huyền. Hướng điều trị: sơ can giải uất, lý khí an thần.</li>
  <li><strong>Thể tâm tỳ lưỡng hư:</strong> Lo âu mạn tính, suy nghĩ quá mức hao tổn tâm huyết và tỳ khí. Biểu hiện: lo lắng không lý do, tim hồi hộp, mất ngủ, mệt mỏi, ăn kém, hay quên. Lưỡi nhạt rêu trắng, mạch tế nhược. Hướng điều trị: kiện tỳ dưỡng tâm, bổ khí an thần.</li>
  <li><strong>Thể tâm thận bất giao:</strong> Lo âu kèm nóng bừng trong người, ra mồ hôi trộm, ù tai, mỏi lưng. Thường gặp ở phụ nữ tiền mãn kinh hoặc người làm việc quá sức kéo dài. Hướng điều trị: tư thận âm, giáng tâm hỏa, giao thông tâm thận.</li>
  <li><strong>Thể đàm khí uất kết:</strong> Lo âu kèm cảm giác vật gì chặn trong họng (mai hạch khí), đầu nặng chóng mặt, buồn nôn, rêu lưỡi nhờn dày. Hay gặp ở người béo phì hoặc ăn nhiều đồ béo ngọt. Hướng điều trị: hóa đàm giải uất, lý khí hòa trung.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị nhĩ châm</h2>
<p>Các huyệt nhĩ được chọn theo bản đồ phản chiếu tai — thầy thuốc dùng kim nhĩ châm nhỏ hoặc hạt từ dán kéo dài 3–5 ngày, kết hợp bấm huyệt thể châm tăng hiệu quả:</p>
<ul>
  <li><strong>Thần môn nhĩ (TF4 — Shenmen):</strong> Tam giác hố xoắn tai, phần trên. Huyệt an thần số một trong nhĩ châm — giảm lo âu, bồn chồn, mất ngủ. Nghiên cứu lâm sàng xác nhận kích thích huyệt này giảm lo âu trước phẫu thuật rõ rệt.</li>
  <li><strong>Tâm nhĩ (CO15 — Heart):</strong> Hố xoắn tai vùng giữa. Dưỡng tâm an thần, điều hòa nhịp tim, giảm hồi hộp đánh trống ngực do stress.</li>
  <li><strong>Giao cảm nhĩ (AH6a — Sympathetic):</strong> Chân cung đối tai trong, tiếp giáp gờ đối bình tai. Điều hòa hệ thần kinh thực vật, giảm phản ứng căng thẳng, hạ huyết áp tăng do stress.</li>
  <li><strong>Nội tiết nhĩ (CO18 — Endocrine):</strong> Bình tai, trong hố bình tai. Điều tiết hormone stress (cortisol), cân bằng trục nội tiết — tác dụng rõ với thể lo âu mạn tính kèm rối loạn kinh nguyệt hoặc mãn kinh.</li>
  <li><strong>Can nhĩ (CO12 — Liver):</strong> Hố xoắn tai vùng dưới. Sơ can giải uất, điều khí — huyệt quan trọng với thể can khí uất kết, hay cáu gắt, tức ngực.</li>
  <li><strong>Thận nhĩ (CO10 — Kidney):</strong> Hố xoắn tai dưới, gần cuống tai. Bổ thận an thần, cải thiện ù tai và lo âu thể thận hư.</li>
</ul>
<p>Thể tâm tỳ lưỡng hư: gia thêm <em>Tỳ nhĩ (CO13), Vị nhĩ (CO4)</em>. Thể đàm khí uất: gia thêm <em>Phế nhĩ (CO14)</em>. Kết hợp thể châm: <em>Nội quan (PC6), Thần môn (HT7), Thái xung (LR3)</em> để tăng hiệu quả toàn diện.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Bấm huyệt Thần môn nhĩ:</strong> Dùng ngón trỏ và ngón cái kẹp nhẹ vào tam giác hố xoắn tai (phần trên hõm tai), ấn và lăn tròn nhẹ 30–60 giây mỗi bên, 3–4 lần/ngày — đặc biệt hiệu quả khi cảm thấy căng thẳng đột ngột hoặc trước khi đi ngủ.</li>
  <li><strong>Xoa vành tai toàn bộ:</strong> Ngón cái sau tai, ngón trỏ trên mặt trước, kéo nhẹ và xoa dọc từ dái tai lên đến đỉnh tai rồi ngược lại 20–30 lần. Kích thích toàn bộ huyệt nhĩ, thư giãn hệ thần kinh tổng thể.</li>
  <li><strong>Bấm huyệt Nội quan (PC6):</strong> Mặt trong cổ tay, giữa hai gân, cách nếp cổ tay 2 thốn — ấn giữ 1 phút mỗi bên khi lo âu hoặc hồi hộp. Phối hợp tốt với nhĩ châm để tăng tác dụng dưỡng tâm an thần.</li>
  <li><strong>Kỹ thuật thở bụng 4-7-8:</strong> Hít vào bụng đếm 4 — nín thở đếm 7 — thở ra chậm đếm 8. Thực hiện 3–4 chu kỳ, 2 lần/ngày. Kích hoạt phó giao cảm, phù hợp với nguyên lý "kiện tỳ bổ phế, an tâm định thần" của YHCT.</li>
  <li><strong>Kiêng kị:</strong> Tránh cà phê và rượu khi đang điều trị lo âu — hai chất này kích thích Can hỏa, làm giảm tác dụng an thần. Không tự dùng nhĩ châm khi tai đang viêm, có vết thương hở hoặc phụ nữ có thai (một số huyệt nhĩ có thể kích thích tử cung).</li>
</ul>

<div class="art-cta-box">
  <p>Stress và lo âu kéo dài ảnh hưởng nghiêm trọng đến sức khỏe tổng thể — từ mất ngủ, suy giảm miễn dịch đến các bệnh tim mạch. Nhĩ châm kết hợp châm thể là liệu pháp an toàn, không gây lệ thuộc. Hãy đến thăm khám tại <strong>Phòng Khám YHCT Tâm Đức</strong> để được BS. Nguyễn Đức Tâm phân thể và áp dụng phác đồ nhĩ châm cá nhân hóa phù hợp với thể trạng của bạn. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 9,
    slug: "thoai-hoa-khop-goi-yhct-phan-the-dieu-tri",
    date: "2026-06-12",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Thoái hóa khớp gối theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Thoái hóa khớp gối là bệnh lý mạn tính phổ biến ở người trung niên và cao tuổi. YHCT phân thể cụ thể và điều trị bằng châm cứu, xoa bóp giúp giảm đau, cải thiện vận động hiệu quả.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Thoái hóa khớp gối (tất thống) trong Y học cổ truyền thuộc phạm trù <strong>tý chứng</strong> và <strong>cốt tý</strong> — bệnh do kinh lạc vùng gối bị tắc trở, khí huyết không thông, kết hợp với sự suy yếu của <strong>can thận</strong> theo tuổi tác. Theo YHCT, gân thuộc Can, xương thuộc Thận — khi can thận suy nhược, gân không được nhu dưỡng, xương không được tàng tinh, tà khí (phong hàn thấp hoặc đàm ứ) nhân cơ hội xâm nhập kinh lạc khớp gối gây đau.</p>
<p>Nguyên tắc điều trị: <em>"Bổ can thận, khu tà thông lạc, hoạt huyết chỉ thống"</em>. Khác với thuốc kháng viêm Tây y chỉ giảm triệu chứng, YHCT tác động vào gốc rễ bệnh — phục hồi chức năng can thận, tăng cường khí huyết nuôi dưỡng gân xương, từ đó kiểm soát đau lâu dài và làm chậm tiến triển thoái hóa.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể phong hàn thấp tý:</strong> Đau khớp gối tăng rõ khi gặp lạnh, ẩm ướt, trời mưa; giảm khi chườm ấm. Gối cứng buổi sáng, cảm giác nặng nề tê bì, không sưng đỏ. Rêu lưỡi trắng nhớt. Hay gặp khi thay đổi thời tiết đột ngột. Hướng điều trị: khu phong tán hàn, trừ thấp thông lạc.</li>
  <li><strong>Thể can thận âm hư:</strong> Đau mỏi gối âm ỉ kéo dài, tăng về chiều tối, kèm ù tai, hoa mắt, mỏi lưng, miệng khô họng táo, ra mồ hôi trộm ban đêm. Lưỡi đỏ ít rêu, mạch tế sác. Hay gặp ở người cao tuổi hoặc thể chất suy nhược. Hướng điều trị: tư bổ can thận, dưỡng âm mạnh gân cốt.</li>
  <li><strong>Thể thận dương hư:</strong> Đau mỏi gối lạnh, sợ lạnh toàn thân, chân tay lạnh, tiểu đêm nhiều, phân lỏng, người uể oải. Lưỡi nhạt bệu rêu trắng. Hướng điều trị: ôn bổ thận dương, cường cơ kiện cốt.</li>
  <li><strong>Thể khí trệ huyết ứ:</strong> Đau cố định như kim châm, sưng nề hoặc ứ dịch khớp sau chấn thương, cử động đau tăng, ấn đau nhiều hơn. Lưỡi tím hoặc có điểm ứ huyết. Hay gặp sau chấn thương cũ hoặc phẫu thuật khớp. Hướng điều trị: hành khí hoạt huyết, hóa ứ tiêu sưng.</li>
  <li><strong>Thể đàm thấp trở lạc:</strong> Gối sưng to mềm, nặng nề, người béo phì, chóng mặt đầu nặng, ăn kém. Rêu lưỡi nhớt dày. Hướng điều trị: hóa đàm trừ thấp, thông kinh tiêu sưng.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị</h2>
<p>Phác đồ huyệt nền tảng điều trị thoái hóa khớp gối — thầy thuốc sẽ gia giảm và phối hợp cứu ngải, điện châm tùy từng thể bệnh:</p>
<ul>
  <li><strong>Độc tỵ (ST35) và Ngoại tất nhãn (EX-LE5):</strong> Hai hõm hai bên gân bánh chè — huyệt cục bộ quan trọng nhất, trực tiếp thông khí huyết khớp gối, giảm sưng đau tại chỗ.</li>
  <li><strong>Dương lăng tuyền (GB34):</strong> Trước và dưới đầu xương mác, dưới đầu gối ngoài. Hội huyệt của gân — thư cân hoạt lạc, trừ thấp chỉ thống. Bắt buộc trong mọi thể bệnh khớp gối.</li>
  <li><strong>Âm lăng tuyền (SP9):</strong> Dưới lồi cầu trong xương chày, hõm dưới đầu trong xương chày. Kiện tỳ hóa thấp, lợi thủy tiêu sưng — đặc biệt hiệu quả khi gối có ứ dịch hoặc thể thấp.</li>
  <li><strong>Huyết hải (SP10):</strong> Mặt trong đùi, trên bờ trên xương bánh chè 2 thốn. Hoạt huyết hóa ứ, khu phong trừ thấp — huyệt quan trọng thể huyết ứ và phong thấp.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới lồi củ xương chày 3 thốn, ngoài mào chày 1 thốn. Kiện tỳ bổ khí, tăng cường chính khí — phối hợp trong mọi thể để tăng hiệu quả điều trị.</li>
  <li><strong>Thận du (BL23) và Can du (BL18):</strong> Cạnh cột sống lưng ngang L2 và T9. Bổ can thận, mạnh gân xương — dùng thêm trong thể can thận hư.</li>
</ul>
<p>Thể phong hàn thấp: kết hợp <em>cứu ngải</em> tại Độc tỵ và Dương lăng tuyền (GB34) 15–20 phút. Thể thận dương hư: cứu thêm <em>Mệnh môn (GV4)</em>. Thể huyết ứ: điện châm tần số thấp kết hợp giác hơi vùng gối.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Xoa bóp quanh bánh chè:</strong> Ngồi duỗi thẳng chân, dùng ngón cái và ngón trỏ xoa tròn quanh bánh chè 50–100 lần mỗi ngày — kích thích tuần hoàn tại khớp, giảm cứng khớp buổi sáng.</li>
  <li><strong>Ấn huyệt Dương lăng tuyền (GB34):</strong> Ấn giữ 1–2 phút mỗi bên buổi sáng và tối — thư gân, giảm căng cứng cơ quanh gối hiệu quả.</li>
  <li><strong>Chườm ấm ngải cứu:</strong> Nướng nhẹ một nắm ngải cứu tươi hoặc dùng túi muối rang, chườm vùng gối 15–20 phút trước khi ngủ — đặc biệt hiệu quả với thể phong hàn thấp. Không chườm khi gối đang sưng nóng đỏ cấp tính.</li>
  <li><strong>Bài tập dưỡng sinh nhẹ:</strong> Ngồi trên ghế, duỗi thẳng rồi co gối lần lượt 20 lần mỗi chân; đứng dậy ngồi xuống chậm rãi 10 lần — duy trì biên độ khớp mà không gây tải trọng đột ngột.</li>
  <li><strong>Kiêng kị:</strong> Tránh leo cầu thang nhiều, ngồi xổm lâu, mang vác nặng — các tư thế này tăng áp lực khớp gối gấp 4–6 lần trọng lượng cơ thể, đẩy nhanh thoái hóa.</li>
</ul>

<div class="art-cta-box">
  <p>Thoái hóa khớp gối không thể đảo ngược hoàn toàn, nhưng YHCT có thể kiểm soát đau, cải thiện vận động và làm chậm tiến triển bệnh hiệu quả. Nếu bạn đang chịu đựng đau gối mạn tính ảnh hưởng đến sinh hoạt hàng ngày, hãy đến thăm khám tại <strong>Phòng Khám YHCT Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ tứ chẩn hợp tham, xác định thể bệnh và xây dựng phác đồ châm cứu, xoa bóp cùng thuốc YHCT phù hợp. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 8,
    slug: "duong-sinh-mua-he-bao-ve-suc-khoe-yhct",
    date: "2026-06-11",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Dưỡng sinh theo mùa hè: Bí quyết bảo vệ sức khỏe mùa nóng theo Y học cổ truyền",
    excerpt: "Mùa hè dương khí thịnh, nhiệt tà và thử thấp dễ xâm nhập gây hao tổn tâm khí. YHCT có bộ nguyên tắc dưỡng sinh toàn diện giúp thích nghi với nắng nóng, bảo vệ tỳ vị và an thần.",
    readTime: 5,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Trong hệ thống <strong>ngũ hành — ngũ tạng</strong> của YHCT, mùa hè ứng với hành <strong>Hỏa</strong>, tạng <strong>Tâm</strong> và phủ <strong>Tiểu trường</strong>. Đây là mùa dương khí đạt đỉnh, cơ thể trao đổi chất mạnh nhất trong năm. Tuy nhiên, nhiệt tà và thử thấp (nóng kết hợp ẩm) là hai loại tà khí đặc trưng dễ xâm nhập, gây <em>hao khí thương âm</em> — mất nước điện giải, suy giảm chính khí và tổn thương tỳ vị nếu không dưỡng sinh đúng cách.</p>
<p>Nguyên tắc cốt lõi của YHCT mùa hè: <em>"Dưỡng tâm thanh nhiệt, kiện tỳ hóa thấp, ích khí sinh tân"</em> — giữ tâm an tĩnh, thanh nhiệt cơ thể, kiện tỳ chống thấp và bù đắp khí âm bị hao tổn do mồ hôi.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Trúng thử (say nắng, cảm nóng):</strong> Tiếp xúc nắng gắt quá lâu — sốt cao đột ngột, đổ mồ hôi dầm dề, khát nước dữ dội, đầu váng buồn nôn, thậm chí ngất. Cơ chế: thử nhiệt đốt tân dịch, khí theo hãn thoát ra ngoài. Hướng điều trị: thanh thử ích khí, sinh tân chỉ khát.</li>
  <li><strong>Thử thấp nội trợ (nắng nóng kết ẩm):</strong> Mệt mỏi nặng nề, ăn kém không ngon, đầy bụng ợ hơi, tiêu chảy phân lỏng hoặc sệt, người ẩm nhớp nháp. Rêu lưỡi vàng dày nhờn. Hay gặp ở người làm ngoài nắng rồi vào phòng lạnh uống nước đá. Hướng điều trị: thanh thử hóa thấp, kiện tỳ hòa vị.</li>
  <li><strong>Tâm hỏa thịnh (nhiệt nung nấu tâm thần):</strong> Bồn chồn khó ngủ, miệng lở loét, tiểu vàng ít buốt, nóng bừng trong người đặc biệt về chiều. Hay gặp ở người căng thẳng, làm việc áp lực cao vào mùa nóng. Hướng điều trị: thanh tâm tả hỏa, an thần.</li>
  <li><strong>Khí âm lưỡng hư (hao tổn kéo dài):</strong> Ra mồ hôi nhiều và kéo dài làm cạn kiệt cả khí lẫn âm dịch — mệt lả, thở ngắn, da khô môi nứt, tim hồi hộp, đuối sức không hồi phục sau nghỉ ngơi. Hướng điều trị: ích khí dưỡng âm, sinh tân bổ dịch.</li>
</ul>

<h2>Phương pháp điều trị / Huyệt vị dưỡng sinh mùa hè</h2>
<p>Bộ huyệt dưỡng sinh mùa hè — xoa bóp bấm huyệt hàng ngày để phòng bệnh và tăng cường thích nghi với nóng:</p>
<ul>
  <li><strong>Hợp cốc (LI4):</strong> Mu bàn tay, giữa đốt bàn tay 1 và 2. Hành khí hoạt huyết, thanh nhiệt giải biểu, tăng vệ khí — huyệt phòng bệnh mùa hè số một. Ấn xoa 2 phút mỗi bên buổi sáng.</li>
  <li><strong>Nội quan (PC6):</strong> Mặt trong cổ tay, giữa hai gân, lên 2 thốn. Dưỡng tâm an thần, hòa vị giáng nghịch — giảm bồn chồn, chống say nắng buồn nôn. Ấn giữ 1 phút mỗi bên.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới lồi củ xương chày 3 thốn, ngoài mào chày 1 thốn. Kiện tỳ bổ khí, tăng chính khí chống thấp nhiệt — bổ sung năng lượng hao tổn do nóng. Xoa tròn 2 phút mỗi bên.</li>
  <li><strong>Tam âm giao (SP6):</strong> Mắt cá trong lên 3 thốn, sau bờ xương chày. Kiện tỳ hóa thấp, dưỡng âm thanh nhiệt — huyệt thiết yếu khi thử thấp gây tiêu hóa rối loạn và da khô. Ấn xoa 1–2 phút mỗi bên.</li>
  <li><strong>Đại chùy (GV14):</strong> Đường giữa lưng, dưới gai đốt sống C7. Thanh nhiệt giải thử, thông dương khu tà — ấn nhẹ hoặc cạo gió vùng này khi có dấu hiệu cảm nóng nhẹ.</li>
</ul>
<p>Thể tâm hỏa thịnh: gia thêm <em>Thần môn (HT7), Thiếu phủ (HT8)</em>. Thể thử thấp tiêu hóa kém: gia thêm <em>Trung quản (CV12), Thiên khu (ST25)</em>.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Trà thanh nhiệt mùa hè uống hàng ngày:</strong> Đậu xanh cả vỏ 30g + lá sen khô 10g + cam thảo 5g sắc với 1 lít nước, để nguội uống cả ngày. Thanh thử lợi thấp, bổ dịch — thay thế nước lạnh rất hiệu quả.</li>
  <li><strong>Ngủ trưa ngắn 20–30 phút:</strong> Giờ Ngọ (11h–13h) là thời điểm tâm kinh vượng nhất — ngủ trưa ngắn giúp dưỡng tâm khí, phục hồi năng lượng cho buổi chiều mà không gây ngủ li bì.</li>
  <li><strong>Tránh tắm lạnh ngay sau khi đổ mồ hôi:</strong> Mồ hôi ra nhiều thì lỗ chân lông đang mở, tắm lạnh ngay khiến hàn tà xâm nhập vào kinh cơ — gây đau nhức, cảm lạnh. Nghỉ 15–20 phút cho mồ hôi khô rồi mới tắm.</li>
  <li><strong>Kiêng đồ lạnh quá mức:</strong> Tỳ vị YHCT ưa ấm ghét hàn — uống nước đá, ăn kem liên tục làm tỳ vị hư hàn, sinh thấp, gây tiêu chảy và mệt mỏi mạn tính. Thay bằng nước mát thường (không đá) hoặc trà thanh nhiệt.</li>
  <li><strong>Dưỡng tâm bằng tĩnh tâm buổi sáng:</strong> Ngồi yên 5–10 phút sau khi ngủ dậy, thở chậm sâu, không nhìn điện thoại ngay — YHCT nói <em>"tâm tĩnh tự nhiên lương"</em>: tâm an tĩnh thì cơ thể mát mẻ từ bên trong dù trời nóng.</li>
</ul>

<div class="art-cta-box">
  <p>Mùa hè nóng bức là thời điểm tỳ vị và tâm khí dễ tổn thương nhất trong năm — dưỡng sinh đúng cách ngay từ đầu mùa sẽ giúp bạn vượt qua mùa nóng khỏe mạnh, tràn đầy sinh lực. Nếu bạn thường xuyên mệt mỏi, ăn kém, mất ngủ vào mùa hè hoặc hay bị say nắng tái phát, hãy đến thăm khám tại <strong>Phòng Khám YHCT Tâm Đức</strong>. BS. Nguyễn Đức Tâm sẽ tứ chẩn hợp tham và xây dựng phác đồ dưỡng sinh cá nhân hóa phù hợp với thể trạng của bạn. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 7,
    slug: "luc-vi-dia-hoang-hoan-bo-than-am",
    date: "2026-06-10",
    category: "thuoc-yhct",
    categoryLabel: "Thuốc YHCT",
    icon: "🌿",
    gradient: "g-fire",
    title: "Lục vị địa hoàng hoàn — Bài thuốc bổ thận âm kinh điển của Y học cổ truyền",
    excerpt: "Lục vị địa hoàng hoàn là bài thuốc bổ thận âm nổi tiếng nhất Đông y, dùng điều trị thận âm hư gây mỏi lưng gối, ù tai, ra mồ hôi trộm và lão hóa sớm.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p><strong>Lục vị địa hoàng hoàn</strong> (六味地黃丸) là bài thuốc kinh điển do danh y Tiền Ất (triều Tống) soạn ra, bắt nguồn từ bài <em>Thận khí hoàn</em> trong "Kim quỹ yếu lược" của Trương Trọng Cảnh — bằng cách bỏ hai vị ôn dương là Phụ tử và Quế chi, chỉ giữ lại sáu vị có tác dụng tư bổ thận âm thuần túy. Sau hơn nghìn năm, đây vẫn là bài thuốc được dùng rộng rãi nhất trong điều trị <strong>thận âm hư</strong> — trạng thái thiếu hụt âm dịch ở Thận, biểu hiện bằng hội chứng hư nhiệt và suy giảm chức năng tàng tinh.</p>
<p>Nguyên tắc cấu tạo bài thuốc theo YHCT: <em>"ba bổ ba tả"</em> — ba vị bổ ích (Thục địa, Sơn dược, Sơn thù du) phối hợp ba vị tả thực tà (Trạch tả, Phục linh, Đan bì) — tạo nên sự cân bằng: bổ mà không trệ, tư âm mà không trợ thấp.</p>

<h2>Sáu vị dược liệu và vai trò</h2>
<ul>
  <li><strong>Thục địa hoàng (Rehmannia glutinosa — quân dược):</strong> Vị ngọt, tính ôn — tư âm bổ thận, điền tinh ích tủy. Liều 24g, là vị chủ dược chiếm tỷ lệ cao nhất.</li>
  <li><strong>Sơn thù du (Cornus officinalis — thần dược):</strong> Vị chua, tính ôn — bổ can thận, thu liễm tinh khí, cầm mồ hôi trộm. Liều 12g.</li>
  <li><strong>Sơn dược (Dioscorea opposita — thần dược):</strong> Vị ngọt, tính bình — kiện tỳ bổ phế, cố thận sinh tinh. Liều 12g.</li>
  <li><strong>Trạch tả (Alisma orientale — tá dược):</strong> Tả thận hỏa, lợi thủy thấm thấp — phòng Thục địa quá nê trệ. Liều 9g.</li>
  <li><strong>Phục linh (Poria cocos — tá dược):</strong> Kiện tỳ lợi thấp — phòng Sơn dược trợ thấp, hỗ trợ tiêu hóa. Liều 9g.</li>
  <li><strong>Mẫu đơn bì (Paeonia suffruticosa — tá dược):</strong> Thanh can hỏa, lương huyết hoạt huyết — chế ước nhiệt do âm hư sinh ra. Liều 9g.</li>
</ul>

<h2>Chỉ định và phân thể điều trị</h2>
<ul>
  <li><strong>Thận âm hư điển hình:</strong> Mỏi lưng gối dai dẳng, hoa mắt chóng mặt, ù tai tiếng ve, ra mồ hôi trộm ban đêm, miệng khô họng táo, lòng bàn tay và bàn chân nóng (ngũ tâm phiền nhiệt), lưỡi đỏ ít rêu hoặc không rêu, mạch tế sác.</li>
  <li><strong>Di tinh, hoạt tinh do thận hư:</strong> Thận không tàng tinh được, kèm mệt mỏi, hay quên, tóc bạc sớm.</li>
  <li><strong>Tiêu khát (đái tháo đường) thể âm hư:</strong> Khát nhiều, uống nhiều, tiểu nhiều, người gầy sút.</li>
  <li><strong>Phụ nữ mãn kinh âm hư:</strong> Bốc hỏa, mồ hôi trộm, khô âm đạo, mất ngủ, da khô nhăn sớm.</li>
  <li><strong>Trẻ em ngũ trì, ngũ nhuyễn:</strong> Chậm mọc răng, chậm đứng, chậm nói do thận tinh bất túc — dùng dạng hoàn nhỏ liều thấp.</li>
</ul>

<h2>Cách dùng và liều lượng</h2>
<p>Dạng <strong>hoàn mật</strong> (thành phẩm): 8–9g/lần × 2–3 lần/ngày, uống với nước ấm hoặc nước muối nhạt ấm (dẫn vào thận kinh). Dùng trước bữa ăn 30 phút để hấp thu tốt hơn.</p>
<p>Dạng <strong>thang sắc</strong>: Theo tỷ lệ nguyên bản, sắc 3 lần lấy nước uống chia 2–3 lần trong ngày. Thầy thuốc thường gia thêm tùy thể — <em>Tri bá địa hoàng hoàn</em> (thêm Tri mẫu, Hoàng bá) khi hư nhiệt rõ; <em>Kỷ cúc địa hoàng hoàn</em> (thêm Kỷ tử, Cúc hoa) khi suy thị lực, mắt khô.</p>
<p><strong>Liệu trình:</strong> Tối thiểu 4–6 tuần để thấy hiệu quả rõ rệt; bệnh mạn tính dùng 3–6 tháng, nghỉ 1 tháng rồi có thể tiếp tục.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Kết hợp bấm huyệt Thái khê (KI3):</strong> Huyệt nguyên của Thận kinh, giữa mắt cá trong và gân Achilles — xoa ấn 2 phút mỗi bên buổi tối để tăng tác dụng tư thận âm của bài thuốc.</li>
  <li><strong>Ngâm chân nước ấm:</strong> 15–20 phút trước ngủ — dẫn thuốc xuống hạ tiêu, giúp hấp thu và an thần.</li>
  <li><strong>Kiêng kị khi dùng thuốc:</strong> Hạn chế đồ cay nóng (ớt, rượu, hành tây sống), đồ lạnh sống — tránh tổn thương âm dịch hoặc trợ thấp làm giảm hiệu quả thuốc.</li>
  <li><strong>Bổ sung thực phẩm dưỡng thận âm:</strong> Hà thủ ô, đen mè, óc chó, trứng vịt muối, thịt heo thận — phối hợp với thuốc để rút ngắn liệu trình.</li>
  <li><strong>Chống chỉ định cần biết:</strong> Không dùng khi đang cảm cúm, tiêu chảy, hoặc tỳ vị hư hàn (bụng lạnh đau, phân lỏng) vì Thục địa nê trệ dễ làm nặng thêm.</li>
</ul>

<div class="art-cta-box">
  <p>Lục vị địa hoàng hoàn dù là thuốc bổ vẫn cần thăm khám để xác định đúng thể bệnh — dùng sai thể hoặc sai liều có thể gây đầy bụng, tiêu chảy hoặc không hiệu quả. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm sẽ tứ chẩn hợp tham, xác định thể thận hư và gia giảm bài thuốc phù hợp với từng bệnh nhân. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 6,
    slug: "bam-huyet-cai-thien-tieu-hoa",
    date: "2026-06-09",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Bấm huyệt cải thiện tiêu hóa: Giải pháp không dùng thuốc từ Y học cổ truyền",
    excerpt: "Hệ tiêu hóa yếu, đầy bụng, ăn không tiêu, tiêu chảy hoặc táo bón mạn tính đều có thể cải thiện rõ rệt chỉ với vài huyệt đơn giản — không cần dùng thuốc.",
    readTime: 5,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Tiêu hóa kém trong YHCT chủ yếu xuất phát từ sự suy yếu của <strong>Tỳ vị</strong> — hai tạng phủ đóng vai trò vận hóa thủy cốc, hấp thu tinh chất nuôi dưỡng toàn thân. Khi Tỳ vị hư nhược hoặc bị can khí phạm vị, khí cơ thăng giáng mất điều hòa, người bệnh sẽ xuất hiện các triệu chứng như đầy bụng, ợ hơi, ăn không tiêu, phân lỏng hoặc táo bón xen kẽ. Nguyên tắc điều trị: <em>kiện tỳ hòa vị, lý khí tiêu đạo</em>.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể tỳ khí hư:</strong> Ăn kém, bụng đầy trướng sau ăn, người mệt mỏi, phân nát nhão, lưỡi bệu nhạt rêu trắng. Hay gặp ở người ăn uống thất thường, thức khuya nhiều. Hướng điều trị: kiện tỳ ích khí, tiêu đạo.</li>
  <li><strong>Thể can khí phạm vị:</strong> Bụng trên đau tức căng, đau liên quan đến stress và cảm xúc, ợ hơi thở dài, miệng đắng. Hướng điều trị: sơ can lý khí, hòa vị chỉ thống.</li>
  <li><strong>Thể thấp nhiệt trung tiêu:</strong> Bụng đầy nóng, buồn nôn, miệng nhớt đắng, phân lỏng thối khắm, rêu lưỡi vàng nhờn. Hay gặp sau ăn đồ dầu mỡ nhiều. Hướng điều trị: thanh nhiệt hóa thấp, hòa trung.</li>
  <li><strong>Thể vị hàn:</strong> Đau bụng âm ỉ, thích chườm ấm, nôn ra nước trong, sợ lạnh, phân lỏng loãng. Hướng điều trị: ôn trung tán hàn, kiện tỳ.</li>
</ul>

<h2>Phương pháp điều trị — Huyệt vị bấm huyệt</h2>
<p>Các huyệt sau đây là phác đồ nền tảng điều trị tiêu hóa kém — thầy thuốc sẽ gia giảm theo từng thể bệnh:</p>
<ul>
  <li><strong>Túc tam lý (ST36):</strong> Dưới lồi củ xương chày 3 thốn (4 ngón tay), ngoài mào chày 1 thốn. Đây là huyệt bổ ích toàn thân quan trọng nhất trong YHCT — kiện tỳ vị, hóa đờm thấp, tăng cường miễn dịch và cải thiện hấp thu. Ấn và xoa tròn 2–3 phút mỗi bên.</li>
  <li><strong>Trung quản (CV12):</strong> Đường giữa bụng, giữa rốn và mũi ức (4 thốn trên rốn). Mộ huyệt của Vị kinh — điều hòa khí cơ tỳ vị, tiêu đạo hóa trệ, chỉ nôn. Xoa tròn theo chiều kim đồng hồ 3 phút sau ăn.</li>
  <li><strong>Thiên khu (ST25):</strong> Hai bên rốn, mỗi bên 2 thốn. Mộ huyệt của Đại trường — điều hòa đại tràng, chỉ tả, thông tiện. Hiệu quả với cả tiêu chảy lẫn táo bón tùy thủ pháp bổ tả.</li>
  <li><strong>Nội quan (PC6):</strong> Mặt trong cổ tay, giữa hai gân, lên 2 thốn. Hòa vị giáng nghịch, chỉ nôn, an thần — đặc biệt hiệu quả khi tiêu hóa kém do stress, lo âu.</li>
  <li><strong>Tam âm giao (SP6):</strong> Mắt cá trong, lên 3 thốn (4 ngón tay), sau bờ xương chày. Kiện tỳ hóa thấp, điều hòa khí huyết — huyệt hội tụ ba kinh âm Tỳ–Can–Thận.</li>
  <li><strong>Hợp cốc (LI4):</strong> Mu bàn tay, giữa đốt bàn tay 1 và 2. Hành khí hoạt huyết, điều hòa đại trường — gia thêm khi táo bón hoặc đau bụng do khí trệ.</li>
</ul>
<p>Thể can khí phạm vị: gia thêm <em>Thái xung (LR3), Kỳ môn (LR14)</em>. Thể vị hàn: kết hợp cứu ngải tại Trung quản và Túc tam lý 15 phút.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Bấm huyệt Túc tam lý (ST36) sau ăn:</strong> Ngồi thư giãn, dùng ngón cái ấn vào huyệt, vê tròn với lực vừa phải, 2 phút mỗi bên. Thực hiện 15–30 phút sau bữa ăn chính để hỗ trợ tiêu hóa tối ưu.</li>
  <li><strong>Xoa bụng theo chiều kim đồng hồ:</strong> Nằm ngửa, hai bàn tay chồng lên nhau đặt ở rốn, xoa tròn từ trong ra ngoài theo chiều kim đồng hồ 50–100 vòng. Thực hiện trước bữa ăn sáng 10 phút — kích thích nhu động ruột, cải thiện táo bón.</li>
  <li><strong>Ấn huyệt Nội quan (PC6) khi buồn nôn:</strong> Dùng ngón cái bên đối diện ấn mạnh vào điểm giữa hai gân mặt trong cổ tay, giữ 30 giây — thả — lặp lại 3–5 lần. Giảm buồn nôn, ợ hơi tức thì.</li>
  <li><strong>Chườm ấm Trung quản:</strong> Túi muối rang hoặc chai nước ấm chườm vùng giữa bụng trên 15–20 phút trước khi ngủ — hiệu quả với thể vị hàn, ăn uống không tiêu do lạnh.</li>
  <li><strong>Điều chỉnh lối sống:</strong> Ăn chậm nhai kỹ, không ăn khuya sau 21h, hạn chế đồ lạnh và dầu mỡ — Tỳ vị YHCT ưa ấm, ghét hàn ẩm.</li>
</ul>

<div class="art-cta-box">
  <p>Tiêu hóa kém kéo dài, sụt cân không rõ nguyên nhân hoặc kèm đau bụng dữ dội cần được thăm khám để loại trừ bệnh lý thực thể trước khi điều trị bằng YHCT. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm sẽ thăm khám, phân thể và xây dựng phác đồ châm cứu bấm huyệt phù hợp cho từng bệnh nhân. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 5,
    slug: "dau-vai-gay-yhct-phan-the-dieu-tri",
    date: "2026-06-08",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🩺",
    gradient: "g-navy",
    title: "Đau vai gáy theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "Đau vai gáy mạn tính trong YHCT thường do phong hàn thấp xâm phạm hoặc can thận hư — xác định đúng thể giúp châm cứu và xoa bóp đạt hiệu quả tốt nhất.",
    readTime: 6,
    content: `
<h2>Tổng quan theo Y học cổ truyền</h2>
<p>Đau vai gáy (hạng bối thống) là chứng bệnh thuộc kinh Thái dương Bàng quang và kinh Đởm, thường gặp ở người làm việc văn phòng, lao động nặng và người cao tuổi. Theo YHCT, cổ - vai - gáy là vùng hội tụ của nhiều kinh lạc quan trọng; khi <strong>khí huyết không thông</strong> hoặc <strong>tà khí xâm nhập</strong>, kinh lạc bị tắc nghẽn gây đau. Nguyên tắc điều trị: <em>thông kinh lạc, hành khí hoạt huyết, khu tà chỉ thống</em>.</p>

<h2>Phân thể / Nguyên nhân theo YHCT</h2>
<ul>
  <li><strong>Thể phong hàn thấp tý:</strong> Đau cứng cổ vai tăng rõ khi gặp lạnh, gió; giảm khi chườm ấm. Hay gặp sau ngủ quạt, điều hòa thổi thẳng vào gáy, hoặc dầm mưa. Biểu hiện: cổ cứng khó quay, đau lan vai và cánh tay, rêu lưỡi trắng nhớt. Hướng điều trị: khu phong tán hàn, trừ thấp thông lạc.</li>
  <li><strong>Thể khí trệ huyết ứ:</strong> Đau cố định như kim châm, tăng khi ngồi lâu một tư thế, ấn vào đau nhiều hơn. Thường gặp ở dân văn phòng ngồi máy tính nhiều giờ. Lưỡi tím có điểm ứ. Hướng điều trị: hành khí hoạt huyết, hóa ứ thông lạc.</li>
  <li><strong>Thể can thận hư:</strong> Đau mỏi âm ỉ kéo dài, kèm hoa mắt chóng mặt, ù tai, mỏi gối lưng. Hay gặp ở người trung niên, cao tuổi hoặc sau bệnh nặng. Hướng điều trị: bổ can thận, mạnh gân cốt.</li>
  <li><strong>Thể đàm thấp trở lạc:</strong> Đau mỏi vai gáy kèm đầu nặng, chóng mặt, người béo phì, cổ to ngắn. Lưỡi bệu rêu nhờn dày. Hướng điều trị: hóa đàm trừ thấp, thông kinh lạc.</li>
</ul>

<h2>Phương pháp điều trị — Huyệt vị châm cứu</h2>
<p>Phác đồ cơ bản dùng trong điều trị đau vai gáy — thầy thuốc sẽ gia giảm theo từng thể bệnh:</p>
<ul>
  <li><strong>Phong trì (GB20):</strong> Chân tóc gáy, hai hõm cạnh cơ thang và cơ ức đòn chũm. Huyệt quan trọng nhất — khu phong tán hàn, thông lạc chỉ thống toàn vùng đầu cổ.</li>
  <li><strong>Thiên trụ (BL10):</strong> Cạnh cột sống cổ, ngang C2, cách gai 1,3 thốn. Thông kinh Bàng quang, giải cứng cổ gáy.</li>
  <li><strong>Kiên tỉnh (GB21):</strong> Đỉnh vai, giữa cổ và mỏm vai. Lý khí thông lạc, giải co cứng cơ thang — huyệt đặc trị căng cứng cơ vai.</li>
  <li><strong>Hậu khê (SI3):</strong> Bờ ngoài bàn tay, sau khớp đốt bàn ngón 5. Thông Đốc mạch, khu phong giải biểu — huyệt xa tác dụng mạnh trên cột sống cổ.</li>
  <li><strong>Hợp cốc (LI4):</strong> Mu bàn tay, giữa đốt bàn tay 1 và 2. Hành khí hoạt huyết, chỉ thống toàn thân — gia thêm khi đau kèm nhức đầu.</li>
  <li><strong>Thân trụ (GV12):</strong> Đường giữa lưng ngang T3. Thông Đốc mạch, kiên cố khí vệ — gia thêm khi thể phong hàn.</li>
</ul>
<p>Thể can thận hư: gia thêm <em>Thận du (BL23), Thái khê (KI3), Can du (BL18)</em>. Thể khí trệ huyết ứ: gia thêm <em>Cách du (BL17), Huyết hải (SP10)</em>.</p>

<h2>Tự thực hành tại nhà</h2>
<ul>
  <li><strong>Xoa bóp huyệt Phong trì (GB20):</strong> Dùng hai ngón cái ấn vào hai hõm dưới chân tóc gáy, xoa tròn nhẹ 2 phút mỗi ngày — giảm căng thẳng cơ cổ, cải thiện tuần hoàn não.</li>
  <li><strong>Chườm ấm vùng vai gáy:</strong> Túi muối rang nóng hoặc khăn ấm chườm 15–20 phút buổi tối — đặc biệt hiệu quả với thể phong hàn. Không chườm khi đang viêm cấp.</li>
  <li><strong>Bài tập xoay cổ dưỡng sinh:</strong> Ngồi thẳng lưng, từ từ nghiêng đầu phải–trái–trước–sau mỗi hướng 10 giây, xoay tròn nhẹ 5 vòng mỗi chiều. Thực hiện sáng và chiều.</li>
  <li><strong>Ấn huyệt Kiên tỉnh (GB21):</strong> Dùng ngón tay bên đối diện ấn và bóp nhẹ đỉnh vai 30 giây mỗi bên, 3–4 lần/ngày — hiệu quả giảm căng cứng cơ thang tức thì.</li>
  <li><strong>Điều chỉnh tư thế làm việc:</strong> Màn hình ngang tầm mắt, không cúi cổ quá 20 độ, cứ 45 phút đứng dậy vươn vai một lần — phòng ngừa tái phát.</li>
</ul>

<div class="art-cta-box">
  <p>Đau vai gáy tái đi tái lại hoặc kèm tê bì tay, yếu cơ là dấu hiệu cần thăm khám để loại trừ thoát vị đĩa đệm cổ. Tại <strong>Phòng Khám YHCT Tâm Đức</strong>, BS. Nguyễn Đức Tâm sẽ khám phân thể và xây dựng phác đồ châm cứu kết hợp xoa bóp bấm huyệt phù hợp với từng bệnh nhân. Liên hệ <strong>0973 710 237</strong> để đặt lịch — giờ khám <strong>18:00–22:00 hàng ngày</strong>, Hà Đông, Hà Nội.</p>
</div>
    `
  },
  {
    id: 4,
    slug: "phuong-huyet-dieu-tri-dau-dau",
    date: "2026-06-07",
    category: "phuong-huyet",
    categoryLabel: "Phương huyệt",
    icon: "📍",
    gradient: "g-huyet",
    title: "Phương huyệt điều trị đau đầu theo Y học cổ truyền",
    excerpt: "5 huyệt cốt lõi trong phác đồ châm cứu điều trị đau đầu — từ đau đầu căng thẳng đến đau nửa đầu — kèm hình minh hoạ vị trí huyệt vị.",
    readTime: 6,
    content: `
<h2>Cơ chế bệnh sinh đau đầu theo YHCT</h2>
<p>Đau đầu (đầu thống) trong Y học cổ truyền thuộc phạm trù <em>ngoại cảm đầu thống</em> (do tà khí bên ngoài) hoặc <em>nội thương đầu thống</em> (do nội tạng rối loạn). Nguyên tắc châm cứu: <strong>sơ thông kinh lạc, hành khí hoạt huyết, chỉ thống</strong>.</p>

<h2>Sơ đồ phương huyệt</h2>
<div class="huyet-diagram">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 310" role="img" aria-label="Sơ đồ huyệt châm cứu điều trị đau đầu">
  <style>
    .hb{fill:#fde8d0;stroke:#c4956a;stroke-width:1.8}
    .hh{fill:#d4956a;opacity:0.3}
    .he{fill:white;stroke:#aaa;stroke-width:1}
    .hp{fill:#7c3aed;stroke:white;stroke-width:2.5}
    .hl{font-family:sans-serif;font-size:9px;font-weight:700;fill:#581c87}
    .hs{font-family:sans-serif;font-size:8px;fill:#7c3aed}
    .hz{font-family:sans-serif;font-size:10.5px;font-weight:600;fill:#555}
    .hc{stroke:#a855f7;stroke-width:1.2;stroke-dasharray:3,2;fill:none}
    .hd{stroke:#e2e8f0;stroke-width:1;fill:none}
  </style>
  <rect width="520" height="310" fill="#fafaf9" rx="12"/>

  <!-- PANEL 1: Nhìn trước -->
  <text x="38" y="20" class="hz">Nhìn phía trước</text>
  <ellipse cx="90" cy="105" rx="57" ry="70" class="hb"/>
  <ellipse cx="90" cy="66" rx="55" ry="38" class="hh"/>
  <ellipse cx="33" cy="110" rx="10" ry="16" class="hb"/>
  <ellipse cx="147" cy="110" rx="10" ry="16" class="hb"/>
  <ellipse cx="71" cy="96" rx="11" ry="7" class="he"/>
  <circle cx="71" cy="96" r="4" fill="#5c3d1a"/>
  <ellipse cx="109" cy="96" rx="11" ry="7" class="he"/>
  <circle cx="109" cy="96" r="4" fill="#5c3d1a"/>
  <path d="M61,88 Q71,84 81,88" fill="none" stroke="#c4956a" stroke-width="1.5"/>
  <path d="M99,88 Q109,84 119,88" fill="none" stroke="#c4956a" stroke-width="1.5"/>
  <path d="M85,112 Q90,124 95,112" fill="none" stroke="#c4956a" stroke-width="1.5"/>
  <path d="M77,137 Q90,147 103,137" fill="none" stroke="#c4956a" stroke-width="1.5"/>
  <rect x="74" y="171" width="32" height="22" rx="5" class="hb"/>

  <!-- GV20 Bách hội -->
  <circle cx="90" cy="35" r="7" class="hp"/>
  <line x1="90" y1="42" x2="90" y2="45" class="hc"/>
  <text x="100" y="31" class="hl">GV20</text>
  <text x="100" y="41" class="hs">Bách hội</text>

  <!-- GV29 Ấn đường -->
  <circle cx="90" cy="84" r="6" class="hp"/>
  <text x="104" y="79" class="hl">GV29</text>
  <text x="104" y="88" class="hs">Ấn đường</text>

  <!-- EX-HN5 Thái dương T -->
  <circle cx="28" cy="100" r="6" class="hp"/>
  <text x="0" y="89" class="hl">EX-HN5</text>
  <text x="3" y="98" class="hs">Thái dương</text>

  <!-- EX-HN5 Thái dương P -->
  <circle cx="152" cy="100" r="6" class="hp"/>
  <text x="162" y="89" class="hl">EX-HN5</text>
  <text x="162" y="98" class="hs">Thái dương</text>

  <!-- Divider 1 -->
  <line x1="215" y1="8" x2="215" y2="205" class="hd"/>

  <!-- PANEL 2: Nhìn sau -->
  <text x="258" y="20" class="hz">Nhìn phía sau</text>
  <ellipse cx="310" cy="105" rx="57" ry="70" class="hb"/>
  <ellipse cx="310" cy="72" rx="55" ry="46" class="hh"/>
  <ellipse cx="253" cy="110" rx="10" ry="16" class="hb"/>
  <ellipse cx="367" cy="110" rx="10" ry="16" class="hb"/>
  <rect x="294" y="171" width="32" height="22" rx="5" class="hb"/>
  <line x1="310" y1="172" x2="310" y2="192" class="hc" stroke-dasharray="2,2"/>

  <!-- GV20 back -->
  <circle cx="310" cy="35" r="7" class="hp"/>
  <line x1="310" y1="42" x2="310" y2="45" class="hc"/>
  <text x="320" y="31" class="hl">GV20</text>
  <text x="320" y="41" class="hs">Bách hội</text>

  <!-- GB20 Phong trì T -->
  <circle cx="278" cy="166" r="6" class="hp"/>
  <text x="222" y="160" class="hl">GB20</text>
  <text x="220" y="169" class="hs">Phong trì</text>
  <line x1="242" y1="165" x2="272" y2="165" class="hc"/>

  <!-- GB20 Phong trì P -->
  <circle cx="342" cy="166" r="6" class="hp"/>
  <text x="352" y="160" class="hl">GB20</text>
  <text x="352" y="169" class="hs">Phong trì</text>

  <!-- Divider 2 -->
  <line x1="415" y1="8" x2="415" y2="205" class="hd"/>

  <!-- PANEL 3: Bàn tay -->
  <text x="432" y="20" class="hz">Bàn tay</text>
  <path d="M452,128 L446,108 L446,94 L450,90 L455,94 L455,86 L459,82 L464,85 L464,80 L468,76 L473,79 L473,85 L477,83 L481,86 L483,98 L481,128 Z" class="hb"/>
  <path d="M452,128 L444,137 L441,147 L446,154 L453,142 L452,128" class="hb"/>

  <!-- LI4 Hợp cốc -->
  <circle cx="465" cy="106" r="6" class="hp"/>
  <text x="418" y="102" class="hl">LI4</text>
  <text x="415" y="111" class="hs">Hợp cốc</text>
  <line x1="440" y1="106" x2="459" y2="106" class="hc"/>

  <!-- Legend -->
  <line x1="15" y1="218" x2="505" y2="218" class="hd"/>
  <circle cx="26" cy="235" r="5" class="hp"/>
  <text x="35" y="239" font-family="sans-serif" font-size="8.5" fill="#444">Vị trí huyệt</text>
  <text x="105" y="239" font-family="sans-serif" font-size="8" fill="#777">  GV = Đốc mạch · GB = Đởm kinh · LI = Đại trường kinh · EX-HN = Ngoại kỳ huyệt vùng đầu</text>
  <text x="15" y="262" font-family="sans-serif" font-size="8" fill="#999" font-style="italic">Phác đồ: châm tả 20–30 phút/buổi · Liệu trình 10 buổi · Vị trí chính xác cần xác định bởi thầy thuốc YHCT có chuyên môn</text>
</svg>
</div>

<h2>Chi tiết từng huyệt vị</h2>
<div class="huyet-table">
<table>
<thead><tr><th>Huyệt</th><th>Mã QT</th><th>Vị trí</th><th>Tác dụng</th></tr></thead>
<tbody>
<tr><td><strong>Bách hội</strong></td><td>GV20</td><td>Đỉnh đầu, giao điểm đường thẳng nối hai đỉnh tai và đường giữa đầu</td><td>Thăng dương ích não, bình can tức phong, chỉ thống</td></tr>
<tr><td><strong>Ấn đường</strong></td><td>GV29</td><td>Giữa hai đầu trong lông mày</td><td>Bình can tức phong, an thần, giảm đau đầu vùng trán</td></tr>
<tr><td><strong>Thái dương</strong></td><td>EX-HN5</td><td>Thái dương hai bên — hõm sau khóe mắt ngoài 1 thốn</td><td>Khu phong, chỉ thống, sáng mắt — đặc hiệu đau nửa đầu</td></tr>
<tr><td><strong>Phong trì</strong></td><td>GB20</td><td>Chân tóc gáy, hai hõm cạnh cơ thang và cơ ức đòn chũm</td><td>Khu phong tán hàn, thông lạc chỉ thống — then chốt đau đầu phong hàn</td></tr>
<tr><td><strong>Hợp cốc</strong></td><td>LI4</td><td>Mu bàn tay, giữa xương đốt bàn tay 1 và 2</td><td>Hành khí hoạt huyết, tán phong giải biểu, chỉ thống toàn đầu</td></tr>
</tbody>
</table>
</div>

<h2>Phân loại và gia giảm huyệt theo thể bệnh</h2>
<ul>
  <li><strong>Đau đầu phong hàn</strong> (đau lan ra gáy, sợ lạnh): gia thêm <em>Phong môn BL12, Liệt khuyết LU7</em> — ôn kinh tán hàn.</li>
  <li><strong>Đau đầu phong nhiệt</strong> (đau căng buốt, sốt nhẹ): gia thêm <em>Đại chùy GV14, Ngoại quan SJ5</em> — thanh nhiệt giải độc.</li>
  <li><strong>Đau nửa đầu (thiên đầu thống)</strong>: gia thêm <em>Suất cốc GB8, Ngoại quan SJ5, Túc lâm khấp GB41</em> — lý khí thông lạc Đởm kinh.</li>
  <li><strong>Đau đầu do can dương thượng cang</strong> (căng thẳng, huyết áp cao): gia thêm <em>Thái xung LR3, Hành gian LR2</em> — bình can tiềm dương.</li>
  <li><strong>Đau đầu do khí huyết hư</strong> (mệt mỏi, da xanh): gia thêm <em>Túc tam lý ST36, Tam âm giao SP6</em> — bổ khí dưỡng huyết.</li>
</ul>

<h2>Quy trình buổi châm cứu</h2>
<p><strong>Tư thế:</strong> Bệnh nhân nằm ngửa (huyệt vùng mặt trước) → sau đó lật sấp (huyệt vùng gáy GB20).</p>
<p><strong>Thủ pháp:</strong> Đau thực chứng dùng <em>tả pháp</em> (vê kim ngược chiều, rút nhanh); đau hư chứng dùng <em>bổ pháp</em> (vê kim xuôi chiều, rút chậm).</p>
<p><strong>Lưu châm:</strong> 20–30 phút/buổi. <strong>Liệu trình:</strong> 10 buổi/đợt (mỗi ngày hoặc cách ngày).</p>

<div class="art-cta-box">
  <p>Châm cứu điều trị đau đầu đòi hỏi thầy thuốc xác định đúng thể bệnh trước khi chọn huyệt. Đến phòng khám để được khám phân biệt và áp dụng phác đồ phù hợp với từng người — tránh tự châm khi chưa có chuyên môn.</p>
</div>
    `
  },
  {
    id: 3,
    slug: "phong-ngua-cam-cum-dong-y",
    date: "2026-05-27",
    category: "phong-benh",
    categoryLabel: "Phòng bệnh",
    icon: "🛡️",
    gradient: "g-amber",
    title: "Phòng ngừa cảm cúm mùa theo Y học cổ truyền",
    excerpt: "Đông y có nhiều phương pháp đơn giản, hiệu quả giúp tăng cường chính khí, bảo vệ cơ thể trước tà khí gây cảm cúm mà không cần dùng thuốc.",
    readTime: 5,
    content: `
<h2>Quan điểm Đông y về cảm cúm</h2>
<p>Theo Y học cổ truyền, cảm cúm xảy ra khi <strong>tà khí bên ngoài</strong> (phong hàn hoặc phong nhiệt) xâm nhập vào cơ thể do <strong>chính khí suy yếu</strong>. Nguyên tắc phòng bệnh là <em>"Chính khí tồn nội, tà bất khả can"</em> — chính khí đủ mạnh thì tà khí không thể xâm nhập.</p>

<h2>Phân biệt hai thể cảm thường gặp</h2>
<ul>
  <li><strong>Phong hàn:</strong> Sợ lạnh, không ra mồ hôi, đau đầu, mũi nghẹt chảy nước trong, rêu lưỡi trắng mỏng. Thường gặp mùa đông, giao mùa thu–đông.</li>
  <li><strong>Phong nhiệt:</strong> Sốt nhẹ, ra mồ hôi, họng đau đỏ, mũi chảy nước vàng, rêu lưỡi vàng mỏng. Thường gặp mùa hè, giao mùa xuân–hè.</li>
</ul>

<h2>Bấm huyệt tăng cường chính khí — làm mỗi sáng</h2>
<ul>
  <li><strong>Hợp cốc (LI4):</strong> Mu bàn tay, giữa xương ngón 1 và ngón 2. Ấn và xoa tròn 1 phút mỗi bên. Tăng vệ khí, thông kinh lạc.</li>
  <li><strong>Túc tam lý (ST36):</strong> Dưới xương bánh chè 3 thốn (khoảng 4 ngón tay), ngoài xương chày 1 thốn. Xoa 2 phút mỗi bên. Kiện tỳ vị, tăng cường miễn dịch.</li>
  <li><strong>Phong trì (GB20):</strong> Chân tóc gáy, hai hõm hai bên cột sống cổ. Ấn xoa nhẹ 30 giây mỗi bên. Khu phong tán hàn — phòng cảm lạnh hiệu quả nhất.</li>
</ul>

<h2>Động tác đơn giản phòng cảm mỗi ngày</h2>
<p><strong>Chà xát hai cánh mũi:</strong> Dùng hai ngón trỏ chà dọc hai bên cánh mũi 20–30 lần sau khi ngủ dậy. Kích thích tuần hoàn, ấm mũi, tăng hàng rào bảo vệ đường hô hấp trên.</p>
<p><strong>Súc miệng nước muối ấm:</strong> Pha 1/4 thìa muối vào 200ml nước ấm, súc họng sáng và tối. Thanh nhiệt giải độc tại cửa ngõ thượng tiêu.</p>
<p><strong>Ngâm chân nước ấm gừng:</strong> 15–20 phút trước khi ngủ, thêm vài lát gừng tươi. Ấm dương khí từ dưới lên, thông kinh lạc toàn thân.</p>

<h2>Thực phẩm phòng ngừa cảm theo YHCT</h2>
<ul>
  <li><strong>Gừng tươi + mật ong:</strong> Ôn kinh tán hàn. 1 chén trà gừng mật ong mỗi tối, đặc biệt khi trời lạnh hoặc sau khi dầm mưa.</li>
  <li><strong>Tỏi:</strong> Kháng khuẩn, giải độc. 2–3 tép tỏi/ngày (sống hoặc ngâm mật ong).</li>
  <li><strong>Kinh giới, tía tô:</strong> Phát tán phong hàn. Nấu cháo gừng hành hoặc uống dưới dạng trà khi có nguy cơ cảm lạnh.</li>
  <li><strong>Táo đỏ + kỷ tử:</strong> Bổ khí huyết, tăng chính khí. Sắc uống 2–3 lần/tuần trong mùa dễ bị cảm.</li>
</ul>

<h2>Lối sống đúng theo YHCT</h2>
<ul>
  <li><strong>Ngủ trước 23h:</strong> Giờ Tý (23h–1h) dương khí được phục hồi. Thiếu ngủ làm vệ khí suy giảm, dễ nhiễm tà khí.</li>
  <li><strong>Giữ ấm cổ gáy:</strong> Phong trì là nơi phong hàn dễ xâm nhập nhất. Giao mùa nên choàng khăn, tránh quạt thổi thẳng vào gáy.</li>
  <li><strong>Kiêng đồ lạnh, sống:</strong> Tỳ vị khỏe thì vệ khí mạnh. Hạn chế nước đá, gỏi sống khi giao mùa hoặc đang mệt mỏi.</li>
</ul>

<div class="art-cta-box">
  <p>Khi đã bị cảm, nên đến khám để phân biệt đúng thể bệnh — châm cứu giải biểu hoặc thuốc thang đúng thể sẽ rút ngắn thời gian bệnh đáng kể so với tự điều trị.</p>
</div>
    `
  },
  {
    id: 2,
    slug: "dau-that-lung-cham-cuu-xoa-bop",
    date: "2026-05-24",
    category: "khong-thuoc",
    categoryLabel: "Không dùng thuốc",
    icon: "🧘",
    gradient: "g-herb",
    title: "Đau thắt lưng: Châm cứu và xoa bóp bấm huyệt hiệu quả không cần thuốc",
    excerpt: "Đau thắt lưng mạn tính có thể cải thiện rõ rệt chỉ sau 5–7 buổi châm cứu kết hợp xoa bóp bấm huyệt — không cần phụ thuộc thuốc giảm đau.",
    readTime: 6,
    content: `
<h2>Đông y nhìn nhận đau thắt lưng như thế nào?</h2>
<p>Đau thắt lưng (yêu thống) trong YHCT chủ yếu do ba nguyên nhân: <strong>Thận hư</strong> (thận âm hoặc thận dương hư suy); <strong>Phong hàn thấp</strong> xâm phạm kinh lạc; hoặc <strong>Khí trệ huyết ứ</strong> sau chấn thương hay ngồi lâu. Điều trị cần xác định đúng thể bệnh.</p>

<h2>Phân thể và đặc điểm nhận biết</h2>
<ul>
  <li><strong>Thận dương hư:</strong> Đau âm ỉ kéo dài, mỏi gối, lạnh lưng, tiểu đêm nhiều, chân tay lạnh. Điều trị: ôn thận tráng dương, cứu huyệt.</li>
  <li><strong>Thận âm hư:</strong> Đau mỏi về chiều tối, ra mồ hôi trộm, miệng khô, lưỡi đỏ ít rêu. Điều trị: tư âm bổ thận.</li>
  <li><strong>Phong hàn thấp tý:</strong> Đau tăng rõ khi lạnh ẩm, giảm khi ấm áp, cứng lưng buổi sáng, nặng nề. Điều trị: khu phong tán hàn, trừ thấp thông lạc.</li>
  <li><strong>Khí trệ huyết ứ:</strong> Đau cố định như kim châm, thường sau chấn thương hoặc ngồi lâu, đau tăng khi ấn. Điều trị: hành khí hoạt huyết, hóa ứ thông lạc.</li>
</ul>

<h2>Huyệt vị châm cứu hiệu quả</h2>
<p>Phác đồ cơ bản — BS. Nguyễn Đức Tâm sẽ điều chỉnh tùy thể bệnh cụ thể:</p>
<ul>
  <li><strong>Thận du (BL23):</strong> Cạnh cột sống ngang đốt L2, cách gai 1,5 thốn. Bổ thận, chủ trị mọi thể đau thắt lưng.</li>
  <li><strong>Đại trường du (BL25):</strong> Cạnh cột sống ngang đốt L4. Thư cân, lý khí chỉ thống.</li>
  <li><strong>Uỷ trung (BL40):</strong> Giữa nếp gấp khoeo. <em>"Yêu bối uỷ trung cầu"</em> — câu kinh điển YHCT, đây là huyệt chủ trị đau lưng quan trọng nhất.</li>
  <li><strong>Dương lăng tuyền (GB34):</strong> Trước và dưới đầu xương mác. Thư gân giải co cứng, trừ thấp.</li>
  <li><strong>Côn lôn (BL60):</strong> Giữa mắt cá ngoài và gân Achilles. Thông kinh hoạt lạc, chỉ thống.</li>
</ul>

<h2>Kỹ thuật xoa bóp tự làm tại nhà</h2>
<p><strong>Xoa thận du — làm hàng ngày:</strong> Hai tay nắm lại, dùng mu khớp ngón xoa mạnh vùng thắt lưng hai bên cột sống theo chiều lên xuống 3–5 phút đến khi ấm nóng. Thực hiện trước khi ngủ. Bổ thận dương, giảm đau mạn tính.</p>
<p><strong>Ấn huyệt uỷ trung:</strong> Ngồi duỗi thẳng chân, dùng ngón cái ấn vào giữa nếp khoeo, giữ 30 giây — thả — lặp lại 5 lần mỗi bên. Hiệu quả giảm đau cấp tính.</p>

<h2>Bài tập dưỡng sinh hỗ trợ điều trị</h2>
<ul>
  <li><strong>Nằm co gối:</strong> Nằm ngửa, co 2 gối về ngực, ôm giữ 30 giây, thả. 10 lần mỗi ngày. Giãn cơ cạnh sống.</li>
  <li><strong>Cầu lưng:</strong> Nằm ngửa co gối, nâng mông lên cao giữ 5 giây. 15 lần/ngày. Tăng cường cơ lưng dưới và mông.</li>
  <li><strong>Xoay hông:</strong> Đứng thẳng tay chống hông, xoay tròn 10 vòng mỗi chiều, sáng và tối. Thông khí huyết vùng thắt lưng.</li>
</ul>

<h2>Kết quả điều trị thực tế</h2>
<p>Với đau thắt lưng mạn tính, liệu trình 10–15 buổi châm cứu (mỗi buổi 30 phút, cách ngày) thường giảm 60–80% cường độ đau. Kết hợp xoa bóp và bài tập tại nhà, nhiều bệnh nhân không cần dùng thuốc giảm đau sau tuần thứ 2.</p>

<div class="art-cta-box">
  <p>Đau thắt lưng kéo dài hơn 2 tuần, lan xuống chân, kèm tê bì hoặc yếu cơ cần được thăm khám để loại trừ thoát vị đĩa đệm và xây dựng phác đồ điều trị phù hợp.</p>
</div>
    `
  },
  {
    id: 1,
    slug: "mat-ngu-phan-the-va-dieu-tri",
    date: "2026-05-20",
    category: "mat-benh",
    categoryLabel: "Mặt bệnh",
    icon: "🌙",
    gradient: "g-navy",
    title: "Mất ngủ theo Y học cổ truyền: Phân thể và phác đồ điều trị",
    excerpt: "YHCT phân mất ngủ thành 5 thể bệnh với phác đồ điều trị khác nhau — châm cứu, thuốc thang và bấm huyệt có thể phục hồi giấc ngủ tự nhiên mà không gây lệ thuộc.",
    readTime: 7,
    content: `
<h2>Mất ngủ — bệnh của thời đại hiện đại</h2>
<p>Mất ngủ (thất miên) ngày càng phổ biến trong xã hội hiện đại. Khác với Tây y dùng thuốc an thần có nguy cơ gây lệ thuộc, <strong>Y học cổ truyền điều trị theo gốc rễ</strong> — phục hồi cân bằng âm dương, điều hòa tâm thần để giấc ngủ trở lại tự nhiên.</p>

<h2>5 thể bệnh mất ngủ theo YHCT</h2>

<h3>1. Tâm tỳ lưỡng hư (hay gặp nhất)</h3>
<p><strong>Nhận biết:</strong> Khó vào giấc, dễ thức giữa đêm, mơ nhiều, hay lo lắng, mệt mỏi ban ngày, ăn kém, tim hồi hộp, da xanh nhợt.</p>
<p><strong>Điều trị:</strong> Bổ tâm kiện tỳ, dưỡng huyết an thần. Bài thuốc kinh điển: <em>Quy tỳ thang</em> gia giảm. Huyệt chính: Tâm du, Tỳ du, Thần môn, Túc tam lý, Tam âm giao.</p>

<h3>2. Tâm thận bất giao</h3>
<p><strong>Nhận biết:</strong> Không ngủ được hoặc ngủ rất ít, bồn chồn, nóng trong người về chiều tối, ra mồ hôi trộm, miệng khô, ù tai.</p>
<p><strong>Điều trị:</strong> Tư thận âm, giáng tâm hỏa, giao thông tâm thận. Bài thuốc: <em>Hoàng liên a giao thang</em>. Huyệt: Thái khê, Thần môn, Nội quan, Tâm du, Thận du.</p>

<h3>3. Can khí uất kết</h3>
<p><strong>Nhận biết:</strong> Khó ngủ do suy nghĩ nhiều, tức ngực sườn, thở dài, dễ cáu gắt, ngủ hay ác mộng, miệng đắng, kinh nguyệt không đều (ở phụ nữ).</p>
<p><strong>Điều trị:</strong> Sơ can giải uất, định thần. Bài thuốc: <em>Tiêu dao tán</em> gia giảm. Huyệt: Thái xung, Kỳ môn, Thần môn, Nội quan, Bách hội.</p>

<h3>4. Đàm nhiệt nội nhiễu</h3>
<p><strong>Nhận biết:</strong> Mất ngủ, đầu nặng, nhiều đờm dãi, buồn nôn, bụng đầy trướng, miệng nhớt đắng. Hay gặp ở người thừa cân, ăn nhiều chất béo ngọt.</p>
<p><strong>Điều trị:</strong> Thanh nhiệt hóa đàm, hòa vị an thần. Bài thuốc: <em>Ôn đởm thang</em>. Huyệt: Phong long, Nội quan, Túc tam lý, Trung quản.</p>

<h3>5. Tâm hỏa vượng</h3>
<p><strong>Nhận biết:</strong> Bồn chồn không ngủ được, người nóng bừng, miệng lưỡi lở loét, tiểu vàng ít, táo bón.</p>
<p><strong>Điều trị:</strong> Thanh tâm tả hỏa, an thần. Huyệt: Thần môn, Lao cung, Tam âm giao, Hành gian, Thiếu phủ.</p>

<h2>Bấm huyệt giúp dễ ngủ — tự làm tại nhà</h2>
<ul>
  <li><strong>Thần môn (HT7):</strong> Cổ tay trong, phía ngón út, cạnh gân. Ấn và giữ 30 giây mỗi bên trước khi ngủ.</li>
  <li><strong>Tam âm giao (SP6):</strong> Mắt cá trong, lên 3 thốn (4 ngón tay). Ấn xoa nhẹ 2 phút mỗi bên.</li>
  <li><strong>An miên (điểm kinh nghiệm):</strong> Sau tai, giữa huyệt Phong trì và Ế phong. Xoa tròn 50–100 lần — đặc trị mất ngủ.</li>
  <li><strong>Ấn đường:</strong> Giữa hai đầu lông mày. Nhắm mắt, ấn nhẹ và xoa tròn 1–2 phút. Định tâm, giảm lo âu.</li>
</ul>

<h2>Thói quen buổi tối theo YHCT</h2>
<ul>
  <li>Ngâm chân nước ấm 40°C (thêm gừng hoặc muối) 15–20 phút trước ngủ — kéo dương khí xuống hạ tiêu, giúp não thư giãn.</li>
  <li>Uống trà tâm sen hoặc trà hoa cúc ấm — thanh tâm, trừ phiền nhiệt.</li>
  <li>Không dùng điện thoại sau 21h — ánh sáng xanh kích thích dương khí, cản trở quá trình âm khí phục hồi vào ban đêm.</li>
  <li>Ngủ trước 23h — giờ Tý (23h–1h) là thời điểm dương khí phục hồi mạnh nhất; ngủ đúng giờ này bổ khí tốt nhất.</li>
</ul>

<div class="art-cta-box">
  <p>Mất ngủ kéo dài trên 1 tháng cần thăm khám để xác định đúng thể bệnh. Điều trị sai thể không chỉ không hiệu quả mà có thể làm nặng thêm triệu chứng.</p>
</div>
    `
  }
];
