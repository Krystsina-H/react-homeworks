import { Navigate, Outlet } from 'react-router'
import { tokenStorage } from '../utils/tokenStorage'

const PrivateRoute = () => {
  if (!tokenStorage.isAuthorized()) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}
export default PrivateRoute
