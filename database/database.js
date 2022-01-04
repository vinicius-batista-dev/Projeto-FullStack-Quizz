const sequelize = require('sequelize');

const conn = new sequelize('guiaperguntas', 'root', 'senha123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn;