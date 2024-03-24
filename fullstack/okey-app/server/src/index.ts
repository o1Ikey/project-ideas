import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
dotenv.config();
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .then(() => main())
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const main = async () => {
  const app = express();

  const PORT = process.env.PORT;

  app.listen(PORT, () =>
    console.log(
      `Server started on port ${PORT}. GraphQL server started on localhost:${PORT}`
    )
  );
};
