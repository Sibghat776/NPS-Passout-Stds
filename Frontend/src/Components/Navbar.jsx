import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import {
    GraduationCap,
    Menu,
    X,
    Home,
    Info,
    Users,
    Phone,
    ChevronRight
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Scroll effect for Navbar transparency
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/", icon: <Home size={18} />, color: "hover:text-secondary" },
        { name: "About", path: "/about", icon: <Info size={18} />, color: "hover:text-accent" },
        { name: "Community", path: "/community", icon: <Users size={18} />, color: "hover:text-violet" },
        { name: "Contact", path: "/contact", icon: <Phone size={18} />, color: "hover:text-orange" },
    ];

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[rgba(29,20,73,0.5)] backdrop-blur-xl shadow-2xl py-3 border-b border-white/5"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* 🔹 LOGO SECTION */}
                <Link to="/" className="flex items-center gap-4 group">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                        <div className="relative bg-darkBase p-1.5 rounded-2xl border border-white/10 shadow-xl">
                            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-xl font-black text-white tracking-tighter leading-none">
                            NPS <span className="text-secondary">ALUMNI</span>
                        </h1>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-textSecondary font-bold mt-1">
                            Legacy of Excellence
                        </p>
                    </div>
                </Link>

                {/* 🔹 DESKTOP NAVIGATION */}
                <nav className="hidden md:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-2xl backdrop-blur-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative px-5 py-2 flex items-center gap-2 text-sm font-semibold transition-all duration-300 rounded-xl group ${location.pathname === link.path
                                ? "text-white bg-white/10 shadow-inner"
                                : "text-textSecondary hover:bg-white/5"
                                } ${link.color}`}
                        >
                            {link.icon}
                            {link.name}
                            {location.pathname === link.path && (
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* 🔹 ACTION BUTTON */}
                <div className="hidden md:block">
                    <button className="relative group overflow-hidden bg-main-gradient px-7 py-2.5 rounded-xl font-bold text-white shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)] hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                        <span className="relative z-10 flex items-center gap-2">
                            Join Network <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>

                {isOpen && (
                    <div
                        className="fixed h-screen inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden transition-opacity duration-500"
                        onClick={() => setIsOpen(false)} // Overlay pe click karne se menu band ho jaye
                    />
                )}
                {/* 🔹 MOBILE TOGGLE */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {/* 🔹 MOBILE MENU (Enhanced) */}
            <div
                className={`fixed inset-x-0 top-[70px] p-6 md:hidden transition-all duration-500 transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="bg-darkBase/95 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 shadow-2xl space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between p-4 rounded-2xl bg-white/5 text-textPrimary font-medium border border-transparent hover:border-white/10 transition"
                        >
                            <div className="flex items-center gap-3">
                                {link.icon} {link.name}
                            </div>
                            <ChevronRight size={16} className="text-textSecondary" />
                        </Link>
                    ))}
                    <button className="w-full bg-main-gradient py-4 rounded-2xl font-bold text-white flex justify-center items-center gap-2 shadow-lg">
                        <GraduationCap size={20} /> Join Now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

