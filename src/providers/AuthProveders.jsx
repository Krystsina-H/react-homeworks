import { useState } from 'react'
import AuthContext from '../context/AuthContext'

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('access_token'))

  const saveToken = (newToken) => {
    localStorage.setItem('access_token', newToken)
    setToken(newToken)
  }

  const clearToken = () => {
    localStorage.removeItem('access_token')
    setToken(null)
  }
  return (
    <AuthContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
