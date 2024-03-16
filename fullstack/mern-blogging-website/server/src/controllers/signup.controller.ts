import { Request, Response } from "express";
import { assertIsError } from "../types/utils";
import { signUpServer } from "../services/signup.service";

const signUp = async (req: Request, res: Response) => {
  try {
    const user = await signUpServer(req.body);

    res.status(201).json({
      data: user,
      code: 201,
      message: "User is successfully Sign Up",
    });
  } catch (error) {
    console.log(error, "controller");
    assertIsError(error);
    res.status(403).json({
      error: `${error.message}`,
    });
  }
};

export const SignupControllers = { signUp };
