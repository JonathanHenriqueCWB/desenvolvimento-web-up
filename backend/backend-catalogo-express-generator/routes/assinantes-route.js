const AssintesController = require('../controllers/assinantes-controlers')
const express = require('express')
const router = express.Router()
const multer = require('multer')

router.get('/', AssintesController.lista)
router.get('/:id', AssintesController.listaPorId)
router.post('/create', AssintesController.create)
router.put('/update', AssintesController.update)
router.delete('/delete/:id', AssintesController.delete)

const upload = multer({dest: 'uploads'})
router.post('/upload', upload.single('file'), AssintesController.upload)

module.exports = router