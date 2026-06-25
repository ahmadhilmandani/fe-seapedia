import axios from "axios";

export const changePassword = async (payload) => {
  const token = localStorage.getItem("token");

  return axios.put(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/profile/password`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};