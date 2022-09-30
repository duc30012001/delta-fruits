import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BreadCrumb from "../components/bread-crumb/BreadCrumb";

import { useSelector } from "react-redux";

// import CSS
import "../static/css/plugin.css";
import "../static/css/style.css";
import "../static/css/responsive.css";
import "../static/css/base.css";
import "../static/css/custom.css";
import "../static/css/module.css";

import paths from "../helper/paths";

import AddToCart from "../components/add-to-cart/AddToCart";
import QuickView from "../components/quick-view/QuickView";

const DefaultLayout = (props) => {
    // window.scroll({ top: 0 });
    const quickView = useSelector((state) => state.quickView.value);

    const [title, setTitle] = useState("");
    const handleTitle = (content) => {
        setTitle(content);
    };
    return (
        <>
            <Header setTitle={handleTitle} paths={paths} />
            <BreadCrumb title={title} />

            <div className="container">
                <div className="row">{props.children}</div>
            </div>
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

export default DefaultLayout;
