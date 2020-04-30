import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';

export class User extends Model {

    public id!: number;
    public name!: string;
    public age!: number;
    public country!: string;
    public email!: string;

};

User.init({
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    age: {
        type: new DataTypes.NUMBER(),
        allowNull: false
    },
    country: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
},{
    sequelize,
    modelName: 'user',
    timestamps: false
})