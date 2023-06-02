const Mongoose = require('mongoose')

const todoSchema = new Mongoose.Schema({
    nome: {type: String, require: true},
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
}, {timestamps: true})

const Movie = Mongoose.model('Movies', todoSchema)
module.exports = Movie

// Obs: Caso precise criar um relacionamento com outra model
// exportar também o schema da model
