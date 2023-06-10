const mongoose = require('mongoose')
const { Schema } = mongoose

// Para o relacionamento
const {categoriaSchema} = require('./Categoria')

const produtoSchema = new Schema({
    codigo: {type: Number},
    nome: {type: String},
    imagem: {type: String},
    descricao: {type: String},
    preco: { type: String },
    animal: {type: String},
    notaGeral: {type: Number, default: 0},
    categoria: {type: [categoriaSchema]},
}, { timestamps: true })

const Produto = mongoose.model('Produto', produtoSchema)
module.exports = {
    Produto,
    produtoSchema
}
