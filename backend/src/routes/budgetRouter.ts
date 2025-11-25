import { Router } from 'express'
import { BudgetController } from '../Controllers/BudgetController'

const router = Router()

router.get('/', BudgetController.getAll)
router.post('/', BudgetController.create)



export default router