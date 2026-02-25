import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css"
import Home from "./Pages/Home.jsx";
import About from "./Components/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;