import { useState } from 'react'
const ListItem = ({ item }) => {
  const [state, setState] = useState(item.title)

  return (
    <li>
      {item.title}
      <input value={state} onChange={(event) => setState(event.target.value)} />
    </li>
  )
}

export default ListItem
