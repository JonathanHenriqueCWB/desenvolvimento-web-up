const mongoose = require('mongoose')
const { Schema } = mongoose

const categoriaSchema = new Schema({
    codigo: {type: Number, required: true},
    nome: {type: String, required: true},
    descricao: {type: String, required: true}
}, {timestamps: true})

const Categoria = mongoose.model("Categoria", categoriaSchema)
module.exports = {
    Categoria,
    categoriaSchema
}
