import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCategories from "../../hooks/useCategories";
import RecipeCard from "./RecipeCard";

const SearchedRecipes = () => {
  const [searched, setSearched] = useState([]);
  const [getCategories, getSearched] = useCategories();
  const params = useParams();
  const title = params.name.toUpperCase();

  useEffect(() => {
    getSearched(setSearched, params.name);
  }, [params.name]);

  return (
    <>
      <Title>
        <H4>{`RESULTS FOR ${title}`}</H4>
      </Title>
      <Container className="container-fluid">
        <div className="row d-flex">
          {searched.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
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
  margin: 2rem 2rem;
`;

export default SearchedRecipes;
