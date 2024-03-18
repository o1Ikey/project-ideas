import express from "express";
import { GoogleAuthControllers } from "../../controllers/GoogleAuth.controller.js";

const router = express.Router();

router.route("/").post(GoogleAuthControllers.GoogleAuth);

export const GoogleAuthRoutes = router;
