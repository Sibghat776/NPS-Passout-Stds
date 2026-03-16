import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    User, Mail, Phone, Calendar, BookOpen, MapPin,
    Award, GraduationCap, Briefcase, ChevronRight,
    Download, Edit3, ShieldCheck
} from 'lucide-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Profile = () => {
    const navigate = useNavigate();
    const student = JSON.parse(localStorage.getItem("student"));

    useEffect(() => {
        if (!student) {
            navigate("/form");
        }
    }, [student, navigate]);

    if (!student) return null;

    // --- Sub-Components (Internal for Single File) ---

    const InfoCard = ({ title, icon: Icon, children }) => (
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <div className="bg-gradient-to-r from-blue-950 to-indigo-900 px-8 py-5 flex items-center gap-3">
                <Icon className="text-blue-200" size={20} />
                <h2 className="text-lg font-bold text-white tracking-wide uppercase">{title}</h2>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {children}
            </div>
        </div>
    );

    const InfoItem = ({ icon: Icon, label, value }) => (
        <div className="group flex items-center gap-5 p-3 rounded-2xl transition-colors hover:bg-gray-50">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Icon size={20} />
            </div>
            <div>
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[2px] mb-0.5">{label}</p>
                <p className="text-md font-bold text-gray-800 leading-tight">{value || 'Not Provided'}</p>
            </div>
        </div>
    );

    const VenusMarsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M16 16l3 3" /><path d="M19 14v5h-5" /><path d="M9 9l-3 -3" /><path d="M3 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        </svg>
    );

    return (
        <div className="flex flex-col min-h-screen bg-[#0d1529]/90">
            <Navbar />

            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Glassmorphic Header Card */}
                    <div className="relative mb-12 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.05)] border border-white flex flex-col md:flex-row items-center gap-10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 opacity-50 transition-transform hover:scale-110 duration-700"></div>

                        <div className="relative">
                            <div className="w-40 h-40 rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={student.profilePic || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop"}
                                    alt="Student"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-green-500 border-4 border-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg" title="Active Student">
                                <ShieldCheck className="text-white" size={20} />
                            </div>
                        </div>

                        <div className="relative text-center md:text-left flex-grow">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                                </span>
                                Verified Portal
                            </div>
                            <h1 className="text-5xl font-black text-blue-950 tracking-tighter mb-2 italic">
                                {student.studentName}
                            </h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 font-medium italic">
                                <span className="flex items-center gap-1.5"><BookOpen size={18} className="text-indigo-600" /> {student.course}</span>
                                <span className="hidden md:block text-gray-300">|</span>
                                <span className="flex items-center gap-1.5"><Calendar size={18} className="text-indigo-600" /> Batch {student.batch}</span>
                            </div>
                            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-gray-400">
                                <MapPin size={16} />
                                <span>{student.address}</span>
                            </div>
                        </div>

                        <div className="relative flex flex-col gap-3 w-full md:w-auto">
                            <button className="flex items-center justify-center gap-2 bg-blue-950 text-white px-6 py-4 rounded-2xl font-bold hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-200 group">
                                <Edit3 size={18} />
                                Update Profile
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Info Area */}
                        <div className="lg:col-span-8 space-y-8">
                            <InfoCard title="Primary Records" icon={User}>
                                <InfoItem icon={User} label="Father's Designation" value={student.fatherName} />
                                <InfoItem icon={VenusMarsIcon} label="Identity Gender" value={student.gender} />
                                <InfoItem icon={Mail} label="Official Email" value={student.email} />
                                <InfoItem icon={Phone} label="Verified Contact" value={student.contactNo} />
                            </InfoCard>

                            <InfoCard title="Educational Credentials" icon={GraduationCap}>
                                <InfoItem icon={Award} label="Prior Certificate" value={student.lastClass} />
                                <InfoItem icon={BookOpen} label="Enrolled Faculty" value={student.course} />
                                <InfoItem icon={Calendar} label="Academic Session" value={`${student.batch - 1}-${student.batch}`} />
                                <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                                        <Award size={20} />
                                    </div>
                                    <p className="text-xs font-bold text-blue-900 italic underline decoration-blue-200">Excellent Standing in {student.course}</p>
                                </div>
                            </InfoCard>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Professional Status Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[3px] mb-6">Career Trajectory</h3>
                                <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs font-black tracking-widest ${student.status === 'FREE' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                                    <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                                    {student.status}
                                </div>

                                {student.jobTitle && (
                                    <div className="mt-8 p-4 bg-gray-50 rounded-2xl flex items-center gap-3 justify-center">
                                        <Briefcase size={18} className="text-indigo-400" />
                                        <p className="text-sm font-bold text-gray-700 tracking-tight">{student.jobTitle}</p>
                                    </div>
                                )}
                            </div>

                            {/* Digital ID Card Action */}
                            <div className="bg-indigo-900 rounded-[2rem] p-8 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-4 translate-y-4">
                                    <GraduationCap size={160} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Student Digital ID</h3>
                                <p className="text-indigo-200 text-xs leading-relaxed mb-8 italic">Access your institutional identity card for exams and portal verification.</p>
                                <button className="w-full bg-white text-indigo-950 py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors shadow-xl shadow-black/10">
                                    <Download size={18} />
                                    Export PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;