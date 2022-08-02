const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    title: { required: true, type: String, unique: true },
    description: { required: true, type: String },
    image: { required: true, type: String },
    category: { required: true, type: String },
    type: { required: true, "enum": ["veg", "non-veg", "vegan"] },
    price: { required: true, type: Number }
})

foodSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Food', foodSchema)