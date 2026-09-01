import { useState } from 'react'

const UserProfil = () => {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  })

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
      <p>Имя:{user.name}</p>
      <p>Возраст:{user.age}</p>
      <p>Активен:{user.isActive ? 'Да' : 'Нет'}</p>
      <button onClick={handleClickName}>Сменить имя</button>
      <button onClick={handleClickAge}>Увеличить возраст</button>
      <button onClick={handleToggleActive}>Переключить активность</button>
    </div>
  )
}
export default UserProfil
