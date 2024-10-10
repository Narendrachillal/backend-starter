import express from "express";
import { authRouter } from "./auth.route.js";
import { userRouter } from "./user.route.js";

export const indexRouter = express.Router();

indexRouter.use("/api/v1/user", userRouter);
indexRouter.use("/api/v1/auth", authRouter);
