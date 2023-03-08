const express = require('express')

const router = express.Router()

const Usuario = require('./usuario')


const usuarios = [
    {id:1, nome: 'jhon'},
    {id:2, nome: 'ramon'}
]


router.get('/usuario', async(req, res ) => {
    return res.json(usuarios)
} )

router.post('/usuario', async (req, res) => {
    let novoUsuario = req.body;
    novoUsuario = await Usuario.create(req.body)
    res.send({message: "usuario cadastrado com sucesso"})
})


module.exports = router