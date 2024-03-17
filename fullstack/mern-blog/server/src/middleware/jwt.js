import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1h",
    }
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "2h",
    }
  );
};
