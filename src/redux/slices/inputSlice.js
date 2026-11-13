import { createSlice } from '@reduxjs/toolkit'

const inputSlice = createSlice({
  name: 'input',
  initialState: { text: '' },
  reducers: {
    setText(state, action) {
      state.text = action.payload
    },
    clearText(state) {
      state.text = ''
    },
  },
})

export const { setText, clearText } = inputSlice.actions
export default inputSlice.reducer
