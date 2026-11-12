import Task from './Task'
import { Empty, Flex } from 'antd'
import { useSelector } from 'react-redux'

const ToDoList = ({ handleDelete, isDoneChecked, editTitle }) => {
  const { tasks } = useSelector((store) => store.tasks)
  const filter = useSelector((store) => store.filter)
  console.log(tasks)
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.isDone
    if (filter === 'completed') return task.isDone
    return true
  })

  return (
    <Flex vertical gap="middle">
      {visibleTasks.length === 0 && (
        <Empty description="Нет задач для выбранного фильтра" />
      )}

      {visibleTasks.map((item) => (
        <Task
          key={item.id}
          task={item}
          handleDelete={handleDelete}
          isDoneChecked={isDoneChecked}
          editTitle={editTitle}
        />
      ))}
    </Flex>
  )
}
export default ToDoList
