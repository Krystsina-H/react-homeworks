import { useNavigate } from 'react-router'
const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Профиль</h1>
      <h2>Доступен после регистрации!!!</h2>
      <button onClick={() => navigate('/')}>На главную</button>
    </>
  )
}
export default ProfilePage
