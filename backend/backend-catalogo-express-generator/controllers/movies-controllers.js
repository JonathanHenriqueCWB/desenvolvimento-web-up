const Movie = require('../model/Movies')

class MovieController {
    async lista(req, res){
        await Movie.find().lean().then(filmes => {
            res.send(filmes)
        }).catch(err => {
            res.send('Lista de filmes vazias')
        })
    }
}

module.exports = new MovieController()