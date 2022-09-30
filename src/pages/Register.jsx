import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

import fbBtn from "../static/images/login/fb-btn.svg";
import gpBtn from "../static/images/login/gp-btn.svg";

const Register = () => {
    return (
        <DefaultLayout>
            <div class="col-xs-12 padding-top-15 margin-bottom-40">
                <h1 class="title-head">
                    <Link>Đăng ký tài khoản</Link>
                </h1>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="page-login">
                            <div id="login">
                                <span>
                                    Nếu chưa có tài khoản vui lòng đăng ký tại
                                    đây
                                </span>

                                <form
                                    // accept-charset="utf-8"
                                    // action="https://delta-fruits.mysapo.net/account/register"
                                    id="customer_register"
                                    // method="post"
                                >
                                    {/* <input
                                        name="FormType"
                                        type="hidden"
                                        value="customer_register"
                                    />
                                    <input
                                        name="utf8"
                                        type="hidden"
                                        value="true"
                                    /><input
                                        type="hidden"
                                        id="Token-2ea2fa8f99644d419cc42bcf5bbd0503"
                                        name="Token"
                                        value="03AIIukzgsjFwkHJuCiWUHGdUyL8Hp5r-Hbi7Nd6g5bRHd8szoN23YN8sU5KcLI8BWrnoXPBst-L-ZWNP2Ghv9H6E-Nj-INyZ0N164E0nQbPoof8o_PHaFNtNM5syuqJVifHsZWDDdYbr-3t0MuRUF1ldVxpgxSI5WcfstFkpvOQPvhX4N0gdC6Nq-yvWdk0l6LcWksonITQ9KRpJRHt053KmOAjggC30k9r549CU5tiOhJlKWF1msNnVfMe3bk8jhiLZSteh0JzaGujF-0CnPRuRI4SsnGUjku4hgTJiLv3JG3-No-fV7ykPD33ITp-fy6_vm4f7baHAdREwNjf-etqscgcoQehlwGci6mASwUrXpcLteBIynwgI583SeNZuNnXLYGkgTVLITEYmw6jEwwJ2h1FArE5BKIPYm8nehkkjZrgGMmepcobmy1MqiWizNmPzvlUMBx_OaolIrGzLYDlvU8tfAVMHE3TJCsTPNPsZQ1TspeddwobXEzBkQ-MW2OshPXpGhJeg79sjcpVEZIlCtqvKmROO5kkODfqxO8kxU9nVxuNncKd6mt_d7Zg9aZ9vlnB_tD-nt_IikY9e_kKsF3qcoYIDqDw"
                                    /> */}

                                    <div class="form-signup"></div>
                                    <div class="form-signup clearfix">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <fieldset class="form-group">
                                                    <label>
                                                        Họ
                                                        <span class="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        value=""
                                                        name="lastName"
                                                        id="lastName"
                                                        placeholder=""
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-6">
                                                <fieldset class="form-group">
                                                    <label>
                                                        Tên
                                                        <span class="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        value=""
                                                        name="firstName"
                                                        id="firstName"
                                                        placeholder=""
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <fieldset class="form-group">
                                                    <label>
                                                        Email
                                                        <span class="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                        class="form-control form-control-lg"
                                                        value=""
                                                        name="email"
                                                        id="email"
                                                        placeholder=""
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-6">
                                                <fieldset class="form-group">
                                                    <label>
                                                        Mật khẩu
                                                        <span class="required">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="password"
                                                        class="form-control form-control-lg"
                                                        value=""
                                                        name="password"
                                                        id="password"
                                                        placeholder=""
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>

                                        <div
                                            class="col-xs-12 text-xs-left"
                                            style={{
                                                marginTop: "30px",
                                                padding: "0",
                                            }}
                                        >
                                            <button
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                type="summit"
                                                value="Đăng ký"
                                                class="btn btn-style btn-primary"
                                            >
                                                Đăng ký
                                            </button>
                                            <Link
                                                to="/login"
                                                class="btn-link-style btn-register"
                                                style={{
                                                    marginLeft: "20px",
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                Đăng nhập
                                            </Link>
                                            <div class="block social-login--facebooks">
                                                <p class="a-center">
                                                    Hoặc đăng nhập bằng
                                                </p>
                                                <Link class="social-login--facebook">
                                                    <img
                                                        width="129px"
                                                        height="37px"
                                                        alt="facebook-login-button"
                                                        src={fbBtn}
                                                    />
                                                </Link>
                                                <Link class="social-login--google">
                                                    <img
                                                        width="129px"
                                                        height="37px"
                                                        alt="google-login-button"
                                                        src={gpBtn}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Register;
