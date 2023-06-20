const {Cliente : ClienteModel} = require('../models/Cliente')
const bcryptjs = require('bcryptjs');
const auth = require('../config/auth')

const categoriaController = {
    login: async(req, res) => {
        const { email, senha } = req.body;

        const cliente = await ClienteModel.findOne({ 'email': email }).select('+senha')
        
        if (!cliente) return res.status(400).send({ error: 'Usuário não encontrado!' });
        if (!await bcryptjs.compare(senha, cliente.senha)) return res.status(400).send({ error: 'Senha inválida!' });
        
        await auth.incluirToken(cliente);
        res.status(200).json(cliente);
    }
}

module.exports = categoriaController