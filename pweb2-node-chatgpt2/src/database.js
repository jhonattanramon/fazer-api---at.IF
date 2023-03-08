const Sequelize = require('sequelize');

const sequelize = new Sequelize('alunos-chatgpt', 'root', 'mysql123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
