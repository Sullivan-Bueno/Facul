import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

// API config
dotenv.config({ quiet: true, path: "../.env" });

const app = express();
app.use(express.json());
app.use(cors());

// Routes

app.use("/user", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Api rodando`);
});
