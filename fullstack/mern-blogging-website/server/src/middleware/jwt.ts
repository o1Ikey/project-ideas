import { WithId } from "mongodb";
import { IUser } from "../types/user.type";
import jwt from "jsonwebtoken";
import { env } from "../config/environment";

export const generateAccessToken = (user: WithId<Document>) =>
  jwt.sign({ _id: user._id }, env.JWT_SECRET, {
    expiresIn: "1h",
  });

export const generateRefreshToken = (user: WithId<Document>) =>
  jwt.sign({ _id: user._id }, env.JWT_SECRET, {
    expiresIn: "2h",
  });
