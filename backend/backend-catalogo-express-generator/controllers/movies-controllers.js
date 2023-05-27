const Movie = require('../model/Movies')

class MovieController {

    // READ
    async lista(req, res){
        await Movie.find().lean().then(filmes => {
            res.send(filmes)
        }).catch(err => {
            res.send('Lista de filmes vazias')
        })
    }

    // CREATE
    async read(req, res){        
        let newMovie = {
            nome: req.body.nome,
            description: req.body.description
        }
    
        await new Movie(newMovie).save().then(() => {
            res.send('Filme Cadastrado com sucesso')
        }).catch(err => {
            res.send('Erro ao cadastrar novo filme')
        })
    }

    // UPDATE
    async update(req, res) {
        await Movie.findById(req.body._id).then(filme=> {        
            filme.nome = req.body.nome
            filme.save().then(() => {
                res.send('Filme auterado com sucesso')
            })
        }).catch(err => {
            res.send('Erro ao alterar filme')
        })
    }

    // DELETE
    async delete(req, res){
        Movie.deleteOne({_id: req.params.id}).then(() => {
            res.send('Tarefa deletada com sucesso')
        }).catch(err => {
            res.send('Erro ao deletar tarefa')
        })
    }
}

module.exports = new MovieController()