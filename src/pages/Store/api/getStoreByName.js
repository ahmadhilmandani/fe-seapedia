import axios from "axios";

export const getStoreByName = async (storeName) => {
  const token = localStorage.getItem("token");

  return axios.get(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/store/${storeName}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};