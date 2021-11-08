const conexao = require('../Infraestrutura/conexao')


class Usuarios {

    criarUsuario(usuario, res) {

        const sql = 'INSERT INTO Usuarios SET ?'

        conexao.query(sql, usuario, (err, resultados) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(201).json(usuario)
            }
        })
    }

    listaUsuarios(res) {
        const sql = 'SELECT * FROM Usuarios'

        conexao.query(sql, (err, resultados) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscarUsuario(nome, res) {

        const sql = `SELECT * FROM Usuarios WHERE nome='${nome}'`

        conexao.query(sql, (err, resultados) => {

            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(resultados)

            }
        })
    }

    trocarSenha(id, senha, res) {

        const sql = 'UPDATE Usuarios SET senha=? WHERE id=?'

        conexao.query(sql, [senha, id], (err, resultados) => {
            if (err) {
                res.status(400).json(err)

            } else {

                res.status(200).json('senha alterada com sucesso!')
            }
        })

    }

    deletaUsuario(id, res) {
        const sql = 'DELETE FROM Usuarios WHERE id=?'

        conexao.query(sql, id, (err, resultados) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json({ id })
            }
        })
    }







}

module.exports = new Usuarios