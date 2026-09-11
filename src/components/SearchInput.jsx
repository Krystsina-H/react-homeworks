import { memo } from 'react'
const SearchInput = ({ searchQuery, handleChangeQuery }) => {
  return (
    <>
      <input
        type="text"
        value={searchQuery}
        placeholder="Поиск"
        onChange={(e) => handleChangeQuery(e.target.value)}
      />
    </>
  )
}
export default memo(SearchInput)
