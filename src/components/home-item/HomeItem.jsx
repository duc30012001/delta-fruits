import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import numberWithCommas from "../../helper/numberWithCommas";

import { FaEye } from "react-icons/fa";

import { setQuickView } from "../../redux/quickViewSlice";

const HomeItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleOpenQuickView = () => {
        dispatch(
            setQuickView({
                openQuickView: true,
                product: product,
                openModal: false,
            }),
        );
    };
    return (
        <div>
            <div className="item_product_main itemcustome">
                <div className="product-box product-item-main product-main-list-mini">
                    <div className="product-thumbnail">
                        <Link
                            onClick={handleOpenQuickView}
                            title=""
                            className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm"
                        >
                            <i className="fa fa-eye">
                                <FaEye />
                            </i>
                        </Link>

                        <Link
                            className="image_thumb p_img"
                            to={product.path}
                            title={product.name}
                        >
                            <img
                                className="lazyload"
                                src={product.images[0]}
                                alt={product.name}
                            />
                        </Link>
                    </div>
                    <div className="product-info product-bottom">
                        <h3 className="product-name">
                            <Link to={product.path} title={product.name}>
                                {product.name}
                            </Link>
                        </h3>

                        <div className="reviews_item_product active a-left">
                            <div className="bizweb-product-reviews-badge a-left"></div>
                        </div>

                        <div className="blockprice">
                            <div className="product-item-price price-box a-left">
                                <span className="special-price">
                                    <span className="price product-price">
                                        {numberWithCommas(product.price)}₫
                                    </span>
                                </span>
                                {product.price === product.oldPrice ? (
                                    ""
                                ) : (
                                    <span className="product-item-price-sale old-price">
                                        <span className="compare-price price product-price-old">
                                            {numberWithCommas(product.oldPrice)}
                                            ₫
                                        </span>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;
