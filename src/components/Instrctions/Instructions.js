import React, { useContext } from "react";
import YogaContext from "../../YogaContext";
import { poseInstructions } from "../../utils/data";

import { poseImages } from "../../utils/pose_images";
import Nav from "../Nav";
import "./Instructions.css";
import Logo from "./../../Assets/Logo.png";
export default function Instructions() {
  const { currentPose } = useContext(YogaContext);

  return (
    <div>
      <div className="yoga-top">
        <img src={Logo} className="logo-img"></img>
        {/* <DropDown poseList={poseList} /> */}
      </div>
      <div className="instructions-container">
        <ol className="instructions-list">
          {poseInstructions[currentPose].map((instruction) => {
            return <li className="instruction">{instruction}</li>;
          })}
        </ol>
        <img
          className="pose-demo-img"
          src={poseImages[currentPose]}
          alt="pose_images"
        />
      </div>
    </div>
  );
}
