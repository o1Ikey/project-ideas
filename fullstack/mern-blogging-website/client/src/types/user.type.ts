import { Maybe } from "./common";

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
  totalPosts: number;
  totalReads: number;
};

export type IUser = {
  personalInfo: IPersonalInfo;
  social?: ISocial;
  accountInfo?: IAccountInfo;
  googleAuth?: boolean;
  blogs?: string;
  createdAt?: Date;
  updatedAt?: Maybe<Date>;
};
