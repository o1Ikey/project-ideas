import express from "express";
import { SignUpRoutes } from "./SignUp.route.js";
import { SignInRoutes } from "./SignIn.route.js";

const route = express.Router();

route.use("/signup", SignUpRoutes);
route.use("/signin", SignInRoutes);
// route.use("/google-auth", GoogleAuthRoutes);

export const apiV1 = route;
