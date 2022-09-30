import React from "react";
import DefaultLayout from "../layout/DefaultLayout";

import paths from "../helper/paths";
import news from "../helper/news";
import { Link } from "react-router-dom";

import { FaComment } from "react-icons/fa";
import NewsSidebar from "../components/news-sidebar/NewsSidebar";

const News = () => {
    return (
        <>
            <DefaultLayout>
                <div className="content_all f-left w_100 margin-top-20">
                    <div className="right-content margin-bottom-fix margin-bottom-50-article col-lg-9 col-md-9 col-sm-12 col-xs-12 col-lg-push-3 col-md-push-3">
                        <div className="list-blogs blog-main">
                            <div className="row">
                                {news.map((item, index) => (
                                    <div
                                        key={index}
                                        className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                                    >
                                        <div className="myblog">
                                            <div className="blog_item">
                                                <div className="left_item">
                                                    <div className="image-blog-left">
                                                        <Link
                                                            state={{
                                                                name: item.title,
                                                            }}
                                                            to={item.path}
                                                        >
                                                            <img
                                                                className="lazyload loaded"
                                                                src={item.image}
                                                                alt={item.title}
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="right_item">
                                                    <div className="content_blog">
                                                        <div className="content_right">
                                                            <span className="time_post">
                                                                Đăng bởi:
                                                                <span className="name_">
                                                                    {
                                                                        item.author
                                                                    }
                                                                </span>
                                                                &nbsp; | &nbsp;
                                                                <span>
                                                                    <i className="fa-solid fa-comment">
                                                                        <FaComment />
                                                                    </i>
                                                                    &nbsp;1
                                                                </span>
                                                            </span>
                                                            <h3>
                                                                <Link
                                                                    state={{
                                                                        name: item.title,
                                                                    }}
                                                                    to={
                                                                        item.path
                                                                    }
                                                                    title={
                                                                        item.title
                                                                    }
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                        <div className="summary_item_blog">
                                                            <p>{item.des}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 text-center"></div>
                        </div>
                    </div>

                    <NewsSidebar paths={paths} news={news} />
                </div>
            </DefaultLayout>
        </>
    );
};

export default News;
