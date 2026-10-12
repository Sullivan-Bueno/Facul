import express from "express";
import {
  getExercises,
  checkAnswers,
} from "../controllers/exercisesController.js";

const router = express.Router();

router.get("/", getExercises);
router.post("/checkanswers", checkAnswers);

export default router;
