import { Request, Response } from "express";
import { assertIsError } from "../types/utils";
import { googleAuthService } from "../services/googleAuth.service";

const googleAuth = async (req: Request, res: Response) => {
  try {
    const newUser = await googleAuthService(req.body);
    res.status(201).json({
      data: newUser,
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

export const GoogleAuthControllers = { googleAuth };
