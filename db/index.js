const mongoose = require('mongoose');
let Schema = mongoose.Schema;

<<<<<<< HEAD
=======

>>>>>>> 602380c35428e2c718fa389007b0e154f1fe2274
let pictureSchema = new Schema({
  url: { type: String, unique: true },
  title: String
});

let Picture = mongoose.model('Picture', pictureSchema);

let db = mongoose.connect("mongodb://localhost:27017/picturesDB", { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err, 'done fuckked up -- mongoose.connect');
  } else {
    console.log('connected to the mongo picturesDB database');
  }
});
function randomGenerator(callback) {
  Picture.count().exec(function (err, count) {
    if (err) {
      console.log(err, ' err in randomGenerator part1');
      return err;
    }
    var random = Math.floor(Math.random() * count);

    Picture.findOne().skip(random).exec(
      function (err, result) {
        if (err) {
          console.log(err, ' err in randomGenerator part2');
        } else {
          callback(result);
        }
        // result is random 
      });
  });
}

function seedDatabase(url, title) {
  let currSchema = new Picture({
    url: url,
    title: title
  });
  currSchema.save((err) => {
    if (err) {
      console.log(err, ' err in seedDatabase');
    } else {
      console.log(`saved ${currSchema} to the database`);
    }
  })
}
module.exports.randomGenerator = randomGenerator;
module.exports.seedDatabase = seedDatabase;
module.exports.db = db;

<<<<<<< HEAD
=======
module.exports.seedDatabase = seedDatabase;
module.exports.db = db;
>>>>>>> 602380c35428e2c718fa389007b0e154f1fe2274
/*
Stack overflow example to access the bucket
https://stackoverflow.com/questions/30726079/aws-s3-object-listing

var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: 'mykey', secretAccessKey: 'mysecret', region: 'myregion'});
var s3 = new AWS.S3();

var params = {
 Bucket: 'mystore.in',
 Delimiter: '/',
 Prefix: 's/5469b2f5b4292d22522e84e0/ms.files/'
}

s3.listObjects(params, function (err, data) {
 if(err)throw err;
 console.log(data);
});
*/