import { getDatabase } from "../config/mongodb";
import { UserModel } from "../models/user.model";
import { IUser } from "../types/user.type";
import { assertIsError } from "../types/utils";
import bcrypt from "bcrypt";

export const signInServer = async (data: IUser) => {
  try {
    const value = await UserModel.validationSchema(data);
    console.log(value, "value");

    const user = await getDatabase()
      .collection(UserModel.UserCollectionName)
      .findOne({
        "personalInfo.email": value.personalInfo.email,
      });

    if (user?.googleAuth) {
      throw new Error(
        "Email was created using google. try logging in with google"
      );
    }
    if (!user) {
      throw new Error("Email not found");
    }

    const comparedPassword = await bcrypt.compare(
      value.personalInfo.password,
      user.personalInfo.password
    );

    if (!comparedPassword) {
      throw new Error("Password doesn't match");
    }
    return user;
  } catch (error) {
    console.log(error, "service");
    assertIsError(error);
    throw new Error(error.message);
  }
};
