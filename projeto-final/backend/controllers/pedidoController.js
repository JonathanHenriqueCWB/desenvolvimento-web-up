const PedidoModel = require('../models/Pedido')
const {Produto: ProdutoModel} = require("../models/Produto")
const {Cliente: ClienteModel} = require('../models/Cliente')
var fs = require('fs');
var path = require('path')

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

            const error = []
            const cliente = await ClienteModel.findOne({'codigo' : req.body.clienteCodigo})
            const produto = await ProdutoModel.findOne({'codigo' : req.body.produtoCodigo})            
            
            // COCERTAR AS VALIDAÇÕES, ERRO AO VALIDAR O ARRAY DE ERROS
            /*
                if(!cliente) error.push({msg: "Cliente não encontrada"})
                if(!produto) error.push({msg: "Produto não encontrada"})
                if(!req.body.preco) error.push({msg : "O campo PREÇO é obrigatório"})
                if(!req.body.status) error.push({msg: "O campo STATUS é obrigatório"})


                if(error){
                    console.log(error)
                    return res.json({msg: 'Existem erros no formulario', error})          
                }
            */
           
           const pedido = {
               preco: req.body.preco, status: req.body.status,
               cliente: cliente, produto: produto
            }
            
            const max = await PedidoModel.findOne({}).sort({ codigo: -1 });
            pedido.codigo = max == null ? 1 : max.codigo + 1;
            
            const response = await PedidoModel.create(pedido)
            res.status(201).json({response, msg: "Pedido registrado com sucesso"})

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = pedidoController