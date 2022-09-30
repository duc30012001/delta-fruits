import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setQuickView } from "../../redux/quickViewSlice";

import numberWithCommas from "../../helper/numberWithCommas";

const AddToCart = ({ product, openModal }) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(
            setQuickView({
                product: {
                    id: 0,
                    name: "",
                    type: "",
                    status: "",
                    price: 0,
                    oldPrice: 0,
                    images: [],
                    path: "",
                },
                openQuickView: false,
                openModal: false,
            }),
        );
    };

    const cartItems = useSelector((state) => state.cartItems.value);

    const sum = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    return (
        <>
            <div
                id="popupCartModal"
                className="modal fade in"
                role="dialog"
                style={
                    openModal
                        ? { display: "block", paddingRight: "17px" }
                        : { display: "none", paddinRight: "17px" }
                }
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            data-backdrop="false"
                            aria-label="Close"
                            style={{ position: "relative", zIndex: 9 }}
                            onClick={handleClose}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="row row-noGutter">
                            <div className="modal-left col-sm-6 col-lg-6 col-md-6">
                                <h3 className="title">
                                    <i className="fa fa-check"></i>
                                    Sản phẩm vừa được thêm
                                </h3>
                                <div className="modal-body">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="thumb-1x1">
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div className="product-title">
                                                {product.name}
                                            </div>
                                            <div className="product-new-price">
                                                <span>
                                                    {numberWithCommas(
                                                        product.price,
                                                    )}
                                                    đ
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-right col-sm-6 col-lg-6 col-md-6">
                                <h3 className="title right_title">
                                    <Link href="/cart">
                                        <i className="fa fa-shopping-bag"></i>{" "}
                                        Giỏ hàng{" "}
                                        <i>
                                            (
                                            <b className="cart-popup-count">
                                                {cartItems.length}
                                            </b>
                                            )
                                        </i>{" "}
                                    </Link>
                                </h3>
                                <div className="total_price">
                                    <span>Tổng tiền: </span>{" "}
                                    <span className="">
                                        {numberWithCommas(sum)}đ
                                    </span>
                                </div>
                                <Link
                                    to="/checkout"
                                    className="btn btn-primary checkout_button btn-full"
                                >
                                    Thanh toán
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup_overlay" onClick={handleClose}></div>
            </div>
        </>
    );
};

export default AddToCart;
