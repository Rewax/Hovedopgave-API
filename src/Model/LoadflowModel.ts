import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import sequelizeConnection from '../Config/DbConfig';
import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Config/DbConfig.js';

class LoadflowModel extends Model { }

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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

const filePath = path.resolve(__dirname, '../loadflow_data_nkforsyning.json');

fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }

    const jsonData = JSON.parse(data);

    try {
        await LoadflowModel.bulkCreate(jsonData);
        console.log('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data into the database:', error);
    }
});

export { LoadflowModel };
