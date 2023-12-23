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
        modelName: 'FerretConnectedness',
        tableName: 'ferret_connectedness',
        freezeTableName: true,
    }
);



// const filePath = path.resolve(__dirname, '../ferret_connectedness_data.json');

// fs.readFile('../ferret_connectedness_data.json', 'utf8', async (err, data) => {
//     if (err) {
//         console.error('Error reading the JSON file:', err);
//         return;
//     }

//     const jsonData = JSON.parse(data);

//     console.log(jsonData);

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
