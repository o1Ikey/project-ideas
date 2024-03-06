export type Maybe<T> = null | T;

export type IUserAuthForm = {
  type: "sign-in" | "sign-up";
};

export type IFormData = {
  [key: string]: string;
};
