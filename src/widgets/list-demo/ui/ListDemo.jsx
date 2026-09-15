import { useRef, useState } from 'react'
import ListWithoutKey from './ListWithoutKey'
import ListWithKey from './ListWithKey'
import { Button } from '../../../shared/ui/button'

const ListDemo = () => {
  const item = (id) => ({
    id,
    title: `Элемент ${id}`,
  })
  const arr = Array.from({ length: 10 }, (_, index) => item(index + 1))
  const nextId = useRef(11)

  const [items, setItems] = useState(arr)
  const [showElements, setShowElements] = useState(false)

  const addToStart = () => {
    const newItem = item(nextId.current++)
    setItems([newItem, ...items])
  }
  const addToEnd = () => {
    const newItem = item(nextId.current++)
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
    <section className="list-demo" aria-label="Пример ключей в списках">
      <Button onClick={() => setShowElements((item) => !item)}>
        {showElements ? 'Показать неправильный key' : 'Показать правильный key'}
      </Button>
      {showElements ? (
        <ListWithKey items={items} />
      ) : (
        <ListWithoutKey items={items} />
      )}
      <Button onClick={addToStart}>Добавить в начало</Button>
      <Button onClick={addToEnd}>Добавить в конец</Button>
      <Button onClick={removeFirst}>Удалить первый</Button>
      <Button onClick={shuffleItems}>Перемешать список</Button>
      <Button onClick={updateRandom}>Обновить случайный элемент</Button>
    </section>
  )
}
export default ListDemo
