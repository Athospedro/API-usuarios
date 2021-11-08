const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'atos3119',
    database: 'criar-usuario'


})

module.exports = conexao