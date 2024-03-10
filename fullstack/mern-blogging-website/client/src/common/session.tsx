export const storeInSession = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export const getInSession = (key: string) => {
  return sessionStorage.getItem(key);
};

export const removeFormSession = (key: string) => {
  return sessionStorage.removeItem(key);
};

export const logOutUser = () => {
  sessionStorage.clear;
};
