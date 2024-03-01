import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { env } from "./config/environment";
import { connectToDB } from "./config/mongodb";

// Connect to MongoDB
connectToDB()
  .then(() => console.log("Connect to DB"))
  .then(() => startServer())
  .catch((error: Error) => {
    console.log(`Error:${error}`);
    process.exit(1);
  });

const startServer = () => {
  const app = express();

  const port = env.PORT;
  app.listen(Number(port), env.HOST_NAME, () => {
    console.log(`Server is running at http://${env.HOST_NAME}:${env.PORT}/`);
  });
};
