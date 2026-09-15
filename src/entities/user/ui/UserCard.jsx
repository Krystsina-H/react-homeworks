import './UserCard.css'

const UserCard = ({ user }) => (
  <article className="user-card">
    <h2>{user.name}</h2>
    <p>{user.role}</p>
  </article>
)

export default UserCard
