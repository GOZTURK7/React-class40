import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, handleSelectedProduct }) => {
  let { image, title, id } = product;
  return (
    <>
      <li className="products--item" onClick={() => handleSelectedProduct(id)}>
        <Link to={`/products/${id}`} className="product-link">
          <div className="product">
            <div className="product-image--container">
              <img className="product-image" src={image} alt={title} />
            </div>
            <span className="product--title">{title}</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Product;
