const { validationResult } = require('express-validator');
const HttpError = require('../../middlewares/http-error');
const Food = require('../food/foodModel')
const Cart = require('./cartModel')

const addToCart = async (req, res, next) => {


    const food_id = req.params.food_id
    const cart_id = req.params.cart_id


    let existingCart, existingMenuItem;

    try {
        existingCart = await Cart.findOne({ _id: cart_id })
    } catch (err) {
        return next(new HttpError('Unable to find Cart', 500))
    }

    try {
        existingMenuItem = await Food.findOne({ _id: food_id })
    } catch (err) {
        return next(new HttpError('Unable to find item', 500))
    }

    if (!existingCart || !existingMenuItem) {
        return next(new HttpError('Invalid Inputs Provided', 500))
    }

    existingCart.food_id.push(food_id)

    try {
        await existingCart.save()

    } catch (err) {
        console.log(err)
        return next(new HttpError('Unable to save cart', 500))
    }

    res.status(200).json({ cart: existingCart.toObject({ getters: true }) })
}
const removeFromCart = async (req, res, next) => {


    const food_id = req.params.food_id
    const cart_id = req.params.cart_id


    let existingCart, existingMenuItem;

    try {
        existingCart = await Cart.findOne({ _id: cart_id })
    } catch (err) {
        return next(new HttpError('Unable to find Cart', 500))
    }

    try {
        existingMenuItem = await Food.findOne({ _id: food_id })
    } catch (err) {
        return next(new HttpError('Unable to find item', 500))
    }

    if (!existingCart || !existingMenuItem) {
        return next(new HttpError('Invalid Inputs Provided', 500))
    }

    existingCart.food_id.pull(food_id)

    try {
        await existingCart.save()

    } catch (err) {
        console.log(err)
        return next(new HttpError('Unable to save cart', 500))
    }

    res.status(200).json({ cart: existingCart.toObject({ getters: true }) })
}

module.exports.addToCart = addToCart
module.exports.removeFromCart = removeFromCart
