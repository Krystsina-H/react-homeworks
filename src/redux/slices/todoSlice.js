import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [{ id: 'initial-task', title: 'Купить молоко', isDone: false }],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state, action) {
      state.tasks.push({
        id: crypto.randomUUID(),
        title: action.payload,
        isDone: false,
      })
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload)
    },
    toggle(state, action) {
      const task = state.tasks.find((item) => item.id == action.payload)
      if (task) {
        task.isDone = !task.isDone
      }
    },
    edit(state, action) {
      const { id, newTitle } = action.payload
      const task = state.tasks.find((item) => item.id == id)
      if (task) {
        task.title = newTitle
      }
    },
    clearCompletedTask(state) {
      state.tasks = state.tasks.filter((item) => !item.isDone)
    },
  },
})

export const { add, deleteTask, toggle, edit, clearCompletedTask } =
  todoSlice.actions
export default todoSlice.reducer
