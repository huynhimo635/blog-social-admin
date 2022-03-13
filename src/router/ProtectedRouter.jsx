import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRouter() {
  const isAuth = useSelector((state) => state.auth.value)
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRouter
