import React, { useState, useRef } from "react";
import {
    User, Mail, Phone, Hash, Calendar, GraduationCap,
    Briefcase, BookOpen, Camera, AlertCircle, Send, Sparkles,
    LocationEdit,
    Database,
    DatabaseZapIcon
} from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Form = () => {
    const [isOtherCourse, setIsOtherCourse] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [grNumber, setGrNumber] = useState(["", "", "", ""]);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleGRChange = (index, value) => {
        if (isNaN(value)) return;
        const newGr = [...grNumber];
        newGr[index] = value.substring(value.length - 1);
        setGrNumber(newGr);
        if (value && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !grNumber[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setPreviewImage(URL.createObjectURL(file));
    };

    return (
        <div className="bg-lightBase min-h-screen font-sans">
            <Navbar />

            <section className="pt-44 pb-24 px-6 relative overflow-hidden">
                {/* 🔹 Minimalist Classy Background Accents (Pure Colors) */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary rounded-full blur-[150px] opacity-20 -ml-40 -mt-20"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[150px] opacity-20 -mr-40 -mb-20"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* 🔹 Header Section */}
                    <div className="text-center mb-20 space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-sm border border-slate-100">
                            <Sparkles size={16} className="text-primary animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-darkBase">Alumni Portal 2026</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-darkBase tracking-tighter">
                            Shape Your <span className="text-transparent bg-clip-text bg-main-gradient">Legacy.</span>
                        </h2>
                        <p className="text-textSecondary text-xl max-w-2xl mx-auto font-medium">
                            Join the global network of excellence. Update your professional status for the official NPS Alumni Directory.
                        </p>
                    </div>

                    <form className="bg-white/90 backdrop-blur-xl border border-white shadow-[0_30px_100px_rgba(0,0,0,0.05)] rounded-[4rem] p-8 md:p-20 space-y-20">

                        {/* 🔹 G.R NUMBER SECTION (The Focus) */}
                        <div className="space-y-10 flex flex-col items-center">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-black text-darkBase flex items-center justify-center gap-3">
                                    <Hash className="text-primary" strokeWidth={3} /> Student G.R Number
                                </h3>
                                <p className="text-textSecondary text-sm font-bold uppercase tracking-widest">Verify your academic records</p>
                            </div>

                            <div className="flex gap-4 md:gap-8">
                                {grNumber.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={inputRefs[index]}
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleGRChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-16 h-24 md:w-24 md:h-32 text-center text-5xl font-black bg-lightBase border-b-4 border-slate-200 rounded-3xl focus:border-primary focus:bg-white transition-all outline-none text-primary shadow-sm"
                                        placeholder="0"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* 🔹 PERSONAL IDENTITY (Clean & Classy) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-xs font-black text-darkBase uppercase tracking-widest ml-2">Full Name</label>
                                <div className="group relative">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                                    <input type="text" placeholder="e.g. Ahmed Khan" className="w-full pl-16 pr-8 py-6 bg-lightBase border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-primary transition-all outline-none font-bold text-darkBase" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-black text-darkBase uppercase tracking-widest ml-2">Father's Name</label>
                                <div className="group relative">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet transition-colors" size={20} />
                                    <input type="text" placeholder="Father's Name" className="w-full pl-16 pr-8 py-6 bg-lightBase border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-violet transition-all outline-none font-bold text-darkBase" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-black text-darkBase uppercase tracking-widest ml-2">Contact Number</label>
                                <div className="group relative">
                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={20} />
                                    <input type="tel" placeholder="+92 300 0000000" className="w-full pl-16 pr-8 py-6 bg-lightBase border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-accent transition-all outline-none font-bold text-darkBase" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black text-darkBase uppercase tracking-widest ml-2">Email Address</label>
                                <div className="group relative">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors" size={20} />
                                    <input type="email" placeholder="alumni@example.com" className="w-full pl-16 pr-8 py-6 bg-lightBase border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-secondary transition-all outline-none font-bold text-darkBase" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black text-darkBase uppercase tracking-widest ml-2">Address</label>
                                <div className="group relative">
                                    <LocationEdit className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors" size={20} />
                                    <input type="text" placeholder="Address" className="w-full pl-16 pr-8 py-6 bg-lightBase border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-secondary transition-all outline-none font-bold text-darkBase" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black text-darkBase uppercase tracking-widest ml-2">Job Title</label>
                                <div className="group relative">
                                    <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors" size={20} />
                                    <input type="text" placeholder="Job Title" className="w-full pl-16 pr-8 py-6 bg-lightBase border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-secondary transition-all outline-none font-bold text-darkBase" />
                                </div>
                            </div>
                            <div className="space-y-4 col-span-2">
                                <label className="text-xs font-black text-darkBase uppercase tracking-widest ml-2">Job Description (Optional)</label>
                                <div className="group relative">
                                    <DatabaseZapIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors" size={20} />
                                    <input type="text" placeholder="Job Description" className="w-full pl-16 pr-8 py-4 bg-lightBase border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-secondary transition-all outline-none font-bold text-darkBase" />
                                </div>
                            </div>
                        </div>

                        {/* 🔹 ACADEMIC & PROFESSIONAL CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div className="p-8 rounded-[3rem] bg-primary group hover:scale-105 transition-transform duration-500">
                                <Calendar className="text-white mb-4" size={28} />
                                <h4 className="font-black text-white text-sm uppercase mb-4">Batch</h4>
                                <select className="w-full bg-white/20 backdrop-blur-md border-none rounded-2xl py-3 px-4 font-bold text-white outline-none">
                                    <option className="text-darkBase">Prev</option>
                                    <option className="text-darkBase">2023 - 24</option>
                                    <option className="text-darkBase">2024 - 25</option>
                                    <option className="text-darkBase">2025 - 26</option>
                                </select>
                            </div>
                            {/* Card 2 */}
                            <div className="p-8 rounded-[3rem] bg-secondary group hover:scale-105 transition-transform duration-500">
                                <GraduationCap className="text-white mb-4" size={28} />
                                <h4 className="font-black text-white text-sm uppercase mb-4">Degree</h4>
                                <select className="w-full bg-white/20 backdrop-blur-md border-none rounded-2xl py-3 px-4 font-bold text-white outline-none">
                                    <option className="text-darkBase">Matric</option>
                                    <option className="text-darkBase">Intermediate</option>
                                    <option className="text-darkBase">Bachelor's</option>
                                    <option className="text-darkBase">Master's</option>
                                    <option className="text-darkBase">Other</option>
                                </select>
                            </div>
                            {/* Card 3 */}
                            <div className="p-8 rounded-[3rem] bg-accent group hover:scale-105 transition-transform duration-500">
                                <Briefcase className="text-white mb-4" size={28} />
                                <h4 className="font-black text-white text-sm uppercase mb-4">Experience</h4>
                                <select className="w-full bg-white/20 backdrop-blur-md border-none rounded-2xl py-3 px-4 font-bold text-white outline-none">
                                    <option className="text-darkBase">Nil</option>
                                    <option className="text-darkBase">2 Years</option>
                                </select>
                            </div>
                            {/* Card 4 - Status */}
                            <div className="p-8 rounded-[3rem] bg-darkBase group hover:scale-105 transition-transform duration-500">
                                <BookOpen className="text-white mb-4" size={28} />
                                <h4 className="font-black text-white text-sm uppercase mb-4">Status</h4>
                                <div className="flex bg-white/10 p-1 rounded-xl">
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="st" className="hidden peer" defaultChecked />
                                        <div className="text-center py-2 rounded-lg peer-checked:bg-white peer-checked:text-darkBase font-bold text-white/50 text-xs transition-all">FREE</div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="st" className="hidden peer" />
                                        <div className="text-center py-2 rounded-lg peer-checked:bg-white peer-checked:text-darkBase font-bold text-white/50 text-xs transition-all">JOB</div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* 🔹 SPECIALIZATION (Modern Chips) */}
                        <div className="space-y-8 bg-lightBase p-10 rounded-[3rem]">
                            <h4 className="text-center text-xl font-black text-darkBase uppercase tracking-widest">Specialization Area</h4>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["AI", "Web Dev", "Cyber", "Cloud", "Marketing", "Other"].map((course) => (
                                    <label key={course} className="cursor-pointer">
                                        <input type="radio" name="course" className="hidden peer" onChange={() => setIsOtherCourse(course === "Other")} />
                                        <div className="px-8 py-4 rounded-full bg-white border-2 border-slate-100 font-bold text-textSecondary peer-checked:border-primary peer-checked:text-primary transition-all shadow-sm">
                                            {course}
                                        </div>
                                    </label>
                                ))}
                            </div>
                            {isOtherCourse && (
                                <input type="text" placeholder="Specify your course..." className="w-full px-8 py-5 rounded-2xl bg-white border-2 border-primary outline-none font-bold text-darkBase animate-in slide-in-from-top-2" />
                            )}
                        </div>

                        {/* 🔹 UPLOAD SECTION */}
                        <div className="flex flex-col items-center space-y-6">
                            <div className="w-44 h-44 rounded-[3.5rem] border-4 border-dashed border-slate-200 bg-lightBase flex items-center justify-center overflow-hidden transition-all hover:border-primary group relative">
                                {previewImage ? (
                                    <img src={previewImage} className="w-full h-full object-cover" alt="Preview" />
                                ) : (
                                    <Camera size={40} className="text-slate-300 group-hover:scale-110 transition-transform" />
                                )}
                                <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                            </div>
                            <p className="font-black text-darkBase text-[10px] uppercase tracking-[0.4em]">Official Profile Image</p>
                        </div>

                        {/* 🔹 SUBMIT */}
                        <button className="w-full py-10 rounded-[3rem] bg-darkBase text-white font-black text-2xl uppercase tracking-[0.3em] shadow-2xl hover:bg-main-gradient hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-6 group">
                            Submit Registration
                            <Send size={28} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </button>

                        <div className="flex items-center justify-center gap-2 text-orange font-bold text-xs uppercase tracking-widest">
                            <AlertCircle size={16} /> Data is encrypted and secure
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Form;