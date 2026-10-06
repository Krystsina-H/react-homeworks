//Создай сервис с методами:getItems;getItemById;createItem;updateItem;deleteItem.
import axiosInstance from '../api/axiosInstance'

export const getItems = async (status = 'available') => {
  const response = await axiosInstance.get('/pet/findByStatus', {
    params: { status },
  })
  return response.data
}

export const getItemById = async (id) => {
  const response = await axiosInstance.get(`/pet/${id}`)
  return response.data
}

export const createItem = async (pet) => {
  const response = await axiosInstance.post('/pet', pet)
  return response.data
}

export const updateItem = async (pet) => {
  const response = await axiosInstance.put('/pet', pet)
  return response.data
}

export const deleteItem = async (id) => {
  await axiosInstance.delete(`/pet/${id}`)
}
