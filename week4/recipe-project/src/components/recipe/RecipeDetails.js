import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useRecipe from "../../hooks/useRecipe";
import NutritionsBars from "../nutrutions-bars/NutritionsBars";
import StarRating from "../common/StarRating";

const RecipeDetails = () => {
  const [details, setDetails] = useState({});
  const [nutritions, setNutritions] = useState({});
  const [active, setActive] = useState("instructions");
  const { id } = useParams();
  const [getRecipe, getNutritions] = useRecipe();

  useEffect(() => {
    getRecipe(id, setDetails);
    getNutritions(id, setNutritions);
  }, [id]);

  return (
    <>
      <RecipeDetailsWrapper>
        <div className="image-title--container">
          <h2 className="image-title">{details.title}</h2>
          <img width={400} src={details.image} alt="" />
          <div className="star-rating-container">
            <StarRating />
          </div>
        </div>
        <Info>
          <div className="btn-grup">
            <Button
              className={active == "instructions" ? "active" : ""}
              onClick={() => setActive("instructions")}
            >
              Instructions
            </Button>
            <Button
              className={active == "ingredients" ? "active" : ""}
              onClick={() => setActive("ingredients")}
            >
              Ingredients
            </Button>
            <Button
              className={active == "nutritions" ? "active" : ""}
              onClick={() => setActive("nutritions")}
            >
              Nutritions
            </Button>
          </div>
          {active == "instructions" && (
            <div className="summary">
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
          {active == "ingredients" && (
            <div className="ingredients-list">
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
          )}
          {active == "nutritions" && (
            <div className="nutritions-bars">
              <NutritionsBars nutritions={nutritions} />
            </div>
          )}
        </Info>
      </RecipeDetailsWrapper>
    </>
  );
};

const RecipeDetailsWrapper = styled.div`
  margin-top: 5rem !important;
  margin-bottom: 5rem !important;
  margin: 0 5rem;
  display: flex;
  @media (max-width: 1072px) {
    flex-direction: column;
    .btn-grup {
      margin-top: 5rem;
    }
    .star-rating-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 672px) {
    margin: 0 2rem;
  }
  @media (max-width: 338px) {
    .search-bar button {
      display: none !important;
    }
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  .image-title--container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .image-title--container img {
    margin-top: 0.1rem;
  }
  .image-title {
    font-size: 1.5rem;
    border: 0.2rem solid var(--color6);
    padding: 1rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  .star-rating-container {
    width: 400px;
  }
`;

const Button = styled.button`
  width: 7rem;
  padding: 1rem;
  color: var(--color6);
  background: white;
  border: 2px solid black;
  margin: 0 1rem;
  font-weight: 600;
`;

const Info = styled.div`
  padding-left: 5rem;
  @media (max-width: 1072px) {
    padding-left: 0;
  }
  width: 100%;
  @media (max-width: 672px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;

    .btn-grup {
    }
    .btn-grup button {
      margin-top: 2rem;
    }
    .summary {
    }
    .ingredients-list {
    }
    .nutritions {
    }
  }
  .btn-grup {
    text-align: center;
  }
  .summary {
    font-size: 1rem !important;
    margin-top: 1rem;
  }
  .summary li {
    margin: 0;
    padding: 0;
    font-size: 1rem !important;
  }
  .ingredients-list li {
    margin: 0;
    padding: 0;
    height: 2rem;
    font-size: 1rem !important;
  }
  .nutritions-bars {
    margin-top: 1rem;
  }
`;

export default RecipeDetails;
