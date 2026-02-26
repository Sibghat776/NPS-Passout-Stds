import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Form from "./Pages/Form.jsx";
import "./index.css"
import Home from "./Pages/Home.jsx";
import Community from "./Pages/Community.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  );
}

export default App;