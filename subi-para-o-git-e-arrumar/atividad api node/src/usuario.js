const { Model, DataTypes} = require('sequelize')
const sequelize = require('./dataBase')

const Usuario = sequelize.define('Usuario', {
id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
},
name:{
    type: DataTypes.STRING,
    allowNull:false,
}

}

) 

module.exports = Usuario