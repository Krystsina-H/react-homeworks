import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginRequest, getMeRequest, registerRequest } from '../../api/authAPI'
import { token } from '../../helpers/token'

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await loginRequest(email, password)
      token.set(data.access_token)
      const user = await getMeRequest()
      return user
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось войти')
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, thunkAPI) => {
    try {
      const data = await registerRequest(email, password, name)
      token.set(data.access_token)
      const user = await getMeRequest()
      return user
    } catch (error) {
      token.remove()
      const message =
        error.response?.status === 409
          ? 'Этот email уже зарегистрирован'
          : 'Не удалось завершить регистрацию. Если аккаунт создан, попробуй войти'
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null
      state.isLoading = false
      state.error = null
      console.log('Пользователь вышел')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.user = null
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.user = null
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
