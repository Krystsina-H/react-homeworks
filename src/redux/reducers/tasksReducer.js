const initialValue = {
  tasks: [{ id: crypto.randomUUID(), title: 'Купить молоко', isDone: false }],
}

const tasksReducer = (store = initialValue, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...store,
        tasks: [...store.tasks, action.payload],
      }

    case 'delete':
      return {
        ...store,
        tasks: store.tasks.filter((item) => item.id !== action.payload),
      }

    case 'toggle':
      return {
        ...store,
        tasks: store.tasks.map((item) =>
          item.id == action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      }

    case 'edit':
      return {
        ...store,
        tasks: store.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.newTitle }
            : task
        ),
      }

    case 'clearCompleted':
      return {
        ...store,
        tasks: store.tasks.filter((task) => !task.isDone),
      }

    default:
      return store
  }
}

export default tasksReducer
