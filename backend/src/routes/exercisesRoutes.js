import express from "express";
import {
  getExercises,
  getExercisesById,
  checkAnswers,
} from "../controllers/exercisesController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getExercises);
router.get("/:id", getExercisesById);
router.post("/checkanswers", requireAuth, checkAnswers);

export default router;
