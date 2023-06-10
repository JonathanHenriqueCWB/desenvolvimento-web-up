const router = require('express').Router()
const produtoController = require('../controllers/produtoController')

router.route('/').get((req, res) => produtoController.readAll(req, res))
router.route('/:codigo').get((req, res) => produtoController.read(req, res))
router.route('/create').post((req, res) => produtoController.create(req, res))
router.route('/delete/:id').delete((req, res) => produtoController.delete(req, res))
router.route('/update').put((req, res) => produtoController.update(req, res))

module.exports = router