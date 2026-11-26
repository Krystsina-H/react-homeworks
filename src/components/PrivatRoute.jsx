import { Outlet, Navigate } from 'react-router'
import { token } from '../helpers/token'

const PrivateRoute = () => {
  const isAuthenticated = !!token.get()
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />
}

export default PrivateRoute
