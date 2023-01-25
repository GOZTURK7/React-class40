import React from "react";
import useHandleFavorite from "../hooks/useHandleFavorite";
import Header from "./Header";

const ProductDetails = ({ product, isLoading, setSelectedCategory }) => {
  const id = product.id;
  const [
    handleFavorite,
    favoritedId,
    heartRegular,
    heartSolid,
  ] = useHandleFavorite();

  if (isLoading) return <h3>Product Details Loading...</h3>;
  return (
    <>
      <Header title={product.title} setSelectedCategory={setSelectedCategory} />
      <div className="product-details">
        <div className="product-details--information">
          <div className="product-details--image">
            <div className="product-image--container">
              <img className="product-image" src={product.image} alt={`favorite-${product.title}`} />
              <div
                className="product-image--favourite-container"
                onClick={(e) => handleFavorite(e, id)}
              >
                <img
                  className="product-image--favourite"
                  src={favoritedId.includes(id) ? heartSolid : heartRegular}
                  alt={`favorite-${product.title}`}
                />
              </div>
            </div>
          </div>
          <p className="product-details--description">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
