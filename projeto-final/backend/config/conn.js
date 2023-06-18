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