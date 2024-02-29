import dotenv from 'dotenv'; 
dotenv.config(); 

import express from "express";
import { env } from './config/environment';

const app = express()

const port = env.PORT

app.listen(Number(port), env.HOST_NAME, () => {
  console.log(`Server is running at http://${env.HOST_NAME}:${env.PORT}/`);
});