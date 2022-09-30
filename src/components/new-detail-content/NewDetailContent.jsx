import React from "react";
import { Link } from "react-router-dom";

const NewDetailContent = ({ newItem, comments }) => {
    return (
        <>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="article-details">
                    <h1 class="article-title">
                        <Link>{newItem.title}</Link>
                    </h1>
                    <div class="date">
                        <i class="fa-solid fa-calendar-o"></i>
                        <div class="news_home_content_short_time">
                            {newItem.date}
                        </div>
                        <div class="post-time">
                            <i class="fa-solid fa-user" aria-hidden="true"></i>
                            Đăng bởi: <span>{newItem.author}</span>
                        </div>
                    </div>

                    <div class="article-content">
                        <div class="rte">
                            {newItem.content.map((content, index) => (
                                <p key={index}>{content}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* ======================= TAGS =========================== */}
            <div class="col-xs-12 col-md-12 col-sm-12 col-xs-12">
                <div class="row row-noGutter tag-share">
                    <div class="col-xs-12 col-sm-6 tag_article">
                        <b>Tags: </b>
                        {newItem.tags.map((tag, index) => (
                            <Link
                                key={index}
                                to="/news"
                                state={{
                                    id: "news",
                                    name: "Tin tức",
                                }}
                            >
                                {tag},
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================================ COMMENTS =================================== */}
            <div class="col-xs-12">
                <div id="article-comments">
                    <h5 class="title-form-coment margin-bottom-15">
                        Bình luận:
                    </h5>
                    <div class="hidden">{comments.length} bình luận</div>

                    <div class="article-comment clearfix">
                        {comments.map((comment, index) => (
                            <div key={index}>
                                <figure class="article-comment-user-image">
                                    <img
                                        src={comment.ava}
                                        alt="binh-luan"
                                        class="block"
                                    />
                                </figure>

                                <div class="article-comment-user-comment">
                                    <p class="user-name-comment">
                                        <strong>{comment.name}</strong>
                                        <Link class="btn-link pull-xs-right hidden">
                                            Trả lời
                                        </Link>
                                    </p>
                                    <span class="article-comment-date-bull">
                                        {comment.date}
                                    </span>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="text-center"></div>

                <form
                    // accept-charset="utf-8"
                    // action="https://delta-fruits.mysapo.net/posts/meo-chon-dua-hau-ngon-tram-qua-nhu-mot/comments"
                    id="article_comments"
                    // method="post"
                >
                    <input
                        name="FormType"
                        type="hidden"
                        value="article_comments"
                    />
                    <input name="utf8" type="hidden" value="true" />

                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="form-coment">
                            <div class="row">
                                <div class="margin-top-0 margin-bottom-30">
                                    <h5 class="title-form-coment">
                                        Viết bình luận của bạn:
                                    </h5>
                                </div>
                                <div class="">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-6">
                                            <fieldset class="form-group">
                                                <input
                                                    placeholder="Họ và tên"
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    value=""
                                                    id="full-name"
                                                    name="Author"
                                                    required=""
                                                />
                                            </fieldset>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6">
                                            <fieldset class="form-group">
                                                <input
                                                    placeholder="Email"
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                    type="email"
                                                    class="form-control form-control-lg"
                                                    value=""
                                                    name="Email"
                                                    required=""
                                                />
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                                <fieldset class="form-group col-xs-12 col-sm-12 col-md-12">
                                    <textarea
                                        placeholder="Viết bình luận"
                                        class="form-control form-control-lg"
                                        id="comment"
                                        name="Body"
                                        rows="6"
                                        required=""
                                    ></textarea>
                                </fieldset>
                                <div class="margin-bottom-fix margin-bottom-50-article clearfix">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Gửi bình luận
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End form mail --> */}
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewDetailContent;
