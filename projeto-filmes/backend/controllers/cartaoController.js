const {Cartao : CartaoModel} = require('../models/Cartao')

const cartaoController = {
    update: async(req, res) => {
        try {
            const response = await CartaoModel.findById(req.body._id).then(card=> {        
                card.usuario = req.body.usuario
                card.numero = req.body.numero
                card.cvc = req.body.cvc
                card.validade = req.body.validae
                card.save().then(() => {
                    res.status(200).json({response, msg: "Cartão alterado com sucesso"})
                })
            }).catch(err => {
                res.json({msg: 'Erro ao alterar Cartão'})
            })            
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const response = await CartaoModel.findById(req.params.id)
            if(!response){
                res.status(404).json({msg: "Cartão não encontrado"})
                return
            }

            const deleteResponse = await CartaoModel.findByIdAndDelete({_id: req.params.id})
            res.status(200).json({deleteResponse, msg: "Cartão excluido com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },

    read: async(req, res) => {
        try {
            const response = await CartaoModel.findById({_id: req.params.id})
            if(!response){
                res.status(404).json({msg: "Cartao não encontrado"})
                return
            }
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    readAll: async(req, res) => {
        try {
            const response = await CartaoModel.find()
            res.status(200).json(response)
        } catch(error){
            console.log(error)
        }
    },

    create: async(req, res) => {
        try {
            const card = {
                usuario: req.body.usuario,
                numero: req.body.numero,
                cvc: req.body.cvc,
                validade: req.body.validade
            }
            const response = await CartaoModel.create(card)
            res.status(201).json({response, msg: "Cartao cadastrado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = cartaoController