import { useState } from 'react'
const ColorText = () => {
  const [color, setColor] = useState('red')
  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red')
  }
  const style = { color: color }
  return (
    <div>
      <p style={style}>Можно изменить цвет этого текста</p>
      <button onClick={handleClick}>Изменить цвет</button>
    </div>
  )
}
export default ColorText
