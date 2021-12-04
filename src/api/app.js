const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => res.status(200).send('olá mundo'));

module.exports = app;
