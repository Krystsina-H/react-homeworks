import { createItem, deleteItem, getItems } from '../services/itemsService'
import { useState, useEffect } from 'react'
import { Typography, Button } from 'antd'

const { Title } = Typography

const ItemPage = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadingItems = async () => {
      try {
        setLoading(true)
        const data = await getItems()
        setItems(data.slice(0, 20))
      } catch (error) {
        console.error(error)
        setError('Не удалось загрузить список')
      } finally {
        setLoading(false)
      }
    }
    loadingItems()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim()) {
      setError('Введите имя животного.')
      return
    }

    try {
      setCreating(true)
      setError('')
      const newPet = {
        id: Date.now(),
        name: name.trim(),
        photoUrls: [],
        status: 'available',
      }
      const createdPet = await createItem(newPet)
      setItems((prev) => [createdPet, ...prev])
      setName('')
    } catch (error) {
      console.error(error)
      setError('Не удалось создать животное.')
    } finally {
      setCreating(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      setError('')
      await deleteItem(id)
      setItems((items) => items.filter((item) => item.id !== id))
    } catch (error) {
      console.error(error)
      setError('Не удалось удалить животное.')
    }
  }
  if (loading) {
    return <Title level={2}>Загрузка данных...</Title>
  }
  return (
    <div>
      <Title level={2}>Список животных:</Title>
      <form onSubmit={handleSubmit}>
        <label>Имя животного</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <Button htmlType="submit" disabled={creating}>
          {creating ? 'Создание...' : 'Добавить'}
        </Button>
      </form>
      {error && <Typography.Text type="danger">{error}</Typography.Text>}
      {items.length === 0 ? (
        <Title level={2}>Животные не найдены</Title>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {' '}
              <span>
                {item.name}
                {item.status}
              </span>
              <Button onClick={() => handleDelete(item.id)}>удалить</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default ItemPage
