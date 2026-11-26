import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getTodosRequest,
  createTodoRequest,
  deleteTaskRequest,
  toggleTaskRequest,
  updateTaskRequest,
} from '../../api/todoAPI'
import { logout } from './authSlice'

export const getTask = createAsyncThunk(
  'todo/getTask',
  async (filter = 'all', thunkAPI) => {
    try {
      return await getTodosRequest(filter)
    } catch {
      return thunkAPI.rejectWithValue('Не удалось загрузить задачи')
    }
  }
)

export const createTask = createAsyncThunk(
  'todo/createTask',
  async (title, thunkAPI) => {
    try {
      const data = await createTodoRequest(title)
      return data
    } catch {
      return thunkAPI.rejectWithValue('Не удалось добавить задачу')
    }
  }
)

export const deleteTask = createAsyncThunk(
  'todo/deleteTask',
  async (id, thunkAPI) => {
    try {
      await deleteTaskRequest(id)
      return id
    } catch {
      return thunkAPI.rejectWithValue('Не удалось удалить задачу')
    }
  }
)

export const toggleTask = createAsyncThunk(
  'todo/toggleTask',
  async (id, thunkAPI) => {
    try {
      await toggleTaskRequest(id)
      return id
    } catch {
      return thunkAPI.rejectWithValue('Не удалось выполнить задачу')
    }
  }
)

export const updateTask = createAsyncThunk(
  'todo/updateTask',
  async ({ id, title }, thunkAPI) => {
    try {
      await updateTaskRequest(id, title)
      return { id, title }
    } catch {
      return thunkAPI.rejectWithValue('Не удалось изменить задачу')
    }
  }
)

const initialState = { items: [], isLoading: false, error: null }

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout, () => initialState)
      .addCase(getTask.fulfilled, (state, action) => {
        state.items = action.payload.data
      })
      .addCase(createTask.fulfilled, (state, action) => {
        const newTask = action.payload
        if (newTask) {
          state.items = [newTask, ...state.items]
        }
        console.log('Задача добавлена')
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
        console.log('Задача удалена из списка')
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const task = state.items.find((item) => item.id === action.payload)
        if (task) {
          task.completed = !task.completed
        }
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const task = state.items.find((item) => item.id === action.payload.id)
        if (task) {
          task.title = action.payload.title
        }
      })
      .addMatcher(
        (action) =>
          action.type.startsWith('todo/') && action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true
          state.error = null
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('todo/') && action.type.endsWith('/fulfilled'),
        (state) => {
          state.isLoading = false
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('todo/') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload || 'Произошла ошибка'
        }
      )
  },
})

export default todoSlice.reducer
