import React from "react";
import { Link } from "react-router-dom";
import carousel1 from "../../utils/images/carousel1.svg";
import carousel2 from "../../utils/images/carousel2.svg";
import carousel3 from "../../utils/images/carousel3.svg";
import Logo from "./../../Assets/Logo.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";

export default function Home() {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  const slideImages = [
    {
      url: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?cs=srgb&dl=pexels-prasanth-inturi-1051838.jpg&fm=jpg",
      caption: "Slide 1",
    },
    {
      url: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?cs=srgb&dl=pexels-prasanth-inturi-1051838.jpg&fm=jpg",
      caption: "Slide 2",
    },
    {
      url: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?cs=srgb&dl=pexels-prasanth-inturi-1051838.jpg&fm=jpg",
      caption: "Slide 3",
    },
  ];

  return (
    <div className="home-container">
      <h1>Bringing the Science to the mat</h1>
      <div className="home-main">
        <div className="slide-container">
        <Slide arrows={false}>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url("${slideImage.url}`,
                  }}
                >
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="btn-section">
          <Link to="/list">
            <button className="start-btn btn-donate">Let's Start</button>
          </Link>
          <Link to="/tutorials">
            <button className="start-btn btn-donate">Tutorials</button>
          </Link>
          <Link to="/blogs">
            <button className="start-btn btn-donate">Poses</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
