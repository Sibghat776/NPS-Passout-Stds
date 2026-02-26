import React, { useState } from "react";
import {
    Search,
    Filter,
    GraduationCap,
    Briefcase,
    SearchCode,
    ChevronDown,
    Users,
    Sparkles
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Community = () => {
    // Search aur Filter states
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("All Batches");
    const [selectedGroup, setSelectedGroup] = useState("All Groups");

    // Dummy Data (Aap isse DB/API data se replace karenge)
    const alumniList = [
        { id: 1, name: "Arsalan Nasir", batch: "2024-25", group: "Computer Science", role: "Full Stack Developer", img: "https://i.pravatar.cc/150?u=1" },
        { id: 2, name: "Mahira Khan", batch: "2025-26", group: "Bio Science", role: "Medical Student", img: "https://i.pravatar.cc/150?u=2" },
        { id: 3, name: "Zayan Ahmed", batch: "2024-25", group: "General Group", role: "Business Associate", img: "https://i.pravatar.cc/150?u=3" },
        { id: 4, name: "Eshal Noor", batch: "2023-24", group: "Computer Science", role: "UI Designer", img: "https://i.pravatar.cc/150?u=4" },
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-sans">
            <Navbar />

            {/* 🔹 HERO HEADER */}
            <div className="pt-40 pb-16 px-6 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10">
                        <Sparkles size={14} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">NPS Alumni Directory</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-darkBase tracking-tight">
                        Our Global <span className="text-transparent bg-clip-text bg-main-gradient">Community</span>
                    </h1>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto">
                        Connect with fellow graduates, filter through batches, and explore the professional legacy of Noor Public School.
                    </p>
                </div>
            </div>

            <section className="py-12 px-6 max-w-7xl mx-auto">

                {/* 🔹 FILTER OPTIONS BAR */}
                <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 mb-12 flex flex-col lg:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-1 relative group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name or role..."
                            className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-2xl outline-none font-bold text-darkBase focus:ring-2 focus:ring-primary/20 transition-all"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Batch Filter */}
                    <div className="relative min-w-[180px]">
                        <select
                            className="w-full appearance-none px-6 py-4 bg-slate-50 rounded-2xl font-bold text-darkBase outline-none cursor-pointer hover:bg-slate-100 transition-colors"
                            onChange={(e) => setSelectedBatch(e.target.value)}
                        >
                            <option>All Batches</option>
                            <option>2025-26</option>
                            <option>2024-25</option>
                            <option>2023-24</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>

                    {/* Group Filter */}
                    <div className="relative min-w-[200px]">
                        <select
                            className="w-full appearance-none px-6 py-4 bg-slate-50 rounded-2xl font-bold text-darkBase outline-none cursor-pointer hover:bg-slate-100 transition-colors"
                            onChange={(e) => setSelectedGroup(e.target.value)}
                        >
                            <option>All Groups</option>
                            <option>Computer Science</option>
                            <option>Bio Science</option>
                            <option>General Group</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                </div>

                {/* 🔹 ALUMNI GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {alumniList.map((student) => (
                        <div key={student.id} className="group bg-white rounded-[2.5rem] p-6 border border-slate-100 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden">
                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10 space-y-6">
                                {/* Profile Pic */}
                                <div className="w-20 h-20 rounded-3xl overflow-hidden border-4 border-slate-50 group-hover:rotate-3 transition-transform">
                                    <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Info */}
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-darkBase tracking-tight">{student.name}</h3>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{student.role}</p>
                                </div>

                                <div className="pt-4 border-t border-slate-50 space-y-3">
                                    <div className="flex items-center gap-3 text-slate-500">
                                        <GraduationCap size={16} className="text-secondary" />
                                        <span className="text-xs font-bold">{student.batch}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-500">
                                        <Users size={16} className="text-accent" />
                                        <span className="text-xs font-bold">{student.group}</span>
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-lightBase text-darkBase font-black text-[10px] uppercase tracking-[0.2em] rounded-xl group-hover:bg-darkBase group-hover:text-white transition-all duration-300">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🔹 EMPTY STATE (Jab results na milein) */}
                {alumniList.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-black text-darkBase uppercase">No Alumni Found</h3>
                        <p className="text-slate-400 font-bold text-sm mt-2 uppercase tracking-widest">Try adjusting your filters</p>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default Community;