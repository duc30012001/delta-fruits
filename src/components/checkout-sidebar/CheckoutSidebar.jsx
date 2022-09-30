import React from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../helper/numberWithCommas";

const CheckoutSidebar = ({ products, total }) => {
    return (
        <>
            <aside class="sidebar">
                <div class="sidebar__header">
                    <h2 class="sidebar__title">
                        Đơn hàng ({products.length} sản phẩm)
                    </h2>
                </div>
                <div class="sidebar__content">
                    <div
                        id="order-summary"
                        class="order-summary order-summary--is-collapsed"
                    >
                        <div class="order-summary__sections">
                            <div class="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                                <table class="product-table">
                                    <caption class="visually-hidden">
                                        Chi tiết đơn hàng
                                    </caption>
                                    <thead class="product-table__header">
                                        <tr>
                                            <th>
                                                <span class="visually-hidden">
                                                    Ảnh sản phẩm
                                                </span>
                                            </th>
                                            <th>
                                                <span class="visually-hidden">
                                                    Mô tả
                                                </span>
                                            </th>
                                            <th>
                                                <span class="visually-hidden">
                                                    Sổ lượng
                                                </span>
                                            </th>
                                            <th>
                                                <span class="visually-hidden">
                                                    Đơn giá
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => (
                                            <tr class="product">
                                                <td class="product__image">
                                                    <div class="product-thumbnail">
                                                        <div
                                                            class="product-thumbnail__wrapper"
                                                            data-tg-static=""
                                                        >
                                                            <img
                                                                src={
                                                                    product.image
                                                                }
                                                                alt=""
                                                                class="product-thumbnail__image"
                                                            />
                                                        </div>
                                                        <span class="product-thumbnail__quantity">
                                                            {product.quantity}
                                                        </span>
                                                    </div>
                                                </td>
                                                <th class="product__description">
                                                    <span class="product__description__name">
                                                        {product.name}
                                                    </span>
                                                </th>
                                                <td class="product__quantity visually-hidden">
                                                    <em>Số lượng:</em>{" "}
                                                    {product.quantity}
                                                </td>
                                                <td class="product__price">
                                                    {numberWithCommas(
                                                        product.price *
                                                            product.quantity,
                                                    )}
                                                    ₫
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div
                                class="order-summary__section order-summary__section--discount-code"
                                data-tg-refresh="refreshDiscount"
                                id="discountCode"
                            >
                                <h3 class="visually-hidden">Mã khuyến mại</h3>
                                <div class="edit_checkout animate-floating-labels">
                                    <div class="fieldset">
                                        <div class="field  ">
                                            <div class="field__input-btn-wrapper">
                                                <div class="field__input-wrapper">
                                                    <label
                                                        for="reductionCode"
                                                        class="field__label"
                                                    >
                                                        Nhập mã giảm giá
                                                    </label>
                                                    <input
                                                        name="reductionCode"
                                                        id="reductionCode"
                                                        type="text"
                                                        class="field__input"
                                                    />
                                                </div>
                                                <button
                                                    class="field__input-btn btn spinner btn--disabled"
                                                    type="button"
                                                    disabled=""
                                                >
                                                    <span class="spinner-label">
                                                        Áp dụng
                                                    </span>
                                                </button>
                                            </div>

                                            <p class="field__message field__message--error field__message--error-always-show hide">
                                                Có lỗi xảy ra khi áp dụng khuyến
                                                mãi. Vui lòng thử lại
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="order-summary__section order-summary__section--total-lines order-summary--collapse-element"
                                id="orderSummary"
                            >
                                <table class="total-line-table">
                                    <caption class="visually-hidden">
                                        Tổng giá trị
                                    </caption>
                                    <thead>
                                        <tr>
                                            <td>
                                                <span class="visually-hidden">
                                                    Mô tả
                                                </span>
                                            </td>
                                            <td>
                                                <span class="visually-hidden">
                                                    Giá tiền
                                                </span>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody class="total-line-table__tbody">
                                        <tr class="total-line total-line--subtotal">
                                            <th class="total-line__name">
                                                Tạm tính
                                            </th>
                                            <td class="total-line__price">
                                                {numberWithCommas(total)}₫
                                            </td>
                                        </tr>

                                        <tr class="total-line total-line--shipping-fee">
                                            <th class="total-line__name">
                                                Phí vận chuyển
                                            </th>
                                            <td
                                                class="total-line__price"
                                                data-bind="getTextShippingPrice()"
                                            >
                                                -
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="total-line-table__footer">
                                        <tr class="total-line payment-due">
                                            <th class="total-line__name">
                                                <span class="payment-due__label-total">
                                                    Tổng cộng
                                                </span>
                                            </th>
                                            <td class="total-line__price">
                                                <span
                                                    class="payment-due__price"
                                                    data-bind="getTextTotalPrice()"
                                                >
                                                    {numberWithCommas(total)}₫
                                                </span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div class="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                                <button
                                    type="submit"
                                    class="btn btn-checkout spinner"
                                    data-bind-class="{'spinner--active': isSubmitingCheckout}"
                                    data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode"
                                >
                                    <span class="spinner-label">ĐẶT HÀNG</span>
                                </button>

                                <Link to="/cart" class="previous-link">
                                    <i class="previous-link__arrow">{"< "}</i>
                                    <span class="previous-link__content">
                                        Quay về giỏ hàng
                                    </span>
                                </Link>
                            </div>
                            <div
                                id="common-alert-sidebar"
                                data-tg-refresh="refreshError"
                            >
                                <div class="alert alert--danger hide-on-mobile hide">
                                    Có lỗi xảy ra khi xử lý. Vui lòng thử lại
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default CheckoutSidebar;
