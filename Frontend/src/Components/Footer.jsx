import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    ArrowUpRight,
    Heart,
    Youtube,
    Fingerprint,
    User,
    ShieldCheck,
    Lock
} from "lucide-react";
import { href, Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useRef } from "react";
import { showToast } from "../utils/commonFunctions";
import reducer, { loginRequest, loginSuccess } from "../Redux/Slice/AdminDataSlice";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [open, setOpen] = React.useState(false);
    const adminUsername = useRef(null)
    const adminPassword = useRef(null)
    const dispatch = useDispatch()
    const { name, isAuthenticated, isLoading, error } = useSelector((state) => state.admin)


    const handleUnlock = () => {
        if (adminPassword.current.value == "z") {
            dispatch(loginRequest({ name: adminUsername.current.value }))
            setTimeout(() => {
                showToast("You are Authenticated!", "success", "light")
                dispatch(loginSuccess({ name: adminUsername.current.value }))
                console.log(name, isAuthenticated, isLoading, error)
                window.location.href = "/admin"
            }, 2000);
        } else {
            showToast("Invalid Credentials! Try Again.", "error", "dark")
        }
    }
    const footerLinks = [
        {
            title: "Platform",
            links: [
                { name: "Alumni Directory", path: "/community" },
                { name: "Success Stories", path: "/about" },
                { name: "Global Chapters", path: "/" },
                { name: "Career Portal", path: "/" },
            ],
        },
        {
            title: "Community",
            links: [
                { name: "Events", path: "/" },
                { name: "Mentorship", path: "/" },
                { name: "Give Back", path: "/" },
                { name: "Support", path: "/contact" },
            ],
        },
    ];

    const socialMedia = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/NoorPublicSchool/",
            icon: Facebook,
            color: "#1877F2"
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/noor_public_school_karachi/",
            icon: Instagram,
            color: "#E4405F"
        },
        {
            name: "Linkedin",
            href: "https://www.linkedin.com/in/noorpublicschool/",
            icon: Linkedin,
            color: "#0077B5"
        },
        {
            name: "Youtube",
            icon: Youtube,
            href: "https://www.youtube.com/@noorpublicschoolkarachi",
            color: "#FF0000"
        }
    ]

    return (
        <footer className="relative bg-[#0F172A] pt-24 pb-12 px-6 overflow-hidden">
            {/* 🔹 Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                {/* 🔹 TOP SECTION: BRANDING & LINKS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link to="/" className="flex items-center gap-4">
                            <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/10">
                                <img src={logo} alt="Logo" className="h-12 w-auto" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tighter">
                                    NPS <span className="text-secondary">ALUMNI</span>
                                </h2>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                                    Legacy of Excellence
                                </p>
                            </div>
                        </Link>

                        <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
                            Empowering the global community of Noor Public School. Together, we carry the torch of knowledge and leadership across borders.
                        </p>

                        <div className="flex items-center gap-4">
                            {socialMedia.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xl`}
                                    style={{ backgroundColor: item.color + "20", borderColor: item.color + "40" }}
                                >
                                    <item.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Links Columns */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {footerLinks.map((group) => (
                            <div key={group.title}>
                                <h4 className="text-white font-bold mb-8 text-lg">{group.title}</h4>
                                <ul className="space-y-4">
                                    {group.links.map((link) => (
                                        <li key={link.name}>
                                            <Link to={link.path} className="text-slate-400 hover:text-secondary flex items-center group transition-colors">
                                                {link.name}
                                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-white font-bold mb-8 text-lg">Contact HQ</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 text-slate-400">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <p className="text-sm leading-6">12/B Institutional Area, Noor Campus, Main City Road.</p>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                    <Phone size={18} />
                                </div>
                                <p className="text-sm">+92 303 2021040</p>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                    <Mail size={18} />
                                </div>
                                <p className="text-sm">noorpubsch@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔹 DIVIDER */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

                {/* 🔹 BOTTOM SECTION: COPYRIGHT */}
                <div className="flex flex-col md:row items-center justify-between gap-6 text-slate-500 text-sm">
                    <p>© {currentYear} NPS Alumni Association. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </div>
                    <p onClick={() => {
                        setOpen(!open)
                        console.log(open)
                    }} className="flex items-center gap-2">
                        Designed with <Heart size={14} className="text-red-500 fill-red-500" /> for Legacy.
                    </p>
                </div>
                {open && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        {/* 1. Backdrop (Piche ka dhundla parda) */}
                        <div
                            className="absolute inset-0 bg-darkBase/60 backdrop-blur-md transition-opacity"
                            onClick={() => setOpen(false)}
                        />

                        {/* 2. Modal Card */}
                        <div className="bg-white w-full max-w-md rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-2 border-white relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">

                            {/* Top Gradient Bar */}
                            <div className="h-3 bg-main-gradient w-full" />

                            <div className="p-8 md:p-6 space-y-6">
                                {/* Header */}
                                <div className="text-center space-y-2">
                                    <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                                        <ShieldCheck size={40} className="text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-black text-darkBase tracking-tight uppercase">Admin <span className="text-primary italic">Access.</span></h3>
                                    <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">Enter credentials to enter dashboard</p>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-5">
                                    {/* Admin Name */}
                                    <div className="group relative">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={20} />
                                        <input
                                            ref={adminUsername}
                                            type="text"
                                            placeholder="Admin Username"
                                            className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-400 rounded-2xl focus:bg-white focus:border-primary transition-all outline-none font-bold text-darkBase"
                                        />
                                    </div>

                                    {/* Admin Password */}
                                    <div className="group relative">
                                        <Fingerprint className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-violet transition-colors" size={20} />
                                        <input
                                            ref={adminPassword}
                                            type="password"
                                            placeholder="Secret Password"
                                            className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-400 rounded-2xl focus:bg-white focus:border-violet transition-all outline-none font-bold text-darkBase"
                                        />
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="space-y-4 pt-2">
                                    <button
                                        onClick={handleUnlock} // Yahan routing logic aayegi
                                        className="w-full py-6 bg-darkBase text-white rounded-2xl font-black text-lg uppercase tracking-[0.2em] shadow-xl hover:bg-main-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                Authenticating...
                                                <div className="animate-spin rounded-full h-5 w-5 border-t border-slate-100"></div>
                                            </>
                                        ) : (
                                            <>
                                                "Unlock Dashboard"
                                                <Lock className="group-hover:rotate-12 transition-transform" size={20} />
                                            </>
                                        )}
                                    </button>

                                    <button
                                        onClick={() => setOpen(false)}
                                        className="w-full text-center text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-orange transition-colors"
                                    >
                                        Cancel Access Request
                                    </button>
                                </div>
                            </div>

                            {/* Footer Decoration */}
                            <div className="bg-slate-50 py-4 text-center border-t border-slate-100">
                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Secure Terminal • NPS-v3.0</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer