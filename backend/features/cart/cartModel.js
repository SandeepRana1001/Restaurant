const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    food_id: [{ type: Schema.Types.ObjectId, ref: 'Food', unique: true }],
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true }
})



module.exports = mongoose.model('Cart', cartSchema)