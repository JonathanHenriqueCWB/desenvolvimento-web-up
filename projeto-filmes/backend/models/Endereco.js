const mongoose = require('mongoose')
const { Schema } = mongoose

const enderecoSchema = new Schema({
    endereco: {type: String},
    cidade: {type: String},
    estado: {type: String},
}, {timestamps: true})

const Endereco = mongoose.model('Endereco', enderecoSchema)

// Exportando junto o schema
module.exports = {
    Endereco,
    enderecoSchema,
}