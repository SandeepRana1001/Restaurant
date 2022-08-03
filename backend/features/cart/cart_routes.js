const express = require('express')
const { check } = require('express-validator')
const cartController = require('./cartController')

const router = express.Router()

router.patch('/addToCart/:food_id/:cart_id', cartController.addToCart)

router.delete('/removeFromCart/:food_id/:cart_id', cartController.removeFromCart)

module.exports = router