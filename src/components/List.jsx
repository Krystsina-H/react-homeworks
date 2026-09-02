import { useState, useEffect } from 'react'

const List = ({ users }) => {
  const [userList, setUserList] = useState(users)

  useEffect(() => {
    setUserList(users)
  }, [users])

  const handleClick = (id) => {
    setUserList((prevUser) =>
      prevUser.map((item) =>
        item.id === id ? { ...item, name: item.name + '!!!' } : item
      )
    )
  }
  return (
    <>
      <ul>
        {userList.map((item) => (
          <li key={item.id}>
            <p>{item.id}</p>
            <p>Имя: {item.name}</p>
            <p>Возраст: {item.age}</p>
            <button onClick={() => handleClick(item.id)}>!!!</button>
            ----------------------------
          </li>
        ))}
      </ul>
    </>
  )
}
export default List
