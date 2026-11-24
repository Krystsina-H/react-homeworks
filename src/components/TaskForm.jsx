import { useCreateTaskMutation } from '../redux/tasksApi'
import { useState } from 'react'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [createTask, { isLoading, isError }] = useCreateTaskMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newTitle = title.trim()
    if (!newTitle || isLoading) {
      return
    }
    const newTask = {
      title: newTitle,
    }
    try {
      await createTask(newTask).unwrap()
      setTitle('')
    } catch {}
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Начни создавать задачи
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Введи название задачи"
            disabled={isLoading}
          />
        </label>
        <button disabled={isLoading}>
          {isLoading ? 'Создаётся...' : 'Создать'}
        </button>
        {isError && (
          <p role="alert">Не удалось создать задачу. Попробуй ещё раз.</p>
        )}
      </form>
    </div>
  )
}
export default TaskForm
