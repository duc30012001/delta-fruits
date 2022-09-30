import React from "react";

const SectionHomeLayout = ({ className, childLeft, childRight }) => {
    return (
        <div>
            <section className={`section ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 smdown">
                            {childLeft}
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            {childRight}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionHomeLayout;
