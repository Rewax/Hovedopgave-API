import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Config/DbConfig.js';

class FerretConnectedness extends Model { }

FerretConnectedness.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        version_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        overall_connectedness: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        time_finished: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time_started: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        values_by_station: {
            type: DataTypes.JSONB, // JSONB for storing an array of JSON objects
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'FerretConnectedness',
        freezeTableName: true,
    }
);

export { FerretConnectedness };
