import { useEffect, useState } from 'react'
import { Button, Typography, Card, Flex } from 'antd'

const { Title, Text } = Typography

const initialProduct = {
  id: 1,
  name: 'Ноутбук',
  price: 1500,
  count: 1,
}

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem('cart')
    if (!savedCart) {
      return []
    }
    try {
      return JSON.parse(savedCart)
    } catch {
      return []
    }
  })

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleClickAdd = () => {
    setCart((prevCart) => {
      const product = prevCart.some((item) => item.id === initialProduct.id)
      if (product) {
        return prevCart
      }
      return [...prevCart, initialProduct]
    })
  }
  const handleClickIncrement = (id) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    )
  }

  const removeProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <section className="app-section">
      <Title level={2}>Корзина товаров</Title>
      <Flex className="section-actions" gap="small" justify="center" wrap>
        <Button type="dashed" onClick={handleClickAdd}>
          Добавить товар
        </Button>
        <Button type="dashed" onClick={clearCart} disabled={cart.length === 0}>
          Очистить корзину
        </Button>
      </Flex>
      {cart.length === 0 ? (
        <Text>Корзина пуста</Text>
      ) : (
        cart.map((item) => (
          <Card className="product-card" key={item.id} title={item.name}>
            <p>Цена: {item.price} Br</p>
            <p>Количество: {item.count}</p>
            <Flex gap="small" justify="center" wrap>
              <Button
                type="dashed"
                onClick={() => handleClickIncrement(item.id)}
              >
                Увеличить количество
              </Button>
              <Button type="dashed" onClick={() => removeProduct(item.id)}>
                Удалить товар
              </Button>
            </Flex>
          </Card>
        ))
      )}
      <Text className="storage-value">
        sessionStorage: {JSON.stringify(cart)}
      </Text>
    </section>
  )
}
export default Cart
