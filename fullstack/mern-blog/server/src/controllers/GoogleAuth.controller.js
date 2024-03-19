import { getAuth } from "firebase-admin/auth";
import { generateUsername } from "../services/auth.service.js";
import User from "../models/user.js";
import { isNil } from "lodash-es";

const GoogleAuth = async (req, res) => {
  try {
    const { accessToken } = req.body;
    const decodeUser = await getAuth().verifyIdToken(accessToken);

    let { email, name, picture } = decodeUser;

    let user = await User.findOne({
      "personalInfo.email": email,
    });

    if (!isNil(user)) {
      return res.status(409).json({
        error:
          "This email was signed up without google. Please login with password to access the account",
      });
    }

    picture = picture?.replace("s96-c", "s384-c");
    const newUsername = await generateUsername(email);
    console.log(newUsername, "newUsername");
    const newUser = {
      personalInfo: {
        fullname: name,
        email: email ?? "",
        bio: "",
        profileImg: picture ?? "",
        username: newUsername ?? "",
      },
      googleAuth: true,
      accessToken,
    };

    res.status(201).json({
      data: newUser,
      code: 201,
      message: "User is successfully Sign In",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const GoogleAuthControllers = {
  GoogleAuth,
};
