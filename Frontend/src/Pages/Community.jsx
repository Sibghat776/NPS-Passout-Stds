import React, { useState } from "react";
import {
    Search, ChevronDown, GraduationCap, Briefcase,
    Sparkles, BookOpen, Clock, Activity, SearchIcon,
    User2, Award, Zap
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Community = () => {
    // Filter States
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("All Batches");
    const [selectedCourse, setSelectedCourse] = useState("All Courses");
    const [selectedDegree, setSelectedDegree] = useState("All Degrees");
    const [selectedStatus, setSelectedStatus] = useState("All Status");

    // Sample Data with more details
    const alumniList = [
        {
            id: 1, name: "Arsalan Nasir", father: "Ali Hassam", batch: "2024-25",
            course: "Web Development", degree: "Intermediate", status: "Working",
            img: "https://i.pravatar.cc/150?u=1", color: "border-primary"
        },
        {
            id: 2, name: "Mahira Khan", father: "Shahzad Khan", batch: "2025-26",
            course: "Graphics Design", degree: "Bachelors", status: "Free",
            img: "https://i.pravatar.cc/150?u=2", color: "border-secondary"
        },
        {
            id: 3, name: "Zayan Ahmed", father: "Ahmed Ali", batch: "2023-24",
            course: "Digital Marketing", degree: "Matric", status: "Working",
            img: "https://i.pravatar.cc/150?u=3", color: "border-accent"
        },
    ];

    return (
        <div className="bg-[#F4F7FF] min-h-screen font-sans">
            <Navbar />

            {/* 🔹 HERO SECTION (Colorful & Modern) */}
            <header className="pt-40 pb-20 px-6 relative overflow-hidden bg-darkBase">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[100px] -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-20 blur-[100px] -ml-48 -mb-48"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Alumni Network Hub</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                        Meet Our <span className="text-transparent bg-clip-text bg-main-gradient">Rising Stars</span>
                    </h1>
                </div>
            </header>

            {/* 🔹 ADVANCED FILTER CONTROL CENTER */}
            <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                        {/* Search Input */}
                        <div className="lg:col-span-2 relative group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name, father name..."
                                className="w-full pl-14 pr-6 py-4 bg-lightBase border-2 border-transparent rounded-2xl outline-none font-bold text-darkBase focus:border-primary/20 focus:bg-white transition-all"
                            />
                        </div>

                        {/* Batch Dropdown */}
                        <div className="relative">
                            <select className="w-full pl-6 pr-10 py-4 bg-lightBase rounded-2xl font-bold text-darkBase outline-none appearance-none cursor-pointer hover:bg-slate-100">
                                <option>All Batches</option>
                                <option>2023-24</option>
                                <option>2024-25</option>
                                <option>2025-26</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                        </div>

                        {/* Courses Dropdown */}
                        <div className="relative">
                            <select className="w-full pl-6 pr-10 py-4 bg-lightBase rounded-2xl font-bold text-darkBase outline-none appearance-none cursor-pointer hover:bg-slate-100">
                                <option>All Courses</option>
                                <option>Web Development</option>
                                <option>Graphics Design</option>
                                <option>Video Editing</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                        </div>

                        {/* Search Button (Trigger) */}
                        <button className="bg-darkBase text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-lg shadow-primary/20 py-4">
                            <SearchIcon size={18} /> Search
                        </button>
                    </div>

                    {/* Secondary Filters Row */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-50">
                        <select className="px-6 py-2 bg-slate-50 rounded-xl text-[11px] font-black uppercase text-slate-500 outline-none border border-transparent focus:border-secondary">
                            <option>All Degrees</option>
                            <option>Matric</option>
                            <option>Intermediate</option>
                            <option>Bachelors</option>
                        </select>
                        <select className="px-6 py-2 bg-slate-50 rounded-xl text-[11px] font-black uppercase text-slate-500 outline-none border border-transparent focus:border-accent">
                            <option>All Status</option>
                            <option>Working</option>
                            <option>Free</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* 🔹 ALUMNI VIBRANT GRID */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alumniList.map((student) => (
                        <div key={student.id} className="group bg-white rounded-[3rem] p-8 border border-slate-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center">

                            {/* Color Top Bar */}
                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${student.id % 2 === 0 ? 'from-primary to-cyan-400' : 'from-secondary to-pink-500'}`}></div>

                            {/* Status Badge */}
                            <div className={`absolute top-6 right-8 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${student.status === 'Working' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'}`}>
                                ● {student.status}
                            </div>

                            {/* Profile Image with Ring */}
                            <div className={`w-28 h-28 rounded-[2.5rem] p-1.5 border-4 ${student.color} mb-6 mt-4 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl shadow-slate-200`}>
                                <img src={student.img} alt={student.name} className="w-full h-full object-cover rounded-[2rem]" />
                            </div>

                            <div className="space-y-1 mb-6">
                                <h3 className="text-2xl font-black text-darkBase tracking-tight">{student.name}</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                    <User2 size={12} /> S/O: {student.father}
                                </p>
                            </div>

                            {/* Data Points (Icon Based) */}
                            <div className="w-full grid grid-cols-2 gap-3 mb-8">
                                <div className="bg-lightBase p-3 rounded-2xl flex flex-col items-center gap-1">
                                    <BookOpen size={14} className="text-primary" />
                                    <span className="text-[10px] font-black text-darkBase uppercase leading-none">{student.course}</span>
                                </div>
                                <div className="bg-lightBase p-3 rounded-2xl flex flex-col items-center gap-1">
                                    <Clock size={14} className="text-secondary" />
                                    <span className="text-[10px] font-black text-darkBase uppercase leading-none">{student.batch}</span>
                                </div>
                                <div className="bg-lightBase p-3 rounded-2xl flex flex-col items-center gap-1">
                                    <Award size={14} className="text-accent" />
                                    <span className="text-[10px] font-black text-darkBase uppercase leading-none">{student.degree}</span>
                                </div>
                                <div className="bg-lightBase p-3 rounded-2xl flex flex-col items-center gap-1">
                                    <Activity size={14} className="text-violet" />
                                    <span className="text-[10px] font-black text-darkBase uppercase leading-none">ID: #00{student.id}</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-darkBase text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:bg-main-gradient transition-all duration-300 shadow-lg active:scale-95">
                                View Full Profile
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Community;