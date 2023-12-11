import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState("");
  const once = 1;

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          console.log(data.data);
          setUser(data.data);
        } else {
          alert("Invalid Credentials");
        }
      });
  }, [once]);

  const handleProfile = ()=>{
    navigate("/profile");
  }
  return (
    <div className="user-profile">
      <button className="btn-donate" onClick={handleProfile}>{user.fname}</button>
    </div>
  );
};

export default Profile;
