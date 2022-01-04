const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
const conn = require("./database");

//Relacionamento
const Resposta = conn.define('resposta', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
      type: sequelize.INTEGER,
      allowNull: false   
    }
});

Resposta.sync({force: false});

module.exports = Resposta;