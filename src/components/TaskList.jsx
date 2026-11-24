import { useDeleteTaskMutation, useGetTasksQuery } from '../redux/tasksApi'

const TaskList = ({ onEdit, isEditing }) => {
  const {
    data: tasks = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetTasksQuery()

  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation()

  const handleDeleteTask = async (id) => {
    await deleteTask(id)
  }

  if (isLoading) {
    return <p>Задачи загружаются...</p>
  }
  if (error) {
    return <p>Не удалось загрузить задачи</p>
  }

  return (
    <section>
      <h2>Список задач:</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        Обновить
      </button>
      {isFetching && <p>Список обновляется...</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => onEdit(task.id)}>Редактировать</button>
            <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      {isDeleting && <p>Удаляем задачу...</p>}
    </section>
  )
}
export default TaskList
