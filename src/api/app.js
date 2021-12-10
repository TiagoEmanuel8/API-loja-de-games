require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { resolve } = require('path');
// const router = require('../routes');

// const uploadPath = resolve(__dirname, '..', 'images');

const app = express();
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: process.env.BASE_CLIENT || 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   }),
// );

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
