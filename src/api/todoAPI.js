import { api } from './authAPI'

export const getTodosRequest = async (filter = 'all') => {
  const params = {}
  if (filter !== 'all') {
    params.completed = filter === 'completed'
  }
  const response = await api.get('/todos', { params })
  return response.data
}

export const createTodoRequest = async (title) => {
  const response = await api.post('/todos', { title })
  return response.data
}

export const deleteTaskRequest = async (id) => {
  const response = await api.delete(`/todos/${id}`)
  return response.data
}

export const toggleTaskRequest = async (id) => {
  const response = await api.patch(`/todos/${id}/toggle`)
  return response.data
}

export const updateTaskRequest = async (id, title) => {
  const response = await api.patch(`/todos/${id}`, { title })
  return response.data
}
