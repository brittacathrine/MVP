require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
// const { models } = require('../database');

const app = express();

app.use(bodyParser.json()); // ?
app.use(bodyParser.urlencoded({extended: true})); // ?

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(morgan('dev'));

// ${req.body.station}
app.get('/noaa', (req, res) => {
  fetch(`https://www.ndbc.noaa.gov/data/realtime2/WPOW1.txt`)
    .then((res) => res.text())
    .then(data => {
      res.send(data)
    })
    .catch(err => console.log(err));
})

// app.post('/login', (req, res) => {
//   models.save(req.body)
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
