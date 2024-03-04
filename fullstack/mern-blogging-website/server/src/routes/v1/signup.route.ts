import express from "express";
import { SignUpValidations } from "../../validations/signup.validation";
import { SignupControllers } from "../../controllers/signup.controller";

const router = express.Router();

router.route("/").post(SignUpValidations.signUp, SignupControllers.signUp);

export const SignUpRoutes = router;
