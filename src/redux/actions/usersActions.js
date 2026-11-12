export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_START' })
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`)
      }
      const data = await response.json()
      dispatch({ type: 'FETCH_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message })
    }
  }
}
