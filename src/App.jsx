import './App.css'
import Header from './components/Header'
import InputTask from './components/InputTask'
import ToDoList from './components/ToDoList'
import Filters from './components/Filters'
import { Button, Card, Flex, Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteTask,
  toggle,
  edit,
  clearCompletedTask,
} from './redux/slices/todoSlice'
import { taskFilter } from './redux/slices/filterSlice'

const { Text } = Typography

const App = () => {
  const tasks = useSelector((store) => store.todo.tasks)
  const filter = useSelector((store) => store.filter)
  const tasksCount = tasks.filter((task) => !task.isDone).length
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const isDoneChecked = (id) => {
    dispatch(toggle(id))
  }
  const editTitle = (id, newTitle) => {
    dispatch(edit({ id, newTitle }))
  }

  const clearCompleted = () => {
    dispatch(clearCompletedTask())
  }

  const handleFilterChange = (value) => {
    dispatch(taskFilter(value))
  }

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
          <InputTask />
          <Filters filter={filter} setFilter={handleFilterChange} />
          <ToDoList
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
