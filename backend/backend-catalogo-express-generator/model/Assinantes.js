const Mongoose = require('mongoose')

const todoSchema = new Mongoose.Schema({
    nome: { type: String, require: true },
    sobrenome: { type: String, require: true },
    dataNascimento: { type: String, require: true },
    telefone: { type: String, require: true },
    endereco: { type: String, require: true },
    cidade: { type: String, require: true },
    estado: { type: String, require: true },
    status: { type: Boolean, require: true, default: true },
    image: {type: String, require: true}
}, {timestamps: true})

const Assinante = Mongoose.model('Assinantes', todoSchema)
module.exports = Assinante
