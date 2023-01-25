import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, setSelectedCategory }) => {
  return (
    <>
      <div className="title-container">
        <h1 className="title-container--title">{title}</h1>
        <div className="nav">
          <Link className="nav-link" to="/">
            Products
          </Link>
          <Link className="nav-link" to="/products/favorites" onClick={()=>setSelectedCategory("")}>
            Favourites
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
