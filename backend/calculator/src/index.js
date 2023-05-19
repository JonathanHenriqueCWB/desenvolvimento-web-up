const express = require('express')
const app = express()
const calculator = require('./routes/calculator-routes')

app.use('/', calculator)

app.listen(8080, () => console.log('Servidor rodando an porta 8080'))