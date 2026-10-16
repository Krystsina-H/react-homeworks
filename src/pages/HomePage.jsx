import { NavLink } from 'react-router'
const HomePage = () => {
  return (
    <main>
      <h1>Покемоны</h1>
      <p>Выберите режим просмотра:</p>
      <NavLink to="/pagination">Пагинация</NavLink>
      <NavLink to="/infinite">Бесконечная загрузка</NavLink>
    </main>
  )
}

export default HomePage
