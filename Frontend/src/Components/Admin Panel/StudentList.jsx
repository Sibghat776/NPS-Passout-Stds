import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search, Filter, MoreVertical, Edit2, Trash2, Eye, CheckCircle, Clock } from 'lucide-react';

const StudentList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // Assuming students data is coming from Redux store
    const students = useSelector((state) => state.students);
    console.log(students)

    // Filter logic based on search
    const filteredStudents = students.list.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-transparent animate-in fade-in duration-500">
            {/* --- Header Section --- */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-3xl font-black text-white tracking-tight">
                    Student <span className="text-blue-500">Database</span>
                </h2>

                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-full bg-richBlack/50 border border-white/10 backdrop-blur-md py-3 pl-12 pr-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* --- Data Table Container (Glassmorphism) --- */}
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="p-5 text-gray-400 font-bold uppercase text-xs tracking-widest">Student Info</th>
                                <th className="p-5 text-gray-400 font-bold uppercase text-xs tracking-widest">Status</th>
                                <th className="p-5 text-gray-400 font-bold uppercase text-xs tracking-widest">Enrollment</th>
                                <th className="p-5 text-gray-400 font-bold uppercase text-xs tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="group hover:bg-white/5 transition-all duration-300">
                                    {/* Student Identity */}
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-black text-white shadow-lg">
                                                {student.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">{student.name}</div>
                                                <div className="text-gray-500 text-sm">{student.email}</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Status Badge */}
                                    <td className="p-5">
                                        {student.isVerified ? (
                                            <span className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                                <CheckCircle size={14} /> Verified
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold">
                                                <Clock size={14} /> Pending
                                            </span>
                                        )}
                                    </td>

                                    {/* Date */}
                                    <td className="p-5 text-gray-300 font-medium">
                                        {student.date || "Oct 24, 2023"}
                                    </td>

                                    {/* Hover Actions */}
                                    <td className="p-5">
                                        <div className="flex justify-end gap-2 opacity-100 transition-opacity duration-300">
                                            <button className="p-2 bg-white/10 hover:bg-blue-500/20 rounded-xl text-blue-400 transition-colors">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 bg-white/10 hover:bg-green-500/20 rounded-xl text-green-400 transition-colors">
                                                <Edit2 size={18} />
                                            </button>
                                            <button className="p-2 bg-white/10 hover:bg-red-500/20 rounded-xl text-red-400 transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentList;