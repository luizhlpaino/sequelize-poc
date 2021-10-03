const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    database = process.env.DB_NAME,
    username = process.env.DB_USERNAME,
    password = process.env.DB_PASSWORD,
    {
        host: process.env.DB_MSSQL_HOST,
        dialect: 'mssql'
    }
)

module.exports = sequelize;