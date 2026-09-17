import products from '../data/products'
import { useParams, useNavigate } from 'react-router'

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find((item) => item.id == id)
  if (!product) {
    return (
      <>
        <h3>Товар не найден</h3>
        <button onClick={() => navigate('/catalog')}>Назад в каталог</button>
      </>
    )
  }
  return (
    <>
      <h1>{product.name}</h1>
      <p>Стоимость: {product.price}</p>
      <p>Артикул: {product.id}</p>
      <button onClick={() => navigate('/catalog')}>Назад в каталог</button>
    </>
  )
}
export default ProductPage
