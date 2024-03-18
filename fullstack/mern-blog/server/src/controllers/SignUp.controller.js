import { formatValueSend } from "../services/auth.service.js";

const SignUp = async (req, res) => {
  try {
    const newUser = await formatValueSend(req.body);

    await newUser.save();

    return res.status(200).json({
      data: newUser,
      code: 201,
      message: "User is successfully Sign Up",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const SignUpControllers = {
  SignUp,
};
