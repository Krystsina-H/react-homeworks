import { useState } from 'react'
import ChildComponent from './ChildComponent'
import SiblingComponent from './SiblingComponent'
const ParentComponent = () => {
  const [counter, setCounter] = useState(0)
  const handleClickAdd = () => {
    setCounter((counter) => counter + 1)
  }
  const handleClickRandom = () => {
    setCounter(Math.floor(Math.random() * 10) + 1)
  }
  const handleClickMinus = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        return prevCounter - 1
      }
      return prevCounter
    })
  }
  return (
    <div>
      <p>count: {counter}</p>
      <button onClick={handleClickAdd}>Увеличить</button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={handleClickRandom}>Случайное значение</button>
      <button onClick={handleClickMinus}>Уменьшить</button>
      <ChildComponent name={'Кристина'} counter={counter} />
      <SiblingComponent />
    </div>
  )
}
export default ParentComponent
