const {Cliente : ClienteModel} = require('../models/Cliente')
var fs = require('fs');
var path = require('path');

const clienteController = {
   update: async(req, res) => {
       try {
           const response = await ClienteModel.findById(req.body._id).then(cliente => {        
            cliente.codigo = req.body.codigo,
            cliente.foto =req.body.foto,
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
           const response = await ClienteModel.findById(req.params.id)
           if(!response){
                console.log(response)
               res.status(404).json({msg: "Cliente não existe"})
               return
           }
           const deleteResponse = await ClienteModel.findByIdAndDelete({_id: req.params.id})
           res.status(200).json({deleteResponse, msg: "Cliente removido com sucesso"})
       } catch (error) {
           console.log(error)
       }
   },
   
    read: async(req, res) => {
       try {
           const response = await ClienteModel.find({codigo: req.params.codigo})
           if(!response[0]){
               res.status(404).json({msg: "Cliente não cadastrado"})
               return
           }
           res.json(response)
       } catch (error) {
           console.log(error)
       }
   },
   
   readAll: async(req, res) => {
       try {
           const response = await ClienteModel.find()
           res.json(response)
       } catch (error) {
           console.log(error)
       }
    },
    
    create: async(req, res) => { 
        try {
            const cliente = {
                codigo : req.body.codigo,
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                cpf: req.body.cpf,
                foto: {
                    data: fs.readFileSync(path.join(__dirname + './../uploads/' + req.file.filename)),
                    contentType: 'image/png'
                },
                endereco: req.body.endereco,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cartao: req.body.cartao,
                email: req.body.email,
                senha: req.body.senha
            }
            
            const max = await ClienteModel.findOne({}).sort({ codigo: -1 });
            cliente.codigo = max == null ? 1 : max.codigo + 1;

            if(!cliente.nome){
                return res.status(422).json({msg: "O campo código é obrigatório"})
            }

            if (await ClienteModel.findOne({ 'email': cliente.email })) {
                res.status(400).send({ msg: 'Cliente já cadastrado!' });
            }
            
            const response = await ClienteModel.create(cliente)
            res.status(201).json({response, msg: "Cliente cadastrado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = clienteController