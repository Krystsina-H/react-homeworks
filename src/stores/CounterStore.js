import { dispatcher } from '../dispatcher/dispatcher.js'

let count = 0

const subscribers = new Set()
function emitChange() {
  subscribers.forEach((listener) => {
    listener()
  })
}
dispatcher.register((action) => {
  switch (action.type) {
    case 'INCREMENT':
      count += 1
      break
    case 'DECREMENT':
      count -= 1
      break
    case 'RESET':
      count = 0
      break
    default:
      return
  }
  emitChange()
})

export const counterStore = {
  getState() {
    return count
  },
  subscribe(listener) {
    subscribers.add(listener)
    return () => {
      subscribers.delete(listener)
    }
  },
}
