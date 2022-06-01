// import the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequalize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialiect: 'mysql',
    port: 3306
});

module.exports = sequelize;