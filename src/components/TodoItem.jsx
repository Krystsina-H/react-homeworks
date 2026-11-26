import { useState } from 'react'
import { Button, Checkbox, Input } from 'antd'

const TodoItem = ({
  todo,
  handleDeleteTask,
  handleToggleTask,
  handleUpdateTask,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(todo.title)
  const [isSaving, setIsSaving] = useState(false)

  const startEditing = () => {
    setText(todo.title)
    setIsEditing(true)
  }

  const cancelEditing = () => {
    setIsEditing(false)
  }

  const handleSave = async () => {
    const newTitle = text.trim()
    if (!newTitle || isSaving) return
    setIsSaving(true)
    try {
      const success = await handleUpdateTask(todo.id, newTitle)
      if (success) {
        setIsEditing(false)
      }
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <Input
            value={text}
            onChange={(event) => setText(event.target.value)}
            onPressEnter={handleSave}
            disabled={isSaving}
            aria-label="Название задачи"
          />
          <Button
            type="primary"
            onClick={handleSave}
            loading={isSaving}
            disabled={!text.trim()}
          >
            Сохранить
          </Button>
          <Button onClick={cancelEditing} disabled={isSaving}>
            Отмена
          </Button>
        </>
      ) : (
        <>
          <Checkbox
            checked={todo.completed}
            onChange={() => handleToggleTask(todo.id)}
            aria-label={`Выполнено: ${todo.title}`}
          />
          <span
            className="todo-item__title"
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </span>
          <Button onClick={startEditing}>Изменить</Button>
          <Button danger onClick={() => handleDeleteTask(todo.id)}>
            Удалить
          </Button>
        </>
      )}
    </li>
  )
}

export default TodoItem
