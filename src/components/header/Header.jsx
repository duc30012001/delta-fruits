import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import numberWithCommas from "../../helper/numberWithCommas";

// Import icons
import {
    FaRegUserCircle,
    FaSearch,
    FaChevronDown,
    FaChevronRight,
} from "react-icons/fa";

// Import images
import bars from "../../static/images/header/i_menubar.png";
import bag from "../../static/images/header/bag.png";
import logo from "../../static/images/logo.png";
import HeaderCartList from "../header-cart-list/HeaderCartList";

const Header = ({ setTitle, paths }) => {
    const location = useLocation();
    const [searchValue, setSearchValue] = useState("");
    const [open, setOpen] = useState({
        bars: false,
        products: false,
        otherProducts: false,
    });

    useEffect(() => {
        const title = location.state?.name || "Delta Fruits";
        if (setTitle) setTitle(title);
        document.title = title;
    }, []);

    const handleOpen = (key) => {
        setOpen((prev) => {
            let temp = { ...prev };
            temp[key] = !temp[key];
            return temp;
        });
    };

    const cartItems = useSelector((state) => state.cartItems.value);

    // console.log(cartItems);

    return (
        <>
            {/* -------------------------- */}
            <div
                onClick={() => handleOpen("bars")}
                className={
                    open.bars
                        ? "hidden-lg opacity_menu open_opacity"
                        : "hidden-lg opacity_menu"
                }
            ></div>

            {/* <!-- Main content --> */}
            <div className="htop section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 hidden-sm hidden-xs detop">
                            <p>
                                Chào mừng bạn đến với <span>Delta Fruits</span>
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="accoutlink a-right">
                                <div className="searchbox">
                                    <form
                                        // action=""
                                        // method="get"
                                        className="input-group search-bar"
                                        // role="search"
                                    >
                                        <input
                                            type="text"
                                            name="query"
                                            value={searchValue}
                                            required=""
                                            autoComplete="off"
                                            placeholder="Gõ tìm kiếm..."
                                            className="input-group-field auto-search"
                                            onChange={(e) =>
                                                setSearchValue(e.target.value)
                                            }
                                        />
                                        <span className="input-group-btn">
                                            <button
                                                type="submit"
                                                className="btn icon-fallback-text"
                                            >
                                                <i className="fa-solid fa-magnifying-glass">
                                                    <FaSearch />
                                                </i>
                                            </button>
                                        </span>
                                    </form>
                                </div>
                                <div className="title_log">
                                    <span>
                                        <i className="fa-regular fa-circle-user">
                                            <FaRegUserCircle />
                                        </i>
                                        &nbsp;Tài khoản
                                    </span>
                                    <div className="achover">
                                        <Link
                                            state={{ name: "Đăng nhập" }}
                                            className="btns"
                                            to="/login"
                                        >
                                            Đăng nhập
                                        </Link>
                                        <Link
                                            state={{ name: "Đăng ký" }}
                                            to="/register"
                                        >
                                            Đăng ký
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -- Header ----- */}
            <header className="header">
                <div className="mid-header wid_100">
                    <div className="container">
                        <div className="row">
                            <div className="content_header">
                                <div className="header-main">
                                    <div
                                        className="menu-bar-h nav-mobile-button hidden-lg"
                                        onClick={() => handleOpen("bars")}
                                    >
                                        <Link href="#">
                                            <img
                                                className="lazyload"
                                                src={bars}
                                                alt="icon menu"
                                            />
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 logo-main">
                                        <div className="logo">
                                            <Link
                                                to="/"
                                                className="logo-wrapper"
                                            >
                                                <img
                                                    className="lazyload loaded"
                                                    src={logo}
                                                    alt="logo Delta Fruits"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 hidden-xs hidden-sm hidden-md padding-0">
                                        <div className="header-left">
                                            <div className="bg-header-nav hidden-xs hidden-sm">
                                                <div>
                                                    <div className="row row-noGutter-2">
                                                        <nav className="header-nav">
                                                            <ul className="item_big">
                                                                {paths.map(
                                                                    (
                                                                        path,
                                                                        index,
                                                                    ) => {
                                                                        return (
                                                                            <li
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className={
                                                                                    location
                                                                                        .state
                                                                                        ?.id ===
                                                                                    path.id
                                                                                        ? "nav-item active"
                                                                                        : "nav-item"
                                                                                }
                                                                            >
                                                                                <Link
                                                                                    className="a-img"
                                                                                    to={
                                                                                        path.path
                                                                                    }
                                                                                    state={{
                                                                                        id: path.id,
                                                                                        name: path.title,
                                                                                    }}
                                                                                >
                                                                                    <span>
                                                                                        {
                                                                                            path.title
                                                                                        }
                                                                                    </span>
                                                                                    {path.pathLv1 ? (
                                                                                        <FaChevronDown />
                                                                                    ) : (
                                                                                        ""
                                                                                    )}
                                                                                </Link>
                                                                                {path.pathLv1 ? (
                                                                                    <ul className="item_small hidden-sm hidden-xs">
                                                                                        {path.pathLv1.map(
                                                                                            (
                                                                                                pathLv1,
                                                                                                id,
                                                                                            ) => {
                                                                                                return (
                                                                                                    <li
                                                                                                        key={
                                                                                                            id
                                                                                                        }
                                                                                                    >
                                                                                                        <Link
                                                                                                            state={{
                                                                                                                id: pathLv1.id,
                                                                                                                name: pathLv1.title,
                                                                                                            }}
                                                                                                            to={
                                                                                                                pathLv1.path
                                                                                                            }
                                                                                                            title=""
                                                                                                        >
                                                                                                            {
                                                                                                                pathLv1.title
                                                                                                            }
                                                                                                            {pathLv1.pathLv2 ? (
                                                                                                                <i className="fa-solid fa-angle-right">
                                                                                                                    <FaChevronRight />
                                                                                                                </i>
                                                                                                            ) : (
                                                                                                                ""
                                                                                                            )}
                                                                                                        </Link>
                                                                                                        {pathLv1.pathLv2 ? (
                                                                                                            <ul>
                                                                                                                {pathLv1.pathLv2.map(
                                                                                                                    (
                                                                                                                        pathLv2,
                                                                                                                        idx,
                                                                                                                    ) => {
                                                                                                                        return (
                                                                                                                            <li
                                                                                                                                key={
                                                                                                                                    idx
                                                                                                                                }
                                                                                                                            >
                                                                                                                                <Link
                                                                                                                                    state={{
                                                                                                                                        id: pathLv2.id,
                                                                                                                                        name: pathLv2.title,
                                                                                                                                    }}
                                                                                                                                    to={
                                                                                                                                        pathLv2.path
                                                                                                                                    }
                                                                                                                                    title=""
                                                                                                                                >
                                                                                                                                    {
                                                                                                                                        pathLv2.title
                                                                                                                                    }
                                                                                                                                </Link>
                                                                                                                            </li>
                                                                                                                        );
                                                                                                                    },
                                                                                                                )}
                                                                                                            </ul>
                                                                                                        ) : (
                                                                                                            ""
                                                                                                        )}
                                                                                                    </li>
                                                                                                );
                                                                                            },
                                                                                        )}
                                                                                    </ul>
                                                                                ) : (
                                                                                    ""
                                                                                )}
                                                                            </li>
                                                                        );
                                                                    },
                                                                )}
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-xs-12 no-padding-left cartright">
                                        <div className="header-right">
                                            <div className="top-cart-contain f-right">
                                                <div className="mini-cart text-xs-center">
                                                    <div className="heading-cart cart_header">
                                                        <Link
                                                            state={{
                                                                id: "cart",
                                                                name: "Giỏ hàng",
                                                            }}
                                                            className="img_hover_cart"
                                                            to="./cart"
                                                            title="Giỏ hàng"
                                                        >
                                                            <div className="icon_hotline">
                                                                <img
                                                                    className="lazyload loaded"
                                                                    src={bag}
                                                                    alt="Delta Fruits"
                                                                />
                                                            </div>
                                                        </Link>
                                                        <div className="content_cart_header hidden-xs">
                                                            <Link
                                                                state={{
                                                                    id: "cart",
                                                                    name: "Giỏ hàng",
                                                                }}
                                                                className="bg_cart"
                                                                to="/cart"
                                                                title="Giỏ hàng"
                                                            >
                                                                <span className="text-giohang">
                                                                    Giỏ hàng:
                                                                </span>
                                                                <strong>
                                                                    (
                                                                    <span className="count_item count_item_pr">
                                                                        {
                                                                            cartItems.length
                                                                        }
                                                                    </span>
                                                                    )
                                                                </strong>
                                                                Sản phẩm
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="top-cart-content">
                                                        {cartItems.length ===
                                                        0 ? (
                                                            <ul
                                                                id="cart-sidebar"
                                                                className="mini-products-list count_li"
                                                            >
                                                                <div className="no-item">
                                                                    <p>
                                                                        Không có
                                                                        sản phẩm
                                                                        nào.
                                                                    </p>
                                                                </div>
                                                            </ul>
                                                        ) : (
                                                            <HeaderCartList />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top-cart-contain f-right hidden">
                                                <div className="mini-cart text-xs-center">
                                                    <div className="heading-cart">
                                                        <Link
                                                            className="bg_cart"
                                                            href="./cart.html"
                                                            title="Giỏ hàng"
                                                        >
                                                            <i className="ion-android-cart"></i>
                                                            <span className="count_item count_item_pr">
                                                                1
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- Menu mobile --> */}
            <div
                className={
                    open.bars
                        ? "menu_mobile sidenav max_991 hidden-lg open_sidebar_menu"
                        : "menu_mobile sidenav max_991 hidden-lg"
                }
                id="mySidenav"
            >
                <ul className="ul_collections">
                    <li className="special">
                        <Link to="/products">Tất cả danh mục</Link>
                    </li>
                    {paths.map((path, index) => (
                        <li
                            key={index}
                            className={
                                open.products && path.pathLv1
                                    ? "level0 level-top parent current"
                                    : "level0 level-top parent"
                            }
                        >
                            <Link to={path.path}>{path.title}</Link>
                            {path.pathLv1 ? (
                                <>
                                    <i
                                        className="fa-solid fa-angle-down"
                                        onClick={() => handleOpen("products")}
                                    >
                                        <FaChevronDown />
                                    </i>
                                    <ul
                                        className="level0"
                                        style={
                                            open.products
                                                ? { display: "block" }
                                                : { display: "none" }
                                        }
                                    >
                                        {path.pathLv1.map((pathLv1, id) => (
                                            <li
                                                key={id}
                                                className={
                                                    open.otherProducts &&
                                                    pathLv1.pathLv2
                                                        ? "level1 current"
                                                        : "level1"
                                                }
                                            >
                                                <Link to="/products">
                                                    <span>{pathLv1.title}</span>
                                                </Link>

                                                {pathLv1.pathLv2 ? (
                                                    <>
                                                        <i
                                                            className="fa-solid fa-angle-down"
                                                            onClick={() =>
                                                                handleOpen(
                                                                    "otherProducts",
                                                                )
                                                            }
                                                        >
                                                            <FaChevronDown />
                                                        </i>
                                                        <ul
                                                            className="level1"
                                                            style={
                                                                open.otherProducts
                                                                    ? {
                                                                          display:
                                                                              "block",
                                                                      }
                                                                    : {
                                                                          display:
                                                                              "none",
                                                                      }
                                                            }
                                                        >
                                                            {pathLv1.pathLv2.map(
                                                                (
                                                                    pathLv2,
                                                                    id,
                                                                ) => (
                                                                    <li
                                                                        key={id}
                                                                        className="level2"
                                                                    >
                                                                        <Link
                                                                            to={
                                                                                pathLv2.path
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    pathLv2.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </>
                                                ) : (
                                                    ""
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                ""
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <!-- End --> */}
        </>
    );
};

export default Header;
