import { useContext } from 'react'
import ThemeContext from '../shared/lib/theme'
import { HomePage } from '../pages/home'
import './styles/index.css'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`theme theme--${theme}`}>
      <HomePage />
    </div>
  )
}

export default App
