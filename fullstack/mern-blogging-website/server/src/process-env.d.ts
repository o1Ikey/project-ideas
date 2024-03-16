export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: number;
      HOST_NAME: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
      JWT_SECRET: string;
      TYPE: string;
      PROJECT_ID: string;
      PRIVATE_KEY_ID: string;
      PRIVATE_KEY: string;
      CLIENT_EMAIL: string;
      CLIENT_ID: string;
      AUTH_URI: string;
      TOKEN_URI: string;
      AUTH_PROVIDER_X509_CERT_URL: string;
      CLIENT_X509_CERT_URL: string;
      UNIVERSE_DOMAIN: string;
    }
  }
}
