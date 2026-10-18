import express from "express";
import { getTopic } from "../controllers/subjectController.js";

const router = express.Router();

router.get("/:id", getTopic);

export default router;
