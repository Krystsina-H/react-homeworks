import { useState } from 'react'
import { Alert, Button, Flex, Input } from 'antd'

const InputTask = ({ setTasks }) => {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
    setError('')
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }
  const handleClick = () => {
    const newTitle = text.trim()
    if (!newTitle) {
      setError('Нельзя добавить пустую задачу')
      return
    }
    setTasks((task) => [
      ...task,
      { id: crypto.randomUUID(), title: newTitle, isDone: false },
    ])
    setText('')
    setError('')
  }
  return (
    <Flex vertical gap="small">
      <Flex gap="small">
        <Input
          size="large"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Введите текст задачи"
        />
        <Button size="large" type="primary" onClick={handleClick}>
          Добавить
        </Button>
      </Flex>
      {error && <Alert message={error} type="warning" showIcon />}
    </Flex>
  )
}
export default InputTask
