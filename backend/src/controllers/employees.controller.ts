import { Request, Response } from 'express'

// Models
import  Employee, { IEmployee } from '../models/Employee';

export async function getEmployees(req: Request, res: Response): Promise<Response> {
    const employees = await Employee.find();
    return res.json(employees);
};

export async function createEmployee(req: Request, res: Response): Promise<Response> {
    const { name, position, office, salary } = req.body;
    console.log("hola");
    const newEmployee = { name, position, office, salary};
    const employee = new Employee(newEmployee);
    await employee.save();
    return res.json({
        message: req.body,
       // message: 'Employee Saved Successfully',
        employee
    });
}; 

export async function getEmployee(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    return res.json(employee);
}

export async function deleteEmployee(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const employee = await Employee.findByIdAndRemove(id) as IEmployee;
    return res.json({ message: 'Employee Deleted' });
};


export async function updateEmployee(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, position, salary, office } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, {
        name,
        position,
        salary,
        office
    });
    return res.json({
        message: 'Successfully updated',
        updatedEmployee
    }); 
}