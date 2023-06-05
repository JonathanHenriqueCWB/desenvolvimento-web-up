const express = require('express')
const app = express()

const movies = require('./filmes.json')

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API Catálogo de filmes disponiveis')
})

app.get('/api', (req, res) => {
    res.send({list_movies: movies})
})

app.post('/api/movies', (req, res) => {
    res.send({texto_enviado: req.body.texto})
})


app.listen(8080, () => console.log('Servidor rodando na porta 8080'))