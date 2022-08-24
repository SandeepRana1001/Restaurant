const HttpError = require('../../middlewares/http-error');
const jwt = require('jsonwebtoken')


const express = require('express');
const router = express.Router();

router.post('/refreshToken', (req, res, next) => {

    let token;
    try {
        token = req.headers.authorization.split(' ')[1]
        if (!token) {
            throw new Error('Authentication Failed! ')
        }
        console.log(token)
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN)
        req.userData = { _id: decodedToken._id }
        next()

    } catch (err) {
        console.clear()
        console.log(err)
        return next(new HttpError('Authentication Failed! ', 401))
    }


    // if (req.cookies?.jwt) {

    //     // Destructuring refreshToken from cookie
    //     const refreshToken = req.cookies.jwt;

    //     // Verifying refresh token
    //     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
    //         (err, decoded) => {
    //             if (err) {

    //                 // Wrong Refesh Token
    //                 return res.status(406).json({ message: 'Unauthorized' });
    //             }
    //             else {
    //                 // Correct token we send a new access token
    //                 // const accessToken = jwt.sign({
    //                 //     username: userCredentials.username,
    //                 //     email: userCredentials.email
    //                 // }, process.env.ACCESS_TOKEN_SECRET, {
    //                 //     expiresIn: '10m'
    //                 // });
    //                 // return res.json({ accessToken });
    //             }
    //         })
    // } else {
    //     return res.status(406).json({ message: 'Unauthorized' });
    // }
})

module.exports = router