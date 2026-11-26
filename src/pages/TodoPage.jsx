import { useEffect, useState } from 'react'
import {
  getTask,
  createTask,
  deleteTask,
  toggleTask,
  updateTask,
} from '../redux/slices/todoSlice'
import TodoList from '../components/TodoList'
import { Spin, Alert, Typography, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TodoForm from '../components/TodoForm'
import TodoFilters from '../components/TodoFilters'
import { token } from '../helpers/token'
import { useNavigate } from 'react-router'
import { logout } from '../redux/slices/authSlice'

const TodoPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items, isLoading, error } = useSelector((state) => state.todo)
  const { Title } = Typography

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    dispatch(getTask(filter))
  }, [dispatch, filter])

  const handleAddTask = async (title) => {
    try {
      await dispatch(createTask(title)).unwrap()
    } catch {
      return false
    }

    dispatch(getTask(filter))
    return true
  }

  const handleDeleteTask = async (id) => {
    const result = await dispatch(deleteTask(id))
    if (deleteTask.fulfilled.match(result)) {
      dispatch(getTask(filter))
    }
  }

  const handleToggleTask = async (id) => {
    const result = await dispatch(toggleTask(id))
    if (toggleTask.fulfilled.match(result)) {
      dispatch(getTask(filter))
    }
  }

  const handleUpdateTask = async (id, title) => {
    try {
      await dispatch(updateTask({ id, title })).unwrap()
      return true
    } catch {
      return false
    }
  }

  const handleLogout = () => {
    token.remove()
    dispatch(logout())
    navigate('/', { replace: true })
  }

  return (
    <div className="todo-page">
      <Button onClick={handleLogout}>Выйти</Button>
      <Title level={2}>Список моих задач</Title>
      <TodoForm handleAddTask={handleAddTask} />
      {isLoading && <Spin />}
      {error && <Alert title={error} type="error" />}
      <TodoFilters
        filter={filter}
        onFilterChange={setFilter}
        disabled={isLoading}
      />
      <TodoList
        items={items}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
        handleUpdateTask={handleUpdateTask}
      />
    </div>
  )
}
export default TodoPage
