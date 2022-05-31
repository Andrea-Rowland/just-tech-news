// import the sequelize constructor from the library
const Sequelize = require('sequelize');

// create connection to our database, pass in your MySQL information for username and password
const sequalize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialiect: 'mysql',
    port: 3306
});

module.exports = sequelize;