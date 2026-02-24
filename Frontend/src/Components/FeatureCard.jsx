import React from "react";

export default function FeatureCard({ title, icon }) {
    return (
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="font-semibold text-lg">{title}</h3>
        </div>
    );
};