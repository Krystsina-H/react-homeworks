const ClickPractice = () => {
  const handleClick = (event) => {
    console.log('--------------')
    console.log('event.target:', event.target)
    console.log('event.currentTarget:', event.currentTarget)
    console.log('event.target.tagName:', event.target.tagName)
    console.log('event.currentTarget.tagName:', event.currentTarget.tagName)
    console.log('--------------')
  }
  return (
    <div>
      <button onClick={handleClick}>
        <span>👍</span>
        <span>Поставить лайк</span>
      </button>
    </div>
  )
}
export default ClickPractice

//event.currentTarget всегда button, т.к. зависит от того, к чему привязан обраюотчик событий (а привязан к button).
//event.target зависит от элемента, на котором именно произошло событие (поэтому меняется:span, span, button)
