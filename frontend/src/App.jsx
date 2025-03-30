import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminSummary from './components/dashaboard/AdminSummary'
import AddDepartment from './components/department/AddDepartment'
import DepartmentList from './components/department/DepartmentList'
import EditDepartment from './components/department/EditDepartment'
import Add from './components/employee/Add'
import Edit from './components/employee/Edit'
import List from './components/employee/List'
import View from './components/employee/View'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import Login from './pages/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBaseRoutes from './utils/RoleBaseRoutes'
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
            element={<DepartmentList />}
          />
          <Route
            path="/admin-dashboard/add-department"
            element={<AddDepartment />}
          />
          <Route
            path="/admin-dashboard/department/:id"
            element={<EditDepartment />}
          />
          {/* Employee Routes */}
          <Route
            path="/admin-dashboard/employees"
            element={<List />}
          />
          <Route
            path="/admin-dashboard/add-employee"
            element={<Add />}
          />
          <Route
            path="/admin-dashboard/employees/:id"
            element={<View />}
          />
          <Route
            path="/admin-dashboard/employees/edit/:id"
            element={<Edit />}
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
