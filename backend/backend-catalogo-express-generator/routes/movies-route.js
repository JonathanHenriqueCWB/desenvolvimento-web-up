
const MovieController = require('../controllers/movies-controllers')
const express = require('express')
const router = express.Router()

router.get('/', MovieController.lista)

router.post('/create', (req, res) => {
    console.log(req.body.titulo)
})

router.put('/update', MovieController.update)
router.delete('/delete/:id', MovieController.delete)

module.exports = router
