const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    title: { required: true, type: String },
    description: { required: true, type: String },
    image: { required: true, type: String },
    category: { required: true, type: String },
    food_type: { required: true, type: String, enum: ['veg', 'non-veg', 'vegan'], default: 'veg' },
    price: { required: true, type: Number }
})


module.exports = mongoose.model('Food', foodSchema)