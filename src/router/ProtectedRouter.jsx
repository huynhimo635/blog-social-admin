import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../components/Common/Layout'

function ProtectedRouter() {
  const isAuth = useSelector((state) => state.auth.value)
  return isAuth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  )
}

export default ProtectedRouter
