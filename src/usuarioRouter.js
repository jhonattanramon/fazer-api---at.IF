const express = require('express')

const router = express.Router()

const Usuario = require('./usuario')




router.get('/listaDoBanco', async(req, res ) => {
    let listaDeUsuario = await Usuario.findAll()

    res.send(listaDeUsuario)
    
} )

router.post('/CadastrarUser', async (req, res) => {
    let novoUsuario = req.body;
    console.log(novoUsuario);
    novoUsuario = await Usuario.create(req.body);
    console.log("RESULTADO DO CREATE", novoUsuario);
    res.send({message: "usuario cadastrado com sucesso"})
})

router.put('/:id', async (req, res) => {
    
    const idDoUsario = req.params.id
    const novosDadosDoUsario = req.body

    let usuarioSelecionado = await Usuario.findByPk(idDoUsario)

    if(usuarioSelecionado){
        usuarioSelecionado.set({...novosDadosDoUsario})
        await usuarioSelecionado.save()
        res.send({message: 'usuario atualizado'})
    }else{
        res.status(404).send({mensage: "usario não encontrado no banco"})
    }



})

router.delete('/:id', async (req, res) => {

    console.log('caiu no delete');

    const idUsuario = req.params.id
    let tabelaUsuario = await Usuario.findByPk(idUsuario)


    if (tabelaUsuario) {
        await tabelaUsuario.destroy()
        res.send({mensage: 'aluno excluido com sucesso'})
    }else{
        res.status(404).send( {mensage: 'aluno nao excluido'})
    }
})


module.exports = router