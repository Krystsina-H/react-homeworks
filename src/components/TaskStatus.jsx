import { Alert, Empty, Flex, Spin } from 'antd'

const TaskStatus = ({ isLoading, error, isEmpty }) => {
  if (isLoading) {
    return (
      <Flex justify="center">
        <Spin size="large" />
      </Flex>
    )
  }

  if (error) {
    return (
      <Alert
        type="error"
        message="Ошибка загрузки"
        description={error}
        showIcon
      />
    )
  }

  if (isEmpty) {
    return <Empty description="Список задач пуст" />
  }
  return null
}

export default TaskStatus

//показывает загрузка,ошибка или пустой массив.
