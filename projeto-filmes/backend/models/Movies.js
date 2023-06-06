const mongoose = require('mongoose')
const { Schema } = mongoose

const movieSchema = new Schema({
    titulo: {type: String},
    ano: {type: String},
    nota: {type: Number},
    sinopse: {type: String},
    img: { type: String },
    assistido: {type: String}
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie

// img: { data: Buffer, contentType: String },