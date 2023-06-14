import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin,  verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// Update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);
// Get
router.get("/:id", verifyUser, getUser);
// Get All
router.get("/", verifyAdmin, getAllUsers);

export default router;
