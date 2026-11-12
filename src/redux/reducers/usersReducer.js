const initialState = {
  data: [],
  loading: false,
  success: false,
  error: null,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, success: false, error: null }

    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true,
        error: null,
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default usersReducer
