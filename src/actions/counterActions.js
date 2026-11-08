import { dispatcher } from '../dispatcher/dispatcher.js'

export const counterActions = {
  increment() {
    dispatcher.dispatch({ type: 'INCREMENT' })
  },
  decrement() {
    dispatcher.dispatch({ type: 'DECREMENT' })
  },
  reset() {
    dispatcher.dispatch({ type: 'RESET' })
  },
}
