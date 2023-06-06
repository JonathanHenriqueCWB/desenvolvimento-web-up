const MovieModel = require("../models/Movies")
const upload = require('../config/multer')

const movieController = {
    
    update: async(req, res) => {
        try {
            const response = await MovieModel.findById(req.body._id).then(filme=> {        
                filme.titulo = req.body.titulo
                filme.ano = req.body.ano
                filme.nota = req.body.nota
                filme.sinopse = req.body.sinopse
                filme.img = req.body.img
                filme.assistido = req.body.assistido
                filme.save().then(() => {
                    res.status(200).json({response, msg: "Filme alterado com sucesso"})
                })
            }).catch(err => {
                res.json({msg: 'Erro ao alterar filme'})
            })            
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {
        try {
            const response = await MovieModel.findById(req.params.id)
            if(!response){
                res.status(404).json({msg: "Filme não encontrado"})
                return
            }

            const deleteResponse = await MovieModel.findByIdAndDelete({_id: req.params.id})
            res.status(200).json({deleteResponse, msg: "Filme excluido com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },

    read: async(req, res) => {
        try {
            const response = await MovieModel.findById({_id: req.params.id})
            if(!response){
                res.status(404).json({msg: "Filme não encontrado"})
                return
            }
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    readAll: async(req, res) => {
        try {
            const response = await MovieModel.find()
            res.status(200).json(response)
        } catch(error){
            console.log(error)
        }
    },

    create: async(req, res) => {
        try {
            const movie = {
               titulo: req.body.titulo,
               ano: req.body.ano,
               nota: req.body.nota,
               sinopse: req.body.sinopse,
               img: req.body.img,
               assistido: req.body.assistido 
            }
            const response = await MovieModel.create(movie)
            res.status(201).json({response, msg: "Filme criado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = movieController