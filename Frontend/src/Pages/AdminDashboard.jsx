import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/sideBar";
import { User, ChevronDown, LayoutGrid } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="flex min-h-screen bg-darkBase font-sans selection:bg-primary selection:text-white">
            {/* 1. Background Decor (Subtle Glows) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full"></div>
            </div>

            {/* 2. Sidebar (Fixed) */}
            <Sidebar />

            {/* 3. Main Content Area */}
            <div className="ml-72 flex-1 flex flex-col relative z-10">

                {/* Top Header / Navbar Area */}
                <header className="h-20 px-8 flex items-center justify-between border-b border-white/5 backdrop-blur-md sticky top-0 z-40 bg-darkBase/50">
                    <div className="flex items-center gap-2 text-textSecondary">
                        <LayoutGrid size={18} />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Dashboard / Home</span>
                    </div>

                    {/* Admin Profile Mini */}
                    <div className="flex items-center gap-4 bg-white/5 p-1.5 pr-4 rounded-full border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                        <div className="w-8 h-8 rounded-full bg-main-gradient p-[1px]">
                            <div className="w-full h-full rounded-full bg-darkBase flex items-center justify-center overflow-hidden">
                                <User size={16} className="text-white" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-black text-white leading-none uppercase tracking-tighter">Super Admin</span>
                            <span className="text-[9px] font-bold text-primary italic leading-tight">Verified Access</span>
                        </div>
                        <ChevronDown size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                </header>

                <main className="p-8 lg:p-12">

                    {/* Dynamic Page Content (Outlet) */}
                    <div className="w-full animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <Outlet />
                    </div>
                </main>

                {/* Footer Footer (Optional) */}
                <footer className="mt-auto p-8 border-t border-white/5 text-center">
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">
                        © 2026 Noor Public • <span className="text-primary">Intelligence Powered</span>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default AdminDashboard;