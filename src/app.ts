import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import syncDb from './startup/DBStartup.js';
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import Swagger from './Config/Swagger.js';
import router from './Routes/router.js';

dotenv.config();

if (parseInt(process.env.SQL_SYNC_DATA) === 1) {
  // syncDb.synchronizeDatabase();
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(Swagger.options)));

const port = process.env.PORT || 3004;

app.listen(port, () =>
  console.log(`Listening on port ${port} in ${process.env.ENVIRONMENT}`)
);