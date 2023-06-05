const Mongoose = require('mongoose')

const todoSchema = new Mongoose.Schema({
    titulo: {type: String, require: true},
    ano: { type: String, require: true },
    nota: { type: String, require: true },
    sinopse: {type: String},
    assistido: {type: String}
}, {timestamps: true})

const Movie = Mongoose.model('Movies', todoSchema)
module.exports = Movie

// Obs: Caso precise criar um relacionamento com outra model
// exportar também o schema da model
