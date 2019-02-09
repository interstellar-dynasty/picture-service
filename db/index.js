const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let pictureSchema = new Schema({
  url: String,
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