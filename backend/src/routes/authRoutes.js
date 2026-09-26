import express from "express";
import { authUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/auth", authUser);

export default router;
