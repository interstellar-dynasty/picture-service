const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3030;
const db = require("../db/index.js");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/test', (req, res) => {
  console.log('inside the get request');
});


app.listen(port, () => {
  console.log('Now listening on port ', port);
})