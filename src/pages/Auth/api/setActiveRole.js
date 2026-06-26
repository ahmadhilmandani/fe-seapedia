import axios from "axios";

export const setActiveRole = async (roleId) => {
  const token = localStorage.getItem("token");

  return axios.post(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/auth/set-active-role`,
    {
      role: roleId
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};