import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

import numberWithCommas from "../helper/numberWithCommas";
import { handleAddToCart } from "../helper/handleAddToCart";
import { setQuickView } from "../redux/quickViewSlice";
import DefaultLayout from "../layout/DefaultLayout";

const ProductDetail = () => {
    // Get product detail
    const products = useSelector((state) => state.products.value);
    const param = useParams();
    const result = products.filter((item) => item.path.includes(param.id));
    const product = result[0];
    const dispatch = useDispatch();

    // set large thumbnail
    const [active, setActive] = useState(0);

    const [quantity, setQuantity] = useState(1);

    //tab
    const tabs = [
        {
            id: "tab-1",
            title: "Mô tả sản phẩm",
            value: product.description,
        },
        {
            id: "tab-2",
            title: "Tab tùy chỉnh",
            value: "Nội dung tùy chỉnh viết ở đây",
        },
        {
            id: "tab-3",
            title: "Đánh giá",
            value: "Đánh giá",
        },
    ];

    const [content, setContent] = useState({
        id: tabs[0].id,
        value: tabs[0].value,
    });

    const handleContent = (tab) => {
        setContent({
            id: tab.id,
            value: tab.value,
        });
    };

    const handleAdd = (product) => {
        if (product.status !== "Hết hàng") {
            handleAddToCart("add-item", product, dispatch, quantity);
            dispatch(
                setQuickView({
                    product: product,
                    openQuickView: false,
                    openModal: true,
                }),
            );
        }
    };

    return (
        <>
            <DefaultLayout>
                <section className="product margin-top-10 f-left w_100">
                    <div className="container">
                        <div className="row">
                            <div className="section">
                                <div className="details-product section">
                                    <div className="product-detail-left product-images col-xs-12 col-sm-6 col-md-offset-0 col-lg-offset-0 col-sm-offset-3 col-md-4 col-lg-4">
                                        <div className="details-product__thumb">
                                            <img
                                                src={product.images[active]}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="details-product__thumb-list">
                                            {product.images.map(
                                                (image, index) => (
                                                    <div
                                                        onClick={() =>
                                                            setActive(index)
                                                        }
                                                        key={index}
                                                        className={`details-product__thumb-list-item ${
                                                            active === index
                                                                ? "active-thumb"
                                                                : ""
                                                        }`}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={product.name}
                                                        />
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 details-pro">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <h1 className="title-product">
                                                    {product.name}
                                                </h1>
                                                <div className="fw w_100">
                                                    <div className="group-status">
                                                        <span className="first_status">
                                                            Loại:{" "}
                                                            <span className="status_name">
                                                                {product.type}
                                                            </span>
                                                        </span>
                                                        <span className="first_status section margin-bottom-10">
                                                            Tình trạng:{" "}
                                                            <span className="status_name availabel">
                                                                {product.status}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="section">
                                                        <div className="rte">
                                                            <p>
                                                                {
                                                                    product.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="reviews_details_product">
                                                        <div
                                                            className="bizweb-product-reviews-badge"
                                                            data-id="12806175"
                                                        ></div>
                                                    </div>

                                                    <div className="price-box">
                                                        <div className="special-price">
                                                            <span className="price product-price">
                                                                {numberWithCommas(
                                                                    product.price,
                                                                )}
                                                                ₫
                                                            </span>
                                                        </div>
                                                        {/* <!-- Giá --> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="form-product col-sm-12">
                                                    <form
                                                        id="add-to-cart-form"
                                                        className="form-inline margin-bottom-0"
                                                    >
                                                        <div className="box-variant clearfix">
                                                            <input
                                                                type="hidden"
                                                                name="variantId"
                                                                value="20924498"
                                                            />
                                                        </div>
                                                        <div className="form-group form_button_details">
                                                            <div className="form_product_content">
                                                                <div
                                                                    className={`soluong ${
                                                                        product.status ===
                                                                        "Hết hàng"
                                                                            ? "hidden"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    <div className="label_sl margin-bottom-5">
                                                                        Số
                                                                        lượng:
                                                                    </div>
                                                                    <div className="custom input_number_product custom-btn-number form-control">
                                                                        <button
                                                                            className="btn_num num_1 button button_qty"
                                                                            onClick={() =>
                                                                                setQuantity(
                                                                                    (
                                                                                        prev,
                                                                                    ) =>
                                                                                        prev ===
                                                                                        1
                                                                                            ? 1
                                                                                            : prev -
                                                                                              1,
                                                                                )
                                                                            }
                                                                            type="button"
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="qtym"
                                                                            name="quantity"
                                                                            value={
                                                                                quantity
                                                                            }
                                                                            className="form-control prd_quantity"
                                                                        />
                                                                        <button
                                                                            className="btn_num num_2 button button_qty"
                                                                            onClick={() =>
                                                                                setQuantity(
                                                                                    quantity +
                                                                                        1,
                                                                                )
                                                                            }
                                                                            type="button"
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="button_actions clearfix">
                                                                    <button
                                                                        className="btn btn_base btn_dis btn-cart"
                                                                        disabled={
                                                                            products.status ===
                                                                            "Hết hàng"
                                                                        }
                                                                        onClick={(
                                                                            e,
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            handleAdd(
                                                                                product,
                                                                            );
                                                                        }}
                                                                    >
                                                                        <span className="iconleft_button">
                                                                            <i className="fa fa-shopping-basket"></i>
                                                                        </span>
                                                                        <span className="txt-main">
                                                                            {product.status ===
                                                                            "Hết hàng"
                                                                                ? "Hết hàng"
                                                                                : "Cho vào giỏ hàng"}
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="section note_details">
                                                    <b>Ghi chú</b>
                                                    <p>
                                                        Đơn vị tính cho sản phẩm
                                                        rau,củ,quả,thịt,cá là:
                                                        Giá tiền/Kg - số lượng
                                                        tính bằng Kg.
                                                        <br />
                                                        - Đối với mặt hàng nước
                                                        uống, và sản phẩm khác -
                                                        được tính bằng Giá tiền/
                                                        số lượng sản phẩm.
                                                        <br />
                                                        - Nếu khách hàng có nhu
                                                        cầu mua số lẻ, hoặc số
                                                        lượng lớn vui lòng liên
                                                        hệ trực tiếp.
                                                        <br />
                                                        Xin cảm ơn !
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ==================================================== */}
                                <div className="tab_h section">
                                    <div className="col-xs-12 col-lg-12 col-sm-12 col-md-12">
                                        {/* <!-- Nav tabs --> */}
                                        <div className="product-tab e-tabs not-dqtab">
                                            <ul className="tabs tabs-title clearfix">
                                                {tabs.map((tab, index) => (
                                                    <li
                                                        key={index}
                                                        className={`tab-link  ${
                                                            tab.id ===
                                                            content.id
                                                                ? "current"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleContent(tab)
                                                        }
                                                    >
                                                        <h3>
                                                            <span>
                                                                {tab.title}
                                                            </span>
                                                        </h3>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="tab-float">
                                                <div
                                                    id="tab-1"
                                                    className="tab-content content_extab current"
                                                >
                                                    <div className="rte">
                                                        {content.value}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </>
    );
};

export default ProductDetail;
