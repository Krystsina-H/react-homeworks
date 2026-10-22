import { Alert, Card, Typography } from 'antd'
import RegisterForm from '../components/RegisterForm.jsx'
import useAuthApi from '../hooks/useAuthApi.js'
import { Link } from 'react-router'

function RegisterPage() {
  const { registerMutation } = useAuthApi()

  const handleRegister = (userData) => {
    return registerMutation.mutateAsync(userData)
  }
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', padding: 16 }}>
      <Card>
        <Typography.Title level={2}>Регистрация</Typography.Title>
        {registerMutation.isSuccess && (
          <Alert
            type="success"
            title="Регистрация прошла успешно"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}

        {registerMutation.isError && (
          <Alert
            type="error"
            title="Не удалось зарегистрироваться"
            description={
              registerMutation.error.response?.data?.message ||
              registerMutation.error.message
            }
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}
        <RegisterForm
          onRegister={handleRegister}
          isRegistering={registerMutation.isPending}
        />
        <div style={{ marginTop: 16 }}>
          Уже есть аккаунт? <Link to="/login">Авторизация</Link>
        </div>
      </Card>
    </main>
  )
}

export default RegisterPage
