import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing.jsx";
import Registration from "./Pages/Registration.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import React from "react";
import "./index.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;