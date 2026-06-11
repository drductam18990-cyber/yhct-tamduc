// Dữ liệu bài viết kiến thức YHCT — thêm bài mới vào ĐẦU mảng (prepend)
// Schema: { id, slug, date, category, categoryLabel, icon, gradient, title, excerpt, readTime, content }
// category values: "mat-benh" | "khong-thuoc" | "thuoc-yhct" | "phong-benh" | "phuong-huyet"
// gradient values: "g-herb" | "g-amber" | "g-navy" | "g-fire" | "g-huyet"

const ARTICLES = [
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
