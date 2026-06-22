// import axios from "axios"

// export const signUp = async (payload = '') => {
//   const token = localStorage.getItem('token')

//   return axios.post(
//     `${import.meta.env.VITE_DEV_API_BASE_URL}/purchase`,
//     payload,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   )
// }

import axios from "axios"

export const signUp = async (payload = '') => {
  const token = localStorage.getItem('token')

  return axios.post(
    `${import.meta.env.VITE_DEV_API_BASE_URL}/auth/sign-up`,
    payload
  )
}