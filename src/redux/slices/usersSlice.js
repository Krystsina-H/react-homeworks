import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  items: [],
  loading: false,
  error: null,
  hasLoaded: false,
}

export const fetchItems = createAsyncThunk(
  'users/fetchusers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      console.log(response.data)
      return response.data
    } catch {
      return thunkAPI.rejectWithValue('не удалось загрузить юзеров')
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
        state.error = null
        state.hasLoaded = true
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default usersSlice.reducer
