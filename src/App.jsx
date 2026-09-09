import { useState } from 'react'
import ListWithoutKey from './components/ListWithoutKey'
import ListWithKey from './components/ListWithKey'
import './App.css'

const App = () => {
  const item = (id) => ({
    id,
    title: `Элемент ${id}`,
  })
  const arr = Array.from({ length: 10 }, (_, index) => item(index + 1))
  console.log(arr)

  const [items, setItems] = useState(arr)
  const [showElements, setShowElements] = useState(false)

  const addToStart = () => {
    const newItem = item(items.length + 1)
    setItems([newItem, ...items])
  }
  const addToEnd = () => {
    const newItem = item(items.length + 1)
    setItems([...items, newItem])
  }
  const removeFirst = () => {
    setItems((items) => items.slice(1))
  }
  const shuffleItems = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5)
    setItems(shuffled)
  }
  const updateRandom = () => {
    const randomIndex = Math.floor(Math.random() * items.length)
    setItems((currentItems) =>
      currentItems.map((item, index) =>
        index === randomIndex
          ? { ...item, title: `${item.title} — обновлён` }
          : item
      )
    )
  }

  return (
    <>
      <button onClick={() => setShowElements((item) => !item)}>
        {showElements ? 'Показать неправильный key' : 'Показать правильный key'}
      </button>
      {showElements ? (
        <ListWithKey items={items} />
      ) : (
        <ListWithoutKey items={items} />
      )}
      <button onClick={addToStart}>Добавить в начало</button>
      <button onClick={addToEnd}>Добавить в конец</button>
      <button onClick={removeFirst}>Удалить первый</button>
      <button onClick={shuffleItems}>Перемешать список</button>
      <button onClick={updateRandom}>Обновить случайный элемент</button>
    </>
  )
}
export default App
