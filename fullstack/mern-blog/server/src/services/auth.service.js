import bcrypt from "bcrypt";

import User from "../models/user.js";
import { nanoid } from "nanoid";

export const formatValueSend = async (value) => {
  const { password, email } = value;

  const newUsername = await generateUsername(email);
  const hashedPassword = await generatePassword(password);

  const isDuplicateEmail = await isEmailUnique(email);

  if (isDuplicateEmail) {
    throw new Error("Email already exists");
  }
  const result = new User({
    personalInfo: {
      ...value,
      username: newUsername,
      password: hashedPassword,
    },
  });

  return result;
};

export const generateUsername = async (email) => {
  let username = email.split("@")[0];
  let isUsernameNotUnique = await User.exists({
    "personalInfo.username": username,
  });

  isUsernameNotUnique ? (username += nanoid().substring(0, 5)) : "";

  return username;
};
export const generatePassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

export const isEmailUnique = async (email) => {
  let checkedEmail = await User.findOne({ "personalInfo.email": email });

  return !!checkedEmail;
};
