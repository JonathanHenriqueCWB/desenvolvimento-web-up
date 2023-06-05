const router = require('express').Router()

// Rotas importadas
const movieRouter = require('./movieRoute')
const assinanteRouter = require('./assinanteRoute')

// Prefixo para as rotas
router.use('/movies', movieRouter)
router.use('/assinantes', assinanteRouter)

module.exports = router

/**
 * TODAS AS ROTAS DA APLICAÇÃO ESTÃO
 * CENTRALIZADAS NESSE ARQUIVO, DEIXANDO
 * SOMENTE UMA NA APP
 */