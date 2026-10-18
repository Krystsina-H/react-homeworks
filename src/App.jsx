import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import InputTask from './components/InputTask'
import ToDoList from './components/TodoList'
import Filters from './components/Filters'
import { Button, Card, Flex, Typography } from 'antd'

const { Text } = Typography

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      return JSON.parse(savedTasks)
    }
    return []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [filter, setFilter] = useState('all')

  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((item) => item.id !== id))
  }

  const isDoneChecked = (id) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id == id ? { ...item, isDone: !item.isDone } : item
      )
    )
  }
  const editTitle = (id, newTitle) => {
    setTasks((tasks) =>
      tasks.map((item) => (item.id == id ? { ...item, title: newTitle } : item))
    )
  }

  const filterTask = () => {
    return tasks.filter((item) => {
      if (filter === 'active') return !item.isDone
      if (filter === 'completed') return item.isDone
      return true
    })
  }
  const clearCompleted = () => {
    setTasks((tasks) => tasks.filter((item) => !item.isDone))
  }
  const tasksCount = tasks.filter((item) => !item.isDone).length
  return (
    <Flex
      vertical
      align="center"
      gap="large"
      style={{
        minHeight: '100vh',
        padding: '40px 16px',
        background: '#f5f5f5',
      }}
    >
      <Header />
      <Card style={{ width: '100%', maxWidth: 700 }}>
        <Flex vertical gap="large">
          <InputTask setTasks={setTasks} />
          <Filters filter={filter} setFilter={setFilter} />
          <ToDoList
            tasks={filterTask()}
            handleDelete={handleDelete}
            isDoneChecked={isDoneChecked}
            editTitle={editTitle}
          />
          <Flex justify="space-between" align="center" wrap>
            <Text>Осталось задач: {tasksCount}</Text>
            <Button danger onClick={clearCompleted}>
              Очистить выполненные
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}
export default App
