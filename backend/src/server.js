import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import exercisesRoutes from "./routes/exercisesRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import topicRoutes from "./routes/topicRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const backendRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
dotenv.config({ quiet: true, path: path.join(backendRoot, ".env") });

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  "/materiais",
  express.static(path.join(backendRoot, "storage", "materiais")),
);

// Routes
app.use("/exercises", exercisesRoutes);
app.use("/user", authRoutes);
app.use("/subjects", subjectRoutes);
app.use("/topics", topicRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Api rodando`);
});
