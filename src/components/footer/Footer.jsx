import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

// Import icons
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsGoogle, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";

// Import images
import logo from "../../static/images/logo.png";
import headphone from "../../static/images/footer/headphone.png";
import place from "../../static/images/footer/place.png";
import email from "../../static/images/footer/email.png";
import payment from "../../static/images/footer/payment.png";

const Footer = () => {
    const [collapsed, setCollapsed] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const handleCollapse = (key) => {
        setCollapsed((prev) => {
            let coll = { ...prev };
            coll[key] = !coll[key];
            return coll;
        });
    };

    return (
        <>
            <footer className="footer border_top">
                <div className="site-footer">
                    <div className="mid-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                                    <div className="widget-ft last social_footer">
                                        <div className="blocklogo">
                                            <Link
                                                to="/home"
                                                className="logofooter"
                                            >
                                                <img
                                                    className="lazyload"
                                                    src={logo}
                                                    alt="logo Delta Fruits"
                                                />
                                            </Link>
                                        </div>
                                        <div className="contactfooter">
                                            <div className="flop">
                                                <span className="icon">
                                                    <img
                                                        className="lazyload"
                                                        src={headphone}
                                                        alt="li??n h??? ngay"
                                                    />
                                                </span>
                                                <div className="fright">
                                                    <p>B???n c???n t?? v???n ?</p>
                                                    <a
                                                        className="fone"
                                                        href="tel:19006750"
                                                    >
                                                        1900 6750
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flop mt ">
                                                <p>Th??ng tin ?????a ch???</p>
                                                <div className="section flex contactfooter__address">
                                                    <span className="icon">
                                                        <img
                                                            className="lazyload"
                                                            src={place}
                                                            alt="?????a ch???"
                                                        />
                                                    </span>
                                                    <div className="fright">
                                                        <span>
                                                            An Th?????ng, H?? N???i,
                                                            Vietnam
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="section flex">
                                                    <span className="icon">
                                                        <img
                                                            className="lazyload"
                                                            src={email}
                                                            alt="?????a ch???"
                                                        />
                                                    </span>
                                                    <div className="fright">
                                                        <a href="mailto:deltawebltd@gmail.com">
                                                            deltawebltd@gmail.com
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social_footer">
                                            <ul className="follow_option">
                                                <li>
                                                    <Link
                                                        to="#"
                                                        title="Theo d??i Facebook Delta Fruits"
                                                    >
                                                        <i className="fa-solid fa-facebook">
                                                            <ImFacebook />
                                                        </i>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="#"
                                                        title="Theo d??i Twitter Delta Fruits"
                                                    >
                                                        <i className="fa-solid fa-twitter">
                                                            <BsTwitter />
                                                        </i>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="#"
                                                        title="Theo d??i Google Plus Delta Fruits"
                                                    >
                                                        <i className="fa-solid fa-google">
                                                            <BsGoogle />
                                                        </i>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="#"
                                                        title="Theo d??i Instagam Delta Fruits"
                                                    >
                                                        <i className="fa-solid fa-instagram">
                                                            <BsInstagram />
                                                        </i>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="#"
                                                        title="Theo d??i Youtube Delta Fruits"
                                                    >
                                                        <i className="fa-solid fa-youtube-play">
                                                            <BsYoutube />
                                                        </i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-7 col-sm-12 col-xsm-12">
                                    <div className="row rowsfooter">
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                            <div className="widget-ft first">
                                                <h4 className="title-menu">
                                                    <Link
                                                        role="button"
                                                        className="collapsed"
                                                        data-toggle="collapse"
                                                        aria-expanded="false"
                                                        data-target="#collapseListMenu01"
                                                        aria-controls="collapseListMenu01"
                                                    >
                                                        Ch??nh s??ch
                                                        <i
                                                            className="fa-solid fa-plus"
                                                            onClick={() =>
                                                                handleCollapse(
                                                                    1,
                                                                )
                                                            }
                                                        >
                                                            {collapsed[1] ? (
                                                                <FaMinus />
                                                            ) : (
                                                                <FaPlus />
                                                            )}
                                                        </i>
                                                    </Link>
                                                </h4>
                                                <div
                                                    className={
                                                        collapsed[1]
                                                            ? "collapse in"
                                                            : "collapse"
                                                    }
                                                    id="collapseListMenu01"
                                                >
                                                    <ul className="list-menu">
                                                        <li className="li_menu">
                                                            <Link to="/home">
                                                                Trang ch???
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/products">
                                                                S???n ph???m
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/news">
                                                                Tin t???c
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/introduce">
                                                                Gi???i thi???u
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/contact">
                                                                Li??n h???
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                            <div className="widget-ft">
                                                <h4 className="title-menu">
                                                    <Link
                                                        role="button"
                                                        className="collapsed"
                                                        data-toggle="collapse"
                                                        aria-expanded="false"
                                                        data-target="#collapseListMenu02"
                                                        aria-controls="collapseListMenu02"
                                                    >
                                                        Th??ng tin
                                                        <i
                                                            className="fa-solid fa-plus"
                                                            onClick={() =>
                                                                handleCollapse(
                                                                    2,
                                                                )
                                                            }
                                                        >
                                                            {collapsed[2] ? (
                                                                <FaMinus />
                                                            ) : (
                                                                <FaPlus />
                                                            )}
                                                        </i>
                                                    </Link>
                                                </h4>
                                                <div
                                                    className={
                                                        collapsed[2]
                                                            ? "collapse time_work in"
                                                            : "collapse time_work"
                                                    }
                                                    id="collapseListMenu02"
                                                >
                                                    <ul className="list-menu">
                                                        <li className="li_menu">
                                                            <Link to="/home">
                                                                Trang ch???
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/products">
                                                                S???n ph???m
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/news">
                                                                Tin t???c
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/introduce">
                                                                Gi???i thi???u
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/contact">
                                                                Li??n h???
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                            <div className="widget-ft">
                                                <h4 className="title-menu">
                                                    <Link
                                                        role="button"
                                                        className="collapsed"
                                                        data-toggle="collapse"
                                                        aria-expanded="false"
                                                        data-target="#collapseListMenu03"
                                                        aria-controls="collapseListMenu03"
                                                    >
                                                        H?????ng d???n
                                                        <i
                                                            className="fa-solid fa-plus"
                                                            onClick={() =>
                                                                handleCollapse(
                                                                    3,
                                                                )
                                                            }
                                                        >
                                                            {collapsed[3] ? (
                                                                <FaMinus />
                                                            ) : (
                                                                <FaPlus />
                                                            )}
                                                        </i>
                                                    </Link>
                                                </h4>
                                                <div
                                                    className={
                                                        collapsed[3]
                                                            ? "collapse time_work in"
                                                            : "collapse time_work"
                                                    }
                                                    id="collapseListMenu03"
                                                >
                                                    <ul className="list-menu">
                                                        <li className="li_menu">
                                                            <Link to="/home">
                                                                Trang ch???
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/products">
                                                                S???n ph???m
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/news">
                                                                Tin t???c
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/introduce">
                                                                Gi???i thi???u
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/contact">
                                                                Li??n h???
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                            <div className="widget-ft">
                                                <h4 className="title-menu">
                                                    <Link
                                                        role="button"
                                                        className="collapsed"
                                                        data-toggle="collapse"
                                                        aria-expanded="false"
                                                        data-target="#collapseListMenu04"
                                                        aria-controls="collapseListMenu04"
                                                    >
                                                        Instagram
                                                        <i
                                                            className="fa-solid fa-plus"
                                                            onClick={() =>
                                                                handleCollapse(
                                                                    4,
                                                                )
                                                            }
                                                        >
                                                            {collapsed[4] ? (
                                                                <FaMinus />
                                                            ) : (
                                                                <FaPlus />
                                                            )}
                                                        </i>
                                                    </Link>
                                                </h4>
                                                <div
                                                    className={
                                                        collapsed[4]
                                                            ? "collapse time_work in"
                                                            : "collapse time_work"
                                                    }
                                                    id="collapseListMenu04"
                                                >
                                                    <ul className="list-menu">
                                                        <li className="li_menu">
                                                            <Link to="/home">
                                                                Trang ch???
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/products">
                                                                S???n ph???m
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/news">
                                                                Tin t???c
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/introduce">
                                                                Gi???i thi???u
                                                            </Link>
                                                        </li>

                                                        <li className="li_menu">
                                                            <Link to="/contact">
                                                                Li??n h???
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="payment_e">
                        <div className="container a-center">
                            <div className="iigpay">
                                <img
                                    className="lazyload"
                                    src={payment}
                                    alt="C??c h??nh th???c th??nh to??n"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-footer-bottom copyright clearfix">
                        <div className="container">
                            <div className="inner clearfix">
                                <div className="row tablet">
                                    <div
                                        id="copyright"
                                        className="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-center fot_copyright"
                                    >
                                        <span className="wsp">
                                            <span className="mobile">
                                                ?? B???n quy???n thu???c v???
                                                <b>
                                                    <Link
                                                        to="#"
                                                        title="Delta Web"
                                                        // target="_blank"
                                                    >
                                                        Delta Web
                                                    </Link>
                                                </b>
                                                <span className="hidden-xs">
                                                    {" "}
                                                    |{" "}
                                                </span>
                                            </span>
                                            <span className="opacity1">
                                                Cung c???p b???i
                                            </span>
                                            <Link
                                                to="#"
                                                rel="nofollow"
                                                title="Sapo"
                                                // target="_blank"
                                            >
                                                VGA
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="#"
                                id="back-to-top"
                                className="backtop"
                                title="L??n ?????u trang"
                            >
                                <i className="fa-solid fa-angle-up"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
