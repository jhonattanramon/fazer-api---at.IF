const express = require('express')

const router = express.Router()

const Usuario = require('./usuario')


const usuarios = [
    {id:1, nome: 'jhon'},
    {id:2, nome: 'ramon'}
]


router.get('/usuario', async(req, res ) => {
    const listUsuario = await Usuario.findAll()

    res.send(listUsuario)
} )


module.exports = router