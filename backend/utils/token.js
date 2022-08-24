const jwt = require('jsonwebtoken')
const getNewToken = (param, expiresIn) => {
    const token = jwt.sign(param, process.env.SECRET_TOKEN, { expiresIn })
    return token
}

exports.getNewToken = getNewToken


