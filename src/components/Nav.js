import React, { useEffect, useState } from "react";
import Logo from "./../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import Profile from "./Profile/Profile.js";

const Nav = () => {
  const [isLoggedIn, setLogged] = useState(window.localStorage.getItem("loggedIn"));
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogged(false);
    navigate("/");
  };
  return (
    <div className="home-header">
      <div className="home-heading">
        <img src={Logo} alt="Logo" className="logo" />
        <h2> Yognirakshak</h2>
      </div>
      <div className="nav-btns">
        <Link to="/about">
          <button className="btn btn-donate btn-secondary" id="about-btn">
            About
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="inner-nav">
            <button
              className="btn btn-donate btn-secondary"
              onClick={handleLogout}
            >
              Logout
            </button>
            <Profile />
          </div>
        ) : (
          <div className="inner-nav">
            <Link to="/login">
              <button className="btn btn-donate btn-secondary" id="about-btn">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-donate btn-secondary" id="about-btn">
                SignUp
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
