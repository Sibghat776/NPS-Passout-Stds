import React from "react";
import Hero from "../Components/Hero.jsx";
import Navbar from "../Components/Navbar.jsx";
import About from "../Components/About.jsx";
import Footer from "../Components/Footer.jsx";
import { Users, Rocket, CheckCircle, Edit } from "lucide-react"; // Icons for features

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* 🔹 HERO SECTION */}
            <Hero />

            {/* 🔹 ABOUT SECTION */}
            <div className="mt-1">
                <About />
            </div>

            {/* 🔹 FOOTER */}
            <Footer />
        </div>
    );
}