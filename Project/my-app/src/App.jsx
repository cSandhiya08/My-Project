import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Causes from "./Causes";
import About from "./About";
import Blog from "./Blog";
import Signin from "./signin";
import Payment from "./Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/causes" element={<Causes />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;