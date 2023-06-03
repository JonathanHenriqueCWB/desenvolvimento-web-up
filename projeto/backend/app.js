const express = require('express')
const app = express()

// Conn DB
const conn = require('./database/conn')
conn()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Router
const router = require('./routes/router')
app.use('/api', router)

app.listen(3001, function(){
    console.log('Servidor rodando na porta 3001')
})

// FLUXO: app -> roteador -> rotas -> controller

