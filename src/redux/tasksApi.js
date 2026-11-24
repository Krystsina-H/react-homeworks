import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://todo-redev.onrender.com/api/',
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_API_TOKEN
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    //получаю список
    getTasks: builder.query({
      query: () => 'todos',
      transformResponse: (response) => response.data,
      providesTags: ['Tasks'],
    }),

    // создать задачу
    createTask: builder.mutation({
      query: (newTask) => ({
        url: 'todos',
        method: 'POST',
        body: newTask,
      }),
      invalidatesTags: ['Tasks'],
    }),
    //изменить задачу
    updateTask: builder.mutation({
      query: ({ id, updatedTask }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: updatedTask,
      }),
      invalidatesTags: ['Tasks'],
    }),
    //Удалить
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    //получить задау по id
    getTask: builder.query({
      query: (id) => `todos/${id}`,
      providesTags: ['Tasks'],
    }),
  }),
})

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi
