import React from "react";
import { Link } from "react-router-dom";

import Catalog from "../catalog/Catalog";

const NewsSidebar = ({ news, paths }) => {
    return (
        <>
            <aside className="left left-content col-md-3 col-lg-3 col-sm-12 col-xs-12 col-lg-pull-9 col-md-pull-9">
                <Catalog paths={paths} title={"Danh mục tin tức"} />

                <div className="blog-aside aside-item blog-aside-article">
                    <div>
                        <div className="aside-title-article">
                            <h2 className="title-head">
                                <span>
                                    <a href="./news.html">Tin liên quan</a>
                                </span>
                            </h2>
                        </div>
                        <div className="aside-content-article aside-content">
                            <div className="blog-list blog-image-list">
                                {news.map((item, index) => (
                                    <div key={index} className="loop-blog">
                                        <div className="thumb-left">
                                            <Link to={item.path}>
                                                <img
                                                    className="lazyload"
                                                    src={item.image}
                                                    style={{
                                                        maxWidth: "100%",
                                                    }}
                                                    title={item.title}
                                                    alt={item.title}
                                                />
                                            </Link>
                                        </div>
                                        <div className="name-right">
                                            <h3>
                                                <Link
                                                    to={item.path}
                                                    title="Mẹo chọn dưa hấu ngon trăm quả như một"
                                                >
                                                    {item.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default NewsSidebar;
