import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import { studentRouter } from "./Routes/studentRoute.js";

dotenv.config();

const app = express();

// ------------------- Middlewares -------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(helmet());

// ------------------- Routes -------------------
app.use("/api/student", studentRouter);

// Health Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running 🚀",
  });
});

// ------------------- Error Handler -------------------
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went Wrong";

  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

// ------------------- DB Connection -------------------
let isConnected = false;

const connectDB = async () => {
  try {
    if (isConnected) return;

    const MONGO = process.env.MONGO;

    if (!MONGO) {
      throw new Error("MONGO URI missing");
    }

    await mongoose.connect(MONGO);

    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
    throw error;
  }
};

// ------------------- Local Server -------------------
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`🚀 Server running on ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("❌ DB connection failed:", err);
    });
}

// ------------------- Vercel -------------------
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
