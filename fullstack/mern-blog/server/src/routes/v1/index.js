import express from "express";
import { SignUpRoutes } from "./SignUp.route.js";
import { SignInRoutes } from "./SignIn.route.js";
import { GoogleAuthRoutes } from "./GoogleAuth.route.js";

const route = express.Router();

route.use("/signup", SignUpRoutes);
route.use("/signin", SignInRoutes);
route.use("/googleAuth", GoogleAuthRoutes);

export const apiV1 = route;
