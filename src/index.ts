import { server } from "./server/Server";
import sequelize from "./server/database/Sequelize/sequelize";

const port = Number(process.env.PORT || 8080)

server.listen(port, '0.0.0.0', () => {
    console.log('Servidor conectado!');
});

(async ()=> {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem-sucedida!');
        await sequelize.sync({alter: true});
        console.log('Banco de dados sincronizado!');
    } catch (error) {
        console.error('erro ao sincronizar banco:', error);
    }
})();