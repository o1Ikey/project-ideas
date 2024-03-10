import { createContext, useContext } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type IUserContext = {
  userAuth: any;
  setUserAuth: (value: any) => void;
};

export const UserContext = createContext<IUserContext>({
  userAuth: "",
  setUserAuth: () => {},
});

export const useUserContext = () => useContext(UserContext);
