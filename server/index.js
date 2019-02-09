const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3030;
const db = require("../db/index.js");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/random', (req, res) => {
  db.randomGenerator(result => {
    console.log(result.url);
  })
  res.send('YOU MADE IT');
  console.log(db);
  // res.send(db.pictures.aggregate([{ $sample: { size: 1 } }]));
  console.log('inside the get request');
});


app.listen(port, () => {
  console.log('Now listening on port ', port);
})