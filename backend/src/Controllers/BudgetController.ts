import type { Request, Response } from "express"


export class BudgetController {
    static getAll = async (req: Request, res: Response) => {
        console.log('Desde Budgets')

    }
    
    static create = async (req: Request, res: Response) => {
        console.log('Desde create')

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