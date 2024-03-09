import express from "express";
import { GoogleAuthControllers } from "../../controllers/googleAuth.controller";

const router = express.Router();

router.route("/").post(GoogleAuthControllers.googleAuth);

export const GoogleAuthRoutes = router;
