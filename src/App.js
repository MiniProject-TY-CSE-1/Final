import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { YogaProvider } from "./YogaContext";
import Home from "./pages/Home/Home";
import Yoga from "./pages/Yoga/Yoga";
import About from "./pages/About/About";
import Tutorials from "./pages/Tutorials/Tutorials";
import Login from "./components/Login/login_component";
import List from "./components/PoseList/List";
import Blog from "./pages/Blog/Blog";
import Signup from "./components/Signup/signup_component";
import "./App.css";

import YogaCanvas from "./pages/Yoga/YogaCanvas";
import { useTranslation } from "react-i18next";

export default function App() {
  return (
    <YogaProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/start" element={<Yoga />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/yoga" element={<YogaCanvas />} />
          <Route path="/list" element={<List />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </YogaProvider>
  );
}
