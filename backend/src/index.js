import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "../src/lib/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
  connectDb();
});
