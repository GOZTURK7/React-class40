import React from "react";
import Product from "./Product.js";

const Products = ({ selectedCategory, products }) => {
  return (
    <>
      <ul className="products">
        {selectedCategory != false
          ? products
              .filter((product) => product.category === selectedCategory)
              .map((product, index) => {
                const { image, title } = product;
                return <Product key={index} image={image} title={title} />;
              })
          : products.map((product, index) => {
              const { image, title } = product;
              return <Product key={index} image={image} title={title} />;
            })}
      </ul>
    </>
  );
};

export default Products;
