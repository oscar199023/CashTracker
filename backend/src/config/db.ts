import { Sequelize } from "sequelize-typescript"
import dotenv from 'dotenv'
dotenv.config()

export const db = new Sequelize( process.env.DATABASE_URL, {
    // todos los los archivos que esten dentro de la capeta modelo, sean tratados como modelo
    models: [__dirname + '/../models/**/*'],
    // no mostrara la creacion de las tablas por la terminal
    logging:false,
    dialectOptions: {
        ssl: {
            require: false
        }
    }
})
