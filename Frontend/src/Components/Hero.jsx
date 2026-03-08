import React from 'react';
import { ArrowRight, GraduationCap, Globe, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="/" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pb-5 pt-32">

            {/* --- Dynamic Background Overlays --- */}
            {/* Yahan bg-darkBase/20 ki jagah inline style use kiya hai taake transparency lazmi nazar aaye */}
            <div className="absolute inset-0 backdrop-blur-[2px]" style={{ backgroundColor: 'rgba(15, 23, 42, 0.2)' }}></div>

            {/* Floating Decorative Circles */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] animate-pulse"
                style={{ backgroundColor: 'rgba(124, 58, 237, 0.3)' }}></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] animate-bounce-slow"
                style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left space-y-8">

                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 backdrop-blur-md border px-5 py-2 rounded-full text-white text-sm font-semibold tracking-wide shadow-xl animate-fade-in"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                            <Sparkles size={16} className="text-orange" />
                            <span className="uppercase italic">Est. 1998 • Noor Public School</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            Where <span className="text-secondary drop-shadow-sm">Legacy</span> <br />
                            Meets <span className="bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent">Future.</span>
                        </h1>

                        <p className="text-lg text-textSecondary max-w-2xl leading-relaxed font-medium">
                            Join the official Noorians Global Registry. A premium space for alumni to
                            <span className="text-white"> network, mentor, and grow </span>
                            together beyond borders.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <button className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center overflow-hidden">
                                <span className="relative text-base z-10 flex items-center">
                                    Claim Your Profile <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>

                            <button className="px-8 py-4 text-base backdrop-blur-lg border-2 text-white hover:bg-white/10 rounded-2xl font-bold transition-all shadow-2xl"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                                Explore Directory
                            </button>
                        </div>

                        {/* Live Stats */}
                        <div className="pt-10 flex flex-wrap justify-center lg:justify-start gap-10">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                                    style={{ backgroundColor: 'rgba(6, 182, 212, 0.2)', borderColor: 'rgba(6, 182, 212, 0.3)' }}>
                                    <Globe className="text-secondary" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white leading-none">45+</h4>
                                    <p className="text-xs text-textSecondary uppercase tracking-widest mt-1">Countries</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                                    <Zap className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white leading-none">1.2k</h4>
                                    <p className="text-xs text-textSecondary uppercase tracking-widest mt-1">Active Mentors</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="w-full lg:w-2/5 relative">
                        <div className="relative z-20 group">
                            <div className="relative rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Alumni Success"
                                    className="w-full h-[500px] object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute -top-8 -left-10 z-30 animate-float backdrop-blur-2xl border p-5 rounded-3xl shadow-2xl"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-orange rounded-2xl shadow-lg shadow-orange/30 text-white">
                                        <GraduationCap size={28} />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-xl italic">Class of 2024</p>
                                        <p className="text-primary text-[10px] uppercase font-bold tracking-tighter">Now Enrolling</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute -bottom-10 -right-6 z-30 animate-float-delayed backdrop-blur-2xl border p-6 rounded-3xl shadow-2xl"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <div className="flex -space-x-4 mb-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img key={i} className="w-10 h-10 rounded-full border-2 border-[#4F46E5]" src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" />
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-violet flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#4F46E5]">+8k</div>
                                </div>
                                <p className="text-white font-bold text-sm">Join 8,000+ Alumni</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;