/* jshint node: true */
'use strict';

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

  // PUT /post/:id
  app.put('/post/:id', function (req, res, next) {
    Post
      .update(req.params.id, req.body)
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
};