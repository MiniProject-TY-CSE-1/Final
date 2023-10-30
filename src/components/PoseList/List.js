import React from "react";
import { useContext } from "react";
import YogaContext from "../../YogaContext";
import { poseImages } from "../../utils/pose_images";
import "./List.css";
import { navigate, useNavigate } from 'react-router-dom';

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
    <div className="list-container">
      {poseList.map((pose) => (
        <button onClick={()=>{setCurrentPosefunc(pose);navigate('/start')}} className="item">
          <div class="">
            <p className="">{pose}</p>
            <img src={poseImages[pose]} className="yog-img" alt="YogaImage" />
          </div>
        </button>
      ))}
    </div>
  );
};

export default List;
