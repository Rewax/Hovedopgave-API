import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Config/DbConfig.js';

class LoadflowModel extends Model { }

LoadflowModel.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        primary_substation: {
            type: DataTypes.STRING,
        },
        period: {
            type: DataTypes.DATE,
        },
        n_timestamps: {
            type: DataTypes.INTEGER,
        },
        n_failed: {
            type: DataTypes.INTEGER,
        },
        n_successful: {
            type: DataTypes.INTEGER,
        },
        success_percentage: {
            type: DataTypes.FLOAT,
        },
        simulation_id: {
            type: DataTypes.INTEGER,
        },
        version_id: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'Loadflow',
        freezeTableName: true,
    }
);

export { LoadflowModel };
