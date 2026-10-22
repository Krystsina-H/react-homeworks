import { Button, Form, Input } from 'antd'

function RegisterForm({ onRegister, isRegistering }) {
  const handleFinish = async (values) => {
    await onRegister(values)
  }
  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <Form.Item
        label="Имя"
        name="name"
        rules={[{ required: true, message: 'Введите имя' }]}
      >
        <Input disabled={isRegistering} />
      </Form.Item>

      <Form.Item
        label="Электронная почта"
        name="email"
        rules={[
          { required: true, message: 'Введите электронную почту' },
          { type: 'email', message: 'Проверьте формат почты' },
        ]}
      >
        <Input disabled={isRegistering} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input.Password disabled={isRegistering} />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isRegistering}>
        Зарегистрироваться
      </Button>
    </Form>
  )
}

export default RegisterForm
