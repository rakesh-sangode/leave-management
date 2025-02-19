import React, { useState } from 'react'
import axios from 'axios'
import { userAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login } = userAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password,
        },
      )
      console.log('Login successful:', response.data)
      if (response.data.success) {
        login(response.data.user)
        localStorage.setItem('token', response.data.token)
        if (response.data.user.role === 'admin') {
          navigate('/admin-dashboard')
        } else {
          navigate('/employee-dashboard')
        }
      }
    } catch (error) {
      console.error('Login error:', error)
      if (error.response && !error.response.data.success) {
        setError(
          error.response?.data?.error ||
            error.response?.data?.message ||
            'An error occurred during login',
        )
      }
    }
  }
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 to-gray-500 to-50% from-50% space-y-6">
      <h2 className="font-sevi11ana text-3x1 text-white">
        Leave Management System
      </h2>
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border"
              placeholder="Enter Email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full py-2 px-3 border"
              placeholder="Enter Password"
              required
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a
              href="#"
              className="text-teal-600"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 bg-teal-600 rounded hover:bg-teal-700 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
