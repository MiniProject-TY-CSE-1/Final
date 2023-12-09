import React from "react";
import { Link } from "react-router-dom";
import carousel1 from "../../utils/images/carousel1.svg";
import carousel2 from "../../utils/images/carousel2.svg";
import carousel3 from "../../utils/images/carousel3.svg";
import Logo from "./../../Assets/Logo.png";
import "./Home.css";
import Nav from "../../components/Nav";
export default function Home() {
  return (
    <div className="home-container">
      <Nav></Nav>
      <h1>Bringing the Science to the mat</h1>
      <div className="home-main">
        <div className="carousel-container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={carousel1} id="img-car" class="d-block" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={carousel2} id="img-car" class="d-block" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={carousel3} id="img-car" class="d-block" alt="..." />
              </div>
            </div> */}
          </div>
        </div>
        <div className="btn-section">
          <Link to="/list">
            <button className="start-btn btn-donate">Let's Start</button>
          </Link>
          <Link to="/tutorials">
            <button className="start-btn btn-donate">Tutorials</button>
          </Link>
          <Link to="/blogs">
            <button className="start-btn btn-donate">Posts</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
