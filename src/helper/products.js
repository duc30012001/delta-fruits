// Bap cai xanh
import bapCaiXanh1 from "../static/images/products/bap-cai-xanh-1.png";
import bapCaiXanh2 from "../static/images/products/bap-cai-xanh-2.png";
import bapCaiXanh3 from "../static/images/products/bap-cai-xanh-3.png";

// Cam
import cam1 from "../static/images/products/cam-1.png";
import cam2 from "../static/images/products/cam-2.png";
import cam3 from "../static/images/products/cam-3.png";

// Dua vang
import duaVang1 from "../static/images/products/dua-vang-1.png";
import duaVang2 from "../static/images/products/dua-vang-2.png";
import duaVang3 from "../static/images/products/dua-vang-3.png";

// Kiwi
import kiwi1 from "../static/images/products/kiwi-1.png";
import kiwi2 from "../static/images/products/kiwi-2.png";
import kiwi3 from "../static/images/products/kiwi-3.png";

// Sup lo
import supLo1 from "../static/images/products/sup-lo-1.png";
import supLo2 from "../static/images/products/sup-lo-2.png";
import supLo3 from "../static/images/products/sup-lo-3.png";

// Xoài
import xoai1 from "../static/images/products/xoai-1.png";
import xoai2 from "../static/images/products/xoai-2.png";
import xoai3 from "../static/images/products/xoai-3.png";

// Ca chua
import caChua1 from "../static/images/products/ca-chua-1.png";
import caChua2 from "../static/images/products/ca-chua-2.png";
import caChua3 from "../static/images/products/ca-chua-3.png";

// Dua hau
import duaHau1 from "../static/images/products/dua-hau-1.png";
import duaHau2 from "../static/images/products/dua-hau-2.png";
import duaHau3 from "../static/images/products/dua-hau-3.png";

const products = [
    {
        id: 1,
        name: "Bắp cải xanh",
        type: "Rau củ",
        status: "Hết hàng",
        price: 18000,
        oldPrice: 18000,
        images: [bapCaiXanh1, bapCaiXanh2, bapCaiXanh3],
        path: "/products/bap-cai-xanh",
        description:
            "Trong cải bắp còn có các chất chống ung thư như sulforaphane, phenethyl isothiocyanate và indol-33 carbinol. Tuy nhiên, còn rất nhiều tác dụng của bắp cải khác mà chúng ta ít biết tới:",
    },
    {
        id: 2,
        name: "Súp lơ tươi ngon",
        type: "Rau củ",
        status: "Còn hàng",
        price: 40000,
        oldPrice: 40000,
        images: [supLo1, supLo2, supLo3],
        path: "/products/sup-lo-tuoi-ngon",
        description:
            "Súp lơ xanh là một loại cây thuộc loài Cải bắp dại, có hoa lớn ở đầu, thường được dùng như rau. Bông cải xanh thường được chế biến bằng cách luộc hoặc hấp, nhưng cũng có thể được ăn sống như là rau sống trong những đĩa đồ nguội khai vị.",
    },
    {
        id: 3,
        name: "Xoài Thái ngọt",
        type: "Trái cây",
        status: "Còn hàng",
        price: 65000,
        oldPrice: 70000,
        images: [xoai1, xoai2, xoai3],
        path: "/products/xoai-thai-ngot",
        description:
            "Xoài Thái Lan cho trái tròn dài, hơi cong ở phía đuôi, vỏ xanh đậm có thể ăn xanh, chín đều rất ngon. Xoài Thái Lan là giống xoài ăn xanh được nhập từ Thái Lan. Vỏ trái có màu xanh đậm và rất dày, trọng lượng trái trung bình 300 - 350gr, khi trái vừa cứng bao đầu đã có vị ngọt, khoái khẩu.",
    },
    {
        id: 4,
        name: "Cam ngọt Hàm Yên",
        type: "Trái cây",
        status: "Còn hàng",
        price: 84000,
        oldPrice: 88000,
        images: [cam1, cam2, cam3],
        path: "/products/cam-ngot-ham-yen",
        description:
            "Cam được trồng rộng rãi ở những nơi có khí hậu ấm áp, và vị cam có thể biến đổi từ ngọt đến chua. Cam thường lột vỏ và ăn lúc còn tươi, hay vắt lấy nước.",
    },
    {
        id: 5,
        name: "Kiwi nhập khẩu",
        type: "Trái cây",
        status: "Còn hàng",
        price: 385000,
        oldPrice: 430000,
        images: [kiwi1, kiwi2, kiwi3],
        path: "/products/ki-wi-nhap-khau",
        description:
            "Quả kiwi có màu xanh và vàng rất đẹp mắt, mùi vị thơm ngon. Đây cũng là loại quả được xếp hạng trong top đầu các loại trái cây rất tốt cho sức khỏe và mang lại cho phụ nữ một làn da khỏe đẹp.",
    },
    {
        id: 6,
        name: "Dưa vàng loại to",
        type: "Trái cây",
        status: "Còn hàng",
        price: 150000,
        oldPrice: 168000,
        images: [duaVang1, duaVang2, duaVang3],
        path: "/products/dua-vang-loai-to",
        description:
            "Không phải ai cũng biết đến các thành phần dinh dưỡng như vitamin, khoáng chất và chất chống oxy hóa có trong loại trái cây này. Các nghiên cứu đã chứng minh được lợi ích của dưa vàng (dưa lưới) với sức khỏe con người giúp cải thiện đáng kể sức khỏe",
    },
    {
        id: 7,
        name: "Cà chua nhập khẩu",
        type: "Rau củ",
        status: "Còn hàng",
        price: 65000,
        oldPrice: 85000,
        images: [caChua1, caChua2, caChua3],
        path: "/products/ca-chua-nhap-khau",
        description:
            "Vì hiếm nên giá cà chua bi khá cao. Giá dao động từng ngày, có ngày rẻ thì 55.000, 60.0000 đồng một kg. Những ngày khan hiếm, giá đắt thì khoảng 80.000 đồng một kg",
    },
    {
        id: 8,
        name: "Dưa hấu Long An",
        type: "Trái cây",
        status: "Còn hàng",
        price: 45000,
        oldPrice: 50000,
        images: [duaHau1, duaHau2, duaHau3],
        path: "/products/dua-hau-long-an",
        description:
            "Dưa hấu chứa ít calo (46kg calo mỗi cốc), chứa hàm lượng vitamin A và vitamin C cao (dưa hấu cung cấp 17% lượng vitamin A và 20% lượng vitamin C cần thiết cho cơ thể bạn mỗi ngày)",
    },
];

export default products;
