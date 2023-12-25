import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Config/DbConfig.js';

class StationsModel extends Model { }

StationsModel.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.JSONB,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'Station',
        freezeTableName: true,
    }
);

export { StationsModel };
