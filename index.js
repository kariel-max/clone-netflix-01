"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./build/src/server/Server");
const sequelize_1 = __importDefault(require("./build/src/server/database/Sequelize/sequelize"));
const port = Number(process.env.PORT || 8080);
Server_1.server.listen(port, '0.0.0.0', () => {
    console.log('Servidor conectado!');
});
(async () => {
    try {
        await sequelize_1.default.authenticate();
        console.log('Conexão bem-sucedida!');
        await sequelize_1.default.sync({ alter: true });
        console.log('Banco de dados sincronizado!');
    }
    catch (error) {
        console.error('erro ao sincronizar banco:', error);
    }
})();
