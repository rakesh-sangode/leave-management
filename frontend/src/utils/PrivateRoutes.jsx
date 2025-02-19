import React from 'react'
import { userAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = userAuth()
  if (loading) {
    return <div>Loading...</div>
  }

  return user ? children : <Navigate to="/login" />
}

export default PrivateRoutes
