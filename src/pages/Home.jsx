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
                            title={"Giá tốt mỗi ngày"}
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
                                title={"Sản phẩm bán chạy"}
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
                            title={"Sản phẩm mới về"}
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
                                        title={"Gợi ý cho bạn"}
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
                                                        <p>TRÁI CÂY</p>
                                                        <p className="bold">
                                                            NHẬP KHẨU
                                                        </p>
                                                        <p>AN TOÀN</p>
                                                        <p className="large">
                                                            GIẢM TỚI 50%
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
                                                        <p>Nước trái cây</p>
                                                        <p className="bold">
                                                            100% TỪ
                                                        </p>
                                                        <p>THIÊN NHIÊN</p>
                                                        <p className="large">
                                                            SIÊU SẠCH
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
                                    title={"Loại quả nổi bật"}
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
                                    title={"Hoa quả ưa chuộng"}
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
                                    title={"Phản hồi của khách"}
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
                                                    title="Xu hướng mới"
                                                >
                                                    Xu hướng mới
                                                </a>
                                            </h2>
                                            <p>
                                                Cùng xem tin tức thị trường hôm
                                                này có gì ?
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
                                                                                    Đăng
                                                                                    bởi:
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
