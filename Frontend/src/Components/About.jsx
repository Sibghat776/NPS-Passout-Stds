import React from "react";
import {
    Users, ArrowRight, ShieldCheck, GraduationCap,
    History, Target, Zap, Globe, Award, Star
} from "lucide-react";
import aboutImage from "../assets/Hero/Pic 2.jpeg";

const About = () => {
    const features = [
        {
            title: "Global Network",
            desc: "Elite directory of global leaders across generations.",
            icon: <Globe size={20} />,
            color: "text-primary",
            bg: "bg-primary/5"
        },
        {
            title: "Mentorship",
            desc: "Direct access to industry veterans and roadmaps.",
            icon: <Target size={20} />,
            color: "text-secondary",
            bg: "bg-secondary/5"
        },
        {
            title: "Legacy",
            desc: "Preserving three decades of academic excellence.",
            icon: <History size={20} />,
            color: "text-accent",
            bg: "bg-accent/5"
        },
        {
            title: "Events",
            desc: "From galas to intimate batch reunions.",
            icon: <Zap size={20} />,
            color: "text-violet",
            bg: "bg-violet/5"
        }
    ];

    return (
        <section id="about" className="relative w-full bg-white py-20 px-6 overflow-hidden">

            {/* 🔹 Subtle Academy Background Patterns */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-32"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* 🔹 LEFT: CONTENT (Compact & Elegant) */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-darkBase text-white">
                                <Star size={12} className="fill-white" />
                                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Since 1992</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-darkBase tracking-tight leading-tight">
                                Legacy of <span className="text-primary italic font-serif">Excellence</span>,<br />
                                Bond of a <span className="text-transparent bg-clip-text bg-main-gradient">Lifetime.</span>
                            </h2>

                            <p className="text-base text-slate-500 font-medium leading-relaxed max-w-md">
                                For 34 years, NPS has nurtured leaders. Join an ecosystem that redefines professional networking and preserves our shared history.
                            </p>
                        </div>

                        {/* Feature Grid (Small & Clean) */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((item, idx) => (
                                <div key={idx} className="p-5 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
                                    <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-sm font-black text-darkBase uppercase tracking-tight mb-1">{item.title}</h4>
                                    <p className="text-[11px] text-slate-400 font-bold leading-snug">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🔹 RIGHT: VISUAL (Polished & Educational) */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative mx-auto max-w-[400px]">
                            {/* Main Frame */}
                            <div className="relative z-10 rounded-[2rem] overflow-hidden border-[8px] border-white shadow-2xl">
                                <img
                                    src={aboutImage}
                                    alt="Academy Legacy"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-darkBase/60 to-transparent"></div>

                                {/* Small Overlay Badge */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                                        ))}
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-white uppercase tracking-widest">Global Members</p>
                                        <p className="text-lg font-black text-white leading-none">5,000+</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats (Classy Educational Touch) */}
                            <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-2xl p-4 border border-slate-50 hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Certified</p>
                                        <p className="text-xs font-black text-darkBase uppercase">Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🔹 COMPACT CTA STRIP */}
                <div className="mt-16 p-8 rounded-[2rem] bg-darkBase relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-main-gradient opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                        <div>
                            <h3 className="text-xl font-black text-white tracking-tight italic">Ready to join the inner circle?</h3>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Official Noor Public School Alumni Directory</p>
                        </div>
                        <button className="flex items-center gap-3 bg-white text-darkBase px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300">
                            Join Now <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;