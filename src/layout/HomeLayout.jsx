import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { useSelector } from "react-redux";

// import CSS
import "../static/css/plugin.css";
import "../static/css/style.css";
import "../static/css/responsive.css";
import "../static/css/base.css";
import "../static/css/custom.css";

import paths from "../helper/paths";
import slider from "../static/images/home/slider_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import img1 from "../static/images/home/al1.png";
import img2 from "../static/images/home/al2.png";
import img3 from "../static/images/home/al3.png";
import img4 from "../static/images/home/al4.png";
import img5 from "../static/images/home/al5.png";
import img6 from "../static/images/home/al6.png";
import img7 from "../static/images/home/al7.png";

import AddToCart from "../components/add-to-cart/AddToCart";
import QuickView from "../components/quick-view/QuickView";

const HomeLayout = (props) => {
    // window.scroll({ top: 0 });
    const quickView = useSelector((state) => state.quickView.value);

    const imgs = [img1, img2, img3, img4, img5, img6, img7];
    return (
        <>
            <Header paths={paths} />
            <div>
                <img src={slider} alt="" />
            </div>
            <div className="container">
                <div className="row">{props.children}</div>
            </div>
            <section className="awe-section-7">
                <section className="section section_album">
                    <Swiper
                        slidesPerView={6}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {imgs.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img className="home__al" src={img} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </section>
            <Footer />

            <QuickView
                openQuickView={quickView.openQuickView}
                product={quickView.product}
            />
            <AddToCart
                openModal={quickView.openModal}
                product={quickView.product}
            />
        </>
    );
};

export default HomeLayout;
