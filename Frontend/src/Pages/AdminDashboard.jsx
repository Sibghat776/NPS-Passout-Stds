import React from 'react'
import Sidebar from '../Components/sideBar'
import { Routes, Route } from 'react-router-dom' // Corrected Import
import StudentList from '../Components/Admin Panel/StudentList'

// Temporary Components (Jab tak aap baqi files nahi banate)
const Overview = () => <div className="text-white text-xl">Overview Dashboard Content</div>;
const AlumniReports = () => <div className="text-white text-xl">Reports & Analytics Content</div>;
const Settings = () => <div className="text-white text-xl">Admin Settings Content</div>;

const AdminDashboard = () => {
    return (
        <div className="flex min-h-screen bg-richBlack">
            {/* 1. Sidebar Fix Rahega */}
            <Sidebar />

            {/* 2. Main Content Area (ml-72 sidebar ki width ke liye hai) */}
            <div className="ml-72 flex-1 p-8">

                {/* Dashboard Static Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-black text-white tracking-tight">Admin <span className="text-blue-500">Panel</span></h1>
                    <p className="text-gray-400 mt-2">Manage your students and system preferences here.</p>
                </div>

                {/* --- YAHAN COMPONENTS CHANGE HONGE --- */}
                <div className="mt-6">
                    <Routes>
                        {/* Note: In paths ke aage /admin/ isliye nahi lagaya kyunki 
                            parent App.jsx mein already /admin/ define hoga */}
                        <Route path="overview" element={<Overview />} />
                        <Route path="students" element={<StudentList />} />
                        <Route path="reports" element={<AlumniReports />} />
                        <Route path="settings" element={<Settings />} />
                    </Routes>
                </div>
                {/* -------------------------------------- */}
            </div>
        </div>
    )
}

export default AdminDashboard