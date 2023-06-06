const {Endereco: EnderecoModel} = require('../models/Endereco')

const enderecoController = {
    update: async(req, res) => {
        try {
            const response = await EnderecoModel.findById(req.body._id).then(endereco=> {        
                endereco.endereco = req.body.endereco
                endereco.cidade = req.body.cidade
                endereco.estado = req.body.estado
                endereco.save().then(() => {
                    res.status(200).json({response, msg: "Endereço alterado com sucesso"})
                })
            }).catch(err => {
                res.json({msg: 'Erro ao alterar Endereço'})
            })            
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const response = await EnderecoModel.findById(req.params.id)
            if(!response){
                res.status(404).json({msg: "Endereço não encontrado"})
                return
            }

            const deleteResponse = await EnderecoModel.findByIdAndDelete({_id: req.params.id})
            res.status(200).json({deleteResponse, msg: "Endereço excluido com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },

    read: async(req, res) => {
        try {
            const response = await EnderecoModel.findById({_id: req.params.id})
            if(!response){
                res.status(404).json({msg: "Endereço não encontrado"})
                return
            }
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    readAll: async(req, res) => {
        try {
            const response = await EnderecoModel.find()
            res.status(200).json(response)
        } catch(error){
            console.log(error)
        }
    },

    create: async(req, res) => {
        try {
            const endereco = {
                endereco: req.body.endereco,
                cidade: req.body.cidade,
                estado: req.body.estado
            }
            const response = await EnderecoModel.create(endereco)
            res.status(201).json({response, msg: "Endereco cadastrado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = enderecoController