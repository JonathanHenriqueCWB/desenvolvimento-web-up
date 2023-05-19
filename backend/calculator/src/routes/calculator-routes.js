const express = require('express')
const server = express()
const calc = require('../calculadora')

server.get('/somar', (req, res) => {
    var num1 = req.params.num1
    var num2 = req.params.num2
    res.send('O resultado da soma é: ' + calc.somar(num1, num2))
})

server.get('/multiplicar', (req, res) => {
    var num1 = req.params.num1
    var num2 = req.params.num2
    res.send('O resultado da soma é: ' + calc.multiplicar(num1, num2))
})

server.get('/subtrair', (req, res) => {
    var num1 = req.params.num1
    var num2 = req.params.num2
    res.send('O resultado da soma é: ' + calc.subtrair(num1, num2))
})

server.get('/dividir', (req, res) => {
    var num1 = req.params.num1
    var num2 = req.params.num2
    res.send('O resultado da soma é: ' + calc.dividir(num1, num2))
})

module.exports = server