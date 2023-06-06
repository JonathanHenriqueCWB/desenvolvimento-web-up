const router = require('express').Router()
const enderecoController = require('../controllers/ederecoController')

router.route('/').get((req, res) => enderecoController.readAll(req, res))
router.route('/:id').get((req, res) => enderecoController.read(req, res))
router.route('/create').post((req, res) => enderecoController.create(req, res))
router.route('/delete/:id').delete((req, res) => enderecoController.delete(req, res))
router.route('/update').put((req, res) => enderecoController.update(req, res))

module.exports = router