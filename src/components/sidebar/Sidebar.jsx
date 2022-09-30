import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";

// Import icons
import Catalog from "../catalog/Catalog";

import Filter from "./Filter";
import SliderGrid from "../slider-grid/SliderGrid";

const Sidebar = ({ paths, filters, openSidebar }) => {
    const products = useSelector((state) => state.products.value);

    return (
        <>
            <aside
                className={`dqdt-sidebar sidebar left-content col-lg-3 col-lg-3-fix ${
                    openSidebar ? "openf" : ""
                }`}
            >
                <div className="wrap_background_aside asidecollection">
                    <Catalog paths={paths} title={"Danh mục"} />

                    <div className="aside-filter">
                        {filters.map((filter, index) => {
                            return (
                                <div key={index}>
                                    <Filter filter={filter} />
                                </div>
                            );
                        })}
                    </div>

                    <SliderGrid
                        title={"Có thể bạn thích"}
                        products={products}
                        col={1}
                        row={2}
                    />
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
