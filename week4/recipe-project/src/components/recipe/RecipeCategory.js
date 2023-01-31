import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useCategories from "../../hooks/useCategories";
import RecipeCard from "./RecipeCard";

const RecipeCategory = ({ category }) => {
  const [recipes, setRecipes] = useState([]);
  const [getCategories, getSearched] = useCategories();

  useEffect(() => {
    getCategories(setRecipes, category);
  }, [category]);

  return (
    <>
      <Container className="container-fluid">
        <div className="row d-flex">
          {recipes.map((recipe, index) => {
            return (
              <RecipeCard
                key={index}
                title={recipe.title}
                image={recipe.image}
                id={recipe.id}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: var(--color7);
  margin-bottom: 3rem;
`;

export default RecipeCategory;
