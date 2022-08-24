const jwt = require('jsonwebtoken');
const HttpError = require('./http-error');

module.exports.checkAuth = (req, res, next) => {
    let token;
    try {
        token = req.headers.authorization.split(' ')[1]
        if (!token) {
            throw new Error('Authentication Failed! ')
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)
        req.userData = { _id: decodedToken._id }
        next()

    } catch (err) {
        return next(new HttpError('Authentication Failed! ', 401))
    }
}