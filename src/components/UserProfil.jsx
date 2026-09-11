import { memo, useState } from 'react'

const UserInfo = memo(({ user }) => {
  console.log('Профиль поменялся')
  return (
    <div>
      <p>Имя:{user.name}</p>
      <p>Возраст:{user.age}</p>
      <p>Активен:{user.isActive ? 'Да' : 'Нет'}</p>
    </div>
  )
})

const UserProfil = () => {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  })
  const [count, setCount] = useState(0)

  const handleClickName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: prevUser.name === 'Иван' ? 'Петя' : 'Иван',
    }))
  }

  const handleClickAge = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }))
  }

  const handleToggleActive = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isActive: !prevUser.isActive,
    }))
  }

  return (
    <div>
      <UserInfo user={user} />
      <button onClick={handleClickName}>Сменить имя</button>
      <button onClick={() => setCount((value) => value + 1)}>
        Другой счётчик: {count}
      </button>
      <button onClick={handleClickAge}>Увеличить возраст</button>
      <button onClick={handleToggleActive}>Переключить активность</button>
    </div>
  )
}
export default UserProfil
