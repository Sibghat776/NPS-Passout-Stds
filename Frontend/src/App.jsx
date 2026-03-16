import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Form from "./Pages/Form.jsx";
import "./index.css"
import Home from "./Pages/Home.jsx";
import Community from "./Pages/Community.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./Components/PageNotFound.jsx";
import StudentList from "./Components/Admin Panel/StudentList.jsx";
import Overview from "./Components/Admin Panel/Overview.jsx";
import AlumniRecords from "./Components/Admin Panel/AlumniRecords.jsx";
import Contact from "./Components/Contact.jsx";
import Profile from "./Pages/profile.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} >
          <Route index element={<Navigate to={"overview"} />} />
          <Route path="students" element={<StudentList />} />
          <Route path="overview" element={<Overview />} />
          <Route path="alumni" element={<AlumniRecords />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;