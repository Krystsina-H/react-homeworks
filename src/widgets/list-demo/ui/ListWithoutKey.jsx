import ListItem from './ListItem'
const ListWithoutKey = ({ items }) => {
  return (
    <>
      <h3>Ключ index</h3>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </>
  )
}
export default ListWithoutKey
