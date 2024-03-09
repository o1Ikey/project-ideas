import { getAuth } from "firebase-admin/auth";
import { getDatabase } from "../config/mongodb";
import { UserModel } from "../models/user.model";
import { assertIsError } from "../types/utils";
import { generateUsername } from "./signup.service";
import { isNil } from "lodash";

export const googleAuthService = async (data: { accessToken: string }) => {
  try {
    const { accessToken } = data;

    const decodeUser = await getAuth().verifyIdToken(accessToken);

    let { email, name, picture } = decodeUser;

    picture = picture?.replace("s96-c", "s384-c");

    let user = await getDatabase()
      .collection(UserModel.UserCollectionName)
      .findOne({
        "personalInfo.email": email,
      });

    if (!isNil(user)) {
      throw new Error(
        "This email was signed up without google. Please login with password to access the account"
      );
    }

    const username = email?.split("@")[0];
    const newUsername = username && (await generateUsername(username));

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

    await getDatabase()
      .collection(UserModel.UserCollectionName)
      .insertOne(newUser);

    return newUser;
  } catch (error) {
    console.log(error, "service");
    assertIsError(error);
    throw new Error(error.message);
  }
};
