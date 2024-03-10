import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/environment";

interface IUserRequest extends Request {
  user: string | jwt.JwtPayload | undefined; //decode;
}

export const verifyAccessToken = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Token not found",
    });

  await jwt.verify(token, env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err)
      return res.status(401).json({
        success: false,
        message: "Invalid access token",
      });

    console.log(decode, "decode");
    req.user = decode;
    next();
  });
};
