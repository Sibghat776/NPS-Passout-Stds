import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import mongoose from "mongoose"
import { studentRouter } from "./Routes/studentRoute.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(helmet())

app.use("/api/student", studentRouter)

// ✅ Error Handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went Wrong"
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  })
})

// ✅ DB Connection — caching (Vercel serverless ke liye zarori)
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return; // ✅ Already connected toh dobara connect mat karo

  const MONGO = process.env.MONGO;
  if (!MONGO) throw new Error("MONGO URI missing in environment variables");

  await mongoose.connect(MONGO); // ✅ Options hatao — Mongoose 7+ mein zarori nahi

  isConnected = true;
  console.log("✅ MongoDB Connected");
};

// ✅ Local server
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  connectDB()
    .then(() => {
      app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => {
      console.error("❌ DB connection failed:", err);
      process.exit(1);
    });
}

// ✅ Vercel ke liye — har request pe DB connect karo
await connectDB();

export default app;