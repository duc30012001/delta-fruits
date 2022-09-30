import React from "react";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
    return (
        <>
            <main class="main">
                <header class="main__header">
                    <div class="logo logo--left ">
                        <h1 class="shop__name">
                            <Link to="/">Delta Fruits</Link>
                        </h1>
                    </div>
                </header>
                <div class="main__content">
                    <article class="animate-floating-labels row">
                        <div class="col col--two">
                            <section class="section">
                                <div class="section__header">
                                    <div class="layout-flex">
                                        <h2 class="section__title layout-flex__item layout-flex__item--stretch">
                                            <i class="fa fa-id-card-o fa-lg section__title--icon hide-on-desktop"></i>
                                            Thông tin nhận hàng
                                        </h2>

                                        <Link to="/login">
                                            <i class="fa fa-user-circle-o fa-lg"></i>
                                            <span>Đăng nhập </span>
                                        </Link>
                                    </div>
                                </div>
                                <div class="section__content">
                                    <div class="fieldset">
                                        <div class="field ">
                                            <div class="field__input-wrapper">
                                                <label
                                                    for="email"
                                                    class="field__label"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    class="field__input"
                                                    value=""
                                                />
                                            </div>
                                        </div>

                                        <div class="field ">
                                            <div class="field__input-wrapper">
                                                <label
                                                    for="billingName"
                                                    class="field__label"
                                                >
                                                    Họ và tên
                                                </label>
                                                <input
                                                    name="billingName"
                                                    id="billingName"
                                                    type="text"
                                                    class="field__input"
                                                    value=""
                                                />
                                            </div>
                                        </div>

                                        <div class="field ">
                                            <div class="field__input-wrapper">
                                                <label
                                                    for="billingPhone"
                                                    class="field__label"
                                                >
                                                    Số điện thoại (tùy chọn)
                                                </label>
                                                <input
                                                    name="billingPhone"
                                                    id="billingPhone"
                                                    type="tel"
                                                    class="field__input"
                                                    value=""
                                                />
                                            </div>
                                        </div>

                                        <div class="field ">
                                            <div class="field__input-wrapper">
                                                <label
                                                    for="billingAddress"
                                                    class="field__label"
                                                >
                                                    Địa chỉ (tùy chọn)
                                                </label>
                                                <input
                                                    name="billingAddress"
                                                    id="billingAddress"
                                                    type="text"
                                                    class="field__input"
                                                    value=""
                                                />
                                            </div>
                                        </div>

                                        <div class="field field--show-floating-label ">
                                            <div class="field__input-wrapper field__input-wrapper--select2">
                                                <label
                                                    for="billingProvince"
                                                    class="field__label"
                                                >
                                                    Tỉnh thành
                                                </label>
                                                <select
                                                    name="billingProvince"
                                                    id="billingProvince"
                                                    size="1"
                                                    type="text"
                                                    class="field__input field__input--select select2-hidden-accessible"
                                                >
                                                    <option
                                                        value=""
                                                        hidden=""
                                                        data-select2-id="select2-data-3-qcjj"
                                                    >
                                                        ---
                                                    </option>
                                                    <option value="1">
                                                        Hà Nội
                                                    </option>
                                                    <option value="2">
                                                        TP Hồ Chí Minh
                                                    </option>
                                                    <option value="3">
                                                        An Giang
                                                    </option>
                                                    <option value="4">
                                                        Bà Rịa-Vũng Tàu
                                                    </option>
                                                    <option value="5">
                                                        Bắc Giang
                                                    </option>
                                                    <option value="6">
                                                        Bắc Kạn
                                                    </option>
                                                    <option value="7">
                                                        Bạc Liêu
                                                    </option>
                                                    <option value="8">
                                                        Bắc Ninh
                                                    </option>
                                                    <option value="9">
                                                        Bến Tre
                                                    </option>
                                                    <option value="10">
                                                        Bình Dương
                                                    </option>
                                                    <option value="11">
                                                        Bình Định
                                                    </option>
                                                    <option value="12">
                                                        Bình Phước
                                                    </option>
                                                    <option value="13">
                                                        Bình Thuận
                                                    </option>
                                                    <option value="14">
                                                        Cà Mau
                                                    </option>
                                                    <option value="15">
                                                        Cao Bằng
                                                    </option>
                                                    <option value="16">
                                                        Cần Thơ
                                                    </option>
                                                    <option value="17">
                                                        Đà Nẵng
                                                    </option>
                                                    <option value="18">
                                                        Đắk Lắk
                                                    </option>
                                                    <option value="19">
                                                        Đắk Nông
                                                    </option>
                                                    <option value="20">
                                                        Điện Biên
                                                    </option>
                                                    <option value="21">
                                                        Đồng Nai
                                                    </option>
                                                    <option value="22">
                                                        Đồng Tháp
                                                    </option>
                                                    <option value="23">
                                                        Gia Lai
                                                    </option>
                                                    <option value="24">
                                                        Hà Giang
                                                    </option>
                                                    <option value="25">
                                                        Hà Nam
                                                    </option>
                                                    <option value="26">
                                                        Hà Tĩnh
                                                    </option>
                                                    <option value="27">
                                                        Hải Dương
                                                    </option>
                                                    <option value="28">
                                                        Hải Phòng
                                                    </option>
                                                    <option value="29">
                                                        Hậu Giang
                                                    </option>
                                                    <option value="30">
                                                        Hòa Bình
                                                    </option>
                                                    <option value="31">
                                                        Hưng Yên
                                                    </option>
                                                    <option value="32">
                                                        Khánh Hòa
                                                    </option>
                                                    <option value="33">
                                                        Kiên Giang
                                                    </option>
                                                    <option value="34">
                                                        Kon Tum
                                                    </option>
                                                    <option value="35">
                                                        Lai Châu
                                                    </option>
                                                    <option value="36">
                                                        Lâm Đồng
                                                    </option>
                                                    <option value="37">
                                                        Lạng Sơn
                                                    </option>
                                                    <option value="38">
                                                        Lào Cai
                                                    </option>
                                                    <option value="39">
                                                        Long An
                                                    </option>
                                                    <option value="40">
                                                        Nam Định
                                                    </option>
                                                    <option value="41">
                                                        Nghệ An
                                                    </option>
                                                    <option value="42">
                                                        Ninh Bình
                                                    </option>
                                                    <option value="43">
                                                        Ninh Thuận
                                                    </option>
                                                    <option value="44">
                                                        Phú Thọ
                                                    </option>
                                                    <option value="45">
                                                        Phú Yên
                                                    </option>
                                                    <option value="46">
                                                        Quảng Bình
                                                    </option>
                                                    <option value="47">
                                                        Quảng Nam
                                                    </option>
                                                    <option value="48">
                                                        Quảng Ngãi
                                                    </option>
                                                    <option value="49">
                                                        Quảng Ninh
                                                    </option>
                                                    <option value="50">
                                                        Quảng Trị
                                                    </option>
                                                    <option value="51">
                                                        Sóc Trăng
                                                    </option>
                                                    <option value="52">
                                                        Sơn La
                                                    </option>
                                                    <option value="53">
                                                        Tây Ninh
                                                    </option>
                                                    <option value="54">
                                                        Thái Bình
                                                    </option>
                                                    <option value="55">
                                                        Thái Nguyên
                                                    </option>
                                                    <option value="56">
                                                        Thanh Hóa
                                                    </option>
                                                    <option value="57">
                                                        Thừa Thiên Huế
                                                    </option>
                                                    <option value="58">
                                                        Tiền Giang
                                                    </option>
                                                    <option value="59">
                                                        Trà Vinh
                                                    </option>
                                                    <option value="60">
                                                        Tuyên Quang
                                                    </option>
                                                    <option value="61">
                                                        Vĩnh Long
                                                    </option>
                                                    <option value="62">
                                                        Vĩnh Phúc
                                                    </option>
                                                    <option value="63">
                                                        Yên Bái
                                                    </option>
                                                </select>
                                                <span
                                                    class="select2 select2-container select2-container--default"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-1-30z7"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <span class="selection">
                                                        <span
                                                            class="select2-selection select2-selection--single"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabindex="-1"
                                                            aria-disabled="false"
                                                            aria-labelledby="select2-billingProvince-container"
                                                        >
                                                            <span
                                                                class="select2-selection__rendered"
                                                                id="select2-billingProvince-container"
                                                                role="textbox"
                                                                aria-readonly="true"
                                                                title="---"
                                                            >
                                                                ---
                                                            </span>
                                                            <span
                                                                class="select2-selection__arrow"
                                                                role="presentation"
                                                            >
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span
                                                        class="dropdown-wrapper"
                                                        aria-hidden="true"
                                                    ></span>
                                                </span>
                                                <span
                                                    class="select2 select2-container select2-container--default"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-1-o8rx"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <span class="selection">
                                                        <span
                                                            class="select2-selection select2-selection--single"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabindex="0"
                                                            aria-disabled="false"
                                                            aria-labelledby="select2-billingProvince-container"
                                                        >
                                                            <span
                                                                class="select2-selection__rendered"
                                                                id="select2-billingProvince-container"
                                                                role="textbox"
                                                                aria-readonly="true"
                                                                title="---"
                                                            >
                                                                ---
                                                            </span>
                                                            <span
                                                                class="select2-selection__arrow"
                                                                role="presentation"
                                                            >
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span
                                                        class="dropdown-wrapper"
                                                        aria-hidden="true"
                                                    ></span>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="field field--show-floating-label ">
                                            <div class="field__input-wrapper field__input-wrapper--select2">
                                                <label
                                                    for="billingDistrict"
                                                    class="field__label"
                                                >
                                                    Quận huyện (tùy chọn)
                                                </label>
                                                <select
                                                    name="billingDistrict"
                                                    id="billingDistrict"
                                                    size="1"
                                                    type="text"
                                                    class="field__input field__input--select select2-hidden-accessible"
                                                    value=""
                                                    data-bind="billing.district"
                                                    data-address-type="district"
                                                    data-address-zone="billing"
                                                    data-select2-id="select2-data-billingDistrict"
                                                    tabindex="-1"
                                                    aria-hidden="true"
                                                    disabled=""
                                                ></select>
                                                <span
                                                    class="select2 select2-container select2-container--default select2-container--disabled select2-container--focus"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-2-euq0"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <span class="selection">
                                                        <span
                                                            class="select2-selection select2-selection--single"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabindex="-1"
                                                            aria-disabled="true"
                                                            aria-labelledby="select2-billingDistrict-container"
                                                        >
                                                            <span
                                                                class="select2-selection__rendered"
                                                                id="select2-billingDistrict-container"
                                                                role="textbox"
                                                                aria-readonly="true"
                                                            ></span>
                                                            <span
                                                                class="select2-selection__arrow"
                                                                role="presentation"
                                                            >
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span
                                                        class="dropdown-wrapper"
                                                        aria-hidden="true"
                                                    ></span>
                                                </span>
                                                <span
                                                    class="select2 select2-container select2-container--default select2-container--disabled"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-2-j0sc"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <span class="selection">
                                                        <span
                                                            class="select2-selection select2-selection--single"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabindex="-1"
                                                            aria-disabled="true"
                                                            aria-labelledby="select2-billingDistrict-container"
                                                        >
                                                            <span
                                                                class="select2-selection__rendered"
                                                                id="select2-billingDistrict-container"
                                                                role="textbox"
                                                                aria-readonly="true"
                                                            ></span>
                                                            <span
                                                                class="select2-selection__arrow"
                                                                role="presentation"
                                                            >
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span
                                                        class="dropdown-wrapper"
                                                        aria-hidden="true"
                                                    ></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div class="fieldset">
                                <h3 class="visually-hidden">Ghi chú</h3>
                                <div
                                    class="field "
                                    data-bind-class="{'field--show-floating-label': note}"
                                >
                                    <div class="field__input-wrapper">
                                        <label for="note" class="field__label">
                                            Ghi chú (tùy chọn)
                                        </label>
                                        <textarea
                                            name="note"
                                            id="note"
                                            type="text"
                                            class="field__input"
                                            data-bind="note"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col--two">
                            <section
                                class="section"
                                data-define="{shippingMethod: ''}"
                            >
                                <div class="section__header">
                                    <div class="layout-flex">
                                        <h2 class="section__title layout-flex__item layout-flex__item--stretch">
                                            <i class="fa fa-truck fa-lg section__title--icon hide-on-desktop"></i>
                                            Vận chuyển
                                        </h2>
                                    </div>
                                </div>
                                <div
                                    class="section__content"
                                    data-tg-refresh="refreshShipping"
                                    id="shippingMethodList"
                                    data-define="{isAddressSelecting: true, shippingMethods: []}"
                                >
                                    <div
                                        class="alert alert--loader spinner spinner--active hide"
                                        data-bind-show="isLoadingShippingMethod"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="spinner-loader"
                                        >
                                            <use href="#spinner"></use>
                                        </svg>
                                    </div>

                                    <div
                                        class="alert alert-retry alert--danger hide"
                                        data-bind-event-click="handleShippingMethodErrorRetry()"
                                        data-bind-show="!isLoadingShippingMethod &amp;&amp; !isAddressSelecting &amp;&amp; isLoadingShippingError"
                                    >
                                        <span data-bind="loadingShippingErrorMessage">
                                            Không thể load phí vận chuyển. Vui
                                            lòng thử lại
                                        </span>{" "}
                                        <i class="fa fa-refresh"></i>
                                    </div>

                                    <div
                                        class="alert alert--info"
                                        data-bind-show="!isLoadingShippingMethod &amp;&amp; isAddressSelecting"
                                    >
                                        Vui lòng nhập thông tin giao hàng
                                    </div>
                                </div>
                            </section>

                            <section class="section">
                                <div class="section__header">
                                    <div class="layout-flex">
                                        <h2 class="section__title layout-flex__item layout-flex__item--stretch">
                                            <i class="fa fa-credit-card fa-lg section__title--icon hide-on-desktop"></i>
                                            Thanh toán
                                        </h2>
                                    </div>
                                </div>
                                <div class="section__content">
                                    <div
                                        class="content-box"
                                        data-define="{paymentMethod: undefined}"
                                    >
                                        <div class="content-box__row">
                                            <div class="radio-wrapper">
                                                <div class="radio__input">
                                                    <input
                                                        name="paymentMethod"
                                                        id="paymentMethod-396549"
                                                        type="radio"
                                                        class="input-radio"
                                                    />
                                                </div>
                                                <label
                                                    for="paymentMethod-396549"
                                                    class="radio__label"
                                                >
                                                    <span class="radio__label__primary">
                                                        Thanh toán khi giao hàng
                                                        (COD)
                                                    </span>
                                                    <span class="radio__label__accessory">
                                                        <span class="radio__label__icon">
                                                            <i class="payment-icon payment-icon--4"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>

                                            <div
                                                class="content-box__row__desc hide"
                                                data-bind-show="paymentMethod == 396549"
                                            >
                                                <p>
                                                    Bạn chỉ phải thanh toán khi
                                                    nhận được hàng
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                    <div class="field__input-btn-wrapper field__input-btn-wrapper--vertical hide-on-desktop">
                        <button
                            type="submit"
                            class="btn btn-checkout spinner"
                            data-bind-class="{'spinner--active': isSubmitingCheckout}"
                            data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode"
                        >
                            <span class="spinner-label">ĐẶT HÀNG</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="spinner-loader"
                            >
                                <use href="#spinner"></use>
                            </svg>
                        </button>

                        <Link to="/cart" class="previous-link">
                            <i class="previous-link__arrow">❮</i>
                            <span class="previous-link__content">
                                Quay về giỏ hàng
                            </span>
                        </Link>
                    </div>

                    <div id="common-alert" data-tg-refresh="refreshError">
                        <div
                            class="alert alert--danger hide-on-desktop hide"
                            data-bind-show="!isSubmitingCheckout &amp;&amp; isSubmitingCheckoutError"
                            data-bind="submitingCheckoutErrorMessage"
                        >
                            Có lỗi xảy ra khi xử lý. Vui lòng thử lại
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CheckoutForm;
