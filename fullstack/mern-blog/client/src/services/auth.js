import axios from "axios";
import toast from "react-hot-toast";
import { storeInSession } from "../utils/session";

export const userAuthThroughServer = async (serverRoute, value) => {
  try {
    const { data } = await axios.post(
      import.meta.env.VITE_SERVER_DOMAIN + serverRoute,
      value
    );
    storeInSession("user", JSON.stringify(data));
    toast.success(data.message);

    return data;
  } catch ({ response }) {
    toast.error(response.data.error);
    return null;
  }
};
