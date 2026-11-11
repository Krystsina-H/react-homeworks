import { useState } from 'react'
import { Alert, Button, Flex, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { createAddTaskAction } from '../redux/actions/tasksActions'

const InputTask = () => {
  //const [text, setText] = useState('')
  const dispatch = useDispatch()
  const text = useSelector((store) => store.text.text)
  console.log(text)

  const [error, setError] = useState('')

  const handleChange = (e) => {
    // setText(e.target.value)
    dispatch({ type: 'change', payload: e.target.value })
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
    dispatch(createAddTaskAction(newTitle))
    // setTasks((task) => [
    //   ...task,
    //   { id: crypto.randomUUID(), title: newTitle, isDone: false },
    // ])
    //setText('')
    dispatch({ type: 'zero' })
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
