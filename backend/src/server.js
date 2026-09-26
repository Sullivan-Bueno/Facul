import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ quiet: true, path: "../.env" });

const app = express();
app.use(express.json());
app.use(cors());

app.get("/teste", (req, res) => {
  try {
  } catch (err) {}
});

app.listen(process.env.PORT, () => {
  console.log(`Api rodando`);
});
