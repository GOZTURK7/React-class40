import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderSearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
    console.log("input: ", input);
  };

  return (
    <>
      <FormStyle onSubmit={onSubmitHandler}>
        <Link to="/" className="home-icon">
          <AiFillHome />
        </Link>
        <div className="search-bar">
          <BiSearchAlt2 color="var(--color2)"></BiSearchAlt2>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
          ></input>
          <button>Search</button>
        </div>
        <ul>
          <li>
            <Link to="/bread">Breads</Link>
          </li>
          <li>
            <Link to="/breakfast">Breakfasts</Link>
          </li>
          <li>
            <Link to="/soup">Soups</Link>
          </li>
          <li>
            <Link to="/dessert">Desserts</Link>
          </li>
          <li>
            <Link to="/snack">Snacks</Link>
          </li>
          <li>
            <Link to="/salad">Salads</Link>
          </li>
        </ul>
      </FormStyle>
    </>
  );
};

const FormStyle = styled.form`
  position: relative;
  margin: 1rem 0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  bottom: 1rem;
  transition: top 0.3s;
  z-index: 1;
  background: var(--color10);
  padding: 1rem auto;
  height: 4rem;
  width: 100%;
  div {
    margin-top: 0rem;
    padding: 0;
  }
  @media (max-width: 1166px) {
    button {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    ul li {
      display: none;
    }
  }
  @media (max-width: 525px) {
    .search-bar {
      margin-left: 4rem;
    }
    input {
      width: 8rem;
    }
    button::after {
      width: 5rem;
      display: flex;
      /* align-items: center; */
      justify-content: center;
    }
  }
  input {
    border: none;
    background: var(--color1);
    outline: none;
    border-radius: 10rem !important;
    padding: 0.7rem 2rem;
    font-size: 1rem;
    color: black;
    border-radius: 0.2rem;
    /* border: 0.1rem solid var(--color6); */
    box-shadow: 0px 1px 10px 1px var(--color6);
    opacity: 0.5;
  }
  div {
    position: relative;
  }
  svg {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  ul {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
  }
  ul a {
    color: var(--color6) !important;
    font-family: Oswald, sans-serif;
    text-decoration: none;
    margin-left: 0.5rem;
    /* background: var(--color1); */
    padding: 0.3rem 1.5rem;
    border-radius: 0.2rem;
    /* border: 0.1rem solid var(--color6); */
  }
  ul a:hover {
    /* background: var(--color2); */
    /* color: var(--color1) !important; */
    border-top: 0.2rem solid var(--color6);
    border-bottom: 0.2rem solid var(--color6);
    /* transition: all 250ms ease-in-out; */
  }
  button {
    color: var(--color6) !important;
    text-decoration: none;
    margin-left: 0.5rem;
    background: var(--color10);
    padding: 0.3rem 1.5rem;
    border: none;
    /* border-radius: 0.2rem; */
    /* border: 0.1rem solid var(--color6); */
    /* box-shadow: 9px 5px 10px 2px var(--color2); */
  }
  button:hover {
    /* color: var(--color1) !important; */
    /* background: var(--color2);
    border: 0.1rem solid var(--color1); */
    border-top: 0.2rem solid var(--color6);
    border-bottom: 0.2rem solid var(--color6);
  }
  .home-icon {
    background: var(--color2);
  }
  .home-icon svg {
    position: absolute;
    top: 8px;
    margin: 0rem 0rem;
    /* border-radius: 1rem; */
    /* background: var(--color2); */
    width: 4rem;
    height: 3rem;
    color: var(--color6);
    padding: 0rem 0rem;
  }
  .home-icon svg:hover {
    color: var(--color1);
  }

  @media (max-width: 1233px) and (min-width: 440px) {
    .search-bar {
      margin-left: 6rem;
    }
  }

  .search-bar {
    font-family: Oswald, sans-serif;
    color: var(--color6);
  }
`;

export default HeaderSearchBar;
