import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

const Introduce = () => {
    const content = [
        "Delta Fruits là template website bán lẻ Hoa Quả Nhập Khẩu củaDelta Web Team Việt Nam, với hơn 10 năm hoạt động trong lĩnh vực nhập khẩu và phân phối hoa quả từ các nước trên thế giới như Mỹ, Úc, New Zealand, ChiLe, ... Delta Fruits đã có hàng nghìn bạn hàng từ bắc vào nam, sang cả Lào và Campuchia, vì vậy V-Food hoàn toàn hiểu rõ về các đặc tính của từng loại sản phẩm, từng mùa vụ và cách bảo quản cũng như sử dụng tốt nhất cho từng loại trái cây.",
        "Sau nhiều năm bán buôn, đội ngũ lãnh đạo của Delta Fruits đã quyết định thành lập thương hiệu bán lẻ Hoa Quả Nhập Khẩu vào năm 2010, với cửa hàng đầu tiên ở 22 Hàng Muối với mong muốn đưa tới NGƯỜI TIÊU DÙNG những trái cây ngon trên toàn thế giới với chất lượng được đảm bảo, có nguồn gốc xuất xứ rõ ràng và quan trọng nhất giá phải rẻ nhất cho người tiêu dùng.",
        "Với cửa hàng phục vụ khách hàng một cách chân thành nhất và luôn mang lại cho khách hàng sự tin cậy nhờ luôn thực hiện đúng các cam kết về chất lượng hàng hóa luôn tươi ngon, có nguồn gốc rõ ràng, giá luôn thấp nhất thị trường nên đã được đông đảo khách hàng biết đến.",
        "Hầu như cửa hàng không sử dụng bất cứ một hình thức quảng cáo nào với mục đích bằng việc khẳng định chất lượng hàng hóa và phong cách phục vụ của mình rồi các khách hàng sẽ tự tìm đến với mình, quả thật là như vậy vì chỉ trong một thời gian ngắn cửa hàng Hoa Quả Nhập Khẩu đã được nhiều người biết đến ở khắp thành hố Hà Nội, trở thành một trong các từ khóa được Google đề xuất khi quý khách muốn tìm kiếm địa chỉ Hoa Quả Nhập Khẩu trên trang tìm kiếm của Google.",
        "Đã kinh doanh thì tất nhiên một công ty, cá nhân nào cũng muốn muốn có lợi nhuận tối đa và càng cao càng tốt nhưng ở Delta Fruits đội ngũ Ban Lãnh Đạo không đặt lợi nhuận lên hàng đầu mà đặt lợi ích về SỨC KHỎE, quyền được sử dụng các loại trái cây TƯƠI NGON, có NGUỒN GỐC xuất xứ với GIÁ RẺ mà tất cả mọi người đều có thể mua được mới là hàng đầu.",
    ];
    return (
        <>
            <DefaultLayout>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="page-title category-title">
                        <h1 class="title-head">
                            <Link>Giới thiệu</Link>
                        </h1>
                    </div>
                    <div class="content-page rte">
                        {content.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Introduce;
