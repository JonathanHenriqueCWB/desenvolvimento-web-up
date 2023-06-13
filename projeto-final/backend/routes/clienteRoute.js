const clienteController = require('../controllers/clienteController')
const router = require('express').Router()
const upload = require('../config/multer')

router.route('/:codigo').get((req, res) => clienteController.read(req, res))          // Read by ID
router.route('/delete/:id').delete((req, res) => clienteController.delete(req, res))  // Delete by ID
router.route('/update').put((req, res) => clienteController.update(req, res))         // Update by Object(ID)
router.route('/').get((req, res) => clienteController.readAll(req, res))              // Reeda All
router.route('/create').post(upload.single('foto'), (req, res) => clienteController.create(req, res))

module.exports = router