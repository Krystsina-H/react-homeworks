import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LanguageContext from '../contexts/LanguageContext'
import translations from '../translations'

const UserProfile = () => {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  return (
    <div className={`user-profile user-profile--${theme}`}>
      <h3>{translations[language].profile}</h3>
    </div>
  )
}
export default UserProfile
