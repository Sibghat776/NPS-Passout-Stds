import Hero from "../Components/Hero";
import FeatureCard from "../Components/FeatureCard";

const features = [
    { title: "Update Your Profile", icon: "📄" },
    { title: "Check Free / Active Students", icon: "✅" },
    { title: "Connect with Alumni", icon: "🤝" },
    { title: "Future Opportunities", icon: "🚀" },
];

export default function Landing() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50">
            <Hero />
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((f, i) => (
                    <FeatureCard key={i} title={f.title} icon={f.icon} />
                ))}
            </div>
        </div>
    );
}