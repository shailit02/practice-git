import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import SignUp from "./pages/SIgnUp.jsx";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </>
  );
};

export default App;
