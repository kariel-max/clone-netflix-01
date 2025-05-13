"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
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
});
exports.default = (sequelize);
