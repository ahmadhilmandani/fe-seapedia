import axios from "axios";

export const getReview = async () => {

  return axios.get(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/review`
  );

};