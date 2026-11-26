import { Button, Form, Alert, Card, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { login, register } from '../redux/slices/authSlice'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, error } = useSelector((state) => state.auth)
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    if (user) {
      navigate('/todos', { replace: true })
    }
  }, [user])

  const handleSubmit = (val) => {
    if (isLogin) {
      dispatch(login(val))
    } else {
      dispatch(register(val))
    }
  }

  return (
    <Card title={isLogin ? 'Вход' : 'Регистрация'}>
      <Form
        name="login"
        layout="vertical"
        onFinish={handleSubmit}
        disabled={isLoading}
      >
        {!isLogin && (
          <Form.Item label="Имя" name="name" preserve={false}>
            <Input placeholder="Как тебя зовут?" />
          </Form.Item>
        )}
        <Form.Item
          label="ЛОГИН"
          name="email"
          rules={[{ required: true, message: 'Пожалуйста, введите email' }]}
        >
          <Input placeholder="example@mail.ru" />
        </Form.Item>
        <Form.Item
          label="ПАРОЛЬ"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
        >
          <Input.Password placeholder="Введи пароль" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </Form.Item>
        {error && <Alert type="error" title={error} showIcon />}
      </Form>
      <Button
        type="link"
        disabled={isLoading}
        onClick={() => setIsLogin((current) => !current)}
      >
        {isLogin
          ? 'Нет аккаунта? Зарегистрироваться'
          : 'Уже есть аккаунт? Войти'}
      </Button>
    </Card>
  )
}

export default LoginPage
