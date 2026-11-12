import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'antd'
import { fetchData } from '../redux/actions/usersActions'

const Users = () => {
  const dispatch = useDispatch()
  const { data, loading, success, error } = useSelector((state) => state.users)
  const handleLoad = () => {
    dispatch(fetchData())
  }
  return (
    <Card title="Пользователи" style={{ width: '100%', maxWidth: 700 }}>
      <Button type="primary" onClick={handleLoad} disabled={loading}>
        Загрузить данные
      </Button>

      {loading && <p role="status">Загрузка...</p>}
      {error && (
        <div>
          <p role="alert">Ошибка: {error}</p>
          <Button onClick={handleLoad} disabled={loading}>
            Повторить запрос
          </Button>
        </div>
      )}
      {success && (
        <div>
          <p>Данные успешно загружены!</p>
          {data.length === 0 ? (
            <p>Пользователи не найдены.</p>
          ) : (
            <ul>
              {data.map((user) => (
                <li key={user.id}>
                  <strong>{user.name}</strong> — {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Card>
  )
}

export default Users
