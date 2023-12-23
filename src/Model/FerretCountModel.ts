import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import sequelizeConnection from '../Config/DbConfig';
import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Config/DbConfig.js';

class FerretCountModel extends Model { }

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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

const filePath = path.resolve(__dirname, '../ferret_count_data.json');

fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }

    const jsonData = JSON.parse(data);

    try {
        await FerretCountModel.bulkCreate(jsonData);
        console.log('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data into the database:', error);
    }
});

export { FerretCountModel };
