import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, BookOpen, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

const Profile = () => {
    const navigate = useNavigate();

    // ✅ Sirf localStorage se lo — Redux list ki zaroorat nahi yahan
    const student = JSON.parse(localStorage.getItem("student"));

    // ✅ Data nahi mila → form pe bhejo
    if (!student) {
        navigate("/form");
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={student.profilePic}
                        alt="Student Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow-md"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-blue-950 tracking-tight">
                            {student.studentName}
                        </h1>
                        <p className="text-lg text-gray-600 font-medium mt-1">
                            {student.course} | Batch {student.batch}
                        </p>
                        <div className="flex items-center gap-2 mt-3 justify-center md:justify-start text-sm text-gray-500">
                            <MapPin size={16} />
                            <span>{student.address}</span>
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <InfoCard title="Personal Details" icon={User}>
                            <InfoItem icon={User} label="Father's Name" value={student.fatherName} />
                            <InfoItem icon={VenusMars} label="Gender" value={student.gender} />
                            <InfoItem icon={Mail} label="Email Address" value={student.email} />
                            <InfoItem icon={Phone} label="Contact Number" value={student.contactNo} />
                        </InfoCard>

                        <InfoCard title="Academic Background" icon={GraduationCap}>
                            <InfoItem icon={BookOpen} label="Current Course" value={student.course} />
                            <InfoItem icon={Calendar} label="Passing Batch" value={student.batch} />
                            <InfoItem icon={Award} label="Last Qualification" value={student.lastClass} />
                        </InfoCard>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                                Professional Status
                            </h3>
                            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${student.status === 'FREE' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                {student.status}
                            </span>
                            {student.jobTitle && (
                                <p className="text-sm text-gray-600 mt-3 font-medium">
                                    <Briefcase size={16} className="inline mr-1.5 text-gray-400" />
                                    {student.jobTitle}
                                </p>
                            )}
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-blue-950 mb-5">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full bg-blue-950 text-white py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors duration-200">
                                    Edit Profile
                                </button>
                                <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200">
                                    Download ID Card
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// ─── Helper Components ───────────────────────────────

const InfoCard = ({ title, icon: Icon, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-5">
            <Icon className="text-blue-900" size={24} />
            <h2 className="text-2xl font-bold text-blue-950">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {children}
        </div>
    </div>
);

const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 p-2 rounded-lg bg-gray-100">
            <Icon className="text-gray-500" size={18} />
        </div>
        <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</p>
            <p className="text-lg font-semibold text-gray-900 mt-0.5">{value || 'N/A'}</p>
        </div>
    </div>
);

const VenusMars = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M16 16l3 3" />
        <path d="M19 14v5h-5" />
        <path d="M9 9l-3 -3" />
        <path d="M3 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
);

export default Profile;