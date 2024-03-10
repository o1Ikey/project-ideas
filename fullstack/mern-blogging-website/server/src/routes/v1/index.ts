import express from "express";
import { SignUpRoutes } from "./signup.route";
import { SignInRoutes } from "./signin.route";
import { GoogleAuthRoutes } from "./googleAuth.route";

const route = express.Router();

route.use("/signup", SignUpRoutes);
route.use("/signin", SignInRoutes);
route.use("/google-auth", GoogleAuthRoutes);

export const apiV1 = route;
