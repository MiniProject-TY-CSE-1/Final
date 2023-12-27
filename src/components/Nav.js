import React, { useEffect, useState } from "react";
import Logo from "./../Assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import Profile from "./Profile/Profile.js";

import toast,{Toaster} from 'react-hot-toast';
import HamburgerMenu from "./hamberger.js";
const Nav = () => {
  const [isLoggedIn, setLogged] = useState(
    window.localStorage.getItem("loggedIn")
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.removeItem("user");
    setLogged(false);
    navigate("/");
    toast.success("Logged Out Successfully");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="home-header">
      <Toaster/>
      <div className="home-heading">
        <img src={Logo} alt="Logo" className="logo" />
        <h2> Yognirakshak</h2>
      </div>
      <HamburgerMenu />
      <div className="nav-btns">
        <Link to="/">
          <button className="btn btn-donate btn-secondary" id="about-btn">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="btn btn-donate btn-secondary" id="about-btn">
            About
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="inner-nav">
            <Profile />
            <button
              className="btn btn-donate btn-secondary"
              onClick={handleLogout}
            >
              Logout
            </button>
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
