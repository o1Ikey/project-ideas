import express from "express";
import { SignUpRoutes } from "./signup.route";
import { SignInRoutes } from "./signin.route";

const route = express.Router();

route.use("/signup", SignUpRoutes);
route.use("/signin", SignInRoutes);

export const apiV1 = route;
