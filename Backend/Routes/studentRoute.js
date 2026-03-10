import e from "express"
import { deleteAllStudents, deleteStudentById, getStudentById, getStudents, register } from "../Controllers/studentController.js"
import upload from "../utils/upload.js"

export const studentRouter = e.Router()


studentRouter.post("/register", upload.single("profilePic"), register)
studentRouter.get("/getStudents", getStudents)
studentRouter.get("/getStudent/:id", getStudentById)
studentRouter.delete("/deleteStudent/:id", deleteStudentById)
studentRouter.delete("/deleteAllStudents", deleteAllStudents)