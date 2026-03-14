import Registration from "../Models/Student.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { createError, createSuccess } from "../utils/commonFunctions.js";

// ================= REGISTER STUDENT =================
export const register = async (req, res, next) => {
    console.log("Student Registration Start...", req.body, "+", req.file)
    try {
        const { studentName, fatherName, contactNo, email, jobTitle, address, gender, status, batch, course, lastClass } = req.body;

        if (!studentName || !fatherName || !contactNo || !email || !address || !gender || !status || !batch || !course || !lastClass) {
            let missingFields = [];
            switch (true) {
                case !studentName: missingFields.push("studentName"); break;
                case !fatherName: missingFields.push("fatherName"); break;
                case !contactNo: missingFields.push("contactNo"); break;
                case !email: missingFields.push("email"); break;
                case !address: missingFields.push("address"); break;
                case !gender: missingFields.push("gender"); break;
                case !status: missingFields.push("status"); break;
                case !batch: missingFields.push("batch"); break;
                case !course: missingFields.push("course"); break;
                case !lastClass: missingFields.push("lastClass"); break;
            }
            return next(createError(400, `Please fill all fields. Missing fields: ${missingFields.join(", ")}`));
        }
        if (email && !/^\S+@\S+\.\S+$/.test(email)) {
            return next(createError(400, "Please enter a valid email address"));
        }
        const existingStudent = await Registration.findOne({ contactNo, email });
        if (existingStudent) {
            return next(createError(400, "Student with this contact number and email already exists"));
        }

        let profilePicUrl = null;
        if (!req.file) {
            return next(createError(400, "Profile Picture is Required!"));
        }
        if (req.file) {
            let result = await uploadToCloudinary(req.file.buffer, "uploads")
            console.log(result.secure_url)
            profilePicUrl = result.secure_url;
        }
        if (contactNo && !/^\d{11}$/.test(contactNo)) {
            return next(createError(400, "Please enter a valid 11-digit contact number"));
        }
        console.log(profilePicUrl)
        const student = new Registration({
            studentName,
            fatherName,
            contactNo,
            email,
            jobTitle,
            address,
            gender,
            status,
            batch,
            course,
            lastClass,
            profilePic: profilePicUrl
        });
        let savedStudent = await student.save();
        let data = createSuccess(201, "Student registered successfully", savedStudent);
        res.status(201).json(data);

    } catch (error) {
        next(error);
    }
};

// ================= GET ALL REGISTRATIONS =================
export const getStudents = async (req, res, next) => {
    try {
        const registrations = await Registration.find().sort({ createdAt: -1 });

        res.status(200).json(
            createSuccess(200, "Students fetched successfully", registrations)
        );
    } catch (error) {
        next(error);
    }
};

// ================= GET REGISTRATION BY ID =================
export const getStudentById = async (req, res, next) => {
    try {
        const student = await Registration.findById(req.params.id);

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
        await Registration.deleteMany({});
        const data = createSuccess(200, "All students deleted successfully", null)
        res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
};

export const deleteStudentById = async (req, res, next) => {
    try {
        const student = await Registration.findByIdAndDelete(req.params.id);
        if (!student) {
            return next(createError(404, "Student not found"));
        }
        const data = createSuccess(200, "Student deleted successfully", student);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};