import express from "express";
import { SignInValidations } from "../../validations/signin.validation";
import { SignInControllers } from "../../controllers/signin.controller";

const router = express.Router();

router.route("/").post(SignInValidations.signIn, SignInControllers.signIn);

export const SignInRoutes = router;
