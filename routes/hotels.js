import express from "express";
const router = express.Router();

// Error 👇🏻
// import { createError } from "../utils/error.js";

// Controllers 👇🏻
import {
  createHotel,
  deleteHotel,
  getHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// Create
router.post("/", verifyAdmin, createHotel);

// Update
router.put("/:id", verifyAdmin, updateHotel);

// Delete
router.delete("/:id", verifyAdmin, deleteHotel);
// Get
router.get("/:id", getHotel);
// Get All
router.get("/", getHotels);
router.get("/:countByCity", getHotels);
router.get("/:countByType", getHotels);
export default router;
