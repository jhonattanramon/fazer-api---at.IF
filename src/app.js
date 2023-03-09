const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./dataBase')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const usuarioRouter = require('./usuarioRouter')

app.use('/usuario', usuarioRouter)

app.listen( 8080, () => {

    sequelize.sync({alter: true}).then(() => {
        console.log('sizrinizado')
    }).catch( (err) => {
        console.log('error de sicronização', err);
    })
})

