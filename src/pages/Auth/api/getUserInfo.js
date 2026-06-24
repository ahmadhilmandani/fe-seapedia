import axios from "axios"

export const getUserInfo = async (payload = '') => {
  const token = localStorage.getItem('token')

  return axios.get(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/auth/get-user-info`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}