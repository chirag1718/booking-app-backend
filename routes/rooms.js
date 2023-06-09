import express from "express";
const router = express.Router();
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailabitlity,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
// Create
router.post("/:hotelid", verifyAdmin, createRoom);

// Update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailabitlity);

// Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// Get
router.get("/:id", getRoom);
// Get All
router.get("/", getAllRooms);
export default router;
