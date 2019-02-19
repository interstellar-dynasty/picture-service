require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
console.log(process.env.DBPASSWORD);
// replace the uri string with your connection string.
const uri = `mongodb+srv://HandsomeDose:${process.env.DBPASSWORD}@fecamazonpicturedatabase-bcucz.mongodb.net/test?retryWrites=true`
MongoClient.connect(uri, function (err, client) {
  if (err) {
    return console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
  }
  console.log('Connected...');
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

