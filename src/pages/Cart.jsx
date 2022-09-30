import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleAddToCart } from "../helper/handleAddToCart";
import numberWithCommas from "../helper/numberWithCommas";
import DefaultLayout from "../layout/DefaultLayout";

const CartList = ({ products }) => {
    const dispatch = useDispatch();
    const handle = (e, action, product) => {
        e.preventDefault();
        handleAddToCart(action, product, dispatch, 1);
    };
    let total = 0;
    return (
        <>
            <div class="col-main cart_desktop_page cart-page">
                <div class="cart page_cart cart_des_page hidden-xs-down">
                    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 pd-right cart_desktop">
                        <form action="/cart" method="post" novalidate="">
                            <div class="bg-scroll">
                                <div class="cart-thead">
                                    <div
                                        class="text-left"
                                        style={{ width: "43%" }}
                                    >
                                        <span>
                                            Sản phẩm<span></span>
                                        </span>
                                    </div>
                                    <div
                                        style={{ width: "19%" }}
                                        class="a-center"
                                    >
                                        <span class="nobr">Giá</span>
                                    </div>
                                    <div
                                        style={{ width: "13%" }}
                                        class="a-center"
                                    >
                                        Số lượng
                                    </div>
                                    <div
                                        style={{ width: "25%" }}
                                        class="a-center"
                                    >
                                        Thành tiền
                                    </div>
                                </div>
                                <div class="cart-tbody">
                                    {products.map((product, index) => {
                                        total +=
                                            product.price * product.quantity;
                                        return (
                                            <div
                                                key={index}
                                                class="item-cart productid-20924464"
                                            >
                                                <div
                                                    class="content_ content_s"
                                                    style={{ width: "15%" }}
                                                >
                                                    <Link
                                                        class="product-image"
                                                        title={product.name}
                                                        to={product.path}
                                                    >
                                                        <img
                                                            width="75"
                                                            height="auto"
                                                            alt={product.name}
                                                            src={product.image}
                                                        />
                                                    </Link>
                                                </div>
                                                <div
                                                    class="content_ content_s"
                                                    style={{ width: "28%" }}
                                                >
                                                    <h3 class="product-name">
                                                        <Link
                                                            class="text2line"
                                                            to={product.path}
                                                            title={product.name}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </h3>
                                                    {/* <span class="variant-title" style="display: none;">Default Title</span> */}
                                                    <button
                                                        class="button remove-item remove-item-cart"
                                                        title="Xoá sản phẩm"
                                                        onClick={(e) =>
                                                            handle(
                                                                e,
                                                                "remove-item",
                                                                product,
                                                            )
                                                        }
                                                    >
                                                        <i
                                                            class="fa fa-trash"
                                                            aria-hidden="true"
                                                        ></i>
                                                        Xóa sản phẩm
                                                    </button>
                                                </div>
                                                <div
                                                    style={{ width: "20%" }}
                                                    class="a-center"
                                                >
                                                    <span class="item-price">
                                                        <span class="price bold-price">
                                                            {numberWithCommas(
                                                                product.price,
                                                            )}
                                                            ₫
                                                        </span>
                                                    </span>
                                                </div>
                                                <div
                                                    style={{ width: "15%" }}
                                                    class="a-center"
                                                >
                                                    <div class="input_qty_pr">
                                                        <input
                                                            class="variantID"
                                                            type="hidden"
                                                            name="variantId"
                                                            value="20924464"
                                                        />
                                                        <button
                                                            class="reduced_pop items-count btn-minus"
                                                            type="button"
                                                            onClick={(e) =>
                                                                handle(
                                                                    e,
                                                                    "decrease",
                                                                    product,
                                                                )
                                                            }
                                                        >
                                                            –
                                                        </button>
                                                        <input
                                                            type="text"
                                                            class="input-text number-sidebar input_pop input_pop qtyItem20924464"
                                                            id="qtyItem20924464"
                                                            name="Lines"
                                                            size="4"
                                                            value={
                                                                product.quantity
                                                            }
                                                            onChange={() =>
                                                                console.log("")
                                                            }
                                                        />
                                                        <button
                                                            class="increase_pop items-count btn-plus"
                                                            type="button"
                                                            onClick={(e) =>
                                                                handle(
                                                                    e,
                                                                    "increase",
                                                                    product,
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{ width: "22%" }}
                                                    class="a-center"
                                                >
                                                    <span class="item-price cart-price">
                                                        <span class="price pink">
                                                            {numberWithCommas(
                                                                product.price *
                                                                    product.quantity,
                                                            )}
                                                            ₫
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div
                                    class="btn_bottom"
                                    onclick="window.location.href='/collections/all'"
                                >
                                    <Link
                                        to="/products"
                                        class="button btn-continue"
                                        title="Tiếp tục mua hàng"
                                    >
                                        <span>
                                            <span>Tiếp tục mua hàng</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 cart-collaterals cart_submit row margin-top-15">
                        <div class="totals">
                            <div class="totals">
                                <div class="inner">
                                    <div class="wrap_checkprice">
                                        <div class="li_table shopping-cart-table-total hidden">
                                            <span class="li-left">
                                                Tạm tính:
                                            </span>
                                            <span class="li-right totals_price price pink">
                                                {numberWithCommas(total)}₫
                                            </span>
                                        </div>
                                        <div class="li_table shopping-cart-table-total">
                                            <span class="li-left li_text">
                                                Thành tiền:
                                            </span>
                                            <span class="li-right totals_price price">
                                                {numberWithCommas(total)}₫
                                            </span>
                                        </div>
                                    </div>
                                    <div class="wrap_btn">
                                        <Link
                                            class="button btn-proceed-checkout"
                                            title="Tiến hành thanh toán"
                                            to="/checkout"
                                        >
                                            <span>Tiến hành thanh toán</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartItems.value);
    const handle = (e, action, product) => {
        e.preventDefault();
        handleAddToCart(action, product, dispatch, 1);
    };
    let total = 0;
    return (
        <DefaultLayout>
            <section class="main-cart-page main-container col1-layout">
                <div class="main container hidden-xs">
                    <div class="wrap_background_aside padding-top-15 margin-bottom-40">
                        <div class="header-cart">
                            <h1 class="title_cart">
                                <Link to="#">
                                    Giỏ hàng của bạn
                                    <span>
                                        (
                                        <span class="cart-popup-count">
                                            {cartItems.length}
                                        </span>
                                        sản phẩm)
                                    </span>
                                </Link>
                            </h1>
                            {cartItems.length === 0 ? (
                                <p>
                                    Không có sản phẩm nào. Quay lại cửa hàng để
                                    tiếp tục mua sắm.
                                </p>
                            ) : (
                                ""
                            )}
                            <div class="header-cart title_cart_pc hidden-sm hidden-xs"></div>
                        </div>
                        {cartItems.length === 0 ? (
                            ""
                        ) : (
                            <CartList products={cartItems} />
                        )}
                    </div>
                </div>
                {cartItems.length === 0 ? (
                    ""
                ) : (
                    <div class="wrap_background_aside padding-top-15 margin-bottom-40 padding-left-0 padding-right-0 hidden-md hidden-lg hidden-sm">
                        <div class="cart-mobile">
                            <form class="margin-bottom-0">
                                <div class="header-cart">
                                    <div class="title-cart title_cart_mobile">
                                        <h3>Giỏ hàng của bạn</h3>
                                    </div>
                                </div>

                                <div
                                    class="header-cart-content"
                                    style={{ background: "#fff" }}
                                >
                                    <div class="cart_page_mobile content-product-list">
                                        {cartItems.map((product, index) => {
                                            total +=
                                                product.price *
                                                product.quantity;
                                            return (
                                                <div
                                                    key={index}
                                                    class="item-product item productid-20924464"
                                                >
                                                    <div class="item-product-cart-mobile">
                                                        <Link to={product.path}>
                                                            {" "}
                                                        </Link>
                                                        <Link
                                                            class="product-images1"
                                                            title={product.name}
                                                        >
                                                            <img
                                                                width="80"
                                                                height="150"
                                                                src={
                                                                    product.image
                                                                }
                                                                alt={
                                                                    product.name
                                                                }
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div class="title-product-cart-mobile">
                                                        <h3>
                                                            <Link
                                                                to={
                                                                    product.path
                                                                }
                                                                title={
                                                                    product.name
                                                                }
                                                            >
                                                                {product.name}
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            Giá:{" "}
                                                            <span>
                                                                {numberWithCommas(
                                                                    product.price,
                                                                )}
                                                                ₫
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div class="select-item-qty-mobile">
                                                        <div class="txt_center">
                                                            <input
                                                                class="variantID"
                                                                type="hidden"
                                                                name="variantId"
                                                                value="20924464"
                                                            />
                                                            <button
                                                                onclick={(e) =>
                                                                    handle(
                                                                        e,
                                                                        "decrease",
                                                                        product,
                                                                    )
                                                                }
                                                                class="reduced items-count btn-minus"
                                                                type="button"
                                                            >
                                                                –
                                                            </button>
                                                            <input
                                                                class="input-text number-sidebar qtyMobile20924464"
                                                                name="Lines"
                                                                size="4"
                                                                value={
                                                                    product.quantity
                                                                }
                                                            />
                                                            <button
                                                                onclick={(e) =>
                                                                    handle(
                                                                        e,
                                                                        "increase",
                                                                        product,
                                                                    )
                                                                }
                                                                class="increase items-count btn-plus"
                                                                type="button"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <butotn
                                                            class="button remove-item remove-item-cart"
                                                            onClick={(e) =>
                                                                handle(
                                                                    e,
                                                                    "remove-item",
                                                                    product,
                                                                )
                                                            }
                                                        >
                                                            Xoá
                                                        </butotn>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div class="header-cart-price">
                                        <div class="title-cart">
                                            <h3 class="text-xs-left">
                                                Tổng tiền
                                            </h3>
                                            <Link class="text-xs-right pull-right totals_price_mobile">
                                                {numberWithCommas(total)}₫
                                            </Link>
                                        </div>
                                        <div class="checkout">
                                            <Link
                                                class="btn-proceed-checkout-mobile"
                                                title="Tiến hành thanh toán"
                                                type="button"
                                                to="./checkout"
                                            >
                                                <span>
                                                    Tiến hành thanh toán
                                                </span>
                                            </Link>
                                            <Link
                                                class="btn btn-white f-left"
                                                title="Tiếp tục mua hàng"
                                                type="button"
                                                to="/products"
                                            >
                                                <span>Tiếp tục mua hàng</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </section>
        </DefaultLayout>
    );
};

export default Cart;
