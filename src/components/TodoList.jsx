import TodoItem from './TodoItem'

const TodoList = ({
  items,
  handleDeleteTask,
  handleToggleTask,
  handleUpdateTask,
}) => {
  if (items.length === 0) {
    return <p>Задач пока нет</p>
  }
  return (
    <ul className="todo-list">
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTask={handleDeleteTask}
          handleToggleTask={handleToggleTask}
          handleUpdateTask={handleUpdateTask}
        />
      ))}
    </ul>
  )
}
export default TodoList
