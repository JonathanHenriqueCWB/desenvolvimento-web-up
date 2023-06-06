const router = require('express').Router()
const cartaoController = require('../controllers/cartaoController')

router.route('/').get((req, res) => cartaoController.readAll(req, res))
router.route('/:id').get((req, res) => cartaoController.read(req, res))
router.route('/create').post((req, res) => cartaoController.create(req, res))
router.route('/delete/:id').delete((req, res) => cartaoController.delete(req, res))
router.route('/update').put((req, res) => cartaoController.update(req, res))

module.exports = router