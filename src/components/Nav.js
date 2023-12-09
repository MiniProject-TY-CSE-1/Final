import React from "react";
import Logo from "./../Assets/Logo.png";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <div className="home-header">
      <div className="home-heading">
        <img src={Logo} alt="Logo" className="logo" />
        <h2> Yognirakshak</h2>
      </div>
      <Link to="/about">
        <button className="btn btn-donate btn-secondary" id="about-btn">
          About
        </button>
      </Link>
    </div>
  );
};

export default Nav;
