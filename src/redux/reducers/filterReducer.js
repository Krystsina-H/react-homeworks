const filterReducer = (store = 'all', action) => {
  switch (action.type) {
    case 'filter':
      return action.payload

    default:
      return store
  }
}

export default filterReducer
