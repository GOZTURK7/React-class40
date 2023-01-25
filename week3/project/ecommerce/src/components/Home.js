import React, { useEffect } from "react";
import Categories from "../components/Categories.js";
import Header from "../components/Header.js";
import Products from "../components/Products.js";
import useFetch from "../hooks/useFetch.js";

const Home = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  isLoading,
  setIsLoading,
  setSelectedProductId,
  products,
  setProducts,
  setIsError
}) => {

  const [fetchData] = useFetch();

  useEffect(() => {
    fetchData("", setProducts, setIsLoading, setIsError);
  }, [])

  return (
    <>
      <Header title={"Products"} setSelectedCategory={setSelectedCategory}/>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isLoading={isLoading}
      />
      <Products
        products={products}
        isLoading={isLoading}
        setSelectedProductId={setSelectedProductId}
      />
    </>
  );
};

export default Home;
