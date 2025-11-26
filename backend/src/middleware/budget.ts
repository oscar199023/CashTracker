import { Request, Response } from 'express'
import { param, validationResult } from 'express-validator'


export const validateBudgetId = async (req: Request, res: Response, next: NewableFunction) => {
    
    await param('id')
        .isInt().withMessage('ID no valido')
        .custom(value => value > 0).withMessage('El id es invalido')
        .run(req)

    let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next()
}