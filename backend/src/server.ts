import express from 'express' 
import colors from 'colors'
import morgan from 'morgan'
import { db } from './config/db'


async function connectDB(){
    try {
        await db.authenticate()
        //nos crea de forma automatica las tablas en la base de datos en automatico
        db.sync()
        console.log(colors.blue.bold('Conexion exitosa a la BD'))
    } catch (error) {
        console.log(error)
    }
}
connectDB()


const app = express()

app.use(morgan('dev'))

app.use(express.json())



export default app