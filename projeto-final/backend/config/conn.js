const mongoose = require('mongoose')

async function main() {
    try {        
        await mongoose.connect('mongodb+srv://jonathanhenriquecwb:pTe0c7JVPzp2j8Lc@cluster0.iltswy5.mongodb.net/?retryWrites=true&w=majority')
        console.log('Conectado ao banco de dados com sucesso')
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados' + error)
    }
}

module.exports = main

// Atlas
// jonathanhenriquecwb
// pTe0c7JVPzp2j8Lc
// view ip: https://whatismyipaddress.com/

// bcrypt criar hash da senha para salvar no banco de dados
// dotenv arquivo de configuração (local não versionado), guarda as chaves da api, dominios db senha do banco... Guarda os dados mais importantes
// jsonwebtoken manipula o token, criar um token para o usuario e verefica se e valido
