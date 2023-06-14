const {Produto: ProdutoModel} = require("../models/Produto")
var fs = require('fs');
var path = require('path')

const produtoController = {
    update: async(req, res) => {
        try {
            const response = await ProdutoModel.findById(req.body._id).then(p => {        
                p.codigo = req.body.codigo
                p.nome = req.body.nome
                p.imagem = req.body.imagem
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
               res.status(404).json({msg: "Produto não encontrado"})
               return
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
               res.status(404).json({msg: "Produto não encontrado"})
               return
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
           const produto = {
              codigo: req.body.codigo,
              nome: req.body.nome,
              descricao: req.body.descricao,
              preco: req.body.preco,
              categoria: req.body.categoria,
              animal: req.body.animal,
              foto: {
                data: fs.readFileSync(path.join(__dirname + './../uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
           }
           const response = await ProdutoModel.create(produto)
           res.status(201).json({response, msg: "Produto cadastrado com sucesso"})
       } catch (error) {
           console.log(error)
       }
   }
}

module.exports = produtoController