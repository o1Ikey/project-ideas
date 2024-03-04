import { Request, Response } from "express";
import { assertIsError } from "../types/utils";
import { signInServer } from "../services/signin.service";

const signIn = async (req: Request, res: Response) => {
  try {
    const result = await signInServer(req.body);

    res.status(201).json({
      data: result,
      code: 201,
      message: "User is successfully Sign In",
    });
  } catch (error) {
    console.log(error, "controller");
    assertIsError(error);
    res.status(403).json({
      error: `Things exploded (${error.message})`,
    });
  }
};

export const SignInControllers = { signIn };
