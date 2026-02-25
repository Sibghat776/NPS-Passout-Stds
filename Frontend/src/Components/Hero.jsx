import React from 'react';
import { ArrowRight, GraduationCap, Globe, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">

            {/* Dynamic Background Overlays for extra depth */}
            <div className="absolute inset-0 bg-darkBase/20 backdrop-blur-[2px]"></div>

            {/* Floating Decorative Circles - Using your specific colors */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet/30 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange/20 rounded-full blur-[120px] animate-bounce-slow"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left space-y-8">

                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-textPrimary text-sm font-semibold tracking-wide shadow-xl animate-fade-in">
                            <Sparkles size={16} className="text-orange" />
                            <span className="uppercase italic">Est. 1998 • Noor Public School</span>
                        </div>

                        {/* Heading - Using your text colors & primary/secondary accents */}
                        <h1 className="text-6xl lg:text-8xl font-black text-textPrimary leading-[1.1] tracking-tight">
                            Where <span className="text-secondary drop-shadow-sm">Legacy</span> <br />
                            Meets <span className="bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent">Future.</span>
                        </h1>

                        <p className="text-xl text-textSecondary max-w-2xl leading-relaxed font-medium">
                            Join the official Noorians Global Registry. A premium space for alumni to
                            <span className="text-textPrimary"> network, mentor, and grow </span>
                            together beyond borders.
                        </p>

                        {/* Buttons - Using your Primary & Accent colors */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <button className="group relative px-10 py-5 bg-primary text-textPrimary rounded-2xl font-bold text-lg shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    Claim Your Profile <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>

                            <button className="px-10 py-5 bg-white/5 backdrop-blur-lg border-2 border-white/10 text-textPrimary hover:bg-white/10 rounded-2xl font-bold text-lg transition-all hover:border-secondary/50 shadow-2xl">
                                Explore Directory
                            </button>
                        </div>

                        {/* Live Stats Table-style blur cards */}
                        <div className="pt-10 flex flex-wrap justify-center lg:justify-start gap-10">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                                    <Globe className="text-secondary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-textPrimary leading-none">45+</h4>
                                    <p className="text-xs text-textSecondary uppercase tracking-widest mt-1">Countries</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30">
                                    <Zap className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-textPrimary leading-none">1.2k</h4>
                                    <p className="text-xs text-textSecondary uppercase tracking-widest mt-1">Active Mentors</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL - Glassmorphism composition */}
                    <div className="w-full lg:w-2/5 relative">
                        <div className="relative z-20 group">
                            {/* Main Image Frame */}
                            <div className="relative rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Alumni Success"
                                    className="w-full h-[500px] object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-darkBase via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Element 1: Achievement (Orange Accent) */}
                            <div className="absolute -top-8 -left-10 z-30 animate-float bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-orange rounded-2xl shadow-lg shadow-orange/30 text-white">
                                        <GraduationCap size={28} />
                                    </div>
                                    <div>
                                        <p className="text-textPrimary font-black text-xl italic">Class of 2024</p>
                                        <p className="text-primary text-[10px] uppercase font-bold tracking-tighter">Now Enrolling</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element 2: Connection (Violet Accent) */}
                            <div className="absolute -bottom-10 -right-6 z-30 animate-float-delayed bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl">
                                <div className="flex -space-x-4 mb-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img key={i} className="w-10 h-10 rounded-full border-2 border-primary" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-violet flex items-center justify-center text-[10px] font-bold text-white border-2 border-primary">+8k</div>
                                </div>
                                <p className="text-textPrimary font-bold text-sm">Join 8,000+ Alumni</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;