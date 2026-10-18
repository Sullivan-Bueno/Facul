import express from "express";
import { authUser, createStudent } from "../controllers/authController.js";
import { requireAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/", requireAdmin, createStudent);

export default router;
