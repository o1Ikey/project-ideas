import express from "express";
import { SignUpControllers } from "../../controllers/SignUp.controller.js";

const router = express.Router();

router.route("/").post(SignUpControllers.SignUp);

export const SignUpRoutes = router;
