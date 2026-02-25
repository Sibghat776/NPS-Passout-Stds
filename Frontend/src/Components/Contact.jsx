import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Send,
    Globe,
    ArrowUpRight,
    HeadphonesIcon
} from 'lucide-react';

const Contact = () => {
    return (
        <section className="relative w-full bg-darkBase py-32 px-6 overflow-hidden">

            {/* 🔹 Background Luxury Glows */}
            <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col lg:flex-row gap-20">

                    {/* 🔹 LEFT: THE CONTENT SIDE */}
                    <div className="lg:w-2/5 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Available for Support</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
                                Let's <br />
                                <span className="text-transparent bg-clip-text bg-main-gradient font-serif">Connect.</span>
                            </h2>

                            <p className="text-textSecondary text-xl leading-relaxed max-w-md font-light">
                                Whether you're a long-lost alumnus or a fresh graduate, we’re just a message away.
                            </p>
                        </div>

                        {/* Elite Contact Cards */}
                        <div className="space-y-4">
                            {/* Phone Elite */}
                            <div className="group flex items-center justify-between p-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all duration-500 cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-main-gradient rounded-2xl flex items-center justify-center text-white shadow-lg">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-textSecondary text-xs font-bold uppercase tracking-widest">Contact</p>
                                        <h4 className="text-white text-xl font-bold">0303-2021040</h4>
                                    </div>
                                </div>
                                <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" />
                            </div>

                            {/* Email Elite */}
                            <div className="group flex items-center justify-between p-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all duration-500 cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent shadow-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-textSecondary text-xs font-bold uppercase tracking-widest">Official Email</p>
                                        <h4 className="text-white text-xl font-bold">noorpubsch@gmail.com</h4>
                                    </div>
                                </div>
                                <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" />
                            </div>

                            {/* Address Elite */}
                            <div className="group p-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all duration-500">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-textSecondary text-xs font-bold uppercase tracking-widest">Campus Address</p>
                                        <h4 className="text-white text-lg font-medium leading-snug mt-1">
                                            Ghazi Nagar, Siddiq Wahab Road, Near Baloch Clinic, Karachi.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 🔹 RIGHT: THE GLASS FORM SIDE */}
                    <div className="lg:w-3/5 relative">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>

                        <div className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-[40px] shadow-2xl overflow-hidden">
                            {/* Form Decorative Icon */}
                            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                                <Globe size={300} strokeWidth={1} />
                            </div>

                            <div className="relative z-10">
                                <div className="mb-10">
                                    <h3 className="text-3xl font-bold text-white mb-2">Send a Message</h3>
                                    <p className="text-textSecondary">Expected response within <span className="text-accent font-bold italic">2 hours</span>.</p>
                                </div>

                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <input type="text" required className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-all peer placeholder-transparent" id="name" placeholder="Name" />
                                            <label htmlFor="name" className="absolute left-0 -top-3.5 text-textSecondary text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs uppercase tracking-widest font-bold">Full Name</label>
                                        </div>

                                        <div className="relative group">
                                            <input type="email" required className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-secondary transition-all peer placeholder-transparent" id="email" placeholder="Email" />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-textSecondary text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs uppercase tracking-widest font-bold">Email Address</label>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <input type="text" required className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-all peer placeholder-transparent" id="subject" placeholder="Batch Year" />
                                        <label htmlFor="Batch Year" className="absolute left-0 -top-3.5 text-textSecondary text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-xs uppercase tracking-widest font-bold">Batch Year</label>
                                    </div>

                                    <div className="relative group">
                                        <textarea rows="4" required className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-violet transition-all peer placeholder-transparent resize-none" id="message" placeholder="Message"></textarea>
                                        <label htmlFor="message" className="absolute left-0 -top-3.5 text-textSecondary text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-violet peer-focus:text-xs uppercase tracking-widest font-bold">Your Message</label>
                                    </div>

                                    <button className="relative w-full group overflow-hidden bg-white text-darkBase py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:bg-transparent hover:text-white border-2 border-white">
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            Send Message <Send size={18} />
                                        </span>
                                        <div className="absolute inset-0 bg-main-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                    </button>
                                </form>

                                <div className="mt-10 pt-10 border-t border-white/5 flex flex-wrap gap-6 justify-center md:justify-start">
                                    <div className="flex items-center gap-2 text-textSecondary text-xs font-bold uppercase tracking-tighter">
                                        <HeadphonesIcon size={16} className="text-primary" /> Technical Support Available
                                    </div>
                                    <div className="flex items-center gap-2 text-textSecondary text-xs font-bold uppercase tracking-tighter">
                                        <Globe size={16} className="text-secondary" /> Feel Free To Send Message in any language.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;