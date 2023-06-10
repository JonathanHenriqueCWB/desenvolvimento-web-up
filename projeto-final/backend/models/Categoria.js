const mongoose = require('mongoose')
const { Schema } = mongoose

const categoriaSchema = new Schema({
    codigo: {type: Number},
    nome: {type: String},
    descricao: {type: String}
}, {timestamps: true})

const Categoria = mongoose.model("Categoria", categoriaSchema)
module.exports = {
    Categoria,
    categoriaSchema
}
