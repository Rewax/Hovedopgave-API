import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Config/DbConfig.js';

class ForbrugsModel extends Model { }

ForbrugsModel.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        installation_number_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'Forbrug',
        freezeTableName: true,
    }
);

export { ForbrugsModel };
