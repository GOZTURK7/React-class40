import React from "react";
import Product from "./Product.js";

const Products = ({ products, isLoading, setSelectedProductId }) => {
  const handleSelectedProduct = (id) => {
    setSelectedProductId(id);
  };

  return (
    <>
      <ul className="products">
        {isLoading == true ? (
          <h3>Products Loading...</h3>
        ) : (
          Array.isArray(products) &&
          products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                setSelectedProductId={setSelectedProductId}
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
