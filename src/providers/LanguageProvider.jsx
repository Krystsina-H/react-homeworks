import { useState } from 'react'
import LanguageContext from '../contexts/LanguageContext'
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  const toggleLanguage = () => {
    setLanguage((prev) => {
      switch (prev) {
        case 'en':
          return 'ru'
        case 'ru':
          return 'de'
        case 'de':
          return 'es'
        case 'es':
          return 'en'
        default:
          return 'en'
      }
    })
  }
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
export default LanguageProvider
