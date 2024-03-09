import { Request, Response } from "express";
import { assertIsError } from "../types/utils";
import { signInServer } from "../services/signin.service";
import { generateAccessToken, generateRefreshToken } from "../middleware/jwt";
import { WithId } from "mongodb";

const signIn = async (req: Request, res: Response) => {
  try {
    const user = await signInServer(req.body);

    const accessToken = generateAccessToken(user as WithId<Document>);
    const refreshToken = generateRefreshToken(user as WithId<Document>);

    res.cookie("REFRESH_TOKEN", refreshToken, {
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000,
    });

    res.status(201).json({
      data: {
        ...user,
        accessToken,
        refreshToken,
      },
      code: 201,
      message: "User is successfully Sign In",
    });
  } catch (error) {
    console.log(error, "controller");
    assertIsError(error);
    res.status(403).json({
      error: `${error.message}`,
    });
  }
};

export const SignInControllers = { signIn };
