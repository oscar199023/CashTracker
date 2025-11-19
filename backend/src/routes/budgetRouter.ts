import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    console.log('Desde Budgets')
})



export default router