import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    taskFilter(state, action) {
      return action.payload
    },
  },
})

export const { taskFilter } = filterSlice.actions
export default filterSlice.reducer
