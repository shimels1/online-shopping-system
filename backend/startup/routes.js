const user = require('../routes/Users');
const auth = require('../routes/auth');
const item = require('../routes/item');
const order = require('../routes/order')
var bodyParser = require('body-parser');

var bodyParser = require('body-parser');

const express = require('express');
var bodyParser = require('body-parser');

var cors = require('cors');


module.exports = function (app) {
    
// app.use(cors());
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));

    app.use('/api/user', user);
    app.use('/api/item', item);
    app.use('/api/auth', auth);
    app.use('/api/order', order);
}
