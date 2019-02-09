// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('uuid');
let db = require('./index');

let myBucket = new AWS.S3();
let bucketName = 'picture-service-fec-bucket';
myBucket.listObjects({ Bucket: 'picture-service-fec-bucket' }, (err, data) => {
  if (err) {
    console.log(err, 'you have an error in .listObjects');
  } else {
    // console.log(Array.isArray(data.Contents));
    data.Contents.forEach(item => {
      let currKey = item.Key;
      let strTemplate = `https://${bucketName}.s3.amazonaws.com/${currKey}`;
      console.log(item);
      db.seedDatabase(strTemplate, currKey);
      //add the currentTemplate to the database as the URL
    });
  }
});
