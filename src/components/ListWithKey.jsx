import ListItem from './ListItem'
const ListWithKey = ({ items }) => {
  return (
    <>
      <h3>Ключ id</h3>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  )
}
export default ListWithKey
