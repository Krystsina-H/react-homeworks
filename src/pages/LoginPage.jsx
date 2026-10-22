import { Alert, Card, Typography } from 'antd'
import LoginForm from '../components/LoginForm.jsx'
import useAuthApi from '../hooks/useAuthApi.js'
import useAuth from '../hooks/useAuth.js'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
const { Title } = Typography

const LoginPage = () => {
  const navigate = useNavigate()
  const handleLogin = async (credentials) => {
    const response = await loginMutation.mutateAsync(credentials)
    saveToken(response.access_token)
    navigate('/', { replace: true })
  }
  const { loginMutation } = useAuthApi()
  const { saveToken } = useAuth()
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', padding: 16 }}>
      <Card>
        <Title level={2}>Вход</Title>
        {loginMutation.isError && (
          <Alert
            type="error"
            title="Не удалось войти"
            description={
              loginMutation.error.response?.data?.message ||
              loginMutation.error.message
            }
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}
        <LoginForm
          onLogin={handleLogin}
          isLoggingIn={loginMutation.isPending}
        />
        <div style={{ marginTop: 16 }}>
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </div>
      </Card>
    </main>
  )
}
export default LoginPage
