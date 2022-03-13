import { Routes, Route } from 'react-router-dom'

import ProtectedRouter from './ProtectedRouter'
import Login from '../pages/Login'
import DashBoard from '../pages/DashBoard'

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRouter />}>
        <Route path="/" element={<DashBoard />} />
      </Route>
    </Routes>
  )
}

export default Router
