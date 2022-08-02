const express = require('express')
const { check } = require('express-validator')
const food_controller = require('./foodController')

const router = express.Router()

router.post('/createNewItem', [
    check('title').isLength({ min: 3 }),
    check('desciption').isLength({ min: 10 }),
    check('image').isLength({ min: 3 }),
    check('category').isLength({ min: 3 }),
    check('type').isLength({ min: 3 }),
    check('price').not().isEmpty()
],
    food_controller.createNewItem
)

router.get('/', food_controller.getMenu)

module.exports = router