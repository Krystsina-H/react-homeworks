import apiClient from './apiClient.js'

export const registerUser = async (userData) => {
  const response = await apiClient.post('/auth/register', userData)
  return response.data
}

export const loginUser = async (data1) => {
  const response = await apiClient.post('/auth/login', data1)
  return response.data
}
