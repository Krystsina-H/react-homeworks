import { useState } from 'react'

function ToggleText() {
  const [text, setText] = useState(false)
  const handleClick = () => {
    setText((text) => !text)
  }
  return (
    <>
      {text && <p>ЭТОТ ТЕКСТ СКРЫВАЕТСЯ ИЛИ ПОКАЗЫВАЕТСЯ</p>}
      <button onClick={handleClick}>
        {text ? 'Скрыть текст' : 'Показать тескт'}
      </button>
    </>
  )
}
export default ToggleText
