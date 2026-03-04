import React, { useState, useRef } from "react";
import {
    User, Mail, Phone, Calendar, GraduationCap, Briefcase,
    Camera, Send, MapPin, Database, Award, CheckCircle2,
    Globe, ShieldCheck, BookText, Fingerprint, Venus, Mars,
    UserCheck,
    Home,
    UserIcon,
    User2
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
        if (value && index < 3) inputRefs[index + 1].current.focus();
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
        <div className="bg-lightBase min-h-screen font-sans selection:bg-primary selection:text-white">
            <Navbar />

            {/* 🔹 BACKGROUND ACCENTS */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-violet/10 rounded-full blur-[100px]"></div>
            </div>

            <section className="pt-44 pb-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">

                    {/* 🔹 HEADER */}
                    <div className="text-center mb-12 space-y-4">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-xl border border-primary/20">
                            <BookText size={18} className="text-primary" />
                            <span className="text-xs font-black uppercase tracking-widest text-darkBase">Student Directory Portal</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-darkBase tracking-tight">
                            Build Your <span className="text-transparent bg-clip-text bg-main-gradient">Future</span> Profile.
                        </h2>
                        <p className="text-textSecondary text-lg font-bold max-w-2xl mx-auto italic">
                            Official registration for Noor Public School alumni. Enter your details to stay connected.
                        </p>
                    </div>

                    <form className="bg-white border-2 border-white shadow-2xl rounded-[3rem] overflow-hidden">
                        <div className="p-8 md:p-16 space-y-12">

                            {/* 🔹 PERSONAL INFO GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name Field */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Full Name (As per NIC/B-Form)</label>
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary group-focus-within:scale-110 transition-transform" />
                                        <input type="text" placeholder="Arsalan Nasir" className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-primary rounded-2xl outline-none font-black text-darkBase" />
                                    </div>
                                </div>

                                {/* Father Name Field */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Father's Name</label>
                                    <div className="relative group">
                                        <User2 className="absolute left-5 top-1/2 -translate-y-1/2 text-violet group-focus-within:scale-110 transition-transform" />
                                        <input type="text" placeholder="Ali Hassam" className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-violet rounded-2xl outline-none font-black text-darkBase" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Contact Number</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-orange group-focus-within:scale-110 transition-transform" />
                                        <input type="text" placeholder="+92 3XX XXXXXXX" className="w-full bg-blue-50/50 pl-14 pr-6 py-5 border-2 border-transparent focus:border-orange rounded-2xl outline-none font-black text-darkBase" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-blue group-focus-within:scale-110 transition-transform" />
                                        <input type="text" placeholder="ali.hassam@example.com" className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-blue rounded-2xl outline-none font-black text-darkBase" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Job Title</label>
                                    <div className="relative group">
                                        <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-600 group-focus-within:scale-110 transition-transform" />
                                        <input type="text" placeholder="Software Engineer" className="w-full pl-14 pr-6 py-5 bg-blue-50/50 border-2 border-transparent focus:border-blue rounded-2xl outline-none font-black text-darkBase" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Address</label>
                                    <div className="relative group">
                                        <Home className="absolute left-5 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" />
                                        <input type="text" placeholder="123 Main Street, City, Country" className="w-full pl-14 pr-6 py-5  bg-blue-50/50 border-2 border-transparent focus:border-blue rounded-2xl outline-none font-black text-darkBase" />
                                    </div>
                                </div>

                                {/* GENDER SELECTION */}
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-darkBase uppercase ml-2">Select Gender</label>
                                    <div className="grid grid-cols-2 gap-4 h-[64px]">
                                        <label className="relative cursor-pointer group">
                                            <input type="radio" name="gender" className="peer hidden" />
                                            <div className="flex items-center justify-center gap-2 h-full bg-slate-100 peer-checked:bg-primary peer-checked:text-white rounded-2xl font-black text-sm transition-all border-2 border-transparent peer-checked:border-primary">
                                                <Mars size={18} /> MALE
                                            </div>
                                        </label>
                                        <label className="relative cursor-pointer group">
                                            <input type="radio" name="gender" className="peer hidden" />
                                            <div className="flex items-center justify-center gap-2 h-full bg-slate-100 peer-checked:bg-secondary peer-checked:text-white rounded-2xl font-black text-sm transition-all border-2 border-transparent peer-checked:border-secondary">
                                                <Venus size={18} /> FEMALE
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="space-y-4 flex flex-col w-full">
                                        <label className="text-xs font-black text-start text-darkBase uppercase ml-2">
                                            Current Professional Status
                                        </label>
                                        <div className="grid grid-cols-2 gap-5 h-[64px]">
                                            {/* FREE / AVAILABLE OPTION */}
                                            <label className="relative cursor-pointer group">
                                                <input type="radio" name="status" className="peer hidden" defaultChecked />
                                                <div className="flex items-center justify-center gap-3 h-full bg-white border-2 border-slate-100 text-slate-400 rounded-2xl font-black text-sm transition-all duration-300 
                peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/5 peer-checked:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.1)]
                group-hover:border-primary/50 group-hover:scale-[1.02]">

                                                    <div className="p-2 rounded-lg bg-slate-100 peer-checked:bg-primary peer-checked:text-white transition-colors">
                                                        <UserCheck size={20} />
                                                    </div>
                                                    <span className="tracking-wider">FREE</span>
                                                </div>
                                                {/* Active Tick Indicator */}
                                                <div className="absolute -top-2 -right-2 scale-0 peer-checked:scale-100 transition-transform duration-300 bg-primary text-white p-1 rounded-full shadow-lg">
                                                    <CheckCircle2 size={14} />
                                                </div>
                                            </label>

                                            {/* WORKING OPTION */}
                                            <label className="relative cursor-pointer group">
                                                <input type="radio" name="status" className="peer hidden" />
                                                <div className="flex items-center justify-center gap-3 h-full bg-white border-2 border-slate-100 text-slate-400 rounded-2xl font-black text-sm transition-all duration-300 
                peer-checked:border-secondary peer-checked:text-secondary peer-checked:bg-secondary/5 peer-checked:shadow-[0_0_20px_rgba(var(--color-secondary-rgb),0.1)]
                group-hover:border-secondary/50 group-hover:scale-[1.02]">

                                                    <div className="p-2 rounded-lg bg-slate-100 peer-checked:bg-secondary peer-checked:text-white transition-colors">
                                                        <Briefcase size={20} />
                                                    </div>
                                                    <span className="tracking-wider">WORKING</span>
                                                </div>
                                                {/* Active Tick Indicator */}
                                                <div className="absolute -top-2 -right-2 scale-0 peer-checked:scale-100 transition-transform duration-300 bg-secondary text-white p-1 rounded-full shadow-lg">
                                                    <CheckCircle2 size={14} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                {/* Contact Field */}
                            </div>

                            {/* 🔹 SCHOOL ACADEMIC BACKGROUND SECTION */}
                            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-8 md:p-12 text-center space-y-8">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-black text-darkBase uppercase tracking-tight">🏫 School Background</h4>
                                    <p className="text-textSecondary font-bold text-sm italic">Ye info apne school records ke mutabiq bharein</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-primary uppercase">Passing Batch</label>
                                        <select className="w-full p-4 rounded-xl border-2 border-primary/20 bg-white font-black text-darkBase outline-none focus:border-primary">
                                            <option>2023-24</option>
                                            <option>2024-25</option>
                                            <option>2025-26</option>
                                            <option>Prev</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-violet uppercase">Last Class</label>
                                        <select className="w-full p-4 rounded-xl border-2 border-violet/20 bg-white font-black text-darkBase outline-none focus:border-violet">
                                            <option>Matric (Science)</option>
                                            <option>Matric (Arts)</option>
                                            <option>Intermediate</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-xs font-black text-darkBase uppercase">Which group did you study at school?</p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {["Computer Science", "Biology", "Commerce", "Other"].map((course) => (
                                            <label key={course} className="cursor-pointer group">
                                                <input type="radio" name="course" className="hidden peer" onChange={() => setIsOtherCourse(course === "Other")} />
                                                <div className="px-6 py-3 rounded-full bg-white border-2 border-slate-200 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary font-black text-xs uppercase transition-all group-hover:scale-105 shadow-sm">
                                                    {course}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                    {isOtherCourse && (
                                        <input type="text" placeholder="Type your school group name..." className="w-full max-w-md mx-auto px-6 py-4 rounded-xl border-2 border-primary outline-none font-black text-darkBase animate-bounce-short" />
                                    )}
                                </div>
                            </div>

                            {/* 🔹 PHOTO UPLOAD */}
                            <div className="flex flex-col items-center gap-4">
                                <p className="text-xs font-black text-darkBase uppercase">Upload Your Profile Picture</p>
                                <div className="relative group cursor-pointer">
                                    <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-tr from-primary/10 to-violet/10 border-4 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-primary transition-all shadow-inner">
                                        {previewImage ? (
                                            <img src={previewImage} className="w-full h-full object-cover" alt="Preview" />
                                        ) : (
                                            <Camera size={40} className="text-slate-300 group-hover:text-primary transition-colors" />
                                        )}
                                        <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                                        <CheckCircle2 size={24} className="text-primary" />
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-textSecondary uppercase tracking-widest italic">JPG, PNG - Max 2MB</span>
                            </div>

                            {/* 🔹 SUBMIT */}
                            <div className="pt-6">
                                <button className="w-full py-8 bg-main-gradient rounded-3xl text-white font-black text-2xl uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group">
                                    REGISTER NOW
                                    <Send size={28} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <div className="flex items-center justify-center gap-2 mt-6 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                                    <ShieldCheck size={16} /> Verified School Information System Secure Connection
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Form;