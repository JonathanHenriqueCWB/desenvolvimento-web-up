const express = require('express')
const app = express()

// Importa um modulo externo
const quadrado = require('./quandrado')

// Rotas
    app.get('/', (req, res) =>   res.send('Olá mundo Express!'))
    app.get('/alunos', (req, res) => res.send('pagina de alunos'))
    app.get('/professor', function(req, res){
        res.send('Página de Professores')
    })
    app.get('/perimetro', function(req, res) {
        res.send(`O perimetro do quadrado é: ${quadrado.perimetro(4)}`)
    })

// Criando servidor
app.listen(3000, function(){
    console.log('Sever is running on port 3000')
})