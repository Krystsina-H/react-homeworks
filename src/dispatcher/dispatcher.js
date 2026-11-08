const callbacks = new Set()

export const dispatcher = {
  register(callback) {
    callbacks.add(callback)
    return () => {
      callbacks.delete(callback)
    }
  },
  dispatch(action) {
    callbacks.forEach((callback) => {
      callback(action)
    })
  },
}
