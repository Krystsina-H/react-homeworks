import { useState } from 'react'
import { Button, Input, Space } from 'antd'

const TaskForm = ({ handleAdd, isAdding }) => {
  const [title, setTitle] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newTitle = title.trim()
    if (!newTitle) {
      return
    }
    await handleAdd(newTitle)
    setTitle('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Введите задачу"
          disabled={isAdding}
        />

        <Button
          type="primary"
          htmlType="submit"
          loading={isAdding}
          disabled={!title.trim()}
        >
          Добавить
        </Button>
      </Space.Compact>
    </form>
  )
}
export default TaskForm
