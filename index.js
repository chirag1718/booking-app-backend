import express from "express";
const app = express();

// DB and Middleware imports
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";

// Local imports
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

// DB Connection
const db = process.env.DB_CONNECT;
mongoose.set("strictQuery", true);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log(e));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Route Middleware
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/rooms", roomsRoute);
app.use("/api/v1/hotels", hotelsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Server Connection
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Backend Server is up and running");
});
