import { Button, Form, Input } from 'antd'

function LoginForm({ onLogin, isLoggingIn }) {
  const handleFinish = async (values) => {
    await onLogin(values)
  }
  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <Form.Item
        label="Электронная почта"
        name="email"
        rules={[
          { required: true, message: 'Введите электронную почту' },
          { type: 'email', message: 'Проверьте формат почты' },
        ]}
      >
        <Input disabled={isLoggingIn} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input.Password disabled={isLoggingIn} />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isLoggingIn}>
        Войти
      </Button>
    </Form>
  )
}

export default LoginForm
