import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useCarouselRecipe from "../../hooks/useCarouselRecipe";

const CarouselHome = () => {
  const initialRecipe = [
    {
      id: "653308",
      image: "https://spoonacular.com/recipeImages/716432-556x370.jpg",
      title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      creditsText: "Full Belly Sisters",
    },
    {
      id: "658357",
      image: "https://spoonacular.com/recipeImages/656329-556x370.jpg",
      title: "Arugula Walnut Pesto",
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    },
    {
      id: "716627",
      image: "https://spoonacular.com/recipeImages/716300-556x370.jpg",
      title: "Red Lentil Soup with Chicken and Turnips",
      creditsText: "pinkwhen.com",
    },
  ];
  const [carouselRecipe, setCarouselRecipe] = useState(initialRecipe);
  const [getCarouselRecipes] = useCarouselRecipe();
  const navigate = useNavigate();

  useEffect(() => {
    getCarouselRecipes(setCarouselRecipe);
  }, []);

  return (
    <>
      <CarouselContainer>
        <h1>CHEF's BEST THREE</h1>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              onClick={() => navigate(`/${carouselRecipe[0].id}`)}
              className="carousel-item active"
            >
              <img
                src={carouselRecipe[0].image}
                className="d-block w-100"
                alt=".."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{carouselRecipe[0].creditsText}</h5>
                <p>{carouselRecipe[0].title}</p>
              </div>
            </div>
            <div
              onClick={() => navigate(`/${carouselRecipe[1].id}`)}
              className="carousel-item"
            >
              <img
                src={carouselRecipe[1].image}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{carouselRecipe[1].creditsText}</h5>
                <p>{carouselRecipe[1].title}</p>
              </div>
            </div>
            <div
              onClick={() => navigate(`/${carouselRecipe[2].id}`)}
              className="carousel-item"
            >
              <img
                src={carouselRecipe[2].image}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{carouselRecipe[2].creditsText}</h5>
                <p>{carouselRecipe[2].title}</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </CarouselContainer>
    </>
  );
};

const CarouselContainer = styled.div`
  width: 55%;
  margin: 1rem 2rem 5rem;
  color: white;
  border-radius: 0.3rem;
  box-shadow: 0px 1px 10px 1px var(--color6);
  @media (max-width: 597px) {
    width: 100%;
  }

  img {
    border-radius: 0.3rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    filter: brightness(75%);
  }
  h1 {
    text-align: center;
    font-family: Oswald, sans-serif;
    color: var(--color4);
    background-color: var(--color6);
    border: 0.2rem solid var(--color6);
    margin-bottom: 0;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-radius: 0.3rem;
    p {
      font-family: Oswald, sans-serif !important;
    }
    h5 {
      font-family: Oswald, sans-serif !important;
    }
  }
`;

export default CarouselHome;
