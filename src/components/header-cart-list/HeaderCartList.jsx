import React from "react";
import { useDispatch, useSelector } from "react-redux";
import numberWithCommas from "../../helper/numberWithCommas";
import { Link } from "react-router-dom";
import { handleAddToCart } from "../../helper/handleAddToCart";

const HeaderCartList = () => {
    const cartItems = useSelector((state) => state.cartItems.value);

    const dispatch = useDispatch();

    const handleCart = (action, product) => {
        console.log(action, product);
        handleAddToCart(action, product, dispatch, 1);
    };

    let totalPrice = 0;
    return (
        <ul id="cart-sidebar" className="mini-products-list count_li">
            <ul className="list-item-cart">
                {cartItems?.map((product, index) => {
                    totalPrice += product.price * product.quantity;
                    return (
                        <li className="item productid-20924464" key={index}>
                            <div className="border_list">
                                <Link
                                    className="product-image"
                                    to={product.path}
                                    title={product.name}
                                >
                                    <img
                                        alt={product.name}
                                        src={product.image}
                                        width="100"
                                    />
                                </Link>
                                <div className="detail-item">
                                    <div className="product-details">
                                        <p className="product-name">
                                            <Link
                                                className="text2line"
                                                to={product.path}
                                                title={product.name}
                                            >
                                                {product.name}
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="product-details-bottom">
                                        <span className="price">
                                            {numberWithCommas(product.price)}₫
                                        </span>
                                        <button
                                            onClick={() =>
                                                handleCart(
                                                    "remove-item",
                                                    product,
                                                )
                                            }
                                            title="Xóa"
                                            className="remove-item-cart fa-solid fa-trash"
                                        >
                                            x
                                        </button>
                                        <div className="quantity-select qty_drop_cart">
                                            <input
                                                className="variantID"
                                                type="hidden"
                                                name="variantId"
                                                value="20924464"
                                            />
                                            <button
                                                onClick={() =>
                                                    handleCart(
                                                        "decrease",
                                                        product,
                                                    )
                                                }
                                                className="btn_reduced reduced items-count btn-minus"
                                                disabled=""
                                                type="button"
                                            >
                                                –
                                            </button>

                                            <input
                                                type="text"
                                                onChange={() => console.log("")}
                                                readOnly=""
                                                className="input-text number-sidebar"
                                                name="Lines"
                                                value={product.quantity}
                                            />
                                            <button
                                                onClick={() =>
                                                    handleCart(
                                                        "increase",
                                                        product,
                                                    )
                                                }
                                                className="btn_increase increase items-count btn-plus"
                                                type="button"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="pd">
                <div className="top-subtotal">
                    Tổng tiền:
                    <span className="price price_big">
                        {numberWithCommas(totalPrice)}₫
                    </span>
                </div>
            </div>
            <div className="pd right_ct">
                <Link to="/checkout" className="btn btn-primary">
                    <span>Tiến hành thanh toán</span>
                </Link>
                <Link to="/cart" className="btn btn-white hidden">
                    <span>Đi đến giỏ hàng</span>
                </Link>
            </div>
        </ul>
    );
};

export default HeaderCartList;
