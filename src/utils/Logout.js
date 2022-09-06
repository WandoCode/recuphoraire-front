import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

function Logout() {
  const { logOut } = useContext(AuthContext)
  logOut()
  return <Navigate to="/login" />
}

export default Logout
