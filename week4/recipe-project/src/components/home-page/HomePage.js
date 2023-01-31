import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styled from "styled-components";
import CarouselHome from "../common/CarouselHome";
import RecipesByCategory from "../recipe/RecipesByCategory";

const HomePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <CarouselHome />
        <RecipesByCategory category="" />
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomePage;
