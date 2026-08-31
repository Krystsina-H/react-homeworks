function StatusBage({ isAvailable }) {
  return <>{isAvailable ? 'Доступен для проекта' : 'Сейчас занят'}</>
}
export default StatusBage
