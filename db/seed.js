// Load the SDK and UUID
var AWS = require('aws-sdk');
// var uuid = require('uuid');
let db = require('./index');



let myBucket = new AWS.S3();
let bucketName = 'picture-service-fec-bucket';
let exampleParams = {
  Bucket: "picture-service-fec-bucket",
  Key: "Barred+spiral+galaxy+NGC+6217.jpg",
  Prefix: "testFolder/"
}

function findObjectsInTestFolder(params, callback) {
  myBucket.listObjects(params, (err, data) => {
    if (err) {
      console.log(err, ' error in findObjectsInTestFolder');
      callback(err);
    } else {
      // console.log(data, ' data in findObjectsInTestFolder');
      callback(data);
    }
  });
}
function seedArray(data, index) {
  data.Contents.forEach((item) => {
    console.log('this is the data.Contents item ---> ', item);
    if (item.Key[item.Key.length - 1] !== '/') {
      let title = item.Key;
      let strTemplate = `https://${bucketName}.s3.amazonaws.com/${title}`;
      let id = index
      db.seedDatabase(strTemplate, title, id);
    }
  });
}
function find100Folders(callback) {
  for (let i = 0; i <= 100; i++) {
    let currParams = {
      Bucket: "picture-service-fec-bucket",
      Prefix: "folder" + i + "/"
    }
    findObjectsInTestFolder(currParams, (data) => {
      callback(data, i);
    });
  }
}
find100Folders(seedArray);
// myBucket.listObjects({ Bucket: 'picture-service-fec-bucket' }, (err, data) => {
//   if (err) {
//     console.log(err, 'you have an error in .listObjects');
//   } else {
//     console.log(Array.isArray(data.Contents));
//     console.log('data.Contents', data.Contents);

//     data.Contents.forEach((item, index) => {
//       let title = item.Key;
//       let strTemplate = `https://${bucketName}.s3.amazonaws.com/${title}`;
//       let id = index
//       console.log(item);
//       db.seedDatabase(strTemplate, title, id);
//       // add the currentTemplate to the database as the URL
//     });
//   }
// });



module.exports.findObjectsInTestFolder = findObjectsInTestFolder;