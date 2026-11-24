import { useState } from 'react'
import { Alert, Button, Flex, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../redux/slices/todoSlice'
import { change, zero } from '../redux/slices/inputSlice'

const InputTask = () => {
  const dispatch = useDispatch()
  const text = useSelector((store) => store.input.value)
  console.log(text)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    dispatch(change(e.target.value))
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
    dispatch(add(newTitle))
    dispatch(zero())
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
