const customExpress = require('./Config/customExpress')
const conexao = require('./Infraestrutura/conexao')
const Tabela = require('./Infraestrutura/tabelas')

conexao.connect(err => {
    if (err) {
        console.log(err)
    } else {
        Tabela.init(conexao)
        const app = customExpress()

        app.listen(8000, () => {
            console.log('Servidor rodando!')
        })
    }
})



