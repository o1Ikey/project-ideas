import { nanoid } from "nanoid";
import { getDatabase } from "../config/mongodb";
import { UserModel } from "../models/user.model";
import { IUser } from "../types/user.type";
import { assertIsError } from "../types/utils";
import bcrypt from "bcrypt";

export const signUpServer = async (data: IUser) => {
  try {
    const value = await UserModel.validationSchema(data);
    const checkEmail = await isEmailUnique(value.personalInfo.email);

    if (checkEmail) {
      throw new Error("Email already exists");
    }
    const newUser = await formatValueSend(value);

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

export const formatValueSend = async (value: IUser): Promise<IUser> => {
  const { personalInfo } = value;
  const { password, email } = personalInfo;

  let username = email.split("@")[0];
  const newUsername = await generateUsername(username);
  const hashPassword = await generatePassword(password);

  const result: IUser = {
    ...value,
    personalInfo: {
      ...value.personalInfo,
      username: newUsername,
      password: hashPassword,
    },
  };
  return result;
};

const generatePassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const generateUsername = async (username: string) => {
  let isUsernameNotUnique = await getDatabase()
    .collection(UserModel.UserCollectionName)
    .findOne({ "personalInfo.username": username });

  isUsernameNotUnique ? (username += nanoid().substring(0, 5)) : "";

  return username;
};

const isEmailUnique = async (email: string) => {
  let checkedEmail = await getDatabase()
    .collection(UserModel.UserCollectionName)
    .findOne({ "personalInfo.email": email });

  return !!checkedEmail;
};
