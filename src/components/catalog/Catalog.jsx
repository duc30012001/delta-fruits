import React, { useState } from "react";
import { Link } from "react-router-dom";

// import icons
import { FaAngleRight } from "react-icons/fa";

const Catalog = ({ paths, title }) => {
    const [openMenu, setOpenMenu] = useState({
        products: false,
        otherProducts: false,
    });

    const handleOpen = (key) => {
        setOpenMenu((prev) => {
            let temp = { ...prev };
            temp[key] = !temp[key];
            return temp;
        });
    };

    return (
        <div>
            <aside className="aside-item sidebar-category collection-category">
                <div className="aside-title">
                    <h2 className="title-head margin-top-0 margin-bottom-10">
                        <span>{title}</span>
                    </h2>
                </div>
                <div className="aside-content">
                    <nav className="nav-category navbar-toggleable-md">
                        <ul className="nav navbar-pills">
                            {paths.map((path, index) => (
                                <li
                                    key={index}
                                    className={`nav-item lv1 ${
                                        path.pathLv1 && openMenu.products
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <Link to={path.path} className="nav-link">
                                        {path.title}
                                    </Link>
                                    {path.pathLv1 ? (
                                        <>
                                            <i
                                                onClick={() =>
                                                    handleOpen("products")
                                                }
                                                className="fa-solid fa-angle-right"
                                            >
                                                <FaAngleRight />
                                            </i>
                                            <ul className="dropdown-menu">
                                                {path.pathLv1.map(
                                                    (pathLv1, idx) => (
                                                        <li
                                                            key={idx}
                                                            className={`dropdown-submenu nav-item lv2 ${
                                                                pathLv1.pathLv2 &&
                                                                openMenu.otherProducts
                                                                    ? "active"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <Link
                                                                className="nav-link"
                                                                to={
                                                                    pathLv1.path
                                                                }
                                                            >
                                                                {pathLv1.title}
                                                            </Link>
                                                            {pathLv1.pathLv2 ? (
                                                                <>
                                                                    <i
                                                                        onClick={() =>
                                                                            handleOpen(
                                                                                "otherProducts",
                                                                            )
                                                                        }
                                                                        className="fa-solid fa-angle-right"
                                                                    >
                                                                        <FaAngleRight />
                                                                    </i>
                                                                    <ul className="dropdown-menu">
                                                                        {pathLv1.pathLv2.map(
                                                                            (
                                                                                pathLv2,
                                                                                id,
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        id
                                                                                    }
                                                                                    className="nav-item lv3"
                                                                                >
                                                                                    <Link
                                                                                        className="nav-link"
                                                                                        to={
                                                                                            pathLv2.path
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            pathLv2.title
                                                                                        }
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
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Catalog;
