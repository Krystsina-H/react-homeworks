import products from '../data/products'
import { Link } from 'react-router'

const CatalogPage = () => {
  return (
    <>
      <h1>Каталог товаров:</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>
              {item.name} — {item.price} Br{' '}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default CatalogPage
