import React, { useEffect } from 'react'
import { userAuth } from '../context/authContext'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminSidebar from '../components/dashaboard/AdminSidebar'
import Navbar from '../components/dashaboard/Navbar'
import AdminSummary from '../components/dashaboard/AdminSummary'

const AdminDashboard = () => {
  const { user } = userAuth()

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard
