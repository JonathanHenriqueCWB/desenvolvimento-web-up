const clienteController = require('../controllers/clienteController')
const router = require('express').Router()

router.route('/').get((req, res) => clienteController.readAll(req, res))              // Reeda All
router.route('/:codigo').get((req, res) => clienteController.read(req, res))          // Read by ID
router.route('/create').post((req, res) => clienteController.create(req, res))        // Create
router.route('/delete/:id').delete((req, res) => clienteController.delete(req, res))  // Delete by ID
router.route('/update').put((req, res) => clienteController.update(req, res))         // Update by Object(ID)

module.exports = router