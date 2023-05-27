
const express = require('express')
const router = express.Router()

const Movie = require('../model/Movies')
const MovieController = require('../controllers/movies-controllers')

router.get('/', MovieController.lista)

router.post('/create', (req, res) => {
    const newMovie = {
        nome: req.body.nome,
        description: req.body.description
    }

    new Movie(newMovie).save().then(() => {
        res.send('Filme Cadastrado com sucesso')
    }).catch(err => {
        res.send('Erro ao cadastrar novo filme')
    })
})

router.put('/update', (req, res) => {
    Movie.findById(req.body._id).then(filme=> {        
        filme.description = req.body.description
        filme.save().then(() => {
            res.send('Filme auterado com sucesso')
        })
    }).catch(err => {
        res.send('Erro ao alterar filme')
    })
})

router.delete('/delete/:id', (req, res) => {
    Movie.deleteOne({_id: req.params.id}).then(() => {
        res.send('Tarefa deletada com sucesso')
    }).catch(err => {
        res.send('Erro ao deletar tarefa')
    })
})

module.exports = router
