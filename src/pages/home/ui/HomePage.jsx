import { Header } from '../../../widgets/header'
import { ListDemo } from '../../../widgets/list-demo'
import { UserCard } from '../../../entities/user'

const user = { name: 'Кристина', role: 'Изучаю React' }

const HomePage = () => (
  <div className="home-page">
    <Header />
    <main>
      <UserCard user={user} />
      <ListDemo />
    </main>
  </div>
)

export default HomePage
