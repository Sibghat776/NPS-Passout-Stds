import MultiStepForm from "../Components/MultiStepForm";

export default function Registration() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 px-4">
            <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
                <MultiStepForm />
            </div>
        </div>
    );
}