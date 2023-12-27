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
import Nav from "./components/Nav";
import YogaCanvas from "./pages/Yoga/YogaCanvas";
import AdminHome from "./components/Login/adminHome";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="App">
      <YogaProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<Yoga />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/yoga" element={<YogaCanvas />} />
            <Route path="/list" element={<List />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Signup />} />
            <Route path="/admin" element={<AdminHome />} />
          </Routes>
          <Footer />
        </Router>
      </YogaProvider>
    </div>
  );
}
