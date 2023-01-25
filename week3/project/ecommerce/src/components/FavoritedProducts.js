import React from "react";
import Header from "./Header";
import Products from "./Products";

const FavoritedProducts = ({favoritedProducts, isLoading, setSelectedProductId, setSelectedCategory}) => {
  
  return (
    <>
      <Header title={"Favorited Products"}/>
      {favoritedProducts.length === 0 ? 
     <p>You haven't chosen any favourites yet!</p>
       :
      <Products
      products={favoritedProducts}
      isLoading={isLoading}
      setSelectedProductId={setSelectedProductId}/>}
    </>
  );
};

export default FavoritedProducts;
