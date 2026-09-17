import { NavLink, Outlet } from 'react-router'

const Layout = ({ isAuthenticated, onToggleAuth }) => {
  const getLinkClassName = ({ isActive }) => {
    return isActive ? 'nav-link nav-link--active' : 'nav-link'
  }
  return (
    <>
      <nav className="navigation">
        <NavLink to="/" end className={getLinkClassName}>
          Главная
        </NavLink>
        <NavLink to="/catalog" className={getLinkClassName}>
          Каталог
        </NavLink>
        <NavLink to="/profile" className={getLinkClassName}>
          Профиль
        </NavLink>
        <button type="button" onClick={onToggleAuth}>
          {isAuthenticated ? 'Выйти' : 'Войти'}
        </button>
      </nav>
      <Outlet />
    </>
  )
}
export default Layout
