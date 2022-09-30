import React, { useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import helper functions
import { sorts } from "../helper/filters";
import filters from "../helper/filters";
import paths from "../helper/paths";

// import icons
import { FaAlignRight, FaTimes } from "react-icons/fa";

// Import components
import ProductsList from "../components/product-list/ProductsList";
import DefaultLayout from "../layout/DefaultLayout";
import Sidebar from "../components/sidebar/Sidebar";
import ProductsListSwiper from "../components/product-list-swiper/ProductsListSwiper";

const Products = () => {
    // Get list products
    const productsList = useSelector((state) => state.products.value);
    const products = [...productsList];

    // Responsive swiper
    const defaultWidth = window.innerWidth;
    let defaultCol = 0;
    if (defaultWidth < 600) {
        defaultCol = 2;
    } else if (defaultWidth < 992) {
        defaultCol = 3;
    } else defaultCol = 4;

    const [col, setCol] = useState(defaultCol);
    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 769) {
            setCol(2);
        } else if (width < 992) {
            setCol(3);
        } else setCol(4);
    };
    window.addEventListener("resize", handleResize);

    const [filtersProduct, setFiltersProduct] = useState({
        price: {
            max: NaN,
            min: -1,
        },
        type: [],
        size: [],
        sortDate: "oldest",
        sortPrice: "increase-price",
    });

    console.log(filtersProduct);

    const handleFilter = (type, value, min) => {
        switch (type) {
            case "price": {
                setFiltersProduct((prev) => {
                    let result = { ...prev };
                    if (result.price.min === -1 || result[type].min > min)
                        result.price.min = min;
                    result.price.max = value;
                    return result;
                });
                break;
            }

            case "type":
            case "size": {
                setFiltersProduct((prev) => {
                    let result = { ...prev };
                    const index = result[type].findIndex(value);
                    index === -1
                        ? result[type].push(value)
                        : result[type].splice(index, 1);
                    return result;
                });
                break;
            }

            case "sortDate":
            case "sortPrice": {
                setFiltersProduct((prev) => {
                    let result = { ...prev };
                    result[type] = value;
                    return result;
                });
                break;
            }
            default:
                break;
        }
    };

    // Handle sidebar
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            <DefaultLayout>
                <Sidebar
                    paths={paths}
                    filters={filters}
                    openSidebar={openSidebar}
                />

                <div className="main_container collection col-lg-9 col-lg-9-fix padding-col-left-0">
                    {/* ========================= SUGGEST ===================== */}
                    <ProductsListSwiper
                        title={"Sản phẩm gợi ý"}
                        products={products}
                        col={col}
                    />

                    {/* ========================== SORT ============================= */}
                    <div className="category-products products">
                        <div className="sortPagiBar">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="bg-white sort-cate clearfix f-left">
                                        {/* ===================== SORT DESKTOP ====================== */}
                                        <div className="sort-cate-left hidden-xs hidden-sm">
                                            <h3>Ưu tiên xem:</h3>
                                            <ul className="sort-menu">
                                                {sorts.map((sort, index) => (
                                                    <li
                                                        onClick={() =>
                                                            handleFilter(
                                                                sort.type,
                                                                sort.id,
                                                            )
                                                        }
                                                        key={index}
                                                        className="sort-menu__item"
                                                    >
                                                        <input
                                                            id={sort.id}
                                                            className="input-custom"
                                                            type="checkbox"
                                                            checked={
                                                                filtersProduct[
                                                                    sort.type
                                                                ] === sort.id
                                                            }
                                                        />{" "}
                                                        <label
                                                            htmlFor={sort.id}
                                                        >
                                                            {sort.name}
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* ==================== SORT MOBILE ==================== */}
                                        <div className="sort-cate-right-mobile hidden-lg hidden-md">
                                            <div id="sort-by">
                                                <label className="left">
                                                    Sắp xếp:
                                                </label>
                                                <ul>
                                                    <li>
                                                        <span>Thứ tự</span>
                                                        <ul>
                                                            {sorts.map(
                                                                (
                                                                    sort,
                                                                    index,
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <Link
                                                                            to="#"
                                                                            // onclick="sortby(&#39;created-desc&#39;)"
                                                                        >
                                                                            {
                                                                                sort.name
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ProductsList
                            products={products}
                            colXs={6}
                            colSm={4}
                            colMd={3}
                            colLg={3}
                        />
                    </div>

                    <div
                        id="open-filters"
                        className={`open-filters hidden-lg  ${
                            openSidebar ? "openf" : ""
                        }`}
                        onClick={() => setOpenSidebar(!openSidebar)}
                    >
                        <i className="fa-solid fa-align-right">
                            {openSidebar ? <FaTimes /> : <FaAlignRight />}
                        </i>
                        <span>Lọc</span>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Products;
