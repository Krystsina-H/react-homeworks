import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPokemon } from '../api/pokemonApi'
import PokemonList from '../components/PokemonList'

const PaginationPage = () => {
  const itemsPerPage = 10
  const visiblePagesCount = 5
  const [currentPage, setCurrentPage] = useState(1)
  const offset = (currentPage - 1) * itemsPerPage
  const { data, isPending, isError, error, isFetching } = useQuery({
    queryKey: ['pokemon', currentPage],
    queryFn: () =>
      getPokemon({
        limit: itemsPerPage,
        offset,
      }),
  })
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  if (isPending) {
    return <p>Загрузка покемонов...</p>
  }
  if (isError) {
    return <p>Ошибка: {error.message}</p>
  }
  const currentItems = data.results
  const totalPages = Math.ceil(data.count / itemsPerPage)
  const startPage = Math.max(
    1,
    Math.min(currentPage - 2, totalPages - visiblePagesCount + 1)
  )
  const visiblePages = Array.from(
    {
      length: Math.min(visiblePagesCount, totalPages),
    },
    (_, index) => startPage + index
  )
  return (
    <div>
      <h1>Пагинация</h1>
      {isFetching && <p>Загрузка...</p>}
      <PokemonList pokemon={currentItems} />
      <div>
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ←
        </button>
        {visiblePages.map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default PaginationPage
