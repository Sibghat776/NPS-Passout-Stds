import React from 'react';
import {
    Mail, Phone, MapPin, Send,
    ShieldCheck
} from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
    return (
        <div className="bg-[#0d1529]/95 min-h-screen">
            <Navbar />

            {/* Main Wrapper with Padding for Navbar */}
            <div className="container border-b border-slate-200 mx-auto px-6 py-20 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* --- HEADER --- */}
                <div className="relative top-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        Get in <span className="text-transparent bg-clip-text bg-main-gradient italic">Touch.</span>
                    </h2>
                    <p className="text-textSecondary mt-4 font-medium text-sm md:text-lg max-w-xl">
                        Have a technical issue or need system clearance? Our support architecture is online 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* --- LEFT SIDE: INFO CARDS --- */}
                    <div className="lg:col-span-4 space-y-4">
                        {[
                            {
                                icon: <Mail style={{ color: '#4F46E5' }} />,
                                label: "Email Support",
                                value: "noorpubsch@gmail.com",
                                desc: "Our Official Email Address"
                            },
                            {
                                icon: <Phone style={{ color: '#06B6D4' }} />,
                                label: "Direct Line",
                                value: "0303-2021040",
                                desc: "Mon - Sat, 8am - 2pm"
                            },
                            {
                                icon: <MapPin style={{ color: '#7C3AED' }} />,
                                label: "Main Campus",
                                value: "Karachi, Pakistan",
                                desc: "Ghazi Nagar, Street # 20, Siddiq Wahab Road, Garden West, Karachi"
                            },
                        ].map((item, i) => (
                            <div key={i} className="group border p-6 rounded-[2rem] transition-all cursor-pointer"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    borderColor: 'rgba(255, 255, 255, 0.1)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-darkBase rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</p>
                                        <h4 className="text-white font-bold mt-1 break-all">{
                                            item.value == "noorpubsch@gmail.com" ? <a href="mailto:noorpubsch@gmail.com" target='_blank'>{item.value}</a> :
                                                item.value == "0303-2021040" ? <a className='hover:text-accent' target='_blank' href={`https://wa.me/+923032021040?text=${encodeURIComponent(`Assalam-u-Alaikum! ✨

Reaching out via the Alumni Website. 🏛️

────────────────────
🎓 Noor Public School
Alumni Directory Portal
────────────────────

`)}`}>{item.value}</a> :
                                                    <span>{item.value}</span>
                                        }
                                        </h4>
                                        <p className="text-[11px] text-slate-400 mt-1 font-medium italic">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* System Status Card */}
                        <div className="border p-8 rounded-[2.5rem] mt-8"
                            style={{
                                background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.2) 0%, transparent 100%)',
                                borderColor: 'rgba(79, 70, 229, 0.2)'
                            }}>
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck style={{ color: '#4F46E5' }} size={24} />
                                <span className="text-sm font-black text-white uppercase tracking-tighter">Server Status</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider">All Systems Operational</p>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: CONTACT FORM --- */}
                    <div className="lg:col-span-8 border backdrop-blur-xl p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl"
                        style={{
                            backgroundColor: 'rgba(15, 23, 42, 0.5)',
                            borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}>

                        {/* Decorative Blur Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] -translate-y-1/2 translate-x-1/2"
                            style={{ backgroundColor: 'rgba(6, 182, 212, 0.15)' }}></div>

                        <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border rounded-2xl py-4 px-6 text-sm text-white focus:outline-none transition-all"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="student@gmail.com"
                                        className="w-full border rounded-2xl py-4 px-6 text-sm text-white focus:outline-none transition-all"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Subject</label>
                                <select className="w-full border rounded-2xl py-4 px-6 text-sm text-slate-400 focus:outline-none transition-all appearance-none"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                                    <option className="bg-darkBase">Technical Issue</option>
                                    <option className="bg-darkBase">Account Recovery</option>
                                    <option className="bg-darkBase">Database Inquiry</option>
                                    <option className="bg-darkBase">General Feedback</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Detailed Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Describe your query in detail..."
                                    className="w-full border rounded-2xl py-4 px-6 text-sm text-white focus:outline-none transition-all resize-none"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
                                ></textarea>
                            </div>

                            <button className="group w-full py-5 bg-main-gradient text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                                style={{ boxShadow: '0 10px 30px -10px rgba(79, 70, 229, 0.3)' }}>
                                Initialize Dispatch
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;