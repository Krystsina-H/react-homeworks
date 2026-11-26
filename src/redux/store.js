import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/slices/authSlice'
import todoReducer from '../redux/slices/todoSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
})

export default store
