import { useCallback, memo, useState } from 'react'

const CartItem = memo(({ item, handleClickAdd, handleClickDelete }) => {
  console.log('Рендер товара: ', item)
  return (
    <li>
      {item.title}(Кол-во: {item.count})
      <button onClick={() => handleClickAdd(item.id)}>+1</button>
      <button onClick={() => handleClickDelete(item.id)}>Удалить</button>
    </li>
  )
})

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])
  const handleClickAdd = useCallback((id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    )
  }, [])
  const handleClickDelete = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }, [])

  return (
    <div>
      <h3>Корзина товаров:</h3>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem
                handleClickAdd={handleClickAdd}
                handleClickDelete={handleClickDelete}
                item={item}
                key={item.id}
              />
            ))}
          </ul>
        </>
      )}

      <button onClick={() => setCart([])}>Очистить корзину</button>
    </div>
  )
}
export default ShoppingCart
