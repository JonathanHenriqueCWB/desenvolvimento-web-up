const mongoose = require('mongoose')
const { Schema } = mongoose

const movieSchema = new Schema({
    titulo: {type: String},
    ano: {type: String},
    nota: {type: Number},
    sinopse: {type: String},
    assistido: {type: Boolean}
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie