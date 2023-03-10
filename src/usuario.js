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
},
userName:{
    type: DataTypes.STRING,
    allowNull: false,
    
},
email:{
    type: DataTypes.STRING,
    allowNull: false,
    
},
senha:{
    type: DataTypes.STRING,
    allowNull: false,

}

},
{
    sequelize,
    tableName: "usuario",
    timestamps: false,
}

) 

module.exports = Usuario