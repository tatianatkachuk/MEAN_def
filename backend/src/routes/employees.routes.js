"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var employees_controller_1 = require("../controllers/employees.controller");
// Routes
router.route('/employees')
    .get(employees_controller_1.getEmployees)
    .post(employees_controller_1.createEmployee);
router.route('/employees/:id')
    .get(employees_controller_1.getEmployee)
    .delete(employees_controller_1.deleteEmployee)
    .put(employees_controller_1.updateEmployee);
exports.default = router;
