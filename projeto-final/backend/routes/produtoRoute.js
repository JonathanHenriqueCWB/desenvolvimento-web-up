const router = require('express').Router()
const produtoController = require('../controllers/produtoController')
const upload = require('../config/multer')

router.route('/').get((req, res) => produtoController.readAll(req, res))
router.route('/:codigo').get((req, res) => produtoController.read(req, res))
router.route('/create').post(upload.single('foto'),(req, res) => produtoController.create(req, res))
router.route('/delete/:id').delete((req, res) => produtoController.delete(req, res))
router.route('/update').put( (req, res) => produtoController.update(req, res))

module.exports = router