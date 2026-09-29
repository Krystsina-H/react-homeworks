import { useState } from 'react'
import { Form, Input, Button, Card, Typography, Space, message } from 'antd'
import { setCookie, getCookie, deleteCookie } from '../utils/cookies'

const { Title, Text } = Typography

function Login() {
  const [form] = Form.useForm()
  const [token, setToken] = useState(() => getCookie('token'))
  const handleLogin = (values) => {
    setCookie('token', values.token, 7)
    setToken(values.token)
    form.resetFields()
    message.success('Токен сохранён')
  }
  const handleLogout = () => {
    deleteCookie('token')
    setToken(null)
    message.info('Вы вышли')
  }
  return (
    <Card className="app-section login-card">
      <Title level={4}>Авторизация</Title>
      {token ? (
        <Space size="middle" style={{ width: '100%' }}>
          <Text>
            ✅ Вы вошли. Токен: <Text code>{token.slice(0, 20)}...</Text>
          </Text>
          <Button type="dashed" block onClick={handleLogout}>
            Выйти
          </Button>
        </Space>
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Token"
            name="token"
            rules={[{ required: true, message: 'Введите токен' }]}
          >
            <Input placeholder="Введите token" allowClear />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="dashed" htmlType="submit" block>
              Войти
            </Button>
          </Form.Item>
        </Form>
      )}
    </Card>
  )
}
export default Login
