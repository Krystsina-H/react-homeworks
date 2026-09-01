const ChildComponent = ({ name, counter }) => {
  return (
    <div>
      Привет, {name}!. Текущий счётчик: {counter}
    </div>
  )
}
export default ChildComponent
