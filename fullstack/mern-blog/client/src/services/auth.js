import axios from "axios";
import toast from "react-hot-toast";

export const userAuthThroughServer = async (serverRoute, value) => {
  try {
    const { data } = await axios.post(
      import.meta.env.VITE_SERVER_DOMAIN + serverRoute,
      value
    );

    toast.success(data.message);
    return data;
  } catch ({ response }) {
    return toast.error(response.data.error);
  }
};
