import { token } from '../helpers/token'
import axios from 'axios'

const API_BASE_URL =
  import.meta.env.VITE_URL || 'https://todo-redev.onrender.com/api'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const tok = token.get()
  if (tok) {
    config.headers.Authorization = `Bearer ${tok}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      token.remove()
      console.error('Необходимо авторизоваться снова')
    }
    return Promise.reject(error)
  }
)

export const loginRequest = async (email, password) => {
  const response = await api.post('/auth/login', {
    email,
    password,
  })
  return response.data
}

export const getMeRequest = async () => {
  const response = await api.get('/auth/me')
  return response.data
}

export const registerRequest = async (email, password, name) => {
  const response = await api.post('/auth/register', {
    email,
    password,
    name,
  })
  return response.data
}
