import {
  generateAccessToken,
  generateRefreshToken,
} from "../middleware/jwt.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { isNil } from "lodash-es";

const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      "personalInfo.email": email,
    });

    if (isNil(user)) {
      return res.status(404).json({
        error: "Email not Found",
      });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    if (user?.googleAuth) {
      return res.status(409).json({
        error: "Email was created using google. try logging in with google",
      });
    }

    const comparedPassword = bcrypt.compare(
      password,
      user.personalInfo.password
    );

    if (!comparedPassword) {
      return res.status(404).json({
        error: "Password don't match",
      });
    }

    res.cookie("REFRESH_TOKEN", refreshToken, {
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      data: {
        user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
      code: 201,
      message: "User is successfully Sign In",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const SignInControllers = {
  SignIn,
};
