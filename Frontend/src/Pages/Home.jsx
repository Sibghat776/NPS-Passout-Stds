import React from "react";
import Hero from "../Components/Hero.jsx";
import Navbar from "../Components/Navbar.jsx";
import About from "../Components/About.jsx";
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx";

const features = [
    { title: "Update Your Profile", icon: "📄" },
    { title: "Track Free / Active Students", icon: "✅" },
    { title: "Connect with Alumni", icon: "🤝" },
    { title: "Explore Opportunities", icon: "🚀" },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50">
            <Navbar />
            <Hero />
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
}