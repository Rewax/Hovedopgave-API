import fs, { cp } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FerretCountModel } from '../Model/FerretCountModel.js';
import { LoadflowModel } from '../Model/LoadflowModel.js';
import { FerretConnectedness } from '../Model/FerretConnectedness.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

async function synchronizeDatabase() {
    try {
        const isDev = process.env.NODE_ENV === 'dev'

        // Sync the database
        await FerretCountModel.sync({ alter: true });
        await LoadflowModel.sync({ alter: true });
        await FerretConnectedness.sync({ alter: true });

        // Create bulk data
        if (parseInt(process.env.SQL_CREATE_TEST_DATA) === 1) {

            const filePath = path.resolve(__dirname, '../ferret_count_data.json');
            const filePath2 = path.resolve(__dirname, '../loadflow_data_nkforsyning.json')
            const filePath3 = path.resolve(__dirname, '../ferret_connectedness_data.json');

            // fs.readFile(filePath, 'utf8', async (err, data) => {
            //     if (err) {
            //         console.error('Error reading the JSON file:', err);
            //         return;
            //     }

            //     const jsonData = JSON.parse(data);

            //     try {
            //         await FerretCountModel.bulkCreate(jsonData);
            //         console.log('Data inserted successfully!');
            //     } catch (error) {
            //         console.error('Error inserting data into the database:', error);
            //     }
            // });

            // fs.readFile(filePath2, 'utf8', async (err, data) => {
            //     if (err) {
            //         console.error('Error reading the JSON file:', err);
            //         return;
            //     }

            //     const jsonData = JSON.parse(data);

            //     try {
            //         await LoadflowModel.bulkCreate(jsonData);
            //         console.log('Data inserted successfully!');
            //     } catch (error) {
            //         console.error('Error inserting data into the database:', error);
            //     }
            // });

            fs.readFile(filePath3, 'utf8', async (err, data) => {
                if (err) {
                    console.error('Error reading the JSON file:', err);
                    return;
                }

                const jsonData = JSON.parse(data);

                try {
                    await FerretConnectedness.bulkCreate(jsonData);
                    console.log('Data inserted successfully!');
                } catch (error) {
                    console.error('Error inserting data into the database:', error);
                }
            });


            // fs.readFile(filePath3, 'utf8', async (err, data) => {
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


        }

        console.log('Database synchronization complete.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}



export default { synchronizeDatabase };
