const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Тип action: ', action.type)
  console.log('состояние до action: ', store.getState())
  const result = next(action)
  console.log('состояние после action: ', store.getState())
  return result
}

export default loggerMiddleware
