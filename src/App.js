import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { YogaProvider } from "./YogaContext";
import Home from "./pages/Home/Home";
import Yoga from "./pages/Yoga/Yoga";
import About from "./pages/About/About";
import Tutorials from "./pages/Tutorials/Tutorials";
import List from "./components/PoseList/List";
import Blog from "./pages/Blog/Blog";
import "./App.css";

import YogaCanvas from "./pages/Yoga/YogaCanvas";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  return (
    <YogaProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Yoga />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/yoga" element={<YogaCanvas />} />
          <Route path="/list" element={<List/>} />
          <Route path="/blogs" element={<Blog/>} />
        </Routes>
      </Router>
    </YogaProvider>
  );
}
