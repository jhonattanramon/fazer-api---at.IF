const Sequelize =  require('sequelize');

const sequelize = new Sequelize('bd_api','aluno.ifal', 'aluno.ifal' ,{
    host: 'localhost',
    dialect:'mysql'
})

module.exports = sequelize