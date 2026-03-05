import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Form from "./Pages/Form.jsx";
import "./index.css"
import Home from "./Pages/Home.jsx";
import Community from "./Pages/Community.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/community" element={<Community />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;