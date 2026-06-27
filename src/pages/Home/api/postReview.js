import axios from "axios";

export const postReview = async (payload) => {

  const token = localStorage.getItem("token");

  const headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.post(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/review`,
    payload,
    {
      headers
    }
  );

};