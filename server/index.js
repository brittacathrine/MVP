require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();

app.use(bodyParser.json()); // ?
app.use(bodyParser.urlencoded({extended: true})); // ?

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(morgan('dev'));

// app.post()

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
