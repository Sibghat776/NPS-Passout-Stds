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
    Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

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
                { name: "Annual Gala", path: "/events" },
                { name: "Mentorship", path: "/" },
                { name: "Give Back", path: "/" },
                { name: "Support", path: "/contact" },
            ],
        },
    ];

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
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-main-gradient hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xl">
                                    <Icon size={20} />
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
                                <p className="text-sm">+92 300 1234567</p>
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
                    <p className="flex items-center gap-2">
                        Designed with <Heart size={14} className="text-red-500 fill-red-500" /> for Legacy.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;