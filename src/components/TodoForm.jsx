import { Form, Input, Button } from 'antd'
import { useState } from 'react'

const TodoForm = ({ handleAddTask }) => {
  const [text, setText] = useState('')

  const handleSubmit = async () => {
    const newText = text.trim()
    const success = await handleAddTask(newText)
    if (success) {
      setText('')
    }
  }

  return (
    <Form style={{ maxWidth: 600 }} onFinish={handleSubmit} autoComplete="off">
      <Form.Item label="Новая задача">
        <Input value={text} onChange={(event) => setText(event.target.value)} />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form.Item>
    </Form>
  )
}
export default TodoForm
