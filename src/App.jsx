import './App.css'
import ThemeContext from './context/ThemeContext'
import { useContext } from 'react'
import { Button, Typography } from 'antd'
import Cart from './components/Cart'
import Login from './components/Login'

const { Text } = Typography

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={`theme theme--${theme}`}>
      <header className="app-header">
        <Text className="storage-value">localStorage: theme = {theme}</Text>
        <Button type="dashed" onClick={toggleTheme}>
          Переключить тему
        </Button>
      </header>
      <Cart />
      <Login />
    </div>
  )
}
export default App
