const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const cookieparser = require('cookie-parser');
const HttpError = require('./middlewares/http-error');
const user_routes = require('./features/user/user_routes');
const food_routes = require('./features/food/food_routes');
const cart_routes = require('./features/cart/cart_routes');
const refresh_routes = require('./features/refreshToken/refreshToken');

require('dotenv').config()

const app = express()

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
});

app.use(cookieparser());
app.use(bodyParser.json())

app.use('/api/users', user_routes)
app.use('/api/food', food_routes)
app.use('/api/cart', cart_routes)
app.use('/api/refresh', refresh_routes)



app.use((req, res, next) => {
    return next(new HttpError('Could not find the route. ', 404))
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error occurred! ' });
});

const url = `${process.env.MONGO_URI}`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('App Started')
        app.listen(5000)
    })
    .catch((err) => console.log(err))