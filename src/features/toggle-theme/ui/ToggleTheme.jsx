import { useContext } from 'react'
import ThemeContext from '../../../shared/lib/theme'
import { Button } from '../../../shared/ui/button'

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Button onClick={toggleTheme} aria-pressed={theme === 'dark'}>
      {theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}
    </Button>
  )
}

export default ToggleTheme
