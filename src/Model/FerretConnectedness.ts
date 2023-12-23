import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Model, DataTypes } from 'sequelize';
import sequelizeConnection from '../Config/DbConfig.js';

class FerretConnectedness extends Model { }

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

FerretConnectedness.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING, // Assuming "name" corresponds to "tenant" in the JSON
        },
        version_id: {
            type: DataTypes.INTEGER,
        },
        overall_connectedness: {
            type: DataTypes.FLOAT,
        },
        time_finished: {
            type: DataTypes.DATE,
        },
        time_started: {
            type: DataTypes.DATE,
        },
        // Add additional columns for values_by_station
        station_name: {
            type: DataTypes.STRING,
        },
        connectedness: {
            type: DataTypes.FLOAT,
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: 'FerretCount',
        freezeTableName: true,
    }
);

// const filePath = path.resolve(__dirname, '../ferret_connectedness_data.json');

// fs.readFile(filePath, 'utf8', async (err, data) => {
//     if (err) {
//         console.error('Error reading the JSON file:', err);
//         return;
//     }

//     const jsonData = JSON.parse(data);

//     try {
//         // Extract values from the JSON object and create a FerretConnectedness instance
//         const ferretCountInstance = await FerretConnectedness.create({
//             name: jsonData.name,
//             version_id: jsonData.version_id,
//             overall_connectedness: jsonData.overall_connectedness,
//             time_finished: jsonData.time_finished,
//             time_started: jsonData.time_started,
//             values_by_station: jsonData.values_by_station?.map((station: any) => ({
//                 station_name: station.station_name,
//                 connectedness: station.connectedness,
//             })),
//         }, {
//             include: [FerretConnectedness.associations.values_by_station],
//         });

//         // Save the instance to the database
//         await ferretCountInstance.save();

//         console.log('Data inserted successfully!');
//     } catch (error) {
//         console.error('Error inserting data into the database:', error);
//     }
// });

export { FerretConnectedness };
