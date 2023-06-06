const router = require('express').Router()

// Rotas importadas
const movieRouter = require('./movieRoute')
const assinanteRouter = require('./assinanteRoute')
const enderecoRouter = require('./enderecoRoute')
const cartaoRouter = require('./cartoaRoute')

// Prefixo para as rotas
router.use('/movies', movieRouter)
router.use('/assinantes', assinanteRouter)
router.use('/endereco', enderecoRouter)
router.use('/cartao', cartaoRouter)

module.exports = router

/**
 * TODAS AS ROTAS DA APLICAÇÃO ESTÃO
 * CENTRALIZADAS NESSE ARQUIVO, DEIXANDO
 * SOMENTE UMA NA APP
 */