import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'
function ProtectedRoute(props) {
  const { isLoggedIn } = useContext(AuthContext)

  if (isLoggedIn() === 'true') return props.children
  else return <Navigate to="/login" />
}

export default ProtectedRoute
