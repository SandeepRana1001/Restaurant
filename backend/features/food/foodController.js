const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const HttpError = require('../../middlewares/http-error');
const Food = require('./foodModel');
const mongoose = require('mongoose');

const getMenu = async (req, res, next) => {
    const data = await Food.find({})

    res.status(200).json({
        data
    })
}

const createNewItem = async (req, res, next) => {
    const errors = validationResult(req.body)

    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid inputs passed , please check your Data ', 422))
    }

    const { title, description, image, category, food_type, price } = req.body

    let existingFood;

    try {
        existingFood = await Food.findOne({ title })
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
        food_type,
        price
    })

    try {
        await new_item.save()
    } catch (err) {
        return next(new HttpError('Failed to create new item', 500))
    }

    res.status(201).json({ user: new_item.toObject({ getters: true }) })
}

const updateMenuItem = async (req, res, next) => {

    const { title, description, image, category, food_type, price } = req.body;
    const id = req.params.id

    let existingItem;

    try {
        existingItem = await Food.findOne({ _id: id })
    } catch (err) {
        return next(new HttpError('Unable to find the item', 422))
    }


    if (!existingItem) {
        return next(new HttpError('Item doesnot exists in our menu', 500))
    }


    existingItem.title = title.trim().length > 0 ? title : existingItem.title;
    existingItem.description = description.trim().length > 0 ? description : existingItem.description;
    existingItem.category = category.trim().length > 0 ? category : existingItem.category;
    existingItem.image = image.trim().length > 0 ? image : existingItem.image;
    existingItem.food_type = food_type.trim().length > 0 ? food_type : existingItem.food_type;
    existingItem.price = parseFloat(price) > 0 ? parseFloat(price) : existingItem.price;

    try {
        await existingItem.save();
    } catch (err) {
        return next(new HttpError('Unable To Save Data', 422))
    }

    res.status(202).json({ existingItem })

}

const deleteMenuItem = async (req, res, next) => {
    const id = req.params.id
    let existingItem;
    try {
        existingItem = await Food.findOne({ _id: id })
    } catch (err) {
        return next(new HttpError('Unable To Find The Data', 422))
    }
    if (!existingItem) {
        return next(new HttpError('This item doesnot exists in our menu', 500))
    }
    console.clear()
    console.log(existingItem)

    try {
        const sess = await mongoose.startSession()
        sess.startTransaction()
        await existingItem.remove({ session: sess })
        await sess.commitTransaction()

    } catch (err) {
        const error = new HttpError('Something went wrong. Cannot Remove Item' + err, 500)
        console.log(err)
        return next(error)
    }

    res.status(200).json({ messages: 'Deleted Menu Item' });
}

module.exports.createNewItem = createNewItem
module.exports.getMenu = getMenu
module.exports.updateMenuItem = updateMenuItem
module.exports.deleteMenuItem = deleteMenuItem
