import React from "react";
import { useContext } from "react";
import YogaContext from "../../YogaContext";
import { poseImages } from "../../utils/pose_images";
import "./List.css";
import { navigate, useNavigate } from "react-router-dom";
import Nav from "../Nav";
const List = () => {
  const { currentPose, setCurrentPosefunc } = useContext(YogaContext);
  let poseList = [
    "Tree",
    "Chair",
    "Cobra",
    "Warrior",
    "Dog",
    "Shoulderstand",
    "Traingle",
  ];
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className="list-container">
        {poseList.map((pose) => (
          <div className="pose-cards">
            <div class="pose-item">
              <p className="pose-headline">{pose}</p>
              <button
                className="btn-donate"
                onClick={() => {
                  setCurrentPosefunc(pose);
                  navigate("/start");
                }}
              >
                {" "}
                Detect Pose
              </button>
            </div>
            <img src={poseImages[pose]} className="yog-img" alt="YogaImage" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
