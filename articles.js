// Dữ liệu bài viết kiến thức YHCT — thêm bài mới vào ĐẦU mảng (prepend)
// Schema: { id, slug, date, category, categoryLabel, icon, gradient, title, excerpt, readTime, content }
// category values: "mat-benh" | "khong-thuoc" | "thuoc-yhct" | "phong-benh" | "phuong-huyet" | "lam-dep"
// gradient values: "g-herb" | "g-amber" | "g-navy" | "g-fire" | "g-huyet" | "g-rose"

const ARTICLES = [
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
