import { Router } from 'express'
import { body } from 'express-validator'
import { BudgetController } from '../Controllers/BudgetController'
import { handleInputErrors } from '../middleware/validation'

const router = Router()

router.get('/', BudgetController.getAll)

router.post('/', 
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    body('amount')
        .notEmpty().withMessage('El precio es obligatorio')
        .isNumeric().withMessage('El precio es en numeros')
        .custom(value => value > 0).withMessage('El valor tiene que ser mayor a 0'),
    handleInputErrors,
    BudgetController.create
)

router.get('/:id', BudgetController.getById)
router.put('/:id', BudgetController.updateById)
router.delete('/:id', BudgetController.deleteById)



export default router