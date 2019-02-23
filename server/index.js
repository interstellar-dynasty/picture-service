const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3030;
const db = require("../db/index.js");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/id/:key', (req, res) => {
  let key = req.params.key;
  console.log(`${key} is the key`);
  db.findByGivenKey(key, (result => {
    console.log('result', result)
    res.send(result);
  }));
});

app.get('/random', (req, res) => {
  db.randomGenerator(result => {
    console.log(result.url);
    res.send(result);
  });
  // console.log('req ', req, ' there was an error in get /random');
  // res.send('there was an error in get /random');
  // console.log(db);
  // res.send(db.pictures.aggregate([{ $sample: { size: 1 } }]));
  // console.log('inside the get request');
});

app.listen(port, () => {
  console.log('Now listening on port ', port);
})