import React from 'react';
import {
    LayoutDashboard, Users, GraduationCap,
    Settings, LogOut, FileText, Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Overview", link: "/admin/overview" },
        { icon: <Users size={20} />, label: "Students List", link: "/admin/students" },
        { icon: <GraduationCap size={20} />, label: "Alumni Records", link: "/admin/alumni" },
        { icon: <FileText size={20} />, label: "Reports", link: "/admin/reports" },
        { icon: <Bell size={20} />, label: "Notifications", link: "/admin/notifications" },
        { icon: <Settings size={20} />, label: "Admin Settings", link: "/admin/settings" },
    ];
    const navigate = useNavigate()
    const handleClick = (link) => {
        console.log(link)
        navigate(link)
    }
    return (
        <div className="fixed left-0 top-0 h-screen w-72 bg-darkBase border-r border-white/10 flex flex-col p-6 z-50">
            {/* Logo Section */}
            <div className="flex items-center gap-3 px-2 mb-10">
                <div className="w-10 h-10 bg-main-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                    <h1 className="text-white font-black text-lg leading-tight uppercase tracking-tighter">Noor Public</h1>
                    <p className="text-primary text-[10px] font-black tracking-[0.2em] uppercase">Admin Suite</p>
                </div>
            </div>

            {/* Navigation */}
            {/* <nav className="flex-1 space-y-2">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-bold text-sm transition-all duration-300 group
              ${item.active
                                ? 'bg-main-gradient text-white shadow-lg shadow-primary/20'
                                : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                        onClick={() => handleClick(item.link)}
                    >
                        <span className={`${item.active ? 'text-white' : 'group-hover:text-primary transition-colors'}`}>
                            {item.icon}
                        </span>
                        {item.label}
                    </button>
                ))}
            </nav> */}

            <nav className="flex-1 space-y-2">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.link; // Dynamic Check
                    return (
                        <NavLink
                            key={index}
                            to={item.link}
                            className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-bold text-sm transition-all duration-300 group
                                ${isActive
                                    ? 'bg-main-gradient text-white shadow-lg shadow-primary/20'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                        >
                            <span className={`${isActive ? 'text-white' : 'group-hover:text-primary transition-colors'}`}>
                                {item.icon}
                            </span>
                            {item.label}
                        </NavLink>
                    );
                })}
            </nav>

            {/* Logout */}
            <div className="pt-6 border-t border-white/5">
                <button className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-black text-sm text-orange hover:bg-orange/10 transition-all uppercase tracking-widest">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;