const mongoose = require('mongoose')
require('dotenv').config()

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

async function main() {
    try {        
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.iltswy5.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Conectado ao banco de dados com sucesso ')
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados' + error)
    }
}

module.exports = main

// dotenv arquivo de configuração (local não versionado), guarda as chaves da api, dominios db senha do banco... Guarda os dados mais importantes
// jsonwebtoken manipula o token, criar um token para o usuario e verefica se e valido
