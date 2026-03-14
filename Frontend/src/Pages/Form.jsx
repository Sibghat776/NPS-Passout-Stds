import React, { useState, useRef } from "react";
import axios from "axios"; // Added Axios
import {
    User, Mail, Phone, Calendar, GraduationCap, Briefcase,
    Camera, Send, MapPin, Database, Award, CheckCircle2,
    Globe, ShieldCheck, BookText, Fingerprint, Venus, Mars,
    UserCheck, Home, UserIcon, User2
} from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { baseUrl } from "../utils/baseUrl";
import { showToast } from "../utils/commonFunctions";

const Form = () => {
    const [isOtherCourse, setIsOtherCourse] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        studentName: "",
        fatherName: "",
        contactNo: "",
        email: "",
        jobTitle: "",
        address: "",
        gender: "",
        status: "FREE", // Default value
        batch: "2023-24",
        lastClass: "Matric (Bio Science)",
        course: "",
        profilePic: null // State for file
    });

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle Radio/Select specifically for Course
    const handleCourseChange = (courseValue) => {
        if (courseValue === "Other") {
            setIsOtherCourse(true);
            setData(prev => ({ ...prev, course: "" }));
        } else {
            setIsOtherCourse(false);
            setData(prev => ({ ...prev, course: courseValue }));
        }
    };

    // Handle Image Preview and State
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
            setData(prev => ({ ...prev, profilePic: file }));
        }
    };

    // Form Submission Logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(data)
        if (!data.studentName || !data.fatherName || !data.contactNo || !data.email || !data.address || !data.jobTitle) {
            showToast("Please fill in all required fields.", "error", "light");
            setLoading(false);
            return;
        }
        if (!data.profilePic) {
            showToast("Please upload a profile picture.", "error", "light");
            setLoading(false);
            return;
        }
        if (!data.course) {
            showToast("Please select your current course.", "error", "light");
            setLoading(false);
            return;
        }
        if (!data.gender || !data.status) {
            showToast("Please select your gender and professional status.", "error", "light");
            setLoading(false);
            return;
        }
        // Kyunke image upload karni hai, isliye FormData use karna zarori hai
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });

        try {
            const res = await axios.post(`${baseUrl}student/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            );
            showToast("Registration Successful!", "success", "light");
            console.log(res.data);
        } catch (err) {
            console.error(err);
            showToast(err.message || "Registration failed. Please try again.", "error", "light");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-lightBase min-h-screen font-sans selection:bg-primary selection:text-white">
            <Navbar />

            {/* 🔹 BACKGROUND ACCENTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#4F46E5]/30 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#7C3AED]/30 rounded-full blur-[100px]"></div>
            </div>

            <section className="pt-44 pb-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">

                    {/* 🔹 HEADER */}
                    <div className="text-center mb-12 space-y-4">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-xl border border-primary/20">
                            <BookText size={18} className="text-primary" />
                            <span className="text-xs font-black uppercase tracking-widest text-darkBase">Student Directory Portal</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-darkBase tracking-tight">
                            Build Your <span className="text-transparent bg-clip-text bg-main-gradient">Future</span> Profile.
                        </h2>
                        <p className="text-textSecondary text-lg font-bold max-w-2xl mx-auto italic">
                            Official registration for Noor Public School alumni. Enter your details to stay connected.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white border-2 border-white shadow-2xl rounded-[3rem] overflow-hidden">
                        <div className="p-8 md:p-16 space-y-12">

                            {/* 🔹 PERSONAL INFO GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name Field */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary group-focus-within:scale-110 transition-transform" />
                                        <input
                                            name="studentName"
                                            type="text"
                                            required
                                            placeholder="e.g Arsalan Nasir"
                                            className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-primary rounded-2xl outline-none font-black text-darkBase"
                                            onChange={handleChange}
                                            value={data.studentName}
                                        />
                                    </div>
                                </div>

                                {/* Father Name Field */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Father's Name</label>
                                    <div className="relative group">
                                        <User2 className="absolute left-5 top-1/2 -translate-y-1/2 text-violet group-focus-within:scale-110 transition-transform" />
                                        <input
                                            name="fatherName"
                                            type="text"
                                            required
                                            placeholder="e.g Ali Hassam"
                                            className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-violet rounded-2xl outline-none font-black text-darkBase"
                                            onChange={handleChange}
                                            value={data.fatherName}
                                        />
                                    </div>
                                </div>

                                {/* Contact Field */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Contact Number</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-orange group-focus-within:scale-110 transition-transform" />
                                        <input
                                            name="contactNo"
                                            type="text"
                                            required
                                            placeholder="+92 3XX XXXXXXX"
                                            className="w-full bg-blue-50/50 pl-14 pr-6 py-5 border-2 border-transparent focus:border-orange rounded-2xl outline-none font-black text-darkBase"
                                            onChange={handleChange}
                                            value={data.contactNo}
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-blue group-focus-within:scale-110 transition-transform" />
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="arsalan.nasir@example.com"
                                            className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-blue rounded-2xl outline-none font-black text-darkBase"
                                            onChange={handleChange}
                                            value={data.email}
                                        />
                                    </div>
                                </div>

                                {/* Job Title */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Job Title</label>
                                    <div className="relative group">
                                        <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-600 group-focus-within:scale-110 transition-transform" />
                                        <input
                                            name="jobTitle"
                                            type="text"
                                            placeholder="Software Engineer"
                                            className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-blue rounded-2xl outline-none font-black text-darkBase"
                                            onChange={handleChange}
                                            value={data.jobTitle}
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Address</label>
                                    <div className="relative group">
                                        <Home className="absolute left-5 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" />
                                        <input
                                            name="address"
                                            type="text"
                                            placeholder="Karachi, Pakistan"
                                            className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-blue rounded-2xl outline-none font-black text-darkBase"
                                            onChange={handleChange}
                                            value={data.address}
                                        />
                                    </div>
                                </div>

                                {/* GENDER SELECTION */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Select Gender</label>
                                    <div className="grid grid-cols-2 gap-4 h-[64px]">
                                        <label className="relative cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                                className="peer hidden"
                                                onChange={handleChange}
                                                checked={data.gender === "Male"}
                                            />
                                            <div className="flex items-center justify-center gap-2 h-full bg-slate-100 peer-checked:bg-primary peer-checked:text-white rounded-2xl font-black text-sm transition-all border-2 border-transparent peer-checked:border-primary">
                                                <Mars size={18} /> MALE
                                            </div>
                                        </label>
                                        <label className="relative cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                                className="peer hidden"
                                                onChange={handleChange}
                                                checked={data.gender === "Female"}
                                            />
                                            <div className="flex items-center justify-center gap-2 h-full bg-slate-100 peer-checked:bg-secondary peer-checked:text-white rounded-2xl font-black text-sm transition-all border-2 border-transparent peer-checked:border-secondary">
                                                <Venus size={18} /> FEMALE
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* STATUS SELECTION */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Professional Status</label>
                                    <div className="grid grid-cols-2 gap-4 h-[64px]">
                                        <label className="relative cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="FREE"
                                                className="peer hidden"
                                                onChange={handleChange}
                                                checked={data.status === "FREE"}
                                            />
                                            <div className="flex items-center justify-center gap-2 h-full bg-slate-100 peer-checked:bg-primary peer-checked:text-white rounded-2xl font-black text-sm transition-all border-2 border-transparent">
                                                <UserCheck size={18} /> FREE
                                            </div>
                                        </label>
                                        <label className="relative cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="WORKING"
                                                className="peer hidden"
                                                onChange={handleChange}
                                                checked={data.status === "WORKING"}
                                            />
                                            <div className="flex items-center justify-center gap-2 h-full bg-slate-100 peer-checked:bg-secondary peer-checked:text-white rounded-2xl font-black text-sm transition-all border-2 border-transparent">
                                                <Briefcase size={18} /> WORKING
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* 🔹 SCHOOL BACKGROUND */}
                            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-8 md:p-12 text-center space-y-8">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black text-darkBase uppercase tracking-tight">🏫 School Background</h4>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-primary uppercase">Passing Batch</label>
                                        <select
                                            name="batch"
                                            value={data.batch}
                                            onChange={handleChange}
                                            className="w-full p-4 rounded-xl border-2 border-primary/20 bg-white font-black text-darkBase outline-none focus:border-primary"
                                        >
                                            <option value="2023-24">2023-24</option>
                                            <option value="2024-25">2024-25</option>
                                            <option value="2025-26">2025-26</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-violet uppercase">Last Class</label>
                                        <select
                                            name="lastClass"
                                            value={data.lastClass}
                                            onChange={handleChange}
                                            className="w-full p-4 rounded-xl border-2 border-violet/20 bg-white font-black text-darkBase outline-none focus:border-violet"
                                        >
                                            <option>Matric (Bio Science)</option>
                                            <option>Matric (Computer Science)</option>
                                            <option>Intermediate</option>
                                            <option>Continuing Education</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-xs font-black text-darkBase uppercase">Current Course</p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {["Web Dev", "Graphic Designer", "MS Office", "Other"].map((course) => (
                                            <label key={course} className="cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="course_select"
                                                    className="hidden peer"
                                                    onChange={() => handleCourseChange(course)}
                                                    checked={isOtherCourse ? course === "Other" : data.course === course}
                                                />
                                                <div className="px-6 py-3 rounded-full bg-white border-2 border-slate-200 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary font-black text-xs uppercase transition-all shadow-sm">
                                                    {course}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                    {isOtherCourse && (
                                        <input
                                            name="course"
                                            type="text"
                                            placeholder="Specify your course..."
                                            className="w-full max-w-md mx-auto px-6 py-4 rounded-xl border-2 border-primary outline-none font-black text-darkBase"
                                            onChange={handleChange}
                                            value={data.course}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* 🔹 PHOTO UPLOAD */}
                            <div className="flex flex-col items-center gap-4">
                                <p className="text-xs font-black text-darkBase uppercase">Profile Picture</p>
                                <div className="relative group cursor-pointer">
                                    <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-tr from-primary/10 to-violet/10 border-4 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-primary transition-all">
                                        {previewImage ? (
                                            <img src={previewImage} className="w-full h-full object-cover" alt="Preview" />
                                        ) : (
                                            <Camera size={40} className="text-slate-300 group-hover:text-primary transition-colors" />
                                        )}
                                        <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-textSecondary uppercase italic">Max 2MB</span>
                            </div>

                            {/* 🔹 SUBMIT */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-8 bg-main-gradient rounded-3xl text-white font-black text-2xl uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group disabled:opacity-70"
                                >
                                    {loading ? "Registering..." : "REGISTER NOW"}
                                    {!loading && <Send size={28} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                                <div className="flex items-center justify-center gap-2 mt-6 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                                    <ShieldCheck size={16} /> Secure Student Directory System
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Form;