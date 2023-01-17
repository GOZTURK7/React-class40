import React from "react";
import Product from "./Product.js";

const Products = ({ products, isLoading, handleSelectedProduct }) => {
  return (
    <>
      <ul className="products">
        {isLoading == true ? (
          <h3>Products Loading...</h3>
        ) : (
          Array.isArray(products) &&
          products.map((product, index) => {
            // const { image, title, id} = product;
            return (
              <Product
                // image={image}
                // title={title}
                // id={id}
                key={index}
                product={product}
                handleSelectedProduct={handleSelectedProduct}
              />
            );
          })
        )}
      </ul>
    </>
  );
};

export default Products;
