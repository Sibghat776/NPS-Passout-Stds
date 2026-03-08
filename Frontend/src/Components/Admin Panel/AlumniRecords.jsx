import React, { useState } from 'react';
import {
    GraduationCap, Search, Filter, Download,
    MoreVertical, CheckCircle2, Clock, ExternalLink,
    Mail, Briefcase, Calendar
} from 'lucide-react';

const AlumniRecords = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Mock Data - Aap ise Redux ya API se replace kar sakte hain
    const alumniData = [
        { id: 1, name: "Arsalan Ahmed", year: "2022", company: "Google", role: "Software Engineer", status: "Verified", email: "arsalan@example.com" },
        { id: 2, name: "Sara Khan", year: "2021", company: "Microsoft", role: "Product Manager", status: "Verified", email: "sara.k@example.com" },
        { id: 3, name: "Zainab Malik", year: "2023", company: "Interim", role: "Junior Developer", status: "Pending", email: "zainab@example.com" },
        { id: 4, name: "Hamza Sheikh", year: "2020", company: "Amazon", role: "Cloud Architect", status: "Verified", email: "hamza.s@example.com" },
        { id: 5, name: "Dua Fatima", year: "2023", company: "TCS", role: "UI Designer", status: "Pending", email: "dua.f@example.com" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">

            {/* --- HEADER SECTION --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                        Legacy <span className="text-secondary italic">Directory.</span>
                    </h2>
                    <p className="text-textSecondary text-sm font-medium mt-1">
                        Tracking and managing {alumniData.length} global alumni records.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white text-xs font-black uppercase tracking-widest transition-all">
                        <Download size={16} className="text-primary" />
                        Export CSV
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-main-gradient rounded-2xl text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/25 hover:scale-105 transition-all active:scale-95">
                        <GraduationCap size={16} />
                        Add Alumnus
                    </button>
                </div>
            </div>

            {/* --- FILTERS BAR --- */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl">
                <div className="lg:col-span-2 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, company or year..."
                        className="w-full bg-[#0F172A]/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <select className="w-full bg-[#0F172A]/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-slate-400 focus:outline-none focus:border-primary/50 appearance-none">
                        <option>Batch Year</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select>
                </div>
                <div className="relative">
                    <CheckCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <select className="w-full bg-[#0F172A]/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-slate-400 focus:outline-none focus:border-primary/50 appearance-none">
                        <option>Status</option>
                        <option>Verified</option>
                        <option>Pending</option>
                    </select>
                </div>
            </div>

            {/* --- DATA TABLE --- */}
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/[0.02]">
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Alumnus</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Batch</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Career Path</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Verification</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {alumniData.map((person) => (
                                <tr key={person.id} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                                                <span className="text-white font-bold text-sm">{person.name[0]}</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{person.name}</p>
                                                <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1 font-bold uppercase tracking-tighter">
                                                    <Mail size={10} /> {person.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2 text-textSecondary font-black text-xs">
                                            <Calendar size={14} className="text-violet" />
                                            Class of {person.year}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="text-xs font-bold text-white flex items-center gap-2">
                                                <Briefcase size={12} className="text-secondary" /> {person.role}
                                            </p>
                                            <p className="text-[10px] text-slate-500 mt-1 uppercase font-black">@ {person.company}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${person.status === 'Verified'
                                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
                                            : 'bg-orange/10 border-orange/20 text-orange'
                                            }`}>
                                            {person.status === 'Verified' ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                                            {person.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all">
                                                <ExternalLink size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all">
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* --- PAGINATION --- */}
                <div className="p-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Showing 1 to 5 of 150 Records</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-white hover:bg-white/10 transition-all uppercase">Prev</button>
                        <button className="px-4 py-2 bg-primary border border-primary/20 rounded-xl text-[10px] font-bold text-white shadow-lg shadow-primary/20 uppercase">Next</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AlumniRecords;