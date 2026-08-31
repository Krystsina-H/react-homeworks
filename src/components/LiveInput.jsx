import { useState } from 'react'

const LiveInput = () => {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <label>
        Введите что-нибудь
        <input type="text" onChange={handleChange} value={text} />
      </label>
      <p>{text}</p>
    </div>
  )
}
export default LiveInput
