import Card from './Card'
import StatusBage from './StatusBadge'

function UserCard({ name, role, experience, location, isAvailable }) {
  return (
    <Card>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>Опыт: {experience} года</p>
      <p>
        {location.city}, {location.country}
      </p>
      <p>
        <StatusBage isAvailable={isAvailable} />
      </p>
    </Card>
  )
}
export default UserCard
