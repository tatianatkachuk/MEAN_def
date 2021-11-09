import { Router } from 'express'
const router = Router();
import {getEmployees, createEmployee, deleteEmployee, updateEmployee, getEmployee} from '../controllers/employees.controller'

// Routes
router.route('/employees')
    .get(getEmployees)
    .post(createEmployee);

router.route('/employees/:id')
    .get(getEmployee)
    .delete(deleteEmployee)
    .put(updateEmployee);

export default router;