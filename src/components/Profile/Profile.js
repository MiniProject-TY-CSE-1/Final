import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState(window.localStorage.getItem("email"));
  const navigate = useNavigate();
  useEffect(() => {
    setUser(window.localStorage.getItem("email"));
  }, [user]);
  console.log(user);
  return (
    <div className="user-profile">
      <button className="btn-donate">{user}</button>
    </div>
  );
};

export default Profile;
