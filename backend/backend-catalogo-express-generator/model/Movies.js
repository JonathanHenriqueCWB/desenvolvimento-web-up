const Mongoose = require('mongoose')

const todoSchema = new Mongoose.Schema({
    nome: {type: String, require: true},
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

const Movie = Mongoose.model('Movies', todoSchema)
module.exports = Movie
