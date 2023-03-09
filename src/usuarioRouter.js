const express = require('express')

const router = express.Router()

const Usuario = require('./usuario')




router.get('/listaDoBanco', async(req, res ) => {
    let listaDeUsuario = await Usuario.findAll()

    res.send(listaDeUsuario)
    
} )

router.post('/listaDoBanco', async (req, res) => {
    let novoUsuario = req.body;
    console.log(novoUsuario);
    novoUsuario = await Usuario.create(req.body);
    res.send({message: "usuario cadastrado com sucesso"})
})


module.exports = router