import React from 'react'
import { userAuth } from '../../context/authContext'

const Navbar = () => {
  const { user } = userAuth()
  return (
    <div className="flex justify-between items-center text-white h-12 bg-teal-600 px-5">
      <p>Welcome {user.name}</p>
      <button className="px-4 py-1 bg-teal-700 hover:bg-teal-800">
        Logout
      </button>
    </div>
  )
}

export default Navbar
