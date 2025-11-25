import type { Request, Response } from "express"
import Budget from "../models/Budget"


export class BudgetController {
    static getAll = async (req: Request, res: Response) => {
        console.log('Desde Budgets')

    }
    
    static create = async (req: Request, res: Response) => {
        try {
            const budget = new Budget(req.body)

            await budget.save()
            res.status(201).json('Presupuesto Creado Correctamente')
        } catch (error) {
            console.log(error)
            res.status(500).json({error: 'Hubo un error'})
        }

    }
    
    static getById = async (req: Request, res: Response) => {
        console.log('Desde getById')

    }
    
    static updateById = async (req: Request, res: Response) => {
        console.log('Desde updateById')

    }
    
    static deleteById = async (req: Request, res: Response) => {
        console.log('Desde deleteById')

    }
}