import { Schema } from "mongoose";
import { Maybe } from "./utils";

export type IPersonalInfo = {
  fullname: string;
  email: string;
  password: string;
  username: string;
  bio: string;
  profileImg: string;
};

export type ISocial = {
  youtube: string;
  instagram: string;
  facebook: string;
  twitter: string;
  github: string;
  website: string;
};

export type IAccountInfo = {
  totalPosts: Number;
  totalReads: Number;
};

export type IUser = {
  personalInfo: IPersonalInfo;
  social?: ISocial;
  accountInfo?: IAccountInfo;
  googleAuth?: boolean;
  blogs?: [Schema.Types.ObjectId];
  createdAt?: Date;
  updatedAt?: Maybe<Date>;
};
