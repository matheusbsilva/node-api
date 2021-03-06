const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// Database config
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log("Could not connect to the database. Exiting now...")
  process.exit();
})

app.get('/', (req, res) => {
  res.json({"message": "hello world!!"});
});

if(!module.parent){
  app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
  });
}

module.exports = app;
