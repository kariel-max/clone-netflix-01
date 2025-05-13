"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUsuario = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../Sequelize/sequelize"));
class IUsuario extends sequelize_1.Model {
}
exports.IUsuario = IUsuario;
IUsuario.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: sequelize_2.default,
    modelName: 'IUsuario',
    tableName: 'users',
    timestamps: true,
});
exports.default = IUsuario;
