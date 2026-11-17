import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../redux/slices/usersSlice'

const UsersPage = () => {
  const dispatch = useDispatch()
  const { items, loading, error, hasLoaded } = useSelector(
    (state) => state.users
  )

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  const handleClick = () => {
    dispatch(fetchItems())
  }

  return (
    <>
      <h2>Пользователи:</h2>
      <button onClick={handleClick} disabled={loading}>
        Обновить данные
      </button>
      {loading && (
        <p>
          {items.length > 0
            ? 'Идёт обновление пользователей...'
            : 'Идёт загрузка пользователей...'}
        </p>
      )}
      {error && <p>{error}</p>}
      {hasLoaded && !loading && !error && items.length === 0 && (
        <p>Пользователи пока не найдены.</p>
      )}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>
              {' — '}
              {item.email}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default UsersPage
