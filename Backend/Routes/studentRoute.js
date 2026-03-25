import e from "express"
import { deleteAllStudents, deleteStudentById, getStudentById, getStudents, register, updateStudentById } from "../Controllers/studentController.js"
import upload from "../utils/upload.js"

export const studentRouter = e.Router()


studentRouter.post("/register", upload.single("profilePic"), register)
studentRouter.get("/getStudents", getStudents)
studentRouter.get("/getStudent/:id", getStudentById)
studentRouter.put("/updateStudent/:id", upload.single("profilePic"), updateStudentById)
studentRouter.delete("/deleteStudent/:id", deleteStudentById)
studentRouter.delete("/deleteAllStudents", deleteAllStudents)