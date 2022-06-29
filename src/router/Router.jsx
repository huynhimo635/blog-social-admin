import { Routes, Route } from 'react-router-dom'

import ProtectedRouter from './ProtectedRouter'
import Login from '../pages/Login'
import DashBoard from '../pages/DashBoard'
import Category from '../pages/Category'
import User from '../pages/User'

// Form
import CategoryForm from '../pages/Form/CategoryForm'

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRouter />}>
        <Route index element={<DashBoard />} />

        <Route path="category" element={<Category />}>
          <Route path="create" element={<CategoryForm />} />
          <Route path="edit/:id" element={<CategoryForm />} />
        </Route>

        <Route path="user" element={<User />}>
          {/* <Route path="create" element={<CategoryForm />} />
          <Route path="edit/:id" element={<CategoryForm />} /> */}
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
