import UserCard from './components/UserCard'

function App() {
  return (
    <div>
      <UserCard
        name="Павел"
        role="Frontend-разработчик"
        experience={3}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
      />
      <UserCard
        name="Кристина"
        role="Frontend-разработчик"
        experience={3}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
      />
      <UserCard
        name="Иван"
        role="Frontend-разработчик"
        experience={3}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={false}
      />
    </div>
  )
}

export default App
