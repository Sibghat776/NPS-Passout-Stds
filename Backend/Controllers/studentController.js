import Student from "../Models/Student.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { createError, createSuccess } from "../utils/commonFunctions.js";

// ================= REGISTER STUDENT =================
export const register = async (req, res, next) => {
    try {
        const {
            studentName, fatherName, contactNo, email,
            jobTitle, address, gender, status, batch, course, lastClass
        } = req.body;

        // ✅ 1. Required fields check
        const missingFields = [];
        if (!studentName) missingFields.push("studentName");
        if (!fatherName) missingFields.push("fatherName");
        if (!contactNo) missingFields.push("contactNo");
        if (!email) missingFields.push("email");
        if (!jobTitle) missingFields.push("jobTitle");
        if (!address) missingFields.push("address");
        if (!gender) missingFields.push("gender");
        if (!status) missingFields.push("status");
        if (!batch) missingFields.push("batch");
        if (!course) missingFields.push("course");
        if (!lastClass) missingFields.push("lastClass");

        if (missingFields.length > 0) {
            return next(createError(400, `Missing fields: ${missingFields.join(", ")}`));
        }

        // ✅ 2. Email format check
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return next(createError(400, "Please enter a valid email address"));
        }


        if (!/^\d{11}$/.test(contactNo)) {
            return next(createError(400, "Please enter a valid 11-digit contact number"));
        }

        // ✅ 4. Duplicate check
        const existingStudent = await Student.findOne({ email: req.body.email });
        console.log(existingStudent)
        if (existingStudent == contactNo) {
            return next(createError(400, "This contact number is already registered"));
        }


        // ✅ 5. Profile pic check + Cloudinary upload — sabse aakhir mein
        if (!req.file) {
            return next(createError(400, "Profile Picture is Required!"));
        }
        const result = await uploadToCloudinary(req.file.buffer, "uploads");
        const profilePicUrl = result.secure_url;

        // ✅ 6. Save student
        const student = new Student({
            studentName, fatherName, contactNo, email,
            jobTitle, address, gender, status,
            batch, course, lastClass,
            profilePic: profilePicUrl
        });
        // console.log(student)
        const savedStudent = await student.save();
        // console.log(savedStudent)
        res.status(201).json(createSuccess(201, "Student registered successfully", savedStudent));

    } catch (error) {
        next(error);
    }
};

// ================= GET ALL StudentS =================
export const getStudents = async (req, res, next) => {
    try {
        const Students = await Student.find().sort({ createdAt: -1 });

        res.status(200).json(
            createSuccess(200, "Students fetched successfully", Students)
        );
    } catch (error) {
        next(error);
    }
};

// ================= GET Student BY ID =================
export const getStudentById = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return next(createError(404, "Student not found"));
        }
        const data = createSuccess(200, "Student fetched successfully", student)
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

export const deleteAllStudents = async (req, res, next) => {
    try {
        await Student.deleteMany({});
        const data = createSuccess(200, "All students deleted successfully", null)
        res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
};

export const deleteStudentById = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return next(createError(404, "Student not found"));
        }
        const data = createSuccess(200, "Student deleted successfully", student);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};