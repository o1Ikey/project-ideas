require("dotenv").config();

export const env = {
  PORT: process.env.PORT ?? 0,
  HOST_NAME: process.env.HOST_NAME ?? "",
  MONGODB_URI: process.env.MONGODB_URI ?? "",
  DATABASE_NAME: process.env.DATABASE_NAME ?? "",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET ?? "",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET ?? "",
  JWT_SECRET: process.env.JWT_SECRET ?? "",
  TYPE: process.env.TYPE ?? "",
  PROJECT_ID: process.env.PROJECT_ID ?? "",
  PRIVATE_KEY_ID: process.env.PRIVATE_KEY_ID ?? "",
  PRIVATE_KEY: process.env.PRIVATE_KEY ?? "",
  CLIENT_EMAIL: process.env.CLIENT_EMAIL ?? "",
  CLIENT_ID: process.env.CLIENT_ID ?? "",
  AUTH_URI: process.env.AUTH_URI ?? "",
  TOKEN_URI: process.env.TOKEN_URI ?? "",
  AUTH_PROVIDER_X509_CERT_URL: process.env.AUTH_PROVIDER_X509_CERT_URL ?? "",
  CLIENT_X509_CERT_URL: process.env.CLIENT_X509_CERT_URL ?? "",
  UNIVERSE_DOMAIN: process.env.UNIVERSE_DOMAIN ?? "",
};
