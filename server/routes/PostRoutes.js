/* jshint node: true */
'use strict';
var _ = require('lodash');

module.exports = function (app, es) {

  var Post = require('../models/Post.js')(es);

  // GET /posts
  app.get('/posts', function (req, res, next) {
    Post
      .find()
      .then(
        function success (data) {
          res.send(data);
          next();
        },
        function error (err) {
          next(err);
        }
      );
  });

  // GET /post
  app.get('/post/:id', function (req, res, next) {
    Post
      .findOne(req.params.id)
      .then(
        function (data) {
          res.send(data);
          next();
        }, function (err) {
          next(err);
        }
      );
  });

  // POST /posts
  app.post('/posts', function (req, res, next) {
    Post
      .create(req.body)
      .then(
        function (data) {
          res.send(data);
          next();
        }, 
        function (err) {
          next(err);
        }
      );
  });
};