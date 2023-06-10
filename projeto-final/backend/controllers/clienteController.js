const {Cliente : ClienteController} = require('../models/Cliente')

const clienteController = {
   update: async(req, res) => {
       try {
           const response = await ClienteController.findById(req.body._id).then(cliente => {        
            cliente.codigo = req.body.codigo,
            cliente.avatar =req.body.avatar,
            cliente.nome = req.body.nome,
            cliente.sobrenome = req.body.sobrenome,
            cliente.cpf = req.body.cpf,    
            cliente.endereco = req.body.endereco,
            cliente.cidade = req.body.cidade,
            cliente.estado = req.body.estado,                
            cliente.cartao = req.body.cartao,
            cliente.email = req.body.email,
            cliente.senha = req.body.senha,
            cliente.save().then(() => {
                   res.status(201).json({response, msg: "Cliente alterado com sucesso"})
               })
           }).catch(err => {
               res.json({msg: 'Erro ao alterar cliente'}).status(404)
           })            
       } catch (error) {
           console.log(error)
       }
   },

   delete: async(req, res) => {
       try {
           const response = await ClienteController.findById(req.params.id)
           if(!response){
               res.status(404).json({msg: "Cliente não encontrado"})
               return
           }
           const deleteResponse = await ClienteController.findByIdAndDelete({_id: req.params.id})
           res.status(200).json({deleteResponse, msg: "Cliente removido com sucesso"})
       } catch (error) {
           console.log(error)
       }
   },
   
    read: async(req, res) => {
       try {
           const response = await ClienteController.find({codigo: req.params.codigo})
           if(!response){
               res.status(404).json({msg: "Erro a encontrar cliente"})
               return
           }
           res.json(response)
       } catch (error) {
           console.log(error)
       }
   },
   
   readAll: async(req, res) => {
       try {
           const response = await ClienteController.find()
           res.json(response)
       } catch (error) {
           console.log(error)
       }
   },

    create: async(req, res) => {
        try {
            const cliente = {
                codigo : req.body.codigo,
                avatar: req.body.avatar,
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                cpf: req.body.cpf,    
                endereco: req.body.endereco,
                cidade: req.body.cidade,
                estado: req.body.estado,                
                cartao: req.body.cartao,
                email: req.body.email,
                senha: req.body.senha,
            }
            const response = await ClienteController.create(cliente)
            res.status(201).json({response, msg: "Cliente cadastrado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = clienteController