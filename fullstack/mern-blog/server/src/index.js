import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { apiV1 } from "./routes/v1/index.js";
import cookieParser from "cookie-parser";
import admin from "firebase-admin";

dotenv.config();

const serviceAccount = {
  projectId: process.env.PROJECT_ID,
  privateKey: process.env.PRIVATE_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

mongoose
  .connect(process.env.MONGODB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .then(() => startSever())
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

const startSever = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  const PORT = process.env.PORT;
  const HOST_NAME = process.env.HOST_NAME;

  app.use("/v1", apiV1);

  app.listen(PORT, HOST_NAME, () => {
    console.log(`Server is running at http://${HOST_NAME}:${PORT}/`);
  });
};
