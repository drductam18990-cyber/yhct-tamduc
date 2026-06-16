// Dữ liệu bài viết kiến thức YHCT — thêm bài mới vào ĐẦU mảng (prepend)
// Schema: { id, slug, date, category, categoryLabel, icon, gradient, title, excerpt, readTime, content }
// category values: "mat-benh" | "khong-thuoc" | "thuoc-yhct" | "phong-benh" | "phuong-huyet"
// gradient values: "g-herb" | "g-amber" | "g-navy" | "g-fire" | "g-huyet"

const ARTICLES = [
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
