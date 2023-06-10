const PedidoModel = require('../models/Pedido')

const pedidoController = {
    update: async(req, res) => {
        try {
            const response = await PedidoModel.findById(req.body._id).then(p => {
                p.preco = req.body.preco
                p.produto = req.body.produto
                p.status = req.body.status
                p.save().then(() => {
                    res.status(200).json({response, msg: "Produto alterado com sucesso"})
                })
            }).catch(err => {
                res.json({msg: 'Erro ao alterar produto' + err})
            })            
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const response = await PedidoModel.findById(req.params.id)
            if(!response){
                res.status(404).json({msg: "Pedido não encontrado"})
                return
            }

            const deleteResponse = await PedidoModel.findByIdAndDelete({_id: req.params.id})
            res.status(200).json({deleteResponse, msg: "Pedido excluido com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },

    read: async(req, res) => {
        try {
            const response = await PedidoModel.find({'cliente.nome': req.params.cliente})
            if(!response){
                res.status(404).json({msg: "Pedido não encontrado"})
                return
            }
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    readAll: async(req, res) => {
        try {
            const response = await PedidoModel.find()
            res.status(200).json(response)
        } catch(error){
            console.log(error)
        }
    },

    create: async(req, res) => {
        try {
            const pedido = {
                codigo: req.body.codigo,
                preco: req.body.preco,
                status: req.body.status,
                cliente: req.body.cliente,
                produto: req.body.produto
            }
            const response = await PedidoModel.create(pedido)
            res.status(201).json({response, msg: "Pedido registrado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = pedidoController