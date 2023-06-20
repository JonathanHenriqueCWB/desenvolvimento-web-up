// Node Express
    const express = require('express')
    const app = express()

// Comunicação feita no mesmo servidor
    const cors = require('cors')

// Conn DB Atlas
    const conn = require('./config/conn')
    conn()

// pacotes para autenticacao 
    const bcrypt = require('bcrypt')
    const jwt = require('jsonwebtoken')

// Middleware
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.set("view engine", "ejs");

// Router FLUXO: app -> roteador -> rotas -> controlle
    const router = require('./routes/router')
    app.use('/api', router)

// Satarta o servidor
    app.listen(3001, function(){
        console.log('Servidor rodando na porta 3001')
    })

