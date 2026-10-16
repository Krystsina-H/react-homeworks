import { useInfiniteQuery } from '@tanstack/react-query'
import { getPokemon } from '../api/pokemonApi'

const InfinitePage = () => {
  const itemsPerLoad = 10
  const {
    data: queryData,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pokemon', 'infinite'],
    queryFn: ({ pageParam }) =>
      getPokemon({
        limit: itemsPerLoad,
        offset: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) {
        return undefined
      }
      return allPages.length * itemsPerLoad
    },
  })

  const loadMoreItems = () => {
    fetchNextPage()
  }
  if (isPending) {
    return <p>Загрузка покемонов...</p>
  }
  if (isError) {
    return <p>Ошибка: {error.message}</p>
  }
  const data = queryData.pages.flatMap((page) => page.results)

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}

      {isFetchingNextPage && <p>Загрузка...</p>}
      {hasNextPage && (
        <button
          type="button"
          onClick={loadMoreItems}
          disabled={isFetchingNextPage}
        >
          Загрузить ещё
        </button>
      )}
    </div>
  )
}

export default InfinitePage
