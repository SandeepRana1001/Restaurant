const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const user_routes = require('./features/user/user_routes');
const food_routes = require('./features/food/food_routes')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/users', user_routes)
app.use('/api/food', food_routes)

app.use((req, res, body) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknown error occurred! ' });
})

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