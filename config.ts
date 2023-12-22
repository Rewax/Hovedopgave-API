import * as dotenv from 'dotenv';

dotenv.config({
  path: '${__dirname}/../.env'
});

export const port = Number(process.env.API_PORT);
export const db_host = String(process.env.PROD_SQL_HOST);
export const db_port = Number(process.env.PROD_SQL_PORT);
export const db_name = String(process.env.PROD_SQL_DB);
export const db_user = String(process.env.PROD_SQL_USER);
export const db_password = String(process.env.PROD_SQL_PASS);
