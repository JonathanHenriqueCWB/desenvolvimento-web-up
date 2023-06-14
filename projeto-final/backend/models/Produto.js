const mongoose = require('mongoose')
const { Schema } = mongoose

// Para o relacionamento
const {categoriaSchema} = require('./Categoria')

const produtoSchema = new Schema({
    codigo: {type: String},
    nome: {type: String},
    descricao: {type: String},
    preco: { type: String },
    animal: {type: String},
    notaGeral: {type: String},
    foto: {
        data: Buffer,
        contentType: String
    },
    categoria: {type: [categoriaSchema]},
}, { timestamps: true })

const Produto = mongoose.model('Produto', produtoSchema)
module.exports = {
    Produto,
    produtoSchema
}
