import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./screen/Home";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
