import './App.css'
import { useContext } from 'react'
import ControlsPanel from './components/ControlsPanel'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import ThemeContext from './contexts/ThemeContext'

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`app app--${theme}`}>
      <Header />
      <ControlsPanel />
      <UserProfile />
    </div>
  )
}
export default App
