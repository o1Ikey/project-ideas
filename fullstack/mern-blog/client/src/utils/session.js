export const storeInSession = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const getInSession = (key) => {
  return sessionStorage.getItem(key);
};

export const removeFormSession = (key) => {
  return sessionStorage.removeItem(key);
};

export const logOutUser = () => {
  sessionStorage.clear;
};
