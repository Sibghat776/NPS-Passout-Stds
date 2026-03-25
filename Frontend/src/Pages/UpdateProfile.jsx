import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    User, Mail, Phone, Calendar, BookOpen, MapPin,
    Award, GraduationCap, Briefcase, Camera, Check,
    ChevronLeft, Save, AlertCircle
} from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import useFetch from '../utils/commonFunctions';
import { baseUrl } from '../utils/baseUrl';
import axios from 'axios';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    // Initial State from LocalStorage
    const [formData, setFormData] = useState({
        studentName: '', fatherName: '', contactNo: '',
        email: '', jobTitle: '', address: '',
        gender: '', status: '', batch: '',
        course: '', lastClass: '', profilePic: null
    });

    const studentId = JSON.parse(localStorage.getItem("student"));
    useEffect(() => {
        const fetchStudent = async () => {
            if (!studentId) {
                navigate("/form")
            } else {
                const res = await axios.get(`${baseUrl}student/getStudent/${studentId}`)
                console.log(res?.data?.data)
                const student = res?.data?.data
                setPreviewImage(student.profilePic);
                setFormData({ ...student });
                return student
            }
        }
        fetchStudent()
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
            setFormData(prev => ({ ...prev, profilePic: file })); // Setup for FormData API
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // ✅ FormData banao — image ke liye zarori
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === "profilePic" && typeof formData.profilePic === "string") {
                    // ✅ Agar image change nahi ki (string URL hai) toh skip karo
                    return;
                }
                if (formData[key] !== null && formData[key] !== undefined) {
                    data.append(key, formData[key]);
                }
            });

            const res = await axios.put(
                `${baseUrl}student/updateStudent/${studentId}`,
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            // ✅ Sirf _id localStorage mein — poora object nahi
            localStorage.setItem("student", JSON.stringify(studentId));

            setLoading(false);
            navigate("/profile");

        } catch (error) {
            setLoading(false);
            console.error(error?.response?.data?.message || error.message);
        }
    };
      

    // --- Sub Components (Single File Architecture) ---

    const InputField = ({ icon: Icon, label, name, type = "text", placeholder, required = false, ...props }) => (
        <div className="group space-y-2">
            <label className="text-[11px] font-black text-indigo-400 uppercase tracking-[1.5px] ml-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative flex items-center">
                <div className="absolute left-4 text-gray-400 group-focus-within:text-indigo-600 group-focus-within:scale-110 transition-all duration-300">
                    <Icon size={18} />
                </div>
                <input
                    type={type}
                    name={name}
                    value={formData[name] || ''}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={required}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border-2 border-transparent focus:border-indigo-600 rounded-2xl outline-none font-bold text-gray-800 transition-all placeholder:text-gray-400 placeholder:font-medium"
                    {...props}
                />
            </div>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen bg-[#F8FAFC] font-sans">
            <Navbar />

            <main className="flex-grow pt-28 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Navigation and Title */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                        <button
                            onClick={() => navigate("/profile")}
                            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors"
                        >
                            <ChevronLeft size={16} /> Back to Profile
                        </button>
                        <div className="text-center md:text-right">
                            <h1 className="text-4xl font-black text-blue-950 tracking-tight italic">
                                Update Academic File
                            </h1>
                            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mt-1">
                                Noor Public School Alumni Directorate
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.05)] border border-gray-100 overflow-hidden">

                        {/* 🖼️ Elite Banner & Profile Pic Shift */}
                        <div className="h-32 bg-gradient-to-r from-blue-950 to-indigo-900 relative">
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
                                <div className="relative group cursor-pointer">
                                    <div className="w-28 h-28 rounded-3xl overflow-hidden border-[5px] border-white shadow-xl bg-white rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                        <img
                                            src={previewImage || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop"}
                                            alt="Profile Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <label className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2.5 rounded-xl border-4 border-white shadow-lg cursor-pointer hover:bg-indigo-700 transition-colors">
                                        <Camera size={16} />
                                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 pt-20 md:pt-16 space-y-12">

                            {/* Section 1: Personal Profile */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                    <User className="text-indigo-600" size={20} />
                                    <h2 className="text-lg font-black text-blue-950 uppercase tracking-wider">Identity Records</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField icon={User} label="Student Full Name" name="studentName" required />
                                    <InputField icon={User} label="Father's Designation" name="fatherName" required />
                                    <InputField icon={Mail} label="Official Email" name="email" type="email" required />
                                    <InputField icon={Phone} label="Contact Network" name="contactNo" required />
                                </div>
                            </div>

                            {/* Section 2: Educational Context */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                                    <GraduationCap className="text-indigo-600" size={20} />
                                    <h2 className="text-lg font-black text-blue-950 uppercase tracking-wider">Educational Context</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField icon={MapPin} label="Residential Address" name="address" required />

                                    <div className="group space-y-2">
                                        <label className="text-[11px] font-black text-indigo-400 uppercase tracking-[1.5px] ml-1">Identity Gender</label>
                                        <div className="grid grid-cols-2 gap-4 h-[56px]">
                                            {['Male', 'Female'].map((gen) => (
                                                <label key={gen} className="relative cursor-pointer">
                                                    <input
                                                        type="radio" name="gender" value={gen} checked={formData.gender === gen}
                                                        onChange={handleChange} className="peer hidden"
                                                    />
                                                    <div className="flex items-center justify-center h-full bg-gray-50 peer-checked:bg-indigo-600 peer-checked:text-white rounded-2xl font-bold text-sm tracking-wide text-gray-700 transition-all border-2 border-transparent peer-checked:shadow-lg peer-checked:shadow-indigo-100">
                                                        {gen === 'Male' ? 'MALE' : 'FEMALE'}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <InputField icon={Briefcase} label="Professional Job Title" name="jobTitle" />
                                    <InputField icon={Award} label="Last Class" name="lastClass" required />
                                </div>
                            </div>

                            {/* Section 3: Status Triggers */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-indigo-400 uppercase tracking-[1.5px] ml-1">Career Trajectory</label>
                                    <div className="grid grid-cols-2 gap-3 h-[52px]">
                                        {['FREE', 'WORKING'].map((st) => (
                                            <label key={st} className="relative cursor-pointer">
                                                <input
                                                    type="radio" name="status" value={st} checked={formData.status === st}
                                                    onChange={handleChange} className="peer hidden"
                                                />
                                                <div className="flex items-center justify-center h-full bg-white peer-checked:bg-indigo-600 peer-checked:text-white rounded-xl font-bold text-xs tracking-wider text-gray-600 transition-all border border-gray-200 peer-checked:border-indigo-600 shadow-sm">
                                                    {st}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-indigo-400 uppercase tracking-[1.5px] ml-1">Academic Batch</label>
                                    <select
                                        name="batch" value={formData.batch || ''} onChange={handleChange}
                                        className="w-full h-[52px] bg-white border border-gray-200 rounded-xl px-4 font-bold text-gray-700 outline-none focus:border-indigo-600 shadow-sm"
                                    >
                                        <option value="2023-24">Batch 2023-24</option>
                                        <option value="2024-25">Batch 2024-25</option>
                                        <option value="2025-26">Batch 2025-26</option>
                                    </select>
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                                    <Check size={14} /> Encrypted Directory Transmission
                                </span>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-blue-950 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[3px] hover:bg-indigo-900 transition-all shadow-xl shadow-indigo-100 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Synchronizing File..." : "Commit Changes"}
                                    {!loading && <Save size={18} className="group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default UpdateProfile;