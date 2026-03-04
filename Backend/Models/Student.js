import mongoose from "mongoose"

const StudentSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    contactNo: { type: String, unique: true, sparse: true },
    email: { type: String, required: true },
    jobTitle: { type: String, optional: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    city: { type: String, optional: true }
}, { timestamps: true })

export default mongoose.model("Student", StudentSchema)
