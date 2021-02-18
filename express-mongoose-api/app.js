const express = require('express')
const bodyParser = require('body-parser')


const db = require('./db')
const animalRouter = require('./routes/animal-router')

const app = express()
const Port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', animalRouter)

app.listen(Port, () => console.log(`Server running on port ${Port}`))