import React from "react";
import Category from "./Category.js";

const Categories = ({
  categories,
  selectedCategory,
  handleSelectedCategory,
  isLoading,
}) => {
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
