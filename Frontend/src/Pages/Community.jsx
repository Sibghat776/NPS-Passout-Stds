import React, { useState } from "react";
import {
    Search, ChevronDown, GraduationCap, Briefcase,
    Sparkles, BookOpen, Clock, Activity, SearchIcon,
    User2, Award, Zap
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useFetch from "../utils/commonFunctions";
import { baseUrl } from "../utils/baseUrl";
import { useEffect } from "react";

const Community = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("All Batches");
    const [selectedCourse, setSelectedCourse] = useState("All Courses");
    const [selectedDegree, setSelectedDegree] = useState("All Degrees");
    const [selectedStatus, setSelectedStatus] = useState("All Status");
    const handleClick = (id) => {
        console.log(id, "Student ID on Handle Click")
    }

    // ✅ Bug 1 & 2 Fix: useFetch se data, loading, error nikalo
    const { data, loading, error } = useFetch(`${baseUrl}student/getStudents`);

    // ✅ Actual students list — response structure ke hisaab se
    const students = data?.data || [];

    // ✅ Frontend filtering
    const filteredStudents = students.filter((student) => {
        const matchSearch =
            student.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.fatherName?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchBatch = selectedBatch === "All Batches" || student.batch === selectedBatch;
        const matchCourse = selectedCourse === "All Courses" || student.course === selectedCourse;
        const matchDegree = selectedDegree === "All Degrees" || student.lastClass === selectedDegree;
        const matchStatus = selectedStatus === "All Status" || student.status?.toLowerCase() === selectedStatus.toLowerCase();
        return matchSearch && matchBatch && matchCourse && matchDegree && matchStatus;
    });

    return (
        <div className="bg-[#F4F7FF] min-h-screen font-sans">
            <Navbar />

            {/* HERO */}
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

            {/* FILTERS */}
            <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                        {/* ✅ Search — onChange lagaya */}
                        <div className="lg:col-span-2 relative group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name, father name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-lightBase border-2 border-transparent rounded-2xl outline-none font-bold text-darkBase focus:border-primary/20 focus:bg-white transition-all"
                            />
                        </div>

                        {/* ✅ Batch — onChange lagaya */}
                        <div className="relative">
                            <select
                                value={selectedBatch}
                                onChange={(e) => setSelectedBatch(e.target.value)}
                                className="w-full pl-6 pr-10 py-4 bg-lightBase rounded-2xl font-bold text-darkBase outline-none appearance-none cursor-pointer hover:bg-slate-100"
                            >
                                <option>All Batches</option>
                                <option>2023-24</option>
                                <option>2024-25</option>
                                <option>2025-26</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                        </div>

                        {/* ✅ Course — onChange lagaya */}
                        <div className="relative">
                            <select
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                                className="w-full pl-6 pr-10 py-4 bg-lightBase rounded-2xl font-bold text-darkBase outline-none appearance-none cursor-pointer hover:bg-slate-100"
                            >
                                <option>All Courses</option>
                                <option>Web Dev</option>
                                <option>Graphic Designer</option>
                                <option>MS Office</option>
                                <option>Other</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                        </div>

                        <button className="bg-darkBase text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-lg shadow-primary/20 py-4">
                            <SearchIcon size={18} /> Search
                        </button>
                    </div>

                    {/* Secondary Filters */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-50">
                        <select
                            value={selectedDegree}
                            onChange={(e) => setSelectedDegree(e.target.value)}
                            className="px-6 py-2 bg-slate-50 rounded-xl text-[11px] font-black uppercase text-slate-500 outline-none border border-transparent focus:border-secondary"
                        >
                            <option>All Degrees</option>
                            <option>Matric (Bio Science)</option>
                            <option>Matric (Computer Science)</option>
                            <option>Intermediate</option>
                            <option>Continuing Education</option>
                        </select>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="px-6 py-2 bg-slate-50 rounded-xl text-[11px] font-black uppercase text-slate-500 outline-none border border-transparent focus:border-accent"
                        >
                            <option>All Status</option>
                            <option>WORKING</option>
                            <option>FREE</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* GRID */}
            <section className="py-20 px-6 max-w-7xl mx-auto">

                {/* ✅ Loading state */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                )}

                {/* ✅ Error state */}
                {error && (
                    <div className="text-center py-20 text-red-500 font-black">
                        {error}
                    </div>
                )}

                {/* ✅ Empty state */}
                {!loading && !error && filteredStudents.length === 0 && (
                    <div className="text-center py-20 text-slate-400 font-black text-xl uppercase">
                        No students found.
                    </div>
                )}

                {/* ✅ Bug 3 Fix: index use karo _id % 2 ki jagah */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {!loading && !error && filteredStudents.map((student, index) => (
                        <div key={student._id} className="group bg-white rounded-[3rem] p-8 border border-slate-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center">

                            {/* ✅ index use kiya */}
                            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-primary to-cyan-400' : 'from-secondary to-pink-500'}`}></div>

                            {/* Status Badge */}
                            <div className={`absolute top-6 right-8 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${student.status === 'WORKING' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'}`}>
                                ● {student.status}
                            </div>

                            {/* Profile Image */}
                            <div className="w-28 h-28 rounded-[2.5rem] p-1.5 border-4 border-slate-200 mb-6 mt-4 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl shadow-slate-200">
                                <img src={student.profilePic} alt={student.studentName} className="w-full h-full object-cover rounded-[2rem]" />
                            </div>

                            <div className="space-y-1 mb-6">
                                <h3 className="text-2xl font-black text-darkBase tracking-tight">{student.studentName}</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                    <User2 size={12} /> S/O: {student.fatherName}
                                </p>
                            </div>

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
                                    <span className="text-[10px] font-black text-darkBase uppercase leading-none">{student.jobTitle || 'N/A'}</span>
                                </div>
                                <div className="bg-lightBase p-3 rounded-2xl flex flex-col items-center gap-1">
                                    <Activity size={14} className="text-violet" />
                                    {/* ✅ _id ke last 4 chars use karo ID ke liye */}
                                    <span className="text-[10px] font-black text-darkBase uppercase leading-none">ID: #{student._id.slice(-5)}</span>
                                </div>
                            </div>

                            <button onClick={() => handleClick(student._id)} className="w-full py-4 bg-darkBase text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:bg-main-gradient transition-all duration-300 shadow-lg active:scale-95">
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