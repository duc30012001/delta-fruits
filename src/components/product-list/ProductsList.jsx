import React from "react";
import ProductCard from "../product-card/ProductCard";

const ProductsList = ({ products, colXs, colSm, colMd, colLg }) => {
  return (
    <>
      <section className="products-view products-view-grid collection_reponsive list_hover_pro">
        <div className="row">
          {products.map((product, index) => (
            <div
              key={index}
              className={`col-xs-${colXs} col-sm-${colSm} col-md-${colMd} col-lg-${colLg} product-col`}
            >
              <div className="item_product_main margin-bottom-20 item_product_main_relative">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center"></div>
      </section>
    </>
  );
};

export default ProductsList;
