import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="showcase">
      <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
        <Link to="/" className="btn-rounded btn-header">
          Sign In
        </Link>
      </div>
      <div className="showcase-content">
        <h1>Unlimited movies,Tv shows and more</h1>
        <p>Watch anywhere. Cancel Anytime</p>
        <Link to="/netflix-show" className="btn-xl btn-header">
          Watch Free for 30days
          <i className="fas fa-chevron-right btn-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
