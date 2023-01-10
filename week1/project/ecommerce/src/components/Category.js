import React from "react";

const Category = ({ category, handleSelectedCategory, selectedCategory }) => {
  let cat = category.substr(6);
  return (
    <>
      <div
        className={
          selectedCategory === cat
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
