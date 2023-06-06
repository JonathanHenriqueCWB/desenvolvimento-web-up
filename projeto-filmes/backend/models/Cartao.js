const mongoose = require('mongoose')
const { Schema } = mongoose

const cartaoSchema = new Schema({
    usuario: {type: String},
    numero: {type: Number},
    cvc: {type: Number},
    validade: {type: String}
}, {timestamps: true})

const Cartao = mongoose.model("Cartao", cartaoSchema)
module.exports = {
    Cartao,
    cartaoSchema
}
