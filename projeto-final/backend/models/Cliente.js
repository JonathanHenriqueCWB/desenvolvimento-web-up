const mongoose = require('mongoose')
const { Schema } = mongoose

const clienteSchema = new Schema({
    codigo : {type: String},
    nome: {type: String},
    sobrenome: {type: String},
    cpf: {type: String},    
    foto: {
        data: Buffer,
        contentType: String
    },

    endereco: {type: String},
    cidade: {type: String},
    estado: {type: String},
    
    cartao: {type: String},
    email: {type: String},
    senha: {type: String},

}, {timestamps: true})

const Cliente = mongoose.model('Cliente', clienteSchema)
module.exports = {
    Cliente,
    clienteSchema
}