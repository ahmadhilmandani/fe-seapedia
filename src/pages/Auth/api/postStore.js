import axios from "axios";

export const postStore = async (payload) => {
  const token = localStorage.getItem("token");

  return axios.post(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/store`, payload,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};