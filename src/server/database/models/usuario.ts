import {  Model, DataTypes } from 'sequelize';
import sequelize from '../Sequelize/sequelize';

export class IUsuario extends Model {
    public id?: number;
    public name?: string;
    public email?: string;
    public senha?: string;
}

IUsuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName:'IUsuario',
    tableName: 'users',
    timestamps: true,
});

export default IUsuario;