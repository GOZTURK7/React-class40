import React from "react";
import { Link } from "react-router-dom";
import useHandleFavorite from "../hooks/useHandleFavorite.js";

const Product = ({ product, handleSelectedProduct }) => {
  let { image, title, id } = product;
  const [handleFavorite, favoritedId, heartRegular, heartSolid] =
    useHandleFavorite();

  return (
    <>
      <li className="products--item" onClick={() => handleSelectedProduct(id)}>
        <Link to={`/products/${id}`} className="product-link">
          <div className="product">
            <div className="product-image--container">
              <img className="product-image" src={image} alt={title} />
              <div
                className="product-image--favourite-container"
                onClick={(e) => handleFavorite(e, id)}
              >
                <img
                  className="product-image--favourite"
                  src={favoritedId.includes(id) ? heartSolid : heartRegular}
                  alt={`favorite-${title}`}
                />
              </div>
            </div>
            <span className="product--title">{title}</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Product;
