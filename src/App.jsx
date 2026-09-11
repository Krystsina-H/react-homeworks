import { useContext, useState, useCallback } from 'react'
import CounterButton from './components/CounterButton'
import ItemList from './components/ItemList'
import SearchInput from './components/SearchInput'
import ThemeContext from './contexts/ThemeContext'
import './App.css'

const arr = Array.from({ length: 150 }, (_, index) => `Элемент ${index + 1}`)

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQary] = useState('')

  const handleClick = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  const handleChangeQuery = useCallback((searchQuery) => {
    setSearchQary(searchQuery)
  }, [])

  return (
    <div className={`theme theme--${theme}`}>
      <button onClick={() => toggleTheme()}>Сменить тему</button>

      <CounterButton count={count} handleClick={handleClick} />
      <SearchInput
        searchQuery={searchQuery}
        handleChangeQuery={handleChangeQuery}
      />
      <ItemList arr={arr} searchQuery={searchQuery} />
    </div>
  )
}
export default App
