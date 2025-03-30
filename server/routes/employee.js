import express from 'express'
import {
  addEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  upload,
} from '../controllers/employeeController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', authMiddleware, getEmployees)
router.post('/add', authMiddleware, upload.single('image'), addEmployee)
router.get('/:id', authMiddleware, getEmployee)
router.put('/:id', authMiddleware, updateEmployee)
// router.delete('/:id', authMiddleware, deleteDepartment)

export default router
