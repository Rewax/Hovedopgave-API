import { FerretCountModel } from '../Model/FerretCountModel.js';
import fs from 'fs';
import path from 'path';
// import CompanyModel from '../Models/DatabaseModels/CompanyModel.js';
// import UserModel from '../Models/DatabaseModels/UserModel.js';
// import LogModel from '../Models/DatabaseModels/LogModel.js';

async function synchronizeDatabase() {
    try {
        const isDev = process.env.NODE_ENV === 'dev'

        // Sync the database
        await FerretCountModel.sync({ alter: true });

        // Create bulk data
        if (parseInt(process.env.SQL_CREATE_TEST_DATA) === 1) {

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

        }

        console.log('Database synchronization complete.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}



export default { synchronizeDatabase };
