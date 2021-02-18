const mongoose = require('mongoose')
const mongoDB = 'CONNECT MONGOOSE LINKS ROOT AND PASSWORD';
mongoose
    .connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db