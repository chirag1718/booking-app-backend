import express from "express";
const router = express.Router();

// Error 👇🏻
// import { createError } from "../utils/error.js";



// Controllers 👇🏻
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";

// Create
router.post("/", createHotel);

// Update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id", deleteHotel);
// Get
router.get("/:id", getHotel);
// Get All
router.get("/", getAllHotels);
export default router;
