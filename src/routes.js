const express = require('express')
const routes = express.Router()

// CONTROLLERS
const Product = require('./constrollers/ProductController')

// ROTAS
routes.get('/products', Product.index)
routes.post('/products', Product.store)
routes.get('/product/:id', Product.show)
routes.put('/product/:id', Product.update)
routes.delete('/product/:id', Product.delete)

module.exports = routes