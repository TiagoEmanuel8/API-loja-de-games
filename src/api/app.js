require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
// const { resolve } = require('path');
const router = require('../routes');

// const uploadPath = resolve(__dirname, '..', 'images');

const app = express();
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: process.env.BASE_CLIENT || 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   }),
// );

// app.use('/', (req, res) => res.send('funcionou'))
app.use('/users', router.user);
app.use('/login', router.login);
app.use('/products', router.product);

module.exports = app;
