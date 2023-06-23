const {Produto: ProdutoModel} = require("../models/Produto")
var fs = require('fs');
var path = require('path')
const {Categoria : CategoriaModel} = require('../models/Categoria')


const produtoController = {
    update: async(req, res) => {
        try {
            const response = await ProdutoModel.findById(req.body._id).then(p => {        
                p.codigo = req.body.codigo
                p.nome = req.body.nome
                p.foto = req.body.foto
                p.descricao = req.body.descricao
                p.preco = req.body.preco
                p.animal = req.body.animal
                p.categoria = req.body.categoria
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
           const response = await ProdutoModel.findById(req.params.id)
           if(!response){
               return res.status(404).json({msg: "Produto não encontrado"})
           }

           const deleteResponse = await ProdutoModel.findByIdAndDelete({_id: req.params.id})
           res.status(200).json({deleteResponse, msg: "Produto excluido com sucesso"})
       } catch (error) {
           console.log(error)
       }
   },

   read: async(req, res) => {
       try {
           const response = await ProdutoModel.find({codigo: req.params.codigo})
           if(!response){
               return res.status(404).json({msg: "Produto não encontrado"})
           }
           res.json(response)
       } catch (error) {
           console.log(error)
       }
   },

   readAll: async(req, res) => {
       try {
           const response = await ProdutoModel.find()
           res.status(200).json(response)
       } catch(error){
           console.log(error)
       }
   },

   create: async(req, res) => {
       try {
            const error = []
            const categoria = await CategoriaModel.findOne({'codigo': req.body.codigoCategoria})

            /*
            if(!categoria) error.push({msg: "Categoria não encontrada"})
            if(!req.body.nome) error.push({msg : "O campo NOME é obrigatório"})
            if(!req.body.descricao) error.push({msg : "O campo DESCICAO é obrigatório"})
            if(!req.body.preco) error.push({msg : "O campo PRECO é obrigatório"})
            if(!req.body.animal) error.push({msg : "O campo ANIMAL é obrigatório"})
            if(!req.file) error.push({msg: "O campo FOTO é obrigatorio"})
            if(error[0]) return res.status(400).json(error)
            */    
            
            const produto = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                animal: req.body.animal,
                categoria: categoria,
                foto: {
                    data: fs.readFileSync(path.join(__dirname + './../uploads/' + req.file.filename)),
                    contentType: 'image/png'
                }
            }
            
            const max = await ProdutoModel.findOne({}).sort({ codigo: -1 });
            produto.codigo = max == null ? 1 : max.codigo + 1;
            
            const response = await ProdutoModel.create(produto)
            res.status(201).json({response, msg: "Produto cadastrado com sucesso"})

       } catch (error) {
           console.log(error)
       }
   }
}

module.exports = produtoController