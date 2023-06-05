const router = require('express').Router()
const movieController = require('../controllers/movieController')

router.route('/').get((req, res) => movieController.readAll(req, res))
router.route('/:id').get((req, res) => movieController.read(req, res))
router.route('/create').post((req, res) => movieController.create(req, res))
router.route('/delete/:id').delete((req, res) => movieController.delete(req, res))
router.route('/update').put((req, res) => movieController.update(req, res))

module.exports = router