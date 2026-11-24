import { useEffect, useState } from 'react'
import { useGetTaskQuery, useUpdateTaskMutation } from '../redux/tasksApi'

const TaskEditor = ({ taskId, onClose }) => {
  const [title, setTitle] = useState('')
  const { data: task, isLoading, isError } = useGetTaskQuery(taskId)
  const [updateTask, { isLoading: isUpdating, isError: isUpdateError }] =
    useUpdateTaskMutation()
  useEffect(() => {
    if (task) {
      setTitle(task.title)
    }
  }, [task])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newTitle = title.trim()
    if (!newTitle || isUpdating) {
      return
    }
    try {
      await updateTask({
        id: taskId,
        updatedTask: { title: newTitle },
      }).unwrap()

      onClose()
    } catch {}
  }
  if (isError) {
    return (
      <div>
        <p>Не удалось загрузить задачу</p>
        <button onClick={onClose}>Назад</button>
      </div>
    )
  }
  if (isLoading) {
    return <p>Загружаем задачу...</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Редактирование задачи</h2>
      <label>
        Название
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isUpdating}
        />
      </label>
      <button type="submit" disabled={isUpdating || !title.trim()}>
        {isUpdating ? 'Сохраняем...' : 'Сохранить'}
      </button>
      <button type="button" onClick={onClose} disabled={isUpdating}>
        Отмена
      </button>
      {isUpdateError && <p>Не удалось сохранить изменения</p>}
    </form>
  )
}

export default TaskEditor
