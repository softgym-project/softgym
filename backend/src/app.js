const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(bodyparser.json());
app.use(cors());
app.use(
    bodyparser.urlencoded({
        extended: true
    })
);
app.use(express.json());
app.use(morgan('dev'));

process.env.SECRET_KEY = 'gympotencial';

// end points
app.use('/api/account', require('./routes/users.routes'));
<<<<<<< HEAD
app.use('/api/roles', require('./routes/roles.routes'));
app.use('/api/products', require('./routes/products.routes'));
=======
app.use('/api/rols', require('./routes/roles.routes'));

>>>>>>> d1022263e9effd00a1bf6f95294b85f81e26ed3a
module.exports = app;