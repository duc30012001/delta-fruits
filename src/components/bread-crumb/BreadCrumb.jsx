import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
    return (
        <div>
            {/* <!-- Header JS --> */}
            <div className="breadcrumb_background">
                <div className="title_full">
                    <div className="container a-center">
                        <h1 className="title_page">{title}</h1>
                    </div>
                </div>
            </div>
            <section className="bread-crumb">
                <span className="crumb-border"></span>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 a-left">
                            <ul className="breadcrumb">
                                <li className="home">
                                    <Link to="/">
                                        <span>Trang chủ</span>
                                    </Link>
                                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                                </li>

                                <li>
                                    <strong>
                                        <span> {title}</span>
                                    </strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BreadCrumb;
