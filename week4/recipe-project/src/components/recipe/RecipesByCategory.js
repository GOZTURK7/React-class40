import React from "react";
import styled from "styled-components";
import RecipeCategory from "./RecipeCategory";

const RecipesByCategory = ({ category }) => {
  let title = "TOP TEN RATED RECIPES";

  if (category === "") {
    title = title;
  } else if (category === "bread") {
    title = "DELICIOUSS BREADS";
  } else if (category === "breakfast") {
    title = "DELICIOUSS BREAKFASTS";
  } else if (category === "soup") {
    title = "DELICIOUSS SOUPS";
  } else if (category === "dessert") {
    title = "DELICIOUSS DESSERTS";
  } else if (category === "snack") {
    title = "DELICIOUSS SNACKS";
  } else if (category === "salad") {
    title = "DELICIOUSS SALADS";
  } else if (category == "search") {
    title = "SEARCH RESULTS";
  }

  return (
    <>
      <Title>
        <H4>{title}</H4>
      </Title>
      <RecipeCategory category={category} />
    </>
  );
};

const H4 = styled.h4`
  text-align: center;
  font-family: Oswald, sans-serif;
  color: var(--color6);
  font-size: 50px;
  @media (max-width: 597px) {
    font-size: 40px !important;
  }
  border: 0.2rem solid var(--color6);
  border-left: none;
  border-right: none;
  display: inline-block;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default RecipesByCategory;
