/**
 * Sequelize configuration
 * @module config/config
 */
require('dotenv').config();

module.exports = {
    development: {
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: process.env.PG_DIALECT,
    }
};
