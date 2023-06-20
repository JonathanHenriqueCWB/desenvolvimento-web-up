const router = require('express').Router()

// Rotas importadas
const categoriaRouter = require('./categoriaRoute')
const clienteRouter = require('./clienteRoute')
const produtoRouter = require('./produtoRoute')
const pedidoRouter = require('./pedidoRoute')

// Prefixo para as rotas
router.use('/categoria', categoriaRouter)
router.use('/cliente', clienteRouter)
router.use('/produto', produtoRouter)
router.use('/pedido', pedidoRouter)

module.exports = router

/**
 * TODAS AS ROTAS DA APLICAÇÃO ESTÃO
 * CENTRALIZADAS NESSE ARQUIVO, DEIXANDO
 * SOMENTE UMA NA APP
 * 
 * IMPORTA AS ROTAS CRIADAS NESSE MESMO DIRETÓRIO
 * E DA UM PREFIXO AS MESMAS
 * 
 * SUA CHAMADA COMEÇA NA RAIZ DO APLICAÇÃO APP
 * 
 * /api/categoria
 * /api/cliente
 * /api/produto
 * /api/pedido
 * 
 * VISUALIZAR INDIVIDUAOLMENTE AS ROTAS E ENDPOINTS
 */