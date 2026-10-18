import { useState } from 'react'
import { Button, Checkbox, Flex, Input, Typography } from 'antd'

const { Text } = Typography

const Task = ({ task, handleDelete, isDoneChecked, editTitle }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editText, setEditText] = useState(task.title)

  const handleEdit = () => {
    setEditText(task.title)
    setIsEdit(true)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newTitle = editText.trim()
      if (!newTitle) {
        return
      }
      editTitle(task.id, newTitle)
      setIsEdit(false)
    }
    if (e.key === 'Escape') {
      setEditText(task.title)
      setIsEdit(false)
    }
  }
  const handleCancelEdit = () => {
    setEditText(task.title)
    setIsEdit(false)
  }

  return (
    <Flex align="center" gap="middle">
      <Checkbox checked={task.isDone} onChange={() => isDoneChecked(task.id)} />

      {!isEdit ? (
        <Text
          delete={task.isDone}
          type={task.isDone ? 'secondary' : undefined}
          style={{ flex: 1, textAlign: 'left' }}
        >
          {task.title}
        </Text>
      ) : (
        <Input
          autoFocus
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleCancelEdit}
          style={{ flex: 1 }}
        />
      )}

      <Button onClick={handleEdit}>Изменить</Button>
      <Button danger onClick={() => handleDelete(task.id)}>
        Удалить
      </Button>
    </Flex>
  )
}
export default Task
