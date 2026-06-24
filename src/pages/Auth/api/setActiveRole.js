import axios from "axios"

export const setActiveRole = async (payload = '') => {
  const token = localStorage.getItem('token')

  return axios.post(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/auth/set-active-role`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}