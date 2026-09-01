import { useState } from 'react'

const SiblingComponent = () => {
  const [text, setText] = useState('')
  return (
    <div>
      <p>Текущий текст:{text}</p>
      <button onClick={() => setText('REDEV')}>Изменить текст</button>
    </div>
  )
}
export default SiblingComponent
