require('dotenv').config();
import { Sequelize } from 'sequelize';

const config: any = {
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  dialect: process.env.PG_DIALECT,
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config,
  pool: {
    max: 20, // Increased max connections
    min: 0,
    acquire: 60000, // Increased acquire timeout to 60 seconds
    idle: 10000,
  },
});

export { Sequelize, sequelize };