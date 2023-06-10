const router = require('express').Router()
const categoriaController = require('../controllers/categoriaController')

router.route('/').get((req, res) => categoriaController.readAll(req, res))
router.route('/:codigo').get((req, res) => categoriaController.read(req, res))
router.route('/create').post((req, res) => categoriaController.create(req, res))
router.route('/delete/:id').delete((req, res) => categoriaController.delete(req, res))
router.route('/update').put((req, res) => categoriaController.update(req, res))

module.exports = router