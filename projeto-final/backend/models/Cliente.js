const mongoose = require('mongoose')
const { Schema } = mongoose
const bcryptjs = require('bcryptjs');

const clienteSchema = new Schema({
    codigo : {type: Number, required: true, unique: true},
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    cpf: {type: String, required: true},    
    foto: {
        data: Buffer,
        contentType: String
    },

    endereco: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    
    cartao: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    token: {type: String, select: false}

}, {timestamps: true})

// bcryptjs criar hash da senha para salvar no banco de dados
clienteSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.senha, 10);
    this.senha = hash;
    next();
});

const Cliente = mongoose.model('Cliente', clienteSchema)
module.exports = {
    Cliente,
    clienteSchema
}