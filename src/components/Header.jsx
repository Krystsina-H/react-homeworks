import LanguageContext from '../contexts/LanguageContext'
import ThemeContext from '../contexts/ThemeContext'
import translations from '../translations'
import { useContext } from 'react'
const Header = () => {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  return (
    <header className={`header header--${theme}`}>
      <h2>{translations[language].welcome}</h2>
    </header>
  )
}
export default Header
