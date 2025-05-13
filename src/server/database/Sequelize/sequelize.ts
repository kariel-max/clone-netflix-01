import {Sequelize} from "sequelize"

const sequelize = new Sequelize({
    database: process.env.PG_DB,
    username: process.env.PG_USER,
    password: String(process.env.PG_PASSWORD),
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
})
export default (sequelize)