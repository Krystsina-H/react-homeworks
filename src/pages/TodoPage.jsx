import { Alert, Listy, Spin, Typography, Empty, Button } from 'antd'
import useTasksApi from '../hooks/useTasksApi'
import TaskForm from '../components/TaskForm.jsx'
import TaskItem from '../components/TaskItem.jsx'
import { useState } from 'react'
import TaskFilters from '../components/TaskFilters.jsx'
import { useNavigate } from 'react-router'
import { tokenStorage } from '../utils/tokenStorage'

const { Title } = Typography

function TodoPage() {
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()
  const {
    tasksQuery,
    createTaskMutation,
    toggleTaskMutation,
    updateTaskMutation,
    deleteTaskMutation,
    clearCompletedMutation,
  } = useTasksApi()
  const tasks = tasksQuery.data?.data ?? []
  const activeCount = tasks.filter((item) => !item.completed).length
  const handleAdd = (title) => {
    return createTaskMutation.mutateAsync({ title })
  }
  if (tasksQuery.isPending) {
    return <Spin />
  }
  if (tasksQuery.isError) {
    return (
      <Alert
        title="Error"
        description="Не удалось загрузить задачи"
        type="error"
        showIcon
      />
    )
  }

  const handleSave = (id, title) => {
    return updateTaskMutation.mutateAsync({
      id,
      changes: { title },
    })
  }

  const handleDelete = (id) => {
    deleteTaskMutation.mutate(id)
  }
  const filteredTasks = tasks.filter((item) => {
    if (filter === 'active') {
      return !item.completed
    }
    if (filter === 'completed') {
      return item.completed
    }
    return true
  })

  const handleClearCompleted = () => {
    const completedIds = tasks
      .filter((item1) => item1.completed)
      .map((item2) => item2.id)
    clearCompletedMutation.mutate(completedIds)
  }
  const handleLogout = () => {
    tokenStorage.remove()
    navigate('/login', { replace: true })
  }
  return (
    <main>
      <Button onClick={handleLogout}>Выйти</Button>
      <Title level={2}>Мой список дел</Title>
      <TaskFilters value={filter} onChange={setFilter} />
      <TaskForm handleAdd={handleAdd} isAdding={createTaskMutation.isPending} />

      {createTaskMutation.isError && (
        <Alert
          type="error"
          title="Не удалось добавить задачу"
          description={
            createTaskMutation.error.response?.data?.message ||
            createTaskMutation.error.message
          }
        />
      )}
      {updateTaskMutation.isError && (
        <Alert
          type="error"
          title="Не удалось изменить задачу"
          description={
            updateTaskMutation.error.response?.data?.message ||
            updateTaskMutation.error.message
          }
          showIcon
        />
      )}
      {toggleTaskMutation.isError && (
        <Alert
          type="error"
          title="Не удалось изменить статус задачи"
          description={
            toggleTaskMutation.error.response?.data?.message ||
            toggleTaskMutation.error.message
          }
          showIcon
        />
      )}
      {deleteTaskMutation.isError && (
        <Alert
          type="error"
          title="Не удалось удалить задачу"
          description={
            deleteTaskMutation.error.response?.data?.message ||
            deleteTaskMutation.error.message
          }
          showIcon
        />
      )}
      {clearCompletedMutation.isError && (
        <Alert
          type="error"
          title="Не удалось очистить выполненные задачи"
          description={
            clearCompletedMutation.error.response?.data?.message ||
            clearCompletedMutation.error.message
          }
          showIcon
        />
      )}
      {filteredTasks.length === 0 ? (
        <Empty description="Задач пока нет" />
      ) : (
        <Listy
          items={filteredTasks}
          rowKey="id"
          itemRender={(task) => (
            <TaskItem
              task={task}
              onToggle={(id) => toggleTaskMutation.mutate(id)}
              isChanging={toggleTaskMutation.isPending}
              onSave={handleSave}
              isSaving={updateTaskMutation.isPending}
              onDelete={handleDelete}
              isDeleting={deleteTaskMutation.isPending}
            />
          )}
        />
      )}
      <Typography.Text>Осталось задач: {activeCount}</Typography.Text>
      <Button
        danger
        onClick={handleClearCompleted}
        loading={clearCompletedMutation.isPending}
        disabled={
          clearCompletedMutation.isPending ||
          !tasks.some((task) => task.completed)
        }
      >
        Очистить выполненные
      </Button>
    </main>
  )
}

export default TodoPage
