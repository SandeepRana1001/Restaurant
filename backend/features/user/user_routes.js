const express = require('express')
const { check } = require('express-validator')
const userController = require('./userController')

const router = express.Router()

router.post('/createAccount',
    [
        check('name').not().isEmpty(),
        check('email').isEmail(),
        check('password').isLength({ min: 6 })
    ]
    ,
    userController.createAccount
)


router.post('/signIn'
    ,
    [
        check('email').isEmail(),
        check('password').not().isEmpty(),
    ]
    ,
    userController.signIn
)
module.exports = router