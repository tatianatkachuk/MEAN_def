import { Request, Response } from 'express'

// Models
import  Task, { ITask } from '../models/Task';

export async function getTasks(req: Request, res: Response): Promise<Response> {
    const tasks = await Task.find();
    return res.json(tasks);
};

export async function createTask(req: Request, res: Response): Promise<Response> {
    const { name,difficulty,deadline} = req.body;
    const newTask = {name,difficulty,deadline};
    const task = new Task(newTask);
    await task.save();
    return res.json({
        message: 'Task Saved Successfully',
        task
    });
}; 

/* export async function getEmployee(req: Request, res: Response): Promise<Response> {
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
} */