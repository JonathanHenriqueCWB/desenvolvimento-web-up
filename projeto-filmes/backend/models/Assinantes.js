const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema de endereco para relacionamento
const {enderecoEschema} = require('./Endereco')

const assinantesSchema = new Schema({
    nome: {type: String},
    sobrenome: {type: String},
    dataNascimento: {type: String},
    telefone: {type: String},
    status: {type: Boolean, default: true},
    avatar: {type: String},
    endereco: {type: [enderecoEschema]},

}, {timestamps: true})

const Assinantes = mongoose.model('Assinantes', assinantesSchema)
module.exports = Assinantes