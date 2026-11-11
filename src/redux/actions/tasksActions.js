export const createAddTaskAction = (newTitle) => ({
  type: 'add',
  payload: {
    id: crypto.randomUUID(),
    title: newTitle,
    isDone: false,
  },
})

export const createDeleteTaskACtion = (id) => ({
  type: 'delete',
  payload: id,
})

export const createToggleTaskAction = (id) => ({
  type: 'toggle',
  payload: id,
})

export const createEditTaskAction = (id, newTitle) => ({
  type: 'edit',
  payload: { id, newTitle },
})

export const createClearCompletedAction = () => ({
  type: 'clearCompleted',
})
