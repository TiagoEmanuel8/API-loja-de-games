require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const router = require('../routes');
const message = require('../utils/message.json');

const uploadPath = resolve(__dirname, '..', 'images');

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.BASE_CLIENT || 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.get('/', (_req, res) => res.status(200).json(message))
app.use('/users', router.user);
app.use('/login', router.login);
app.use('/products', router.product);
app.use('/sales', router.sale);
app.use('/images', express.static(`${uploadPath}`));

module.exports = app;
