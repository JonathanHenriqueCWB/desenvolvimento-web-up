const router = require('express').Router()
const pedidoController = require('../controllers/pedidoController')

router.route('/').get((req, res) => pedidoController.readAll(req, res))
router.route('/:cliente').get((req, res) => pedidoController.read(req, res))
router.route('/create').post((req, res) => pedidoController.create(req, res))
router.route('/delete/:id').delete((req, res) => pedidoController.delete(req, res))
router.route('/update').put((req, res) => pedidoController.update(req, res))

module.exports = router