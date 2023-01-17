import React from "react";
import Categories from "../components/Categories.js";
import Header from "../components/Header.js";
import Products from "../components/Products.js";

const Home = ({
  categories,
  selectedCategory,
  handleSelectedCategory,
  isLoading,
  handleSelectedProduct,
  products,
}) => {
  return (
    <>
      <Header />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
        isLoading={isLoading}
      />
      <Products
        products={products}
        isLoading={isLoading}
        handleSelectedProduct={handleSelectedProduct}
      />
    </>
  );
};

export default Home;
