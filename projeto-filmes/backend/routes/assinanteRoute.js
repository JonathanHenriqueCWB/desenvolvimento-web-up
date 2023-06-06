const assinanteController = require('../controllers/assinantesController')
const router = require('express').Router()

router.route('/').get((req, res) => assinanteController.readAll(req, res))              // Reeda All
router.route('/:id').get((req, res) => assinanteController.read(req, res))              // Read by ID
router.route('/create').post((req, res) => assinanteController.create(req, res))        // Create
router.route('/delete/:id').delete((req, res) => assinanteController.delete(req, res))  // Delete by ID
router.route('/update').put((req, res) => assinanteController.update(req, res))         // Update by Object(ID)

module.exports = router