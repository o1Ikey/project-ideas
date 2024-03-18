import express from "express";
import { SignInControllers } from "../../controllers/SignIn.controller.js";

const router = express.Router();

router.route("/").post(SignInControllers.SignIn);

export const SignInRoutes = router;
