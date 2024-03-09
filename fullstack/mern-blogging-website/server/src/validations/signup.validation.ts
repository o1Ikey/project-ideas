import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { IUser } from "../types/user.type";
import { assertIsError } from "../types/utils";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const conditions = Joi.object<IUser>({
    personalInfo: {
      fullname: Joi.string().required().min(3).trim(),
      email: Joi.string().email().required().trim(),
      password: Joi.string().required().trim(),
    },
  });

  try {
    await conditions.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error: unknown) {
    console.log(error, "validation");
    assertIsError(error);
    res.status(403).json({
      error: `${error.message}`,
    });
  }
};

export const SignUpValidations = {
  signUp,
};
