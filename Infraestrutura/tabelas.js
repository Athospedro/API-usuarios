class Tabela {
    init(conexao) {
        this.conexao = conexao
        this.criarUsuario()
    }
    criarUsuario(conexao) {
        const sql = 'CREATE TABLE IF NOT EXISTS Usuarios (id int NOT NULL AUTO_INCREMENT, nome varchar(250) NOT NULL, email varchar(100) NOT NULL, senha varchar(100) NOT NULL, dataNascimento varchar(20) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Tabela Criada')
            }
        })
    }


}
module.exports = new Tabela