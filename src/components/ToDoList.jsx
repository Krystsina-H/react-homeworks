import Task from './Task'
import { Empty, Flex } from 'antd'

const ToDoList = ({ tasks, handleDelete, isDoneChecked, editTitle }) => {
  return (
    <Flex vertical gap="middle">
      {tasks.length === 0 && (
        <Empty description="Задач пока нет. Создай новую" />
      )}

      {tasks.map((item) => (
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
