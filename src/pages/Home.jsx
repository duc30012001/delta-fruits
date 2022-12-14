import React, { useState } from "react";
import HomeLayout from "../layout/HomeLayout";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import ProductsListSwiper from "../components/product-list-swiper/ProductsListSwiper";
import SliderGrid from "../components/slider-grid/SliderGrid";
import { Link } from "react-router-dom";

// import images
import bannerVertical1 from "../static/images/home/banner_vertical_1.png";
import bannerVertical2 from "../static/images/home/banner_vertical_2.png";
import banner1 from "../static/images/home/banner_1.png";
import banner2 from "../static/images/home/banner_2.png";
import banner3 from "../static/images/home/banner_3.png";
import banner4 from "../static/images/home/banner_bestsale.png";

import news from "../helper/news";
import SwiperGrid from "../components/swiper-grid/SwiperGrid";
import SectionHomeLayout from "../layout/SectionHomeLayout";
import Banners, { Banner } from "../components/banners/Banners";

const Home = () => {
    const products = useSelector((state) => state.products.value);

    // Banners
    const banners = [banner1, banner2, banner3];

    // Responsive swiper
    const defaultWidth = window.innerWidth;
    let defaultColNews = 0;
    let defaultColPr = 0;
    let defaultColBs = 0;
    let defaultColFb = 0;
    if (defaultWidth < 600) {
        defaultColNews = 1;
        defaultColPr = 1;
        defaultColFb = 1;
        defaultColBs = 1;
    } else if (defaultWidth < 992) {
        defaultColNews = 2;
        defaultColPr = 3;
        defaultColFb = 1;
        defaultColBs = 2;
    } else if (defaultWidth < 1200) {
        defaultColNews = 2;
        defaultColPr = 4;
        defaultColFb = 2;
        defaultColBs = 2;
    } else {
        defaultColNews = 3;
        defaultColPr = 5;
        defaultColFb = 1;
        defaultColBs = 2;
    }

    const [colNews, setColNews] = useState(defaultColNews);
    const [colPr, setColPr] = useState(defaultColPr);
    const [colFb, setColFb] = useState(defaultColFb);
    const [colBs, setColBs] = useState(defaultColBs);
    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 600) {
            setColNews(1);
            setColPr(1);
            setColFb(1);
            setColBs(1);
        } else if (width < 992) {
            setColNews(2);
            setColPr(3);
            setColFb(2);
            setColBs(2);
        } else if (width < 1200) {
            setColNews(2);
            setColPr(4);
            setColFb(2);
            setColBs(2);
        } else {
            setColNews(3);
            setColPr(5);
            setColFb(1);
            setColBs(2);
        }
    };
    window.addEventListener("resize", handleResize);

    return (
        <>
            <HomeLayout>
                {/* ================ SECTION 2 ================== */}
                <SectionHomeLayout
                    className={"section_deal_bestsale"}
                    childLeft={
                        <ProductsListSwiper
                            title={"Gi?? t???t m???i ng??y"}
                            products={products}
                            col={colFb}
                            row={1}
                            border={"solid 2px #ffaf00"}
                        />
                    }
                    childRight={
                        <>
                            <SwiperGrid
                                products={products}
                                title={"S???n ph???m b??n ch???y"}
                                col={colBs}
                                row={2}
                                spaceBetween={15}
                            />
                            <Banner banner={banner4} />
                        </>
                    }
                />

                {/* ================ SECTION 3 ================== */}
                <SectionHomeLayout
                    className={"section_product_news"}
                    childLeft={<Banners banners={banners} />}
                    childRight={
                        <ProductsListSwiper
                            title={"S???n ph???m m???i v???"}
                            products={products}
                            col={colNews}
                            row={2}
                        />
                    }
                />

                {/* ================ SECTION 4 ================== */}
                <section className="awe-section-4">
                    <section className="section section_suggested">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <ProductsListSwiper
                                        title={"G???i ?? cho b???n"}
                                        products={products}
                                        col={colPr}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top-15">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 itembannerhover">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-5 hidden-xs">
                                                    <div className="imgbanner getheight_banner">
                                                        <Link to="#">
                                                            <img
                                                                className="lazyload"
                                                                src={
                                                                    bannerVertical1
                                                                }
                                                                alt="banner"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                                    <div className="contentbanner contentb1">
                                                        <p>TR??I C??Y</p>
                                                        <p className="bold">
                                                            NH???P KH???U
                                                        </p>
                                                        <p>AN TO??N</p>
                                                        <p className="large">
                                                            GI???M T???I 50%
                                                        </p>
                                                        <Link
                                                            className="button"
                                                            href="#"
                                                            title="mua ngay"
                                                        >
                                                            Mua ngay
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 itembannerhover">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-5 hidden-xs">
                                                    <div className="imgbanner getheight_banner">
                                                        <Link href="#">
                                                            <img
                                                                className="lazyload"
                                                                src={
                                                                    bannerVertical2
                                                                }
                                                                alt="banner"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                                    <div className="contentbanner contentb2">
                                                        <p>N?????c tr??i c??y</p>
                                                        <p className="bold">
                                                            100% T???
                                                        </p>
                                                        <p>THI??N NHI??N</p>
                                                        <p className="large">
                                                            SI??U S???CH
                                                        </p>
                                                        <Link
                                                            className="button"
                                                            href="#"
                                                            title="mua ngay"
                                                        >
                                                            Mua ngay
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* ================ SECTION 5 ================== */}
                <section className="awe-section-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 margin-bottom-35">
                                <SliderGrid
                                    title={"Lo???i qu??? n???i b???t"}
                                    products={products}
                                    col={1}
                                    row={3}
                                    border={"solid 1px #ebebeb"}
                                    spaceBetween={15}
                                    padding={"15px"}
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 margin-bottom-35">
                                <SliderGrid
                                    title={"Hoa qu??? ??a chu???ng"}
                                    products={products}
                                    col={1}
                                    row={3}
                                    border={"solid 1px #ebebeb"}
                                    spaceBetween={15}
                                    padding={"15px"}
                                />
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 margin-bottom-35">
                                <SliderGrid
                                    title={"Ph???n h???i c???a kh??ch"}
                                    products={products}
                                    col={colFb}
                                    row={3}
                                    border={"solid 1px #ebebeb"}
                                    spaceBetween={15}
                                    padding={"15px"}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================ SECTION 6 ================== */}
                <section className="awe-section-6">
                    <section className="section_blog_and_brand">
                        <div className="container">
                            <div className="wrap_bgd">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="section title_blog_module">
                                            <h2>
                                                <a
                                                    href="./news.html"
                                                    title="Xu h?????ng m???i"
                                                >
                                                    Xu h?????ng m???i
                                                </a>
                                            </h2>
                                            <p>
                                                C??ng xem tin t???c th??? tr?????ng h??m
                                                n??y c?? g?? ?
                                            </p>
                                        </div>

                                        <div className="section blog_owlrap">
                                            <div className="owl-carousel owl-theme brand_content not-nav2 owl-loaded owl-drag">
                                                <Swiper
                                                    spaceBetween={30}
                                                    slidesPerView={colNews}
                                                >
                                                    {news.map(
                                                        (newItem, index) => (
                                                            <SwiperSlide
                                                                key={index}
                                                            >
                                                                <div className="itemblog">
                                                                    <div className="blog_index">
                                                                        <div className="myblog">
                                                                            <div className="image-blog-left">
                                                                                <Link
                                                                                    to={
                                                                                        newItem.path
                                                                                    }
                                                                                >
                                                                                    <img
                                                                                        className="lazyload"
                                                                                        src={
                                                                                            newItem.image
                                                                                        }
                                                                                        title={
                                                                                            newItem.title
                                                                                        }
                                                                                        alt={
                                                                                            newItem.title
                                                                                        }
                                                                                    />
                                                                                </Link>
                                                                            </div>
                                                                            <div className="content_blog">
                                                                                <span className="time_post">
                                                                                    ????ng
                                                                                    b???i:
                                                                                    <span className="name_">
                                                                                        {
                                                                                            newItem.author
                                                                                        }
                                                                                    </span>
                                                                                    &nbsp;
                                                                                    |
                                                                                    &nbsp;
                                                                                    <span>
                                                                                        <i className="fa-solid fa-comment"></i>
                                                                                        &nbsp;1
                                                                                    </span>
                                                                                </span>
                                                                                <h3 className="h3">
                                                                                    <Link
                                                                                        to={
                                                                                            newItem.path
                                                                                        }
                                                                                        title={
                                                                                            newItem.title
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            newItem.title
                                                                                        }
                                                                                    </Link>
                                                                                </h3>

                                                                                <div className="summary_item_blog">
                                                                                    <p>
                                                                                        {
                                                                                            newItem.des
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        ),
                                                    )}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </HomeLayout>
        </>
    );
};

export default Home;
