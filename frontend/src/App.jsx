import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import EmployeeDashboard from './pages/EmployeeDashboard'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBaseRoutes from './utils/RoleBaseRoutes'
import AdminSummary from './components/dashaboard/AdminSummary'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/admin-dashboard" />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={['admin']}>
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }
        >
          <Route
            index
            element={<AdminSummary />}
          />
          <Route
            path="/admin-dashboard/departments"
            index
            element={<DepartmentList />}
          />
          <Route
            path="/admin-dashboard/add-department"
            index
            element={<AddDepartment />}
          />
        </Route>
        <Route
          path="/employee-dashboard"
          element={<EmployeeDashboard />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
