import React from "react";

export default function Hero() {
    return (
        <div className="text-center py-32 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white rounded-b-3xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Stay Connected With Your School Alumni
            </h1>
            <p className="text-lg md:text-xl mb-6">
                Update your profile, track your batchmates, and stay informed about future opportunities.
            </p>
            <a
                href="/register"
                className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
                Join Now
            </a>
        </div>
    );
}