import User from "../models/user.js";
import bcrypt from "bcrypt";

const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      "personalInfo.email": email,
    });

    if (user?.googleAuth) {
      return res.status(409).json({
        error: "Email was created using google. try logging in with google",
      });
    }
    if (!user) {
      return res.status(404).json({
        error: "Email not Found",
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

    return res.status(200).json({
      data: user,
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
