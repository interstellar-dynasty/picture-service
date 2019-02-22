const mongoose = require('mongoose');
let Schema = mongoose.Schema;
require('dotenv').config();

let pictureSchema = new Schema({
  url: { type: String, unique: true },
  title: String,
  key: Number
});

let Picture = mongoose.model('Picture', pictureSchema);

let db = mongoose.connect(`mongodb+srv://HandsomeDose:${process.env.DBPASSWORD}@fecamazonpicturedatabase-bcucz.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err, 'done fuckked up -- mongoose.connect');
  } else {
    console.log('connected to the mongo picturesDB database');
  }
});

function findByGivenKey(key, callback) {
  let currKey = key;
  // let currTitle = 'folder' + key + '/';
  console.log('currKey', currKey);

  Picture.find(
    { key: currKey }
  )
    .then(data => {
      console.log(data, ' data from findByGivenKey');
      callback(data);
    })
    .catch(err => {
      console.log(err, ' error in findByGivenKey');
      callback(err);
    });
}

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

function seedDatabase(url, title, id) {
  console.log('inside seedDatabase')
  let currSchema = new Picture({
    url: url,
    title: title,
    key: id
  });
  currSchema.save((err) => {
    if (err) {
      console.log(err, ' err in seedDatabase');
    } else {
      console.log(`saved ${currSchema} to the database`);
    }
  })
}
module.exports.findByGivenKey = findByGivenKey;
module.exports.randomGenerator = randomGenerator;
module.exports.seedDatabase = seedDatabase;
module.exports.db = db;

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