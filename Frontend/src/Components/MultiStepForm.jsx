import React, { useState } from "react";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);

    return (
        <div>
            {/* Progress Bar */}
            <div className="flex mb-6">
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className={`flex-1 h-2 mx-1 rounded-full ${step >= s ? "bg-indigo-500" : "bg-gray-300"
                            } transition-all duration-500`}
                    />
                ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
                <div className="space-y-4">
                    <input className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 transition" placeholder="Full Name" />
                    <input className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 transition" placeholder="Roll Number" />
                    <button className="w-full bg-indigo-500 text-white py-3 rounded-xl hover:bg-indigo-600" onClick={() => setStep(2)}>Next</button>
                </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
                <div className="space-y-4">
                    <input className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 transition" placeholder="Email" />
                    <input className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 transition" placeholder="Phone" />
                    <button className="w-full bg-indigo-500 text-white py-3 rounded-xl hover:bg-indigo-600" onClick={() => setStep(3)}>Next</button>
                </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
                <div className="space-y-4">
                    <input className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 transition" placeholder="Current Status / Occupation" />
                    <input className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 transition" placeholder="Social Profile / LinkedIn" />
                    <button className="w-full bg-indigo-500 text-white py-3 rounded-xl hover:bg-indigo-600">Submit</button>
                </div>
            )}
        </div>
    );
}