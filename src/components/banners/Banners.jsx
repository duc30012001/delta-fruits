import React from "react";
import { Link } from "react-router-dom";

export const Banner = ({ banner }) => {
    return (
        <figure className="img_effect">
            <Link className="banner-wide" title="Mua ngay giá tốt quá trời">
                <img
                    className="img-responsive center-base lazyload"
                    src={banner}
                    alt=""
                />
            </Link>
        </figure>
    );
};

const Banners = ({ banners }) => {
    return (
        <>
            <div className="row">
                {banners.map((banner, index) => {
                    return (
                        <div
                            key={index}
                            className="col-lg-12 col-md-12 col-sm-4 col-xs-12 itembaner"
                        >
                            <Banner banner={banner} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Banners;
