const Usuario = require('../Models/Usuario')
const Usuarios = require('../Models/Usuario')

module.exports = app => {
    app.get('/cadastro', (req, res) => {
        Usuarios.listaUsuarios(res)
    })


    app.get('/cadastro/:nome', (req, res) => {
        const nome = req.params.nome

        Usuarios.buscarUsuario(nome, res)


    })


    app.post('/cadastro', (req, res) => {
        const usuario = req.body

        Usuarios.criarUsuario(usuario, res)

    })

    app.patch('/cadastro/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const senha = req.body.senha

        Usuarios.trocarSenha(id, senha, res)

    })

    app.delete('/cadastro/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Usuario.deletaUsuario(id, res)
    })
}