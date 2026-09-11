import { useMemo, memo } from 'react'
const ItemList = ({ arr, searchQuery }) => {
  const result = useMemo(() => {
    return arr.filter((i) => i.includes(searchQuery))
  }, [arr, searchQuery])

  return (
    <>
      <ol>
        {result.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ol>
    </>
  )
}

export default memo(ItemList)
