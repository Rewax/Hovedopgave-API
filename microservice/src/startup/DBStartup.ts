import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FerretCountModel } from '../Model/FerretCountModel.js';
import { LoadflowModel } from '../Model/LoadflowModel.js';
import { FerretConnectedness } from '../Model/FerretConnectednessModel.js';
import { StationsModel } from '../Model/StationsModel.js';
import { ForbrugsModel } from '../Model/ForbrugsModel.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

async function synchronizeDatabase() {
    try {
        const isDev = process.env.NODE_ENV === 'dev'

        // Sync the database
        await FerretCountModel.sync({ alter: true });
        await LoadflowModel.sync({ alter: true });
        await FerretConnectedness.sync({ alter: true });
        await StationsModel.sync({ alter: true });
        await ForbrugsModel.sync({ alter: true });


        // Create bulk data
        if (parseInt(process.env.SQL_CREATE_TEST_DATA) === 1) {

            const ferretCount = path.resolve(__dirname, '../ferret_count_data.json');
            const loadflow = path.resolve(__dirname, '../loadflow_data_nkforsyning.json')
            const FerretConnectednes = path.resolve(__dirname, '../ferret_connectedness_data.json');

            fs.readFile(ferretCount, 'utf8', async (err, data) => {
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

            fs.readFile(loadflow, 'utf8', async (err, data) => {
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

            fs.readFile(FerretConnectednes, 'utf8', async (err, data) => {
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

            const stations = path.resolve(__dirname, '../station.json');

            fs.readFile(stations, 'utf8', async (err, data) => {
                if (err) {
                    console.error('Error reading the JSON file:', err);
                    return;
                }

                const jsonData = JSON.parse(data);

                try {
                    await StationsModel.bulkCreate(jsonData);
                    console.log('Data inserted successfully!');
                } catch (error) {
                    console.error('Error inserting data into the database:', error);
                }
            });

            const forbrug = path.resolve(__dirname, '../forbrugsdata-nk.json');

            fs.readFile(forbrug, 'utf8', async (err, data) => {
                if (err) {
                    console.error('Error reading the JSON file:', err);
                    return;
                }

                const jsonData = JSON.parse(data);

                try {
                    await ForbrugsModel.bulkCreate(jsonData);
                    console.log('Data inserted successfully!');
                } catch (error) {
                    console.error('Error inserting data into the database:', error);
                }
            });

        }

        console.log('Database synchronization complete.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}



export default { synchronizeDatabase };
