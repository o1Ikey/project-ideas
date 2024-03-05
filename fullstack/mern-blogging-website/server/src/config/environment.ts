require("dotenv").config();

export const env = {
  PORT: process.env.PORT ?? 0,
  HOST_NAME: process.env.HOST_NAME ?? "",
  MONGODB_URI: process.env.MONGODB_URI ?? "",
  DATABASE_NAME: process.env.DATABASE_NAME ?? "",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET ?? "",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET ?? "",
  JWT_SECRET: process.env.JWT_SECRET ?? "",
};
