import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../static/css/checkout-custom.css";
import "../static/css/checkout-base.css";

import CheckoutForm from "../components/checkout-form/CheckoutForm";
import CheckoutSidebar from "../components/checkout-sidebar/CheckoutSidebar";

import { FaAngleDown } from "react-icons/fa";

import numberWithCommas from "../helper/numberWithCommas";

const Checkout = () => {
    const cartItems = useSelector((state) => state.cartItems.value);
    const total = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
    return (
        <div id="checkout">
            <header class="banner">
                <div class="wrap">
                    <div class="logo logo--left ">
                        <h1 class="shop__name">
                            <Link href="/">Delta Fruits</Link>
                        </h1>
                    </div>
                </div>
            </header>
            <aside>
                <button
                    class="order-summary-toggle toggled"
                    data-toggle="#order-summary"
                    data-toggle-class="order-summary--is-collapsed"
                >
                    <span class="wrap">
                        <span class="order-summary-toggle__inner">
                            <span class="order-summary-toggle__text expandable">
                                Đơn hàng ({cartItems.length} sản phẩm){" "}
                                <FaAngleDown />
                            </span>
                            <span
                                class="order-summary-toggle__total-recap"
                                data-bind="getTextTotalPrice()"
                            >
                                {numberWithCommas(total)}₫
                            </span>
                        </span>
                    </span>
                </button>
            </aside>
            <div id="checkout" className="content">
                <form id="checkoutForm">
                    <input type="hidden" name="_method" value="patch" />
                    <div class="wrap">
                        <CheckoutForm />
                        <CheckoutSidebar total={total} products={cartItems} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
