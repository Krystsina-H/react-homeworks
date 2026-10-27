import axios from 'axios'
import { tokenStorage } from '../utils/tokenStorage'

const apiClient = axios.create({
  baseURL: 'https://todo-redev.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  const token = tokenStorage.get()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiClient
