const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const HttpError = require('../http-error');
const Food = require('./foodModel');

const getMenu = async (req, res, next) => {
    const data = Food.find({})

    return res.status(200).json({
        data
    })
}

const createNewItem = async (req, res, data) => {
    const errors = validationResult(req.body)

    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid inputs passed , please check your Data ', 422))
    }

    const { title, description, image, category, type, price } = req.body

    let existingFood;

    try {
        existingFood = Food.findOne({ title })
    } catch (err) {
        const error = new HttpError('Something went wrong', 500)
        return next(error)
    }

    if (existingFood) {
        const error = new HttpError('This food is already in the menu', 500)
        return next(error)
    }

    const new_item = new Food({
        title,
        description,
        image,
        category,
        type,
        price
    })

    try {
        await new_item.save()
    } catch (err) {
        return next(new HttpError('Failed to create new item', 500))
    }

    return res.status(201).json({ user: createdUser.toObject({ getters: true }) })
}

module.exports.createNewItem = createNewItem
module.exports.getMenu = getMenu