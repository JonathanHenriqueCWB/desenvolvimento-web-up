const AssinanteController = require('../models/Assinantes')

const assinanteController = {

    update: async(req, res) => {
        try {
            const response = await AssinanteController.findById(req.body._id).then(assinante => {        
                assinante.nome = req.body.nome
                assinante.sobrenome = req.body.sobrenome
                assinante.dataNascimento = req.body.dataNascimento
                assinante.telefone = req.body.telefone
                assinante.endereco = req.body.endereco
                assinante.cidade = req.body.cidade
                assinante.estado = req.body.estado
                assinante.status = req.body.status
                assinante.save().then(() => {
                    res.status(201).json({response, msg: "Assinante alterado com sucesso"})
                })
            }).catch(err => {
                res.json({msg: 'Erro ao alterar assinante'})
            })            
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const response = await AssinanteController.findById(req.params.id)
            if(!response){
                res.status(404).json({msg: "Assinante não encontrado"})
                return
            }
            const deleteResponse = await AssinanteController.findByIdAndDelete({_id: req.params.id})
            res.status(200).json({deleteResponse, msg: "Assinante removido com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },

    read: async(req, res) => {
        try {
            const response = await AssinanteController.findById({_id: req.params.id})
            if(!response){
                res.status(404).json({msg: "Erro a encontrar assinante"})
                return
            }
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    readAll: async(req, res) => {
        try {
            const response = await AssinanteController.find()
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    create: async(req, res) => {
        try {
            const assinante = {
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                dataNascimento: req.body.dataNascimento,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                cidade: req.body.cidade,
                estado: req.body.estado,
                status: req.body.status
            }
            const response = await AssinanteController.create(assinante)
            res.status(201).json({response, msg: "Assinante cadastrado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = assinanteController