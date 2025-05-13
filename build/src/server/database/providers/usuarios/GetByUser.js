"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = void 0;
const usuario_1 = require("../../models/usuario");
const getByUser = async (email, senha) => {
    try {
        const result = await usuario_1.IUsuario.findOne({
            where: {
                email: email,
                senha: senha
            }
        });
        if (result)
            return result;
        return new Error('Registro não encotrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Error ao consultar o registro');
    }
};
exports.getByUser = getByUser;
