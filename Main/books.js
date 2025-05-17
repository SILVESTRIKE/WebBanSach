const books = [
  {
    id: 1,
    name: "17 Âm 1",
    productimage:
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Doo Vandenis/17 âm 1 bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Doo Vandenis/17 âm 1 bìa.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Doo Vandenis/17 âm 1 bìa sau.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Doo Vandenis/trang 1.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Doo Vandenis/trang 2.jpg",
    ],
    author: "Doo Vandenis",
    tag: "Giả tưởng - kinh dị",
    price: "150,000 VND",
    rate: "⭐⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 2,
    name: "Sĩ Số Lớp Vắng 0",
    productimage:
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Emma Hạ My/sĩ số lớp vắng 0 bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Emma Hạ My/sĩ số lớp vắng 0 bìa.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Emma Hạ My/sĩ số lớp vắng 0 bìa sau.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Emma Hạ My/trang 1.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Emma Hạ My/trang 2.jpg",
    ],
    author: "Emma Hạ My",
    tag: " Giả tưởng - kinh dị",
    price: "130,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 3,
    name: "The Lord of the Rings",
    productimage:
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/J. R. R. Tolkien/The Lord of the Rings bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/J. R. R. Tolkien/The Lord of the Rings bìa.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/J. R. R. Tolkien/The Lord of the Rings bìa sau.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/J. R. R. Tolkien/The Lord of the Rings trang 1.png",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/J. R. R. Tolkien/The Lord of the Rings trang 2.png",
    ],
    author: "J. R. R. Tolkien",
    tag: " Giả tưởng - kinh dị",
    price: "200,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 4,
    name: "Lore",
    productimage:
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Alexandra Bracken/Lore bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Alexandra Bracken/Lore bìa.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Alexandra Bracken/Lore bìa sau.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Alexandra Bracken/Lore trang 1.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Alexandra Bracken/Lore trang 2.jpg",
    ],
    author: "Alexandra Bracken",
    tag: " Giả tưởng - kinh dị",
    price: "230,000 VND",
    rate: "⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 5,
    name: "Đứa Con Hoàng Kim",
    productimage:
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Pierce Brown/Đưa con hoàng kim bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Pierce Brown/Đưa con hoàng kim bìa.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Pierce Brown/Đưa con hoàng kim bìa sau.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Pierce Brown/trang 1.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Pierce Brown/trang 2.jpg",
    ],
    author: "Pierce Brown",
    tag: " Giả tưởng - kinh dị",
    price: "150,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 6,
    name: "The Firemane Saga-Master Of Furies ",
    productimage:
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Raymond E. Feist/The Firemane Saga-Master Of Furies bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Raymond E. Feist/The Firemane Saga-Master Of Furies bìa.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Raymond E. Feist/The Firemane Saga-Master Of Furies bìa sau.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Raymond E. Feist/The Firemane Saga-Master Of Furies trang 1.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Raymond E. Feist/The Firemane Saga-Master Of Furies trang 2.jpg",
    ],
    author: "Raymond E. Feistn",
    tag: " Giả tưởng - kinh dị",
    price: "170,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },

  {
    id: 7,
    name: "Từ Tân Thế Giới",
    productimage:
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Yusuke Kishi/từ tân thế giới bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Yusuke Kishi/từ tân thế giới bìa.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Yusuke Kishi/từ tân thế giới bìa sau.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Yusuke Kishi/trang 1.jpg",
      "Sách/Sách nước ngoài/Giả tưởng - kinh dị/Yusuke Kishi/trang 2.jpg",
    ],
    author: "Yusuke Kishi",
    tag: " Giả tưởng - kinh dị",
    price: "190,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 8,
    name: "Pinion - Book One (Jacob's Ladder Sequence)",
    productimage:
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Elizabeth Bear/Pinion - Book One (Jacob's Ladder Sequence) bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Elizabeth Bear/Pinion - Book One (Jacob's Ladder Sequence) bìa.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Elizabeth Bear/Pinion - Book One (Jacob's Ladder Sequence) bìa.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Elizabeth Bear/Pinion - Book One (Jacob's Ladder Sequence) trang 1.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Elizabeth Bear/Pinion - Book One (Jacob's Ladder Sequence) trang 2.jpg",
    ],
    author: "Elizabeth Bear",
    tag: "Khoa Học Viễn Tưỡng",
    price: "170,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 9,
    name: "The Kane Chronicles-Survival Guide",
    productimage:
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Riordan/The Kane Chronicles-Survival Guide bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Riordan/The Kane Chronicles-Survival Guide bìa.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Riordan/The Kane Chronicles-Survival Guide bìa sau.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Riordan/The Kane Chronicles-Survival Guide trang 1.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Riordan/The Kane Chronicles-Survival Guide trang 2.jpg",
    ],
    author: "Rick Riordan",
    tag: " Khoa Học Viễn Tưởng",
    price: "220,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 10,
    name: "The 5th Wave -The Last Star",
    productimage:
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Yancey/The 5th Wave -The Last Star bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Yancey/The 5th Wave -The Last Star bìa.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Yancey/The 5th Wave -The Last Star bìa sau.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Yancey/The 5th Wave -The Last Star trang 1.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Rick Yancey/The 5th Wave -The Last Star trang 2.jpg",
    ],
    author: "Rick Yancey",
    tag: "Khoa Học Viễn Tưởng",
    price: "190,000 VND",
    rate: "⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 11,
    name: "The Stranded",
    productimage:
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Sarah Daniels/The Stranded bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Sarah Daniels/The Stranded bìa.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Sarah Daniels/The Stranded bìa sau.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Elizabeth Bear/Pinion - Book One (Jacob's Ladder Sequence) trang 1.jpg",
      "Sách/Sách nước ngoài/Khoa học viễn tưỡng/Elizabeth Bear/Pinion - Book One (Jacob's Ladder Sequence) trang 2.jpg",
    ],
    author: "Sarah Daniels",
    tag: " Khoa Học Viễn Tưởng",
    price: "210,000 VND",
    rate: "⭐⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 12,
    name: "Phục hồi trâm cảm và lo âu",
    productimage:
      "Sách/Sách nước ngoài/Tâm lí/Ahra Kim/Phục hồi trâm cảm và lo âu bia.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Tâm lí/Ahra Kim/Phục hồi trâm cảm và lo âu bia.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Ahra Kim/Phục hồi trâm cảm và lo âu bia sau.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Ahra Kim/trang 1.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Ahra Kim/trang 2.jpg",
    ],
    author: "Ahra Kim",
    tag: "Tâm Lí",
    price: "200,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 13,
    name: "Khoa Học Tâm Thức",
    productimage:
      "Sách/Sách nước ngoài/Tâm lí/Carl Jung/Khoa học tâm thức bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Tâm lí/Carl Jung/Khoa học tâm thức bìa.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Carl Jung/Khoa học tâm thức bìa sau.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Carl Jung/trang 1.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Carl Jung/trang 2.jpg",
    ],
    author: "Carl Jung",
    tag: " Tâm Lí",
    price: "150,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 14,
    name: "Thuật Thao Túng",
    productimage:
      "Sách/Sách nước ngoài/Tâm lí/Wladislaw Jachtchenko/thuật thao túng người bìa.jpg",
    picturemenu: [
      "Sách/Sách nước ngoài/Tâm lí/Wladislaw Jachtchenko/thuật thao túng người bìa.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Wladislaw Jachtchenko/thuật thao túng người bìa sau.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Wladislaw Jachtchenko/trang 1.jpg",
      "Sách/Sách nước ngoài/Tâm lí/Wladislaw Jachtchenko/trang 2.jpg",
    ],
    author: "Wladislaw Jachtchenko",
    tag: "Tâm Lí",
    price: "230,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 15,
    name: "Gặp Lại Chốn Hồng Trần Sâu Nhất - Tái Bản 2019",
    productimage:
      "Sách/Sách Việt Nam/Ngôn Tình/Bạch Lạc Mai/Gặp Lại Chốn Hồng Trần Sâu Nhất - Tái Bản 2019 bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Ngôn Tình/Bạch Lạc Mai/Gặp Lại Chốn Hồng Trần Sâu Nhất - Tái Bản 2019 bìa.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Bạch Lạc Mai/Gặp Lại Chốn Hồng Trần Sâu Nhất - Tái Bản 2019 bìa sau.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Bạch Lạc Mai/Gặp Lại Chốn Hồng Trần Sâu Nhất - Tái Bản 2019 trang 1.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Bạch Lạc Mai/Gặp Lại Chốn Hồng Trần Sâu Nhất - Tái Bản 2019 trang 2.jpg",
    ],
    author: "Bạch Lạc Mai",
    tag: "Ngôn Tình",
    price: "130,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 16,
    name: "Bình Hoa",
    productimage:
      "Sách/Sách Việt Nam/Ngôn Tình/Khốn Ỷ Nguy Lâu/Bình hoa bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Ngôn Tình/Khốn Ỷ Nguy Lâu/Bình hoa bìa.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Khốn Ỷ Nguy Lâu/Bình hoa bìa sau.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Khốn Ỷ Nguy Lâu/trang 1.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Khốn Ỷ Nguy Lâu/trang 2.jpg",
    ],
    author: "Khốn Ỷ Nguy Lâu",
    tag: " Ngôn Tình",
    price: "150,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 17,
    name: "Một Nửa Ngọt Ngào, Một Nửa Đau Thương ",
    productimage:
      "Sách/Sách Việt Nam/Ngôn Tình/Kỳ Tử/Một Nửa Ngọt Ngào, Một Nửa Đau Thương bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Ngôn Tình/Kỳ Tử/Một Nửa Ngọt Ngào, Một Nửa Đau Thương bìa.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Kỳ Tử/Một Nửa Ngọt Ngào, Một Nửa Đau Thương bìa sau.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Kỳ Tử/Một Nửa Ngọt Ngào, Một Nửa Đau Thương trang 1.jpg",
      "Sách/Sách Việt Nam/Ngôn Tình/Kỳ Tử/Một Nửa Ngọt Ngào, Một Nửa Đau Thương trang 2.jpg",
    ],
    author: "Kỳ Tử",
    tag: "Tâm Lí",
    price: "230,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 18,
    name: "Sách Giáo Khoa Lớp 10",
    productimage: "Sách/Sách Việt Nam/SGK/SGK lớp 10/bo_sach.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/SGK/SGK lớp 10/bo_sach.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 10/Địa lí.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 10/Ngữ văn.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 10/Vật lí.jpg",
    ],
    author: "Nhiều Tác Giả",
    tag: "Sách Giáo Khoa Lớp 10",
    price: "150,000 VND",
    rate: "⭐⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 19,
    name: "Sách Giáo Khoa Lớp 11",
    productimage: "Sách/Sách Việt Nam/SGK/SGK lớp 11/bo sách.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/SGK/SGK lớp 11/bo sách.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 11/Tin học.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 11/toán.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 11/Vật lí.jpg",
    ],
    author: "Nhiều Tác Giả",
    tag: "Sách Giáo Khoa Lớp 11",
    price: "170,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 20,
    name: "Sách Giáo Khoa Lớp 12",
    productimage: "Sách/Sách Việt Nam/SGK/SGK lớp 12/bộ sách.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/SGK/SGK lớp 12/bộ sách.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 12/Hóa học.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 12/Ngữ Văn.jpg",
      "Sách/Sách Việt Nam/SGK/SGK lớp 12/Sinh học.jpg",
    ],
    author: "Nhiều Tác Giả",
    tag: "Sách Giáo Khoa Lớp 12",
    price: "200,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 21,
    name: "không gia đình",
    productimage:
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Hector Malot/không gia đình bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Hector Malot/không gia đình bìa.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Hector Malot/không gia đình bìa.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Hector Malot/trang 1.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Hector Malot/trang 2.jpg",
    ],
    author: "Hector Malot",
    tag: "Tác Phẩm Kinh Điển",
    price: "180,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 22,
    name: "Nanh Trắng",
    productimage:
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Jack London/nanh trắng bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Jack London/nanh trắng bìa.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Jack London/nanh trắng bìa sau.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Jack London/trang 1.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Jack London/trang 2.jpg",
    ],
    author: "Jack London",
    tag: "Tác Phẩm Kinh Điển",
    price: "190,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 23,
    name: "Thời Thơ Ấu",
    productimage:
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Macxim Gorki/thời thơ ấu bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Macxim Gorki/thời thơ ấu bìa.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Macxim Gorki/thời thơ ấu bìa sau.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Macxim Gorki/trang 1.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Macxim Gorki/trang 2.jpg",
    ],
    author: "Macxim Gorki",
    tag: "Tác Phẩm Kinh Điểm",
    price: "190,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 24,
    name: "Thần Thoại Hy Lạp",
    productimage:
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Nguyễn Văn Khỏa/Thần thoại hy lạp bia.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Nguyễn Văn Khỏa/Thần thoại hy lạp bia.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Nguyễn Văn Khỏa/Thần thoại hy lạp bia sau.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Nguyễn Văn Khỏa/trang 1.jpg",
      "Sách/Sách Việt Nam/Tác phẩm kinh điển/Nguyễn Văn Khỏa/trang 2.jpg",
    ],
    author: "Nguyễn Văn Khỏa",
    tag: " Tác Phẩm Kinh Điển",
    price: "210,000 VND",
    rate: "⭐⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 25,
    name: "Cây Cam Ngọt Của Tôi",
    productimage:
      "Sách/Sách Việt Nam/Tiểu thuyết/José Mauro de Vasconcelos/cây cam ngọt của tôi bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tiểu thuyết/José Mauro de Vasconcelos/cây cam ngọt của tôi bìa.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/José Mauro de Vasconcelos/cây cam ngọt của tôi bìa sau.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/José Mauro de Vasconcelos/trang 1.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/José Mauro de Vasconcelos/trang 2.jpg",
    ],
    author: "José Mauro de Vasconcelos",
    tag: "Tiểu Thuyết",
    price: "160,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 26,
    name: "Cánh Đồng Bất Tận (Tái bản 2019)",
    productimage:
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Ngọc Tư/Cánh Đồng bất tận bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Ngọc Tư/Cánh Đồng bất tận bìa.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Ngọc Tư/Cánh Đồng bất tận bìa sau.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Ngọc Tư/trang 1.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Ngọc Tư/trang 2.jpg",
    ],
    author: "Nguyễn Ngọc Tư",
    tag: "Tiểu Thuyết",
    price: "170,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 27,
    name: "Bảy Bước Tới Mùa Hè",
    productimage:
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/Bảy bước tới mùa hè bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/Bảy bước tới mùa hè bìa.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/Bảy bước tới mùa hè bìa bìa sau.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/Bảy bước tới mùa hè  trang 1.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/Bảy bước tới mùa hè  trang 2.jpg",
    ],
    author: "Nguyễn Nhật Ánh",
    tag: "Tiểu Thuyết",
    price: "150,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 28,
    name: "Lá Nằm Trong Lá",
    productimage:
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/lá nằm trong lá bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/lá nằm trong lá bìa.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/lá nằm trong lá bìa sau.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/lá nằm trong lá trang 1.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Nguyễn Nhật Ánh/lá nằm trong lá trang 2.jpg",
    ],
    author: "Nguyễn Nhật Ánh",
    tag: "Tiểu Thuyết",
    price: "150,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 29,
    name: "Tận Đáy cảm xúc",
    productimage:
      "Sách/Sách Việt Nam/Tiểu thuyết/Patricia Highsmith/tận đáy cảm xúc bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Tiểu thuyết/Patricia Highsmith/tận đáy cảm xúc bìa.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Patricia Highsmith/tận đáy cảm xúc bìa sau.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Patricia Highsmith/trang 1.jpg",
      "Sách/Sách Việt Nam/Tiểu thuyết/Patricia Highsmith/trang 2.jpg",
    ],
    author: "Patricia Highsmith",
    tag: "Tiểu Thuyết",
    price: "140,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },

  {
    id: 30,
    name: "Tạm Biệt Tôi Của Những Năm Về Trước",
    productimage:
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/An/tạm biệt tôi của những năm về trước bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/An/tạm biệt tôi của những năm về trước bìa.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/An/tạm biệt tôi của những năm về trước bìa sau.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/An/trang 1.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/An/trang 2.jpg",
    ],
    author: "An",
    tag: "Truyện Ngắn-Tân Văn",
    price: "180,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 31,
    name: "Mẹ Làm Gì Có Ước Mơ",
    productimage:
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Hạ Mer/mẹ là gì có ước mơ bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Hạ Mer/mẹ là gì có ước mơ bìa.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Hạ Mer/mẹ là gì có ước mơ bìa sau.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Hạ Mer/trang 1.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Hạ Mer/trang 2.jpg",
    ],
    author: "Hạ Mer",
    tag: "Truyện Ngắn-Tân văn",
    price: "190,000 VND",
    rate: "⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
  {
    id: 32,
    name: "Uống Dòng Suối Núi",
    productimage:
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Lama Kunga Rinpoche, Brian Cutillo/uống dòng suối núi bìa.jpg",
    picturemenu: [
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Lama Kunga Rinpoche, Brian Cutillo/uống dòng suối núi bìa.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Lama Kunga Rinpoche, Brian Cutillo/uống dòng suối núi bìa sau.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Lama Kunga Rinpoche, Brian Cutillo/trang 1.jpg",
      "Sách/Sách Việt Nam/Truyện ngắn -Tân văn/Lama Kunga Rinpoche, Brian Cutillo/trang 2.jpg",
    ],
    author: "Lama Kunga Rinpoche, Brian Cutillo",
    tag: "Truyện Ngắn-Tân văn",
    price: "160,000 VND",
    rate: "⭐⭐⭐⭐",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aliquam debitis ratione, veritatis dolorum iste modi praesentium voluptatum, aut quo quasi deserunt, at earum ut blanditiis tenetur illo cupiditate reiciendis."
  },
];
function addBook(newBook) {
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
}

function getNextBookId() {
  if (books.length === 0) {
    return 1;
  }
  const ids = books.map(book => book.id);
  return Math.max(...ids) + 1;
}

document.addEventListener('DOMContentLoaded', () => {
  const storedBooks = JSON.parse(localStorage.getItem('books'));
  if (storedBooks) {
    books.length = 0;
    books.push(...storedBooks);
  }
});