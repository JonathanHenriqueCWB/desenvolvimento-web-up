const router = require('express').Router()

// Chama as rotas
var indexRouter = require('../routes/index-route');
var moviesRouter = require('../routes/movies-route')
var assinanteRouter = require('../routes/assinantes-route')

// Cria um prefixo para as rotas
router.use('/', indexRouter);
router.use('/movies', moviesRouter)
router.use('/assinantes', assinanteRouter)

module.exports = router