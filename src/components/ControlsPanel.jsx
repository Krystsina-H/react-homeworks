import { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ThemeContext from '../contexts/ThemeContext'

const ControlsPanel = () => {
  const { toggleLanguage, language } = useContext(LanguageContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="controls-panel">
      <button
        onClick={() => {
          toggleLanguage()
        }}
      >
        Сменить язык: {language}
      </button>
      <button onClick={() => toggleTheme()}> Сменить тему: {theme}</button>
    </div>
  )
}
export default ControlsPanel
