const GalleryControls = ({
  count,
  setCount,
  setRefreshes,
  loadDogs,
  selectedBreed,
  setSelectedBreed,
  breeds,
}) => {
  const handleChange = (e) => {
    const value = e.target.value
    if (value === '') {
      setCount('')
      return
    }
    const nextCount = Number(value)
    if (nextCount >= 1 && nextCount <= 50) {
      setCount(nextCount)
    }
  }
  const handleClick = () => {
    if (count === '') {
      return
    }
    setRefreshes((current) => current + 1)
    loadDogs()
  }

  const handleBreedChange = (e) => {
    const nextBreed = e.target.value
    setSelectedBreed(nextBreed)
    setRefreshes((current) => current + 1)
    loadDogs(nextBreed)
  }

  return (
    <>
      <label>
        Порода
        <select value={selectedBreed} onChange={handleBreedChange}>
          <option value="">Все породы</option>
          {breeds.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Показать
        <input
          type="number"
          min="1"
          max="50"
          value={count}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleClick}>ОБНОВИТЬ</button>
    </>
  )
}
export default GalleryControls
