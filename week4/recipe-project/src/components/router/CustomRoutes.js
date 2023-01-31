import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../home-page/HomePage";
import RecipeDetails from "../recipe/RecipeDetails";
import RecipesByCategory from "../recipe/RecipesByCategory";
import SearchedRecipes from "../recipe/SearchedRecipes";
import Template from "../templates/Template";

const CustomRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/bread"
          element={
            <Template>
              <RecipesByCategory category="bread" />
            </Template>
          }
        />
        <Route
          path="/breakfast"
          element={
            <Template>
              <RecipesByCategory category="breakfast" />
            </Template>
          }
        />
        <Route
          path="/soup"
          element={
            <Template>
              <RecipesByCategory category="soup" />
            </Template>
          }
        />
        <Route
          path="/dessert"
          element={
            <Template>
              <RecipesByCategory category="dessert" />
            </Template>
          }
        />
        <Route
          path="/snack"
          element={
            <Template>
              <RecipesByCategory category="snack" />
            </Template>
          }
        />
        <Route
          path="/salad"
          element={
            <Template>
              <RecipesByCategory category="salad" />
            </Template>
          }
        />
        <Route
          path="/search/:name"
          element={
            <Template>
              <SearchedRecipes />
            </Template>
          }
        />
        <Route
          index
          path="/:id"
          element={
            <Template>
              <RecipeDetails />
            </Template>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoutes;
