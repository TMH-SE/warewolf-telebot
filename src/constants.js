const characters = {
  village: {
    name: "Dân làng",
    description:
      "<b>Chức năng:</b> Suy luận đoán ra ai là Sói để treo cổ vào buổi sáng.\n<b>Mô tả:</b> Dân làng cùng với những người có chức năng tìm cách lập luận và suy đoán ra đâu là Sói đang ẩn mình dưới lớp người.\n<b>Lưu ý:</b> Có nhiều thời gian và có nhiều cơ hội suy đoán hơn tất cả.\n<b>Lời khuyên:</b> Đừng để vai trò dân làng của bạn trở nên vô ích. Bạn có thể treo cổ Sói. ",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486138/werewolf/la-bai-dan-lang_tbbwi7.jpg",
  },
  werewolf: {
    name: "Ma sói",
    description:
      "<b>Chức năng:</b> Giết dân làng.\n<b>Mô tả:</b> Mỗi đêm, quản trò gọi Ma Sói dậy và Ma Sói sẽ chọn 1 dân làng để giết.\n<b>Lưu ý:</b> Ma Sói có thể chọn không cắn. Ma Sói có thể tự cắn nhau (tự sát).\n<b>Lời khuyên:</b> Sói nên có sự phối hợp với nhau thật tốt, cố gắng tìm ra người cần thiết để cắn trong đêm.",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486138/werewolf/la-bai-ma-soi_i97gy1.jpg",
  },
  seer: {
    name: "Tiên tri",
    description:
      "<b>Chức năng:</b> Tìm ma sói.\n<b>Mô tả:</b> Mỗi đêm, quản trò gọi Nhà tiên tri dậy. Nhà tiên tri sẽ chọn 1 người chơi để đoán, nếu đó là Sói, quản trò sẽ giơ ngón tay cái lên, ngược lại, nếu không phải thì quản trò sẽ lắc tay.\n<b>Lời khuyên:</b> Cố gắng quan sát để tìm ra sói trong đêm, ban ngày cố gắng thuyết phục mọi người và ra mặt đúng lúc.",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486139/werewolf/tien-tri_zixhwi.jpg",
  },
  guard: {
    name: "Bảo vệ",
    description:
      "<b>Chức năng:</b> Cứu dân làng.\n<b>Mô tả:</b> Mỗi đêm, quản trò sẽ gọi bảo vệ dậy. Bảo vệ sẽ chọn một người bất kì mà anh ta nghĩ là bị Sói cắn để bảo vệ. Nếu người anh ta bảo vệ mà bị Sói cắn, sẽ không bị chết vào sáng hôm sau.\n<b>Lưu ý:</b> Bảo vệ có quyền tự cứu mình. Bảo vệ không được cứu 1 người 2 lượt liên tiếp.\n<b>Lời khuyên:</b> Cố gắng quan sát để cứu được người bị hại và ra mặt đúng lúc.",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486138/werewolf/la-bai-bao-ve_bajfwh.jpg",
  },
  hunter: {
    name: "Thợ săn",
    description:
      "<b>Chức năng:</b> Khi chết sẽ được chọn một người chết theo mình.\n<b>Mô tả:</b> Trong đêm Thợ Săn sẽ chọn một người, nếu Thợ Săn chết trong đêm thì người bị Thợ Săn chọn sẽ chết chung với Thợ Săn. ( Nếu người bị Thợ Săn chọn chết trong đêm thì Thợ Săn không chết theo ). Ban ngày Thợ Săn bị treo cổ chết thì sẽ chọn một người chết theo mình.\n<b>Lưu ý:</b> Thợ Săn bắn ai thì người đó chắc chắn phải chết.\n<b>Lời khuyên:</b> Chăm chú tìm ra Sói để bắn. Ra mặt khi cần thiết để đe dọa Sói.",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486138/werewolf/la-bai-bao-ve_bajfwh.jpg",
  },
  witch: {
    name: "Phù thủy",
    description:
      "<b>Chức năng:</b> Có 1 bình cứu người và 1 bình giết người.\n<b>Mô tả:</b> Mỗi đêm, quản trò sẽ gọi phù thủy dậy. Phù thủy có quyền thực hiện hay không thực hiện chức năng của mình. Chức năng đó là chọn 1 người bị Sói cắn để cứu sống và giết chết 1 người mà phù thủy nghi là Sói.\n<b>Lưu ý:</b> Được quản trò chỉ ra người bị Sói cắn để cứu. Có quyền xài 1 hoặc cả 2 bình. Bình xài rồi sẽ mất tác dụng.\n<b>Lời khuyên:</b> Có quyền năng trong tay nên cần sử dụng khôn ngoan nhất có thể.",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486139/werewolf/la-bai-phu-thuy_yc0mfg.jpg",
  },
  oldMan: {
    name: "Già làng",
    description:
      "<b>Chức năng:</b> Có 2 mạng, khi bị sói cắn lần đầu không chết và khi bị cắn sẽ được quản trò thông báo cho già làng biết. Khi già làng chết các chức năng: tiên tri, bảo vệ, pháp sư câm sẽ mất.\n<b>Mô tả:</b> Đóng vai trò quan trọng ở phe dân làng.",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486138/werewolf/la-bai-gia-lang_tabssp.jpg",
	},
	cupid: {
    name: "Thần tình yêu",
    description:
      "<b>Chức năng:</b> Ghép đôi 2 nhân vật ngẫu nhiên lại với nhau. Nếu 1 người + 1 sói sẽ trở thành phe thứ 3.\n<b>Mô tả:</b> Quản trò sẽ gọi Thần Tình Yêu dậy vào đêm đầu tiên. Thần Tình Yêu sẽ chọn 2 người trong làng bất kỳ yêu nhau. Khi 1 trong 2 bị chết với bất kỳ lý do nào, cả 2 phải cùng chết! Hai người ghép đôi sẽ được quản trò chạm nhẹ để 2 người mở mắt và biết nhân vật của nhau.\n<b>Lưu ý:</b> Thần Tình Yêu có thể tự ghép chính mình.",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486138/werewolf/la-bai-gia-lang_tabssp.jpg",
  },
  semiWerewolf: {
    name: "Bán sói",
    description:
      "<b>Chức năng:</b> là một dân làng bình thuờng nhưng nếu bị sói cắn sẽ không chết mà sẽ trở thành sói trong những đêm sau.\n<b>Mô tả:</b> Là một người dân, nhưng theo phe sói.\n<b>Lưu ý:</b> Mỗi đêm quản trò sẽ gọi Bán sói dậy nếu quản trò gật đầu thì đêm sau sẽ thức dậy cùng với sói.",
    image:
      "https://res.cloudinary.com/hieuhutieu/image/upload/v1601486138/werewolf/la-bai-ban-soi_wlhzkj.jpg",
  },
};

const rules = {
  8: {
		seer: 1,
		guard: 1,
		werewolf: 2,
		village: 4
	},
	9: {
		seer: 1,
		guard: 1,
		werewolf: 2,
		village: 5
	},
	10: {
		seer: 1,
		guard: 1,
		hunter: 1,
		werewolf: 3,
		village: 4
	},
	11: {
		seer: 1,
		guard: 1,
		hunter: 1,
		werewolf: 3,
		village: 5
	},
	12: {
		seer: 1,
		guard: 1,
		hunter: 1,
		cupid: 1,
		werewolf: 3,
		village: 5
	},
	13: {
		seer: 1,
		guard: 1,
		hunter: 1,
		cupid: 1,
		werewolf: 3,
		village: 6
  },
};

module.exports = {
	characters,
	rules
}
