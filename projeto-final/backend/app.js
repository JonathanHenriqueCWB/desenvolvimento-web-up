const express = require('express')
const app = express()
const cors = require('cors')

// Conn DB
const conn = require('./config/conn')
conn()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Router
const router = require('./routes/router')
app.use('/api', router)

app.listen(3001, function(){
    console.log('Servidor rodando na porta 3001')
})

// FLUXO: app -> roteador -> rotas -> controller

