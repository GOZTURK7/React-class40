import React from "react";

const Product = ({ image, title }) => {
  return (
    <>
      <li className="products--item">
        <div className="product">
          <img className="product--image" src={image} alt={title} />
          <span className="product--title">{title}</span>
        </div>
      </li>
    </>
  );
};

export default Product;
