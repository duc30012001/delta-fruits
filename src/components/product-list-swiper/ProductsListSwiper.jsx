import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../product-card/ProductCard";

// import icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

// import required modules
import { Grid, Navigation } from "swiper";
import { Link } from "react-router-dom";

const ProductsListSwiper = ({ title, products, col, row, border }) => {
    // Handle navigation
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <div className="section section_suggested padding-top-10">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="section title_module_main">
                            <h2 className="h2">
                                <Link to="/products" title="Sản phẩm gợi ý">
                                    {title}
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="owl-carousel owl_suggested owl-loaded owl-drag">
                            <Swiper
                                slidesPerView={col}
                                grid={{
                                    rows: row,
                                    fill: "row",
                                }}
                                ref={sliderRef}
                                modules={[Grid, Navigation]}
                                spaceBetween={15}
                            >
                                {products.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            style={{ border: border }}
                                            className="owl-item active"
                                        >
                                            <div className="item_product_main itemcustome">
                                                <ProductCard
                                                    product={product}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Button */}
                            <div className="control-swiper">
                                <button
                                    className="control-swiper__prev"
                                    onClick={handlePrev}
                                >
                                    <FaAngleLeft />
                                </button>
                                <button
                                    className="control-swiper__next"
                                    onClick={handleNext}
                                >
                                    <FaAngleRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsListSwiper;
