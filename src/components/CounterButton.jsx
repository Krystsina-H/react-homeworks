import { memo } from 'react'
const CounterButton = ({ count, handleClick }) => {
  return (
    <>
      <h3>Счётчик: {count}</h3>
      <button onClick={handleClick}>Увеличить</button>
    </>
  )
}
export default memo(CounterButton)
