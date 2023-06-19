const mongoose = require('mongoose')
const { Schema } = mongoose

const clienteSchema = new Schema({
    codigo : {type: Number, required: true, unique: true},
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    cpf: {type: String, required: true},    
    foto: {
        data: Buffer,
        contentType: String
    },

    endereco: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    
    cartao: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},

}, {timestamps: true})

const Cliente = mongoose.model('Cliente', clienteSchema)
module.exports = {
    Cliente,
    clienteSchema
}