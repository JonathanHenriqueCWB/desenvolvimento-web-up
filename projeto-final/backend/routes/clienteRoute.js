const clienteController = require('../controllers/clienteController')
const router = require('express').Router()
const upload = require('../config/multer')

router.route('/:codigo').get((req, res) => clienteController.read(req, res))     
router.route('/delete/:id').delete((req, res) => clienteController.delete(req, res))  
router.route('/update').put((req, res) => clienteController.update(req, res))         
router.route('/').get((req, res) => clienteController.readAll(req, res))              
router.route('/create').post(upload.single('foto'), (req, res) => clienteController.create(req, res))

module.exports = router