import React from "react";
import NewsSidebar from "../components/news-sidebar/NewsSidebar";

import paths from "../helper/paths";
import news from "../helper/news";
import comments from "../helper/comments";

import DefaultLayout from "../layout/DefaultLayout";
import { useParams } from "react-router-dom";
import NewDetailContent from "../components/new-detail-content/NewDetailContent";

const NewDetail = () => {
    const param = useParams();
    const newItem = news.filter((item) => item.path.includes(param.id))[0];
    return (
        <DefaultLayout>
            <div class="container article-wraper">
                <div class="wrap_background_aside padding-top-15 margin-bottom-10">
                    <div class="row">
                        <section class="right-content col-lg-9 col-md-9 col-sm-12 col-xs-12 col-lg-push-3 col-md-push-3">
                            <div class="box-heading relative"></div>
                            <article class="article-main">
                                <div class="row">
                                    <NewDetailContent
                                        newItem={newItem}
                                        comments={comments}
                                    />
                                </div>
                            </article>
                        </section>

                        <NewsSidebar paths={paths} news={news} />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default NewDetail;
