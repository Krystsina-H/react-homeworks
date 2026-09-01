const FormPractice = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Форма отправлена')
    console.log('e.currentTarget:', e.currentTarget)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={'Kristina'} />
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}
export default FormPractice
//input с фиксированным значением, просто показала, что работает отправка без перезагрузки
