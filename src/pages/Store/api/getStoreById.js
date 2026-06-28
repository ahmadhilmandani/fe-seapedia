import axios from "axios";

export const getStoreById = async (id) => {
  const token = localStorage.getItem("token");

  return axios.get(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/store/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};