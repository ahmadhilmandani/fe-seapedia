import axios from "axios"

export const signIn = async (payload = '') => {
  const token = localStorage.getItem('token')

  return axios.post(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/auth/sign-in`,
    payload
  )
}