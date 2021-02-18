const Animal = require('../models/animal-model')

createAnimal = (req, res) => {
    

    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'Must be an animal',
        })
    }

    const animal = new Animal(req.body)

    if (!animal) {
        return res.status(400).json({ success: false, error: err })
    }

    animal
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: animal._id,
                message: 'Animal created database!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Animal not created database !',
            })
        })
}

updateAnimal = async (req, res) => {
    

    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'Not POST failed ',
        })
    }

    Animal.findOne({ _id: req.params.id }, (err, animal) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Animal not found',
            })
        }
        animal.genus_name = req.body.genus_name
        animal.name = req.body.name
        animal.age = req.body.age
        animal
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: animal._id,
                    message: 'Animal update',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Animal not updated',
                })
            })
    })
}

deleteAnimal = async (req, res) => {
    await Animal.findOneAndDelete({ _id: req.params.id }, (err, animal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!animal) {
            return res
                .status(404)
                .json({ success: false, error: `Animal not found :)` })
        }

        return res.status(200).json({ success: true, data: animal })
    }).catch(err => console.log(err))
}

getAnimalById = async (req, res) => {
    await Animal.findOne({ _id: req.params.id }, (err, animal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!animal) {
            return res
                .status(404)
                .json({ success: false, error: `Animal not found` })
        }
        return res.status(200).json({ success: true, data: animal })
    }).catch(err => console.log(err))
}

getAnimals = async (req, res) => {
    await Animal.find({}, (err, animal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!animal.length) {
            return res
                .status(404)
                .json({ success: false, error: `Animal not found` })
        }
        return res.status(200).json({ success: true, data: animal })
    }).catch(err => console.log(err))
}

module.exports = {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimalById,
}