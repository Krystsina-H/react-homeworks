import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/petstore',
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers.api_key = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      console.error('Необходимо авторизоваться снова')
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
