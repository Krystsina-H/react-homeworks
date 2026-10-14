import axiosInstance from '../api/axiosInstance'

export const getItems = async () => {
  const response = await axiosInstance.get('/posts')
  return response.data
}

export const getItemById = async (id) => {
  const response = await axiosInstance.get(`/posts/${id}`)
  return response.data
}

export const createItem = async (item) => {
  const response = await axiosInstance.post('/posts', item)
  return response.data
}

export const updateItem = async (id, item) => {
  const response = await axiosInstance.put(`/posts/${id}`, item)
  return response.data
}

export const deleteItem = async (id) => {
  await axiosInstance.delete(`/posts/${id}`)
}
