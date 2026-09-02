import List from './components/List'
import { useRef, useState } from 'react'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Анна', age: 25 },
    { id: 2, name: 'Максим', age: 30 },
    { id: 3, name: 'Елена', age: 22 },
    { id: 4, name: 'Дмитрий', age: 35 },
    { id: 5, name: 'Ольга', age: 28 },
    { id: 6, name: 'Сергей', age: 40 },
    { id: 7, name: 'Мария', age: 19 },
    { id: 8, name: 'Иван', age: 33 },
    { id: 9, name: 'Татьяна', age: 27 },
    { id: 10, name: 'Алексей', age: 29 },
  ])
  const inputRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newUser = {
        id: Date.now(),
        name: e.target.value,
        age: Math.floor(Math.random() * 30) + 18,
      }
      setUsers([...users, newUser])
      e.target.value = ''
    }
  }

  const handleClick = () => {
    inputRef.current.focus()
  }
  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Введите имя"
        />
        <button onClick={handleClick}>Фокус</button>
      </div>
      <List users={users} />
    </>
  )
}

export default App
