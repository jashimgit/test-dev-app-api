import * as dotenv from "dotenv";
dotenv.config();

export default {
  APP_ID: "brainio",
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: process.env.PORT ?? 4000,
  MONGODB_URL:
    process.env.MONGODB_URL ??
    "mongodb+srv://nodemongo:modemongo@cluster0.vewnd.mongodb.net/brainiotest?retryWrites=true&w=majority",
  APP_SECRET: process.env.APP_SECRET,
  BASE_URL: process.env.BASE_URL ?? "http://localhost:4000",
  APP_URL: process.env.APP_URL ?? "http://localhost:4000",
  EMAIL_NAME: process.env.EMAIL_NAME,
  EMAIL_FROM: process.env.EMAIL_FROM,

  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};
