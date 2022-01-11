import React from "react";
import "../../Assets/css/style.scss";
import logo from "../../Assets/images/logo.png";

export const Topnav = (props) => {
  return (
    <nav className="top__nav">
      <a href="#">
        <img src={logo} className="logo" />
      </a>
      <a href="#">Home</a>
      <a href="#">Mens</a>
      <a href="#">Womens</a>
      <input type="text" className="search__bar" placeholder="search here..." />
      <div className="nav__right">
        <a href="#">Sign in</a>
        <a href="#">Cart</a>
      </div>
    </nav>
  );
};
