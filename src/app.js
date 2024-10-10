import express from "express";
import { indexRouter } from "./routes/index.route.js";

export const app = express();

app.use(express.json());

indexRouter.post("/", indexRouter);
