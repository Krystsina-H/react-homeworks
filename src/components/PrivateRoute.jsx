import { Navigate } from 'react-router'
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" replace />
}

export default PrivateRoute
