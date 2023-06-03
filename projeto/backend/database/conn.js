const mongoose = require('mongoose')

async function main() {
    try {        
        await mongoose.connect('mongodb://127.0.0.1/movies')
        console.log('Conectado ao banco de dados com sucesso')
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados' + error)
    }
}

module.exports = main