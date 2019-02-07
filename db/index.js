const mongoose = require('mongoose');

let db = mongoose.connect("mongodb://localhost:27017/picturesDB", { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err, 'done fuckked up -- mongoose.connect');
  } else {
    console.log('connected to the mongo picturesDB database');
  }
});



module.exports.db = db;