import React, { useState, useEffect } from "react";
import Category from "./Category.js";
import useFetch from "../hooks/useFetch.js";

const Categories = ({
  setIsError,
  setIsLoading,
  selectedCategory,
  setSelectedCategory,
  isLoading,
}) => {
  // all categories
  const [categories, setCategories] = useState([]);
  // fetchData custom hook
  const [fetchData] = useFetch();

  const handleSelectedCategory = (e) => {
    let category = e.currentTarget.innerText.toLowerCase();
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchData("categories", setCategories, setIsLoading, setIsError);
  }, []);

  return (
    <>
      <div className="categories">
        {isLoading ? (
          <h3>Categories Loading...</h3>
        ) : (
          categories.map((category, index) => {
            return (
              <Category
                selectedCategory={selectedCategory}
                category={category}
                key={index}
                handleSelectedCategory={handleSelectedCategory}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Categories;
