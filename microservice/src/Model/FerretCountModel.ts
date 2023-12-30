import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Config/DbConfig.js';

class FerretCountModel extends Model { }

FerretCountModel.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        count: {
            type: DataTypes.INTEGER,
        },
        version_id: {
            type: DataTypes.INTEGER,
        },
        tenant: {
            type: DataTypes.STRING,
        },
        version_time_finished: {
            type: DataTypes.DATE,
        },
        data_uploaded: {
            type: DataTypes.DATE,
        },
        asset_category: {
            type: DataTypes.STRING,
        },
        asset_type: {
            type: DataTypes.STRING,
        },
        asset_type_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'FerretCount',
        freezeTableName: true,
    }
);

export { FerretCountModel };
