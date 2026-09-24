import TaskForm from '../components/TaskForm'
import TaskStatus from '../components/TaskStatus'
import TaskTable from '../components/TaskTable'
import { Flex } from 'antd'
import { useEffect, useState } from 'react'
import { tasks } from '../data/tasks'

const TaskPage = () => {
  const [taskList, setTaskList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleAdd = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: 'Не начато',
    }
    setTaskList((currentTasks) => [...currentTasks, newTask])
  }
  const handleDelete = (id) => {
    setTaskList((currentTasks) => currentTasks.filter((item) => item.id !== id))
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      try {
        setTaskList(tasks)
        setError(null)
      } catch {
        setError('Не удалось загрузить задачи')
      } finally {
        setIsLoading(false)
      }
    }, 1000)
    return () => clearTimeout(timerId)
  }, [])
  return (
    <Flex gap="middle" vertical>
      <TaskForm handleAdd={handleAdd} />
      <TaskStatus
        isLoading={isLoading}
        error={error}
        isEmpty={taskList.length === 0}
      />
      {!isLoading && !error && taskList.length > 0 && (
        <TaskTable tasks={taskList} handleDelete={handleDelete} />
      )}
    </Flex>
  )
}
export default TaskPage

//хранит все задачи и логику страницы
