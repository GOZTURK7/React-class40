import React from "react";
import categories from "../fake-data/all-categories.js";
import Category from "./Category.js";

const Categories = ({ selectedCategory, handleSelectedCategory }) => {
  return (
    <>
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <Category
              selectedCategory={selectedCategory}
              category={category}
              key={index}
              handleSelectedCategory={handleSelectedCategory}
            />
          );
        })}
      </div>
    </>
  );
};

export default Categories;
