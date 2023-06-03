const mongoose = require('mongoose')
const { Schema } = mongoose

const assinantesSchema = new Schema({
    nome: {type: String},
    sobrenome: {type: String},
    dataNascimento: {type: String},
    telefone: {type: String},
    endereco: {type: String},
    cidade: {type: String},
    estado: {type: String},
    status: {type: Boolean, default: true}
}, {timestamps: true})

const Assinantes = mongoose.model('Assinantes', assinantesSchema)
module.exports = Assinantes