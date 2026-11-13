import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import filterReducer from './slices/filterSlice'
import inputReducer from './slices/inputSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
    input: inputReducer,
  },
})

export default store
