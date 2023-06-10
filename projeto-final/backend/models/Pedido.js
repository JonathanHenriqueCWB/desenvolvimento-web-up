const mongoose = require('mongoose')
const {Schema} = mongoose

// Entidades para o relacionamento
const {produtoSchema} = require('./Produto')
const {clienteSchema} = require('./Cliente')

const pedidosSchema = new Schema({
    codigo: {type: String},
    preco: {type: Number},
    status: {type: String},
    cliente : {type: [clienteSchema]},
    produto: {type: [produtoSchema]},
}, {timestamps: true})

const Pedido = mongoose.model("Pedido", pedidosSchema)
module.exports = Pedido