import React from "react";
import Hero from "../Components/Hero.jsx";
import Navbar from "../Components/Navbar.jsx";
import About from "../Components/About.jsx";
import Footer from "../Components/Footer.jsx";
import { Users, Rocket, Target, ShieldCheck } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-darkBase selection:bg-primary selection:text-white overflow-hidden">
            <Navbar />

            {/* 1. HERO SECTION */}
            <Hero />

            {/* 3. ABOUT SECTION */}
            <div className="relative">
                {/* Subtle Background Glow for About Section */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

                <section className="relative z-10 transition-all duration-1000">
                    <About />
                </section>
            </div>

            {/* 5. FOOTER */}
            <Footer />
        </div>
    );
}