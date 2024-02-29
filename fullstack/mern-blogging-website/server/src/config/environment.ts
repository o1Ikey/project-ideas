require("dotenv").config()

export const env={
    PORT:process.env.PORT ?? 0,
    HOST_NAME:process.env.HOST_NAME ?? '',
    MONGODB_URI:process.env.MONGODB_URI ?? "",
    DATABASE_NAME:process.env.DATABASE_NAME??""
}