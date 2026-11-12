import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import inputTextReducer from './reducers/inputTetReducer'
import tasksReducer from './reducers/tasksReducer'
import filterReducer from './reducers/filterReducer'
import usersReducer from './reducers/usersReducer'
import { thunk } from 'redux-thunk'
import loggerMiddleware from './middleware/loggerMiddleware'

const rootReducer = combineReducers({
  text: inputTextReducer,
  tasks: tasksReducer,
  filter: filterReducer,
  users: usersReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
)

export default store
