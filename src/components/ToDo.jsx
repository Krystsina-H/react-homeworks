import { useState } from 'react'
const ToDo = () => {
  const [tasks, setTasks] = useState(['Купить хлеб', 'Погулять с собакой'])

  const randomTasks = [
    'Помыть посуду',
    'Сделать уборку',
    'Полить цветы',
    'Прочитать книгу',
    'Сходить в магазин',
    'Позвонить маме',
    'Сделать зарядку',
    'Выучить 10 слов',
    'Написать письмо',
    'Заплатить за интернет',
  ]

  const handleAddTask = () => {
    const randomIndex = Math.floor(Math.random() * randomTasks.length)
    const randomTask = randomTasks[randomIndex]
    setTasks([...tasks, randomTask])
  }

  const handleDeleteTask = () => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks]
      newTasks.pop()
      return newTasks
    })
  }

  return (
    <div>
      <h3>Список задач:</h3>
      <div>
        <ul>
          {tasks.map((item) => (
            <li key={item}> {item}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleAddTask}>Добавить задачу</button>
      <button onClick={handleDeleteTask}>Удалить последнюю задачу</button>
    </div>
  )
}
export default ToDo
