import React from "react";
import {
    Users,
    ArrowRight,
    ShieldCheck,
    GraduationCap,
    History,
    Target,
    Zap,
    Globe
} from "lucide-react";
import aboutImage from "../assets/About.png";

const About = () => {
    const features = [
        {
            title: "Global Connectivity",
            desc: "Bridge the gap between generations with an elite directory of global leaders.",
            icon: <Globe size={26} />,
            gradient: "from-blue-500 to-cyan-400",
            shadow: "shadow-blue-500/20"
        },
        {
            title: "Career Mentorship",
            desc: "Unlock strategic roadmaps through direct access to industry veterans.",
            icon: <Target size={26} />,
            gradient: "from-purple-500 to-pink-500",
            shadow: "shadow-purple-500/20"
        },
        {
            title: "Digital Legacy",
            desc: "Preserving three decades of excellence in our secure digital sanctuary.",
            icon: <History size={26} />,
            gradient: "from-pink-500 to-amber-400",
            shadow: "shadow-orange-500/20"
        },
        {
            title: "Impactful Events",
            desc: "From high-profile galas to intimate batch reunions that spark change.",
            icon: <Zap size={26} />,
            gradient: "from-emerald-500 to-teal-400",
            shadow: "shadow-emerald-500/20"
        }
    ];

    return (
        <section className="relative w-full bg-[#FCFDFF] py-32 px-6 overflow-hidden">

            {/* 🔹 Soft Abstract Background Colors */}
            <div id="about" className="absolute top-0 -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 -right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* 🔹 Header Section */}
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-12 bg-main-gradient"></div>
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-primary">About NPS Alumni</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tight leading-[0.95]">
                        Legacy of <span className="text-transparent bg-clip-text bg-main-gradient">Excellence</span>, <br />
                        Bond of <span className="italic font-serif text-secondary">A Lifetime.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* 🔹 LEFT: THE STORY & FEATURES (7 Columns) */}
                    <div className="lg:col-span-7 space-y-12">
                        <p className="text-2xl text-slate-600 leading-relaxed font-medium max-w-2xl">
                            For over <span className="text-darkBase border-b-4 border-accent/30">34 years</span>, Noor Public School has been the cradle of leadership. Today, we invite you to be part of an ecosystem that redefines professional networking.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((item, idx) => (
                                <div key={idx} className="group relative p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} ${item.shadow} flex items-center justify-center text-white mb-6 group-hover:rotate-[10deg] transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                    <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🔹 RIGHT: THE CREATIVE FRAME (5 Columns) */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32">
                            {/* Main Image Frame */}
                            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-2 group">
                                <img
                                    src={aboutImage}
                                    alt="Legacy"
                                    className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[-2deg]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay"></div>

                                {/* Overlay Stats Box */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-black text-primary uppercase tracking-widest">Global Members</p>
                                        <p className="text-3xl font-black text-darkBase">5,000+</p>
                                    </div>
                                    <div className="w-14 h-14 bg-darkBase rounded-2xl flex items-center justify-center text-white">
                                        <GraduationCap size={28} />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute top-1/2 -left-12 p-4 bg-white shadow-2xl rounded-2xl flex items-center gap-3 border border-slate-50 max-w-[200px] hidden xl:flex">
                                <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
                                <p className="text-[10px] font-bold text-slate-700 leading-tight uppercase">ISO Certified Educational Standard</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 🔹 BOTTOM: ACTION STRIP */}
                <div className="mt-24 p-10 rounded-[3rem] bg-darkBase relative overflow-hidden group">
                    <div className="absolute inset-0 bg-main-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Ready to claim your spot?</h3>
                            <p className="text-slate-400">Join the official directory of Noor Public School Alumni.</p>
                        </div>
                        <button className="flex items-center gap-4 bg-white text-darkBase px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-main-gradient hover:text-white transition-all duration-300 shadow-xl shadow-white/5">
                            Register Now <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;