const TOKEN = 'access_token'

export const tokenStorage = {
  get: () => localStorage.getItem(TOKEN),
  set: (value) => {
    localStorage.setItem(TOKEN, value)
  },
  remove: () => localStorage.removeItem(TOKEN),
  isAuthorized: () => Boolean(localStorage.getItem(TOKEN)),
}
