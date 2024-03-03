import Joi from "joi";
import { IUser } from "../types/user.type";

let profile_imgs_name_list = [
  "Garfield",
  "Tinkerbell",
  "Annie",
  "Loki",
  "Cleo",
  "Angel",
  "Bob",
  "Mia",
  "Coco",
  "Gracie",
  "Bear",
  "Bella",
  "Abby",
  "Harley",
  "Cali",
  "Leo",
  "Luna",
  "Jack",
  "Felix",
  "Kiki",
];
let profile_imgs_collections_list = [
  "notionists-neutral",
  "adventurer-neutral",
  "fun-emoji",
];

const UserCollectionName = "users";
const UserCollectionSchema = Joi.object<IUser>({
  personalInfo: {
    fullname: Joi.string().min(3).trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().required().trim(),
    username: Joi.string().trim(),
    bio: Joi.string().max(200).trim(),
    profileImg: Joi.string()
      .trim()
      .default(() => {
        return `https://api.dicebear.com/6.x/${
          profile_imgs_collections_list[
            Math.floor(Math.random() * profile_imgs_collections_list.length)
          ]
        }/svg?seed=${
          profile_imgs_name_list[
            Math.floor(Math.random() * profile_imgs_name_list.length)
          ]
        }`;
      }),
  },
  social: {
    youtube: Joi.string().trim(),
    instagram: Joi.string().trim(),
    facebook: Joi.string().trim(),
    twitter: Joi.string().trim(),
    github: Joi.string().trim(),
    website: Joi.string().trim(),
  },
  accountInfo: {
    totalPosts: Joi.number().default(0),
    totalReads: Joi.number().default(0),
  },
  blogs: Joi.array().items(Joi.string()).default([]),
  googleAuth: Joi.boolean(),
  createdAt: Joi.date().timestamp().default(Date.now),
  updatedAt: Joi.date().timestamp().default(null),
});

const validationSchema = async (data: IUser) => {
  return await UserCollectionSchema.validateAsync(data, {
    abortEarly: false,
  });
};

export const UserModel = {
  UserCollectionName,
  UserCollectionSchema,
  validationSchema,
};
