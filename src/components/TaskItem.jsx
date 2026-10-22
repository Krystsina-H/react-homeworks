import { useState } from 'react'
import { Checkbox, Space, Typography, Input, Button } from 'antd'

const { Text } = Typography

function TaskItem({
  task,
  onToggle,
  isChanging,
  onSave,
  isSaving,
  onDelete,
  isDeleting,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)

  const handleStartEditing = () => {
    setTitle(task.title)
    setIsEditing(true)
  }

  const handleCancel = () => {
    setTitle(task.title)
    setIsEditing(false)
  }

  const handleSave = async () => {
    const newTitle = title.trim()
    if (!newTitle) {
      return
    }
    await onSave(task.id, newTitle)
    setIsEditing(false)
  }

  return (
    <Space>
      <Checkbox
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        disabled={isChanging || isSaving}
      />

      {isEditing ? (
        <Input
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onPressEnter={handleSave}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              handleCancel()
            }
          }}
          disabled={isSaving}
        />
      ) : (
        <Text delete={task.completed}>{task.title}</Text>
      )}

      {isEditing ? (
        <>
          <Button onClick={handleSave} loading={isSaving}>
            Сохранить
          </Button>
          <Button onClick={handleCancel} disabled={isSaving}>
            Отмена
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={handleStartEditing}
            disabled={isChanging || isSaving || isDeleting}
          >
            Изменить
          </Button>

          <Button danger onClick={() => onDelete(task.id)} loading={isDeleting}>
            Удалить
          </Button>
        </>
      )}
    </Space>
  )
}

export default TaskItem
