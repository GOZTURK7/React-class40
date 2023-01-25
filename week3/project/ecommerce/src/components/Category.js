import React from "react";

const Category = ({ category, handleSelectedCategory, selectedCategory }) => {
  return (
    <>
      <div
        className={
          selectedCategory === category
            ? "categories--item categories--item-selected"
            : "categories--item"
        }
        onClick={(e) => handleSelectedCategory(e)}
      >
        {category}
      </div>
    </>
  );
};

export default Category;
