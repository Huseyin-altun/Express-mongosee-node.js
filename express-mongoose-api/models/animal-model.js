const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Animal= new Schema(
    {
        genus_name: { type: String, required: true },
        name: { type: String, required: true },
        age: { type: Number, required: true },
    },
    
)

module.exports = mongoose.model('animals', Animal)
