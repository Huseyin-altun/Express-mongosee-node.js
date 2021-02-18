const express = require('express')

const AnimalCntrl = require('../controllers/animal-cntrl')

const router = express.Router()

router.post('/animal', AnimalCntrl.createAnimal)
router.put('/animal/:id', AnimalCntrl.updateAnimal)
router.delete('/animal/:id', AnimalCntrl.deleteAnimal)
router.get('/animal/:id', AnimalCntrl.getAnimalById)
router.get('/animals', AnimalCntrl.getAnimals)

module.exports = router