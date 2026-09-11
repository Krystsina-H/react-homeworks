import { memo, useState } from 'react'

const TaskItem = memo(({ item }) => {
  console.log('Рендер задачи: ', item)
  return <li key={item.id}>{item.title}</li>
})

const ToDo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Купить хлеб' },
    { id: 2, title: 'Погулять с собакой' },
  ])

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
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: crypto.randomUUID(), title: randomTask },
    ])
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
            <TaskItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <button onClick={handleAddTask}>Добавить задачу</button>
      <button onClick={handleDeleteTask}>Удалить последнюю задачу</button>
    </div>
  )
}
export default ToDo
