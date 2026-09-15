import { ToggleTheme } from '../../../features/toggle-theme'
import './Header.css'

const Header = () => (
  <header className="header">
    <h1>React Homeworks</h1>
    <ToggleTheme />
  </header>
)

export default Header
