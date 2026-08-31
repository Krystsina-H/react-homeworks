import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Увеличить</button>
    </div>
  )
}
export default Counter
