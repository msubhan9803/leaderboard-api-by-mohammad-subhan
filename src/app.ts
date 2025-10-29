import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import express from "express";
import router from "@/routes";
import { AppDataSource } from "@/config/data-source";

const app = express();
app.use(express.json());
app.use("/api", router);

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB Connection Error: ", err));

export default app;
