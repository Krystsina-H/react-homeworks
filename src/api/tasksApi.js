import apiClient from './apiClient'

export const getTasks = async () => {
  const response = await apiClient.get('/todos', {
    params: { page: 1, limit: 10 },
  })
  console.log(response.data)
  return response.data
}

export const createTask = async (task) => {
  const response = await apiClient.post('/todos', task)
  return response.data
}

export const toggleTask = async (id) => {
  const response = await apiClient.patch(`/todos/${id}/toggle`)
  return response.data
}

export const updateTask = async ({ id, changes }) => {
  const response = await apiClient.patch(`/todos/${id}`, changes)
  return response.data
}

export const deleteTask = async (id) => {
  const response = await apiClient.delete(`/todos/${id}`)
  return response.data
}
