const {Categoria : CategoriaModel} = require('../models/Categoria')

const categoriaController = {
   update: async(req, res) => {
       try {
           const response = await CategoriaModel.findById(req.body._id).then(categoria => {        
                categoria.codigo = req.body.codigo
                categoria.nome = req.body.nome
                categoria.descricao = req.body.descricao
                categoria.save().then(() => {
                   res.status(200).json({response, msg: "Categoria alterado com sucesso"})
               })
           }).catch(err => {
               res.status(404).json({msg: 'Erro ao alterar Categoria'})
           })            
       } catch (error) {
           console.log(error)
       }
   },

   delete: async(req, res) => {
       try {
           const response = await CategoriaModel.findById(req.params.id)
           if(!response){
               res.status(404).json({msg: "Categoria não encontrado"})
               return
           }

           const deleteResponse = await CategoriaModel.findByIdAndDelete({_id: req.params.id})
           res.status(200).json({deleteResponse, msg: "Categoria excluida com sucesso"})
       } catch (error) {
           console.log(error)
       }
   },
   
   read: async(req, res) => {
       try {
           const response = await CategoriaModel.find({codigo: req.params.codigo})
           if(!response){
               res.status(404).json({msg: "Categoria não encontrado"})
               return
           }
           res.json(response)
       } catch (error) {
           console.log(error)
       }
   },
   
   readAll: async(req, res) => {
       try {
           const response = await CategoriaModel.find()
           res.status(200).json(response)
       } catch(error){
           console.log(error)
       }
   },

    create: async(req, res) => {
        try {
            const categoria = {
                nome: req.body.nome,
                descricao: req.body.descricao
            }

            const max = await CategoriaModel.findOne({}).sort({ codigo: -1 });
            categoria.codigo = max == null ? 1 : max.codigo + 1;

            const response = await CategoriaModel.create(categoria)
            res.status(201).json({response, msg: "Categoria cadastrado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = categoriaController