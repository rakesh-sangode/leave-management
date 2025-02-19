import React from 'react'
import { userAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({ children, requiredRole }) => {
  const { user, loading } = userAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  // Properly return Navigate component if user role doesn't match
  if (!requiredRole.includes(user.role)) {
    return <Navigate to="/unauthorized" />
  }

  return user ? children : <Navigate to="/login" />
}

export default RoleBaseRoutes
