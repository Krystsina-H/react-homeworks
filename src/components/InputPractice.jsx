const InputPractice = () => {
  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const handleFocus = () => {
    console.log('поле получило фокус')
  }

  const handleBlur = () => {
    console.log('поле потеряло фокус')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      console.log('Нажат Enter')
    }
  }
  return (
    <div>
      <input
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKey}
      />
    </div>
  )
}
export default InputPractice
