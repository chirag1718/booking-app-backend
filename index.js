import express from "express";
const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

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
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

// Route Middleware
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/rooms", roomsRoute);
app.use("/api/v1/hotels", hotelsRoute);

// Server Connection
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is up and running");
});
