import React from 'react';
import { useSelector } from 'react-redux';
import {
    Users, GraduationCap, Briefcase, Zap,
    ArrowUpRight, ArrowDownRight, Activity,
    TrendingUp, Calendar, Bell, Search, Filter
} from 'lucide-react';

const Overview = () => {
    const stats = useSelector((state) => state.admin?.stats) || {
        totalStudents: "1,284",
        alumni: "856",
        placements: "92%",
        activeNow: "42"
    };

    const cards = [
        {
            label: "Total Students",
            value: stats.totalStudents,
            trend: "+12%",
            up: true,
            icon: <Users size={22} />,
            gradient: "from-primary/20 to-primary/5",
            iconColor: "text-primary",
            border: "border-primary/20"
        },
        {
            label: "Verified Alumni",
            value: stats.alumni,
            trend: "+5.4%",
            up: true,
            icon: <GraduationCap size={22} />,
            gradient: "from-violet/20 to-violet/5",
            iconColor: "text-violet",
            border: "border-violet/20"
        },
        {
            label: "Placement Rate",
            value: stats.placements,
            trend: "-2%",
            up: false,
            icon: <Briefcase size={22} />,
            gradient: "from-secondary/20 to-secondary/5",
            iconColor: "text-secondary",
            border: "border-secondary/20"
        },
        {
            label: "Active Session",
            value: stats.activeNow,
            trend: "Live",
            up: true,
            icon: <Activity size={22} />,
            gradient: "from-orange/20 to-orange/5",
            iconColor: "text-orange",
            border: "border-orange/20"
        },
    ];

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">

            {/* --- TOP NAV / WELCOME --- */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/10 backdrop-blur-md">
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        Analytics <span className="text-primary italic">Studio.</span>
                    </h1>
                    <p className="text-slate-400 text-sm font-medium mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                        System is performing 15% better than last month.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search metrics..."
                            className="bg-darkBase border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-primary/50 transition-all w-64"
                        />
                    </div>
                    <button className="p-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition-all">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* --- STATS GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, i) => (
                    <div key={i} className={`group relative bg-gradient-to-br ${card.gradient} ${card.border} border p-7 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 overflow-hidden`}>
                        <div className="flex justify-between items-start mb-6">
                            <div className={`p-4 rounded-2xl bg-darkBase ${card.iconColor} shadow-inner`}>
                                {card.icon}
                            </div>
                            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black border ${card.up ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
                                {card.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                {card.trend}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{card.label}</p>
                            <h3 className="text-4xl font-black text-white tracking-tighter leading-none">{card.value}</h3>
                        </div>

                        {/* Background Decor */}
                        <div className={`absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:rotate-12 transition-all duration-700 text-white`}>
                            {React.cloneElement(card.icon, { size: 140 })}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MIDDLE CONTENT --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Chart Area */}
                <div className="lg:col-span-8 bg-darkBase border border-white/10 rounded-[3rem] p-8 md:p-10 relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-12 relative z-10">
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Growth <span className="text-secondary">Dynamics</span></h3>
                            <p className="text-slate-500 text-xs font-bold tracking-widest uppercase mt-1">Student Enrollment Velocity</p>
                        </div>
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                            {['Week', 'Month', 'Year'].map((t) => (
                                <button key={t} className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${t === 'Month' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-end gap-3 md:gap-5 h-64 relative z-10">
                        {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 80, 95].map((h, i) => (
                            <div key={i} className="flex-1 group/bar relative h-full flex flex-col justify-end">
                                <div
                                    style={{ height: `${h}%` }}
                                    className="w-full bg-gradient-to-t from-primary to-secondary rounded-full opacity-20 group-hover/bar:opacity-100 group-hover/bar:scale-x-110 transition-all duration-500 cursor-crosshair"
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-darkBase text-[10px] font-black px-2 py-1 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-all translate-y-2 group-hover/bar:translate-y-0 shadow-xl">
                                        {h}k
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </div>

                {/* Alerts Area */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-sm font-black text-white uppercase tracking-[0.2em]">Live Pulse</h4>
                            <div className="px-3 py-1 bg-orange/10 border border-orange/20 rounded-full">
                                <span className="text-[10px] font-black text-orange uppercase tracking-tighter">Security</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { text: "Alumni DB synced", time: "Just Now", color: "bg-primary" },
                                { text: "New Admission", time: "12m ago", color: "bg-secondary" },
                                { text: "Report Exported", time: "1h ago", color: "bg-violet" },
                            ].map((alert, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform">
                                    <div className={`w-2 h-2 rounded-full ${alert.color} shadow-[0_0_15px_rgba(0,0,0,0.5)] shadow-current`}></div>
                                    <div>
                                        <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{alert.text}</p>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{alert.time}</p>
                                    </div>
                                    <ArrowUpRight className="ml-auto text-slate-600 group-hover:text-white transition-colors" size={16} />
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 w-full py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
                            System Logs
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Overview;