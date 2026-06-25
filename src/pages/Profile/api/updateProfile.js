import axios from "axios";

export const updateProfile = async (payload) => {
  const token = localStorage.getItem("token");

  return axios.put(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/profile/general-info`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};