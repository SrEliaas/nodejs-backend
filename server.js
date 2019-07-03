const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

// START APP
const app = express()
app.use(express.json())
app.use(cors())

// MONGODB
mongoose.connect('mongodb://localhost/nodeapi', { useNewUrlParser: true })
requireDir('./src/models')

// Rota
app.use('/', require('./src/routes'))

const port = process.env.PORT || 3333
app.listen(port, () => {
    console.log('SERVIDOR ONLINE NA PORTA: ' + port)
})