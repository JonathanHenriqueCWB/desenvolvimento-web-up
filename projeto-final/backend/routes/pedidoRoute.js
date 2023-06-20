const router = require('express').Router()
const upload = require('../config/multer')
const pedidoController = require('../controllers/pedidoController')
const auth = require('../config/auth')

// Restrição de login
router.use(auth.autorizar)

router.route('/').get((req, res) => pedidoController.readAll(req, res))
router.route('/:cliente').get((req, res) => pedidoController.read(req, res))
router.route('/create').post(upload.single('foto'), (req, res) => pedidoController.create(req, res))
router.route('/delete/:id').delete((req, res) => pedidoController.delete(req, res))
router.route('/update').put((req, res) => pedidoController.update(req, res))

module.exports = router