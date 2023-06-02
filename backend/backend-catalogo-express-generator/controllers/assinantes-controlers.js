const Assinante = require('../model/Assinantes')
const multer = require('multer')

class AssinanteController {

    async lista(req, res) {
        await Assinante.find().lean().then(assinante => {
            res.send(assinante).status(200)
        }).catch(err => {
            res.send('Erro ao carregar lista de assinantes' + err)
        })
    }

    async listaPorId(req, res) {
        await Assinante.findById({_id: req.params.id}).then(assinante => {
            res.send(assinante).status(200)
        }).catch(err => {
            res.send('Erro ao encontrar assinante por nome ' + err)
        })
    }

    async create(req, res){
       let newAssinante = req.body
        await new Assinante(newAssinante).save().then(() => {
            res.status(201).send('Assinante cadastrado com sucesso')
        }).catch(err => {
            res.send('Erro ao cadastrar assinante' + err)
        })
    }

    async update(req, res) {
        await Assinante.findById(req.body._id).then(assinante=> {

            assinante.nome = req.body.nome
            assinante.sobrenome = req.body.sobrenome,
            assinante.dataNascimento = req.body.dataNascimento,
            assinante.telefone = req.body.telefone,
            assinante.endereco = req.body.endereco,
            assinante.cidade = req.body.cidade,
            assinante.estado = req.body.estado,
            assinante.status = req.body.status

            assinante.save().then(() => {
                res.send('Assinante auterado com sucesso').status(200)
            })
        }).catch(err => {
            res.send('Erro ao alterar Assinante' + err)
        })
    }

    async delete(req, res){
        await Assinante.deleteOne({_id: req.params.id}).then(() => {
            res.send('Assinante deletado com sucesso').status(200)
        }).catch(err => {
            res.send('Erro ao deletar assinante' + err)
        })
    }

    async upload(req, res) {
        // Salvar os dados no arquivo no banco de dados
        res.send('Avatar salvo com sucesso')
    }
}

module.exports = new AssinanteController()