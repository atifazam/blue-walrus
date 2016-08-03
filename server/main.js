const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config.dev');
var bodyParser = require('body-parser');

const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', function() {
  console.log("Connected to MongoDB...");
  mongoose.connection.db.dropDatabase();
});

// router for the API
var router = express.Router();

// call routers in from posts router
require('./routes/posts.js')(router);

// all of our routes will be prefixed with /api
app.use('/api', router);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('devServer is running at http://localhost:3000/');
});
