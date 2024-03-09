import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { env } from "./config/environment";
import { connectToDB } from "./config/mongodb";
import { apiV1 } from "./routes/v1";
import cookieParser from "cookie-parser";
import admin, { ServiceAccount } from "firebase-admin";
dotenv.config();

const serviceAccount: ServiceAccount = {
  projectId: env.PROJECT_ID,
  privateKey: env.PRIVATE_KEY,
  clientEmail: env.CLIENT_EMAIL,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Connect to MongoDB
connectToDB()
  .then(() => console.log("Connect to DB"))
  .then(() => startServer())
  .catch((error: Error) => {
    console.log(`Error:${error}`);
    process.exit(1);
  });

const startServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use("/v1", apiV1);

  const port = env.PORT;
  app.listen(Number(port), env.HOST_NAME, () => {
    console.log(`Server is running at http://${env.HOST_NAME}:${env.PORT}/`);
  });
};
