const filters = [
    {
        title: "Mức giá",
        options: [
            {
                id: "gia-duoi-100",
                value: "Giá dưới 100.000₫",
                max: 100000,
                min: 0,
            },
            {
                id: "100-200",
                value: "100.000₫ - 200.000₫",
                max: 200000,
                min: 100000,
            },
            {
                id: "200-300",
                value: "200.000₫ - 300.000₫",
                max: 300000,
                min: 200000,
            },
            {
                id: "300-500",
                value: "300.000₫ - 500.000₫",
                max: 500000,
                min: 300000,
            },
            {
                id: "500-1000",
                value: "500.000₫ - 1.000.000₫",
                max: 1000000,
                min: 500000,
            },
            {
                id: "tren-1000",
                value: "Giá trên 1.000.000₫",
                max: 1000000000,
                min: 1000000,
            },
        ],
    },
    {
        title: "Loại sản phẩm",
        options: [
            { id: "rau-cu", value: "Rau củ" },
            { id: "trai-cay", value: "Trái cây" },
        ],
    },
    {
        title: "Tìm kích thước",
        options: [
            { id: "lon", value: "Lớn" },
            { id: "to", value: "To" },
            { id: "trung-binh", value: "Trung bình" },
            { id: "nho", value: "Nhỏ" },
            { id: "rat-nho", value: "Rất nhỏ" },
        ],
    },
];

export default filters;

export const sorts = [
    {
        type: "sortDate",
        id: "oldest",
        name: "Hàng cũ nhất",
    },
    {
        type: "sortDate",

        id: "newest",
        name: "Hàng mới về",
    },
    {
        type: "sortPrice",

        id: "increase-price",
        name: "Giá tăng dần",
    },
    {
        type: "sortPrice",

        id: "decrease-price",
        name: "Giá giảm dần",
    },
];
