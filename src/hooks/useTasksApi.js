import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  getTasks,
  createTask,
  toggleTask,
  updateTask,
  deleteTask,
} from '../api/tasksApi'

function useTasksApi(page = 1) {
  const queryClient = useQueryClient()

  const tasksQuery = useQuery({
    queryKey: ['tasks', page],
    queryFn: () => getTasks(page),
  })

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  const toggleTaskMutation = useMutation({
    mutationFn: toggleTask,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  const updateTaskMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })
  const clearCompletedMutation = useMutation({
    mutationFn: async (tasks) => {
      return Promise.all(tasks.map((id) => deleteTask(id)))
    },

    onSettled: () => {
      return queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })

  return {
    tasksQuery,
    createTaskMutation,
    toggleTaskMutation,
    updateTaskMutation,
    deleteTaskMutation,
    clearCompletedMutation,
  }
}

export default useTasksApi
