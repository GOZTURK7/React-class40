import React from "react";
import styled from "styled-components";
import HeaderSearchBar from "./HeaderSearchBar";

const Header = () => {
  return (
    <>
      <Title>
        <div className="img-container">
          <img src={require("../../assets/img/logo-transparant.png")} alt="logo" />
        </div>
        <h1>RECIPE WEBSITE</h1>
      </Title>
      <HeaderSearchBar />
    </>
  );
};

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: Oswald, sans-serif;
    font-size: 5rem !important;
    color: var(--color6) !important;
    margin: 0rem 0rem 0rem 0rem;
    text-align: center;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .img-container {
    width: 10%;
    height: 10%;
  }

  @media (max-width: 767px) {
    h1 {
      display: none;
      align-items: center;
    }
    .img-container {
      width: 50%;
      height: 50%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 3rem !important;
    }
  }
`;

export default Header;
