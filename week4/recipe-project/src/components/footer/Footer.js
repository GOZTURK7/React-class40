import React from "react";
import "./footer.css";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 ">
              <h6 className="news-letter">Newsletter</h6>
              <div>
                <img
                  className="container-fluid"
                  src={require("../../assets/img/magazine.png")}
                  alt="magazine"
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-8 col-lg-6">
              <h6>About</h6>
              <p className="text-justify">
                recipes.com Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Fuga optio distinctio soluta necessitatibus earum
                dignissimos minus obcaecati, ipsa harum maxime, ab assumenda
                alias iste iusto possimus atque veritatis delectus dolorem.
                Pariatur libero fuga, officia quaerat dicta, debitis quas iste
                temporibus facilis dolorum laboriosam voluptas? Minus natus,
                magnam provident praesentium magni qui culpa dolorum eos
                suscipit doloribus ipsam blanditiis, consequuntur deleniti..
              </p>
            </div>

            <div className="col-xs-12 col-md-4 col-lg-2">
              <h6>Categories</h6>
              <ul className="footer-links">
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
                  <Link to="/salad">Salad</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 col-lg-3">
              <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by
                <a href="https://github.com/GOZTURK7">GokhanOzturk</a>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="https://nl-nl.facebook.com/">
                    <BsFacebook></BsFacebook>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="https://twitter.com/home">
                    <BsTwitter></BsTwitter>
                  </a>
                </li>
                <li>
                  <a className="instegram" href="https://www.instagram.com/">
                    <BsInstagram></BsInstagram>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://www.linkedin.com/">
                    <BsLinkedin></BsLinkedin>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
